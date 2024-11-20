package server

import (
	"fmt"
	"strconv"
	"sync"
	"time"

	bleve "github.com/blevesearch/bleve/v2"
	"github.com/romshark/demo-islands/domain"
)

// Store is an in-memory state of the world simulation.
type Store struct {
	lock           sync.Mutex
	orderIDCounter uint64
	orders         map[string]domain.ShippingDetails
	searchIndex    bleve.Index
}

func NewStore() *Store {
	// Define the field mapping
	textFieldMapping := bleve.NewTextFieldMapping()
	textFieldMapping.Analyzer = "standard" // Default analyzer

	// Define the document mapping
	docMapping := bleve.NewDocumentMapping()

	// Add fields for fuzzy search
	docMapping.AddFieldMappingsAt("CompanyName", textFieldMapping)
	docMapping.AddFieldMappingsAt("FirstName", textFieldMapping)
	docMapping.AddFieldMappingsAt("LastName", textFieldMapping)
	docMapping.AddFieldMappingsAt("Email", textFieldMapping)
	docMapping.AddFieldMappingsAt("DestinationAddress", textFieldMapping)
	docMapping.AddFieldMappingsAt("Phone", textFieldMapping)
	docMapping.AddFieldMappingsAt("SpecialNotes", textFieldMapping)

	// Create the index mapping
	indexMapping := bleve.NewIndexMapping()
	indexMapping.DefaultMapping = docMapping

	// Create an in-memory index
	searchIndex, err := bleve.NewMemOnly(indexMapping)
	if err != nil {
		panic(fmt.Errorf("creating in-memory bleve index: %w", err))
	}
	return &Store{
		searchIndex: searchIndex,
		orders:      make(map[string]domain.ShippingDetails),
	}
}

// GetAllOrders returns all currently stored orders.
func (s *Store) GetAllOrders() ([]domain.ShippingDetails, error) {
	s.lock.Lock()
	defer s.lock.Unlock()

	results := make([]domain.ShippingDetails, 0, len(s.orders))
	for _, o := range s.orders {
		results = append(results, o)
	}
	return results, nil
}

// OrderBySearchQuery finds orders by generic search query with fuzzy matching.
func (s *Store) OrderBySearchQuery(
	query string, limit int,
) ([]domain.ShippingDetails, error) {
	s.lock.Lock()
	defer s.lock.Unlock()

	// Use a fuzzy query for approximate matches.
	q := bleve.NewFuzzyQuery(query)
	// Allow small typos or approximate matches.
	q.SetFuzziness(2)

	searchRequest := bleve.NewSearchRequest(q)
	searchRequest.Size = limit
	r, err := s.searchIndex.Search(searchRequest)
	if err != nil {
		return nil, err
	}

	results := make([]domain.ShippingDetails, len(r.Hits))
	for i, hit := range r.Hits {
		if order, ok := s.orders[hit.ID]; ok {
			results[i] = order
		}
	}
	return results, nil
}

// NewOrder adds a new order and indexes it for search.
func (s *Store) NewOrder(order domain.ShippingDetails) (id string, err error) {
	s.lock.Lock()
	defer s.lock.Unlock()

	// Generate a new unique ID for the order.
	s.orderIDCounter++
	id = strconv.FormatUint(s.orderIDCounter, 36)

	orderIndexData := map[string]interface{}{
		"CompanyName": order.CompanyName.String(),
		"FirstName":   order.ContactFirstName.String(),
		"LastName":    order.ContactLastName.String(),
		"Email":       order.ContactEmail.String(),
		"DestinationAddress": fmt.Sprintf(
			"%s | %s | %s",
			order.DestinationAddress.Country.String(),
			order.DestinationAddress.City.String(),
			order.DestinationAddress.PostalCode.String(),
		),
		"Phone":           order.ContactPhone.String(),
		"SpecialNotes":    order.SpecialNotes.String(),
		"Express":         order.Express,
		"Due":             order.Due.Format(time.RFC3339),
		"ShippingCompany": order.ShippingCompany.String(),
	}
	if err := s.searchIndex.Index(id, orderIndexData); err != nil {
		return "", err
	}

	s.orders[id] = order
	return id, nil
}

func (s *Store) RemoveOrder(id string) error {
	s.lock.Lock()
	defer s.lock.Unlock()

	delete(s.orders, id)
	return s.searchIndex.Delete(id)
}
