package rand

import (
	"math/rand/v2"
	"strings"
	"time"
)

// Item returns a random item from s (or zero value if empty).
func Item[T any](s []T) T {
	if len(s) == 0 {
		var zero T
		return zero
	}
	return s[rand.IntN(len(s))]
}

// Dur returns a random duration between min and max.
func Dur(min, max time.Duration) time.Duration {
	if min > max {
		min, max = max, min
	}
	diff := max - min
	return min + time.Duration(rand.Int64N(int64(diff)))
}

// String returns a random string from charset with len between minLen and maxLen.
func String(charset string, minLen, maxLen int) string {
	if minLen > maxLen {
		return ""
	}
	l := rand.IntN(maxLen-minLen+1) + minLen
	var b strings.Builder
	b.Grow(l)
	for range l {
		b.WriteByte(charset[rand.IntN(len(charset))])
	}
	return b.String()
}
