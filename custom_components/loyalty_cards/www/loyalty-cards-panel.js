function e(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n}"function"==typeof SuppressedError&&SuppressedError;var t="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",o="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z",r="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",i="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z",a="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",n="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";const s=globalThis,d=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),c=new WeakMap;let p=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(d&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=c.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&c.set(t,e))}return e}toString(){return this.cssText}};const u=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new p(o,e,l)},h=d?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new p("string"==typeof e?e:e+"",void 0,l))(t)})(e):e,{is:m,defineProperty:g,getOwnPropertyDescriptor:b,getOwnPropertyNames:f,getOwnPropertySymbols:v,getPrototypeOf:_}=Object,y=globalThis,x=y.trustedTypes,$=x?x.emptyScript:"",w=y.reactiveElementPolyfillSupport,k=(e,t)=>e,A={toAttribute(e,t){switch(t){case Boolean:e=e?$:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},C=(e,t)=>!m(e,t),z={attribute:!0,type:String,converter:A,reflect:!1,useDefault:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=z){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&g(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:i}=b(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??z}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,t=[...f(e),...v(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(d)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of t){const t=document.createElement("style"),r=s.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:A).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=o.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:A;this._$Em=r;const a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,o,r=!1,i){if(void 0!==e){const a=this.constructor;if(!1===r&&(i=this[e]),o??=a.getPropertyOptions(e),!((o.hasChanged??C)(i,t)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:i},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,o,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[k("elementProperties")]=new Map,E[k("finalized")]=new Map,w?.({ReactiveElement:E}),(y.reactiveElementVersions??=[]).push("2.1.2");const j=globalThis,S=e=>e,N=j.trustedTypes,L=N?N.createPolicy("lit-html",{createHTML:e=>e}):void 0,M="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+R,P=`<${T}>`,q=document,H=()=>q.createComment(""),V=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,U="[ \t\n\f\r]",K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,D=/>/g,Z=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,W=/"/g,Q=/^(?:script|style|textarea|title)$/i,I=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),G=I(1),J=I(2),X=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),ee=new WeakMap,te=q.createTreeWalker(q,129);function oe(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(t):t}const re=(e,t)=>{const o=e.length-1,r=[];let i,a=2===t?"<svg>":3===t?"<math>":"",n=K;for(let t=0;t<o;t++){const o=e[t];let s,d,l=-1,c=0;for(;c<o.length&&(n.lastIndex=c,d=n.exec(o),null!==d);)c=n.lastIndex,n===K?"!--"===d[1]?n=B:void 0!==d[1]?n=D:void 0!==d[2]?(Q.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=Z):void 0!==d[3]&&(n=Z):n===Z?">"===d[0]?(n=i??K,l=-1):void 0===d[1]?l=-2:(l=n.lastIndex-d[2].length,s=d[1],n=void 0===d[3]?Z:'"'===d[3]?W:F):n===W||n===F?n=Z:n===B||n===D?n=K:(n=Z,i=void 0);const p=n===Z&&e[t+1].startsWith("/>")?" ":"";a+=n===K?o+P:l>=0?(r.push(s),o.slice(0,l)+M+o.slice(l)+R+p):o+R+(-2===l?t:p)}return[oe(e,a+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class ie{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let i=0,a=0;const n=e.length-1,s=this.parts,[d,l]=re(e,t);if(this.el=ie.createElement(d,o),te.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=te.nextNode())&&s.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(M)){const t=l[a++],o=r.getAttribute(e).split(R),n=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:n[2],strings:o,ctor:"."===n[1]?le:"?"===n[1]?ce:"@"===n[1]?pe:de}),r.removeAttribute(e)}else e.startsWith(R)&&(s.push({type:6,index:i}),r.removeAttribute(e));if(Q.test(r.tagName)){const e=r.textContent.split(R),t=e.length-1;if(t>0){r.textContent=N?N.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],H()),te.nextNode(),s.push({type:2,index:++i});r.append(e[t],H())}}}else if(8===r.nodeType)if(r.data===T)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(R,e+1));)s.push({type:7,index:i}),e+=R.length-1}i++}}static createElement(e,t){const o=q.createElement("template");return o.innerHTML=e,o}}function ae(e,t,o=e,r){if(t===X)return t;let i=void 0!==r?o._$Co?.[r]:o._$Cl;const a=V(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(e),i._$AT(e,o,r)),void 0!==r?(o._$Co??=[])[r]=i:o._$Cl=i),void 0!==i&&(t=ae(e,i._$AS(e,t.values),i,r)),t}class ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??q).importNode(t,!0);te.currentNode=r;let i=te.nextNode(),a=0,n=0,s=o[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new se(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new ue(i,this,e)),this._$AV.push(t),s=o[++n]}a!==s?.index&&(i=te.nextNode(),a++)}return te.currentNode=q,r}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class se{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ae(this,e,t),V(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==X&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(q.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=ie.createElement(oe(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new ne(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=ee.get(e.strings);return void 0===t&&ee.set(e.strings,t=new ie(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const i of e)r===t.length?t.push(o=new se(this.O(H()),this.O(H()),this,this.options)):o=t[r],o._$AI(i),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=S(e).nextSibling;S(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class de{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Y}_$AI(e,t=this,o,r){const i=this.strings;let a=!1;if(void 0===i)e=ae(this,e,t,0),a=!V(e)||e!==this._$AH&&e!==X,a&&(this._$AH=e);else{const r=e;let n,s;for(e=i[0],n=0;n<i.length-1;n++)s=ae(this,r[o+n],t,n),s===X&&(s=this._$AH[n]),a||=!V(s)||s!==this._$AH[n],s===Y?e=Y:e!==Y&&(e+=(s??"")+i[n+1]),this._$AH[n]=s}a&&!r&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class le extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class ce extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class pe extends de{constructor(e,t,o,r,i){super(e,t,o,r,i),this.type=5}_$AI(e,t=this){if((e=ae(this,e,t,0)??Y)===X)return;const o=this._$AH,r=e===Y&&o!==Y||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==Y&&(o===Y||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ue{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ae(this,e)}}const he=j.litHtmlPolyfillSupport;he?.(ie,se),(j.litHtmlVersions??=[]).push("3.3.3");const me=globalThis;let ge=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const r=o?.renderBefore??t;let i=r._$litPart$;if(void 0===i){const e=o?.renderBefore??null;r._$litPart$=i=new se(t.insertBefore(H(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};ge._$litElement$=!0,ge.finalized=!0,me.litElementHydrateSupport?.({LitElement:ge});const be=me.litElementPolyfillSupport;be?.({LitElement:ge}),(me.litElementVersions??=[]).push("4.2.2");const fe={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:C},ve=(e=fe,t,o)=>{const{kind:r,metadata:i}=o;let a=globalThis.litPropertyMetadata.get(i);if(void 0===a&&globalThis.litPropertyMetadata.set(i,a=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),a.set(o.name,e),"accessor"===r){const{name:r}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,i,e,!0,o)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=o;return function(o){const i=this[r];t.call(this,o),this.requestUpdate(r,i,e,!0,o)}}throw Error("Unsupported decorator location: "+r)};function _e(e){return(t,o)=>"object"==typeof o?ve(e,t,o):((e,t,o)=>{const r=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function ye(e){return _e({...e,state:!0,attribute:!1})}function xe(e,t){return(t,o,r)=>((e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o))(t,o,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}const $e=e=>e.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim();const we=e=>e.callWS({type:"loyalty_cards/list"}).then(e=>e.cards);async function ke(e,t){const o=new Map,r=()=>t((e=>[...e].sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"})))([...o.values()])),i=await e.connection.subscribeMessage(e=>{"removed"===e.type?o.delete(e.card.id):o.set(e.card.id,e.card),r()},{type:"loyalty_cards/subscribe"});for(const t of await we(e))o.set(t.id,t);return r(),i}const Ae=1,Ce=2,ze=e=>(...t)=>({_$litDirective$:e,values:t});let Ee=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const je="important",Se=" !"+je,Ne=ze(class extends Ee{constructor(e){if(super(e),e.type!==Ae||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const r=e[o];return null==r?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in t){const r=t[e];if(null!=r){this.ft.add(e);const t="string"==typeof r&&r.endsWith(Se);e.includes("-")||t?o.setProperty(e,t?r.slice(0,-11):r,t?je:""):o[e]=r}}return X}}),Le="#ffffff",Me="#1a1a1a";function Re(e){const[t,o,r]=[1,3,5].map(t=>{const o=parseInt(e.slice(t,t+2),16)/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4});return.2126*t+.7152*o+.0722*r}function Te(e,t){const[o,r]=[Re(e),Re(t)].sort((e,t)=>t-e);return(o+.05)/(r+.05)}function Pe(e){return Te(e,Le)>=Te(e,Me)?Le:Me}const qe=[["red","#d50f25"],["pink","#c2185b"],["orange","#c2410c"],["amber","#f59e0b"],["yellow","#f5c518"],["lime","#a3c614"],["green","#3d7d22"],["teal","#00796b"],["light_blue","#0a64a8"],["blue","#0b3d78"],["indigo","#3949ab"],["purple","#6d28d9"],["brown","#6d4c41"],["grey","#546e7a"],["black","#000000"],["white","#f5f5f5"]],He=(e,t)=>{return e.logo?G`<img class="chip" src=${e.logo} alt="" style=${Ne({width:`${t}px`,height:`${t}px`})} />`:G`<span
        class="chip"
        aria-hidden="true"
        style=${Ne({width:`${t}px`,height:`${t}px`,fontSize:`${Math.round(.44*t)}px`,background:(r=e.color,Pe(r)===Le?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.12)")})}
        >${o=e.name,(o.trim().charAt(0)||"?").toUpperCase()}</span
      >`;var o,r},Ve=e=>({background:e,color:Pe(e)}),Oe=e=>G`<div class="tile" style=${Ne(Ve(e.color))}>
    ${He(e,32)}
    <span class="tile-name">${e.name}</span>
  </div>`,Ue=u`
  .tile {
    aspect-ratio: 1.586;
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    box-shadow: inset 0 0 0 1px rgba(127, 127, 127, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: start;
    overflow: hidden;
  }
  .tile-name {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  .chip {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    flex-shrink: 0;
    object-fit: cover;
  }
`;class Ke extends Ee{constructor(e){if(super(e),this.it=Y,e.type!==Ce)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Y||null==e)return this._t=void 0,this.it=e;if(e===X)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ke.directiveName="unsafeHTML",Ke.resultType=1;class Be extends Ke{}Be.directiveName="unsafeSVG",Be.resultType=2;const De=ze(Be);var Ze={title:"Loyalty Cards",menu:"Open sidebar",back:"Back",close:"Close",cancel:"Cancel",loading:"Loading…","list.search":"Search store","list.search_label":"Search by store name","list.count_one":"1 card","list.count":"{n} cards","list.results_one":"1 result","list.results":"{n} results","list.empty":"No cards found","list.empty_hint":"Try another name or add a new card.","list.none":"No cards yet","list.none_hint":"Add your first loyalty card with the button below.","list.add":"Add card","list.open":"Open card {name}","detail.edit":"Edit card","detail.more":"More actions","detail.edit_item":"Edit","detail.delete_item":"Delete","detail.code_type":"Code type","detail.barcode":"Barcode","detail.qr":"QR code","detail.fullscreen":"Show full screen","detail.number":"Card number","detail.copy":"Copy number","detail.copied":"Number copied","detail.format":"Format","detail.notes":"Notes","detail.invalid":"This number is not a valid {format}: showing it as a QR code.","detail.delete_title":"Delete card?","detail.delete_text":"{name} will be removed for everyone who can see it.","detail.not_found":"Card not found","fullscreen.close":"Tap to close","editor.new":"New card","editor.edit":"Edit card","editor.save":"Save","editor.save_card":"Save card","editor.code":"Card code","editor.scan_hint":"Frame the barcode or QR code","editor.take_photo":"Take photo","editor.from_gallery":"From gallery","editor.scanning":"Reading the code…","editor.detected":"Code detected · {format}","editor.not_detected":"No code found. Try another photo or type the number.","editor.name":"Store name","editor.name_placeholder":"E.g. Coop","editor.number":"Card number","editor.format":"Code format","editor.logo":"Logo","editor.logo_hint":"Photo of the logo on the card or an image from the gallery. Without a logo the initial is used.","editor.logo_photo":"Take a photo of the logo","editor.logo_gallery":"Choose logo from gallery","editor.logo_remove":"Remove logo","editor.logo_error":"This image cannot be used as a logo.","editor.crop":"Crop logo","editor.crop_hint":"Drag to move, use the slider to zoom.","editor.zoom":"Zoom","editor.crop_done":"Use logo","editor.color":"Color","editor.color_custom":"Custom color","editor.color_name":"Color {name}","editor.preview":"Preview","editor.visibility":"Visibility","editor.visibility_label":"Card visibility","editor.shared":"Shared","editor.private":"Only me","editor.shared_hint":"Everyone in the house can see and edit it.","editor.private_hint":"Only you can see and manage it.","editor.notes":"Personal notes (optional)","editor.notes_placeholder":"E.g. family card, points expiry…","editor.required":"Enter the store name and the card number.","color.red":"Red","color.pink":"Pink","color.orange":"Orange","color.amber":"Amber","color.yellow":"Yellow","color.lime":"Lime","color.green":"Green","color.teal":"Teal","color.light_blue":"Light blue","color.blue":"Blue","color.indigo":"Indigo","color.purple":"Purple","color.brown":"Brown","color.grey":"Grey","color.black":"Black","color.white":"White","error.not_found":"This card no longer exists or is not visible to you.","error.invalid_format":"Some data is not valid: {message}","error.generic":"Something went wrong: {message}","card.name":"Loyalty card","card.description":"Shows one of your loyalty cards on the dashboard.","card.not_found":"Card not found","card.choose":"Choose a card in the editor","card.tap_fullscreen":"Tap to open full screen","card_editor.card":"Card","card_editor.mode":"Display","card_editor.mode_tile":"Tile","card_editor.mode_barcode":"Barcode","card_editor.mode_qr":"QR code","card_editor.tap_action":"Tap action","card_editor.tap_detail":"Open details","card_editor.tap_fullscreen":"Full screen","card_editor.tap_none":"Nothing"};const Fe={de:{title:"Kundenkarten",menu:"Seitenleiste öffnen",back:"Zurück",close:"Schließen",cancel:"Abbrechen",loading:"Wird geladen…","list.search":"Geschäft suchen","list.search_label":"Nach Geschäftsnamen suchen","list.count_one":"1 Karte","list.count":"{n} Karten","list.results_one":"1 Ergebnis","list.results":"{n} Ergebnisse","list.empty":"Keine Karten gefunden","list.empty_hint":"Versuche einen anderen Namen oder füge eine neue Karte hinzu.","list.none":"Noch keine Karten","list.none_hint":"Füge deine erste Kundenkarte mit der Schaltfläche unten hinzu.","list.add":"Karte hinzufügen","list.open":"Karte {name} öffnen","detail.edit":"Karte bearbeiten","detail.more":"Weitere Aktionen","detail.edit_item":"Bearbeiten","detail.delete_item":"Löschen","detail.code_type":"Codetyp","detail.barcode":"Barcode","detail.qr":"QR-Code","detail.fullscreen":"Vollbild anzeigen","detail.number":"Kartennummer","detail.copy":"Nummer kopieren","detail.copied":"Nummer kopiert","detail.format":"Format","detail.notes":"Notizen","detail.invalid":"Diese Nummer ist kein gültiger {format}: Sie wird als QR-Code angezeigt.","detail.delete_title":"Karte löschen?","detail.delete_text":"{name} wird für alle entfernt, die sie sehen können.","detail.not_found":"Karte nicht gefunden","fullscreen.close":"Zum Schließen tippen","editor.new":"Neue Karte","editor.edit":"Karte bearbeiten","editor.save":"Speichern","editor.save_card":"Karte speichern","editor.code":"Kartencode","editor.scan_hint":"Barcode oder QR-Code ins Bild nehmen","editor.take_photo":"Foto aufnehmen","editor.from_gallery":"Aus Galerie","editor.scanning":"Code wird gelesen…","editor.detected":"Code erkannt · {format}","editor.not_detected":"Kein Code gefunden. Versuche ein anderes Foto oder gib die Nummer ein.","editor.name":"Geschäftsname","editor.name_placeholder":"Z. B. Coop","editor.number":"Kartennummer","editor.format":"Codeformat","editor.logo":"Logo","editor.logo_hint":"Foto des Logos auf der Karte oder ein Bild aus der Galerie. Ohne Logo wird der Anfangsbuchstabe verwendet.","editor.logo_photo":"Foto vom Logo aufnehmen","editor.logo_gallery":"Logo aus Galerie wählen","editor.logo_remove":"Logo entfernen","editor.logo_error":"Dieses Bild kann nicht als Logo verwendet werden.","editor.crop":"Logo zuschneiden","editor.crop_hint":"Zum Verschieben ziehen, mit dem Regler zoomen.","editor.zoom":"Zoom","editor.crop_done":"Logo verwenden","editor.color":"Farbe","editor.color_custom":"Eigene Farbe","editor.color_name":"Farbe {name}","editor.preview":"Vorschau","editor.visibility":"Sichtbarkeit","editor.visibility_label":"Sichtbarkeit der Karte","editor.shared":"Geteilt","editor.private":"Nur ich","editor.shared_hint":"Alle im Haushalt können sie sehen und bearbeiten.","editor.private_hint":"Nur du kannst sie sehen und verwalten.","editor.notes":"Persönliche Notizen (optional)","editor.notes_placeholder":"Z. B. Familienkarte, Verfall der Punkte…","editor.required":"Gib den Geschäftsnamen und die Kartennummer ein.","color.red":"Rot","color.pink":"Rosa","color.orange":"Orange","color.amber":"Bernstein","color.yellow":"Gelb","color.lime":"Limette","color.green":"Grün","color.teal":"Türkis","color.light_blue":"Hellblau","color.blue":"Blau","color.indigo":"Indigo","color.purple":"Violett","color.brown":"Braun","color.grey":"Grau","color.black":"Schwarz","color.white":"Weiß","error.not_found":"Diese Karte existiert nicht mehr oder ist für dich nicht sichtbar.","error.invalid_format":"Einige Daten sind ungültig: {message}","error.generic":"Etwas ist schiefgelaufen: {message}","card.name":"Kundenkarte","card.description":"Zeigt eine deiner Kundenkarten im Dashboard an.","card.not_found":"Karte nicht gefunden","card.choose":"Wähle im Editor eine Karte aus","card.tap_fullscreen":"Tippen für Vollbild","card_editor.card":"Karte","card_editor.mode":"Anzeige","card_editor.mode_tile":"Kachel","card_editor.mode_barcode":"Barcode","card_editor.mode_qr":"QR-Code","card_editor.tap_action":"Tippaktion","card_editor.tap_detail":"Details öffnen","card_editor.tap_fullscreen":"Vollbild","card_editor.tap_none":"Keine"},en:Ze,es:{title:"Tarjetas de fidelidad",menu:"Abrir barra lateral",back:"Atrás",close:"Cerrar",cancel:"Cancelar",loading:"Cargando…","list.search":"Buscar tienda","list.search_label":"Buscar por nombre de tienda","list.count_one":"1 tarjeta","list.count":"{n} tarjetas","list.results_one":"1 resultado","list.results":"{n} resultados","list.empty":"No se encontraron tarjetas","list.empty_hint":"Prueba con otro nombre o añade una tarjeta nueva.","list.none":"Aún no hay tarjetas","list.none_hint":"Añade tu primera tarjeta de fidelidad con el botón de abajo.","list.add":"Añadir tarjeta","list.open":"Abrir tarjeta {name}","detail.edit":"Editar tarjeta","detail.more":"Más acciones","detail.edit_item":"Editar","detail.delete_item":"Eliminar","detail.code_type":"Tipo de código","detail.barcode":"Código de barras","detail.qr":"Código QR","detail.fullscreen":"Mostrar a pantalla completa","detail.number":"Número de tarjeta","detail.copy":"Copiar número","detail.copied":"Número copiado","detail.format":"Formato","detail.notes":"Notas","detail.invalid":"Este número no es un {format} válido: se muestra como código QR.","detail.delete_title":"¿Eliminar la tarjeta?","detail.delete_text":"{name} se eliminará para todos los que puedan verla.","detail.not_found":"Tarjeta no encontrada","fullscreen.close":"Toca para cerrar","editor.new":"Nueva tarjeta","editor.edit":"Editar tarjeta","editor.save":"Guardar","editor.save_card":"Guardar tarjeta","editor.code":"Código de la tarjeta","editor.scan_hint":"Enfoca el código de barras o el código QR","editor.take_photo":"Hacer foto","editor.from_gallery":"Desde la galería","editor.scanning":"Leyendo el código…","editor.detected":"Código detectado · {format}","editor.not_detected":"No se encontró ningún código. Prueba con otra foto o escribe el número.","editor.name":"Nombre de la tienda","editor.name_placeholder":"Ej. Coop","editor.number":"Número de tarjeta","editor.format":"Formato del código","editor.logo":"Logotipo","editor.logo_hint":"Foto del logotipo de la tarjeta o imagen de la galería. Sin logotipo se usa la inicial.","editor.logo_photo":"Hacer foto del logotipo","editor.logo_gallery":"Elegir logotipo de la galería","editor.logo_remove":"Quitar logotipo","editor.logo_error":"Esta imagen no se puede usar como logotipo.","editor.crop":"Recortar logotipo","editor.crop_hint":"Arrastra para mover, usa el control deslizante para hacer zoom.","editor.zoom":"Zoom","editor.crop_done":"Usar logotipo","editor.color":"Color","editor.color_custom":"Color personalizado","editor.color_name":"Color {name}","editor.preview":"Vista previa","editor.visibility":"Visibilidad","editor.visibility_label":"Visibilidad de la tarjeta","editor.shared":"Compartida","editor.private":"Solo yo","editor.shared_hint":"Todos en casa pueden verla y editarla.","editor.private_hint":"Solo tú puedes verla y gestionarla.","editor.notes":"Notas personales (opcional)","editor.notes_placeholder":"Ej. tarjeta familiar, caducidad de puntos…","editor.required":"Introduce el nombre de la tienda y el número de la tarjeta.","color.red":"Rojo","color.pink":"Rosa","color.orange":"Naranja","color.amber":"Ámbar","color.yellow":"Amarillo","color.lime":"Lima","color.green":"Verde","color.teal":"Turquesa","color.light_blue":"Azul claro","color.blue":"Azul","color.indigo":"Índigo","color.purple":"Morado","color.brown":"Marrón","color.grey":"Gris","color.black":"Negro","color.white":"Blanco","error.not_found":"Esta tarjeta ya no existe o no es visible para ti.","error.invalid_format":"Algunos datos no son válidos: {message}","error.generic":"Algo salió mal: {message}","card.name":"Tarjeta de fidelidad","card.description":"Muestra una de tus tarjetas de fidelidad en el panel.","card.not_found":"Tarjeta no encontrada","card.choose":"Elige una tarjeta en el editor","card.tap_fullscreen":"Toca para abrir a pantalla completa","card_editor.card":"Tarjeta","card_editor.mode":"Visualización","card_editor.mode_tile":"Mosaico","card_editor.mode_barcode":"Código de barras","card_editor.mode_qr":"Código QR","card_editor.tap_action":"Acción al tocar","card_editor.tap_detail":"Abrir detalles","card_editor.tap_fullscreen":"Pantalla completa","card_editor.tap_none":"Ninguna"},fr:{title:"Cartes de fidélité",menu:"Ouvrir la barre latérale",back:"Retour",close:"Fermer",cancel:"Annuler",loading:"Chargement…","list.search":"Rechercher un magasin","list.search_label":"Rechercher par nom de magasin","list.count_one":"1 carte","list.count":"{n} cartes","list.results_one":"1 résultat","list.results":"{n} résultats","list.empty":"Aucune carte trouvée","list.empty_hint":"Essaie un autre nom ou ajoute une nouvelle carte.","list.none":"Aucune carte pour le moment","list.none_hint":"Ajoute ta première carte de fidélité avec le bouton ci-dessous.","list.add":"Ajouter une carte","list.open":"Ouvrir la carte {name}","detail.edit":"Modifier la carte","detail.more":"Plus d'actions","detail.edit_item":"Modifier","detail.delete_item":"Supprimer","detail.code_type":"Type de code","detail.barcode":"Code-barres","detail.qr":"QR code","detail.fullscreen":"Afficher en plein écran","detail.number":"Numéro de carte","detail.copy":"Copier le numéro","detail.copied":"Numéro copié","detail.format":"Format","detail.notes":"Notes","detail.invalid":"Ce numéro n'est pas un {format} valide : il s'affiche en QR code.","detail.delete_title":"Supprimer la carte ?","detail.delete_text":"{name} sera supprimée pour tous ceux qui peuvent la voir.","detail.not_found":"Carte introuvable","fullscreen.close":"Touche pour fermer","editor.new":"Nouvelle carte","editor.edit":"Modifier la carte","editor.save":"Enregistrer","editor.save_card":"Enregistrer la carte","editor.code":"Code de la carte","editor.scan_hint":"Cadre le code-barres ou le QR code","editor.take_photo":"Prendre une photo","editor.from_gallery":"Depuis la galerie","editor.scanning":"Lecture du code…","editor.detected":"Code détecté · {format}","editor.not_detected":"Aucun code trouvé. Essaie une autre photo ou saisis le numéro.","editor.name":"Nom du magasin","editor.name_placeholder":"Ex. Coop","editor.number":"Numéro de carte","editor.format":"Format du code","editor.logo":"Logo","editor.logo_hint":"Photo du logo sur la carte ou image de la galerie. Sans logo, l'initiale est utilisée.","editor.logo_photo":"Prendre le logo en photo","editor.logo_gallery":"Choisir le logo dans la galerie","editor.logo_remove":"Supprimer le logo","editor.logo_error":"Cette image ne peut pas être utilisée comme logo.","editor.crop":"Recadrer le logo","editor.crop_hint":"Fais glisser pour déplacer, utilise le curseur pour zoomer.","editor.zoom":"Zoom","editor.crop_done":"Utiliser le logo","editor.color":"Couleur","editor.color_custom":"Couleur personnalisée","editor.color_name":"Couleur {name}","editor.preview":"Aperçu","editor.visibility":"Visibilité","editor.visibility_label":"Visibilité de la carte","editor.shared":"Partagée","editor.private":"Moi seul","editor.shared_hint":"Tous les membres du foyer peuvent la voir et la modifier.","editor.private_hint":"Toi seul peux la voir et la gérer.","editor.notes":"Notes personnelles (facultatif)","editor.notes_placeholder":"Ex. carte famille, expiration des points…","editor.required":"Saisis le nom du magasin et le numéro de la carte.","color.red":"Rouge","color.pink":"Rose","color.orange":"Orange","color.amber":"Ambre","color.yellow":"Jaune","color.lime":"Citron vert","color.green":"Vert","color.teal":"Turquoise","color.light_blue":"Bleu clair","color.blue":"Bleu","color.indigo":"Indigo","color.purple":"Violet","color.brown":"Marron","color.grey":"Gris","color.black":"Noir","color.white":"Blanc","error.not_found":"Cette carte n'existe plus ou n'est pas visible pour toi.","error.invalid_format":"Certaines données ne sont pas valides : {message}","error.generic":"Une erreur s'est produite : {message}","card.name":"Carte de fidélité","card.description":"Affiche l'une de tes cartes de fidélité sur le tableau de bord.","card.not_found":"Carte introuvable","card.choose":"Choisis une carte dans l'éditeur","card.tap_fullscreen":"Touche pour ouvrir en plein écran","card_editor.card":"Carte","card_editor.mode":"Affichage","card_editor.mode_tile":"Tuile","card_editor.mode_barcode":"Code-barres","card_editor.mode_qr":"QR code","card_editor.tap_action":"Action au toucher","card_editor.tap_detail":"Ouvrir les détails","card_editor.tap_fullscreen":"Plein écran","card_editor.tap_none":"Aucune"},it:{title:"Carte fedeltà",menu:"Apri barra laterale",back:"Indietro",close:"Chiudi",cancel:"Annulla",loading:"Caricamento…","list.search":"Cerca negozio","list.search_label":"Cerca per nome negozio","list.count_one":"1 carta","list.count":"{n} carte","list.results_one":"1 risultato","list.results":"{n} risultati","list.empty":"Nessuna carta trovata","list.empty_hint":"Prova con un altro nome o aggiungi una nuova carta.","list.none":"Ancora nessuna carta","list.none_hint":"Aggiungi la tua prima carta fedeltà con il pulsante qui sotto.","list.add":"Aggiungi carta","list.open":"Apri carta {name}","detail.edit":"Modifica carta","detail.more":"Altre azioni","detail.edit_item":"Modifica","detail.delete_item":"Elimina","detail.code_type":"Tipo di codice","detail.barcode":"Codice a barre","detail.qr":"QR code","detail.fullscreen":"Mostra a schermo intero","detail.number":"Numero carta","detail.copy":"Copia numero","detail.copied":"Numero copiato","detail.format":"Formato","detail.notes":"Note","detail.invalid":"Questo numero non è un {format} valido: lo mostro come QR code.","detail.delete_title":"Eliminare la carta?","detail.delete_text":"{name} verrà rimossa per tutti gli utenti che la vedono.","detail.not_found":"Carta non trovata","fullscreen.close":"Tocca per chiudere","editor.new":"Nuova carta","editor.edit":"Modifica carta","editor.save":"SALVA","editor.save_card":"Salva carta","editor.code":"Codice della carta","editor.scan_hint":"Inquadra il codice a barre o il QR","editor.take_photo":"Scatta foto","editor.from_gallery":"Da galleria","editor.scanning":"Lettura del codice…","editor.detected":"Codice rilevato · {format}","editor.not_detected":"Nessun codice trovato. Prova con un'altra foto o digita il numero.","editor.name":"Nome negozio","editor.name_placeholder":"Es. Coop","editor.number":"Numero carta","editor.format":"Formato codice","editor.logo":"Logo","editor.logo_hint":"Foto del logo sulla tessera o immagine da galleria. Senza logo si usa l'iniziale.","editor.logo_photo":"Scatta foto del logo","editor.logo_gallery":"Scegli logo dalla galleria","editor.logo_remove":"Rimuovi logo","editor.logo_error":"Questa immagine non può essere usata come logo.","editor.crop":"Ritaglia logo","editor.crop_hint":"Trascina per spostare, usa il cursore per ingrandire.","editor.zoom":"Zoom","editor.crop_done":"Usa logo","editor.color":"Colore","editor.color_custom":"Colore personalizzato","editor.color_name":"Colore {name}","editor.preview":"Anteprima","editor.visibility":"Visibilità","editor.visibility_label":"Visibilità della carta","editor.shared":"Condivisa","editor.private":"Solo io","editor.shared_hint":"Tutti gli utenti di casa la vedono e possono modificarla.","editor.private_hint":"La vedi e la gestisci solo tu.","editor.notes":"Note personali (facoltative)","editor.notes_placeholder":"Es. tessera famiglia, scadenza punti…","editor.required":"Inserisci il nome del negozio e il numero della carta.","color.red":"Rosso","color.pink":"Rosa","color.orange":"Arancione","color.amber":"Ambra","color.yellow":"Giallo","color.lime":"Lime","color.green":"Verde","color.teal":"Turchese","color.light_blue":"Azzurro","color.blue":"Blu","color.indigo":"Indaco","color.purple":"Viola","color.brown":"Marrone","color.grey":"Grigio","color.black":"Nero","color.white":"Bianco","error.not_found":"Questa carta non esiste più o non è visibile per te.","error.invalid_format":"Alcuni dati non sono validi: {message}","error.generic":"Qualcosa è andato storto: {message}","card.name":"Carta fedeltà","card.description":"Mostra una delle tue carte fedeltà nella dashboard.","card.not_found":"Carta non trovata","card.choose":"Scegli una carta nell'editor","card.tap_fullscreen":"Tocca per aprire a schermo intero","card_editor.card":"Carta","card_editor.mode":"Visualizzazione","card_editor.mode_tile":"Riquadro","card_editor.mode_barcode":"Codice a barre","card_editor.mode_qr":"QR code","card_editor.tap_action":"Azione al tocco","card_editor.tap_detail":"Apri dettagli","card_editor.tap_fullscreen":"Schermo intero","card_editor.tap_none":"Nessuna"},nl:{title:"Klantenkaarten",menu:"Zijbalk openen",back:"Terug",close:"Sluiten",cancel:"Annuleren",loading:"Laden…","list.search":"Winkel zoeken","list.search_label":"Zoeken op winkelnaam","list.count_one":"1 kaart","list.count":"{n} kaarten","list.results_one":"1 resultaat","list.results":"{n} resultaten","list.empty":"Geen kaarten gevonden","list.empty_hint":"Probeer een andere naam of voeg een nieuwe kaart toe.","list.none":"Nog geen kaarten","list.none_hint":"Voeg je eerste klantenkaart toe met de knop hieronder.","list.add":"Kaart toevoegen","list.open":"Kaart {name} openen","detail.edit":"Kaart bewerken","detail.more":"Meer acties","detail.edit_item":"Bewerken","detail.delete_item":"Verwijderen","detail.code_type":"Codetype","detail.barcode":"Barcode","detail.qr":"QR-code","detail.fullscreen":"Op volledig scherm tonen","detail.number":"Kaartnummer","detail.copy":"Nummer kopiëren","detail.copied":"Nummer gekopieerd","detail.format":"Formaat","detail.notes":"Notities","detail.invalid":"Dit nummer is geen geldige {format}: het wordt als QR-code getoond.","detail.delete_title":"Kaart verwijderen?","detail.delete_text":"{name} wordt verwijderd voor iedereen die de kaart kan zien.","detail.not_found":"Kaart niet gevonden","fullscreen.close":"Tik om te sluiten","editor.new":"Nieuwe kaart","editor.edit":"Kaart bewerken","editor.save":"Opslaan","editor.save_card":"Kaart opslaan","editor.code":"Kaartcode","editor.scan_hint":"Richt op de barcode of QR-code","editor.take_photo":"Foto maken","editor.from_gallery":"Uit galerij","editor.scanning":"Code wordt gelezen…","editor.detected":"Code gedetecteerd · {format}","editor.not_detected":"Geen code gevonden. Probeer een andere foto of typ het nummer.","editor.name":"Winkelnaam","editor.name_placeholder":"Bijv. Coop","editor.number":"Kaartnummer","editor.format":"Codeformaat","editor.logo":"Logo","editor.logo_hint":"Foto van het logo op de kaart of een afbeelding uit de galerij. Zonder logo wordt de beginletter gebruikt.","editor.logo_photo":"Foto van het logo maken","editor.logo_gallery":"Logo kiezen uit galerij","editor.logo_remove":"Logo verwijderen","editor.logo_error":"Deze afbeelding kan niet als logo worden gebruikt.","editor.crop":"Logo bijsnijden","editor.crop_hint":"Sleep om te verplaatsen, gebruik de schuifregelaar om in te zoomen.","editor.zoom":"Zoom","editor.crop_done":"Logo gebruiken","editor.color":"Kleur","editor.color_custom":"Eigen kleur","editor.color_name":"Kleur {name}","editor.preview":"Voorbeeld","editor.visibility":"Zichtbaarheid","editor.visibility_label":"Zichtbaarheid van de kaart","editor.shared":"Gedeeld","editor.private":"Alleen ik","editor.shared_hint":"Iedereen in huis kan de kaart zien en bewerken.","editor.private_hint":"Alleen jij kunt de kaart zien en beheren.","editor.notes":"Persoonlijke notities (optioneel)","editor.notes_placeholder":"Bijv. gezinskaart, verloop van punten…","editor.required":"Vul de winkelnaam en het kaartnummer in.","color.red":"Rood","color.pink":"Roze","color.orange":"Oranje","color.amber":"Amber","color.yellow":"Geel","color.lime":"Limoen","color.green":"Groen","color.teal":"Turkoois","color.light_blue":"Lichtblauw","color.blue":"Blauw","color.indigo":"Indigo","color.purple":"Paars","color.brown":"Bruin","color.grey":"Grijs","color.black":"Zwart","color.white":"Wit","error.not_found":"Deze kaart bestaat niet meer of is niet zichtbaar voor jou.","error.invalid_format":"Sommige gegevens zijn ongeldig: {message}","error.generic":"Er is iets misgegaan: {message}","card.name":"Klantenkaart","card.description":"Toont een van je klantenkaarten op het dashboard.","card.not_found":"Kaart niet gevonden","card.choose":"Kies een kaart in de editor","card.tap_fullscreen":"Tik om op volledig scherm te openen","card_editor.card":"Kaart","card_editor.mode":"Weergave","card_editor.mode_tile":"Tegel","card_editor.mode_barcode":"Barcode","card_editor.mode_qr":"QR-code","card_editor.tap_action":"Tikactie","card_editor.tap_detail":"Details openen","card_editor.tap_fullscreen":"Volledig scherm","card_editor.tap_none":"Niets"},pl:{title:"Karty lojalnościowe",menu:"Otwórz pasek boczny",back:"Wstecz",close:"Zamknij",cancel:"Anuluj",loading:"Ładowanie…","list.search":"Szukaj sklepu","list.search_label":"Szukaj według nazwy sklepu","list.count_one":"1 karta","list.count":"Karty: {n}","list.results_one":"1 wynik","list.results":"Wyniki: {n}","list.empty":"Nie znaleziono kart","list.empty_hint":"Spróbuj innej nazwy lub dodaj nową kartę.","list.none":"Brak kart","list.none_hint":"Dodaj swoją pierwszą kartę lojalnościową przyciskiem poniżej.","list.add":"Dodaj kartę","list.open":"Otwórz kartę {name}","detail.edit":"Edytuj kartę","detail.more":"Więcej działań","detail.edit_item":"Edytuj","detail.delete_item":"Usuń","detail.code_type":"Typ kodu","detail.barcode":"Kod kreskowy","detail.qr":"Kod QR","detail.fullscreen":"Pokaż na pełnym ekranie","detail.number":"Numer karty","detail.copy":"Kopiuj numer","detail.copied":"Numer skopiowany","detail.format":"Format","detail.notes":"Notatki","detail.invalid":"Ten numer nie jest prawidłowym kodem {format}: wyświetlam go jako kod QR.","detail.delete_title":"Usunąć kartę?","detail.delete_text":"Karta {name} zostanie usunięta dla wszystkich, którzy ją widzą.","detail.not_found":"Nie znaleziono karty","fullscreen.close":"Dotknij, aby zamknąć","editor.new":"Nowa karta","editor.edit":"Edytuj kartę","editor.save":"Zapisz","editor.save_card":"Zapisz kartę","editor.code":"Kod karty","editor.scan_hint":"Skieruj aparat na kod kreskowy lub kod QR","editor.take_photo":"Zrób zdjęcie","editor.from_gallery":"Z galerii","editor.scanning":"Odczytywanie kodu…","editor.detected":"Wykryto kod · {format}","editor.not_detected":"Nie znaleziono kodu. Spróbuj innego zdjęcia lub wpisz numer.","editor.name":"Nazwa sklepu","editor.name_placeholder":"Np. Coop","editor.number":"Numer karty","editor.format":"Format kodu","editor.logo":"Logo","editor.logo_hint":"Zdjęcie logo na karcie lub obraz z galerii. Bez logo używana jest pierwsza litera.","editor.logo_photo":"Zrób zdjęcie logo","editor.logo_gallery":"Wybierz logo z galerii","editor.logo_remove":"Usuń logo","editor.logo_error":"Tego obrazu nie można użyć jako logo.","editor.crop":"Przytnij logo","editor.crop_hint":"Przeciągnij, aby przesunąć, użyj suwaka, aby powiększyć.","editor.zoom":"Powiększenie","editor.crop_done":"Użyj logo","editor.color":"Kolor","editor.color_custom":"Własny kolor","editor.color_name":"Kolor {name}","editor.preview":"Podgląd","editor.visibility":"Widoczność","editor.visibility_label":"Widoczność karty","editor.shared":"Udostępniona","editor.private":"Tylko ja","editor.shared_hint":"Wszyscy w domu mogą ją widzieć i edytować.","editor.private_hint":"Tylko ty możesz ją widzieć i nią zarządzać.","editor.notes":"Notatki osobiste (opcjonalnie)","editor.notes_placeholder":"Np. karta rodzinna, wygaśnięcie punktów…","editor.required":"Wpisz nazwę sklepu i numer karty.","color.red":"Czerwony","color.pink":"Różowy","color.orange":"Pomarańczowy","color.amber":"Bursztynowy","color.yellow":"Żółty","color.lime":"Limonkowy","color.green":"Zielony","color.teal":"Morski","color.light_blue":"Jasnoniebieski","color.blue":"Niebieski","color.indigo":"Indygo","color.purple":"Fioletowy","color.brown":"Brązowy","color.grey":"Szary","color.black":"Czarny","color.white":"Biały","error.not_found":"Ta karta już nie istnieje lub nie jest dla ciebie widoczna.","error.invalid_format":"Niektóre dane są nieprawidłowe: {message}","error.generic":"Coś poszło nie tak: {message}","card.name":"Karta lojalnościowa","card.description":"Pokazuje jedną z twoich kart lojalnościowych na pulpicie.","card.not_found":"Nie znaleziono karty","card.choose":"Wybierz kartę w edytorze","card.tap_fullscreen":"Dotknij, aby otworzyć na pełnym ekranie","card_editor.card":"Karta","card_editor.mode":"Wyświetlanie","card_editor.mode_tile":"Kafelek","card_editor.mode_barcode":"Kod kreskowy","card_editor.mode_qr":"Kod QR","card_editor.tap_action":"Akcja dotknięcia","card_editor.tap_detail":"Otwórz szczegóły","card_editor.tap_fullscreen":"Pełny ekran","card_editor.tap_none":"Brak"},pt:{title:"Cartões de fidelidade",menu:"Abrir barra lateral",back:"Voltar",close:"Fechar",cancel:"Cancelar",loading:"A carregar…","list.search":"Pesquisar loja","list.search_label":"Pesquisar por nome da loja","list.count_one":"1 cartão","list.count":"{n} cartões","list.results_one":"1 resultado","list.results":"{n} resultados","list.empty":"Nenhum cartão encontrado","list.empty_hint":"Tenta outro nome ou adiciona um novo cartão.","list.none":"Ainda sem cartões","list.none_hint":"Adiciona o teu primeiro cartão de fidelidade com o botão abaixo.","list.add":"Adicionar cartão","list.open":"Abrir cartão {name}","detail.edit":"Editar cartão","detail.more":"Mais ações","detail.edit_item":"Editar","detail.delete_item":"Eliminar","detail.code_type":"Tipo de código","detail.barcode":"Código de barras","detail.qr":"Código QR","detail.fullscreen":"Mostrar em ecrã inteiro","detail.number":"Número do cartão","detail.copy":"Copiar número","detail.copied":"Número copiado","detail.format":"Formato","detail.notes":"Notas","detail.invalid":"Este número não é um {format} válido: é apresentado como código QR.","detail.delete_title":"Eliminar o cartão?","detail.delete_text":"{name} será removido para todos os que o podem ver.","detail.not_found":"Cartão não encontrado","fullscreen.close":"Toca para fechar","editor.new":"Novo cartão","editor.edit":"Editar cartão","editor.save":"Guardar","editor.save_card":"Guardar cartão","editor.code":"Código do cartão","editor.scan_hint":"Enquadra o código de barras ou o código QR","editor.take_photo":"Tirar fotografia","editor.from_gallery":"Da galeria","editor.scanning":"A ler o código…","editor.detected":"Código detetado · {format}","editor.not_detected":"Nenhum código encontrado. Tenta outra fotografia ou escreve o número.","editor.name":"Nome da loja","editor.name_placeholder":"Ex. Coop","editor.number":"Número do cartão","editor.format":"Formato do código","editor.logo":"Logótipo","editor.logo_hint":"Fotografia do logótipo no cartão ou imagem da galeria. Sem logótipo, usa-se a inicial.","editor.logo_photo":"Tirar fotografia ao logótipo","editor.logo_gallery":"Escolher logótipo da galeria","editor.logo_remove":"Remover logótipo","editor.logo_error":"Esta imagem não pode ser usada como logótipo.","editor.crop":"Recortar logótipo","editor.crop_hint":"Arrasta para mover, usa o controlo de deslize para ampliar.","editor.zoom":"Zoom","editor.crop_done":"Usar logótipo","editor.color":"Cor","editor.color_custom":"Cor personalizada","editor.color_name":"Cor {name}","editor.preview":"Pré-visualização","editor.visibility":"Visibilidade","editor.visibility_label":"Visibilidade do cartão","editor.shared":"Partilhado","editor.private":"Só eu","editor.shared_hint":"Todos em casa o podem ver e editar.","editor.private_hint":"Só tu o podes ver e gerir.","editor.notes":"Notas pessoais (opcional)","editor.notes_placeholder":"Ex. cartão da família, validade dos pontos…","editor.required":"Introduz o nome da loja e o número do cartão.","color.red":"Vermelho","color.pink":"Cor-de-rosa","color.orange":"Laranja","color.amber":"Âmbar","color.yellow":"Amarelo","color.lime":"Lima","color.green":"Verde","color.teal":"Turquesa","color.light_blue":"Azul-claro","color.blue":"Azul","color.indigo":"Índigo","color.purple":"Roxo","color.brown":"Castanho","color.grey":"Cinzento","color.black":"Preto","color.white":"Branco","error.not_found":"Este cartão já não existe ou não está visível para ti.","error.invalid_format":"Alguns dados não são válidos: {message}","error.generic":"Algo correu mal: {message}","card.name":"Cartão de fidelidade","card.description":"Mostra um dos teus cartões de fidelidade no painel.","card.not_found":"Cartão não encontrado","card.choose":"Escolhe um cartão no editor","card.tap_fullscreen":"Toca para abrir em ecrã inteiro","card_editor.card":"Cartão","card_editor.mode":"Apresentação","card_editor.mode_tile":"Mosaico","card_editor.mode_barcode":"Código de barras","card_editor.mode_qr":"Código QR","card_editor.tap_action":"Ação ao tocar","card_editor.tap_detail":"Abrir detalhes","card_editor.tap_fullscreen":"Ecrã inteiro","card_editor.tap_none":"Nenhuma"}};function We(e,t,o={}){return((Fe[(e??"en").split("-")[0]]??Ze)[t]??Ze[t]).replace(/\{(\w+)\}/g,(e,t)=>String(o[t]??""))}const Qe=e=>e?.locale?.language??e?.language??document.documentElement.lang,Ie=e=>{const t=Qe(e);return(e,o)=>We(t,e,o)};function Ge(e,t){const{code:o,message:r=String(t)}=t??{};return"not_found"===o?e("error.not_found"):e("invalid_format"===o?"error.invalid_format":"error.generic",{message:r})}const Je=["ean13","ean8","upca","upce","code128","code39","itf","codabar","qr","datamatrix","pdf417","aztec"],Xe={ean13:"EAN-13",ean8:"EAN-8",upca:"UPC-A",upce:"UPC-E",code128:"Code 128",code39:"Code 39",itf:"ITF",codabar:"Codabar",qr:"QR code",datamatrix:"Data Matrix",pdf417:"PDF417",aztec:"Aztec"},Ye={ean13:"ean13",ean8:"ean8",upca:"upca",upce:"upce",code128:"code128",code39:"code39",itf:"interleaved2of5",codabar:"rationalizedCodabar",qr:"qrcode",datamatrix:"datamatrix",pdf417:"pdf417",aztec:"azteccode"},et=e=>"qr"===e||"datamatrix"===e||"aztec"===e,tt=e=>!et(e)&&"pdf417"!==e;function ot(e){const t=e.toLowerCase().replace(/[^a-z0-9]/g,"");return Je.find(e=>t.startsWith("qr"===e?"qrcode":e))??"code128"}async function rt(){const e=await(import("./chunk-BdTR443A.js"));return e.prepareZXingModule({overrides:{locateFile:(e,t)=>e.endsWith(".wasm")?new URL(e,import.meta.url).href:t+e}}),e}function it(e,t=!1){const o="/loyalty-cards"+e;t?history.replaceState(history.state,"",o):history.pushState({loyaltyCards:!0},"",o),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:t}}))}function at(e){history.state?.loyaltyCards?history.back():it(e,!0)}function nt(e,t,o={}){e.dispatchEvent(new CustomEvent(t,{detail:o,bubbles:!0,composed:!0}))}const st=(e,t)=>nt(e,"hass-notification",{message:t}),dt=customElements.whenDefined("home-assistant");function lt(e,t){dt.then(()=>customElements.get(e)||customElements.define(e,t))}class ct extends ge{constructor(){super(...arguments),this.number="",this.format="qr",this.svg=null}async willUpdate(e){if(!e.has("number")&&!e.has("format"))return;const{number:t,format:o}=this,r=await async function(e,t){const{toSVG:o}=await(import("./chunk-DHMNbEDP.js"));try{return o({bcid:Ye[t],text:e,scale:3,...tt(t)?{height:20,paddingwidth:10}:{}})}catch{return null}}(t,o);t===this.number&&o===this.format&&(this.svg=r,null===r&&nt(this,"code-invalid"))}render(){return this.svg?G`<div class=${et(this.format)?"square":"wide"} role="img" aria-label=${this.number}>
          ${De(this.svg)}
        </div>`:""}}ct.styles=u`
    :host {
      display: flex;
      justify-content: center;
      color: #111;
    }
    div {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    .wide {
      height: var(--code-height, 128px);
    }
    .square {
      height: var(--code-square, 200px);
    }
  `,e([_e()],ct.prototype,"number",void 0),e([_e()],ct.prototype,"format",void 0),e([ye()],ct.prototype,"svg",void 0),lt("lc-code-view",ct);class pt extends ge{constructor(){super(...arguments),this.number="",this.format="qr",this.name="",this.language="en"}connectedCallback(){super.connectedCallback(),navigator.wakeLock?.request("screen").then(e=>this.lock=e).catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.lock?.release().catch(()=>{})}render(){return G`<button @click=${()=>this.remove()}>
      <span class="name">${this.name}</span>
      <lc-code-view .number=${this.number} .format=${this.format}></lc-code-view>
      <span class="number">${this.number}</span>
      <span class="hint">${We(this.language,"fullscreen.close")}</span>
    </button>`}}function ut(e){document.body.appendChild(Object.assign(document.createElement("lc-fullscreen-code"),e))}pt.styles=u`
    button {
      position: fixed;
      inset: 0;
      z-index: 1000;
      width: 100%;
      border: 0;
      background: #fff;
      color: #111;
      font: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      padding: max(24px, env(safe-area-inset-top)) 16px max(24px, env(safe-area-inset-bottom));
    }
    lc-code-view {
      width: 100%;
      max-width: 640px;
      --code-height: 35vh;
      --code-square: min(80vw, 60vh);
    }
    .name {
      font-size: 22px;
      font-weight: 500;
    }
    .number {
      font-family: "Roboto Mono", ui-monospace, monospace;
      font-size: 20px;
      letter-spacing: 2px;
      word-break: break-all;
    }
    .hint {
      font-size: 14px;
      color: #555;
    }
  `,e([_e()],pt.prototype,"number",void 0),e([_e()],pt.prototype,"format",void 0),e([_e()],pt.prototype,"name",void 0),e([_e()],pt.prototype,"language",void 0),lt("lc-fullscreen-code",pt);const ht=(e,t=24)=>G`<svg width=${t} height=${t} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    ${J`<path d=${e}></path>`}
  </svg>`,mt=(e,t,o="")=>G`<header class="bar">${t}<h1>${e}</h1>${o}</header>`,gt=u`
  :host {
    display: block;
    color: var(--primary-text-color);
    -webkit-tap-highlight-color: transparent;
  }
  * {
    box-sizing: border-box;
  }
  button {
    font: inherit;
    color: inherit;
    cursor: pointer;
  }
  .bar {
    height: 56px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 4px;
    flex-shrink: 0;
  }
  .bar h1 {
    margin: 0 0 0 4px;
    font-size: 20px;
    font-weight: 400;
    flex-grow: 1;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .icon-btn {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-btn {
    height: 44px;
    padding: 0 12px;
    border: 0;
    background: transparent;
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.25px;
    text-transform: uppercase;
  }
  .btn {
    height: 44px;
    border-radius: 10px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid var(--divider-color);
    background: transparent;
    color: var(--primary-color);
  }
  .btn.filled {
    border: 0;
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .btn:disabled,
  .text-btn:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .section {
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 12px;
  }
  .segments {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 4px;
    border-radius: 12px;
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
  }
  .segments button {
    height: 44px;
    border: 0;
    border-radius: 9px;
    background: transparent;
    color: var(--secondary-text-color);
    font-size: 14px;
    font-weight: 500;
  }
  .segments button[aria-pressed="true"] {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .muted {
    color: var(--secondary-text-color);
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
  :focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`,bt=["tile","barcode","qr"],ft=["detail","fullscreen","none"];class vt extends ge{setConfig(e){this.config=e}willUpdate(){this.hass&&!this.cards&&(this.cards=[],we(this.hass).then(e=>this.cards=e))}change(e,t){this.config={...this.config,[e]:t},nt(this,"config-changed",{config:this.config})}select(e,t,o){const r=this.config[e]??"";return G`<label>
      <span>${Ie(this.hass)(t)}</span>
      <select @change=${t=>this.change(e,t.target.value)}>
        ${o.map(([e,t])=>G`<option value=${e} ?selected=${e===r}>${t}</option>`)}
      </select>
    </label>`}render(){if(!this.config)return"";const e=Ie(this.hass),t=(this.cards??[]).map(e=>[e.id,e.name]);return this.config.card_id||t.unshift(["",e("card.choose")]),G`
      ${this.select("card_id","card_editor.card",t)}
      ${this.select("mode","card_editor.mode",bt.map(t=>[t,e(`card_editor.mode_${t}`)]))}
      ${this.select("tap_action","card_editor.tap_action",ft.map(t=>[t,e(`card_editor.tap_${t}`)]))}
    `}}vt.styles=[gt,u`
      :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px 16px;
        background: var(--input-fill-color, var(--secondary-background-color));
        border-radius: 6px 6px 0 0;
        border-bottom: 1px solid var(--input-idle-line-color, var(--secondary-text-color));
      }
      span {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      select {
        min-height: 32px;
        border: 0;
        background: transparent;
        color: var(--primary-text-color);
        font: inherit;
        font-size: 16px;
        outline: none;
      }
      option {
        background: var(--card-background-color);
      }
    `],e([_e({attribute:!1})],vt.prototype,"hass",void 0),e([ye()],vt.prototype,"config",void 0),e([ye()],vt.prototype,"cards",void 0),lt("loyalty-cards-card-editor",vt);class _t extends ge{static getConfigElement(){return document.createElement("loyalty-cards-card-editor")}static getStubConfig(){return{card_id:"",mode:"tile",tap_action:"detail"}}setConfig(e){this.config={mode:"tile",tap_action:"detail",card_id:"",type:"",...e}}getCardSize(){return{tile:2,qr:3,barcode:4}[this.config.mode]}getGridOptions(){return"tile"===this.config.mode?{columns:6,min_columns:3}:{columns:12,min_columns:6}}willUpdate(){this.hass&&!this.unsub&&this.isConnected&&(this.unsub=ke(this.hass,e=>this.cards=e))}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.then(e=>e()).catch(()=>{}),this.unsub=void 0}tap(e,t=e.format){"detail"===this.config.tap_action?it(`/card/${e.id}`):"fullscreen"===this.config.tap_action&&ut({number:e.number,format:t,name:e.name,language:Qe(this.hass)})}render(){const e=Ie(this.hass),t=this.cards?.find(e=>e.id===this.config.card_id);if(!t){const t=this.config.card_id?this.cards?e("card.not_found"):e("loading"):e("card.choose");return G`<div class="box empty muted">${t}</div>`}const o=We(Qe(this.hass),"list.open",{name:t.name}),r="none"===this.config.tap_action,a=this.config.mode;if("tile"===a)return G`<button class="plain" aria-label=${o} ?disabled=${r} @click=${()=>this.tap(t)}>
        ${Oe(t)}
      </button>`;if("barcode"===a){const e=this.invalid===t.number?"qr":t.format;return G`<button class="plain box" aria-label=${o} ?disabled=${r} @click=${()=>this.tap(t,e)}>
        <div class="head" style=${Ne(Ve(t.color))}>
          ${He(t,28)}<span class="name">${t.name}</span>${ht(i,20)}
        </div>
        <div class="code">
          <lc-code-view .number=${t.number} .format=${e}
            @code-invalid=${()=>this.invalid=t.number}></lc-code-view>
          <span class="mono">${t.number}</span>
        </div>
      </button>`}return G`<button class="plain box qr" aria-label=${o} ?disabled=${r} @click=${()=>this.tap(t,"qr")}>
      <lc-code-view class="qr-code" .number=${t.number} .format=${"qr"}></lc-code-view>
      <div class="qr-text">
        <div class="qr-name">
          <span class="dot" style=${Ne(Ve(t.color))}>${He(t,28)}</span>
          <span class="name">${t.name}</span>
        </div>
        ${"fullscreen"===this.config.tap_action?G`<span class="muted small">${e("card.tap_fullscreen")}</span>`:""}
      </div>
    </button>`}}_t.styles=[gt,Ue,u`
      .plain {
        display: block;
        width: 100%;
        padding: 0;
        border: 0;
        background: none;
        text-align: start;
        border-radius: var(--ha-card-border-radius, 12px);
      }
      .plain:disabled {
        cursor: default;
      }
      .box {
        overflow: hidden;
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color);
        border-radius: var(--ha-card-border-radius, 12px);
      }
      .empty {
        padding: 16px;
        text-align: center;
      }
      .head {
        height: 52px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 16px;
      }
      .name {
        flex-grow: 1;
        font-size: 16px;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .code {
        background: #fff;
        color: #111;
        padding: 16px 16px 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }
      .code lc-code-view {
        width: 100%;
        --code-height: 92px;
        --code-square: 160px;
      }
      .mono {
        font-family: "Roboto Mono", ui-monospace, monospace;
        font-size: 15px;
        letter-spacing: 2px;
        word-break: break-all;
        text-align: center;
      }
      .qr {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px;
      }
      .qr-code {
        flex-shrink: 0;
        width: 126px;
        padding: 8px;
        background: #fff;
        border-radius: 8px;
        --code-square: 110px;
      }
      .qr-text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: 0;
      }
      .qr-name {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .dot {
        border-radius: 50%;
        flex-shrink: 0;
      }
      .small {
        font-size: 13px;
        line-height: 1.4;
      }
    `],e([_e({attribute:!1})],_t.prototype,"hass",void 0),e([ye()],_t.prototype,"config",void 0),e([ye()],_t.prototype,"cards",void 0),e([ye()],_t.prototype,"invalid",void 0),lt("loyalty-cards-card",_t);const yt=window;if(yt.customCards=yt.customCards??[],!yt.customCards.some(e=>"loyalty-cards-card"===e.type)){const e=document.documentElement.lang;yt.customCards.push({type:"loyalty-cards-card",name:We(e,"card.name"),description:We(e,"card.description"),preview:!1,documentationURL:"https://github.com/oirad/ha-loyalty-cards"})}class xt extends ge{constructor(){super(...arguments),this.mode="native",this.invalid=!1,this.menuOpen=!1}willUpdate(e){const t=e.get("card");!e.has("card")||t?.number===this.card.number&&t?.format===this.card.format||(this.mode="native",this.invalid=!1)}get shown(){return"qr"===this.mode||this.invalid?"qr":this.card.format}async remove_(){this.dialog.close();try{await(e=this.hass,t=this.card.id,e.callWS({type:"loyalty_cards/delete",card_id:t})),at("")}catch(e){st(this,Ge(Ie(this.hass),e))}var e,t}render(){const e=Ie(this.hass),o=this.card,r=Xe[o.format],a="qr"!==o.format&&!this.invalid,n=()=>it(`/card/${o.id}/edit`);return G`
      ${mt(o.name,G`<button class="icon-btn" aria-label=${e("back")} @click=${()=>at("")}>${ht(t)}</button>`,G`<button class="icon-btn" aria-label=${e("detail.edit")} @click=${n}>${ht("M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",22)}</button>
          <div class="menu-wrap">
            <button class="icon-btn" aria-label=${e("detail.more")} aria-haspopup="menu" aria-expanded=${this.menuOpen}
              @click=${()=>this.menuOpen=!this.menuOpen}>${ht("M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",22)}</button>
            ${this.menuOpen?G`<div class="menu" role="menu" @click=${()=>this.menuOpen=!1}>
                  <button role="menuitem" @click=${n}>${e("detail.edit_item")}</button>
                  <button role="menuitem" @click=${()=>this.dialog.showModal()}>${e("detail.delete_item")}</button>
                </div>`:""}
          </div>`)}
      <div class="content">
        <div class="pass">
          <div class="pass-head" style=${Ne(Ve(o.color))}>
            ${He(o,36)}<span>${o.name}</span>
          </div>
          <div class="pass-code">
            <lc-code-view .number=${o.number} .format=${this.shown}
              @code-invalid=${()=>this.invalid=!0}></lc-code-view>
            <span class="mono">${o.number}</span>
          </div>
        </div>
        ${this.invalid?G`<p class="muted small">${e("detail.invalid",{format:r})}</p>`:""}
        ${a?G`<div class="segments" role="group" aria-label=${e("detail.code_type")}>
              <button aria-pressed=${"native"===this.mode} @click=${()=>this.mode="native"}>
                ${tt(o.format)?e("detail.barcode"):r}
              </button>
              <button aria-pressed=${"qr"===this.mode} @click=${()=>this.mode="qr"}>${e("detail.qr")}</button>
            </div>`:""}
        <button class="btn wide" @click=${()=>ut({number:o.number,format:this.shown,name:o.name,language:Qe(this.hass)})}>
          ${ht(i,20)} ${e("detail.fullscreen")}
        </button>
        <section class="section">
          <div class="row">
            <div class="field">
              <span class="label">${e("detail.number")}</span>
              <span class="value">${o.number}</span>
            </div>
            <button class="icon-btn" aria-label=${e("detail.copy")}
              @click=${()=>async function(e){try{await navigator.clipboard.writeText(e)}catch{const t=Object.assign(document.createElement("textarea"),{value:e});document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}}(o.number).then(()=>st(this,e("detail.copied")))}>
              ${ht("M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",20)}
            </button>
          </div>
          <div class="row field">
            <span class="label">${e("detail.format")}</span>
            <span class="value">${r}</span>
          </div>
          ${o.notes?G`<div class="row field">
                <span class="label">${e("detail.notes")}</span>
                <span class="value notes">${o.notes}</span>
              </div>`:""}
        </section>
      </div>
      <dialog>
        <h2>${e("detail.delete_title")}</h2>
        <p>${e("detail.delete_text",{name:o.name})}</p>
        <div class="actions">
          <button class="text-btn" @click=${()=>this.dialog.close()}>${e("cancel")}</button>
          <button class="text-btn danger" @click=${this.remove_}>${e("detail.delete_item")}</button>
        </div>
      </dialog>
    `}}xt.styles=[gt,Ue,u`
      :host {
        height: 100%;
        overflow-y: auto;
      }
      .content {
        padding: 8px 16px 32px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 600px;
        margin: 0 auto;
      }
      .pass {
        border-radius: 16px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      }
      .pass-head {
        height: 64px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 16px;
        font-size: 18px;
        font-weight: 500;
      }
      .pass-code {
        min-height: 236px;
        padding: 24px 16px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 14px;
        color: #111;
      }
      lc-code-view {
        width: 100%;
      }
      .mono {
        font-family: "Roboto Mono", ui-monospace, monospace;
        font-size: 18px;
        letter-spacing: 2px;
        word-break: break-all;
        text-align: center;
      }
      .small {
        margin: 0;
        font-size: 13px;
      }
      .wide {
        height: 48px;
        border-radius: 12px;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 8px 10px 16px;
        border-bottom: 1px solid var(--divider-color);
      }
      .row:last-child {
        border-bottom: 0;
      }
      .field {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 2px;
        min-width: 0;
      }
      .label {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .value {
        font-size: 16px;
        word-break: break-all;
      }
      .notes {
        font-size: 15px;
        line-height: 1.4;
        white-space: pre-wrap;
        word-break: break-word;
      }
      .menu-wrap {
        position: relative;
      }
      .menu {
        position: absolute;
        right: 4px;
        top: 44px;
        z-index: 2;
        min-width: 160px;
        padding: 4px 0;
        border-radius: 8px;
        background: var(--card-background-color);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
        display: flex;
        flex-direction: column;
      }
      .menu button {
        height: 48px;
        padding: 0 16px;
        border: 0;
        background: none;
        text-align: start;
        font-size: 15px;
      }
      dialog {
        border: 0;
        border-radius: var(--ha-card-border-radius, 12px);
        background: var(--card-background-color);
        color: var(--primary-text-color);
        padding: 20px 16px 8px;
        max-width: min(400px, calc(100vw - 32px));
      }
      dialog::backdrop {
        background: rgba(0, 0, 0, 0.6);
      }
      dialog h2 {
        margin: 0 0 8px;
        font-size: 18px;
        font-weight: 500;
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
      .danger {
        color: var(--error-color, #db4437);
      }
    `],e([_e({attribute:!1})],xt.prototype,"hass",void 0),e([_e({attribute:!1})],xt.prototype,"card",void 0),e([ye()],xt.prototype,"mode",void 0),e([ye()],xt.prototype,"invalid",void 0),e([ye()],xt.prototype,"menuOpen",void 0),e([xe("dialog")],xt.prototype,"dialog",void 0),lt("lc-card-detail",xt);const $t=128;function wt(e,t,o,r,i,a){const n=o/Math.min(e,t)*r,s=(e,t)=>Math.min(0,Math.max(o-t*n,e));return{scale:n,x:s(i,e),y:s(a,t)}}function kt(e){const t=e.slice(e.indexOf(",")+1);return Math.floor(3*t.length/4)-(t.endsWith("==")?2:t.endsWith("=")?1:0)}function At(e,t){const o=document.createElement("canvas");o.width=o.height=$t;const r=o.getContext("2d");return r.fillStyle="#ffffff",r.fillRect(0,0,$t,$t),r.imageSmoothingQuality="high",r.drawImage(e,t.sx,t.sy,t.size,t.size,0,0,$t,$t),function(e){for(const t of["image/webp","image/jpeg"])for(const o of[.9,.8,.7,.6,.5,.4]){const r=e.toDataURL(t,o);if(!r.startsWith(`data:${t}`))break;if(kt(r)<=40960)return r}return null}(o)}const Ct=256;class zt extends ge{constructor(){super(...arguments),this.value=null,this.name="",this.color="#000000",this.zoom=1,this.crop={scale:1,x:0,y:0}}pick(e){const t=e.target,o=t.files?.[0];t.value="",o&&(this.src&&URL.revokeObjectURL(this.src),this.src=URL.createObjectURL(o),this.zoom=1,this.dialog.showModal())}loaded(){const{naturalWidth:e,naturalHeight:t}=this.img,o=Ct/Math.min(e,t);this.crop=wt(e,t,Ct,1,(Ct-e*o)/2,(Ct-t*o)/2)}move(e,t,o=this.zoom){const{naturalWidth:r,naturalHeight:i}=this.img,a=Ct/Math.min(r,i)*o/this.crop.scale,n=128;this.zoom=o,this.crop=wt(r,i,Ct,o,n-(n-this.crop.x)*a+e,n-(n-this.crop.y)*a+t)}down(e){e.currentTarget.setPointerCapture(e.pointerId),this.drag={id:e.pointerId,x:e.clientX,y:e.clientY}}pointerMove(e){this.drag?.id===e.pointerId&&(this.move(e.clientX-this.drag.x,e.clientY-this.drag.y),this.drag={...this.drag,x:e.clientX,y:e.clientY})}done(){const e=At(this.img,(t=this.crop,o=Ct,{sx:-t.x/t.scale,sy:-t.y/t.scale,size:o/t.scale}));var t,o;this.dialog.close(),e?nt(this,"value-changed",{value:e}):st(this,Ie(this.hass)("editor.logo_error"))}render(){const e=Ie(this.hass);return G`
      <div class="row">
        <span class="avatar" style=${Ne(Ve(this.color))}>
          ${He({name:this.name,color:this.color,logo:this.value},56)}
        </span>
        <div class="buttons">
          <label class="btn filled" aria-label=${e("editor.logo_photo")}>
            ${ht(o,18)} ${e("editor.take_photo")}
            <input type="file" accept="image/*" capture="environment" @change=${this.pick} hidden />
          </label>
          <label class="btn" aria-label=${e("editor.logo_gallery")}>
            ${ht(a,18)} ${e("editor.from_gallery")}
            <input type="file" accept="image/*" @change=${this.pick} hidden />
          </label>
        </div>
        ${this.value?G`<button class="icon-btn" aria-label=${e("editor.logo_remove")}
              @click=${()=>nt(this,"value-changed",{value:null})}>${ht(r)}</button>`:""}
      </div>
      <dialog aria-label=${e("editor.crop")}>
        <h2>${e("editor.crop")}</h2>
        <p class="muted">${e("editor.crop_hint")}</p>
        <div class="viewport" @pointerdown=${this.down} @pointermove=${this.pointerMove}
          @pointerup=${()=>this.drag=void 0} @pointercancel=${()=>this.drag=void 0}>
          <img src=${this.src??""} alt="" draggable="false" @load=${this.loaded}
            style=${Ne({transform:`translate(${this.crop.x}px, ${this.crop.y}px) scale(${this.crop.scale})`})} />
        </div>
        <label class="zoom">
          <span>${e("editor.zoom")}</span>
          <input type="range" min="1" max="4" step="0.01" .value=${String(this.zoom)}
            @input=${e=>this.move(0,0,Number(e.target.value))} />
        </label>
        <div class="actions">
          <button class="text-btn" @click=${()=>this.dialog.close()}>${e("cancel")}</button>
          <button class="text-btn" @click=${this.done}>${e("editor.crop_done")}</button>
        </div>
      </dialog>
    `}}zt.styles=[gt,Ue,u`
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .avatar {
        border-radius: 50%;
        flex-shrink: 0;
      }
      .buttons {
        flex-grow: 1;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
      }
      label.btn {
        cursor: pointer;
      }
      dialog {
        border: 0;
        border-radius: var(--ha-card-border-radius, 12px);
        background: var(--card-background-color);
        color: var(--primary-text-color);
        padding: 16px;
        max-width: calc(100vw - 32px);
      }
      dialog::backdrop {
        background: rgba(0, 0, 0, 0.6);
      }
      h2 {
        margin: 0 0 4px;
        font-size: 18px;
        font-weight: 500;
      }
      p {
        margin: 0 0 12px;
        font-size: 13px;
      }
      .viewport {
        width: ${Ct}px;
        height: ${Ct}px;
        overflow: hidden;
        position: relative;
        border-radius: 50%;
        touch-action: none;
        background: #fff;
        margin: 0 auto;
      }
      .viewport img {
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: 0 0;
        user-select: none;
        max-width: none;
      }
      .zoom {
        display: flex;
        align-items: center;
        gap: 12px;
        min-height: 44px;
        font-size: 14px;
      }
      .zoom input {
        flex-grow: 1;
        accent-color: var(--primary-color);
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
    `],e([_e({attribute:!1})],zt.prototype,"hass",void 0),e([_e()],zt.prototype,"value",void 0),e([_e()],zt.prototype,"name",void 0),e([_e()],zt.prototype,"color",void 0),e([ye()],zt.prototype,"src",void 0),e([ye()],zt.prototype,"zoom",void 0),e([ye()],zt.prototype,"crop",void 0),e([xe("dialog")],zt.prototype,"dialog",void 0),e([xe("dialog img")],zt.prototype,"img",void 0),lt("lc-logo-picker",zt);const Et={name:"",number:"",format:"ean13",color:qe[0][1],logo:null,notes:"",visibility:"shared"};class jt extends ge{constructor(){super(...arguments),this.fields={...Et},this.saving=!1}connectedCallback(){super.connectedCallback(),"BarcodeDetector"in window||rt().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.photo&&URL.revokeObjectURL(this.photo)}willUpdate(e){if(e.has("card")&&this.card?.id!==e.get("card")?.id){const{name:e,number:t,format:o,color:r,logo:i,notes:a,visibility:n}=this.card??Et;this.fields={name:e,number:t,format:o,color:r,logo:i,notes:a,visibility:n}}}set(e){this.fields={...this.fields,...e}}async scanFile(e){const t=e.target,o=t.files?.[0];if(t.value="",o){this.photo&&URL.revokeObjectURL(this.photo),this.photo=URL.createObjectURL(o),this.scan={state:"busy"};try{const e=await async function(e){if("BarcodeDetector"in window)try{const[t]=await(new BarcodeDetector).detect(await createImageBitmap(e));if(t)return{number:t.rawValue,format:ot(t.format)}}catch{}const{readBarcodes:t}=await rt(),[o]=(await t(e,{tryHarder:!0,maxNumberOfSymbols:1})).filter(e=>e.isValid);return o?{number:o.text,format:ot(o.format)}:null}(o);if(!e)throw new Error("no code");this.set({number:e.number.slice(0,512),format:e.format}),this.scan={state:"ok",format:Xe[e.format]}}catch{this.scan={state:"fail"}}}}async save(){const e=Ie(this.hass),t={...this.fields,name:this.fields.name.trim(),number:this.fields.number.trim()};if(t.name&&t.number){this.saving=!0;try{this.card?await((e,t,o)=>e.callWS({type:"loyalty_cards/update",card_id:t,...o}))(this.hass,this.card.id,t):await((e,t)=>e.callWS({type:"loyalty_cards/create",...t}))(this.hass,t),at(this.card?`/card/${this.card.id}`:"")}catch(t){st(this,Ge(e,t))}finally{this.saving=!1}}else st(this,e("editor.required"))}renderScan(e){const t=this.scan;return t?"busy"===t.state?G`<div class="status">${e("editor.scanning")}</div>`:"ok"===t.state?G`<div class="status ok" role="status">${ht("M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",20)} ${e("editor.detected",{format:t.format})}</div>`:G`<div class="status fail" role="status">${ht("M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",20)} ${e("editor.not_detected")}</div>`:""}render(){const e=Ie(this.hass),t=this.fields,i=t.name.trim()&&t.number.trim(),n=(o,r)=>G`<label class="field">
        <span>${e(`editor.${o}`)}</span>
        <input type="text" maxlength=${r} .value=${t[o]} autocomplete="off"
          placeholder=${"name"===o?e("editor.name_placeholder"):""}
          @input=${e=>this.set({[o]:e.target.value})} />
      </label>`;return G`
      ${mt(e(this.card?"editor.edit":"editor.new"),G`<button class="icon-btn" aria-label=${e("close")}
          @click=${()=>at(this.card?`/card/${this.card.id}`:"")}>${ht(r)}</button>`,G`<button class="text-btn" ?disabled=${!i||this.saving} @click=${this.save}>${e("editor.save")}</button>`)}
      <div class="content">
        <section class="section scan">
          <h2>${e("editor.code")}</h2>
          <div class="viewfinder" style=${Ne({backgroundImage:this.photo?`url(${this.photo})`:"none"})}>
            <i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i>
            ${this.photo?"":G`<i class="laser"></i><span>${e("editor.scan_hint")}</span>`}
          </div>
          <div class="pair">
            <label class="btn filled">${ht(o,20)} ${e("editor.take_photo")}
              <input type="file" accept="image/*" capture="environment" hidden @change=${this.scanFile} />
            </label>
            <label class="btn">${ht(a,20)} ${e("editor.from_gallery")}
              <input type="file" accept="image/*" hidden @change=${this.scanFile} />
            </label>
          </div>
          ${this.renderScan(e)}
        </section>

        <div class="fields">
          ${n("name",60)}
          ${n("number",512)}
          <label class="field">
            <span>${e("editor.format")}</span>
            <select @change=${e=>this.set({format:e.target.value})}>
              ${Je.map(e=>G`<option value=${e} ?selected=${e===t.format}>${Xe[e]}</option>`)}
            </select>
          </label>
        </div>

        <section>
          <h3>${e("editor.logo")}</h3>
          <p class="hint">${e("editor.logo_hint")}</p>
          <lc-logo-picker .hass=${this.hass} .value=${t.logo} .name=${t.name} .color=${t.color}
            @value-changed=${e=>this.set({logo:e.detail.value})}></lc-logo-picker>
        </section>

        <section>
          <h3>${e("editor.color")}</h3>
          <div class="swatches">
            ${qe.map(([o,r])=>G`<button class="swatch" aria-pressed=${t.color===r}
                aria-label=${e("editor.color_name",{name:e(`color.${o}`)})}
                @click=${()=>this.set({color:r})}><span style=${Ne({background:r})}></span></button>`)}
            <label class="swatch custom" aria-label=${e("editor.color_custom")}>
              <input type="color" .value=${t.color} @input=${e=>this.set({color:e.target.value})} />
            </label>
          </div>
        </section>

        <section>
          <h3>${e("editor.preview")}</h3>
          <div class="preview">${Oe({...t,name:t.name.trim()||e("editor.name")})}</div>
        </section>

        <section>
          <h3>${e("editor.visibility")}</h3>
          <div class="segments" role="group" aria-label=${e("editor.visibility_label")}>
            <button aria-pressed=${"shared"===t.visibility} @click=${()=>this.set({visibility:"shared"})}>${e("editor.shared")}</button>
            <button aria-pressed=${"private"===t.visibility} @click=${()=>this.set({visibility:"private"})}>${e("editor.private")}</button>
          </div>
          <p class="hint">${e("shared"===t.visibility?"editor.shared_hint":"editor.private_hint")}</p>
        </section>

        <label class="field">
          <span>${e("editor.notes")}</span>
          <textarea rows="3" maxlength=${1e3} placeholder=${e("editor.notes_placeholder")} .value=${t.notes}
            @input=${e=>this.set({notes:e.target.value})}></textarea>
        </label>

        <button class="btn filled save" ?disabled=${!i||this.saving} @click=${this.save}>${e("editor.save_card")}</button>
      </div>
    `}}jt.styles=[gt,Ue,u`
      :host {
        height: 100%;
        overflow-y: auto;
      }
      .content {
        padding: 8px 16px 32px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 600px;
        margin: 0 auto;
      }
      section {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .scan {
        padding: 16px;
        gap: 14px;
      }
      h2,
      h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
      }
      h3 {
        font-size: 14px;
        color: var(--secondary-text-color);
      }
      .hint {
        margin: 0;
        font-size: 13px;
        color: var(--secondary-text-color);
      }
      .viewfinder {
        height: 180px;
        border-radius: 10px;
        background: #000 center / cover no-repeat;
        position: relative;
        display: flex;
        justify-content: center;
        overflow: hidden;
      }
      .viewfinder span {
        position: absolute;
        bottom: 10px;
        font-size: 13px;
        color: #bdbdbd;
      }
      .c {
        position: absolute;
        width: 28px;
        height: 28px;
        border: 3px solid var(--primary-color);
      }
      .tl { left: 40px; top: 36px; border-right: 0; border-bottom: 0; border-radius: 6px 0 0 0; }
      .tr { right: 40px; top: 36px; border-left: 0; border-bottom: 0; border-radius: 0 6px 0 0; }
      .bl { left: 40px; bottom: 36px; border-right: 0; border-top: 0; border-radius: 0 0 0 6px; }
      .br { right: 40px; bottom: 36px; border-left: 0; border-top: 0; border-radius: 0 0 6px 0; }
      .laser {
        position: absolute;
        left: 52px;
        right: 52px;
        top: 89px;
        height: 2px;
        background: var(--error-color, #ef5350);
      }
      .pair {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }
      label.btn {
        cursor: pointer;
      }
      .status {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 10px;
        font-size: 14px;
        background: var(--secondary-background-color);
      }
      .status.ok {
        color: var(--success-color, #43a047);
      }
      .status.fail {
        color: var(--warning-color, #ffa600);
      }
      .fields {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px 16px;
        background: var(--input-fill-color, var(--secondary-background-color));
        border-radius: 6px 6px 0 0;
        border-bottom: 1px solid var(--input-idle-line-color, var(--secondary-text-color));
      }
      .field:focus-within {
        border-bottom: 2px solid var(--primary-color);
      }
      .field span {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .field input,
      .field select,
      .field textarea {
        border: 0;
        padding: 2px 0;
        background: transparent;
        color: var(--primary-text-color);
        font: inherit;
        font-size: 16px;
        outline: none;
        resize: none;
        min-height: 28px;
      }
      .field select option {
        background: var(--card-background-color);
      }
      .swatches {
        display: flex;
        flex-wrap: wrap;
        gap: 2px;
      }
      .swatch {
        width: 44px;
        height: 44px;
        padding: 0;
        border: 0;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .swatch span,
      .swatch input {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        box-shadow: inset 0 0 0 1px rgba(127, 127, 127, 0.35);
      }
      .swatch[aria-pressed="true"] span {
        box-shadow: 0 0 0 2px var(--primary-background-color), 0 0 0 4px var(--primary-text-color);
      }
      .swatch input {
        padding: 0;
        border: 0;
        background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
        cursor: pointer;
      }
      .swatch input::-webkit-color-swatch-wrapper {
        padding: 0;
      }
      .swatch input::-webkit-color-swatch {
        border: 0;
        border-radius: 50%;
        opacity: 0;
      }
      .preview {
        width: calc(50% - 6px);
        max-width: 240px;
      }
      .save {
        height: 48px;
        border-radius: 12px;
        font-size: 15px;
      }
    `],e([_e({attribute:!1})],jt.prototype,"hass",void 0),e([_e({attribute:!1})],jt.prototype,"card",void 0),e([ye()],jt.prototype,"fields",void 0),e([ye()],jt.prototype,"scan",void 0),e([ye()],jt.prototype,"photo",void 0),e([ye()],jt.prototype,"saving",void 0),lt("lc-card-editor",jt);class St extends ge{constructor(){super(...arguments),this.narrow=!1,this.query=""}render(){const e=Ie(this.hass),t=this.cards??[],o=function(e,t){const o=$e(t);return o?e.filter(e=>$e(e.name).includes(o)):e}(t,this.query),r=o.length,i=this.query.trim()?e(1===r?"list.results_one":"list.results",{n:r}):e(1===r?"list.count_one":"list.count",{n:r}),a=this.narrow?G`<button class="icon-btn" aria-label=${e("menu")} @click=${()=>nt(this,"hass-toggle-menu")}>
          ${ht("M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z")}
        </button>`:"";return G`
      ${mt(e("title"),a)}
      <label class="search">
        ${ht(n,20)}
        <span class="visually-hidden">${e("list.search_label")}</span>
        <input type="search" placeholder=${e("list.search")} .value=${this.query}
          @input=${e=>this.query=e.target.value} />
      </label>
      ${void 0===this.cards?G`<p class="count muted">${e("loading")}</p>`:G`<p class="count muted" aria-live="polite">${i}</p>`}
      <div class="scroll">
        ${r?G`<div class="grid">
              ${o.map(t=>G`<button class="card" aria-label=${e("list.open",{name:t.name})}
                  @click=${()=>it(`/card/${t.id}`)}>${Oe(t)}</button>`)}
            </div>`:this.cards?G`<div class="empty muted">
                ${ht(n,40)}
                <p class="empty-title">${e(t.length?"list.empty":"list.none")}</p>
                <p>${e(t.length?"list.empty_hint":"list.none_hint")}</p>
              </div>`:""}
      </div>
      <div class="footer">
        <button class="fab" @click=${()=>it("/new")}>${ht("M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z")}<span>${e("list.add")}</span></button>
      </div>
    `}}St.styles=[gt,Ue,u`
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .search {
        margin: 8px 16px 4px;
        display: flex;
        align-items: center;
        gap: 12px;
        height: 48px;
        padding: 0 16px;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        color: var(--secondary-text-color);
      }
      .search input {
        flex-grow: 1;
        min-width: 0;
        border: 0;
        background: transparent;
        color: var(--primary-text-color);
        font: inherit;
        font-size: 16px;
        outline: none;
      }
      .count {
        margin: 0;
        padding: 14px 16px 10px;
        font-size: 14px;
      }
      .scroll {
        flex: 1;
        overflow-y: auto;
        padding: 0 16px 16px;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }
      @media (min-width: 600px) {
        .grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
      @media (min-width: 900px) {
        .grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
      }
      .card {
        padding: 0;
        border: 0;
        background: none;
        border-radius: 12px;
      }
      .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 64px 32px;
        text-align: center;
      }
      .empty p {
        margin: 0;
        font-size: 14px;
      }
      .empty .empty-title {
        font-size: 16px;
        color: var(--primary-text-color);
      }
      .footer {
        display: flex;
        justify-content: flex-end;
        padding: 16px 16px 24px;
        flex-shrink: 0;
      }
      .fab {
        height: 56px;
        padding: 0 20px 0 16px;
        border: 0;
        border-radius: 16px;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.25px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
      }
    `],e([_e({attribute:!1})],St.prototype,"hass",void 0),e([_e({type:Boolean})],St.prototype,"narrow",void 0),e([_e({attribute:!1})],St.prototype,"cards",void 0),e([ye()],St.prototype,"query",void 0),lt("lc-card-list",St);class Nt extends ge{constructor(){super(...arguments),this.narrow=!1}willUpdate(e){e.has("hass")&&this.hass&&!this.unsub&&this.isConnected&&(this.unsub=ke(this.hass,e=>this.cards=e))}connectedCallback(){super.connectedCallback(),this.hass&&this.requestUpdate("hass")}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.then(e=>e()).catch(()=>{}),this.unsub=void 0}render(){const[,e,t,o]=(this.route?.path??"").split("/");if("new"===e)return G`<lc-card-editor .hass=${this.hass}></lc-card-editor>`;if("card"===e){const e=this.cards?.find(e=>e.id===t);return e?"edit"===o?G`<lc-card-editor .hass=${this.hass} .card=${e}></lc-card-editor>`:G`<lc-card-detail .hass=${this.hass} .card=${e}></lc-card-detail>`:this.missing()}return G`<lc-card-list .hass=${this.hass} .narrow=${this.narrow} .cards=${this.cards}></lc-card-list>`}missing(){const e=Ie(this.hass);return G`${mt("",G`<button class="icon-btn" aria-label=${e("back")} @click=${()=>at("")}>${ht(t)}</button>`)}
      <p class="muted center">${this.cards?e("detail.not_found"):e("loading")}</p>`}}Nt.styles=[gt,u`
      :host {
        height: 100vh;
        height: 100dvh;
        background: var(--primary-background-color);
      }
      .center {
        text-align: center;
        padding: 48px 16px;
      }
    `],e([_e({attribute:!1})],Nt.prototype,"hass",void 0),e([_e({type:Boolean})],Nt.prototype,"narrow",void 0),e([_e({attribute:!1})],Nt.prototype,"route",void 0),e([ye()],Nt.prototype,"cards",void 0),lt("loyalty-cards-panel",Nt);
