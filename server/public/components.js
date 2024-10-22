var r1=Object.defineProperty;var o1=(r,o)=>{for(var i in o)r1(r,i,{get:o[i],enumerable:!0,configurable:!0,set:(a)=>o[i]=()=>a})};var s0=function(r,o,i,a){var d=arguments.length,n=d<3?o:a===null?a=Object.getOwnPropertyDescriptor(o,i):a,b;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(r,o,i,a);else for(var g=r.length-1;g>=0;g--)if(b=r[g])n=(d<3?b(n):d>3?b(o,i,n):b(o,i))||n;return d>3&&n&&Object.defineProperty(o,i,n),n};var b0=(r,o)=>{if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(r,o)};var W0=globalThis,L0=W0.ShadowRoot&&(W0.ShadyCSS===void 0||W0.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xi=Symbol(),da=new WeakMap;class M0{constructor(r,o,i){if(this._$cssResult$=!0,i!==xi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=o}get styleSheet(){let r=this.o,o=this.t;if(L0&&r===void 0){let i=o!==void 0&&o.length===1;i&&(r=da.get(o)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),i&&da.set(o,r))}return r}toString(){return this.cssText}}var na=(r)=>new M0(typeof r=="string"?r:r+"",void 0,xi),m=(r,...o)=>{let i=r.length===1?r[0]:o.reduce((a,d,n)=>a+((b)=>{if(b._$cssResult$===!0)return b.cssText;if(typeof b=="number")return b;throw Error("Value passed to 'css' function must be a 'css' function result: "+b+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(d)+r[n+1],r[0]);return new M0(i,r,xi)},wi=(r,o)=>{if(L0)r.adoptedStyleSheets=o.map((i)=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of o){let a=document.createElement("style"),d=W0.litNonce;d!==void 0&&a.setAttribute("nonce",d),a.textContent=i.cssText,r.appendChild(a)}},V0=L0?(r)=>r:(r)=>r instanceof CSSStyleSheet?((o)=>{let i="";for(let a of o.cssRules)i+=a.cssText;return na(i)})(r):r;var{is:i1,defineProperty:a1,getOwnPropertyDescriptor:f1,getOwnPropertyNames:d1,getOwnPropertySymbols:n1,getPrototypeOf:s1}=Object,E0=globalThis,sa=E0.trustedTypes,b1=sa?sa.emptyScript:"",g1=E0.reactiveElementPolyfillSupport,g0=(r,o)=>r,zo={toAttribute(r,o){switch(o){case Boolean:r=r?b1:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,o){let i=r;switch(o){case Boolean:i=r!==null;break;case Number:i=r===null?null:Number(r);break;case Object:case Array:try{i=JSON.parse(r)}catch(a){i=null}}return i}},D0=(r,o)=>!i1(r,o),ba={attribute:!0,type:String,converter:zo,reflect:!1,hasChanged:D0};Symbol.metadata??=Symbol("metadata"),E0.litPropertyMetadata??=new WeakMap;class wo extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,o=ba){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(r,o),!o.noAccessor){let i=Symbol(),a=this.getPropertyDescriptor(r,i,o);a!==void 0&&a1(this.prototype,r,a)}}static getPropertyDescriptor(r,o,i){let{get:a,set:d}=f1(this.prototype,r)??{get(){return this[o]},set(n){this[o]=n}};return{get(){return a?.call(this)},set(n){let b=a?.call(this);d.call(this,n),this.requestUpdate(r,b,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??ba}static _$Ei(){if(this.hasOwnProperty(g0("elementProperties")))return;let r=s1(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(g0("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g0("properties"))){let o=this.properties,i=[...d1(o),...n1(o)];for(let a of i)this.createProperty(a,o[a])}let r=this[Symbol.metadata];if(r!==null){let o=litPropertyMetadata.get(r);if(o!==void 0)for(let[i,a]of o)this.elementProperties.set(i,a)}this._$Eh=new Map;for(let[o,i]of this.elementProperties){let a=this._$Eu(o,i);a!==void 0&&this._$Eh.set(a,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){let o=[];if(Array.isArray(r)){let i=new Set(r.flat(1/0).reverse());for(let a of i)o.unshift(V0(a))}else r!==void 0&&o.push(V0(r));return o}static _$Eu(r,o){let i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((r)=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((r)=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){let r=new Map,o=this.constructor.elementProperties;for(let i of o.keys())this.hasOwnProperty(i)&&(r.set(i,this[i]),delete this[i]);r.size>0&&(this._$Ep=r)}createRenderRoot(){let r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wi(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((r)=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach((r)=>r.hostDisconnected?.())}attributeChangedCallback(r,o,i){this._$AK(r,i)}_$EC(r,o){let i=this.constructor.elementProperties.get(r),a=this.constructor._$Eu(r,i);if(a!==void 0&&i.reflect===!0){let d=(i.converter?.toAttribute!==void 0?i.converter:zo).toAttribute(o,i.type);this._$Em=r,d==null?this.removeAttribute(a):this.setAttribute(a,d),this._$Em=null}}_$AK(r,o){let i=this.constructor,a=i._$Eh.get(r);if(a!==void 0&&this._$Em!==a){let d=i.getPropertyOptions(a),n=typeof d.converter=="function"?{fromAttribute:d.converter}:d.converter?.fromAttribute!==void 0?d.converter:zo;this._$Em=a,this[a]=n.fromAttribute(o,d.type),this._$Em=null}}requestUpdate(r,o,i){if(r!==void 0){if(i??=this.constructor.getPropertyOptions(r),!(i.hasChanged??D0)(this[r],o))return;this.P(r,o,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(r,o,i){this._$AL.has(r)||this._$AL.set(r,o),i.reflect===!0&&this._$Em!==r&&(this._$Ej??=new Set).add(r)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,d]of this._$Ep)this[a]=d;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[a,d]of i)d.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],d)}let r=!1,o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),this._$EO?.forEach((i)=>i.hostUpdate?.()),this.update(o)):this._$EU()}catch(i){throw r=!1,this._$EU(),i}r&&this._$AE(o)}willUpdate(r){}_$AE(r){this._$EO?.forEach((o)=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Ej&&=this._$Ej.forEach((o)=>this._$EC(o,this[o])),this._$EU()}updated(r){}firstUpdated(r){}}wo.elementStyles=[],wo.shadowRootOptions={mode:"open"},wo[g0("elementProperties")]=new Map,wo[g0("finalized")]=new Map,g1?.({ReactiveElement:wo}),(E0.reactiveElementVersions??=[]).push("2.0.4");var zi=globalThis,B0=zi.trustedTypes,ga=B0?B0.createPolicy("lit-html",{createHTML:(r)=>r}):void 0;var ho=`lit\$${Math.random().toFixed(9).slice(2)}\$`,va="?"+ho,l1=`<${va}>`,Ho=document,u0=()=>Ho.createComment(""),t0=(r)=>r===null||typeof r!="object"&&typeof r!="function",hi=Array.isArray,u1=(r)=>hi(r)||typeof r?.[Symbol.iterator]=="function";var l0=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,la=/-->/g,ua=/>/g,Ko=RegExp(`>|[ \t\n\f\r](?:([^\\s"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|\$)`,"g"),ta=/'/g,pa=/"/g,xa=/^(?:script|style|textarea|title)$/i,mi=(r)=>(o,...i)=>({_$litType$:r,strings:o,values:i}),v=mi(1),wa=mi(2),za=mi(3),vr=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),ca=new WeakMap,qo=Ho.createTreeWalker(Ho,129);function ha(r,o){if(!hi(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ga!==void 0?ga.createHTML(o):o}var t1=(r,o)=>{let i=r.length-1,a=[],d,n=o===2?"<svg>":o===3?"<math>":"",b=l0;for(let g=0;g<i;g++){let l=r[g],u,c,t=-1,p=0;for(;p<l.length&&(b.lastIndex=p,c=b.exec(l),c!==null);)p=b.lastIndex,b===l0?c[1]==="!--"?b=la:c[1]!==void 0?b=ua:c[2]!==void 0?(xa.test(c[2])&&(d=RegExp("</"+c[2],"g")),b=Ko):c[3]!==void 0&&(b=Ko):b===Ko?c[0]===">"?(b=d??l0,t=-1):c[1]===void 0?t=-2:(t=b.lastIndex-c[2].length,u=c[1],b=c[3]===void 0?Ko:c[3]==='"'?pa:ta):b===pa||b===ta?b=Ko:b===la||b===ua?b=l0:(b=Ko,d=void 0);let x=b===Ko&&r[g+1].startsWith("/>")?" ":"";n+=b===l0?l+l1:t>=0?(a.push(u),l.slice(0,t)+"$lit$"+l.slice(t)+ho+x):l+ho+(t===-2?g:x)}return[ha(r,n+(r[i]||"<?>")+(o===2?"</svg>":o===3?"</math>":"")),a]};class p0{constructor({strings:r,_$litType$:o},i){let a;this.parts=[];let d=0,n=0,b=r.length-1,g=this.parts,[l,u]=t1(r,o);if(this.el=p0.createElement(l,i),qo.currentNode=this.el.content,o===2||o===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(a=qo.nextNode())!==null&&g.length<b;){if(a.nodeType===1){if(a.hasAttributes())for(let c of a.getAttributeNames())if(c.endsWith("$lit$")){let t=u[n++],p=a.getAttribute(c).split(ho),x=/([.?@])?(.*)/.exec(t);g.push({type:1,index:d,name:x[2],strings:p,ctor:x[1]==="."?Qa:x[1]==="?"?$a:x[1]==="@"?ya:v0}),a.removeAttribute(c)}else c.startsWith(ho)&&(g.push({type:6,index:d}),a.removeAttribute(c));if(xa.test(a.tagName)){let c=a.textContent.split(ho),t=c.length-1;if(t>0){a.textContent=B0?B0.emptyScript:"";for(let p=0;p<t;p++)a.append(c[p],u0()),qo.nextNode(),g.push({type:2,index:++d});a.append(c[t],u0())}}}else if(a.nodeType===8)if(a.data===va)g.push({type:2,index:d});else{let c=-1;for(;(c=a.data.indexOf(ho,c+1))!==-1;)g.push({type:7,index:d}),c+=ho.length-1}d++}}static createElement(r,o){let i=Ho.createElement("template");return i.innerHTML=r,i}}function Io(r,o,i=r,a){if(o===vr)return o;let d=a!==void 0?i._$Co?.[a]:i._$Cl,n=t0(o)?void 0:o._$litDirective$;return d?.constructor!==n&&(d?._$AO?.(!1),n===void 0?d=void 0:(d=new n(r),d._$AT(r,i,a)),a!==void 0?(i._$Co??=[])[a]=d:i._$Cl=d),d!==void 0&&(o=Io(r,d._$AS(r,o.values),d,a)),o}class ma{constructor(r,o){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){let{el:{content:o},parts:i}=this._$AD,a=(r?.creationScope??Ho).importNode(o,!0);qo.currentNode=a;let d=qo.nextNode(),n=0,b=0,g=i[0];for(;g!==void 0;){if(n===g.index){let l;g.type===2?l=new c0(d,d.nextSibling,this,r):g.type===1?l=new g.ctor(d,g.name,g.strings,this,r):g.type===6&&(l=new Xa(d,this,r)),this._$AV.push(l),g=i[++b]}n!==g?.index&&(d=qo.nextNode(),n++)}return qo.currentNode=Ho,a}p(r){let o=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(r,i,o),o+=i.strings.length-2):i._$AI(r[o])),o++}}class c0{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,o,i,a){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=r,this._$AB=o,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode,o=this._$AM;return o!==void 0&&r?.nodeType===11&&(r=o.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,o=this){r=Io(this,r,o),t0(r)?r===j||r==null||r===""?(this._$AH!==j&&this._$AR(),this._$AH=j):r!==this._$AH&&r!==vr&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):u1(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==j&&t0(this._$AH)?this._$AA.nextSibling.data=r:this.T(Ho.createTextNode(r)),this._$AH=r}$(r){let{values:o,_$litType$:i}=r,a=typeof i=="number"?this._$AC(r):(i.el===void 0&&(i.el=p0.createElement(ha(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(o);else{let d=new ma(a,this),n=d.u(this.options);d.p(o),this.T(n),this._$AH=d}}_$AC(r){let o=ca.get(r.strings);return o===void 0&&ca.set(r.strings,o=new p0(r)),o}k(r){hi(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,i,a=0;for(let d of r)a===o.length?o.push(i=new c0(this.O(u0()),this.O(u0()),this,this.options)):i=o[a],i._$AI(d),a++;a<o.length&&(this._$AR(i&&i._$AB.nextSibling,a),o.length=a)}_$AR(r=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);r&&r!==this._$AB;){let i=r.nextSibling;r.remove(),r=i}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}}class v0{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,o,i,a,d){this.type=1,this._$AH=j,this._$AN=void 0,this.element=r,this.name=o,this._$AM=a,this.options=d,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(r,o=this,i,a){let d=this.strings,n=!1;if(d===void 0)r=Io(this,r,o,0),n=!t0(r)||r!==this._$AH&&r!==vr,n&&(this._$AH=r);else{let b=r,g,l;for(r=d[0],g=0;g<d.length-1;g++)l=Io(this,b[i+g],o,g),l===vr&&(l=this._$AH[g]),n||=!t0(l)||l!==this._$AH[g],l===j?r=j:r!==j&&(r+=(l??"")+d[g+1]),this._$AH[g]=l}n&&!a&&this.j(r)}j(r){r===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class Qa extends v0{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===j?void 0:r}}class $a extends v0{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==j)}}class ya extends v0{constructor(r,o,i,a,d){super(r,o,i,a,d),this.type=5}_$AI(r,o=this){if((r=Io(this,r,o,0)??j)===vr)return;let i=this._$AH,a=r===j&&i!==j||r.capture!==i.capture||r.once!==i.once||r.passive!==i.passive,d=r!==j&&(i===j||a);a&&this.element.removeEventListener(this.name,this,i),d&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class Xa{constructor(r,o,i){this.element=r,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(r){Io(this,r)}}var p1=zi.litHtmlPolyfillSupport;p1?.(p0,c0),(zi.litHtmlVersions??=[]).push("3.2.1");var Za=(r,o,i)=>{let a=i?.renderBefore??o,d=a._$litPart$;if(d===void 0){let n=i?.renderBefore??null;a._$litPart$=d=new c0(o.insertBefore(u0(),n),n,void 0,i??{})}return d._$AI(r),d};class bo extends wo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=Za(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return vr}}bo._$litElement$=!0,bo.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:bo});var c1=globalThis.litElementPolyfillSupport;c1?.({LitElement:bo});(globalThis.litElementVersions??=[]).push("4.1.1");var v1={attribute:!0,type:String,converter:zo,reflect:!1,hasChanged:D0},x1=(r=v1,o,i)=>{let{kind:a,metadata:d}=i,n=globalThis.litPropertyMetadata.get(d);if(n===void 0&&globalThis.litPropertyMetadata.set(d,n=new Map),n.set(i.name,r),a==="accessor"){let{name:b}=i;return{set(g){let l=o.get.call(this);o.set.call(this,g),this.requestUpdate(b,l,r)},init(g){return g!==void 0&&this.P(b,void 0,r),g}}}if(a==="setter"){let{name:b}=i;return function(g){let l=this[b];o.call(this,g),this.requestUpdate(b,l,r)}}throw Error("Unsupported decorator location: "+a)};function s(r){return(o,i)=>typeof i=="object"?x1(r,o,i):((a,d,n)=>{let b=d.hasOwnProperty(n);return d.constructor.createProperty(n,b?{...a,wrapped:!0}:a),b?Object.getOwnPropertyDescriptor(d,n):void 0})(r,o,i)}function J(r){return s({...r,state:!0,attribute:!1})}function ao(r){return(o,i)=>{let a=typeof o=="function"?o:o[i];Object.assign(a,r)}}var mo=(r,o,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof o!="object"&&Object.defineProperty(r,o,i),i);function $(r,o){return(i,a,d)=>{let n=(b)=>b.renderRoot?.querySelector(r)??null;if(o){let{get:b,set:g}=typeof a=="object"?i:d??(()=>{let l=Symbol();return{get(){return this[l]},set(u){this[l]=u}}})();return mo(i,a,{get(){let l=b.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&g.call(this,l)),l}})}return mo(i,a,{get(){return n(this)}})}}function ka(r){return(o,i)=>mo(o,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(r)??null}})}class P0 extends bo{constructor(){super(...arguments);this.code="CH";this.width=32;this.baseURL="https://flagcdn.com"}static styles=m`
    :host {
      display: inline-block;
      color: blue;
    }

    img {
      display: block;
      height: auto;
      box-shadow: 0 0 0.2rem 0px #00000069;
    }
  `;render(){let r=`${this.baseURL}/${this.code.toLowerCase()}.svg`;return v`
      <div>
        <img
          src="${r}"
          alt="Flag for country code ${this.code}"
          width="${this.width}"
          height="${this.height||"auto"}"
        />
      </div>
    `}}s0([s({type:String}),b0("design:type",String)],P0.prototype,"code",void 0),s0([s({type:Number}),b0("design:type",Number)],P0.prototype,"width",void 0),s0([s({type:Number,reflect:!0}),b0("design:type",Number)],P0.prototype,"height",void 0),s0([s({type:String}),b0("design:type",String)],P0.prototype,"baseURL",void 0);var{defineProperty:Ka,defineProperties:w1,getOwnPropertyDescriptor:z1,getOwnPropertyDescriptors:h1,getOwnPropertySymbols:Ga}=Object,m1=Object.prototype.hasOwnProperty,Q1=Object.prototype.propertyIsEnumerable,Qi=(r,o)=>{return(o=Symbol[r])?o:Symbol.for("Symbol."+r)},Ja=(r,o,i)=>(o in r)?Ka(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,$r=(r,o)=>{for(var i in o||(o={}))if(m1.call(o,i))Ja(r,i,o[i]);if(Ga){for(var i of Ga(o))if(Q1.call(o,i))Ja(r,i,o[i])}return r},go=(r,o)=>w1(r,h1(o)),f=(r,o,i,a)=>{var d=a>1?void 0:a?z1(o,i):o;for(var n=r.length-1,b;n>=0;n--)if(b=r[n])d=(a?b(o,i,d):b(d))||d;if(a&&d)Ka(o,i,d);return d},qa=(r,o,i)=>{if(!o.has(r))throw TypeError("Cannot "+i)},Ha=(r,o,i)=>{return qa(r,o,"read from private field"),i?i.call(r):o.get(r)},Oa=(r,o,i)=>{if(o.has(r))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(r):o.set(r,i)},Ya=(r,o,i,a)=>{return qa(r,o,"write to private field"),a?a.call(r,i):o.set(r,i),i},$1=function(r,o){this[0]=r,this[1]=o},Fa=(r)=>{var o=r[Qi("asyncIterator")],i=!1,a,d={};if(o==null)o=r[Qi("iterator")](),a=(n)=>d[n]=(b)=>o[n](b);else o=o.call(r),a=(n)=>d[n]=(b)=>{if(i){if(i=!1,n==="throw")throw b;return b}return i=!0,{done:!1,value:new $1(new Promise((g)=>{var l=o[n](b);if(!(l instanceof Object))throw TypeError("Object expected");g(l)}),1)}};return d[Qi("iterator")]=()=>d,a("next"),"throw"in o?a("throw"):d.throw=(n)=>{throw n},"return"in o&&a("return"),d};var To=new WeakMap,x0=new WeakMap,w0=new WeakMap,$i=new WeakSet,A0=new WeakMap,xr=class{constructor(r,o){this.handleFormData=(i)=>{let a=this.options.disabled(this.host),d=this.options.name(this.host),n=this.options.value(this.host),b=this.host.tagName.toLowerCase()==="sl-button";if(this.host.isConnected&&!a&&!b&&typeof d==="string"&&d.length>0&&typeof n!=="undefined")if(Array.isArray(n))n.forEach((g)=>{i.formData.append(d,g.toString())});else i.formData.append(d,n.toString())},this.handleFormSubmit=(i)=>{var a;let d=this.options.disabled(this.host),n=this.options.reportValidity;if(this.form&&!this.form.noValidate)(a=To.get(this.form))==null||a.forEach((b)=>{this.setUserInteracted(b,!0)});if(this.form&&!this.form.noValidate&&!d&&!n(this.host))i.preventDefault(),i.stopImmediatePropagation()},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),A0.set(this.host,[])},this.handleInteraction=(i)=>{let a=A0.get(this.host);if(!a.includes(i.type))a.push(i.type);if(a.length===this.options.assumeInteractionOn.length)this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let i=this.form.querySelectorAll("*");for(let a of i)if(typeof a.checkValidity==="function"){if(!a.checkValidity())return!1}}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let i=this.form.querySelectorAll("*");for(let a of i)if(typeof a.reportValidity==="function"){if(!a.reportValidity())return!1}}return!0},(this.host=r).addController(this),this.options=$r({form:(i)=>{let a=i.form;if(a){let n=i.getRootNode().querySelector(`#${a}`);if(n)return n}return i.closest("form")},name:(i)=>i.name,value:(i)=>i.value,defaultValue:(i)=>i.defaultValue,disabled:(i)=>{var a;return(a=i.disabled)!=null?a:!1},reportValidity:(i)=>typeof i.reportValidity==="function"?i.reportValidity():!0,checkValidity:(i)=>typeof i.checkValidity==="function"?i.checkValidity():!0,setValue:(i,a)=>i.value=a,assumeInteractionOn:["sl-input"]},o)}hostConnected(){let r=this.options.form(this.host);if(r)this.attachForm(r);A0.set(this.host,[]),this.options.assumeInteractionOn.forEach((o)=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),A0.delete(this.host),this.options.assumeInteractionOn.forEach((r)=>{this.host.removeEventListener(r,this.handleInteraction)})}hostUpdated(){let r=this.options.form(this.host);if(!r)this.detachForm();if(r&&this.form!==r)this.detachForm(),this.attachForm(r);if(this.host.hasUpdated)this.setValidity(this.host.validity.valid)}attachForm(r){if(r){if(this.form=r,To.has(this.form))To.get(this.form).add(this.host);else To.set(this.form,new Set([this.host]));if(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),!x0.has(this.form))x0.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity();if(!w0.has(this.form))w0.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity()}else this.form=void 0}detachForm(){if(!this.form)return;let r=To.get(this.form);if(!r)return;if(r.delete(this.host),r.size<=0){if(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),x0.has(this.form))this.form.reportValidity=x0.get(this.form),x0.delete(this.form);if(w0.has(this.form))this.form.checkValidity=w0.get(this.form),w0.delete(this.form);this.form=void 0}}setUserInteracted(r,o){if(o)$i.add(r);else $i.delete(r);r.requestUpdate()}doAction(r,o){if(this.form){let i=document.createElement("button");if(i.type=r,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",o)i.name=o.name,i.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((a)=>{if(o.hasAttribute(a))i.setAttribute(a,o.getAttribute(a))});this.form.append(i),i.click(),i.remove()}}getForm(){var r;return(r=this.form)!=null?r:null}reset(r){this.doAction("reset",r)}submit(r){this.doAction("submit",r)}setValidity(r){let o=this.host,i=Boolean($i.has(o)),a=Boolean(o.required);o.toggleAttribute("data-required",a),o.toggleAttribute("data-optional",!a),o.toggleAttribute("data-invalid",!r),o.toggleAttribute("data-valid",r),o.toggleAttribute("data-user-invalid",!r&&i),o.toggleAttribute("data-user-valid",r&&i)}updateValidity(){let r=this.host;this.setValidity(r.validity.valid)}emitInvalidEvent(r){let o=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});if(!r)o.preventDefault();if(!this.host.dispatchEvent(o))r==null||r.preventDefault()}},_o=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Ua=Object.freeze(go($r({},_o),{valid:!1,valueMissing:!0})),Na=Object.freeze(go($r({},_o),{valid:!1,customError:!0}));var Wa=m`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;var X=m`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var I0,h=class extends bo{constructor(){super();Oa(this,I0,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([r,o])=>{this.constructor.define(r,o)})}emit(r,o){let i=new CustomEvent(r,$r({bubbles:!0,cancelable:!1,composed:!0,detail:{}},o));return this.dispatchEvent(i),i}static define(r,o=this,i={}){let a=customElements.get(r);if(!a){try{customElements.define(r,o,i)}catch(b){customElements.define(r,class extends o{},i)}return}let d=" (unknown version)",n=d;if("version"in o&&o.version)d=" v"+o.version;if("version"in a&&a.version)n=" v"+a.version;if(d&&n&&d===n)return;console.warn(`Attempted to register <${r}>${d}, but <${r}>${n} has already been registered.`)}attributeChangedCallback(r,o,i){if(!Ha(this,I0))this.constructor.elementProperties.forEach((a,d)=>{if(a.reflect&&this[d]!=null)this.initialReflectedProperties.set(d,this[d])}),Ya(this,I0,!0);super.attributeChangedCallback(r,o,i)}willUpdate(r){super.willUpdate(r),this.initialReflectedProperties.forEach((o,i)=>{if(r.has(i)&&this[i]==null)this[i]=o})}};I0=new WeakMap;h.version="2.17.1";h.dependencies={};f([s()],h.prototype,"dir",2);f([s()],h.prototype,"lang",2);var z0=class extends h{render(){return v` <slot></slot> `}};z0.styles=[X,Wa];z0.define("sl-visually-hidden");var La=m`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;var Ma=m`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;var{min:fo,max:yr,round:m0,floor:Q0}=Math,lo=(r)=>({x:r,y:r}),y1={left:"right",right:"left",bottom:"top",top:"bottom"},X1={start:"end",end:"start"};function _0(r,o,i){return yr(r,fo(o,i))}function Oo(r,o){return typeof r==="function"?r(o):r}function uo(r){return r.split("-")[0]}function Yo(r){return r.split("-")[1]}function yi(r){return r==="x"?"y":"x"}function R0(r){return r==="y"?"height":"width"}function Qo(r){return["top","bottom"].includes(uo(r))?"y":"x"}function j0(r){return yi(Qo(r))}function Va(r,o,i){if(i===void 0)i=!1;let a=Yo(r),d=j0(r),n=R0(d),b=d==="x"?a===(i?"end":"start")?"right":"left":a==="start"?"bottom":"top";if(o.reference[n]>o.floating[n])b=h0(b);return[b,h0(b)]}function Ea(r){let o=h0(r);return[T0(r),o,T0(o)]}function T0(r){return r.replace(/start|end/g,(o)=>X1[o])}function Z1(r,o,i){let a=["left","right"],d=["right","left"],n=["top","bottom"],b=["bottom","top"];switch(r){case"top":case"bottom":if(i)return o?d:a;return o?a:d;case"left":case"right":return o?n:b;default:return[]}}function Da(r,o,i,a){let d=Yo(r),n=Z1(uo(r),i==="start",a);if(d){if(n=n.map((b)=>b+"-"+d),o)n=n.concat(n.map(T0))}return n}function h0(r){return r.replace(/left|right|bottom|top/g,(o)=>y1[o])}function k1(r){return{top:0,right:0,bottom:0,left:0,...r}}function Xi(r){return typeof r!=="number"?k1(r):{top:r,right:r,bottom:r,left:r}}function Fo(r){let{x:o,y:i,width:a,height:d}=r;return{width:a,height:d,top:i,left:o,right:o+a,bottom:i+d,x:o,y:i}}function Ba(r,o,i){let{reference:a,floating:d}=r,n=Qo(o),b=j0(o),g=R0(b),l=uo(o),u=n==="y",c=a.x+a.width/2-d.width/2,t=a.y+a.height/2-d.height/2,p=a[g]/2-d[g]/2,x;switch(l){case"top":x={x:c,y:a.y-d.height};break;case"bottom":x={x:c,y:a.y+a.height};break;case"right":x={x:a.x+a.width,y:t};break;case"left":x={x:a.x-d.width,y:t};break;default:x={x:a.x,y:a.y}}switch(Yo(o)){case"start":x[b]-=p*(i&&u?-1:1);break;case"end":x[b]+=p*(i&&u?-1:1);break}return x}var Pa=async(r,o,i)=>{let{placement:a="bottom",strategy:d="absolute",middleware:n=[],platform:b}=i,g=n.filter(Boolean),l=await(b.isRTL==null?void 0:b.isRTL(o)),u=await b.getElementRects({reference:r,floating:o,strategy:d}),{x:c,y:t}=Ba(u,a,l),p=a,x={},w=0;for(let Q=0;Q<g.length;Q++){let{name:H,fn:O}=g[Q],{x:k,y:q,data:y,reset:Z}=await O({x:c,y:t,initialPlacement:a,placement:p,strategy:d,middlewareData:x,rects:u,platform:b,elements:{reference:r,floating:o}});if(c=k!=null?k:c,t=q!=null?q:t,x={...x,[H]:{...x[H],...y}},Z&&w<=50){if(w++,typeof Z==="object"){if(Z.placement)p=Z.placement;if(Z.rects)u=Z.rects===!0?await b.getElementRects({reference:r,floating:o,strategy:d}):Z.rects;({x:c,y:t}=Ba(u,p,l))}Q=-1}}return{x:c,y:t,placement:p,strategy:d,middlewareData:x}};async function C0(r,o){var i;if(o===void 0)o={};let{x:a,y:d,platform:n,rects:b,elements:g,strategy:l}=r,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:t="floating",altBoundary:p=!1,padding:x=0}=Oo(o,r),w=Xi(x),H=g[p?t==="floating"?"reference":"floating":t],O=Fo(await n.getClippingRect({element:((i=await(n.isElement==null?void 0:n.isElement(H)))!=null?i:!0)?H:H.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(g.floating)),boundary:u,rootBoundary:c,strategy:l})),k=t==="floating"?{x:a,y:d,width:b.floating.width,height:b.floating.height}:b.reference,q=await(n.getOffsetParent==null?void 0:n.getOffsetParent(g.floating)),y=await(n.isElement==null?void 0:n.isElement(q))?await(n.getScale==null?void 0:n.getScale(q))||{x:1,y:1}:{x:1,y:1},Z=Fo(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:g,rect:k,offsetParent:q,strategy:l}):k);return{top:(O.top-Z.top+w.top)/y.y,bottom:(Z.bottom-O.bottom+w.bottom)/y.y,left:(O.left-Z.left+w.left)/y.x,right:(Z.right-O.right+w.right)/y.x}}var Aa=(r)=>({name:"arrow",options:r,async fn(o){let{x:i,y:a,placement:d,rects:n,platform:b,elements:g,middlewareData:l}=o,{element:u,padding:c=0}=Oo(r,o)||{};if(u==null)return{};let t=Xi(c),p={x:i,y:a},x=j0(d),w=R0(x),Q=await b.getDimensions(u),H=x==="y",O=H?"top":"left",k=H?"bottom":"right",q=H?"clientHeight":"clientWidth",y=n.reference[w]+n.reference[x]-p[x]-n.floating[w],Z=p[x]-n.reference[x],F=await(b.getOffsetParent==null?void 0:b.getOffsetParent(u)),V=F?F[q]:0;if(!V||!await(b.isElement==null?void 0:b.isElement(F)))V=g.floating[q]||n.floating[w];let D=y/2-Z/2,N=V/2-Q[w]/2-1,Y=fo(t[O],N),gr=fo(t[k],N),nr=Y,Qr=V-Q[w]-gr,sr=V/2-Q[w]/2+D,Ir=_0(nr,sr,Qr),oo=!l.arrow&&Yo(d)!=null&&sr!==Ir&&n.reference[w]/2-(sr<nr?Y:gr)-Q[w]/2<0,io=oo?sr<nr?sr-nr:sr-Qr:0;return{[x]:p[x]+io,data:{[x]:Ir,centerOffset:sr-Ir-io,...oo&&{alignmentOffset:io}},reset:oo}}});var Ia=function(r){if(r===void 0)r={};return{name:"flip",options:r,async fn(o){var i,a;let{placement:d,middlewareData:n,rects:b,initialPlacement:g,platform:l,elements:u}=o,{mainAxis:c=!0,crossAxis:t=!0,fallbackPlacements:p,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:Q=!0,...H}=Oo(r,o);if((i=n.arrow)!=null&&i.alignmentOffset)return{};let O=uo(d),k=Qo(g),q=uo(g)===g,y=await(l.isRTL==null?void 0:l.isRTL(u.floating)),Z=p||(q||!Q?[h0(g)]:Ea(g)),F=w!=="none";if(!p&&F)Z.push(...Da(g,Q,w,y));let V=[g,...Z],D=await C0(o,H),N=[],Y=((a=n.flip)==null?void 0:a.overflows)||[];if(c)N.push(D[O]);if(t){let sr=Va(d,b,y);N.push(D[sr[0]],D[sr[1]])}if(Y=[...Y,{placement:d,overflows:N}],!N.every((sr)=>sr<=0)){var gr,nr;let sr=(((gr=n.flip)==null?void 0:gr.index)||0)+1,Ir=V[sr];if(Ir)return{data:{index:sr,overflows:Y},reset:{placement:Ir}};let oo=(nr=Y.filter((io)=>io.overflows[0]<=0).sort((io,vo)=>io.overflows[1]-vo.overflows[1])[0])==null?void 0:nr.placement;if(!oo)switch(x){case"bestFit":{var Qr;let io=(Qr=Y.filter((vo)=>{if(F){let xo=Qo(vo.placement);return xo===k||xo==="y"}return!0}).map((vo)=>[vo.placement,vo.overflows.filter((xo)=>xo>0).reduce((xo,Sd)=>xo+Sd,0)]).sort((vo,xo)=>vo[1]-xo[1])[0])==null?void 0:Qr[0];if(io)oo=io;break}case"initialPlacement":oo=g;break}if(d!==oo)return{reset:{placement:oo}}}return{}}}};async function G1(r,o){let{placement:i,platform:a,elements:d}=r,n=await(a.isRTL==null?void 0:a.isRTL(d.floating)),b=uo(i),g=Yo(i),l=Qo(i)==="y",u=["left","top"].includes(b)?-1:1,c=n&&l?-1:1,t=Oo(o,r),{mainAxis:p,crossAxis:x,alignmentAxis:w}=typeof t==="number"?{mainAxis:t,crossAxis:0,alignmentAxis:null}:{mainAxis:t.mainAxis||0,crossAxis:t.crossAxis||0,alignmentAxis:t.alignmentAxis};if(g&&typeof w==="number")x=g==="end"?w*-1:w;return l?{x:x*c,y:p*u}:{x:p*u,y:x*c}}var Ta=function(r){if(r===void 0)r=0;return{name:"offset",options:r,async fn(o){var i,a;let{x:d,y:n,placement:b,middlewareData:g}=o,l=await G1(o,r);if(b===((i=g.offset)==null?void 0:i.placement)&&(a=g.arrow)!=null&&a.alignmentOffset)return{};return{x:d+l.x,y:n+l.y,data:{...l,placement:b}}}}},_a=function(r){if(r===void 0)r={};return{name:"shift",options:r,async fn(o){let{x:i,y:a,placement:d}=o,{mainAxis:n=!0,crossAxis:b=!1,limiter:g={fn:(H)=>{let{x:O,y:k}=H;return{x:O,y:k}}},...l}=Oo(r,o),u={x:i,y:a},c=await C0(o,l),t=Qo(uo(d)),p=yi(t),x=u[p],w=u[t];if(n){let H=p==="y"?"top":"left",O=p==="y"?"bottom":"right",k=x+c[H],q=x-c[O];x=_0(k,x,q)}if(b){let H=t==="y"?"top":"left",O=t==="y"?"bottom":"right",k=w+c[H],q=w-c[O];w=_0(k,w,q)}let Q=g.fn({...o,[p]:x,[t]:w});return{...Q,data:{x:Q.x-i,y:Q.y-a,enabled:{[p]:n,[t]:b}}}}}};var Ra=function(r){if(r===void 0)r={};return{name:"size",options:r,async fn(o){var i,a;let{placement:d,rects:n,platform:b,elements:g}=o,{apply:l=()=>{},...u}=Oo(r,o),c=await C0(o,u),t=uo(d),p=Yo(d),x=Qo(d)==="y",{width:w,height:Q}=n.floating,H,O;if(t==="top"||t==="bottom")H=t,O=p===(await(b.isRTL==null?void 0:b.isRTL(g.floating))?"start":"end")?"left":"right";else O=t,H=p==="end"?"top":"bottom";let k=Q-c.top-c.bottom,q=w-c.left-c.right,y=fo(Q-c[H],k),Z=fo(w-c[O],q),F=!o.middlewareData.shift,V=y,D=Z;if((i=o.middlewareData.shift)!=null&&i.enabled.x)D=q;if((a=o.middlewareData.shift)!=null&&a.enabled.y)V=k;if(F&&!p){let Y=yr(c.left,0),gr=yr(c.right,0),nr=yr(c.top,0),Qr=yr(c.bottom,0);if(x)D=w-2*(Y!==0||gr!==0?Y+gr:yr(c.left,c.right));else V=Q-2*(nr!==0||Qr!==0?nr+Qr:yr(c.top,c.bottom))}await l({...o,availableWidth:D,availableHeight:V});let N=await b.getDimensions(g.floating);if(w!==N.width||Q!==N.height)return{reset:{rects:!0}};return{}}}};function e0(){return typeof window!=="undefined"}function Uo(r){if(Ca(r))return(r.nodeName||"").toLowerCase();return"#document"}function Zr(r){var o;return(r==null||(o=r.ownerDocument)==null?void 0:o.defaultView)||window}function Tr(r){var o;return(o=(Ca(r)?r.ownerDocument:r.document)||window.document)==null?void 0:o.documentElement}function Ca(r){if(!e0())return!1;return r instanceof Node||r instanceof Zr(r).Node}function Wr(r){if(!e0())return!1;return r instanceof Element||r instanceof Zr(r).Element}function _r(r){if(!e0())return!1;return r instanceof HTMLElement||r instanceof Zr(r).HTMLElement}function ja(r){if(!e0()||typeof ShadowRoot==="undefined")return!1;return r instanceof ShadowRoot||r instanceof Zr(r).ShadowRoot}function jo(r){let{overflow:o,overflowX:i,overflowY:a,display:d}=Lr(r);return/auto|scroll|overlay|hidden|clip/.test(o+a+i)&&!["inline","contents"].includes(d)}function ea(r){return["table","td","th"].includes(Uo(r))}function $0(r){return[":popover-open",":modal"].some((o)=>{try{return r.matches(o)}catch(i){return!1}})}function S0(r){let o=ri(),i=Wr(r)?Lr(r):r;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!o&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!o&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some((a)=>(i.willChange||"").includes(a))||["paint","layout","strict","content"].some((a)=>(i.contain||"").includes(a))}function Sa(r){let o=to(r);while(_r(o)&&!No(o)){if(S0(o))return o;else if($0(o))return null;o=to(o)}return null}function ri(){if(typeof CSS==="undefined"||!CSS.supports)return!1;return CSS.supports("-webkit-backdrop-filter","none")}function No(r){return["html","body","#document"].includes(Uo(r))}function Lr(r){return Zr(r).getComputedStyle(r)}function y0(r){if(Wr(r))return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop};return{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function to(r){if(Uo(r)==="html")return r;let o=r.assignedSlot||r.parentNode||ja(r)&&r.host||Tr(r);return ja(o)?o.host:o}function rf(r){let o=to(r);if(No(o))return r.ownerDocument?r.ownerDocument.body:r.body;if(_r(o)&&jo(o))return o;return rf(o)}function Ro(r,o,i){var a;if(o===void 0)o=[];if(i===void 0)i=!0;let d=rf(r),n=d===((a=r.ownerDocument)==null?void 0:a.body),b=Zr(d);if(n){let g=oi(b);return o.concat(b,b.visualViewport||[],jo(d)?d:[],g&&i?Ro(g):[])}return o.concat(d,Ro(d,[],i))}function oi(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function ff(r){let o=Lr(r),i=parseFloat(o.width)||0,a=parseFloat(o.height)||0,d=_r(r),n=d?r.offsetWidth:i,b=d?r.offsetHeight:a,g=m0(i)!==n||m0(a)!==b;if(g)i=n,a=b;return{width:i,height:a,$:g}}function Gi(r){return!Wr(r)?r.contextElement:r}function Co(r){let o=Gi(r);if(!_r(o))return lo(1);let i=o.getBoundingClientRect(),{width:a,height:d,$:n}=ff(o),b=(n?m0(i.width):i.width)/a,g=(n?m0(i.height):i.height)/d;if(!b||!Number.isFinite(b))b=1;if(!g||!Number.isFinite(g))g=1;return{x:b,y:g}}var J1=lo(0);function df(r){let o=Zr(r);if(!ri()||!o.visualViewport)return J1;return{x:o.visualViewport.offsetLeft,y:o.visualViewport.offsetTop}}function K1(r,o,i){if(o===void 0)o=!1;if(!i||o&&i!==Zr(r))return!1;return o}function Wo(r,o,i,a){if(o===void 0)o=!1;if(i===void 0)i=!1;let d=r.getBoundingClientRect(),n=Gi(r),b=lo(1);if(o)if(a){if(Wr(a))b=Co(a)}else b=Co(r);let g=K1(n,i,a)?df(n):lo(0),l=(d.left+g.x)/b.x,u=(d.top+g.y)/b.y,c=d.width/b.x,t=d.height/b.y;if(n){let p=Zr(n),x=a&&Wr(a)?Zr(a):a,w=p,Q=oi(w);while(Q&&a&&x!==w){let H=Co(Q),O=Q.getBoundingClientRect(),k=Lr(Q),q=O.left+(Q.clientLeft+parseFloat(k.paddingLeft))*H.x,y=O.top+(Q.clientTop+parseFloat(k.paddingTop))*H.y;l*=H.x,u*=H.y,c*=H.x,t*=H.y,l+=q,u+=y,w=Zr(Q),Q=oi(w)}}return Fo({width:c,height:t,x:l,y:u})}function q1(r){let{elements:o,rect:i,offsetParent:a,strategy:d}=r,n=d==="fixed",b=Tr(a),g=o?$0(o.floating):!1;if(a===b||g&&n)return i;let l={scrollLeft:0,scrollTop:0},u=lo(1),c=lo(0),t=_r(a);if(t||!t&&!n){if(Uo(a)!=="body"||jo(b))l=y0(a);if(_r(a)){let p=Wo(a);u=Co(a),c.x=p.x+a.clientLeft,c.y=p.y+a.clientTop}}return{width:i.width*u.x,height:i.height*u.y,x:i.x*u.x-l.scrollLeft*u.x+c.x,y:i.y*u.y-l.scrollTop*u.y+c.y}}function H1(r){return Array.from(r.getClientRects())}function ki(r,o){let i=y0(r).scrollLeft;if(!o)return Wo(Tr(r)).left+i;return o.left+i}function O1(r){let o=Tr(r),i=y0(r),a=r.ownerDocument.body,d=yr(o.scrollWidth,o.clientWidth,a.scrollWidth,a.clientWidth),n=yr(o.scrollHeight,o.clientHeight,a.scrollHeight,a.clientHeight),b=-i.scrollLeft+ki(r),g=-i.scrollTop;if(Lr(a).direction==="rtl")b+=yr(o.clientWidth,a.clientWidth)-d;return{width:d,height:n,x:b,y:g}}function Y1(r,o){let i=Zr(r),a=Tr(r),d=i.visualViewport,n=a.clientWidth,b=a.clientHeight,g=0,l=0;if(d){n=d.width,b=d.height;let u=ri();if(!u||u&&o==="fixed")g=d.offsetLeft,l=d.offsetTop}return{width:n,height:b,x:g,y:l}}function F1(r,o){let i=Wo(r,!0,o==="fixed"),a=i.top+r.clientTop,d=i.left+r.clientLeft,n=_r(r)?Co(r):lo(1),b=r.clientWidth*n.x,g=r.clientHeight*n.y,l=d*n.x,u=a*n.y;return{width:b,height:g,x:l,y:u}}function of(r,o,i){let a;if(o==="viewport")a=Y1(r,i);else if(o==="document")a=O1(Tr(r));else if(Wr(o))a=F1(o,i);else{let d=df(r);a={...o,x:o.x-d.x,y:o.y-d.y}}return Fo(a)}function nf(r,o){let i=to(r);if(i===o||!Wr(i)||No(i))return!1;return Lr(i).position==="fixed"||nf(i,o)}function U1(r,o){let i=o.get(r);if(i)return i;let a=Ro(r,[],!1).filter((g)=>Wr(g)&&Uo(g)!=="body"),d=null,n=Lr(r).position==="fixed",b=n?to(r):r;while(Wr(b)&&!No(b)){let g=Lr(b),l=S0(b);if(!l&&g.position==="fixed")d=null;if(n?!l&&!d:!l&&g.position==="static"&&!!d&&["absolute","fixed"].includes(d.position)||jo(b)&&!l&&nf(r,b))a=a.filter((c)=>c!==b);else d=g;b=to(b)}return o.set(r,a),a}function N1(r){let{element:o,boundary:i,rootBoundary:a,strategy:d}=r,b=[...i==="clippingAncestors"?$0(o)?[]:U1(o,this._c):[].concat(i),a],g=b[0],l=b.reduce((u,c)=>{let t=of(o,c,d);return u.top=yr(t.top,u.top),u.right=fo(t.right,u.right),u.bottom=fo(t.bottom,u.bottom),u.left=yr(t.left,u.left),u},of(o,g,d));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function W1(r){let{width:o,height:i}=ff(r);return{width:o,height:i}}function L1(r,o,i){let a=_r(o),d=Tr(o),n=i==="fixed",b=Wo(r,!0,n,o),g={scrollLeft:0,scrollTop:0},l=lo(0);if(a||!a&&!n){if(Uo(o)!=="body"||jo(d))g=y0(o);if(a){let x=Wo(o,!0,n,o);l.x=x.x+o.clientLeft,l.y=x.y+o.clientTop}else if(d)l.x=ki(d)}let u=0,c=0;if(d&&!a&&!n){let x=d.getBoundingClientRect();c=x.top+g.scrollTop,u=x.left+g.scrollLeft-ki(d,x)}let t=b.left+g.scrollLeft-l.x-u,p=b.top+g.scrollTop-l.y-c;return{x:t,y:p,width:b.width,height:b.height}}function Zi(r){return Lr(r).position==="static"}function af(r,o){if(!_r(r)||Lr(r).position==="fixed")return null;if(o)return o(r);let i=r.offsetParent;if(Tr(r)===i)i=i.ownerDocument.body;return i}function sf(r,o){let i=Zr(r);if($0(r))return i;if(!_r(r)){let d=to(r);while(d&&!No(d)){if(Wr(d)&&!Zi(d))return d;d=to(d)}return i}let a=af(r,o);while(a&&ea(a)&&Zi(a))a=af(a,o);if(a&&No(a)&&Zi(a)&&!S0(a))return i;return a||Sa(r)||i}var M1=async function(r){let o=this.getOffsetParent||sf,i=this.getDimensions,a=await i(r.floating);return{reference:L1(r.reference,await o(r.floating),r.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function V1(r){return Lr(r).direction==="rtl"}var X0={convertOffsetParentRelativeRectToViewportRelativeRect:q1,getDocumentElement:Tr,getClippingRect:N1,getOffsetParent:sf,getElementRects:M1,getClientRects:H1,getDimensions:W1,getScale:Co,isElement:Wr,isRTL:V1};function E1(r,o){let i=null,a,d=Tr(r);function n(){var g;clearTimeout(a),(g=i)==null||g.disconnect(),i=null}function b(g,l){if(g===void 0)g=!1;if(l===void 0)l=1;n();let{left:u,top:c,width:t,height:p}=r.getBoundingClientRect();if(!g)o();if(!t||!p)return;let x=Q0(c),w=Q0(d.clientWidth-(u+t)),Q=Q0(d.clientHeight-(c+p)),H=Q0(u),k={rootMargin:-x+"px "+-w+"px "+-Q+"px "+-H+"px",threshold:yr(0,fo(1,l))||1},q=!0;function y(Z){let F=Z[0].intersectionRatio;if(F!==l){if(!q)return b();if(!F)a=setTimeout(()=>{b(!1,0.0000001)},1000);else b(!1,F)}q=!1}try{i=new IntersectionObserver(y,{...k,root:d.ownerDocument})}catch(Z){i=new IntersectionObserver(y,k)}i.observe(r)}return b(!0),n}function bf(r,o,i,a){if(a===void 0)a={};let{ancestorScroll:d=!0,ancestorResize:n=!0,elementResize:b=typeof ResizeObserver==="function",layoutShift:g=typeof IntersectionObserver==="function",animationFrame:l=!1}=a,u=Gi(r),c=d||n?[...u?Ro(u):[],...Ro(o)]:[];c.forEach((O)=>{d&&O.addEventListener("scroll",i,{passive:!0}),n&&O.addEventListener("resize",i)});let t=u&&g?E1(u,i):null,p=-1,x=null;if(b){if(x=new ResizeObserver((O)=>{let[k]=O;if(k&&k.target===u&&x)x.unobserve(o),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var q;(q=x)==null||q.observe(o)});i()}),u&&!l)x.observe(u);x.observe(o)}let w,Q=l?Wo(r):null;if(l)H();function H(){let O=Wo(r);if(Q&&(O.x!==Q.x||O.y!==Q.y||O.width!==Q.width||O.height!==Q.height))i();Q=O,w=requestAnimationFrame(H)}return i(),()=>{var O;if(c.forEach((k)=>{d&&k.removeEventListener("scroll",i),n&&k.removeEventListener("resize",i)}),t==null||t(),(O=x)==null||O.disconnect(),x=null,l)cancelAnimationFrame(w)}}var gf=Ta;var lf=_a,uf=Ia,Ji=Ra;var tf=Aa;var pf=(r,o,i)=>{let a=new Map,d={platform:X0,...i},n={...d.platform,_c:a};return Pa(r,o,{...d,platform:n})};var Xr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rr=(r)=>(...o)=>({_$litDirective$:r,values:o});class jr{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,o,i){this._$Ct=r,this._$AM=o,this._$Ci=i}_$AS(r,o){return this.update(r,o)}update(r,o){return this.render(...o)}}var G=Rr(class extends jr{constructor(r){if(super(r),r.type!==Xr.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter((o)=>r[o]).join(" ")+" "}update(r,[o]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter((a)=>a!=="")));for(let a in o)o[a]&&!this.nt?.has(a)&&this.st.add(a);return this.render(o)}let i=r.element.classList;for(let a of this.st)a in o||(i.remove(a),this.st.delete(a));for(let a in o){let d=!!o[a];d===this.st.has(a)||this.nt?.has(a)||(d?(i.add(a),this.st.add(a)):(i.remove(a),this.st.delete(a)))}return vr}});function cf(r){return D1(r)}function Ki(r){return r.assignedSlot?r.assignedSlot:r.parentNode instanceof ShadowRoot?r.parentNode.host:r.parentNode}function D1(r){for(let o=r;o;o=Ki(o))if(o instanceof Element&&getComputedStyle(o).display==="none")return null;for(let o=Ki(r);o;o=Ki(o)){if(!(o instanceof Element))continue;let i=getComputedStyle(o);if(i.display!=="contents"){if(i.position!=="static"||i.filter!=="none")return o;if(o.tagName==="BODY")return o}}return null}function B1(r){return r!==null&&typeof r==="object"&&"getBoundingClientRect"in r&&("contextElement"in r?r instanceof Element:!0)}var B=class extends h{constructor(){super(...arguments);this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let r=this.anchorEl.getBoundingClientRect(),o=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),a=0,d=0,n=0,b=0,g=0,l=0,u=0,c=0;if(i)if(r.top<o.top)a=r.left,d=r.bottom,n=r.right,b=r.bottom,g=o.left,l=o.top,u=o.right,c=o.top;else a=o.left,d=o.bottom,n=o.right,b=o.bottom,g=r.left,l=r.top,u=r.right,c=r.top;else if(r.left<o.left)a=r.right,d=r.top,n=o.left,b=o.top,g=r.right,l=r.bottom,u=o.left,c=o.bottom;else a=o.right,d=o.top,n=r.left,b=r.top,g=o.right,l=o.bottom,u=r.left,c=r.bottom;this.style.setProperty("--hover-bridge-top-left-x",`${a}px`),this.style.setProperty("--hover-bridge-top-left-y",`${d}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${b}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${g}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(r){if(super.updated(r),r.has("active"))if(this.active)this.start();else this.stop();if(r.has("anchor"))this.handleAnchorChange();if(this.active)await this.updateComplete,this.reposition()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==="string"){let r=this.getRootNode();this.anchorEl=r.getElementById(this.anchor)}else if(this.anchor instanceof Element||B1(this.anchor))this.anchorEl=this.anchor;else this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement)this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0];if(this.anchorEl&&this.active)this.start()}start(){if(!this.anchorEl)return;this.cleanup=bf(this.anchorEl,this.popup,()=>{this.reposition()})}async stop(){return new Promise((r)=>{if(this.cleanup)this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>r());else r()})}reposition(){if(!this.active||!this.anchorEl)return;let r=[gf({mainAxis:this.distance,crossAxis:this.skidding})];if(this.sync)r.push(Ji({apply:({rects:i})=>{let a=this.sync==="width"||this.sync==="both",d=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${i.reference.width}px`:"",this.popup.style.height=d?`${i.reference.height}px`:""}}));else this.popup.style.width="",this.popup.style.height="";if(this.flip)r.push(uf({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding}));if(this.shift)r.push(lf({boundary:this.shiftBoundary,padding:this.shiftPadding}));if(this.autoSize)r.push(Ji({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:a})=>{if(this.autoSize==="vertical"||this.autoSize==="both")this.style.setProperty("--auto-size-available-height",`${a}px`);else this.style.removeProperty("--auto-size-available-height");if(this.autoSize==="horizontal"||this.autoSize==="both")this.style.setProperty("--auto-size-available-width",`${i}px`);else this.style.removeProperty("--auto-size-available-width")}}));else this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height");if(this.arrow)r.push(tf({element:this.arrowEl,padding:this.arrowPadding}));let o=this.strategy==="absolute"?(i)=>X0.getOffsetParent(i,cf):X0.getOffsetParent;pf(this.anchorEl,this.popup,{placement:this.placement,middleware:r,strategy:this.strategy,platform:go($r({},X0),{getOffsetParent:o})}).then(({x:i,y:a,middlewareData:d,placement:n})=>{let b=this.matches(":dir(rtl)"),g={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${i}px`,top:`${a}px`}),this.arrow){let l=d.arrow.x,u=d.arrow.y,c="",t="",p="",x="";if(this.arrowPlacement==="start"){let w=typeof l==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=typeof u==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",t=b?w:"",x=b?"":w}else if(this.arrowPlacement==="end"){let w=typeof l==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";t=b?"":w,x=b?w:"",p=typeof u==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else if(this.arrowPlacement==="center")x=typeof l==="number"?"calc(50% - var(--arrow-size-diagonal))":"",c=typeof u==="number"?"calc(50% - var(--arrow-size-diagonal))":"";else x=typeof l==="number"?`${l}px`:"",c=typeof u==="number"?`${u}px`:"";Object.assign(this.arrowEl.style,{top:c,right:t,bottom:p,left:x,[g]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return v`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${G({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${G({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?v`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};B.styles=[X,Ma];f([$(".popup")],B.prototype,"popup",2);f([$(".popup__arrow")],B.prototype,"arrowEl",2);f([s()],B.prototype,"anchor",2);f([s({type:Boolean,reflect:!0})],B.prototype,"active",2);f([s({reflect:!0})],B.prototype,"placement",2);f([s({reflect:!0})],B.prototype,"strategy",2);f([s({type:Number})],B.prototype,"distance",2);f([s({type:Number})],B.prototype,"skidding",2);f([s({type:Boolean})],B.prototype,"arrow",2);f([s({attribute:"arrow-placement"})],B.prototype,"arrowPlacement",2);f([s({attribute:"arrow-padding",type:Number})],B.prototype,"arrowPadding",2);f([s({type:Boolean})],B.prototype,"flip",2);f([s({attribute:"flip-fallback-placements",converter:{fromAttribute:(r)=>{return r.split(" ").map((o)=>o.trim()).filter((o)=>o!=="")},toAttribute:(r)=>{return r.join(" ")}}})],B.prototype,"flipFallbackPlacements",2);f([s({attribute:"flip-fallback-strategy"})],B.prototype,"flipFallbackStrategy",2);f([s({type:Object})],B.prototype,"flipBoundary",2);f([s({attribute:"flip-padding",type:Number})],B.prototype,"flipPadding",2);f([s({type:Boolean})],B.prototype,"shift",2);f([s({type:Object})],B.prototype,"shiftBoundary",2);f([s({attribute:"shift-padding",type:Number})],B.prototype,"shiftPadding",2);f([s({attribute:"auto-size"})],B.prototype,"autoSize",2);f([s()],B.prototype,"sync",2);f([s({type:Object})],B.prototype,"autoSizeBoundary",2);f([s({attribute:"auto-size-padding",type:Number})],B.prototype,"autoSizePadding",2);f([s({attribute:"hover-bridge",type:Boolean})],B.prototype,"hoverBridge",2);var xf=new Map,P1=new WeakMap;function A1(r){return r!=null?r:{keyframes:[],options:{duration:0}}}function vf(r,o){if(o.toLowerCase()==="rtl")return{keyframes:r.rtlKeyframes||r.keyframes,options:r.options};return r}function M(r,o){xf.set(r,A1(o))}function A(r,o,i){let a=P1.get(r);if(a==null?void 0:a[o])return vf(a[o],i.dir);let d=xf.get(o);if(d)return vf(d,i.dir);return{keyframes:[],options:{duration:0}}}function or(r,o){return new Promise((i)=>{function a(d){if(d.target===r)r.removeEventListener(o,a),i()}r.addEventListener(o,a)})}function _(r,o,i){return new Promise((a)=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");let d=r.animate(o,go($r({},i),{duration:ii()?0:i.duration}));d.addEventListener("cancel",a,{once:!0}),d.addEventListener("finish",a,{once:!0})})}function qi(r){if(r=r.toString().toLowerCase(),r.indexOf("ms")>-1)return parseFloat(r);if(r.indexOf("s")>-1)return parseFloat(r)*1000;return parseFloat(r)}function ii(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function C(r){return Promise.all(r.getAnimations().map((o)=>{return new Promise((i)=>{o.cancel(),requestAnimationFrame(i)})}))}function eo(r,o){return r.map((i)=>go($r({},i),{height:i.height==="auto"?`${o}px`:i.height}))}var Hi=new Set,So=new Map,Lo,Oi="ltr",Yi="en",wf=typeof MutationObserver!=="undefined"&&typeof document!=="undefined"&&typeof document.documentElement!=="undefined";if(wf){let r=new MutationObserver(zf);Oi=document.documentElement.dir||"ltr",Yi=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Z0(...r){r.map((o)=>{let i=o.$code.toLowerCase();if(So.has(i))So.set(i,Object.assign(Object.assign({},So.get(i)),o));else So.set(i,o);if(!Lo)Lo=o}),zf()}function zf(){if(wf)Oi=document.documentElement.dir||"ltr",Yi=document.documentElement.lang||navigator.language;[...Hi.keys()].map((r)=>{if(typeof r.requestUpdate==="function")r.requestUpdate()})}class Fi{constructor(r){this.host=r,this.host.addController(this)}hostConnected(){Hi.add(this.host)}hostDisconnected(){Hi.delete(this.host)}dir(){return`${this.host.dir||Oi}`.toLowerCase()}lang(){return`${this.host.lang||Yi}`.toLowerCase()}getTranslationData(r){var o,i;let a=new Intl.Locale(r.replace(/_/g,"-")),d=a===null||a===void 0?void 0:a.language.toLowerCase(),n=(i=(o=a===null||a===void 0?void 0:a.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",b=So.get(`${d}-${n}`),g=So.get(d);return{locale:a,language:d,region:n,primary:b,secondary:g}}exists(r,o){var i;let{primary:a,secondary:d}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());if(o=Object.assign({includeFallback:!1},o),a&&a[r]||d&&d[r]||o.includeFallback&&Lo&&Lo[r])return!0;return!1}term(r,...o){let{primary:i,secondary:a}=this.getTranslationData(this.lang()),d;if(i&&i[r])d=i[r];else if(a&&a[r])d=a[r];else if(Lo&&Lo[r])d=Lo[r];else return console.error(`No translation found for: ${String(r)}`),String(r);if(typeof d==="function")return d(...o);return d}date(r,o){return r=new Date(r),new Intl.DateTimeFormat(this.lang(),o).format(r)}number(r,o){return r=Number(r),isNaN(r)?"":new Intl.NumberFormat(this.lang(),o).format(r)}relativeTime(r,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(r,o)}}var hf={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(r,o)=>`Go to slide ${r} of ${o}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:(r)=>{if(r===0)return"No options selected";if(r===1)return"1 option selected";return`${r} options selected`},previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:(r)=>`Slide ${r}`,toggleColorFormat:"Toggle color format"};Z0(hf);var mf=hf;var U=class extends Fi{};Z0(mf);function z(r,o){let i=$r({waitUntilFirstUpdate:!1},o);return(a,d)=>{let{update:n}=a,b=Array.isArray(r)?r:[r];a.update=function(g){b.forEach((l)=>{let u=l;if(g.has(u)){let c=g.get(u),t=this[u];if(c!==t){if(!i.waitUntilFirstUpdate||this.hasUpdated)this[d](c,t)}}}),n.call(this,g)}}}var br=class extends h{constructor(){super();this.localize=new U(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{if(this.hasTrigger("focus"))this.hide()},this.handleClick=()=>{if(this.hasTrigger("click"))if(this.open)this.hide();else this.show()},this.handleFocus=()=>{if(this.hasTrigger("focus"))this.show()},this.handleDocumentKeyDown=(r)=>{if(r.key==="Escape")r.stopPropagation(),this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let r=qi(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),r)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let r=qi(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),r)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var r;(r=this.closeWatcher)==null||r.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){if(this.body.hidden=!this.open,this.open)this.popup.active=!0,this.popup.reposition()}hasTrigger(r){return this.trigger.split(" ").includes(r)}async handleOpenChange(){var r,o;if(this.open){if(this.disabled)return;if(this.emit("sl-show"),"CloseWatcher"in window)(r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()};else document.addEventListener("keydown",this.handleDocumentKeyDown);await C(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:i,options:a}=A(this,"tooltip.show",{dir:this.localize.dir()});await _(this.popup.popup,i,a),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(o=this.closeWatcher)==null||o.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await C(this.body);let{keyframes:i,options:a}=A(this,"tooltip.hide",{dir:this.localize.dir()});await _(this.popup.popup,i,a),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){if(this.hasUpdated)await this.updateComplete,this.popup.reposition()}handleDisabledChange(){if(this.disabled&&this.open)this.hide()}async show(){if(this.open)return;return this.open=!0,or(this,"sl-after-show")}async hide(){if(!this.open)return;return this.open=!1,or(this,"sl-after-hide")}render(){return v`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${G({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};br.styles=[X,La];br.dependencies={"sl-popup":B};f([$("slot:not([name])")],br.prototype,"defaultSlot",2);f([$(".tooltip__body")],br.prototype,"body",2);f([$("sl-popup")],br.prototype,"popup",2);f([s()],br.prototype,"content",2);f([s()],br.prototype,"placement",2);f([s({type:Boolean,reflect:!0})],br.prototype,"disabled",2);f([s({type:Number})],br.prototype,"distance",2);f([s({type:Boolean,reflect:!0})],br.prototype,"open",2);f([s({type:Number})],br.prototype,"skidding",2);f([s()],br.prototype,"trigger",2);f([s({type:Boolean})],br.prototype,"hoist",2);f([z("open",{waitUntilFirstUpdate:!0})],br.prototype,"handleOpenChange",1);f([z(["content","distance","hoist","placement","skidding"])],br.prototype,"handleOptionsChange",1);f([z("disabled")],br.prototype,"handleDisabledChange",1);M("tooltip.show",{keyframes:[{opacity:0,scale:0.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});M("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:0.8}],options:{duration:150,easing:"ease"}});br.define("sl-tooltip");var Qf=m`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;var $f=m`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;var yf=m`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;var kr=(r="value")=>(o,i)=>{let a=o.constructor,d=a.prototype.attributeChangedCallback;a.prototype.attributeChangedCallback=function(n,b,g){var l;let u=a.getPropertyOptions(r),c=typeof u.attribute==="string"?u.attribute:r;if(n===c){let t=u.converter||zo,x=(typeof t==="function"?t:(l=t==null?void 0:t.fromAttribute)!=null?l:zo.fromAttribute)(g,u.type);if(this[r]!==x)this[i]=x}d.call(this,n,b,g)}};var Gr=m`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;var R=class{constructor(r,...o){this.slotNames=[],this.handleSlotChange=(i)=>{let a=i.target;if(this.slotNames.includes("[default]")&&!a.name||a.name&&this.slotNames.includes(a.name))this.host.requestUpdate()},(this.host=r).addController(this),this.slotNames=o}hasDefaultSlot(){return[...this.host.childNodes].some((r)=>{if(r.nodeType===r.TEXT_NODE&&r.textContent.trim()!=="")return!0;if(r.nodeType===r.ELEMENT_NODE){let o=r;if(o.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!o.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(r){return this.host.querySelector(`:scope > [slot="${r}"]`)!==null}test(r){return r==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(r)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Xf(r){if(!r)return"";let o=r.assignedNodes({flatten:!0}),i="";return[...o].forEach((a)=>{if(a.nodeType===Node.TEXT_NODE)i+=a.textContent}),i}var Ui="";function r0(r){Ui=r}function ai(r=""){if(!Ui){let o=[...document.getElementsByTagName("script")],i=o.find((a)=>a.hasAttribute("data-shoelace"));if(i)r0(i.getAttribute("data-shoelace"));else{let a=o.find((n)=>{return/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src)}),d="";if(a)d=a.getAttribute("src");r0(d.split("/").slice(0,-1).join("/"))}}return Ui.replace(/\/$/,"")+(r?`/${r.replace(/^\//,"")}`:"")}var I1={name:"default",resolver:(r)=>ai(`assets/icons/${r}.svg`)},Zf=I1;var kf={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},T1={name:"system",resolver:(r)=>{if(r in kf)return`data:image/svg+xml,${encodeURIComponent(kf[r])}`;return""}},Gf=T1;var _1=[Zf,Gf],Ni=[];function Jf(r){Ni.push(r)}function Kf(r){Ni=Ni.filter((o)=>o!==r)}function Wi(r){return _1.find((o)=>o.name===r)}var qf=m`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;var Hf=(r,o)=>o===void 0?r?._$litType$!==void 0:r?._$litType$===o;var fi=(r)=>r.strings===void 0;var R1={},Of=(r,o=R1)=>r._$AH=o;var k0=Symbol(),di=Symbol(),Li,Mi=new Map,W=class extends h{constructor(){super(...arguments);this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(r,o){var i;let a;if(o==null?void 0:o.spriteSheet)return this.svg=v`<svg part="svg">
        <use part="use" href="${r}"></use>
      </svg>`,this.svg;try{if(a=await fetch(r,{mode:"cors"}),!a.ok)return a.status===410?k0:di}catch(d){return di}try{let d=document.createElement("div");d.innerHTML=await a.text();let n=d.firstElementChild;if(((i=n==null?void 0:n.tagName)==null?void 0:i.toLowerCase())!=="svg")return k0;if(!Li)Li=new DOMParser;let g=Li.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");if(!g)return k0;return g.part.add("svg"),document.adoptNode(g)}catch(d){return k0}}connectedCallback(){super.connectedCallback(),Jf(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Kf(this)}getIconSource(){let r=Wi(this.library);if(this.name&&r)return{url:r.resolver(this.name),fromLibrary:!0};return{url:this.src,fromLibrary:!1}}handleLabelChange(){if(typeof this.label==="string"&&this.label.length>0)this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden");else this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true")}async setIcon(){var r;let{url:o,fromLibrary:i}=this.getIconSource(),a=i?Wi(this.library):void 0;if(!o){this.svg=null;return}let d=Mi.get(o);if(!d)d=this.resolveIcon(o,a),Mi.set(o,d);if(!this.initialRender)return;let n=await d;if(n===di)Mi.delete(o);if(o!==this.getIconSource().url)return;if(Hf(n)){if(this.svg=n,a){await this.updateComplete;let b=this.shadowRoot.querySelector("[part='svg']");if(typeof a.mutator==="function"&&b)a.mutator(b)}return}switch(n){case di:case k0:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(r=a==null?void 0:a.mutator)==null||r.call(a,this.svg),this.emit("sl-load")}}render(){return this.svg}};W.styles=[X,qf];f([J()],W.prototype,"svg",2);f([s({reflect:!0})],W.prototype,"name",2);f([s()],W.prototype,"src",2);f([s()],W.prototype,"label",2);f([s({reflect:!0})],W.prototype,"library",2);f([z("label")],W.prototype,"handleLabelChange",1);f([z(["name","src","library"])],W.prototype,"setIcon",1);var K=(r)=>r??j;var Fr=Rr(class extends jr{constructor(r){if(super(r),r.type!==Xr.PROPERTY&&r.type!==Xr.ATTRIBUTE&&r.type!==Xr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!fi(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[o]){if(o===vr||o===j)return o;let{element:i,name:a}=r;if(r.type===Xr.PROPERTY){if(o===i[a])return vr}else if(r.type===Xr.BOOLEAN_ATTRIBUTE){if(!!o===i.hasAttribute(a))return vr}else if(r.type===Xr.ATTRIBUTE&&i.getAttribute(a)===o+"")return vr;return Of(r),o}});var dr=class extends h{constructor(){super(...arguments);this.formControlController=new xr(this,{value:(r)=>r.checked?r.value||"on":void 0,defaultValue:(r)=>r.defaultChecked,setValue:(r,o)=>r.checked=o}),this.hasSlotController=new R(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(r){this.input.focus(r)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){let r=this.hasSlotController.test("help-text"),o=this.helpText?!0:!!r;return v`
      <div
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":o})}
      >
        <label
          part="base"
          class=${G({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${K(this.value)}
            .indeterminate=${Fr(this.indeterminate)}
            .checked=${Fr(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?v`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?v`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${o?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};dr.styles=[X,Gr,yf];dr.dependencies={"sl-icon":W};f([$('input[type="checkbox"]')],dr.prototype,"input",2);f([J()],dr.prototype,"hasFocus",2);f([s()],dr.prototype,"title",2);f([s()],dr.prototype,"name",2);f([s()],dr.prototype,"value",2);f([s({reflect:!0})],dr.prototype,"size",2);f([s({type:Boolean,reflect:!0})],dr.prototype,"disabled",2);f([s({type:Boolean,reflect:!0})],dr.prototype,"checked",2);f([s({type:Boolean,reflect:!0})],dr.prototype,"indeterminate",2);f([kr("checked")],dr.prototype,"defaultChecked",2);f([s({reflect:!0})],dr.prototype,"form",2);f([s({type:Boolean,reflect:!0})],dr.prototype,"required",2);f([s({attribute:"help-text"})],dr.prototype,"helpText",2);f([z("disabled",{waitUntilFirstUpdate:!0})],dr.prototype,"handleDisabledChange",1);f([z(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],dr.prototype,"handleStateChange",1);var Yf=m`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;var po=class extends h{constructor(){super(...arguments);this.localize=new U(this)}render(){return v`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};po.styles=[X,Yf];function Vi(r,o,i){return r?o(r):i?.(r)}var fr=class r extends h{constructor(){super(...arguments);this.localize=new U(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(o){return o instanceof Element&&o.getAttribute("role")==="treeitem"}connectedCallback(){if(super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem())this.slot="children"}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await C(this.childrenContainer);let{keyframes:o,options:i}=A(this,"tree-item.collapse",{dir:this.localize.dir()});await _(this.childrenContainer,eo(o,this.childrenContainer.scrollHeight),i),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){let o=this.parentElement;return!!o&&r.isTreeItem(o)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(o){if(o.has("selected")&&!o.has("indeterminate"))this.indeterminate=!1}async animateExpand(){this.emit("sl-expand"),await C(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:o,options:i}=A(this,"tree-item.expand",{dir:this.localize.dir()});await _(this.childrenContainer,eo(o,this.childrenContainer.scrollHeight),i),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){if(this.setAttribute("aria-busy",this.loading?"true":"false"),!this.loading)this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){if(!this.isLeaf)this.setAttribute("aria-expanded",this.expanded?"true":"false");else this.removeAttribute("aria-expanded")}handleExpandAnimation(){if(this.expanded)if(this.lazy)this.loading=!0,this.emit("sl-lazy-load");else this.animateExpand();else this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:o=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter((i)=>r.isTreeItem(i)&&(o||!i.disabled)):[]}render(){let o=this.matches(":dir(rtl)"),i=!this.loading&&(!this.isLeaf||this.lazy);return v`
      <div
        part="base"
        class="${G({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":i,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${G({"tree-item__expand-button":!0,"tree-item__expand-button--visible":i})}
            aria-hidden="true"
          >
            ${Vi(this.loading,()=>v` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${o?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${o?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Vi(this.selectable,()=>v`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Fr(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};fr.styles=[X,$f];fr.dependencies={"sl-checkbox":dr,"sl-icon":W,"sl-spinner":po};f([J()],fr.prototype,"indeterminate",2);f([J()],fr.prototype,"isLeaf",2);f([J()],fr.prototype,"loading",2);f([J()],fr.prototype,"selectable",2);f([s({type:Boolean,reflect:!0})],fr.prototype,"expanded",2);f([s({type:Boolean,reflect:!0})],fr.prototype,"selected",2);f([s({type:Boolean,reflect:!0})],fr.prototype,"disabled",2);f([s({type:Boolean,reflect:!0})],fr.prototype,"lazy",2);f([$("slot:not([name])")],fr.prototype,"defaultSlot",2);f([$("slot[name=children]")],fr.prototype,"childrenSlot",2);f([$(".tree-item__item")],fr.prototype,"itemElement",2);f([$(".tree-item__children")],fr.prototype,"childrenContainer",2);f([$(".tree-item__expand-button slot")],fr.prototype,"expandButtonSlot",2);f([z("loading",{waitUntilFirstUpdate:!0})],fr.prototype,"handleLoadingChange",1);f([z("disabled")],fr.prototype,"handleDisabledChange",1);f([z("selected")],fr.prototype,"handleSelectedChange",1);f([z("expanded",{waitUntilFirstUpdate:!0})],fr.prototype,"handleExpandedChange",1);f([z("expanded",{waitUntilFirstUpdate:!0})],fr.prototype,"handleExpandAnimation",1);f([z("lazy",{waitUntilFirstUpdate:!0})],fr.prototype,"handleLazyChange",1);var Mo=fr;M("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});M("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function e(r,o,i){let a=(d)=>Object.is(d,-0)?0:d;if(r<o)return a(o);if(r>i)return a(i);return a(r)}function Ff(r,o=!1){function i(n){let b=n.getChildrenItems({includeDisabled:!1});if(b.length){let g=b.every((u)=>u.selected),l=b.every((u)=>!u.selected&&!u.indeterminate);n.selected=g,n.indeterminate=!g&&!l}}function a(n){let b=n.parentElement;if(Mo.isTreeItem(b))i(b),a(b)}function d(n){for(let b of n.getChildrenItems())b.selected=o?n.selected||b.selected:!b.disabled&&n.selected,d(b);if(o)i(n)}d(r),a(r)}var $o=class extends h{constructor(){super();this.selection="single",this.clickTarget=null,this.initTreeItem=(r)=>{r.selectable=this.selection==="multiple",["expand","collapse"].filter((o)=>!!this.querySelector(`[slot="${o}-icon"]`)).forEach((o)=>{let i=r.querySelector(`[slot="${o}-icon"]`),a=this.getExpandButtonIcon(o);if(!a)return;if(i===null)r.append(a);else if(i.hasAttribute("data-default"))i.replaceWith(a)})},this.handleTreeChanged=(r)=>{for(let o of r){let i=[...o.addedNodes].filter(Mo.isTreeItem),a=[...o.removedNodes].filter(Mo.isTreeItem);if(i.forEach(this.initTreeItem),this.lastFocusedItem&&a.includes(this.lastFocusedItem))this.lastFocusedItem=null}},this.handleFocusOut=(r)=>{let o=r.relatedTarget;if(!o||!this.contains(o))this.tabIndex=0},this.handleFocusIn=(r)=>{let o=r.target;if(r.target===this)this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]);if(Mo.isTreeItem(o)&&!o.disabled){if(this.lastFocusedItem)this.lastFocusedItem.tabIndex=-1;this.lastFocusedItem=o,this.tabIndex=-1,o.tabIndex=0}},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.mutationObserver)==null||r.disconnect()}getExpandButtonIcon(r){let i=(r==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){let a=i.cloneNode(!0);return[a,...a.querySelectorAll("[id]")].forEach((d)=>d.removeAttribute("id")),a.setAttribute("data-default",""),a.slot=`${r}-icon`,a}return null}selectItem(r){let o=[...this.selectedItems];if(this.selection==="multiple"){if(r.selected=!r.selected,r.lazy)r.expanded=!0;Ff(r)}else if(this.selection==="single"||r.isLeaf){let a=this.getAllTreeItems();for(let d of a)d.selected=d===r}else if(this.selection==="leaf")r.expanded=!r.expanded;let i=this.selectedItems;if(o.length!==i.length||i.some((a)=>!o.includes(a)))Promise.all(i.map((a)=>a.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(r){r==null||r.focus()}handleKeyDown(r){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(r.key))return;if(r.composedPath().some((d)=>{var n;return["input","textarea"].includes((n=d==null?void 0:d.tagName)==null?void 0:n.toLowerCase())}))return;let o=this.getFocusableItems(),i=this.matches(":dir(ltr)"),a=this.matches(":dir(rtl)");if(o.length>0){r.preventDefault();let d=o.findIndex((l)=>l.matches(":focus")),n=o[d],b=(l)=>{let u=o[e(l,0,o.length-1)];this.focusItem(u)},g=(l)=>{n.expanded=l};if(r.key==="ArrowDown")b(d+1);else if(r.key==="ArrowUp")b(d-1);else if(i&&r.key==="ArrowRight"||a&&r.key==="ArrowLeft")if(!n||n.disabled||n.expanded||n.isLeaf&&!n.lazy)b(d+1);else g(!0);else if(i&&r.key==="ArrowLeft"||a&&r.key==="ArrowRight")if(!n||n.disabled||n.isLeaf||!n.expanded)b(d-1);else g(!1);else if(r.key==="Home")b(0);else if(r.key==="End")b(o.length-1);else if(r.key==="Enter"||r.key===" "){if(!n.disabled)this.selectItem(n)}}}handleClick(r){let o=r.target,i=o.closest("sl-tree-item"),a=r.composedPath().some((d)=>{var n;return(n=d==null?void 0:d.classList)==null?void 0:n.contains("tree-item__expand-button")});if(!i||i.disabled||o!==this.clickTarget)return;if(a)i.expanded=!i.expanded;else this.selectItem(i)}handleMouseDown(r){this.clickTarget=r.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let r=this.selection==="multiple",o=this.getAllTreeItems();this.setAttribute("aria-multiselectable",r?"true":"false");for(let i of o)i.selectable=r;if(r)await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach((i)=>Ff(i,!0))}get selectedItems(){let r=this.getAllTreeItems(),o=(i)=>i.selected;return r.filter(o)}getFocusableItems(){let r=this.getAllTreeItems(),o=new Set;return r.filter((i)=>{var a;if(i.disabled)return!1;let d=(a=i.parentElement)==null?void 0:a.closest("[role=treeitem]");if(d&&(!d.expanded||d.loading||o.has(d)))o.add(i);return!o.has(i)})}render(){return v`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};$o.styles=[X,Qf];f([$("slot:not([name])")],$o.prototype,"defaultSlot",2);f([$("slot[name=expand-icon]")],$o.prototype,"expandedIconSlot",2);f([$("slot[name=collapse-icon]")],$o.prototype,"collapsedIconSlot",2);f([s()],$o.prototype,"selection",2);f([z("selection")],$o.prototype,"handleSelectionChange",1);$o.define("sl-tree");Mo.define("sl-tree-item");var Uf=m`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var j1=0,o0=class extends h{constructor(){super(...arguments);this.attrId=++j1,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return v`
      <slot
        part="base"
        class=${G({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};o0.styles=[X,Uf];f([s({reflect:!0})],o0.prototype,"name",2);f([s({type:Boolean,reflect:!0})],o0.prototype,"active",2);f([z("active")],o0.prototype,"handleActiveChange",1);o0.define("sl-tab-panel");var Nf=m`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;var Wf=m`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var Mf=Symbol.for(""),C1=(r)=>{if(r?.r===Mf)return r?._$litStatic$};var i0=(r,...o)=>({_$litStatic$:o.reduce((i,a,d)=>i+((n)=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(a)+r[d+1],r[0]),r:Mf}),Lf=new Map,Ei=(r)=>(o,...i)=>{let a=i.length,d,n,b=[],g=[],l,u=0,c=!1;for(;u<a;){for(l=o[u];u<a&&(n=i[u],d=C1(n))!==void 0;)l+=d+o[++u],c=!0;u!==a&&g.push(n),b.push(l),u++}if(u===a&&b.push(o[a]),c){let t=b.join("$$lit$$");(o=Lf.get(t))===void 0&&(b.raw=b,Lf.set(t,o=b)),i=g}return r(o,...i)},yo=Ei(v),wp=Ei(wa),zp=Ei(za);var S=class extends h{constructor(){super(...arguments);this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(r){if(this.disabled)r.preventDefault(),r.stopPropagation()}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}render(){let r=this.href?!0:!1,o=r?i0`a`:i0`button`;return yo`
      <${o}
        part="base"
        class=${G({"icon-button":!0,"icon-button--disabled":!r&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${K(r?void 0:this.disabled)}
        type=${K(r?void 0:"button")}
        href=${K(r?this.href:void 0)}
        target=${K(r?this.target:void 0)}
        download=${K(r?this.download:void 0)}
        rel=${K(r&&this.target?"noreferrer noopener":void 0)}
        role=${K(r?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${K(this.name)}
          library=${K(this.library)}
          src=${K(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${o}>
    `}};S.styles=[X,Wf];S.dependencies={"sl-icon":W};f([$(".icon-button")],S.prototype,"button",2);f([J()],S.prototype,"hasFocus",2);f([s()],S.prototype,"name",2);f([s()],S.prototype,"library",2);f([s()],S.prototype,"src",2);f([s()],S.prototype,"href",2);f([s()],S.prototype,"target",2);f([s()],S.prototype,"download",2);f([s()],S.prototype,"label",2);f([s({type:Boolean,reflect:!0})],S.prototype,"disabled",2);var no=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return v`
      <span
        part="base"
        class=${G({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?v`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};no.styles=[X,Nf];no.dependencies={"sl-icon-button":S};f([s({reflect:!0})],no.prototype,"variant",2);f([s({reflect:!0})],no.prototype,"size",2);f([s({type:Boolean,reflect:!0})],no.prototype,"pill",2);f([s({type:Boolean})],no.prototype,"removable",2);no.define("sl-tag");var Vf=m`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;var I=class extends h{constructor(){super(...arguments);this.formControlController=new xr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new R(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var r;if(super.disconnectedCallback(),this.input)(r=this.resizeObserver)==null||r.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}setTextareaHeight(){if(this.resize==="auto")this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`;else this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(r){this.input.focus(r)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(r){if(r){if(typeof r.top==="number")this.input.scrollTop=r.top;if(typeof r.left==="number")this.input.scrollLeft=r.left;return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(r,o,i="none"){this.input.setSelectionRange(r,o,i)}setRangeText(r,o,i,a="preserve"){let d=o!=null?o:this.input.selectionStart,n=i!=null?i:this.input.selectionEnd;if(this.input.setRangeText(r,d,n,a),this.value!==this.input.value)this.value=this.input.value,this.setTextareaHeight()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){let r=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,a=this.helpText?!0:!!o;return v`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${G({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${K(this.name)}
              .value=${Fr(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${K(this.placeholder)}
              rows=${K(this.rows)}
              minlength=${K(this.minlength)}
              maxlength=${K(this.maxlength)}
              autocapitalize=${K(this.autocapitalize)}
              autocorrect=${K(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${K(this.spellcheck)}
              enterkeyhint=${K(this.enterkeyhint)}
              inputmode=${K(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};I.styles=[X,Gr,Vf];f([$(".textarea__control")],I.prototype,"input",2);f([J()],I.prototype,"hasFocus",2);f([s()],I.prototype,"title",2);f([s()],I.prototype,"name",2);f([s()],I.prototype,"value",2);f([s({reflect:!0})],I.prototype,"size",2);f([s({type:Boolean,reflect:!0})],I.prototype,"filled",2);f([s()],I.prototype,"label",2);f([s({attribute:"help-text"})],I.prototype,"helpText",2);f([s()],I.prototype,"placeholder",2);f([s({type:Number})],I.prototype,"rows",2);f([s()],I.prototype,"resize",2);f([s({type:Boolean,reflect:!0})],I.prototype,"disabled",2);f([s({type:Boolean,reflect:!0})],I.prototype,"readonly",2);f([s({reflect:!0})],I.prototype,"form",2);f([s({type:Boolean,reflect:!0})],I.prototype,"required",2);f([s({type:Number})],I.prototype,"minlength",2);f([s({type:Number})],I.prototype,"maxlength",2);f([s()],I.prototype,"autocapitalize",2);f([s()],I.prototype,"autocorrect",2);f([s()],I.prototype,"autocomplete",2);f([s({type:Boolean})],I.prototype,"autofocus",2);f([s()],I.prototype,"enterkeyhint",2);f([s({type:Boolean,converter:{fromAttribute:(r)=>!r||r==="false"?!1:!0,toAttribute:(r)=>r?"true":"false"}})],I.prototype,"spellcheck",2);f([s()],I.prototype,"inputmode",2);f([kr()],I.prototype,"defaultValue",2);f([z("disabled",{waitUntilFirstUpdate:!0})],I.prototype,"handleDisabledChange",1);f([z("rows",{waitUntilFirstUpdate:!0})],I.prototype,"handleRowsChange",1);f([z("value",{waitUntilFirstUpdate:!0})],I.prototype,"handleValueChange",1);I.define("sl-textarea");var Ef=m`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;var e1=0,Mr=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.attrId=++e1,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(r){r.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){if(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active)this.tabIndex=-1;else this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,v`
      <div
        part="base"
        class=${G({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?v`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Mr.styles=[X,Ef];Mr.dependencies={"sl-icon-button":S};f([$(".tab")],Mr.prototype,"tab",2);f([s({reflect:!0})],Mr.prototype,"panel",2);f([s({type:Boolean,reflect:!0})],Mr.prototype,"active",2);f([s({type:Boolean,reflect:!0})],Mr.prototype,"closable",2);f([s({type:Boolean,reflect:!0})],Mr.prototype,"disabled",2);f([s({type:Number,reflect:!0})],Mr.prototype,"tabIndex",2);f([z("active")],Mr.prototype,"handleActiveChange",1);f([z("disabled")],Mr.prototype,"handleDisabledChange",1);Mr.define("sl-tab");var Df=m`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;var Bf=m`
  :host {
    display: contents;
  }
`;var Vo=class extends h{constructor(){super(...arguments);this.observedElements=[],this.disabled=!1}connectedCallback(){if(super.connectedCallback(),this.resizeObserver=new ResizeObserver((r)=>{this.emit("sl-resize",{detail:{entries:r}})}),!this.disabled)this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){if(!this.disabled)this.startObserver()}startObserver(){let r=this.shadowRoot.querySelector("slot");if(r!==null){let o=r.assignedElements({flatten:!0});this.observedElements.forEach((i)=>this.resizeObserver.unobserve(i)),this.observedElements=[],o.forEach((i)=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){if(this.disabled)this.stopObserver();else this.startObserver()}render(){return v` <slot @slotchange=${this.handleSlotChange}></slot> `}};Vo.styles=[X,Bf];f([s({type:Boolean,reflect:!0})],Vo.prototype,"disabled",2);f([z("disabled",{waitUntilFirstUpdate:!0})],Vo.prototype,"handleDisabledChange",1);function S1(r,o){return{top:Math.round(r.getBoundingClientRect().top-o.getBoundingClientRect().top),left:Math.round(r.getBoundingClientRect().left-o.getBoundingClientRect().left)}}var Di=new Set;function rn(){let r=document.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}function on(){let r=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));if(isNaN(r)||!r)return 0;return r}function Eo(r){if(Di.add(r),!document.documentElement.classList.contains("sl-scroll-lock")){let o=rn()+on(),i=getComputedStyle(document.documentElement).scrollbarGutter;if(!i||i==="auto")i="stable";if(o<2)i="";document.documentElement.style.setProperty("--sl-scroll-lock-gutter",i),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${o}px`)}}function Do(r){if(Di.delete(r),Di.size===0)document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size")}function G0(r,o,i="vertical",a="smooth"){let d=S1(r,o),n=d.top+o.scrollTop,b=d.left+o.scrollLeft,g=o.scrollLeft,l=o.scrollLeft+o.offsetWidth,u=o.scrollTop,c=o.scrollTop+o.offsetHeight;if(i==="horizontal"||i==="both"){if(b<g)o.scrollTo({left:b,behavior:a});else if(b+r.clientWidth>l)o.scrollTo({left:b-o.offsetWidth+r.clientWidth,behavior:a})}if(i==="vertical"||i==="both"){if(n<u)o.scrollTo({top:n,behavior:a});else if(n+r.clientHeight>c)o.scrollTo({top:n-o.offsetHeight+r.clientHeight,behavior:a})}}var wr=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.tabs=[],this.focusableTabs=[],this.panels=[],this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let r=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver((o)=>{if(o.some((i)=>!["aria-labelledby","aria-controls"].includes(i.attributeName)))setTimeout(()=>this.setAriaLabels());if(o.some((i)=>i.attributeName==="disabled"))this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),r.then(()=>{new IntersectionObserver((i,a)=>{var d;if(i[0].intersectionRatio>0)this.setAriaLabels(),this.setActiveTab((d=this.getActiveTab())!=null?d:this.tabs[0],{emitEvents:!1}),a.unobserve(i[0].target)}).observe(this.tabGroup)})})}disconnectedCallback(){var r,o;super.disconnectedCallback(),(r=this.mutationObserver)==null||r.disconnect(),(o=this.resizeObserver)==null||o.unobserve(this.nav)}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter((r)=>r.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find((r)=>r.active)}handleClick(r){let i=r.target.closest("sl-tab");if((i==null?void 0:i.closest("sl-tab-group"))!==this)return;if(i!==null)this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(r){let i=r.target.closest("sl-tab");if((i==null?void 0:i.closest("sl-tab-group"))!==this)return;if(["Enter"," "].includes(r.key)){if(i!==null)this.setActiveTab(i,{scrollBehavior:"smooth"}),r.preventDefault()}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(r.key)){let d=this.tabs.find((g)=>g.matches(":focus")),n=this.matches(":dir(rtl)"),b=null;if((d==null?void 0:d.tagName.toLowerCase())==="sl-tab"){if(r.key==="Home")b=this.focusableTabs[0];else if(r.key==="End")b=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&r.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&r.key==="ArrowUp"){let g=this.tabs.findIndex((l)=>l===d);b=this.findNextFocusableTab(g,"backward")}else if(["top","bottom"].includes(this.placement)&&r.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&r.key==="ArrowDown"){let g=this.tabs.findIndex((l)=>l===d);b=this.findNextFocusableTab(g,"forward")}if(!b)return;if(b.tabIndex=0,b.focus({preventScroll:!0}),this.activation==="auto")this.setActiveTab(b,{scrollBehavior:"smooth"});else this.tabs.forEach((g)=>{g.tabIndex=g===b?0:-1});if(["top","bottom"].includes(this.placement))G0(b,this.nav,"horizontal");r.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(r,o){if(o=$r({emitEvents:!0,scrollBehavior:"auto"},o),r!==this.activeTab&&!r.disabled){let i=this.activeTab;if(this.activeTab=r,this.tabs.forEach((a)=>{a.active=a===this.activeTab,a.tabIndex=a===this.activeTab?0:-1}),this.panels.forEach((a)=>{var d;return a.active=a.name===((d=this.activeTab)==null?void 0:d.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement))G0(this.activeTab,this.nav,"horizontal",o.scrollBehavior);if(o.emitEvents){if(i)this.emit("sl-tab-hide",{detail:{name:i.panel}});this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}})}}}setAriaLabels(){this.tabs.forEach((r)=>{let o=this.panels.find((i)=>i.name===r.panel);if(o)r.setAttribute("aria-controls",o.getAttribute("id")),o.setAttribute("aria-labelledby",r.getAttribute("id"))})}repositionIndicator(){let r=this.getActiveTab();if(!r)return;let{clientWidth:o,clientHeight:i}=r,a=this.matches(":dir(rtl)"),d=this.getAllTabs(),b=d.slice(0,d.indexOf(r)).reduce((g,l)=>({left:g.left+l.clientWidth,top:g.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${o}px`,this.indicator.style.height="auto",this.indicator.style.translate=a?`${-1*b.left}px`:`${b.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${b.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter((r)=>!r.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(r,o){let i=null,a=o==="forward"?1:-1,d=r+a;while(r<this.tabs.length){if(i=this.tabs[d]||null,i===null){if(o==="forward")i=this.focusableTabs[0];else i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;d+=a}return i}updateScrollButtons(){if(this.hasScrollControls&&!this.fixedScrollControls)this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd()}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){if(this.noScrollControls)this.hasScrollControls=!1;else this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1;this.updateScrollButtons()}syncIndicator(){if(this.getActiveTab())this.indicator.style.display="block",this.repositionIndicator();else this.indicator.style.display="none"}show(r){let o=this.tabs.find((i)=>i.panel===r);if(o)this.setActiveTab(o,{scrollBehavior:"smooth"})}render(){let r=this.matches(":dir(rtl)");return v`
      <div
        part="base"
        class=${G({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?v`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${G({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${r?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?v`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${G({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${r?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};wr.styles=[X,Df];wr.dependencies={"sl-icon-button":S,"sl-resize-observer":Vo};f([$(".tab-group")],wr.prototype,"tabGroup",2);f([$(".tab-group__body")],wr.prototype,"body",2);f([$(".tab-group__nav")],wr.prototype,"nav",2);f([$(".tab-group__indicator")],wr.prototype,"indicator",2);f([J()],wr.prototype,"hasScrollControls",2);f([J()],wr.prototype,"shouldHideScrollStartButton",2);f([J()],wr.prototype,"shouldHideScrollEndButton",2);f([s()],wr.prototype,"placement",2);f([s()],wr.prototype,"activation",2);f([s({attribute:"no-scroll-controls",type:Boolean})],wr.prototype,"noScrollControls",2);f([s({attribute:"fixed-scroll-controls",type:Boolean})],wr.prototype,"fixedScrollControls",2);f([ao({passive:!0})],wr.prototype,"updateScrollButtons",1);f([z("noScrollControls",{waitUntilFirstUpdate:!0})],wr.prototype,"updateScrollControls",1);f([z("placement",{waitUntilFirstUpdate:!0})],wr.prototype,"syncIndicator",1);wr.define("sl-tab-group");po.define("sl-spinner");var Pf=m`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Xo(r,o){function i(d){let n=r.getBoundingClientRect(),b=r.ownerDocument.defaultView,g=n.left+b.scrollX,l=n.top+b.scrollY,u=d.pageX-g,c=d.pageY-l;if(o==null?void 0:o.onMove)o.onMove(u,c)}function a(){if(document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",a),o==null?void 0:o.onStop)o.onStop()}if(document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",a),(o==null?void 0:o.initialEvent)instanceof PointerEvent)i(o.initialEvent)}var Jr=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((r)=>this.handleResize(r)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resizeObserver)==null||r.unobserve(this)}detectSize(){let{width:r,height:o}=this.getBoundingClientRect();this.size=this.vertical?o:r}percentageToPixels(r){return this.size*(r/100)}pixelsToPercentage(r){return r/this.size*100}handleDrag(r){let o=this.matches(":dir(rtl)");if(this.disabled)return;if(r.cancelable)r.preventDefault();Xo(this,{onMove:(i,a)=>{let d=this.vertical?a:i;if(this.primary==="end")d=this.size-d;if(this.snap)this.snap.split(" ").forEach((b)=>{let g;if(b.endsWith("%"))g=this.size*(parseFloat(b)/100);else g=parseFloat(b);if(o&&!this.vertical)g=this.size-g;if(d>=g-this.snapThreshold&&d<=g+this.snapThreshold)d=g});this.position=e(this.pixelsToPercentage(d),0,100)},initialEvent:r})}handleKeyDown(r){if(this.disabled)return;if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(r.key)){let o=this.position,i=(r.shiftKey?10:1)*(this.primary==="end"?-1:1);if(r.preventDefault(),r.key==="ArrowLeft"&&!this.vertical||r.key==="ArrowUp"&&this.vertical)o-=i;if(r.key==="ArrowRight"&&!this.vertical||r.key==="ArrowDown"&&this.vertical)o+=i;if(r.key==="Home")o=this.primary==="end"?100:0;if(r.key==="End")o=this.primary==="end"?0:100;this.position=e(o,0,100)}}handleResize(r){let{width:o,height:i}=r[0].contentRect;if(this.size=this.vertical?i:o,isNaN(this.cachedPositionInPixels)||this.position===1/0)this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels);if(this.primary)this.position=this.pixelsToPercentage(this.cachedPositionInPixels)}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let r=this.vertical?"gridTemplateRows":"gridTemplateColumns",o=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.matches(":dir(rtl)"),a=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,d="auto";if(this.primary==="end")if(i&&!this.vertical)this.style[r]=`${a} var(--divider-width) auto`;else this.style[r]=`auto var(--divider-width) ${a}`;else if(i&&!this.vertical)this.style[r]=`auto var(--divider-width) ${a}`;else this.style[r]=`${a} var(--divider-width) auto`;return this.style[o]="",v`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${K(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Jr.styles=[X,Pf];f([$(".divider")],Jr.prototype,"divider",2);f([s({type:Number,reflect:!0})],Jr.prototype,"position",2);f([s({attribute:"position-in-pixels",type:Number})],Jr.prototype,"positionInPixels",2);f([s({type:Boolean,reflect:!0})],Jr.prototype,"vertical",2);f([s({type:Boolean,reflect:!0})],Jr.prototype,"disabled",2);f([s()],Jr.prototype,"primary",2);f([s()],Jr.prototype,"snap",2);f([s({type:Number,attribute:"snap-threshold"})],Jr.prototype,"snapThreshold",2);f([z("position")],Jr.prototype,"handlePositionChange",1);f([z("positionInPixels")],Jr.prototype,"handlePositionInPixelsChange",1);f([z("vertical")],Jr.prototype,"handleVerticalChange",1);Jr.define("sl-split-panel");var Af=m`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;var hr=class extends h{constructor(){super(...arguments);this.formControlController=new xr(this,{value:(r)=>r.checked?r.value||"on":void 0,defaultValue:(r)=>r.defaultChecked,setValue:(r,o)=>r.checked=o}),this.hasSlotController=new R(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(r){if(r.key==="ArrowLeft")r.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input");if(r.key==="ArrowRight")r.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input")}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(r){this.input.focus(r)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){let r=this.hasSlotController.test("help-text"),o=this.helpText?!0:!!r;return v`
      <div
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":o})}
      >
        <label
          part="base"
          class=${G({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${K(this.value)}
            .checked=${Fr(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${o?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};hr.styles=[X,Gr,Af];f([$('input[type="checkbox"]')],hr.prototype,"input",2);f([J()],hr.prototype,"hasFocus",2);f([s()],hr.prototype,"title",2);f([s()],hr.prototype,"name",2);f([s()],hr.prototype,"value",2);f([s({reflect:!0})],hr.prototype,"size",2);f([s({type:Boolean,reflect:!0})],hr.prototype,"disabled",2);f([s({type:Boolean,reflect:!0})],hr.prototype,"checked",2);f([kr("checked")],hr.prototype,"defaultChecked",2);f([s({reflect:!0})],hr.prototype,"form",2);f([s({type:Boolean,reflect:!0})],hr.prototype,"required",2);f([s({attribute:"help-text"})],hr.prototype,"helpText",2);f([z("checked",{waitUntilFirstUpdate:!0})],hr.prototype,"handleCheckedChange",1);f([z("disabled",{waitUntilFirstUpdate:!0})],hr.prototype,"handleDisabledChange",1);hr.define("sl-switch");Vo.define("sl-resize-observer");var If=m`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;class ni extends jr{constructor(r){if(super(r),this.it=j,r.type!==Xr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===j||r==null)return this._t=void 0,this.it=r;if(r===vr)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;let o=[r];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}ni.directiveName="unsafeHTML",ni.resultType=1;var a0=Rr(ni);var P=class extends h{constructor(){super(...arguments);this.formControlController=new xr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new R(this,"help-text","label"),this.localize=new U(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=(r)=>{return v`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${(o)=>this.handleTagRemove(o,r)}
      >
        ${r.getTextLabel()}
      </sl-tag>
    `},this.handleDocumentFocusIn=(r)=>{let o=r.composedPath();if(this&&!o.includes(this))this.hide()},this.handleDocumentKeyDown=(r)=>{let o=r.target,i=o.closest(".select__clear")!==null,a=o.closest("sl-icon-button")!==null;if(i||a)return;if(r.key==="Escape"&&this.open&&!this.closeWatcher)r.preventDefault(),r.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0});if(r.key==="Enter"||r.key===" "&&this.typeToSelectString===""){if(r.preventDefault(),r.stopImmediatePropagation(),!this.open){this.show();return}if(this.currentOption&&!this.currentOption.disabled){if(this.multiple)this.toggleOptionSelection(this.currentOption);else this.setSelectedOptions(this.currentOption);if(this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),!this.multiple)this.hide(),this.displayInput.focus({preventScroll:!0})}return}if(["ArrowUp","ArrowDown","Home","End"].includes(r.key)){let d=this.getAllOptions(),n=d.indexOf(this.currentOption),b=Math.max(0,n);if(r.preventDefault(),!this.open){if(this.show(),this.currentOption)return}if(r.key==="ArrowDown"){if(b=n+1,b>d.length-1)b=0}else if(r.key==="ArrowUp"){if(b=n-1,b<0)b=d.length-1}else if(r.key==="Home")b=0;else if(r.key==="End")b=d.length-1;this.setCurrentOption(d[b])}if(r.key.length===1||r.key==="Backspace"){let d=this.getAllOptions();if(r.metaKey||r.ctrlKey||r.altKey)return;if(!this.open){if(r.key==="Backspace")return;this.show()}if(r.stopPropagation(),r.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1000),r.key==="Backspace")this.typeToSelectString=this.typeToSelectString.slice(0,-1);else this.typeToSelectString+=r.key.toLowerCase();for(let n of d)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}},this.handleDocumentMouseDown=(r)=>{let o=r.composedPath();if(this&&!o.includes(this))this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){var r;if(document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document)this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn);if("CloseWatcher"in window)(r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{if(this.open)this.hide(),this.displayInput.focus({preventScroll:!0})}}removeOpenListeners(){var r;if(document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document)this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn);(r=this.closeWatcher)==null||r.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(r){let i=r.composedPath().some((a)=>a instanceof Element&&a.tagName.toLowerCase()==="sl-icon-button");if(this.disabled||i)return;r.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open}handleComboboxKeyDown(r){if(r.key==="Tab")return;r.stopPropagation(),this.handleDocumentKeyDown(r)}handleClearClick(r){if(r.stopPropagation(),this.value!=="")this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")})}handleClearMouseDown(r){r.stopPropagation(),r.preventDefault()}handleOptionClick(r){let i=r.target.closest("sl-option"),a=this.value;if(i&&!i.disabled){if(this.multiple)this.toggleOptionSelection(i);else this.setSelectedOptions(i);if(this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==a)this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")});if(!this.multiple)this.hide(),this.displayInput.focus({preventScroll:!0})}}handleDefaultSlotChange(){let r=this.getAllOptions(),o=Array.isArray(this.value)?this.value:[this.value],i=[];if(customElements.get("sl-option"))r.forEach((a)=>i.push(a.value)),this.setSelectedOptions(r.filter((a)=>o.includes(a.value)));else customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(r,o){if(r.stopPropagation(),!this.disabled)this.toggleOptionSelection(o,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")})}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(r){if(this.getAllOptions().forEach((i)=>{i.current=!1,i.tabIndex=-1}),r)this.currentOption=r,r.current=!0,r.tabIndex=0,r.focus()}setSelectedOptions(r){let o=this.getAllOptions(),i=Array.isArray(r)?r:[r];if(o.forEach((a)=>a.selected=!1),i.length)i.forEach((a)=>a.selected=!0);this.selectionChanged()}toggleOptionSelection(r,o){if(o===!0||o===!1)r.selected=o;else r.selected=!r.selected;this.selectionChanged()}selectionChanged(){var r,o,i,a;if(this.selectedOptions=this.getAllOptions().filter((d)=>d.selected),this.multiple)if(this.value=this.selectedOptions.map((d)=>d.value),this.placeholder&&this.value.length===0)this.displayLabel="";else this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else this.value=(o=(r=this.selectedOptions[0])==null?void 0:r.value)!=null?o:"",this.displayLabel=(a=(i=this.selectedOptions[0])==null?void 0:i.getTextLabel())!=null?a:"";this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((r,o)=>{if(o<this.maxOptionsVisible||this.maxOptionsVisible<=0){let i=this.getTag(r,o);return v`<div @sl-remove=${(a)=>this.handleTagRemove(a,r)}>
          ${typeof i==="string"?a0(i):i}
        </div>`}else if(o===this.maxOptionsVisible)return v`<sl-tag size=${this.size}>+${this.selectedOptions.length-o}</sl-tag>`;return v``})}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleDisabledChange(){if(this.disabled)this.open=!1,this.handleOpenChange()}handleValueChange(){let r=this.getAllOptions(),o=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(r.filter((i)=>o.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await C(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:r,options:o}=A(this,"select.show",{dir:this.localize.dir()});if(await _(this.popup.popup,r,o),this.currentOption)G0(this.currentOption,this.listbox,"vertical","auto");this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await C(this);let{keyframes:r,options:o}=A(this,"select.hide",{dir:this.localize.dir()});await _(this.popup.popup,r,o),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,or(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,or(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(r){this.valueInput.setCustomValidity(r),this.formControlController.updateValidity()}focus(r){this.displayInput.focus(r)}blur(){this.displayInput.blur()}render(){let r=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,a=this.helpText?!0:!!o,d=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value.length===0;return v`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":a})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${G({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?v`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${d?v`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};P.styles=[X,Gr,If];P.dependencies={"sl-icon":W,"sl-popup":B,"sl-tag":no};f([$(".select")],P.prototype,"popup",2);f([$(".select__combobox")],P.prototype,"combobox",2);f([$(".select__display-input")],P.prototype,"displayInput",2);f([$(".select__value-input")],P.prototype,"valueInput",2);f([$(".select__listbox")],P.prototype,"listbox",2);f([J()],P.prototype,"hasFocus",2);f([J()],P.prototype,"displayLabel",2);f([J()],P.prototype,"currentOption",2);f([J()],P.prototype,"selectedOptions",2);f([s()],P.prototype,"name",2);f([s({converter:{fromAttribute:(r)=>r.split(" "),toAttribute:(r)=>r.join(" ")}})],P.prototype,"value",2);f([kr()],P.prototype,"defaultValue",2);f([s({reflect:!0})],P.prototype,"size",2);f([s()],P.prototype,"placeholder",2);f([s({type:Boolean,reflect:!0})],P.prototype,"multiple",2);f([s({attribute:"max-options-visible",type:Number})],P.prototype,"maxOptionsVisible",2);f([s({type:Boolean,reflect:!0})],P.prototype,"disabled",2);f([s({type:Boolean})],P.prototype,"clearable",2);f([s({type:Boolean,reflect:!0})],P.prototype,"open",2);f([s({type:Boolean})],P.prototype,"hoist",2);f([s({type:Boolean,reflect:!0})],P.prototype,"filled",2);f([s({type:Boolean,reflect:!0})],P.prototype,"pill",2);f([s()],P.prototype,"label",2);f([s({reflect:!0})],P.prototype,"placement",2);f([s({attribute:"help-text"})],P.prototype,"helpText",2);f([s({reflect:!0})],P.prototype,"form",2);f([s({type:Boolean,reflect:!0})],P.prototype,"required",2);f([s()],P.prototype,"getTag",2);f([z("disabled",{waitUntilFirstUpdate:!0})],P.prototype,"handleDisabledChange",1);f([z("value",{waitUntilFirstUpdate:!0})],P.prototype,"handleValueChange",1);f([z("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);M("select.show",{keyframes:[{opacity:0,scale:0.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});M("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:0.9}],options:{duration:100,easing:"ease"}});P.define("sl-select");var Tf=m`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;var si=class extends h{constructor(){super(...arguments);this.effect="none"}render(){return v`
      <div
        part="base"
        class=${G({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};si.styles=[X,Tf];f([s()],si.prototype,"effect",2);si.define("sl-skeleton");var _f=m`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;var rr=class extends h{constructor(){super(...arguments);this.formControlController=new xr(this),this.hasSlotController=new R(this,"help-text","label"),this.localize=new U(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=(r)=>r.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){if(super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min)this.value=this.min;if(this.value>this.max)this.value=this.max;this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resizeObserver)==null||r.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(r){this.input.style.setProperty("--percent",`${r*100}%`)}syncTooltip(r){if(this.output!==null){let o=this.input.offsetWidth,i=this.output.offsetWidth,a=getComputedStyle(this.input).getPropertyValue("--thumb-size"),d=this.matches(":dir(rtl)"),n=o*r;if(d){let b=`${o-n}px + ${r} * ${a}`;this.output.style.translate=`calc((${b} - ${i/2}px - ${a} / 2))`}else{let b=`${n}px - ${r} * ${a}`;this.output.style.translate=`calc(${b} - ${i/2}px + ${a} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let r=Math.max(0,(this.value-this.min)/(this.max-this.min));if(this.syncProgress(r),this.tooltip!=="none")this.updateComplete.then(()=>this.syncTooltip(r))}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}focus(r){this.input.focus(r)}blur(){this.input.blur()}stepUp(){if(this.input.stepUp(),this.value!==Number(this.input.value))this.value=Number(this.input.value)}stepDown(){if(this.input.stepDown(),this.value!==Number(this.input.value))this.value=Number(this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){let r=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,a=this.helpText?!0:!!o;return v`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${G({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${K(this.name)}
              ?disabled=${this.disabled}
              min=${K(this.min)}
              max=${K(this.max)}
              step=${K(this.step)}
              .value=${Fr(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?v`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter==="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};rr.styles=[X,Gr,_f];f([$(".range__control")],rr.prototype,"input",2);f([$(".range__tooltip")],rr.prototype,"output",2);f([J()],rr.prototype,"hasFocus",2);f([J()],rr.prototype,"hasTooltip",2);f([s()],rr.prototype,"title",2);f([s()],rr.prototype,"name",2);f([s({type:Number})],rr.prototype,"value",2);f([s()],rr.prototype,"label",2);f([s({attribute:"help-text"})],rr.prototype,"helpText",2);f([s({type:Boolean,reflect:!0})],rr.prototype,"disabled",2);f([s({type:Number})],rr.prototype,"min",2);f([s({type:Number})],rr.prototype,"max",2);f([s({type:Number})],rr.prototype,"step",2);f([s()],rr.prototype,"tooltip",2);f([s({attribute:!1})],rr.prototype,"tooltipFormatter",2);f([s({reflect:!0})],rr.prototype,"form",2);f([kr()],rr.prototype,"defaultValue",2);f([ao({passive:!0})],rr.prototype,"handleThumbDragStart",1);f([z("value",{waitUntilFirstUpdate:!0})],rr.prototype,"handleValueChange",1);f([z("disabled",{waitUntilFirstUpdate:!0})],rr.prototype,"handleDisabledChange",1);f([z("hasTooltip",{waitUntilFirstUpdate:!0})],rr.prototype,"syncRange",1);rr.define("sl-range");var Rf=m`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;var jf="important",an=" !"+jf,lr=Rr(class extends jr{constructor(r){if(super(r),r.type!==Xr.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((o,i)=>{let a=r[i];return a==null?o:o+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(r,[o]){let{style:i}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(o)),this.render(o);for(let a of this.ft)o[a]==null&&(this.ft.delete(a),a.includes("-")?i.removeProperty(a):i[a]=null);for(let a in o){let d=o[a];if(d!=null){this.ft.add(a);let n=typeof d=="string"&&d.endsWith(an);a.includes("-")||n?i.setProperty(a,n?d.slice(0,-11):d,n?jf:""):i[a]=d}}return vr}});var mr=class extends h{constructor(){super(...arguments);this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(r){return this.getValueFromXCoordinate(r.clientX)}getValueFromTouchPosition(r){return this.getValueFromXCoordinate(r.touches[0].clientX)}getValueFromXCoordinate(r){let o=this.matches(":dir(rtl)"),{left:i,right:a,width:d}=this.rating.getBoundingClientRect(),n=o?this.roundToPrecision((a-r)/d*this.max,this.precision):this.roundToPrecision((r-i)/d*this.max,this.precision);return e(n,0,this.max)}handleClick(r){if(this.disabled)return;this.setValue(this.getValueFromMousePosition(r)),this.emit("sl-change")}setValue(r){if(this.disabled||this.readonly)return;this.value=r===this.value?0:r,this.isHovering=!1}handleKeyDown(r){let o=this.matches(":dir(ltr)"),i=this.matches(":dir(rtl)"),a=this.value;if(this.disabled||this.readonly)return;if(r.key==="ArrowDown"||o&&r.key==="ArrowLeft"||i&&r.key==="ArrowRight"){let d=r.shiftKey?1:this.precision;this.value=Math.max(0,this.value-d),r.preventDefault()}if(r.key==="ArrowUp"||o&&r.key==="ArrowRight"||i&&r.key==="ArrowLeft"){let d=r.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+d),r.preventDefault()}if(r.key==="Home")this.value=0,r.preventDefault();if(r.key==="End")this.value=this.max,r.preventDefault();if(this.value!==a)this.emit("sl-change")}handleMouseEnter(r){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(r)}handleMouseMove(r){this.hoverValue=this.getValueFromMousePosition(r)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(r){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(r),r.preventDefault()}handleTouchMove(r){this.hoverValue=this.getValueFromTouchPosition(r)}handleTouchEnd(r){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),r.preventDefault()}roundToPrecision(r,o=0.5){let i=1/o;return Math.ceil(r*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(r){this.rating.focus(r)}blur(){this.rating.blur()}render(){let r=this.matches(":dir(rtl)"),o=Array.from(Array(this.max).keys()),i=0;if(this.disabled||this.readonly)i=this.value;else i=this.isHovering?this.hoverValue:this.value;return v`
      <div
        part="base"
        class=${G({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":r})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${o.map((a)=>{if(i>a&&i<a+1)return v`
                <span
                  class=${G({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===a+1})}
                  role="presentation"
                >
                  <div
                    style=${lr({clipPath:r?`inset(0 ${(i-a)*100}% 0 0)`:`inset(0 0 0 ${(i-a)*100}%)`})}
                  >
                    ${a0(this.getSymbol(a+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${lr({clipPath:r?`inset(0 0 0 ${100-(i-a)*100}%)`:`inset(0 ${100-(i-a)*100}% 0 0)`})}
                  >
                    ${a0(this.getSymbol(a+1))}
                  </div>
                </span>
              `;return v`
              <span
                class=${G({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===a+1,"rating__symbol--active":i>=a+1})}
                role="presentation"
              >
                ${a0(this.getSymbol(a+1))}
              </span>
            `})}
        </span>
      </div>
    `}};mr.styles=[X,Rf];mr.dependencies={"sl-icon":W};f([$(".rating")],mr.prototype,"rating",2);f([J()],mr.prototype,"hoverValue",2);f([J()],mr.prototype,"isHovering",2);f([s()],mr.prototype,"label",2);f([s({type:Number})],mr.prototype,"value",2);f([s({type:Number})],mr.prototype,"max",2);f([s({type:Number})],mr.prototype,"precision",2);f([s({type:Boolean,reflect:!0})],mr.prototype,"readonly",2);f([s({type:Boolean,reflect:!0})],mr.prototype,"disabled",2);f([s()],mr.prototype,"getSymbol",2);f([ao({passive:!0})],mr.prototype,"handleTouchMove",1);f([z("hoverValue")],mr.prototype,"handleHoverValueChange",1);f([z("isHovering")],mr.prototype,"handleIsHoveringChange",1);mr.define("sl-rating");var fn=[{max:2760000,value:60000,unit:"minute"},{max:72000000,value:3600000,unit:"hour"},{max:518400000,value:86400000,unit:"day"},{max:2419200000,value:604800000,unit:"week"},{max:28512000000,value:2592000000,unit:"month"},{max:1/0,value:31536000000,unit:"year"}],Zo=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let r=new Date,o=new Date(this.date);if(isNaN(o.getMilliseconds()))return this.relativeTime="",this.isoTime="","";let i=o.getTime()-r.getTime(),{unit:a,value:d}=fn.find((n)=>Math.abs(i)<n.max);if(this.isoTime=o.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/d),a,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let n;if(a==="minute")n=bi("second");else if(a==="hour")n=bi("minute");else if(a==="day")n=bi("hour");else n=bi("day");this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),n)}return v` <time datetime=${this.isoTime} title=${this.relativeTime}>${this.relativeTime}</time> `}};f([J()],Zo.prototype,"isoTime",2);f([J()],Zo.prototype,"relativeTime",2);f([s()],Zo.prototype,"date",2);f([s()],Zo.prototype,"format",2);f([s()],Zo.prototype,"numeric",2);f([s({type:Boolean})],Zo.prototype,"sync",2);function bi(r){let i={second:1000,minute:60000,hour:3600000,day:86400000}[r];return i-Date.now()%i}Zo.define("sl-relative-time");var gi=m`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;var Cf=m`
  ${gi}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;var Vr=class extends h{constructor(){super(...arguments);this.hasSlotController=new R(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(r){if(this.disabled){r.preventDefault(),r.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(r){this.input.focus(r)}blur(){this.input.blur()}render(){return yo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${G({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${K(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Vr.styles=[X,Cf];f([$(".button")],Vr.prototype,"input",2);f([$(".hidden-input")],Vr.prototype,"hiddenInput",2);f([J()],Vr.prototype,"hasFocus",2);f([s({type:Boolean,reflect:!0})],Vr.prototype,"checked",2);f([s()],Vr.prototype,"value",2);f([s({type:Boolean,reflect:!0})],Vr.prototype,"disabled",2);f([s({reflect:!0})],Vr.prototype,"size",2);f([s({type:Boolean,reflect:!0})],Vr.prototype,"pill",2);f([z("disabled",{waitUntilFirstUpdate:!0})],Vr.prototype,"handleDisabledChange",1);Vr.define("sl-radio-button");var ef=m`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;var Sf=m`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var so=class extends h{constructor(){super(...arguments);this.disableRole=!1,this.label=""}handleFocus(r){let o=J0(r.target);o==null||o.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(r){let o=J0(r.target);o==null||o.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(r){let o=J0(r.target);o==null||o.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(r){let o=J0(r.target);o==null||o.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){let r=[...this.defaultSlot.assignedElements({flatten:!0})];r.forEach((o)=>{let i=r.indexOf(o),a=J0(o);if(a)a.toggleAttribute("data-sl-button-group__button",!0),a.toggleAttribute("data-sl-button-group__button--first",i===0),a.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<r.length-1),a.toggleAttribute("data-sl-button-group__button--last",i===r.length-1),a.toggleAttribute("data-sl-button-group__button--radio",a.tagName.toLowerCase()==="sl-radio-button")})}render(){return v`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};so.styles=[X,Sf];f([$("slot")],so.prototype,"defaultSlot",2);f([J()],so.prototype,"disableRole",2);f([s()],so.prototype,"label",2);function J0(r){var o;let i="sl-button, sl-radio-button";return(o=r.closest("sl-button, sl-radio-button"))!=null?o:r.querySelector("sl-button, sl-radio-button")}var zr=class extends h{constructor(){super(...arguments);this.formControlController=new xr(this),this.hasSlotController=new R(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){let r=this.required&&!this.value;if(this.customValidityMessage!=="")return Na;else if(r)return Ua;return _o}get validationMessage(){let r=this.required&&!this.value;if(this.customValidityMessage!=="")return this.customValidityMessage;else if(r)return this.validationInput.validationMessage;return""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(r){let o=r.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),a=this.value;if(!o||o.disabled)return;if(this.value=o.value,i.forEach((d)=>d.checked=d===o),this.value!==a)this.emit("sl-change"),this.emit("sl-input")}handleKeyDown(r){var o;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(r.key))return;let i=this.getAllRadios().filter((g)=>!g.disabled),a=(o=i.find((g)=>g.checked))!=null?o:i[0],d=r.key===" "?0:["ArrowUp","ArrowLeft"].includes(r.key)?-1:1,n=this.value,b=i.indexOf(a)+d;if(b<0)b=i.length-1;if(b>i.length-1)b=0;if(this.getAllRadios().forEach((g)=>{if(g.checked=!1,!this.hasButtonGroup)g.setAttribute("tabindex","-1")}),this.value=i[b].value,i[b].checked=!0,!this.hasButtonGroup)i[b].setAttribute("tabindex","0"),i[b].focus();else i[b].shadowRoot.querySelector("button").focus();if(this.value!==n)this.emit("sl-change"),this.emit("sl-input");r.preventDefault()}handleLabelClick(){let r=this.getAllRadios(),i=r.find((a)=>a.checked)||r[0];if(i)i.focus()}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}async syncRadioElements(){var r,o;let i=this.getAllRadios();if(await Promise.all(i.map(async(a)=>{await a.updateComplete,a.checked=a.value===this.value,a.size=this.size})),this.hasButtonGroup=i.some((a)=>a.tagName.toLowerCase()==="sl-radio-button"),i.length>0&&!i.some((a)=>a.checked))if(this.hasButtonGroup){let a=(r=i[0].shadowRoot)==null?void 0:r.querySelector("button");if(a)a.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){let a=(o=this.shadowRoot)==null?void 0:o.querySelector("sl-button-group");if(a)a.disableRole=!0}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}if(customElements.get("sl-radio"))this.syncRadioElements();else customElements.whenDefined("sl-radio").then(()=>this.syncRadios());if(customElements.get("sl-radio-button"))this.syncRadioElements();else customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach((o)=>o.checked=o.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){if(this.hasUpdated)this.updateCheckedRadio()}checkValidity(){let r=this.required&&!this.value,o=this.customValidityMessage!=="";if(r||o)return this.formControlController.emitInvalidEvent(),!1;return!0}getForm(){return this.formControlController.getForm()}reportValidity(){let r=this.validity.valid;if(this.errorMessage=this.customValidityMessage||r?"":this.validationInput.validationMessage,this.formControlController.setValidity(r),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),!r)this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4);return r}setCustomValidity(r=""){this.customValidityMessage=r,this.errorMessage=r,this.validationInput.setCustomValidity(r),this.formControlController.updateValidity()}render(){let r=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,a=this.helpText?!0:!!o,d=v`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return v`
      <fieldset
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":a})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?v`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${d}
                </sl-button-group>
              `:d}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};zr.styles=[X,Gr,ef];zr.dependencies={"sl-button-group":so};f([$("slot:not([name])")],zr.prototype,"defaultSlot",2);f([$(".radio-group__validation-input")],zr.prototype,"validationInput",2);f([J()],zr.prototype,"hasButtonGroup",2);f([J()],zr.prototype,"errorMessage",2);f([J()],zr.prototype,"defaultValue",2);f([s()],zr.prototype,"label",2);f([s({attribute:"help-text"})],zr.prototype,"helpText",2);f([s()],zr.prototype,"name",2);f([s({reflect:!0})],zr.prototype,"value",2);f([s({reflect:!0})],zr.prototype,"size",2);f([s({reflect:!0})],zr.prototype,"form",2);f([s({type:Boolean,reflect:!0})],zr.prototype,"required",2);f([z("size",{waitUntilFirstUpdate:!0})],zr.prototype,"handleSizeChange",1);f([z("value")],zr.prototype,"handleValueChange",1);zr.define("sl-radio-group");var rd=m`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;var Bo=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.value=0,this.label=""}updated(r){if(super.updated(r),r.has("value")){let o=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*o,a=i-this.value/100*i;this.indicatorOffset=`${a}px`}}render(){return v`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Bo.styles=[X,rd];f([$(".progress-ring__indicator")],Bo.prototype,"indicator",2);f([J()],Bo.prototype,"indicatorOffset",2);f([s({type:Number,reflect:!0})],Bo.prototype,"value",2);f([s()],Bo.prototype,"label",2);Bo.define("sl-progress-ring");var od=m`
  :host {
    display: inline-block;
  }
`;var id=null;class Bi{}Bi.render=function(r,o){id(r,o)};self.QrCreator=Bi;(function(r){function o(g,l,u,c){var t={},p=r(u,l);p.u(g),p.J(),c=c||0;var x=p.h(),w=p.h()+2*c;return t.text=g,t.level=l,t.version=u,t.O=w,t.a=function(Q,H){return Q-=c,H-=c,0>Q||Q>=x||0>H||H>=x?!1:p.a(Q,H)},t}function i(g,l,u,c,t,p,x,w,Q,H){function O(k,q,y,Z,F,V,D){k?(g.lineTo(q+V,y+D),g.arcTo(q,y,Z,F,p)):g.lineTo(q,y)}x?g.moveTo(l+p,u):g.moveTo(l,u),O(w,c,u,c,t,-p,0),O(Q,c,t,l,t,0,-p),O(H,l,t,l,u,p,0),O(x,l,u,c,u,0,p)}function a(g,l,u,c,t,p,x,w,Q,H){function O(k,q,y,Z){g.moveTo(k+y,q),g.lineTo(k,q),g.lineTo(k,q+Z),g.arcTo(k,q,k+y,q,p)}x&&O(l,u,p,p),w&&O(c,u,-p,p),Q&&O(c,t,-p,-p),H&&O(l,t,p,-p)}function d(g,l){var u=l.fill;if(typeof u==="string")g.fillStyle=u;else{var{type:c,colorStops:t}=u;if(u=u.position.map((x)=>Math.round(x*l.size)),c==="linear-gradient")var p=g.createLinearGradient.apply(g,u);else if(c==="radial-gradient")p=g.createRadialGradient.apply(g,u);else throw Error("Unsupported fill");t.forEach(([x,w])=>{p.addColorStop(x,w)}),g.fillStyle=p}}function n(g,l){r:{var{text:u,v:c,N:t,K:p,P:x}=l;t=Math.max(1,t||1);for(p=Math.min(40,p||40);t<=p;t+=1)try{var w=o(u,c,t,x);break r}catch(oo){}w=void 0}if(!w)return null;u=g.getContext("2d"),l.background&&(u.fillStyle=l.background,u.fillRect(l.left,l.top,l.size,l.size)),c=w.O,p=l.size/c,u.beginPath();for(x=0;x<c;x+=1)for(t=0;t<c;t+=1){var Q=u,H=l.left+t*p,O=l.top+x*p,k=x,q=t,y=w.a,Z=H+p,F=O+p,V=k-1,D=k+1,N=q-1,Y=q+1,gr=Math.floor(Math.min(0.5,Math.max(0,l.R))*p),nr=y(k,q),Qr=y(V,N),sr=y(V,q);V=y(V,Y);var Ir=y(k,Y);Y=y(D,Y),q=y(D,q),D=y(D,N),k=y(k,N),H=Math.round(H),O=Math.round(O),Z=Math.round(Z),F=Math.round(F),nr?i(Q,H,O,Z,F,gr,!sr&&!k,!sr&&!Ir,!q&&!Ir,!q&&!k):a(Q,H,O,Z,F,gr,sr&&k&&Qr,sr&&Ir&&V,q&&Ir&&Y,q&&k&&D)}return d(u,l),u.fill(),g}var b={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:0.5,quiet:0};id=function(g,l){var u={};if(Object.assign(u,b,g),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,l instanceof HTMLCanvasElement){if(l.width!==u.size||l.height!==u.size)l.width=u.size,l.height=u.size;l.getContext("2d").clearRect(0,0,l.width,l.height),n(l,u)}else g=document.createElement("canvas"),g.width=u.size,g.height=u.size,u=n(g,u),l.appendChild(u)}})(function(){function r(l){var u=i.s(l);return{S:function(){return 4},b:function(){return u.length},write:function(c){for(var t=0;t<u.length;t+=1)c.put(u[t],8)}}}function o(){var l=[],u=0,c={B:function(){return l},c:function(t){return(l[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(t,p){for(var x=0;x<p;x+=1)c.m((t>>>p-x-1&1)==1)},f:function(){return u},m:function(t){var p=Math.floor(u/8);l.length<=p&&l.push(0),t&&(l[p]|=128>>>u%8),u+=1}};return c}function i(l,u){function c(k,q){for(var y=-1;7>=y;y+=1)if(!(-1>=k+y||w<=k+y))for(var Z=-1;7>=Z;Z+=1)-1>=q+Z||w<=q+Z||(x[k+y][q+Z]=0<=y&&6>=y&&(Z==0||Z==6)||0<=Z&&6>=Z&&(y==0||y==6)||2<=y&&4>=y&&2<=Z&&4>=Z?!0:!1)}function t(k,q){for(var y=w=4*l+17,Z=Array(y),F=0;F<y;F+=1){Z[F]=Array(y);for(var V=0;V<y;V+=1)Z[F][V]=null}x=Z,c(0,0),c(w-7,0),c(0,w-7),y=n.G(l);for(Z=0;Z<y.length;Z+=1)for(F=0;F<y.length;F+=1){V=y[Z];var D=y[F];if(x[V][D]==null)for(var N=-2;2>=N;N+=1)for(var Y=-2;2>=Y;Y+=1)x[V+N][D+Y]=N==-2||N==2||Y==-2||Y==2||N==0&&Y==0}for(y=8;y<w-8;y+=1)x[y][6]==null&&(x[y][6]=y%2==0);for(y=8;y<w-8;y+=1)x[6][y]==null&&(x[6][y]=y%2==0);y=n.w(p<<3|q);for(Z=0;15>Z;Z+=1)F=!k&&(y>>Z&1)==1,x[6>Z?Z:8>Z?Z+1:w-15+Z][8]=F,x[8][8>Z?w-Z-1:9>Z?15-Z:14-Z]=F;if(x[w-8][8]=!k,7<=l){y=n.A(l);for(Z=0;18>Z;Z+=1)F=!k&&(y>>Z&1)==1,x[Math.floor(Z/3)][Z%3+w-8-3]=F;for(Z=0;18>Z;Z+=1)F=!k&&(y>>Z&1)==1,x[Z%3+w-8-3][Math.floor(Z/3)]=F}if(Q==null){k=g.I(l,p),y=o();for(Z=0;Z<H.length;Z+=1)F=H[Z],y.put(4,4),y.put(F.b(),n.f(4,l)),F.write(y);for(Z=F=0;Z<k.length;Z+=1)F+=k[Z].j;if(y.f()>8*F)throw Error("code length overflow. ("+y.f()+">"+8*F+")");for(y.f()+4<=8*F&&y.put(0,4);y.f()%8!=0;)y.m(!1);for(;!(y.f()>=8*F);){if(y.put(236,8),y.f()>=8*F)break;y.put(17,8)}var gr=0;F=Z=0,V=Array(k.length),D=Array(k.length);for(N=0;N<k.length;N+=1){var nr=k[N].j,Qr=k[N].o-nr;Z=Math.max(Z,nr),F=Math.max(F,Qr),V[N]=Array(nr);for(Y=0;Y<V[N].length;Y+=1)V[N][Y]=255&y.B()[Y+gr];gr+=nr,Y=n.C(Qr),nr=a(V[N],Y.b()-1).l(Y),D[N]=Array(Y.b()-1);for(Y=0;Y<D[N].length;Y+=1)Qr=Y+nr.b()-D[N].length,D[N][Y]=0<=Qr?nr.c(Qr):0}for(Y=y=0;Y<k.length;Y+=1)y+=k[Y].o;y=Array(y);for(Y=gr=0;Y<Z;Y+=1)for(N=0;N<k.length;N+=1)Y<V[N].length&&(y[gr]=V[N][Y],gr+=1);for(Y=0;Y<F;Y+=1)for(N=0;N<k.length;N+=1)Y<D[N].length&&(y[gr]=D[N][Y],gr+=1);Q=y}k=Q,y=-1,Z=w-1,F=7,V=0,q=n.F(q);for(D=w-1;0<D;D-=2)for(D==6&&--D;;){for(N=0;2>N;N+=1)x[Z][D-N]==null&&(Y=!1,V<k.length&&(Y=(k[V]>>>F&1)==1),q(Z,D-N)&&(Y=!Y),x[Z][D-N]=Y,--F,F==-1&&(V+=1,F=7));if(Z+=y,0>Z||w<=Z){Z-=y,y=-y;break}}}var p=d[u],x=null,w=0,Q=null,H=[],O={u:function(k){k=r(k),H.push(k),Q=null},a:function(k,q){if(0>k||w<=k||0>q||w<=q)throw Error(k+","+q);return x[k][q]},h:function(){return w},J:function(){for(var k=0,q=0,y=0;8>y;y+=1){t(!0,y);var Z=n.D(O);if(y==0||k>Z)k=Z,q=y}t(!1,q)}};return O}function a(l,u){if(typeof l.length=="undefined")throw Error(l.length+"/"+u);var c=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var x=Array(l.length-p+u),w=0;w<l.length-p;w+=1)x[w]=l[w+p];return x}(),t={c:function(p){return c[p]},b:function(){return c.length},multiply:function(p){for(var x=Array(t.b()+p.b()-1),w=0;w<t.b();w+=1)for(var Q=0;Q<p.b();Q+=1)x[w+Q]^=b.i(b.g(t.c(w))+b.g(p.c(Q)));return a(x,0)},l:function(p){if(0>t.b()-p.b())return t;for(var x=b.g(t.c(0))-b.g(p.c(0)),w=Array(t.b()),Q=0;Q<t.b();Q+=1)w[Q]=t.c(Q);for(Q=0;Q<p.b();Q+=1)w[Q]^=b.i(b.g(p.c(Q))+x);return a(w,0).l(p)}};return t}i.s=function(l){for(var u=[],c=0;c<l.length;c++){var t=l.charCodeAt(c);128>t?u.push(t):2048>t?u.push(192|t>>6,128|t&63):55296>t||57344<=t?u.push(224|t>>12,128|t>>6&63,128|t&63):(c++,t=65536+((t&1023)<<10|l.charCodeAt(c)&1023),u.push(240|t>>18,128|t>>12&63,128|t>>6&63,128|t&63))}return u};var d={L:1,M:0,Q:3,H:2},n=function(){function l(t){for(var p=0;t!=0;)p+=1,t>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],c={w:function(t){for(var p=t<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(t<<10|p)^21522},A:function(t){for(var p=t<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return t<<12|p},G:function(t){return u[t-1]},F:function(t){switch(t){case 0:return function(p,x){return(p+x)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,x){return x%3==0};case 3:return function(p,x){return(p+x)%3==0};case 4:return function(p,x){return(Math.floor(p/2)+Math.floor(x/3))%2==0};case 5:return function(p,x){return p*x%2+p*x%3==0};case 6:return function(p,x){return(p*x%2+p*x%3)%2==0};case 7:return function(p,x){return(p*x%3+(p+x)%2)%2==0};default:throw Error("bad maskPattern:"+t)}},C:function(t){for(var p=a([1],0),x=0;x<t;x+=1)p=p.multiply(a([1,b.i(x)],0));return p},f:function(t,p){if(t!=4||1>p||40<p)throw Error("mode: "+t+"; type: "+p);return 10>p?8:16},D:function(t){for(var p=t.h(),x=0,w=0;w<p;w+=1)for(var Q=0;Q<p;Q+=1){for(var H=0,O=t.a(w,Q),k=-1;1>=k;k+=1)if(!(0>w+k||p<=w+k))for(var q=-1;1>=q;q+=1)0>Q+q||p<=Q+q||(k!=0||q!=0)&&O==t.a(w+k,Q+q)&&(H+=1);5<H&&(x+=3+H-5)}for(w=0;w<p-1;w+=1)for(Q=0;Q<p-1;Q+=1)if(H=0,t.a(w,Q)&&(H+=1),t.a(w+1,Q)&&(H+=1),t.a(w,Q+1)&&(H+=1),t.a(w+1,Q+1)&&(H+=1),H==0||H==4)x+=3;for(w=0;w<p;w+=1)for(Q=0;Q<p-6;Q+=1)t.a(w,Q)&&!t.a(w,Q+1)&&t.a(w,Q+2)&&t.a(w,Q+3)&&t.a(w,Q+4)&&!t.a(w,Q+5)&&t.a(w,Q+6)&&(x+=40);for(Q=0;Q<p;Q+=1)for(w=0;w<p-6;w+=1)t.a(w,Q)&&!t.a(w+1,Q)&&t.a(w+2,Q)&&t.a(w+3,Q)&&t.a(w+4,Q)&&!t.a(w+5,Q)&&t.a(w+6,Q)&&(x+=40);for(Q=H=0;Q<p;Q+=1)for(w=0;w<p;w+=1)t.a(w,Q)&&(H+=1);return x+=Math.abs(100*H/p/p-50)/5*10}};return c}(),b=function(){for(var l=Array(256),u=Array(256),c=0;8>c;c+=1)l[c]=1<<c;for(c=8;256>c;c+=1)l[c]=l[c-4]^l[c-5]^l[c-6]^l[c-8];for(c=0;255>c;c+=1)u[l[c]]=c;return{g:function(t){if(1>t)throw Error("glog("+t+")");return u[t]},i:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return l[t]}}}(),g=function(){function l(t,p){switch(p){case d.L:return u[4*(t-1)];case d.M:return u[4*(t-1)+1];case d.Q:return u[4*(t-1)+2];case d.H:return u[4*(t-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],c={I:function(t,p){var x=l(t,p);if(typeof x=="undefined")throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+p);t=x.length/3,p=[];for(var w=0;w<t;w+=1)for(var Q=x[3*w],H=x[3*w+1],O=x[3*w+2],k=0;k<Q;k+=1){var q=O,y={};y.o=H,y.j=q,p.push(y)}return p}};return c}();return i}());var ad=QrCreator;var Er=class extends h{constructor(){super(...arguments);this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){if(!this.hasUpdated)return;ad.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var r;return v`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((r=this.label)==null?void 0:r.length)>0?this.label:this.value}
        style=${lr({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Er.styles=[X,od];f([$("canvas")],Er.prototype,"canvas",2);f([s()],Er.prototype,"value",2);f([s()],Er.prototype,"label",2);f([s({type:Number})],Er.prototype,"size",2);f([s()],Er.prototype,"fill",2);f([s()],Er.prototype,"background",2);f([s({type:Number})],Er.prototype,"radius",2);f([s({attribute:"error-correction"})],Er.prototype,"errorCorrection",2);f([z(["background","errorCorrection","fill","radius","size","value"])],Er.prototype,"generate",1);Er.define("sl-qr-code");var fd=m`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`;var Cr=class extends h{constructor(){super();this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{if(!this.disabled)this.checked=!0},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return v`
      <span
        part="base"
        class=${G({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?v` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Cr.styles=[X,fd];Cr.dependencies={"sl-icon":W};f([J()],Cr.prototype,"checked",2);f([J()],Cr.prototype,"hasFocus",2);f([s()],Cr.prototype,"value",2);f([s({reflect:!0})],Cr.prototype,"size",2);f([s({type:Boolean,reflect:!0})],Cr.prototype,"disabled",2);f([z("checked")],Cr.prototype,"handleCheckedChange",1);f([z("disabled",{waitUntilFirstUpdate:!0})],Cr.prototype,"handleDisabledChange",1);Cr.define("sl-radio");var dd=m`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var Ur=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){let r=this.getTextLabel();if(typeof this.cachedTextLabel==="undefined"){this.cachedTextLabel=r;return}if(r!==this.cachedTextLabel)this.cachedTextLabel=r,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){if(typeof this.value!=="string")this.value=String(this.value);if(this.value.includes(" "))console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_")}getTextLabel(){let r=this.childNodes,o="";return[...r].forEach((i)=>{if(i.nodeType===Node.ELEMENT_NODE){if(!i.hasAttribute("slot"))o+=i.textContent}if(i.nodeType===Node.TEXT_NODE)o+=i.textContent}),o.trim()}render(){return v`
      <div
        part="base"
        class=${G({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Ur.styles=[X,dd];Ur.dependencies={"sl-icon":W};f([$(".option__label")],Ur.prototype,"defaultSlot",2);f([J()],Ur.prototype,"current",2);f([J()],Ur.prototype,"selected",2);f([J()],Ur.prototype,"hasHover",2);f([s({reflect:!0})],Ur.prototype,"value",2);f([s({type:Boolean,reflect:!0})],Ur.prototype,"disabled",2);f([z("disabled")],Ur.prototype,"handleDisabledChange",1);f([z("selected")],Ur.prototype,"handleSelectedChange",1);f([z("value")],Ur.prototype,"handleValueChange",1);Ur.define("sl-option");B.define("sl-popup");var nd=m`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;var f0=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return v`
      <div
        part="base"
        class=${G({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${K(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${lr({width:`${this.value}%`})}>
          ${!this.indeterminate?v` <slot part="label" class="progress-bar__label"></slot> `:""}
        </div>
      </div>
    `}};f0.styles=[X,nd];f([s({type:Number,reflect:!0})],f0.prototype,"value",2);f([s({type:Boolean,reflect:!0})],f0.prototype,"indeterminate",2);f([s()],f0.prototype,"label",2);f0.define("sl-progress-bar");var sd=m`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`;var Pi=class extends h{render(){return v` <slot part="base" class="menu-label"></slot> `}};Pi.styles=[X,sd];Pi.define("sl-menu-label");var bd=m`
  :host {
    display: contents;
  }
`;var er=class extends h{constructor(){super(...arguments);this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=(r)=>{this.emit("sl-mutation",{detail:{mutationList:r}})}}connectedCallback(){if(super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),!this.disabled)this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let r=typeof this.attr==="string"&&this.attr.length>0,o=r&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:r,attributeFilter:o,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(i){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){if(this.disabled)this.stopObserver();else this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return v` <slot></slot> `}};er.styles=[X,bd];f([s({reflect:!0})],er.prototype,"attr",2);f([s({attribute:"attr-old-value",type:Boolean,reflect:!0})],er.prototype,"attrOldValue",2);f([s({attribute:"char-data",type:Boolean,reflect:!0})],er.prototype,"charData",2);f([s({attribute:"char-data-old-value",type:Boolean,reflect:!0})],er.prototype,"charDataOldValue",2);f([s({attribute:"child-list",type:Boolean,reflect:!0})],er.prototype,"childList",2);f([s({type:Boolean,reflect:!0})],er.prototype,"disabled",2);f([z("disabled")],er.prototype,"handleDisabledChange",1);f([z("attr",{waitUntilFirstUpdate:!0}),z("attr-old-value",{waitUntilFirstUpdate:!0}),z("char-data",{waitUntilFirstUpdate:!0}),z("char-data-old-value",{waitUntilFirstUpdate:!0}),z("childList",{waitUntilFirstUpdate:!0})],er.prototype,"handleChange",1);er.define("sl-mutation-observer");var gd=m`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;var L=class extends h{constructor(){super(...arguments);this.formControlController=new xr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new R(this,"help-text","label"),this.localize=new U(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var r;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((r=this.input)==null?void 0:r.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(r){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=r,this.value=this.__dateInput.value}get valueAsNumber(){var r;return this.__numberInput.value=this.value,((r=this.input)==null?void 0:r.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(r){this.__numberInput.valueAsNumber=r,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(r){if(r.preventDefault(),this.value!=="")this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change");this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleKeyDown(r){let o=r.metaKey||r.ctrlKey||r.shiftKey||r.altKey;if(r.key==="Enter"&&!o)setTimeout(()=>{if(!r.defaultPrevented&&!r.isComposing)this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(r){this.input.focus(r)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(r,o,i="none"){this.input.setSelectionRange(r,o,i)}setRangeText(r,o,i,a="preserve"){let d=o!=null?o:this.input.selectionStart,n=i!=null?i:this.input.selectionEnd;if(this.input.setRangeText(r,d,n,a),this.value!==this.input.value)this.value=this.input.value}showPicker(){if("showPicker"in HTMLInputElement.prototype)this.input.showPicker()}stepUp(){if(this.input.stepUp(),this.value!==this.input.value)this.value=this.input.value}stepDown(){if(this.input.stepDown(),this.value!==this.input.value)this.value=this.input.value}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){let r=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,a=this.helpText?!0:!!o,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==="number"||this.value.length>0);return v`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${G({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${K(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${K(this.placeholder)}
              minlength=${K(this.minlength)}
              maxlength=${K(this.maxlength)}
              min=${K(this.min)}
              max=${K(this.max)}
              step=${K(this.step)}
              .value=${Fr(this.value)}
              autocapitalize=${K(this.autocapitalize)}
              autocomplete=${K(this.autocomplete)}
              autocorrect=${K(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${K(this.pattern)}
              enterkeyhint=${K(this.enterkeyhint)}
              inputmode=${K(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?v`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?v`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?v`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:v`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};L.styles=[X,Gr,gd];L.dependencies={"sl-icon":W};f([$(".input__control")],L.prototype,"input",2);f([J()],L.prototype,"hasFocus",2);f([s()],L.prototype,"title",2);f([s({reflect:!0})],L.prototype,"type",2);f([s()],L.prototype,"name",2);f([s()],L.prototype,"value",2);f([kr()],L.prototype,"defaultValue",2);f([s({reflect:!0})],L.prototype,"size",2);f([s({type:Boolean,reflect:!0})],L.prototype,"filled",2);f([s({type:Boolean,reflect:!0})],L.prototype,"pill",2);f([s()],L.prototype,"label",2);f([s({attribute:"help-text"})],L.prototype,"helpText",2);f([s({type:Boolean})],L.prototype,"clearable",2);f([s({type:Boolean,reflect:!0})],L.prototype,"disabled",2);f([s()],L.prototype,"placeholder",2);f([s({type:Boolean,reflect:!0})],L.prototype,"readonly",2);f([s({attribute:"password-toggle",type:Boolean})],L.prototype,"passwordToggle",2);f([s({attribute:"password-visible",type:Boolean})],L.prototype,"passwordVisible",2);f([s({attribute:"no-spin-buttons",type:Boolean})],L.prototype,"noSpinButtons",2);f([s({reflect:!0})],L.prototype,"form",2);f([s({type:Boolean,reflect:!0})],L.prototype,"required",2);f([s()],L.prototype,"pattern",2);f([s({type:Number})],L.prototype,"minlength",2);f([s({type:Number})],L.prototype,"maxlength",2);f([s()],L.prototype,"min",2);f([s()],L.prototype,"max",2);f([s()],L.prototype,"step",2);f([s()],L.prototype,"autocapitalize",2);f([s()],L.prototype,"autocorrect",2);f([s()],L.prototype,"autocomplete",2);f([s({type:Boolean})],L.prototype,"autofocus",2);f([s()],L.prototype,"enterkeyhint",2);f([s({type:Boolean,converter:{fromAttribute:(r)=>!r||r==="false"?!1:!0,toAttribute:(r)=>r?"true":"false"}})],L.prototype,"spellcheck",2);f([s()],L.prototype,"inputmode",2);f([z("disabled",{waitUntilFirstUpdate:!0})],L.prototype,"handleDisabledChange",1);f([z("step",{waitUntilFirstUpdate:!0})],L.prototype,"handleStepChange",1);f([z("value",{waitUntilFirstUpdate:!0})],L.prototype,"handleValueChange",1);L.define("sl-input");var ld=m`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;var li=class extends h{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(r){let o=["menuitem","menuitemcheckbox"],i=r.composedPath(),a=i.find((g)=>{var l;return o.includes(((l=g==null?void 0:g.getAttribute)==null?void 0:l.call(g,"role"))||"")});if(!a)return;if(i.find((g)=>{var l;return((l=g==null?void 0:g.getAttribute)==null?void 0:l.call(g,"role"))==="menu"})!==this)return;let b=a;if(b.type==="checkbox")b.checked=!b.checked;this.emit("sl-select",{detail:{item:b}})}handleKeyDown(r){if(r.key==="Enter"||r.key===" "){let o=this.getCurrentItem();r.preventDefault(),r.stopPropagation(),o==null||o.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(r.key)){let o=this.getAllItems(),i=this.getCurrentItem(),a=i?o.indexOf(i):0;if(o.length>0){if(r.preventDefault(),r.stopPropagation(),r.key==="ArrowDown")a++;else if(r.key==="ArrowUp")a--;else if(r.key==="Home")a=0;else if(r.key==="End")a=o.length-1;if(a<0)a=o.length-1;if(a>o.length-1)a=0;this.setCurrentItem(o[a]),o[a].focus()}}}handleMouseDown(r){let o=r.target;if(this.isMenuItem(o))this.setCurrentItem(o)}handleSlotChange(){let r=this.getAllItems();if(r.length>0)this.setCurrentItem(r[0])}isMenuItem(r){var o;return r.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((o=r.getAttribute("role"))!=null?o:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((r)=>{if(r.inert||!this.isMenuItem(r))return!1;return!0})}getCurrentItem(){return this.getAllItems().find((r)=>r.getAttribute("tabindex")==="0")}setCurrentItem(r){this.getAllItems().forEach((i)=>{i.setAttribute("tabindex",i===r?"0":"-1")})}render(){return v`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};li.styles=[X,ld];f([$("slot")],li.prototype,"defaultSlot",2);li.define("sl-menu");var ud=m`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var K0=(r,o)=>{let i=r._$AN;if(i===void 0)return!1;for(let a of i)a._$AO?.(o,!1),K0(a,o);return!0},ui=(r)=>{let o,i;do{if((o=r._$AM)===void 0)break;i=o._$AN,i.delete(r),r=o}while(i?.size===0)},td=(r)=>{for(let o;o=r._$AM;r=o){let i=o._$AN;if(i===void 0)o._$AN=i=new Set;else if(i.has(r))break;i.add(r),sn(o)}};function dn(r){this._$AN!==void 0?(ui(this),this._$AM=r,td(this)):this._$AM=r}function nn(r,o=!1,i=0){let a=this._$AH,d=this._$AN;if(d!==void 0&&d.size!==0)if(o)if(Array.isArray(a))for(let n=i;n<a.length;n++)K0(a[n],!1),ui(a[n]);else a!=null&&(K0(a,!1),ui(a));else K0(this,r)}var sn=(r)=>{r.type==Xr.CHILD&&(r._$AP??=nn,r._$AQ??=dn)};class Ai extends jr{constructor(){super(...arguments),this._$AN=void 0}_$AT(r,o,i){super._$AT(r,o,i),td(this),this.isConnected=r._$AU}_$AO(r,o=!0){r!==this.isConnected&&(this.isConnected=r,r?this.reconnected?.():this.disconnected?.()),o&&(K0(this,r),ui(this))}setValue(r){if(fi(this._$Ct))this._$Ct._$AI(r,this);else{let o=[...this._$Ct._$AH];o[this._$Ci]=r,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}var pd=()=>new cd;class cd{}var Ii=new WeakMap,vd=Rr(class extends Ai{render(r){return j}update(r,[o]){let i=o!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=o,this.ht=r.options?.host,this.rt(this.ct=r.element)),j}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){let o=this.ht??globalThis,i=Ii.get(o);i===void 0&&(i=new WeakMap,Ii.set(o,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){return typeof this.Y=="function"?Ii.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var xd=class{constructor(r,o){this.popupRef=pd(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=(i)=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{if(this.hasSlotController.test("submenu"))this.enableSubmenu()},this.handleKeyDown=(i)=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":if(i.target!==this.host)i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu();break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break;default:break}},this.handleClick=(i)=>{var a;if(i.target===this.host)i.preventDefault(),i.stopPropagation();else if(i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||((a=i.target.role)==null?void 0:a.startsWith("menuitem"))))this.disableSubmenu()},this.handleFocusOut=(i)=>{if(i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget))return;this.disableSubmenu()},this.handlePopupMouseover=(i)=>{i.stopPropagation()},this.handlePopupReposition=()=>{let i=this.host.renderRoot.querySelector("slot[name='submenu']"),a=i==null?void 0:i.assignedElements({flatten:!0}).filter((u)=>u.localName==="sl-menu")[0],d=this.host.matches(":dir(rtl)");if(!a)return;let{left:n,top:b,width:g,height:l}=a.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${d?n+g:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${b}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${d?n+g:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${b+l}px`)},(this.host=r).addController(this),this.hasSlotController=o}hostConnected(){if(this.hasSlotController.test("submenu")&&!this.host.disabled)this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){if(this.hasSlotController.test("submenu")&&!this.host.disabled)this.addListeners(),this.updateSkidding();else this.removeListeners()}addListeners(){if(!this.isConnected)this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0;if(!this.isPopupConnected){if(this.popupRef.value)this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0}}removeListeners(){if(this.isConnected)this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1;if(this.isPopupConnected){if(this.popupRef.value)this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1}}handleSubmenuEntry(r){let o=this.host.renderRoot.querySelector("slot[name='submenu']");if(!o){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(let a of o.assignedElements())if(i=a.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!i||i.length===0)return;i[0].setAttribute("tabindex","0");for(let a=1;a!==i.length;++a)i[a].setAttribute("tabindex","-1");if(this.popupRef.value)if(r.preventDefault(),r.stopPropagation(),this.popupRef.value.active){if(i[0]instanceof HTMLElement)i[0].focus()}else this.enableSubmenu(!1),this.host.updateComplete.then(()=>{if(i[0]instanceof HTMLElement)i[0].focus()}),this.host.requestUpdate()}setSubmenuState(r){if(this.popupRef.value){if(this.popupRef.value.active!==r)this.popupRef.value.active=r,this.host.requestUpdate()}}enableSubmenu(r=!0){if(r)window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay);else this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var r;if(!((r=this.host.parentElement)==null?void 0:r.computedStyleMap))return;let o=this.host.parentElement.computedStyleMap(),a=["padding-top","border-top-width","margin-top"].reduce((d,n)=>{var b;let g=(b=o.get(n))!=null?b:new CSSUnitValue(0,"px"),u=(g instanceof CSSUnitValue?g:new CSSUnitValue(0,"px")).to("px");return d-u.value},0);this.skidding=a}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let r=this.host.matches(":dir(rtl)");if(!this.isConnected)return v` <slot name="submenu" hidden></slot> `;return v`
      <sl-popup
        ${vd(this.popupRef)}
        placement=${r?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `}};var Kr=class extends h{constructor(){super(...arguments);this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new R(this,"submenu"),this.submenuController=new xd(this,this.hasSlotController),this.handleHostClick=(r)=>{if(this.disabled)r.preventDefault(),r.stopImmediatePropagation()},this.handleMouseOver=(r)=>{this.focus(),r.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let r=this.getTextLabel();if(typeof this.cachedTextLabel==="undefined"){this.cachedTextLabel=r;return}if(r!==this.cachedTextLabel)this.cachedTextLabel=r,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}if(this.type==="checkbox")this.setAttribute("aria-checked",this.checked?"true":"false");else this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){if(this.type==="checkbox")this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false");else this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked")}getTextLabel(){return Xf(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let r=this.matches(":dir(rtl)"),o=this.submenuController.isExpanded();return v`
      <div
        id="anchor"
        part="base"
        class=${G({"menu-item":!0,"menu-item--rtl":r,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":o})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${o?!0:!1}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${r?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?v` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Kr.styles=[X,ud];Kr.dependencies={"sl-icon":W,"sl-popup":B,"sl-spinner":po};f([$("slot:not([name])")],Kr.prototype,"defaultSlot",2);f([$(".menu-item")],Kr.prototype,"menuItem",2);f([s()],Kr.prototype,"type",2);f([s({type:Boolean,reflect:!0})],Kr.prototype,"checked",2);f([s()],Kr.prototype,"value",2);f([s({type:Boolean,reflect:!0})],Kr.prototype,"loading",2);f([s({type:Boolean,reflect:!0})],Kr.prototype,"disabled",2);f([z("checked")],Kr.prototype,"handleCheckedChange",1);f([z("disabled")],Kr.prototype,"handleDisabledChange",1);f([z("type")],Kr.prototype,"handleTypeChange",1);Kr.define("sl-menu-item");var wd=m`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;var ko=class extends h{constructor(){super(...arguments);this.position=50}handleDrag(r){let{width:o}=this.base.getBoundingClientRect(),i=this.matches(":dir(rtl)");r.preventDefault(),Xo(this.base,{onMove:(a)=>{if(this.position=parseFloat(e(a/o*100,0,100).toFixed(2)),i)this.position=100-this.position},initialEvent:r})}handleKeyDown(r){let o=this.matches(":dir(ltr)"),i=this.matches(":dir(rtl)");if(["ArrowLeft","ArrowRight","Home","End"].includes(r.key)){let a=r.shiftKey?10:1,d=this.position;if(r.preventDefault(),o&&r.key==="ArrowLeft"||i&&r.key==="ArrowRight")d-=a;if(o&&r.key==="ArrowRight"||i&&r.key==="ArrowLeft")d+=a;if(r.key==="Home")d=0;if(r.key==="End")d=100;d=e(d,0,100),this.position=d}}handlePositionChange(){this.emit("sl-change")}render(){let r=this.matches(":dir(rtl)");return v`
      <div
        part="base"
        id="image-comparer"
        class=${G({"image-comparer":!0,"image-comparer--rtl":r})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${lr({clipPath:r?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${lr({left:r?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};ko.styles=[X,wd];ko.scopedElement={"sl-icon":W};f([$(".image-comparer")],ko.prototype,"base",2);f([$(".image-comparer__handle")],ko.prototype,"handle",2);f([s({type:Number,reflect:!0})],ko.prototype,"position",2);f([z("position",{waitUntilFirstUpdate:!0})],ko.prototype,"handlePositionChange",1);ko.define("sl-image-comparer");var zd=m`
  :host {
    display: block;
  }
`;var Ti=new Map;function hd(r,o="cors"){let i=Ti.get(r);if(i!==void 0)return Promise.resolve(i);let a=fetch(r,{mode:o}).then(async(d)=>{let n={ok:d.ok,status:d.status,html:await d.text()};return Ti.set(r,n),n});return Ti.set(r,a),a}var Po=class extends h{constructor(){super(...arguments);this.mode="cors",this.allowScripts=!1}executeScript(r){let o=document.createElement("script");[...r.attributes].forEach((i)=>o.setAttribute(i.name,i.value)),o.textContent=r.textContent,r.parentNode.replaceChild(o,r)}async handleSrcChange(){try{let r=this.src,o=await hd(r,this.mode);if(r!==this.src)return;if(!o.ok){this.emit("sl-error",{detail:{status:o.status}});return}if(this.innerHTML=o.html,this.allowScripts)[...this.querySelectorAll("script")].forEach((i)=>this.executeScript(i));this.emit("sl-load")}catch(r){this.emit("sl-error",{detail:{status:-1}})}}render(){return v`<slot></slot>`}};Po.styles=[X,zd];f([s()],Po.prototype,"src",2);f([s()],Po.prototype,"mode",2);f([s({attribute:"allow-scripts",type:Boolean})],Po.prototype,"allowScripts",2);f([z("src")],Po.prototype,"handleSrcChange",1);Po.define("sl-include");W.define("sl-icon");S.define("sl-icon-button");var q0=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";let r=["","kilo","mega","giga","tera"],o=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?r:o,a=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),d=i[a]+this.unit,n=parseFloat((this.value/Math.pow(1000,a)).toPrecision(3));return this.localize.number(n,{style:"unit",unit:d,unitDisplay:this.display})}};f([s({type:Number})],q0.prototype,"value",2);f([s()],q0.prototype,"unit",2);f([s()],q0.prototype,"display",2);q0.define("sl-format-bytes");var qr=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.date=new Date,this.hourFormat="auto"}render(){let r=new Date(this.date),o=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(r.getMilliseconds()))return;return v`
      <time datetime=${r.toISOString()}>
        ${this.localize.date(r,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:o})}
      </time>
    `}};f([s()],qr.prototype,"date",2);f([s()],qr.prototype,"weekday",2);f([s()],qr.prototype,"era",2);f([s()],qr.prototype,"year",2);f([s()],qr.prototype,"month",2);f([s()],qr.prototype,"day",2);f([s()],qr.prototype,"hour",2);f([s()],qr.prototype,"minute",2);f([s()],qr.prototype,"second",2);f([s({attribute:"time-zone-name"})],qr.prototype,"timeZoneName",2);f([s({attribute:"time-zone"})],qr.prototype,"timeZone",2);f([s({attribute:"hour-format"})],qr.prototype,"hourFormat",2);qr.define("sl-format-date");var Dr=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){if(isNaN(this.value))return"";return this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};f([s({type:Number})],Dr.prototype,"value",2);f([s()],Dr.prototype,"type",2);f([s({attribute:"no-grouping",type:Boolean})],Dr.prototype,"noGrouping",2);f([s()],Dr.prototype,"currency",2);f([s({attribute:"currency-display"})],Dr.prototype,"currencyDisplay",2);f([s({attribute:"minimum-integer-digits",type:Number})],Dr.prototype,"minimumIntegerDigits",2);f([s({attribute:"minimum-fraction-digits",type:Number})],Dr.prototype,"minimumFractionDigits",2);f([s({attribute:"maximum-fraction-digits",type:Number})],Dr.prototype,"maximumFractionDigits",2);f([s({attribute:"minimum-significant-digits",type:Number})],Dr.prototype,"minimumSignificantDigits",2);f([s({attribute:"maximum-significant-digits",type:Number})],Dr.prototype,"maximumSignificantDigits",2);Dr.define("sl-format-number");var md=m`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var H0=class extends h{constructor(){super(...arguments);this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};H0.styles=[X,md];f([s({type:Boolean,reflect:!0})],H0.prototype,"vertical",2);f([z("vertical")],H0.prototype,"handleVerticalChange",1);H0.define("sl-divider");var Qd=m`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var $d=new WeakMap;function yd(r){let o=$d.get(r);if(!o)o=window.getComputedStyle(r,null),$d.set(r,o);return o}function bn(r){if(typeof r.checkVisibility==="function")return r.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let o=yd(r);return o.visibility!=="hidden"&&o.display!=="none"}function gn(r){let o=yd(r),{overflowY:i,overflowX:a}=o;if(i==="scroll"||a==="scroll")return!0;if(i!=="auto"||a!=="auto")return!1;if(r.scrollHeight>r.clientHeight&&i==="auto")return!0;if(r.scrollWidth>r.clientWidth&&a==="auto")return!0;return!1}function ln(r){let o=r.tagName.toLowerCase(),i=Number(r.getAttribute("tabindex"));if(r.hasAttribute("tabindex")&&(isNaN(i)||i<=-1))return!1;if(r.hasAttribute("disabled"))return!1;if(r.closest("[inert]"))return!1;if(o==="input"&&r.getAttribute("type")==="radio"&&!r.hasAttribute("checked"))return!1;if(!bn(r))return!1;if((o==="audio"||o==="video")&&r.hasAttribute("controls"))return!0;if(r.hasAttribute("tabindex"))return!0;if(r.hasAttribute("contenteditable")&&r.getAttribute("contenteditable")!=="false")return!0;if(["button","input","select","textarea","a","audio","video","summary","iframe"].includes(o))return!0;return gn(r)}function Xd(r){var o,i;let a=ti(r),d=(o=a[0])!=null?o:null,n=(i=a[a.length-1])!=null?i:null;return{start:d,end:n}}function un(r,o){var i;return((i=r.getRootNode({composed:!0}))==null?void 0:i.host)!==o}function ti(r){let o=new WeakMap,i=[];function a(d){if(d instanceof Element){if(d.hasAttribute("inert")||d.closest("[inert]"))return;if(o.has(d))return;if(o.set(d,!0),!i.includes(d)&&ln(d))i.push(d);if(d instanceof HTMLSlotElement&&un(d,r))d.assignedElements({flatten:!0}).forEach((n)=>{a(n)});if(d.shadowRoot!==null&&d.shadowRoot.mode==="open")a(d.shadowRoot)}for(let n of d.children)a(n)}return a(r),i.sort((d,n)=>{let b=Number(d.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-b})}function*_i(r=document.activeElement){if(r===null||r===void 0)return;if(yield r,"shadowRoot"in r&&r.shadowRoot&&r.shadowRoot.mode!=="closed")yield*Fa(_i(r.shadowRoot.activeElement))}function tn(){return[..._i()].pop()}var O0=[],pi=class{constructor(r){this.tabDirection="forward",this.handleFocusIn=()=>{if(!this.isActive())return;this.checkFocus()},this.handleKeyDown=(o)=>{var i;if(o.key!=="Tab"||this.isExternalActivated)return;if(!this.isActive())return;let a=tn();if(this.previousFocus=a,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(o.shiftKey)this.tabDirection="backward";else this.tabDirection="forward";let d=ti(this.element),n=d.findIndex((g)=>g===a);this.previousFocus=this.currentFocus;let b=this.tabDirection==="forward"?1:-1;while(!0){if(n+b>=d.length)n=0;else if(n+b<0)n=d.length-1;else n+=b;this.previousFocus=this.currentFocus;let g=d[n];if(this.tabDirection==="backward"){if(this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return}if(g&&this.possiblyHasTabbableChildren(g))return;o.preventDefault(),this.currentFocus=g,(i=this.currentFocus)==null||i.focus({preventScroll:!1});let l=[..._i()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=r,this.elementsWithTabbableControls=["iframe"]}activate(){O0.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){O0=O0.filter((r)=>r!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return O0[O0.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let r=ti(this.element);if(!this.element.matches(":focus-within")){let o=r[0],i=r[r.length-1],a=this.tabDirection==="forward"?o:i;if(typeof(a==null?void 0:a.focus)==="function")this.currentFocus=a,a.focus({preventScroll:!1})}}}possiblyHasTabbableChildren(r){return this.elementsWithTabbableControls.includes(r.tagName.toLowerCase())||r.hasAttribute("controls")}};function Zd(r){return r.charAt(0).toUpperCase()+r.slice(1)}var Hr=class extends h{constructor(){super(...arguments);this.hasSlotController=new R(this,"footer"),this.localize=new U(this),this.modal=new pi(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=(r)=>{if(this.contained)return;if(r.key==="Escape"&&this.modal.isActive()&&this.open)r.stopImmediatePropagation(),this.requestClose("keyboard")}}firstUpdated(){if(this.drawer.hidden=!this.open,this.open){if(this.addOpenListeners(),!this.contained)this.modal.activate(),Eo(this)}}disconnectedCallback(){var r;super.disconnectedCallback(),Do(this),(r=this.closeWatcher)==null||r.destroy()}requestClose(r){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:r}}).defaultPrevented){let i=A(this,"drawer.denyClose",{dir:this.localize.dir()});_(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var r;if("CloseWatcher"in window){if((r=this.closeWatcher)==null||r.destroy(),!this.contained)this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")}else document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var r;document.removeEventListener("keydown",this.handleDocumentKeyDown),(r=this.closeWatcher)==null||r.destroy()}async handleOpenChange(){if(this.open){if(this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,!this.contained)this.modal.activate(),Eo(this);let r=this.querySelector("[autofocus]");if(r)r.removeAttribute("autofocus");await Promise.all([C(this.drawer),C(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{if(!this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented)if(r)r.focus({preventScroll:!0});else this.panel.focus({preventScroll:!0});if(r)r.setAttribute("autofocus","")});let o=A(this,`drawer.show${Zd(this.placement)}`,{dir:this.localize.dir()}),i=A(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([_(this.panel,o.keyframes,o.options),_(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{if(this.emit("sl-hide"),this.removeOpenListeners(),!this.contained)this.modal.deactivate(),Do(this);await Promise.all([C(this.drawer),C(this.overlay)]);let r=A(this,`drawer.hide${Zd(this.placement)}`,{dir:this.localize.dir()}),o=A(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([_(this.overlay,o.keyframes,o.options).then(()=>{this.overlay.hidden=!0}),_(this.panel,r.keyframes,r.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let i=this.originalTrigger;if(typeof(i==null?void 0:i.focus)==="function")setTimeout(()=>i.focus());this.emit("sl-after-hide")}}handleNoModalChange(){if(this.open&&!this.contained)this.modal.activate(),Eo(this);if(this.open&&this.contained)this.modal.deactivate(),Do(this)}async show(){if(this.open)return;return this.open=!0,or(this,"sl-after-show")}async hide(){if(!this.open)return;return this.open=!1,or(this,"sl-after-hide")}render(){return v`
      <div
        part="base"
        class=${G({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${K(this.noHeader?this.label:void 0)}
          aria-labelledby=${K(!this.noHeader?"title":void 0)}
          tabindex="0"
        >
          ${!this.noHeader?v`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `:""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Hr.styles=[X,Qd];Hr.dependencies={"sl-icon-button":S};f([$(".drawer")],Hr.prototype,"drawer",2);f([$(".drawer__panel")],Hr.prototype,"panel",2);f([$(".drawer__overlay")],Hr.prototype,"overlay",2);f([s({type:Boolean,reflect:!0})],Hr.prototype,"open",2);f([s({reflect:!0})],Hr.prototype,"label",2);f([s({reflect:!0})],Hr.prototype,"placement",2);f([s({type:Boolean,reflect:!0})],Hr.prototype,"contained",2);f([s({attribute:"no-header",type:Boolean,reflect:!0})],Hr.prototype,"noHeader",2);f([z("open",{waitUntilFirstUpdate:!0})],Hr.prototype,"handleOpenChange",1);f([z("contained",{waitUntilFirstUpdate:!0})],Hr.prototype,"handleNoModalChange",1);M("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});M("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});M("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});M("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});M("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});M("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});M("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});M("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});M("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});M("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});M("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Hr.define("sl-drawer");var kd=m`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var ur=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=(r)=>{if(this.open&&r.key==="Escape")r.stopPropagation(),this.hide(),this.focusOnTrigger()},this.handleDocumentKeyDown=(r)=>{var o;if(r.key==="Escape"&&this.open&&!this.closeWatcher){r.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(r.key==="Tab"){if(this.open&&((o=document.activeElement)==null?void 0:o.tagName.toLowerCase())==="sl-menu-item"){r.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,a,d;let n=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(d=(a=document.activeElement)==null?void 0:a.shadowRoot)==null?void 0:d.activeElement:document.activeElement;if(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)this.hide()})}},this.handleDocumentMouseDown=(r)=>{let o=r.composedPath();if(this.containingElement&&!o.includes(this.containingElement))this.hide()},this.handlePanelSelect=(r)=>{let o=r.target;if(!this.stayOpenOnSelect&&o.tagName.toLowerCase()==="sl-menu")this.hide(),this.focusOnTrigger()}}connectedCallback(){if(super.connectedCallback(),!this.containingElement)this.containingElement=this}firstUpdated(){if(this.panel.hidden=!this.open,this.open)this.addOpenListeners(),this.popup.active=!0}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let r=this.trigger.assignedElements({flatten:!0})[0];if(typeof(r==null?void 0:r.focus)==="function")r.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((r)=>r.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){if(this.open)this.hide();else this.show(),this.focusOnTrigger()}async handleTriggerKeyDown(r){if([" ","Enter"].includes(r.key)){r.preventDefault(),this.handleTriggerClick();return}let o=this.getMenu();if(o){let i=o.getAllItems(),a=i[0],d=i[i.length-1];if(["ArrowDown","ArrowUp","Home","End"].includes(r.key)){if(r.preventDefault(),!this.open)this.show(),await this.updateComplete;if(i.length>0)this.updateComplete.then(()=>{if(r.key==="ArrowDown"||r.key==="Home")o.setCurrentItem(a),a.focus();if(r.key==="ArrowUp"||r.key==="End")o.setCurrentItem(d),d.focus()})}}}handleTriggerKeyUp(r){if(r.key===" ")r.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let o=this.trigger.assignedElements({flatten:!0}).find((a)=>Xd(a).start),i;if(o){switch(o.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=o.button;break;default:i=o}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(this.open)return;return this.open=!0,or(this,"sl-after-show")}async hide(){if(!this.open)return;return this.open=!1,or(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var r;if(this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window)(r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()};else this.panel.addEventListener("keydown",this.handleKeyDown);document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var r;if(this.panel)this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown);document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(r=this.closeWatcher)==null||r.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await C(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:r,options:o}=A(this,"dropdown.show",{dir:this.localize.dir()});await _(this.popup.popup,r,o),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await C(this);let{keyframes:r,options:o}=A(this,"dropdown.hide",{dir:this.localize.dir()});await _(this.popup.popup,r,o),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return v`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${K(this.sync?this.sync:void 0)}
        class=${G({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};ur.styles=[X,kd];ur.dependencies={"sl-popup":B};f([$(".dropdown")],ur.prototype,"popup",2);f([$(".dropdown__trigger")],ur.prototype,"trigger",2);f([$(".dropdown__panel")],ur.prototype,"panel",2);f([s({type:Boolean,reflect:!0})],ur.prototype,"open",2);f([s({reflect:!0})],ur.prototype,"placement",2);f([s({type:Boolean,reflect:!0})],ur.prototype,"disabled",2);f([s({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ur.prototype,"stayOpenOnSelect",2);f([s({attribute:!1})],ur.prototype,"containingElement",2);f([s({type:Number})],ur.prototype,"distance",2);f([s({type:Number})],ur.prototype,"skidding",2);f([s({type:Boolean})],ur.prototype,"hoist",2);f([s({reflect:!0})],ur.prototype,"sync",2);f([z("open",{waitUntilFirstUpdate:!0})],ur.prototype,"handleOpenChange",1);M("dropdown.show",{keyframes:[{opacity:0,scale:0.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});M("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:0.9}],options:{duration:100,easing:"ease"}});ur.define("sl-dropdown");var Gd=m`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`;var tr=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1000,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let r=this.value;if(this.from){let o=this.getRootNode(),i=this.from.includes("."),a=this.from.includes("[")&&this.from.includes("]"),d=this.from,n="";if(i)[d,n]=this.from.trim().split(".");else if(a)[d,n]=this.from.trim().replace(/\]$/,"").split("[");let b="getElementById"in o?o.getElementById(d):null;if(b)if(a)r=b.getAttribute(n)||"";else if(i)r=b[n]||"";else r=b.textContent||"";else this.showStatus("error"),this.emit("sl-error")}if(!r)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(r),this.showStatus("success"),this.emit("sl-copy",{detail:{value:r}})}catch(o){this.showStatus("error"),this.emit("sl-error")}}async showStatus(r){let o=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),a=this.errorLabel||this.localize.term("error"),d=r==="success"?this.successIcon:this.errorIcon,n=A(this,"copy.in",{dir:"ltr"}),b=A(this,"copy.out",{dir:"ltr"});this.tooltip.content=r==="success"?i:a,await this.copyIcon.animate(b.keyframes,b.options).finished,this.copyIcon.hidden=!0,this.status=r,d.hidden=!1,await d.animate(n.keyframes,n.options).finished,setTimeout(async()=>{await d.animate(b.keyframes,b.options).finished,d.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(n.keyframes,n.options).finished,this.tooltip.content=o,this.isCopying=!1},this.feedbackDuration)}render(){let r=this.copyLabel||this.localize.term("copy");return v`
      <sl-tooltip
        class=${G({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${r}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};tr.styles=[X,Gd];tr.dependencies={"sl-icon":W,"sl-tooltip":br};f([$('slot[name="copy-icon"]')],tr.prototype,"copyIcon",2);f([$('slot[name="success-icon"]')],tr.prototype,"successIcon",2);f([$('slot[name="error-icon"]')],tr.prototype,"errorIcon",2);f([$("sl-tooltip")],tr.prototype,"tooltip",2);f([J()],tr.prototype,"isCopying",2);f([J()],tr.prototype,"status",2);f([s()],tr.prototype,"value",2);f([s()],tr.prototype,"from",2);f([s({type:Boolean,reflect:!0})],tr.prototype,"disabled",2);f([s({attribute:"copy-label"})],tr.prototype,"copyLabel",2);f([s({attribute:"success-label"})],tr.prototype,"successLabel",2);f([s({attribute:"error-label"})],tr.prototype,"errorLabel",2);f([s({attribute:"feedback-duration",type:Number})],tr.prototype,"feedbackDuration",2);f([s({attribute:"tooltip-placement"})],tr.prototype,"tooltipPlacement",2);f([s({type:Boolean})],tr.prototype,"hoist",2);M("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});M("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});tr.define("sl-copy-button");var Jd=m`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`;var Br=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.open=!1,this.disabled=!1}firstUpdated(){if(this.body.style.height=this.open?"auto":"0",this.open)this.details.open=!0;this.detailsObserver=new MutationObserver((r)=>{for(let o of r)if(o.type==="attributes"&&o.attributeName==="open")if(this.details.open)this.show();else this.hide()}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.detailsObserver)==null||r.disconnect()}handleSummaryClick(r){if(r.preventDefault(),!this.disabled){if(this.open)this.hide();else this.show();this.header.focus()}}handleSummaryKeyDown(r){if(r.key==="Enter"||r.key===" ")if(r.preventDefault(),this.open)this.hide();else this.show();if(r.key==="ArrowUp"||r.key==="ArrowLeft")r.preventDefault(),this.hide();if(r.key==="ArrowDown"||r.key==="ArrowRight")r.preventDefault(),this.show()}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await C(this.body);let{keyframes:o,options:i}=A(this,"details.show",{dir:this.localize.dir()});await _(this.body,eo(o,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await C(this.body);let{keyframes:o,options:i}=A(this,"details.hide",{dir:this.localize.dir()});await _(this.body,eo(o,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled)return;return this.open=!0,or(this,"sl-after-show")}async hide(){if(!this.open||this.disabled)return;return this.open=!1,or(this,"sl-after-hide")}render(){let r=this.matches(":dir(rtl)");return v`
      <details
        part="base"
        class=${G({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":r})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${r?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${r?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Br.styles=[X,Jd];Br.dependencies={"sl-icon":W};f([$(".details")],Br.prototype,"details",2);f([$(".details__header")],Br.prototype,"header",2);f([$(".details__body")],Br.prototype,"body",2);f([$(".details__expand-icon-slot")],Br.prototype,"expandIconSlot",2);f([s({type:Boolean,reflect:!0})],Br.prototype,"open",2);f([s()],Br.prototype,"summary",2);f([s({type:Boolean,reflect:!0})],Br.prototype,"disabled",2);f([z("open",{waitUntilFirstUpdate:!0})],Br.prototype,"handleOpenChange",1);M("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});M("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Br.define("sl-details");var Kd=m`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var Sr=class extends h{constructor(){super(...arguments);this.hasSlotController=new R(this,"footer"),this.localize=new U(this),this.modal=new pi(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=(r)=>{if(r.key==="Escape"&&this.modal.isActive()&&this.open)r.stopPropagation(),this.requestClose("keyboard")}}firstUpdated(){if(this.dialog.hidden=!this.open,this.open)this.addOpenListeners(),this.modal.activate(),Eo(this)}disconnectedCallback(){var r;super.disconnectedCallback(),this.modal.deactivate(),Do(this),(r=this.closeWatcher)==null||r.destroy()}requestClose(r){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:r}}).defaultPrevented){let i=A(this,"dialog.denyClose",{dir:this.localize.dir()});_(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var r;if("CloseWatcher"in window)(r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard");else document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var r;(r=this.closeWatcher)==null||r.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Eo(this);let r=this.querySelector("[autofocus]");if(r)r.removeAttribute("autofocus");await Promise.all([C(this.dialog),C(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{if(!this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented)if(r)r.focus({preventScroll:!0});else this.panel.focus({preventScroll:!0});if(r)r.setAttribute("autofocus","")});let o=A(this,"dialog.show",{dir:this.localize.dir()}),i=A(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([_(this.panel,o.keyframes,o.options),_(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([C(this.dialog),C(this.overlay)]);let r=A(this,"dialog.hide",{dir:this.localize.dir()}),o=A(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([_(this.overlay,o.keyframes,o.options).then(()=>{this.overlay.hidden=!0}),_(this.panel,r.keyframes,r.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Do(this);let i=this.originalTrigger;if(typeof(i==null?void 0:i.focus)==="function")setTimeout(()=>i.focus());this.emit("sl-after-hide")}}async show(){if(this.open)return;return this.open=!0,or(this,"sl-after-show")}async hide(){if(!this.open)return;return this.open=!1,or(this,"sl-after-hide")}render(){return v`
      <div
        part="base"
        class=${G({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${K(this.noHeader?this.label:void 0)}
          aria-labelledby=${K(!this.noHeader?"title":void 0)}
          tabindex="-1"
        >
          ${!this.noHeader?v`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `:""}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Sr.styles=[X,Kd];Sr.dependencies={"sl-icon-button":S};f([$(".dialog")],Sr.prototype,"dialog",2);f([$(".dialog__panel")],Sr.prototype,"panel",2);f([$(".dialog__overlay")],Sr.prototype,"overlay",2);f([s({type:Boolean,reflect:!0})],Sr.prototype,"open",2);f([s({reflect:!0})],Sr.prototype,"label",2);f([s({attribute:"no-header",type:Boolean,reflect:!0})],Sr.prototype,"noHeader",2);f([z("open",{waitUntilFirstUpdate:!0})],Sr.prototype,"handleOpenChange",1);M("dialog.show",{keyframes:[{opacity:0,scale:0.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});M("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:0.8}],options:{duration:250,easing:"ease"}});M("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});M("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});M("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Sr.define("sl-dialog");dr.define("sl-checkbox");var qd=m`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var T=class extends h{constructor(){super(...arguments);this.formControlController=new xr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new R(this,"[default]","prefix","suffix"),this.localize=new U(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){if(this.isButton())return this.button.validity;return _o}get validationMessage(){if(this.isButton())return this.button.validationMessage;return""}firstUpdated(){if(this.isButton())this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){if(this.type==="submit")this.formControlController.submit(this);if(this.type==="reset")this.formControlController.reset(this)}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}isButton(){return this.href?!1:!0}isLink(){return this.href?!0:!1}handleDisabledChange(){if(this.isButton())this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}checkValidity(){if(this.isButton())return this.button.checkValidity();return!0}getForm(){return this.formControlController.getForm()}reportValidity(){if(this.isButton())return this.button.reportValidity();return!0}setCustomValidity(r){if(this.isButton())this.button.setCustomValidity(r),this.formControlController.updateValidity()}render(){let r=this.isLink(),o=r?i0`a`:i0`button`;return yo`
      <${o}
        part="base"
        class=${G({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${K(r?void 0:this.disabled)}
        type=${K(r?void 0:this.type)}
        title=${this.title}
        name=${K(r?void 0:this.name)}
        value=${K(r?void 0:this.value)}
        href=${K(r&&!this.disabled?this.href:void 0)}
        target=${K(r?this.target:void 0)}
        download=${K(r?this.download:void 0)}
        rel=${K(r?this.rel:void 0)}
        role=${K(r?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?yo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?yo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${o}>
    `}};T.styles=[X,gi];T.dependencies={"sl-icon":W,"sl-spinner":po};f([$(".button")],T.prototype,"button",2);f([J()],T.prototype,"hasFocus",2);f([J()],T.prototype,"invalid",2);f([s()],T.prototype,"title",2);f([s({reflect:!0})],T.prototype,"variant",2);f([s({reflect:!0})],T.prototype,"size",2);f([s({type:Boolean,reflect:!0})],T.prototype,"caret",2);f([s({type:Boolean,reflect:!0})],T.prototype,"disabled",2);f([s({type:Boolean,reflect:!0})],T.prototype,"loading",2);f([s({type:Boolean,reflect:!0})],T.prototype,"outline",2);f([s({type:Boolean,reflect:!0})],T.prototype,"pill",2);f([s({type:Boolean,reflect:!0})],T.prototype,"circle",2);f([s()],T.prototype,"type",2);f([s()],T.prototype,"name",2);f([s()],T.prototype,"value",2);f([s()],T.prototype,"href",2);f([s()],T.prototype,"target",2);f([s()],T.prototype,"rel",2);f([s()],T.prototype,"download",2);f([s()],T.prototype,"form",2);f([s({attribute:"formaction"})],T.prototype,"formAction",2);f([s({attribute:"formenctype"})],T.prototype,"formEnctype",2);f([s({attribute:"formmethod"})],T.prototype,"formMethod",2);f([s({attribute:"formnovalidate",type:Boolean})],T.prototype,"formNoValidate",2);f([s({attribute:"formtarget"})],T.prototype,"formTarget",2);f([z("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);function pr(r,o){if(pn(r))r="100%";let i=cn(r);if(r=o===360?r:Math.min(o,Math.max(0,parseFloat(r))),i)r=parseInt(String(r*o),10)/100;if(Math.abs(r-o)<0.000001)return 1;if(o===360)r=(r<0?r%o+o:r%o)/parseFloat(String(o));else r=r%o/parseFloat(String(o));return r}function Y0(r){return Math.min(1,Math.max(0,r))}function pn(r){return typeof r==="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1}function cn(r){return typeof r==="string"&&r.indexOf("%")!==-1}function ci(r){if(r=parseFloat(r),isNaN(r)||r<0||r>1)r=1;return r}function F0(r){if(Number(r)<=1)return`${Number(r)*100}%`;return r}function Go(r){return r.length===1?"0"+r:String(r)}function Hd(r,o,i){return{r:pr(r,255)*255,g:pr(o,255)*255,b:pr(i,255)*255}}function ji(r,o,i){r=pr(r,255),o=pr(o,255),i=pr(i,255);let a=Math.max(r,o,i),d=Math.min(r,o,i),n=0,b=0,g=(a+d)/2;if(a===d)b=0,n=0;else{let l=a-d;switch(b=g>0.5?l/(2-a-d):l/(a+d),a){case r:n=(o-i)/l+(o<i?6:0);break;case o:n=(i-r)/l+2;break;case i:n=(r-o)/l+4;break;default:break}n/=6}return{h:n,s:b,l:g}}function Ri(r,o,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return r+(o-r)*(6*i);if(i<0.5)return o;if(i<0.6666666666666666)return r+(o-r)*(0.6666666666666666-i)*6;return r}function Od(r,o,i){let a,d,n;if(r=pr(r,360),o=pr(o,100),i=pr(i,100),o===0)d=i,n=i,a=i;else{let b=i<0.5?i*(1+o):i+o-i*o,g=2*i-b;a=Ri(g,b,r+0.3333333333333333),d=Ri(g,b,r),n=Ri(g,b,r-0.3333333333333333)}return{r:a*255,g:d*255,b:n*255}}function Ci(r,o,i){r=pr(r,255),o=pr(o,255),i=pr(i,255);let a=Math.max(r,o,i),d=Math.min(r,o,i),n=0,b=a,g=a-d,l=a===0?0:g/a;if(a===d)n=0;else{switch(a){case r:n=(o-i)/g+(o<i?6:0);break;case o:n=(i-r)/g+2;break;case i:n=(r-o)/g+4;break;default:break}n/=6}return{h:n,s:l,v:b}}function Yd(r,o,i){r=pr(r,360)*6,o=pr(o,100),i=pr(i,100);let a=Math.floor(r),d=r-a,n=i*(1-o),b=i*(1-d*o),g=i*(1-(1-d)*o),l=a%6,u=[i,b,n,n,g,i][l],c=[g,i,i,b,n,n][l],t=[n,n,g,i,i,b][l];return{r:u*255,g:c*255,b:t*255}}function ei(r,o,i,a){let d=[Go(Math.round(r).toString(16)),Go(Math.round(o).toString(16)),Go(Math.round(i).toString(16))];if(a&&d[0].startsWith(d[0].charAt(1))&&d[1].startsWith(d[1].charAt(1))&&d[2].startsWith(d[2].charAt(1)))return d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0);return d.join("")}function Fd(r,o,i,a,d){let n=[Go(Math.round(r).toString(16)),Go(Math.round(o).toString(16)),Go(Math.round(i).toString(16)),Go(vn(a))];if(d&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1)))return n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0);return n.join("")}function Ud(r,o,i,a){let d=r/100,n=o/100,b=i/100,g=a/100,l=255*(1-d)*(1-g),u=255*(1-n)*(1-g),c=255*(1-b)*(1-g);return{r:l,g:u,b:c}}function Si(r,o,i){let a=1-r/255,d=1-o/255,n=1-i/255,b=Math.min(a,d,n);if(b===1)a=0,d=0,n=0;else a=(a-b)/(1-b)*100,d=(d-b)/(1-b)*100,n=(n-b)/(1-b)*100;return b*=100,{c:Math.round(a),m:Math.round(d),y:Math.round(n),k:Math.round(b)}}function vn(r){return Math.round(parseFloat(r)*255).toString(16)}function ra(r){return Or(r)/255}function Or(r){return parseInt(r,16)}function Nd(r){return{r:r>>16,g:(r&65280)>>8,b:r&255}}var U0={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Wd(r){let o={r:0,g:0,b:0},i=1,a=null,d=null,n=null,b=!1,g=!1;if(typeof r==="string")r=zn(r);if(typeof r==="object"){if(Nr(r.r)&&Nr(r.g)&&Nr(r.b))o=Hd(r.r,r.g,r.b),b=!0,g=String(r.r).substr(-1)==="%"?"prgb":"rgb";else if(Nr(r.h)&&Nr(r.s)&&Nr(r.v))a=F0(r.s),d=F0(r.v),o=Yd(r.h,a,d),b=!0,g="hsv";else if(Nr(r.h)&&Nr(r.s)&&Nr(r.l))a=F0(r.s),n=F0(r.l),o=Od(r.h,a,n),b=!0,g="hsl";else if(Nr(r.c)&&Nr(r.m)&&Nr(r.y)&&Nr(r.k))o=Ud(r.c,r.m,r.y,r.k),b=!0,g="cmyk";if(Object.prototype.hasOwnProperty.call(r,"a"))i=r.a}return i=ci(i),{ok:b,format:r.format||g,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}var xn="[-\\+]?\\d+%?",wn="[-\\+]?\\d*\\.\\d+%?",Jo="(?:"+wn+")|(?:"+xn+")",oa="[\\s|\\(]+("+Jo+")[,|\\s]+("+Jo+")[,|\\s]+("+Jo+")\\s*\\)?",vi="[\\s|\\(]+("+Jo+")[,|\\s]+("+Jo+")[,|\\s]+("+Jo+")[,|\\s]+("+Jo+")\\s*\\)?",Pr={CSS_UNIT:new RegExp(Jo),rgb:new RegExp("rgb"+oa),rgba:new RegExp("rgba"+vi),hsl:new RegExp("hsl"+oa),hsla:new RegExp("hsla"+vi),hsv:new RegExp("hsv"+oa),hsva:new RegExp("hsva"+vi),cmyk:new RegExp("cmyk"+vi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function zn(r){if(r=r.trim().toLowerCase(),r.length===0)return!1;let o=!1;if(U0[r])r=U0[r],o=!0;else if(r==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=Pr.rgb.exec(r);if(i)return{r:i[1],g:i[2],b:i[3]};if(i=Pr.rgba.exec(r),i)return{r:i[1],g:i[2],b:i[3],a:i[4]};if(i=Pr.hsl.exec(r),i)return{h:i[1],s:i[2],l:i[3]};if(i=Pr.hsla.exec(r),i)return{h:i[1],s:i[2],l:i[3],a:i[4]};if(i=Pr.hsv.exec(r),i)return{h:i[1],s:i[2],v:i[3]};if(i=Pr.hsva.exec(r),i)return{h:i[1],s:i[2],v:i[3],a:i[4]};if(i=Pr.cmyk.exec(r),i)return{c:i[1],m:i[2],y:i[3],k:i[4]};if(i=Pr.hex8.exec(r),i)return{r:Or(i[1]),g:Or(i[2]),b:Or(i[3]),a:ra(i[4]),format:o?"name":"hex8"};if(i=Pr.hex6.exec(r),i)return{r:Or(i[1]),g:Or(i[2]),b:Or(i[3]),format:o?"name":"hex"};if(i=Pr.hex4.exec(r),i)return{r:Or(i[1]+i[1]),g:Or(i[2]+i[2]),b:Or(i[3]+i[3]),a:ra(i[4]+i[4]),format:o?"name":"hex8"};if(i=Pr.hex3.exec(r),i)return{r:Or(i[1]+i[1]),g:Or(i[2]+i[2]),b:Or(i[3]+i[3]),format:o?"name":"hex"};return!1}function Nr(r){if(typeof r==="number")return!Number.isNaN(r);return Pr.CSS_UNIT.test(r)}class ir{constructor(r="",o={}){if(r instanceof ir)return r;if(typeof r==="number")r=Nd(r);this.originalInput=r;let i=Wd(r);if(this.originalInput=r,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=o.format??i.format,this.gradientType=o.gradientType,this.r<1)this.r=Math.round(this.r);if(this.g<1)this.g=Math.round(this.g);if(this.b<1)this.b=Math.round(this.b);this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let r=this.toRgb();return(r.r*299+r.g*587+r.b*114)/1000}getLuminance(){let r=this.toRgb(),o,i,a,d=r.r/255,n=r.g/255,b=r.b/255;if(d<=0.03928)o=d/12.92;else o=Math.pow((d+0.055)/1.055,2.4);if(n<=0.03928)i=n/12.92;else i=Math.pow((n+0.055)/1.055,2.4);if(b<=0.03928)a=b/12.92;else a=Math.pow((b+0.055)/1.055,2.4);return 0.2126*o+0.7152*i+0.0722*a}getAlpha(){return this.a}setAlpha(r){return this.a=ci(r),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:r}=this.toHsl();return r===0}toHsv(){let r=Ci(this.r,this.g,this.b);return{h:r.h*360,s:r.s,v:r.v,a:this.a}}toHsvString(){let r=Ci(this.r,this.g,this.b),o=Math.round(r.h*360),i=Math.round(r.s*100),a=Math.round(r.v*100);return this.a===1?`hsv(${o}, ${i}%, ${a}%)`:`hsva(${o}, ${i}%, ${a}%, ${this.roundA})`}toHsl(){let r=ji(this.r,this.g,this.b);return{h:r.h*360,s:r.s,l:r.l,a:this.a}}toHslString(){let r=ji(this.r,this.g,this.b),o=Math.round(r.h*360),i=Math.round(r.s*100),a=Math.round(r.l*100);return this.a===1?`hsl(${o}, ${i}%, ${a}%)`:`hsla(${o}, ${i}%, ${a}%, ${this.roundA})`}toHex(r=!1){return ei(this.r,this.g,this.b,r)}toHexString(r=!1){return"#"+this.toHex(r)}toHex8(r=!1){return Fd(this.r,this.g,this.b,this.a,r)}toHex8String(r=!1){return"#"+this.toHex8(r)}toHexShortString(r=!1){return this.a===1?this.toHexString(r):this.toHex8String(r)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let r=Math.round(this.r),o=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${r}, ${o}, ${i})`:`rgba(${r}, ${o}, ${i}, ${this.roundA})`}toPercentageRgb(){let r=(o)=>`${Math.round(pr(o,255)*100)}%`;return{r:r(this.r),g:r(this.g),b:r(this.b),a:this.a}}toPercentageRgbString(){let r=(o)=>Math.round(pr(o,255)*100);return this.a===1?`rgb(${r(this.r)}%, ${r(this.g)}%, ${r(this.b)}%)`:`rgba(${r(this.r)}%, ${r(this.g)}%, ${r(this.b)}%, ${this.roundA})`}toCmyk(){return{...Si(this.r,this.g,this.b)}}toCmykString(){let{c:r,m:o,y:i,k:a}=Si(this.r,this.g,this.b);return`cmyk(${r}, ${o}, ${i}, ${a})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let r="#"+ei(this.r,this.g,this.b,!1);for(let[o,i]of Object.entries(U0))if(r===i)return o;return!1}toString(r){let o=Boolean(r);r=r??this.format;let i=!1,a=this.a<1&&this.a>=0;if(!o&&a&&(r.startsWith("hex")||r==="name")){if(r==="name"&&this.a===0)return this.toName();return this.toRgbString()}if(r==="rgb")i=this.toRgbString();if(r==="prgb")i=this.toPercentageRgbString();if(r==="hex"||r==="hex6")i=this.toHexString();if(r==="hex3")i=this.toHexString(!0);if(r==="hex4")i=this.toHex8String(!0);if(r==="hex8")i=this.toHex8String();if(r==="name")i=this.toName();if(r==="hsl")i=this.toHslString();if(r==="hsv")i=this.toHsvString();if(r==="cmyk")i=this.toCmykString();return i||this.toHexString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ir(this.toString())}lighten(r=10){let o=this.toHsl();return o.l+=r/100,o.l=Y0(o.l),new ir(o)}brighten(r=10){let o=this.toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(255*-(r/100)))),o.g=Math.max(0,Math.min(255,o.g-Math.round(255*-(r/100)))),o.b=Math.max(0,Math.min(255,o.b-Math.round(255*-(r/100)))),new ir(o)}darken(r=10){let o=this.toHsl();return o.l-=r/100,o.l=Y0(o.l),new ir(o)}tint(r=10){return this.mix("white",r)}shade(r=10){return this.mix("black",r)}desaturate(r=10){let o=this.toHsl();return o.s-=r/100,o.s=Y0(o.s),new ir(o)}saturate(r=10){let o=this.toHsl();return o.s+=r/100,o.s=Y0(o.s),new ir(o)}greyscale(){return this.desaturate(100)}spin(r){let o=this.toHsl(),i=(o.h+r)%360;return o.h=i<0?360+i:i,new ir(o)}mix(r,o=50){let i=this.toRgb(),a=new ir(r).toRgb(),d=o/100,n={r:(a.r-i.r)*d+i.r,g:(a.g-i.g)*d+i.g,b:(a.b-i.b)*d+i.b,a:(a.a-i.a)*d+i.a};return new ir(n)}analogous(r=6,o=30){let i=this.toHsl(),a=360/o,d=[this];for(i.h=(i.h-(a*r>>1)+720)%360;--r;)i.h=(i.h+a)%360,d.push(new ir(i));return d}complement(){let r=this.toHsl();return r.h=(r.h+180)%360,new ir(r)}monochromatic(r=6){let o=this.toHsv(),{h:i}=o,{s:a}=o,{v:d}=o,n=[],b=1/r;while(r--)n.push(new ir({h:i,s:a,v:d})),d=(d+b)%1;return n}splitcomplement(){let r=this.toHsl(),{h:o}=r;return[this,new ir({h:(o+72)%360,s:r.s,l:r.l}),new ir({h:(o+216)%360,s:r.s,l:r.l})]}onBackground(r){let o=this.toRgb(),i=new ir(r).toRgb(),a=o.a+i.a*(1-o.a);return new ir({r:(o.r*o.a+i.r*i.a*(1-o.a))/a,g:(o.g*o.a+i.g*i.a*(1-o.a))/a,b:(o.b*o.a+i.b*i.a*(1-o.a))/a,a})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(r){let o=this.toHsl(),{h:i}=o,a=[this],d=360/r;for(let n=1;n<r;n++)a.push(new ir({h:(i+n*d)%360,s:o.s,l:o.l}));return a}equals(r){let o=new ir(r);if(this.format==="cmyk"||o.format==="cmyk")return this.toCmykString()===o.toCmykString();return this.toRgbString()===o.toRgbString()}}var Ld="EyeDropper"in window,E=class extends h{constructor(){super();this.formControlController=new xr(this),this.isSafeValue=!1,this.localize=new U(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){let r=["hex","rgb","hsl","hsv"],o=(r.indexOf(this.format)+1)%r.length;this.format=r[o],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(r){let o=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=o.querySelector(".color-picker__slider-handle"),{width:a}=o.getBoundingClientRect(),d=this.value,n=this.value;i.focus(),r.preventDefault(),Xo(o,{onMove:(b)=>{if(this.alpha=e(b/a*100,0,100),this.syncValues(),this.value!==n)n=this.value,this.emit("sl-input")},onStop:()=>{if(this.value!==d)d=this.value,this.emit("sl-change")},initialEvent:r})}handleHueDrag(r){let o=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=o.querySelector(".color-picker__slider-handle"),{width:a}=o.getBoundingClientRect(),d=this.value,n=this.value;i.focus(),r.preventDefault(),Xo(o,{onMove:(b)=>{if(this.hue=e(b/a*360,0,360),this.syncValues(),this.value!==n)n=this.value,this.emit("sl-input")},onStop:()=>{if(this.value!==d)d=this.value,this.emit("sl-change")},initialEvent:r})}handleGridDrag(r){let o=this.shadowRoot.querySelector(".color-picker__grid"),i=o.querySelector(".color-picker__grid-handle"),{width:a,height:d}=o.getBoundingClientRect(),n=this.value,b=this.value;i.focus(),r.preventDefault(),this.isDraggingGridHandle=!0,Xo(o,{onMove:(g,l)=>{if(this.saturation=e(g/a*100,0,100),this.brightness=e(100-l/d*100,0,100),this.syncValues(),this.value!==b)b=this.value,this.emit("sl-input")},onStop:()=>{if(this.isDraggingGridHandle=!1,this.value!==n)n=this.value,this.emit("sl-change")},initialEvent:r})}handleAlphaKeyDown(r){let o=r.shiftKey?10:1,i=this.value;if(r.key==="ArrowLeft")r.preventDefault(),this.alpha=e(this.alpha-o,0,100),this.syncValues();if(r.key==="ArrowRight")r.preventDefault(),this.alpha=e(this.alpha+o,0,100),this.syncValues();if(r.key==="Home")r.preventDefault(),this.alpha=0,this.syncValues();if(r.key==="End")r.preventDefault(),this.alpha=100,this.syncValues();if(this.value!==i)this.emit("sl-change"),this.emit("sl-input")}handleHueKeyDown(r){let o=r.shiftKey?10:1,i=this.value;if(r.key==="ArrowLeft")r.preventDefault(),this.hue=e(this.hue-o,0,360),this.syncValues();if(r.key==="ArrowRight")r.preventDefault(),this.hue=e(this.hue+o,0,360),this.syncValues();if(r.key==="Home")r.preventDefault(),this.hue=0,this.syncValues();if(r.key==="End")r.preventDefault(),this.hue=360,this.syncValues();if(this.value!==i)this.emit("sl-change"),this.emit("sl-input")}handleGridKeyDown(r){let o=r.shiftKey?10:1,i=this.value;if(r.key==="ArrowLeft")r.preventDefault(),this.saturation=e(this.saturation-o,0,100),this.syncValues();if(r.key==="ArrowRight")r.preventDefault(),this.saturation=e(this.saturation+o,0,100),this.syncValues();if(r.key==="ArrowUp")r.preventDefault(),this.brightness=e(this.brightness+o,0,100),this.syncValues();if(r.key==="ArrowDown")r.preventDefault(),this.brightness=e(this.brightness-o,0,100),this.syncValues();if(this.value!==i)this.emit("sl-change"),this.emit("sl-input")}handleInputChange(r){let o=r.target,i=this.value;if(r.stopPropagation(),this.input.value)this.setColor(o.value),o.value=this.value;else this.value="";if(this.value!==i)this.emit("sl-change"),this.emit("sl-input")}handleInputInput(r){this.formControlController.updateValidity(),r.stopPropagation()}handleInputKeyDown(r){if(r.key==="Enter"){let o=this.value;if(this.input.value){if(this.setColor(this.input.value),this.input.value=this.value,this.value!==o)this.emit("sl-change"),this.emit("sl-input");setTimeout(()=>this.input.select())}else this.hue=0}}handleInputInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleTouchMove(r){r.preventDefault()}parseColor(r){let o=new ir(r);if(!o.isValid)return null;let i=o.toHsl(),a={h:i.h,s:i.s*100,l:i.l*100,a:i.a},d=o.toRgb(),n=o.toHexString(),b=o.toHex8String(),g=o.toHsv(),l={h:g.h,s:g.s*100,v:g.v*100,a:g.a};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:d.r,g:d.g,b:d.b,string:this.setLetterCase(`rgb(${Math.round(d.r)}, ${Math.round(d.g)}, ${Math.round(d.b)})`)},rgba:{r:d.r,g:d.g,b:d.b,a:d.a,string:this.setLetterCase(`rgba(${Math.round(d.r)}, ${Math.round(d.g)}, ${Math.round(d.b)}, ${d.a.toFixed(2).toString()})`)},hex:this.setLetterCase(n),hexa:this.setLetterCase(b)}}setColor(r){let o=this.parseColor(r);if(o===null)return!1;return this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=this.opacity?o.hsva.a*100:100,this.syncValues(),!0}setLetterCase(r){if(typeof r!=="string")return"";return this.uppercase?r.toUpperCase():r.toLowerCase()}async syncValues(){let r=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(r===null)return;if(this.format==="hsl")this.inputValue=this.opacity?r.hsla.string:r.hsl.string;else if(this.format==="rgb")this.inputValue=this.opacity?r.rgba.string:r.rgb.string;else if(this.format==="hsv")this.inputValue=this.opacity?r.hsva.string:r.hsv.string;else this.inputValue=this.opacity?r.hexa:r.hex;this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Ld)return;new EyeDropper().open().then((o)=>{let i=this.value;if(this.setColor(o.sRGBHex),this.value!==i)this.emit("sl-change"),this.emit("sl-input")}).catch(()=>{})}selectSwatch(r){let o=this.value;if(!this.disabled){if(this.setColor(r),this.value!==o)this.emit("sl-change"),this.emit("sl-input")}}getHexString(r,o,i,a=100){let d=new ir(`hsva(${r}, ${o}%, ${i}%, ${a/100})`);if(!d.isValid)return"";return d.toHex8String()}stopNestedEventPropagation(r){r.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(r,o){if(this.isEmpty=!o,!o)this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100;if(!this.isSafeValue){let i=this.parseColor(o);if(i!==null)this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues();else this.inputValue=r!=null?r:""}}focus(r){if(this.inline)this.base.focus(r);else this.trigger.focus(r)}blur(){var r;let o=this.inline?this.base:this.trigger;if(this.hasFocus)o.focus({preventScroll:!0}),o.blur();if((r=this.dropdown)==null?void 0:r.open)this.dropdown.hide()}getFormattedValue(r="hex"){let o=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(o===null)return"";switch(r){case"hex":return o.hex;case"hexa":return o.hexa;case"rgb":return o.rgb.string;case"rgba":return o.rgba.string;case"hsl":return o.hsl.string;case"hsla":return o.hsla.string;case"hsv":return o.hsv.string;case"hsva":return o.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){if(!this.inline&&!this.validity.valid){if(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),!this.disabled)this.formControlController.emitInvalidEvent();return!1}return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){let r=this.saturation,o=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter((d)=>d.trim()!==""),a=v`
      <div
        part="base"
        class=${G({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?v`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${lr({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${G({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${lr({top:`${o}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${K(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${lr({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${K(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?v`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${lr({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${lr({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${K(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${lr({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${!this.noFormatToggle?v`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `:""}
            ${Ld?v`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?v`
              <div part="swatches" class="color-picker__swatches">
                ${i.map((d)=>{let n=this.parseColor(d);if(!n)return console.error(`Unable to parse swatch color: "${d}"`,this),"";return v`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${K(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${d}
                      @click=${()=>this.selectSwatch(d)}
                      @keydown=${(b)=>!this.disabled&&b.key==="Enter"&&this.setColor(n.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${lr({backgroundColor:n.hexa})}
                      ></div>
                    </div>
                  `})}
              </div>
            `:""}
      </div>
    `;if(this.inline)return a;return v`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${G({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${lr({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${a}
      </sl-dropdown>
    `}};E.styles=[X,qd];E.dependencies={"sl-button-group":so,"sl-button":T,"sl-dropdown":ur,"sl-icon":W,"sl-input":L,"sl-visually-hidden":z0};f([$('[part~="base"]')],E.prototype,"base",2);f([$('[part~="input"]')],E.prototype,"input",2);f([$(".color-dropdown")],E.prototype,"dropdown",2);f([$('[part~="preview"]')],E.prototype,"previewButton",2);f([$('[part~="trigger"]')],E.prototype,"trigger",2);f([J()],E.prototype,"hasFocus",2);f([J()],E.prototype,"isDraggingGridHandle",2);f([J()],E.prototype,"isEmpty",2);f([J()],E.prototype,"inputValue",2);f([J()],E.prototype,"hue",2);f([J()],E.prototype,"saturation",2);f([J()],E.prototype,"brightness",2);f([J()],E.prototype,"alpha",2);f([s()],E.prototype,"value",2);f([kr()],E.prototype,"defaultValue",2);f([s()],E.prototype,"label",2);f([s()],E.prototype,"format",2);f([s({type:Boolean,reflect:!0})],E.prototype,"inline",2);f([s({reflect:!0})],E.prototype,"size",2);f([s({attribute:"no-format-toggle",type:Boolean})],E.prototype,"noFormatToggle",2);f([s()],E.prototype,"name",2);f([s({type:Boolean,reflect:!0})],E.prototype,"disabled",2);f([s({type:Boolean})],E.prototype,"hoist",2);f([s({type:Boolean})],E.prototype,"opacity",2);f([s({type:Boolean})],E.prototype,"uppercase",2);f([s()],E.prototype,"swatches",2);f([s({reflect:!0})],E.prototype,"form",2);f([s({type:Boolean,reflect:!0})],E.prototype,"required",2);f([ao({passive:!1})],E.prototype,"handleTouchMove",1);f([z("format",{waitUntilFirstUpdate:!0})],E.prototype,"handleFormatChange",1);f([z("opacity",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpacityChange",1);f([z("value")],E.prototype,"handleValueChange",1);E.define("sl-color-picker");var Md=m`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;var ia=class extends h{constructor(){super(...arguments);this.hasSlotController=new R(this,"footer","header","image")}render(){return v`
      <div
        part="base"
        class=${G({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};ia.styles=[X,Md];ia.define("sl-card");var Vd=class{constructor(r,o){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{if(!this.activeInteractions++)this.paused=!0,this.host.requestUpdate()},this.resume=()=>{if(!--this.activeInteractions)this.paused=!1,this.host.requestUpdate()},r.addController(this),this.host=r,this.tickCallback=o}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(r){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{if(!this.paused)this.tickCallback()},r)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var Ed=m`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;function*Dd(r,o){if(r!==void 0){let i=0;for(let a of r)yield o(a,i++)}}function*Bd(r,o,i=1){let a=o===void 0?0:r;o??=r;for(let d=a;i>0?d<o:o<d;d+=i)yield d}var ar=class extends h{constructor(){super(...arguments);this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3000,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Vd(this,()=>this.next()),this.localize=new U(this),this.handleMouseDrag=(r)=>{if(!this.dragging)this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0;this.scrollContainer.scrollBy({left:-r.movementX,top:-r.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{let r=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});let{scrollLeft:o,scrollTop:i}=r;r.style.removeProperty("scroll-snap-type"),r.style.setProperty("overflow","hidden");let{scrollLeft:a,scrollTop:d}=r;r.style.removeProperty("overflow"),r.style.setProperty("scroll-snap-type","none"),r.scrollTo({left:o,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{if(o!==a||i!==d)r.scrollTo({left:a,top:d,behavior:ii()?"auto":"smooth"}),await or(r,"scrollend");r.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=(r)=>{if(r.some((i)=>[...i.addedNodes,...i.removedNodes].some((a)=>this.isCarouselItem(a)&&!a.hasAttribute("data-clone"))))this.initializeSlides();this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.mutationObserver)==null||r.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(r){if(r.has("slidesPerMove")||r.has("slidesPerPage"))this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage)}getPageCount(){let r=this.getSlides().length,{slidesPerPage:o,slidesPerMove:i,loop:a}=this,d=a?r/i:(r-o)/i+1;return Math.ceil(d)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:r=!0}={}){return[...this.children].filter((o)=>this.isCarouselItem(o)&&(!r||!o.hasAttribute("data-clone")))}handleKeyDown(r){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(r.key)){let o=r.target,i=this.matches(":dir(rtl)"),a=o.closest('[part~="pagination-item"]')!==null,d=r.key==="ArrowDown"||!i&&r.key==="ArrowRight"||i&&r.key==="ArrowLeft",n=r.key==="ArrowUp"||!i&&r.key==="ArrowLeft"||i&&r.key==="ArrowRight";if(r.preventDefault(),n)this.previous();if(d)this.next();if(r.key==="Home")this.goToSlide(0);if(r.key==="End")this.goToSlide(this.getSlides().length-1);if(a)this.updateComplete.then(()=>{var b;let g=(b=this.shadowRoot)==null?void 0:b.querySelector('[part~="pagination-item--active"]');if(g)g.focus()})}}handleMouseDragStart(r){if(this.mouseDragging&&r.button===0)r.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0})}handleScroll(){this.scrolling=!0}synchronizeSlides(){let r=new IntersectionObserver((o)=>{r.disconnect();for(let a of o){let d=a.target;d.toggleAttribute("inert",!a.isIntersecting),d.classList.toggle("--in-view",a.isIntersecting),d.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}let i=o.find((a)=>a.isIntersecting);if(i)if(this.loop&&i.target.hasAttribute("data-clone")){let a=Number(i.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}else{let d=this.getSlides().indexOf(i.target);this.activeSlide=Math.ceil(d/this.slidesPerMove)*this.slidesPerMove}},{root:this.scrollContainer,threshold:0.6});this.getSlides({excludeClones:!1}).forEach((o)=>{r.observe(o)})}handleScrollEnd(){if(!this.scrolling||this.dragging)return;this.synchronizeSlides(),this.scrolling=!1}isCarouselItem(r){return r instanceof Element&&r.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){if(this.getSlides({excludeClones:!1}).forEach((r,o)=>{if(r.classList.remove("--in-view"),r.classList.remove("--is-active"),r.setAttribute("aria-label",this.localize.term("slideNum",o+1)),r.hasAttribute("data-clone"))r.remove()}),this.updateSlidesSnap(),this.loop)this.createClones();this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){let r=this.getSlides(),o=this.slidesPerPage,i=r.slice(-o),a=r.slice(0,o);i.reverse().forEach((d,n)=>{let b=d.cloneNode(!0);b.setAttribute("data-clone",String(r.length-n-1)),this.prepend(b)}),a.forEach((d,n)=>{let b=d.cloneNode(!0);b.setAttribute("data-clone",String(n)),this.append(b)})}handelSlideChange(){let r=this.getSlides();if(r.forEach((o,i)=>{o.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated)this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:r[this.activeSlide]}})}updateSlidesSnap(){let r=this.getSlides(),o=this.slidesPerMove;r.forEach((i,a)=>{if((a+o)%o===0)i.style.removeProperty("scroll-snap-align");else i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){if(this.autoplayController.stop(),this.autoplay)this.autoplayController.start(this.autoplayInterval)}previous(r="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,r)}next(r="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,r)}goToSlide(r,o="smooth"){let{slidesPerPage:i,loop:a}=this,d=this.getSlides(),n=this.getSlides({excludeClones:!1});if(!d.length)return;let b=a?(r+d.length)%d.length:e(r,0,d.length-i);this.activeSlide=b;let g=this.matches(":dir(rtl)"),l=e(r+(a?i:0)+(g?i-1:0),0,n.length-1),u=n[l];this.scrollToSlide(u,ii()?"auto":o)}scrollToSlide(r,o="smooth"){let i=this.scrollContainer,a=i.getBoundingClientRect(),d=r.getBoundingClientRect(),n=d.left-a.left,b=d.top-a.top;i.scrollTo({left:n+i.scrollLeft,top:b+i.scrollTop,behavior:o})}render(){let{slidesPerMove:r,scrolling:o}=this,i=this.getPageCount(),a=this.getCurrentPage(),d=this.canScrollPrev(),n=this.canScrollNext(),b=this.matches(":dir(ltr)");return v`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${G({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${o?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?v`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${G({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!d})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${d?"false":"true"}"
                  @click=${d?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${b?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${G({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!n})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${n?"false":"true"}"
                  @click=${n?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${b?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?v`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Dd(Bd(i),(g)=>{let l=g===a;return v`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${G({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",g+1,i)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(g*r)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ar.styles=[X,Ed];ar.dependencies={"sl-icon":W};f([s({type:Boolean,reflect:!0})],ar.prototype,"loop",2);f([s({type:Boolean,reflect:!0})],ar.prototype,"navigation",2);f([s({type:Boolean,reflect:!0})],ar.prototype,"pagination",2);f([s({type:Boolean,reflect:!0})],ar.prototype,"autoplay",2);f([s({type:Number,attribute:"autoplay-interval"})],ar.prototype,"autoplayInterval",2);f([s({type:Number,attribute:"slides-per-page"})],ar.prototype,"slidesPerPage",2);f([s({type:Number,attribute:"slides-per-move"})],ar.prototype,"slidesPerMove",2);f([s()],ar.prototype,"orientation",2);f([s({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ar.prototype,"mouseDragging",2);f([$(".carousel__slides")],ar.prototype,"scrollContainer",2);f([$(".carousel__pagination")],ar.prototype,"paginationContainer",2);f([J()],ar.prototype,"activeSlide",2);f([J()],ar.prototype,"scrolling",2);f([J()],ar.prototype,"dragging",2);f([ao({passive:!0})],ar.prototype,"handleScroll",1);f([z("loop",{waitUntilFirstUpdate:!0}),z("slidesPerPage",{waitUntilFirstUpdate:!0})],ar.prototype,"initializeSlides",1);f([z("activeSlide")],ar.prototype,"handelSlideChange",1);f([z("slidesPerMove")],ar.prototype,"updateSlidesSnap",1);f([z("autoplay")],ar.prototype,"handleAutoplayChange",1);ar.define("sl-carousel");var hn=(r,o)=>{let i=0;return function(...a){window.clearTimeout(i),i=window.setTimeout(()=>{r.call(this,...a)},o)}},Pd=(r,o,i)=>{let a=r[o];r[o]=function(...d){a.call(this,...d),i.call(this,a,...d)}},mn="onscrollend"in window;if(!mn){let r=new Set,o=new WeakMap,i=(d)=>{for(let n of d.changedTouches)r.add(n.identifier)},a=(d)=>{for(let n of d.changedTouches)r.delete(n.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",a,!0),document.addEventListener("touchcancel",a,!0),Pd(EventTarget.prototype,"addEventListener",function(d,n){if(n!=="scrollend")return;let b=hn(()=>{if(!r.size)this.dispatchEvent(new Event("scrollend"));else b()},100);d.call(this,"scroll",b,{passive:!0}),o.set(this,b)}),Pd(EventTarget.prototype,"removeEventListener",function(d,n){if(n!=="scrollend")return;let b=o.get(this);if(b)d.call(this,"scroll",b,{passive:!0})})}var Ad=m`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;var aa=class extends h{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return v` <slot></slot> `}};aa.styles=[X,Ad];aa.define("sl-carousel-item");var Id=m`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`;var co=class extends h{constructor(){super(...arguments);this.hasSlotController=new R(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){let r=this.defaultSlot.assignedElements({flatten:!0}).filter((o)=>o.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(r){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return v`
      <div
        part="base"
        class=${G({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?v`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${K(this.target?this.target:void 0)}"
                rel=${K(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?v`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?v`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};co.styles=[X,Id];f([$("slot:not([name])")],co.prototype,"defaultSlot",2);f([J()],co.prototype,"renderType",2);f([s()],co.prototype,"href",2);f([s()],co.prototype,"target",2);f([s()],co.prototype,"rel",2);f([z("href",{waitUntilFirstUpdate:!0})],co.prototype,"hrefChanged",1);co.define("sl-breadcrumb-item");so.define("sl-button-group");var Td=m`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var Ao=class extends h{constructor(){super(...arguments);this.localize=new U(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let o=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach((i)=>i.removeAttribute("id")),o.setAttribute("data-default",""),o.slot="separator",o}handleSlotChange(){let r=[...this.defaultSlot.assignedElements({flatten:!0})].filter((o)=>o.tagName.toLowerCase()==="sl-breadcrumb-item");r.forEach((o,i)=>{let a=o.querySelector('[slot="separator"]');if(a===null)o.append(this.getSeparator());else if(a.hasAttribute("data-default"))a.replaceWith(this.getSeparator());if(i===r.length-1)o.setAttribute("aria-current","page");else o.removeAttribute("aria-current")})}render(){if(this.separatorDir!==this.localize.dir())this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange());return v`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ao.styles=[X,Td];Ao.dependencies={"sl-icon":W};f([$("slot")],Ao.prototype,"defaultSlot",2);f([$('slot[name="separator"]')],Ao.prototype,"separatorSlot",2);f([s()],Ao.prototype,"label",2);Ao.define("sl-breadcrumb");var _d=m`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;var d0=class extends h{constructor(){super(...arguments);this.variant="primary",this.pill=!1,this.pulse=!1}render(){return v`
      <span
        part="base"
        class=${G({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};d0.styles=[X,_d];f([s({reflect:!0})],d0.prototype,"variant",2);f([s({type:Boolean,reflect:!0})],d0.prototype,"pill",2);f([s({type:Boolean,reflect:!0})],d0.prototype,"pulse",2);d0.define("sl-badge");T.define("sl-button");var Rd=m`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`;var Ar=class extends h{constructor(){super(...arguments);this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){let r=document.createElement("canvas"),{width:o,height:i}=this.animatedImage;if(r.width=o,r.height=i,r.getContext("2d").drawImage(this.animatedImage,0,0,o,i),this.frozenFrame=r.toDataURL("image/gif"),!this.isLoaded)this.emit("sl-load"),this.isLoaded=!0}handleError(){this.emit("sl-error")}handlePlayChange(){if(this.play)this.animatedImage.src="",this.animatedImage.src=this.src}handleSrcChange(){this.isLoaded=!1}render(){return v`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?v`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Ar.styles=[X,Rd];Ar.dependencies={"sl-icon":W};f([$(".animated-image__animated")],Ar.prototype,"animatedImage",2);f([J()],Ar.prototype,"frozenFrame",2);f([J()],Ar.prototype,"isLoaded",2);f([s()],Ar.prototype,"src",2);f([s()],Ar.prototype,"alt",2);f([s({type:Boolean,reflect:!0})],Ar.prototype,"play",2);f([z("play",{waitUntilFirstUpdate:!0})],Ar.prototype,"handlePlayChange",1);f([z("src")],Ar.prototype,"handleSrcChange",1);Ar.define("sl-animated-image");var jd=m`
  :host {
    display: contents;
  }
`;var N0={};o1(N0,{zoomOutUp:()=>lb,zoomOutRight:()=>gb,zoomOutLeft:()=>bb,zoomOutDown:()=>sb,zoomOut:()=>nb,zoomInUp:()=>db,zoomInRight:()=>fb,zoomInLeft:()=>ab,zoomInDown:()=>ib,zoomIn:()=>ob,wobble:()=>Yn,tada:()=>On,swing:()=>Hn,slideOutUp:()=>js,slideOutRight:()=>Rs,slideOutLeft:()=>_s,slideOutDown:()=>Ts,slideInUp:()=>Is,slideInRight:()=>As,slideInLeft:()=>Ps,slideInDown:()=>Bs,shakeY:()=>qn,shakeX:()=>Kn,shake:()=>Jn,rubberBand:()=>Gn,rotateOutUpRight:()=>Ds,rotateOutUpLeft:()=>Es,rotateOutDownRight:()=>Vs,rotateOutDownLeft:()=>Ms,rotateOut:()=>Ls,rotateInUpRight:()=>Ws,rotateInUpLeft:()=>Ns,rotateInDownRight:()=>Us,rotateInDownLeft:()=>Fs,rotateIn:()=>Ys,rollOut:()=>rb,rollIn:()=>Ss,pulse:()=>kn,lightSpeedOutRight:()=>Os,lightSpeedOutLeft:()=>Hs,lightSpeedInRight:()=>qs,lightSpeedInLeft:()=>Ks,jello:()=>Zn,jackInTheBox:()=>es,hinge:()=>Cs,heartBeat:()=>Xn,headShake:()=>yn,flipOutY:()=>Js,flipOutX:()=>Gs,flipInY:()=>ks,flipInX:()=>Zs,flip:()=>Xs,flash:()=>$n,fadeOutUpBig:()=>ys,fadeOutUp:()=>$s,fadeOutTopRight:()=>Qs,fadeOutTopLeft:()=>ms,fadeOutRightBig:()=>hs,fadeOutRight:()=>zs,fadeOutLeftBig:()=>ws,fadeOutLeft:()=>xs,fadeOutDownBig:()=>vs,fadeOutDown:()=>cs,fadeOutBottomRight:()=>ps,fadeOutBottomLeft:()=>ts,fadeOut:()=>us,fadeInUpBig:()=>ls,fadeInUp:()=>gs,fadeInTopRight:()=>bs,fadeInTopLeft:()=>ss,fadeInRightBig:()=>ns,fadeInRight:()=>ds,fadeInLeftBig:()=>fs,fadeInLeft:()=>as,fadeInDownBig:()=>is,fadeInDown:()=>os,fadeInBottomRight:()=>rs,fadeInBottomLeft:()=>Sn,fadeIn:()=>en,easings:()=>fa,bounceOutUp:()=>Cn,bounceOutRight:()=>jn,bounceOutLeft:()=>Rn,bounceOutDown:()=>_n,bounceOut:()=>Tn,bounceInUp:()=>In,bounceInRight:()=>An,bounceInLeft:()=>Pn,bounceInDown:()=>Bn,bounceIn:()=>Dn,bounce:()=>Qn,backOutUp:()=>En,backOutRight:()=>Vn,backOutLeft:()=>Mn,backOutDown:()=>Ln,backInUp:()=>Wn,backInRight:()=>Nn,backInLeft:()=>Un,backInDown:()=>Fn});var Qn=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:0.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:0.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:0.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:0.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:0.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:0.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:0.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var $n=[{offset:0,opacity:"1"},{offset:0.25,opacity:"0"},{offset:0.5,opacity:"1"},{offset:0.75,opacity:"0"},{offset:1,opacity:"1"}];var yn=[{offset:0,transform:"translateX(0)"},{offset:0.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:0.185,transform:"translateX(5px) rotateY(7deg)"},{offset:0.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:0.435,transform:"translateX(2px) rotateY(3deg)"},{offset:0.5,transform:"translateX(0)"}];var Xn=[{offset:0,transform:"scale(1)"},{offset:0.14,transform:"scale(1.3)"},{offset:0.28,transform:"scale(1)"},{offset:0.42,transform:"scale(1.3)"},{offset:0.7,transform:"scale(1)"}];var Zn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:0.111,transform:"translate3d(0, 0, 0)"},{offset:0.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:0.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:0.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:0.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:0.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:0.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:0.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var kn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:0.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Gn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:0.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:0.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:0.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:0.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:0.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Jn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:0.1,transform:"translate3d(-10px, 0, 0)"},{offset:0.2,transform:"translate3d(10px, 0, 0)"},{offset:0.3,transform:"translate3d(-10px, 0, 0)"},{offset:0.4,transform:"translate3d(10px, 0, 0)"},{offset:0.5,transform:"translate3d(-10px, 0, 0)"},{offset:0.6,transform:"translate3d(10px, 0, 0)"},{offset:0.7,transform:"translate3d(-10px, 0, 0)"},{offset:0.8,transform:"translate3d(10px, 0, 0)"},{offset:0.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Kn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:0.1,transform:"translate3d(-10px, 0, 0)"},{offset:0.2,transform:"translate3d(10px, 0, 0)"},{offset:0.3,transform:"translate3d(-10px, 0, 0)"},{offset:0.4,transform:"translate3d(10px, 0, 0)"},{offset:0.5,transform:"translate3d(-10px, 0, 0)"},{offset:0.6,transform:"translate3d(10px, 0, 0)"},{offset:0.7,transform:"translate3d(-10px, 0, 0)"},{offset:0.8,transform:"translate3d(10px, 0, 0)"},{offset:0.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var qn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:0.1,transform:"translate3d(0, -10px, 0)"},{offset:0.2,transform:"translate3d(0, 10px, 0)"},{offset:0.3,transform:"translate3d(0, -10px, 0)"},{offset:0.4,transform:"translate3d(0, 10px, 0)"},{offset:0.5,transform:"translate3d(0, -10px, 0)"},{offset:0.6,transform:"translate3d(0, 10px, 0)"},{offset:0.7,transform:"translate3d(0, -10px, 0)"},{offset:0.8,transform:"translate3d(0, 10px, 0)"},{offset:0.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Hn=[{offset:0.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:0.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:0.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:0.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var On=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:0.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:0.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:0.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:0.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:0.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:0.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:0.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:0.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:0.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Yn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:0.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:0.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:0.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:0.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:0.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Fn=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:0.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Un=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:0.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Nn=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:0.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Wn=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:0.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Ln=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:0.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var Mn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:0.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var Vn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:0.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var En=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:0.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var Dn=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:0.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:0.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:0.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:0.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var Bn=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:0.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:0.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:0.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var Pn=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:0.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:0.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:0.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var An=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:0.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:0.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:0.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var In=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:0.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:0.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:0.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var Tn=[{offset:0.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:0.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:0.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var _n=[{offset:0.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:0.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:0.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var Rn=[{offset:0.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var jn=[{offset:0.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var Cn=[{offset:0.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:0.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:0.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var en=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var Sn=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var rs=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var os=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var is=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var as=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var fs=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ds=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ns=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ss=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var bs=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var gs=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ls=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var us=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var ts=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var ps=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var cs=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var vs=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var xs=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var ws=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var zs=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var hs=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var ms=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var Qs=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var $s=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var ys=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var Xs=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:0.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:0.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:0.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var Zs=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:0.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:0.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:0.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var ks=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:0.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:0.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:0.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var Gs=[{offset:0,transform:"perspective(400px)"},{offset:0.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var Js=[{offset:0,transform:"perspective(400px)"},{offset:0.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var Ks=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:0.6,transform:"skewX(-20deg)",opacity:"1"},{offset:0.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var qs=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:0.6,transform:"skewX(20deg)",opacity:"1"},{offset:0.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Hs=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var Os=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var Ys=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Fs=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Us=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Ns=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Ws=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Ls=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var Ms=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var Vs=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var Es=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var Ds=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var Bs=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Ps=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var As=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Is=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Ts=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var _s=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var Rs=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var js=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var Cs=[{offset:0,easing:"ease-in-out"},{offset:0.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:0.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:0.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:0.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var es=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:0.5,transform:"rotate(-10deg)"},{offset:0.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var Ss=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var rb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var ob=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0.5,opacity:"1"}];var ib=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:0.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var ab=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:0.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var fb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:0.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var db=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:0.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var nb=[{offset:0,opacity:"1"},{offset:0.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var sb=[{offset:0.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var bb=[{offset:0.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var gb=[{offset:0.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var lb=[{offset:0.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var fa={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var cr=class extends h{constructor(){super(...arguments);this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1000,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var r,o;return(o=(r=this.animation)==null?void 0:r.currentTime)!=null?o:0}set currentTime(r){if(this.animation)this.animation.currentTime=r}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var r,o;let i=(r=N0.easings[this.easing])!=null?r:this.easing,a=(o=this.keyframes)!=null?o:N0[this.name],n=(await this.defaultSlot).assignedElements()[0];if(!n||!a)return!1;if(this.destroyAnimation(),this.animation=n.animate(a,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play)this.hasStarted=!0,this.emit("sl-start");else this.animation.pause();return!0}destroyAnimation(){if(this.animation)this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1}handleAnimationChange(){if(!this.hasUpdated)return;this.createAnimation()}handlePlayChange(){if(this.animation){if(this.play&&!this.hasStarted)this.hasStarted=!0,this.emit("sl-start");if(this.play)this.animation.play();else this.animation.pause();return!0}return!1}handlePlaybackRateChange(){if(this.animation)this.animation.playbackRate=this.playbackRate}cancel(){var r;(r=this.animation)==null||r.cancel()}finish(){var r;(r=this.animation)==null||r.finish()}render(){return v` <slot @slotchange=${this.handleSlotChange}></slot> `}};cr.styles=[X,jd];f([ka("slot")],cr.prototype,"defaultSlot",2);f([s()],cr.prototype,"name",2);f([s({type:Boolean,reflect:!0})],cr.prototype,"play",2);f([s({type:Number})],cr.prototype,"delay",2);f([s()],cr.prototype,"direction",2);f([s({type:Number})],cr.prototype,"duration",2);f([s()],cr.prototype,"easing",2);f([s({attribute:"end-delay",type:Number})],cr.prototype,"endDelay",2);f([s()],cr.prototype,"fill",2);f([s({type:Number})],cr.prototype,"iterations",2);f([s({attribute:"iteration-start",type:Number})],cr.prototype,"iterationStart",2);f([s({attribute:!1})],cr.prototype,"keyframes",2);f([s({attribute:"playback-rate",type:Number})],cr.prototype,"playbackRate",2);f([z(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],cr.prototype,"handleAnimationChange",1);f([z("play")],cr.prototype,"handlePlayChange",1);f([z("playbackRate")],cr.prototype,"handlePlaybackRateChange",1);cr.define("sl-animation");var Cd=m`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`;var n0=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Yr=class extends h{constructor(){super(...arguments);this.hasSlotController=new R(this,"icon","suffix"),this.localize=new U(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){if(this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0)this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100)}pauseAutoHide(){var r;(r=this.countdownAnimation)==null||r.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var r;if(this.duration<1/0)this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(r=this.countdownAnimation)==null||r.play()}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:r}=this,o="100%",i="0";this.countdownAnimation=r.animate([{width:"100%"},{width:"0"}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){if(this.emit("sl-show"),this.duration<1/0)this.restartAutoHide();await C(this.base),this.base.hidden=!1;let{keyframes:r,options:o}=A(this,"alert.show",{dir:this.localize.dir()});await _(this.base,r,o),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await C(this.base);let{keyframes:r,options:o}=A(this,"alert.hide",{dir:this.localize.dir()});await _(this.base,r,o),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(this.open)return;return this.open=!0,or(this,"sl-after-show")}async hide(){if(!this.open)return;return this.open=!1,or(this,"sl-after-hide")}async toast(){return new Promise((r)=>{if(this.handleCountdownChange(),n0.parentElement===null)document.body.append(n0);n0.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{if(n0.removeChild(this),r(),n0.querySelector("sl-alert")===null)n0.remove()},{once:!0})})}render(){return v`
      <div
        part="base"
        class=${G({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?v`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?v`
              <div
                class=${G({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Yr.styles=[X,Cd];Yr.dependencies={"sl-icon-button":S};f([$('[part~="base"]')],Yr.prototype,"base",2);f([$(".alert__countdown-elapsed")],Yr.prototype,"countdownElement",2);f([s({type:Boolean,reflect:!0})],Yr.prototype,"open",2);f([s({type:Boolean,reflect:!0})],Yr.prototype,"closable",2);f([s({reflect:!0})],Yr.prototype,"variant",2);f([s({type:Number})],Yr.prototype,"duration",2);f([s({type:String,reflect:!0})],Yr.prototype,"countdown",2);f([J()],Yr.prototype,"remainingTime",2);f([z("open",{waitUntilFirstUpdate:!0})],Yr.prototype,"handleOpenChange",1);f([z("duration")],Yr.prototype,"handleDurationChange",1);M("alert.show",{keyframes:[{opacity:0,scale:0.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});M("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:0.8}],options:{duration:250,easing:"ease"}});Yr.define("sl-alert");var ed=m`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;var ro=class extends h{constructor(){super(...arguments);this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let r=v`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,o=v``;if(this.initials)o=v`<div part="initials" class="avatar__initials">${this.initials}</div>`;else o=v`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `;return v`
      <div
        part="base"
        class=${G({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?r:o}
      </div>
    `}};ro.styles=[X,ed];ro.dependencies={"sl-icon":W};f([J()],ro.prototype,"hasError",2);f([s()],ro.prototype,"image",2);f([s()],ro.prototype,"label",2);f([s()],ro.prototype,"initials",2);f([s()],ro.prototype,"loading",2);f([s({reflect:!0})],ro.prototype,"shape",2);f([z("image")],ro.prototype,"handleImageChange",1);ro.define("sl-avatar");var ub=(r,o)=>{customElements.define("slx-"+r,o)};ub("countryflag",P0);r0("/public/");
