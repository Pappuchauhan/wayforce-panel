import{a as Pe,B as Ee,c as xe,g as Oe}from"./index-Lpbe05IJ.js";var ge={exports:{}};(function(ve,Te){(function(pe,fe){ve.exports=fe(Pe(),Ee)})(typeof self<"u"?self:xe,function(pe,fe){return function(){var be={156:function(h){h.exports=pe},111:function(h){h.exports=fe},582:function(h,b,v){v.r(b),v.d(b,{__addDisposableResource:function(){return ee},__assign:function(){return J},__asyncDelegator:function(){return Q},__asyncGenerator:function(){return ue},__asyncValues:function(){return X},__await:function(){return I},__awaiter:function(){return m},__classPrivateFieldGet:function(){return Z},__classPrivateFieldIn:function(){return w},__classPrivateFieldSet:function(){return $},__createBinding:function(){return _},__decorate:function(){return re},__disposeResources:function(){return ie},__esDecorate:function(){return N},__exportStar:function(){return k},__extends:function(){return se},__generator:function(){return O},__importDefault:function(){return z},__importStar:function(){return q},__makeTemplateObject:function(){return ce},__metadata:function(){return p},__param:function(){return ne},__propKey:function(){return a},__read:function(){return D},__rest:function(){return Y},__runInitializers:function(){return B},__setFunctionName:function(){return c},__spread:function(){return y},__spreadArray:function(){return G},__spreadArrays:function(){return M},__values:function(){return j}});var te=function(t,e){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,r){o.__proto__=r}||function(o,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(o[n]=r[n])},te(t,e)};function se(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}te(t,e),t.prototype=e===null?Object.create(e):(o.prototype=e.prototype,new o)}var J=function(){return J=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},J.apply(this,arguments)};function Y(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]])}return o}function re(t,e,o,r){var n,u=arguments.length,i=u<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(i=(u<3?n(i):u>3?n(e,o,i):n(e,o))||i);return u>3&&i&&Object.defineProperty(e,o,i),i}function ne(t,e){return function(o,r){e(o,r,t)}}function N(t,e,o,r,n,u){function i(K){if(K!==void 0&&typeof K!="function")throw new TypeError("Function expected");return K}for(var l,x=r.kind,P=x==="getter"?"get":x==="setter"?"set":"value",s=!e&&t?r.static?t:t.prototype:null,d=e||(s?Object.getOwnPropertyDescriptor(s,r.name):{}),T=!1,R=o.length-1;R>=0;R--){var L={};for(var H in r)L[H]=H==="access"?{}:r[H];for(var H in r.access)L.access[H]=r.access[H];L.addInitializer=function(K){if(T)throw new TypeError("Cannot add initializers after decoration has completed");u.push(i(K||null))};var V=(0,o[R])(x==="accessor"?{get:d.get,set:d.set}:d[P],L);if(x==="accessor"){if(V===void 0)continue;if(V===null||typeof V!="object")throw new TypeError("Object expected");(l=i(V.get))&&(d.get=l),(l=i(V.set))&&(d.set=l),(l=i(V.init))&&n.unshift(l)}else(l=i(V))&&(x==="field"?n.unshift(l):d[P]=l)}s&&Object.defineProperty(s,r.name,d),T=!0}function B(t,e,o){for(var r=arguments.length>2,n=0;n<e.length;n++)o=r?e[n].call(t,o):e[n].call(t);return r?o:void 0}function a(t){return typeof t=="symbol"?t:"".concat(t)}function c(t,e,o){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:o?"".concat(o," ",e):e})}function p(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function m(t,e,o,r){return new(o||(o=Promise))(function(n,u){function i(P){try{x(r.next(P))}catch(s){u(s)}}function l(P){try{x(r.throw(P))}catch(s){u(s)}}function x(P){var s;P.done?n(P.value):(s=P.value,s instanceof o?s:new o(function(d){d(s)})).then(i,l)}x((r=r.apply(t,e||[])).next())})}function O(t,e){var o,r,n,u,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(x){return function(P){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;u&&(u=0,s[0]&&(i=0)),i;)try{if(o=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((n=(n=i.trys).length>0&&n[n.length-1])||s[0]!==6&&s[0]!==2)){i=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(s[0]===6&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(d){s=[6,d],r=0}finally{o=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([x,P])}}}var _=Object.create?function(t,e,o,r){r===void 0&&(r=o);var n=Object.getOwnPropertyDescriptor(e,o);n&&!("get"in n?!e.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(t,r,n)}:function(t,e,o,r){r===void 0&&(r=o),t[r]=e[o]};function k(t,e){for(var o in t)o==="default"||Object.prototype.hasOwnProperty.call(e,o)||_(e,t,o)}function j(t){var e=typeof Symbol=="function"&&Symbol.iterator,o=e&&t[e],r=0;if(o)return o.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function D(t,e){var o=typeof Symbol=="function"&&t[Symbol.iterator];if(!o)return t;var r,n,u=o.call(t),i=[];try{for(;(e===void 0||e-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(l){n={error:l}}finally{try{r&&!r.done&&(o=u.return)&&o.call(u)}finally{if(n)throw n.error}}return i}function y(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(D(arguments[e]));return t}function M(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var r=Array(t),n=0;for(e=0;e<o;e++)for(var u=arguments[e],i=0,l=u.length;i<l;i++,n++)r[n]=u[i];return r}function G(t,e,o){if(o||arguments.length===2)for(var r,n=0,u=e.length;n<u;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))}function I(t){return this instanceof I?(this.v=t,this):new I(t)}function ue(t,e,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,n=o.apply(t,e||[]),u=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(d){n[d]&&(r[d]=function(T){return new Promise(function(R,L){u.push([d,T,R,L])>1||l(d,T)})})}function l(d,T){try{(R=n[d](T)).value instanceof I?Promise.resolve(R.value.v).then(x,P):s(u[0][2],R)}catch(L){s(u[0][3],L)}var R}function x(d){l("next",d)}function P(d){l("throw",d)}function s(d,T){d(T),u.shift(),u.length&&l(u[0][0],u[0][1])}}function Q(t){var e,o;return e={},r("next"),r("throw",function(n){throw n}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(n,u){e[n]=t[n]?function(i){return(o=!o)?{value:I(t[n](i)),done:!1}:u?u(i):i}:u}}function X(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=t[Symbol.asyncIterator];return o?o.call(t):(t=j(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(u){return new Promise(function(i,l){(function(x,P,s,d){Promise.resolve(d).then(function(T){x({value:T,done:s})},P)})(i,l,(u=t[n](u)).done,u.value)})}}}function ce(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var E=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function q(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)&&_(e,t,o);return E(e,t),e}function z(t){return t&&t.__esModule?t:{default:t}}function Z(t,e,o,r){if(o==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?r:o==="a"?r.call(t):r?r.value:e.get(t)}function $(t,e,o,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(t,o):n?n.value=o:e.set(t,o),o}function w(t,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof t=="function"?e===t:t.has(e)}function ee(t,e,o){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r;if(o){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose]}if(typeof r!="function")throw new TypeError("Object not disposable.");t.stack.push({value:e,dispose:r,async:o})}else o&&t.stack.push({async:!0});return e}var oe=typeof SuppressedError=="function"?SuppressedError:function(t,e,o){var r=new Error(o);return r.name="SuppressedError",r.error=t,r.suppressed=e,r};function ie(t){function e(o){t.error=t.hasError?new oe(o,t.error,"An error was suppressed during disposal."):o,t.hasError=!0}return function o(){for(;t.stack.length;){var r=t.stack.pop();try{var n=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(n).then(o,function(u){return e(u),o()})}catch(u){e(u)}}if(t.hasError)throw t.error}()}b.default={__extends:se,__assign:J,__rest:Y,__decorate:re,__param:ne,__metadata:p,__awaiter:m,__generator:O,__createBinding:_,__exportStar:k,__values:j,__read:D,__spread:y,__spreadArrays:M,__spreadArray:G,__await:I,__asyncGenerator:ue,__asyncDelegator:Q,__asyncValues:X,__makeTemplateObject:ce,__importStar:q,__importDefault:z,__classPrivateFieldGet:Z,__classPrivateFieldSet:$,__classPrivateFieldIn:w,__addDisposableResource:ee,__disposeResources:ie}}},he={};function W(h){var b=he[h];if(b!==void 0)return b.exports;var v=he[h]={exports:{}};return be[h](v,v.exports,W),v.exports}W.d=function(h,b){for(var v in b)W.o(b,v)&&!W.o(h,v)&&Object.defineProperty(h,v,{enumerable:!0,get:b[v]})},W.o=function(h,b){return Object.prototype.hasOwnProperty.call(h,b)},W.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})};var ye={};return function(){var h=ye;Object.defineProperty(h,"__esModule",{value:!0}),h.useReactToPrint=h.PrintContextConsumer=void 0;var b=W(582),v=W(156),te=W(111),se=Object.prototype.hasOwnProperty.call(v,"createContext"),J=Object.prototype.hasOwnProperty.call(v,"useMemo")&&Object.prototype.hasOwnProperty.call(v,"useCallback"),Y=se?v.createContext({}):null;h.PrintContextConsumer=Y?Y.Consumer:function(){return null};var re={copyStyles:!0,pageStyle:`
        @page {
            /* Remove browser default header (title) and footer (url) */
            margin: 0;
        }
        @media print {
            body {
                /* Tell browsers to print background colors */
                -webkit-print-color-adjust: exact; /* Chrome/Safari/Edge/Opera */
                color-adjust: exact; /* Firefox */
            }
        }
    `,removeAfterPrint:!1,suppressErrors:!1},ne=function(N){function B(){var a=N!==null&&N.apply(this,arguments)||this;return a.startPrint=function(c){var p=a.props,m=p.onAfterPrint,O=p.onPrintError,_=p.print,k=p.documentTitle;setTimeout(function(){var j,D;if(c.contentWindow)if(c.contentWindow.focus(),_)_(c).then(function(){return m==null?void 0:m()}).then(function(){return a.handleRemoveIframe()}).catch(function(G){O?O("print",G):a.logMessages(["An error was thrown by the specified `print` function"])});else{if(c.contentWindow.print){var y=(D=(j=c.contentDocument)===null||j===void 0?void 0:j.title)!==null&&D!==void 0?D:"",M=c.ownerDocument.title;k&&(c.ownerDocument.title=k,c.contentDocument&&(c.contentDocument.title=k)),c.contentWindow.print(),k&&(c.ownerDocument.title=M,c.contentDocument&&(c.contentDocument.title=y))}else a.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);m==null||m(),a.handleRemoveIframe()}else a.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])},500)},a.triggerPrint=function(c){var p=a.props,m=p.onBeforePrint,O=p.onPrintError;if(m){var _=m();_&&typeof _.then=="function"?_.then(function(){a.startPrint(c)}).catch(function(k){O&&O("onBeforePrint",k)}):a.startPrint(c)}else a.startPrint(c)},a.handleClick=function(){var c=a.props,p=c.onBeforeGetContent,m=c.onPrintError;if(p){var O=p();O&&typeof O.then=="function"?O.then(a.handlePrint).catch(function(_){m&&m("onBeforeGetContent",_)}):a.handlePrint()}else a.handlePrint()},a.handlePrint=function(){var c=a.props,p=c.bodyClass,m=c.content,O=c.copyStyles,_=c.fonts,k=c.pageStyle,j=c.nonce,D=m();if(D!==void 0)if(D!==null){var y=document.createElement("iframe");y.width="".concat(document.documentElement.clientWidth,"px"),y.height="".concat(document.documentElement.clientHeight,"px"),y.style.position="absolute",y.style.top="-".concat(document.documentElement.clientHeight+100,"px"),y.style.left="-".concat(document.documentElement.clientWidth+100,"px"),y.id="printWindow",y.srcdoc="<!DOCTYPE html>";var M=(0,te.findDOMNode)(D);if(M){var G=M.cloneNode(!0),I=G instanceof Text,ue=document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"),Q=I?[]:G.querySelectorAll("img"),X=I?[]:G.querySelectorAll("video"),ce=_?_.length:0;a.numResourcesToLoad=ue.length+Q.length+X.length+ce,a.resourcesLoaded=[],a.resourcesErrored=[];var E=function(q,z){a.resourcesLoaded.includes(q)?a.logMessages(["Tried to mark a resource that has already been handled",q],"debug"):(z?(a.logMessages(b.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'],b.__read(z),!1)),a.resourcesErrored.push(q)):a.resourcesLoaded.push(q),a.resourcesLoaded.length+a.resourcesErrored.length===a.numResourcesToLoad&&a.triggerPrint(y))};y.onload=function(){var q,z,Z,$;y.onload=null;var w=y.contentDocument||((z=y.contentWindow)===null||z===void 0?void 0:z.document);if(w){w.body.appendChild(G),_&&(!((Z=y.contentDocument)===null||Z===void 0)&&Z.fonts&&(!(($=y.contentWindow)===null||$===void 0)&&$.FontFace)?_.forEach(function(C){var f=new FontFace(C.family,C.source,{weight:C.weight,style:C.style});y.contentDocument.fonts.add(f),f.loaded.then(function(){E(f)}).catch(function(g){E(f,["Failed loading the font:",f,"Load error:",g])})}):(_.forEach(function(C){return E(C)}),a.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));var ee=typeof k=="function"?k():k;if(typeof ee!="string")a.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof ee,'". Styles from `pageStyle` will not be applied.')]);else{var oe=w.createElement("style");j&&(oe.setAttribute("nonce",j),w.head.setAttribute("nonce",j)),oe.appendChild(w.createTextNode(ee)),w.head.appendChild(oe)}if(p&&(q=w.body.classList).add.apply(q,b.__spreadArray([],b.__read(p.split(" ")),!1)),!I){for(var ie=I?[]:M.querySelectorAll("canvas"),t=w.querySelectorAll("canvas"),e=0;e<ie.length;++e){var o=ie[e],r=t[e].getContext("2d");r&&r.drawImage(o,0,0)}var n=function(C){var f=Q[C],g=f.getAttribute("src");if(g){var S=new Image;S.onload=function(){return E(f)},S.onerror=function(U,ae,le,F,A){return E(f,["Error loading <img>",f,"Error",A])},S.src=g}else E(f,['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:',f])};for(e=0;e<Q.length;e++)n(e);var u=function(C){var f=X[C];f.preload="auto";var g=f.getAttribute("poster");if(g){var S=new Image;S.onload=function(){return E(f)},S.onerror=function(U,ae,le,F,A){return E(f,["Error loading video poster",g,"for video",f,"Error:",A])},S.src=g}else f.readyState>=2?E(f):(f.onloadeddata=function(){return E(f)},f.onerror=function(U,ae,le,F,A){return E(f,["Error loading video",f,"Error",A])},f.onstalled=function(){return E(f,["Loading video stalled, skipping",f])})};for(e=0;e<X.length;e++)u(e);var i="input",l=M.querySelectorAll(i),x=w.querySelectorAll(i);for(e=0;e<l.length;e++)x[e].value=l[e].value;var P="input[type=checkbox],input[type=radio]",s=M.querySelectorAll(P),d=w.querySelectorAll(P);for(e=0;e<s.length;e++)d[e].checked=s[e].checked;var T="select",R=M.querySelectorAll(T),L=w.querySelectorAll(T);for(e=0;e<R.length;e++)L[e].value=R[e].value}if(O)for(var H=document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"),V=function(C,f){var g=H[C];if(g.tagName.toLowerCase()==="style"){var S=w.createElement(g.tagName),U=g.sheet;if(U){var ae="";try{for(var le=U.cssRules.length,F=0;F<le;++F)typeof U.cssRules[F].cssText=="string"&&(ae+="".concat(U.cssRules[F].cssText,`\r
`))}catch{a.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",g],"warning")}S.setAttribute("id","react-to-print-".concat(C)),j&&S.setAttribute("nonce",j),S.appendChild(w.createTextNode(ae)),w.head.appendChild(S)}}else if(g.getAttribute("href"))if(g.hasAttribute("disabled"))a.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:",g],"warning"),E(g);else{for(var A=w.createElement(g.tagName),me=(F=0,g.attributes.length);F<me;++F){var de=g.attributes[F];de&&A.setAttribute(de.nodeName,de.nodeValue||"")}A.onload=function(){return E(A)},A.onerror=function(_e,Ae,ke,Ce,we){return E(A,["Failed to load",A,"Error:",we])},j&&A.setAttribute("nonce",j),w.head.appendChild(A)}else a.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",g],"warning"),E(g)},K=(e=0,H.length);e<K;++e)V(e)}a.numResourcesToLoad!==0&&O||a.triggerPrint(y)},a.handleRemoveIframe(!0),document.body.appendChild(y)}else a.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else a.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else a.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},a.handleRemoveIframe=function(c){var p=a.props.removeAfterPrint;if(c||p){var m=document.getElementById("printWindow");m&&document.body.removeChild(m)}},a.logMessages=function(c,p){p===void 0&&(p="error"),a.props.suppressErrors||(p==="error"?console.error(c):p==="warning"?console.warn(c):p==="debug"&&console.debug(c))},a}return b.__extends(B,N),B.prototype.render=function(){var a=this.props,c=a.children,p=a.trigger;if(p)return v.cloneElement(p(),{onClick:this.handleClick});if(!Y)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var m={handlePrint:this.handleClick};return v.createElement(Y.Provider,{value:m},c)},B.defaultProps=re,B}(v.Component);h.default=ne,h.useReactToPrint=function(N){if(!J)return N.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var B=v.useMemo(function(){return new ne(b.__assign(b.__assign({},re),N))},[N]);return v.useCallback(function(){return B.handleClick()},[B])}}(),ye}()})})(ge);var je=ge.exports;const Se=Oe(je);export{Se as R};