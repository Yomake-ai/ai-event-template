function Oc(e,n){for(var r=0;r<n.length;r++){const s=n[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const t=Object.getOwnPropertyDescriptor(s,i);t&&Object.defineProperty(e,i,t.get?t:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(i){if(i.ep)return;i.ep=!0;const t=r(i);fetch(i.href,t)}})();function Rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mo={exports:{}},ci={},po={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ns=Symbol.for("react.element"),Bc=Symbol.for("react.portal"),Vc=Symbol.for("react.fragment"),Wc=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Hc=Symbol.for("react.provider"),Gc=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),Qc=Symbol.for("react.memo"),Kc=Symbol.for("react.lazy"),Qa=Symbol.iterator;function Jc(e){return e===null||typeof e!="object"?null:(e=Qa&&e[Qa]||e["@@iterator"],typeof e=="function"?e:null)}var ho={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},go=Object.assign,fo={};function dr(e,n,r){this.props=e,this.context=n,this.refs=fo,this.updater=r||ho}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wo(){}wo.prototype=dr.prototype;function Xt(e,n,r){this.props=e,this.context=n,this.refs=fo,this.updater=r||ho}var ea=Xt.prototype=new wo;ea.constructor=Xt;go(ea,dr.prototype);ea.isPureReactComponent=!0;var Ka=Array.isArray,bo=Object.prototype.hasOwnProperty,na={current:null},yo={key:!0,ref:!0,__self:!0,__source:!0};function xo(e,n,r){var s,i={},t=null,a=null;if(n!=null)for(s in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(t=""+n.key),n)bo.call(n,s)&&!yo.hasOwnProperty(s)&&(i[s]=n[s]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var o=Array(l),d=0;d<l;d++)o[d]=arguments[d+2];i.children=o}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)i[s]===void 0&&(i[s]=l[s]);return{$$typeof:ns,type:e,key:t,ref:a,props:i,_owner:na.current}}function Zc(e,n){return{$$typeof:ns,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ra(e){return typeof e=="object"&&e!==null&&e.$$typeof===ns}function Xc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var Ja=/\/+/g;function zi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Xc(""+e.key):n.toString(36)}function Ps(e,n,r,s,i){var t=typeof e;(t==="undefined"||t==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(t){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ns:case Bc:a=!0}}if(a)return a=e,i=i(a),e=s===""?"."+zi(a,0):s,Ka(i)?(r="",e!=null&&(r=e.replace(Ja,"$&/")+"/"),Ps(i,n,r,"",function(d){return d})):i!=null&&(ra(i)&&(i=Zc(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ja,"$&/")+"/")+e)),n.push(i)),1;if(a=0,s=s===""?".":s+":",Ka(e))for(var l=0;l<e.length;l++){t=e[l];var o=s+zi(t,l);a+=Ps(t,n,r,o,i)}else if(o=Jc(e),typeof o=="function")for(e=o.call(e),l=0;!(t=e.next()).done;)t=t.value,o=s+zi(t,l++),a+=Ps(t,n,r,o,i);else if(t==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function vs(e,n,r){if(e==null)return e;var s=[],i=0;return Ps(e,s,"","",function(t){return n.call(r,t,i++)}),s}function ev(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},Ts={transition:null},nv={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:na};function ko(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:vs,forEach:function(e,n,r){vs(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return vs(e,function(){n++}),n},toArray:function(e){return vs(e,function(n){return n})||[]},only:function(e){if(!ra(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=dr;j.Fragment=Vc;j.Profiler=$c;j.PureComponent=Xt;j.StrictMode=Wc;j.Suspense=Yc;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nv;j.act=ko;j.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=go({},e.props),i=e.key,t=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(t=n.ref,a=na.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(o in n)bo.call(n,o)&&!yo.hasOwnProperty(o)&&(s[o]=n[o]===void 0&&l!==void 0?l[o]:n[o])}var o=arguments.length-2;if(o===1)s.children=r;else if(1<o){l=Array(o);for(var d=0;d<o;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:ns,type:e.type,key:i,ref:t,props:s,_owner:a}};j.createContext=function(e){return e={$$typeof:Gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hc,_context:e},e.Consumer=e};j.createElement=xo;j.createFactory=function(e){var n=xo.bind(null,e);return n.type=e,n};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:qc,render:e}};j.isValidElement=ra;j.lazy=function(e){return{$$typeof:Kc,_payload:{_status:-1,_result:e},_init:ev}};j.memo=function(e,n){return{$$typeof:Qc,type:e,compare:n===void 0?null:n}};j.startTransition=function(e){var n=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=n}};j.unstable_act=ko;j.useCallback=function(e,n){return oe.current.useCallback(e,n)};j.useContext=function(e){return oe.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};j.useEffect=function(e,n){return oe.current.useEffect(e,n)};j.useId=function(){return oe.current.useId()};j.useImperativeHandle=function(e,n,r){return oe.current.useImperativeHandle(e,n,r)};j.useInsertionEffect=function(e,n){return oe.current.useInsertionEffect(e,n)};j.useLayoutEffect=function(e,n){return oe.current.useLayoutEffect(e,n)};j.useMemo=function(e,n){return oe.current.useMemo(e,n)};j.useReducer=function(e,n,r){return oe.current.useReducer(e,n,r)};j.useRef=function(e){return oe.current.useRef(e)};j.useState=function(e){return oe.current.useState(e)};j.useSyncExternalStore=function(e,n,r){return oe.current.useSyncExternalStore(e,n,r)};j.useTransition=function(){return oe.current.useTransition()};j.version="18.3.1";po.exports=j;var S=po.exports;const rv=Rc(S),sv=Oc({__proto__:null,default:rv},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv=S,tv=Symbol.for("react.element"),av=Symbol.for("react.fragment"),lv=Object.prototype.hasOwnProperty,ov=iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dv={key:!0,ref:!0,__self:!0,__source:!0};function Io(e,n,r){var s,i={},t=null,a=null;r!==void 0&&(t=""+r),n.key!==void 0&&(t=""+n.key),n.ref!==void 0&&(a=n.ref);for(s in n)lv.call(n,s)&&!dv.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)i[s]===void 0&&(i[s]=n[s]);return{$$typeof:tv,type:e,key:t,ref:a,props:i,_owner:ov.current}}ci.Fragment=av;ci.jsx=Io;ci.jsxs=Io;mo.exports=ci;var Te=mo.exports,st={},So={exports:{}},be={},Ao={exports:{}},Eo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,T){var z=A.length;A.push(T);e:for(;0<z;){var $=z-1>>>1,K=A[$];if(0<i(K,T))A[$]=T,A[z]=K,z=$;else break e}}function r(A){return A.length===0?null:A[0]}function s(A){if(A.length===0)return null;var T=A[0],z=A.pop();if(z!==T){A[0]=z;e:for(var $=0,K=A.length,ds=K>>>1;$<ds;){var bn=2*($+1)-1,Ti=A[bn],yn=bn+1,cs=A[yn];if(0>i(Ti,z))yn<K&&0>i(cs,Ti)?(A[$]=cs,A[yn]=z,$=yn):(A[$]=Ti,A[bn]=z,$=bn);else if(yn<K&&0>i(cs,z))A[$]=cs,A[yn]=z,$=yn;else break e}}return T}function i(A,T){var z=A.sortIndex-T.sortIndex;return z!==0?z:A.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var t=performance;e.unstable_now=function(){return t.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var o=[],d=[],p=1,m=null,h=3,w=!1,b=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(A){for(var T=r(d);T!==null;){if(T.callback===null)s(d);else if(T.startTime<=A)s(d),T.sortIndex=T.expirationTime,n(o,T);else break;T=r(d)}}function g(A){if(y=!1,u(A),!b)if(r(o)!==null)b=!0,Ci(x);else{var T=r(d);T!==null&&Pi(g,T.startTime-A)}}function x(A,T){b=!1,y&&(y=!1,v(P),P=-1),w=!0;var z=h;try{for(u(T),m=r(o);m!==null&&(!(m.expirationTime>T)||A&&!Ce());){var $=m.callback;if(typeof $=="function"){m.callback=null,h=m.priorityLevel;var K=$(m.expirationTime<=T);T=e.unstable_now(),typeof K=="function"?m.callback=K:m===r(o)&&s(o),u(T)}else s(o);m=r(o)}if(m!==null)var ds=!0;else{var bn=r(d);bn!==null&&Pi(g,bn.startTime-T),ds=!1}return ds}finally{m=null,h=z,w=!1}}var E=!1,C=null,P=-1,W=5,M=-1;function Ce(){return!(e.unstable_now()-M<W)}function mr(){if(C!==null){var A=e.unstable_now();M=A;var T=!0;try{T=C(!0,A)}finally{T?pr():(E=!1,C=null)}}else E=!1}var pr;if(typeof c=="function")pr=function(){c(mr)};else if(typeof MessageChannel<"u"){var Ya=new MessageChannel,_c=Ya.port2;Ya.port1.onmessage=mr,pr=function(){_c.postMessage(null)}}else pr=function(){I(mr,0)};function Ci(A){C=A,E||(E=!0,pr())}function Pi(A,T){P=I(function(){A(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,Ci(x))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(o)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var z=h;h=T;try{return A()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,T){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=h;h=A;try{return T()}finally{h=z}},e.unstable_scheduleCallback=function(A,T,z){var $=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,A){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=z+K,A={id:p++,callback:T,priorityLevel:A,startTime:z,expirationTime:K,sortIndex:-1},z>$?(A.sortIndex=z,n(d,A),r(o)===null&&A===r(d)&&(y?(v(P),P=-1):y=!0,Pi(g,z-$))):(A.sortIndex=K,n(o,A),b||w||(b=!0,Ci(x))),A},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(A){var T=h;return function(){var z=h;h=T;try{return A.apply(this,arguments)}finally{h=z}}}})(Eo);Ao.exports=Eo;var cv=Ao.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=S,we=cv;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Co=new Set,Dr={};function Ln(e,n){rr(e,n),rr(e+"Capture",n)}function rr(e,n){for(Dr[e]=n,e=0;e<n.length;e++)Co.add(n[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),it=Object.prototype.hasOwnProperty,uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Za={},Xa={};function mv(e){return it.call(Xa,e)?!0:it.call(Za,e)?!1:uv.test(e)?Xa[e]=!0:(Za[e]=!0,!1)}function pv(e,n,r,s){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hv(e,n,r,s){if(n===null||typeof n>"u"||pv(e,n,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,r,s,i,t,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=t,this.removeEmptyString=a}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var sa=/[\-:]([a-z])/g;function ia(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(sa,ia);ne[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(sa,ia);ne[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(sa,ia);ne[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ta(e,n,r,s){var i=ne.hasOwnProperty(n)?ne[n]:null;(i!==null?i.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(hv(n,r,i,s)&&(r=null),s||i===null?mv(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(n=i.attributeName,s=i.attributeNamespace,r===null?e.removeAttribute(n):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?e.setAttributeNS(s,n,r):e.setAttribute(n,r))))}var Ke=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,us=Symbol.for("react.element"),_n=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),aa=Symbol.for("react.strict_mode"),tt=Symbol.for("react.profiler"),Po=Symbol.for("react.provider"),To=Symbol.for("react.context"),la=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),oa=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),zo=Symbol.for("react.offscreen"),el=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=el&&e[el]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,ji;function Ir(e){if(ji===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);ji=n&&n[1]||""}return`
`+ji+e}var Mi=!1;function Ui(e,n){if(!e||Mi)return"";Mi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var s=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){s=d}e.call(n.prototype)}else{try{throw Error()}catch(d){s=d}e()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),t=s.stack.split(`
`),a=i.length-1,l=t.length-1;1<=a&&0<=l&&i[a]!==t[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==t[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==t[l]){var o=`
`+i[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=l);break}}}finally{Mi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ir(e):""}function gv(e){switch(e.tag){case 5:return Ir(e.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return e=Ui(e.type,!1),e;case 11:return e=Ui(e.type.render,!1),e;case 1:return e=Ui(e.type,!0),e;default:return""}}function ot(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case _n:return"Portal";case tt:return"Profiler";case aa:return"StrictMode";case at:return"Suspense";case lt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case To:return(e.displayName||"Context")+".Consumer";case Po:return(e._context.displayName||"Context")+".Provider";case la:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oa:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case Ze:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}function fv(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ot(n);case 8:return n===aa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wv(e){var n=jo(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,t=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){s=""+a,t.call(this,a)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ms(e){e._valueTracker||(e._valueTracker=wv(e))}function Mo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),s="";return e&&(s=jo(e)?e.checked?"true":"false":e.value),e=s,e!==r?(n.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dt(e,n){var r=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function nl(e,n){var r=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;r=pn(n.value!=null?n.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Uo(e,n){n=n.checked,n!=null&&ta(e,"checked",n,!1)}function ct(e,n){Uo(e,n);var r=pn(n.value),s=n.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?vt(e,n.type,r):n.hasOwnProperty("defaultValue")&&vt(e,n.type,pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function rl(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function vt(e,n,r){(n!=="number"||Rs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Sr=Array.isArray;function Kn(e,n,r,s){if(e=e.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=n.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&s&&(e[r].defaultSelected=!0)}else{for(r=""+pn(r),n=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ut(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(f(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sl(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(f(92));if(Sr(r)){if(1<r.length)throw Error(f(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:pn(r)}}function Lo(e,n){var r=pn(n.value),s=pn(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function il(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function No(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?No(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ps,Do=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,s,i){MSApp.execUnsafeLocalFunction(function(){return e(n,r,s,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ps=ps||document.createElement("div"),ps.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Fr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bv=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){bv.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Cr[n]=Cr[e]})});function Fo(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+n).trim():n+"px"}function _o(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=Fo(r,n[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,i):e[r]=i}}var yv=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(e,n){if(n){if(yv[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(f(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(f(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(f(61))}if(n.style!=null&&typeof n.style!="object")throw Error(f(62))}}function ht(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gt=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ft=null,Jn=null,Zn=null;function tl(e){if(e=is(e)){if(typeof ft!="function")throw Error(f(280));var n=e.stateNode;n&&(n=hi(n),ft(e.stateNode,e.type,n))}}function Oo(e){Jn?Zn?Zn.push(e):Zn=[e]:Jn=e}function Ro(){if(Jn){var e=Jn,n=Zn;if(Zn=Jn=null,tl(e),n)for(e=0;e<n.length;e++)tl(n[e])}}function Bo(e,n){return e(n)}function Vo(){}var Li=!1;function Wo(e,n,r){if(Li)return e(n,r);Li=!0;try{return Bo(e,n,r)}finally{Li=!1,(Jn!==null||Zn!==null)&&(Vo(),Ro())}}function _r(e,n){var r=e.stateNode;if(r===null)return null;var s=hi(r);if(s===null)return null;r=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(f(231,n,typeof r));return r}var wt=!1;if(Ge)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){wt=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{wt=!1}function xv(e,n,r,s,i,t,a,l,o){var d=Array.prototype.slice.call(arguments,3);try{n.apply(r,d)}catch(p){this.onError(p)}}var Pr=!1,Bs=null,Vs=!1,bt=null,kv={onError:function(e){Pr=!0,Bs=e}};function Iv(e,n,r,s,i,t,a,l,o){Pr=!1,Bs=null,xv.apply(kv,arguments)}function Sv(e,n,r,s,i,t,a,l,o){if(Iv.apply(this,arguments),Pr){if(Pr){var d=Bs;Pr=!1,Bs=null}else throw Error(f(198));Vs||(Vs=!0,bt=d)}}function Nn(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function $o(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function al(e){if(Nn(e)!==e)throw Error(f(188))}function Av(e){var n=e.alternate;if(!n){if(n=Nn(e),n===null)throw Error(f(188));return n!==e?null:e}for(var r=e,s=n;;){var i=r.return;if(i===null)break;var t=i.alternate;if(t===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===t.child){for(t=i.child;t;){if(t===r)return al(i),e;if(t===s)return al(i),n;t=t.sibling}throw Error(f(188))}if(r.return!==s.return)r=i,s=t;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,s=t;break}if(l===s){a=!0,s=i,r=t;break}l=l.sibling}if(!a){for(l=t.child;l;){if(l===r){a=!0,r=t,s=i;break}if(l===s){a=!0,s=t,r=i;break}l=l.sibling}if(!a)throw Error(f(189))}}if(r.alternate!==s)throw Error(f(190))}if(r.tag!==3)throw Error(f(188));return r.stateNode.current===r?e:n}function Ho(e){return e=Av(e),e!==null?Go(e):null}function Go(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Go(e);if(n!==null)return n;e=e.sibling}return null}var qo=we.unstable_scheduleCallback,ll=we.unstable_cancelCallback,Ev=we.unstable_shouldYield,Cv=we.unstable_requestPaint,H=we.unstable_now,Pv=we.unstable_getCurrentPriorityLevel,ca=we.unstable_ImmediatePriority,Yo=we.unstable_UserBlockingPriority,Ws=we.unstable_NormalPriority,Tv=we.unstable_LowPriority,Qo=we.unstable_IdlePriority,vi=null,Oe=null;function zv(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Uv,jv=Math.log,Mv=Math.LN2;function Uv(e){return e>>>=0,e===0?32:31-(jv(e)/Mv|0)|0}var hs=64,gs=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $s(e,n){var r=e.pendingLanes;if(r===0)return 0;var s=0,i=e.suspendedLanes,t=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?s=Ar(l):(t&=a,t!==0&&(s=Ar(t)))}else a=r&~i,a!==0?s=Ar(a):t!==0&&(s=Ar(t));if(s===0)return 0;if(n!==0&&n!==s&&!(n&i)&&(i=s&-s,t=n&-n,i>=t||i===16&&(t&4194240)!==0))return n;if(s&4&&(s|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)r=31-Ue(n),i=1<<r,s|=e[r],n&=~i;return s}function Lv(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nv(e,n){for(var r=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,t=e.pendingLanes;0<t;){var a=31-Ue(t),l=1<<a,o=i[a];o===-1?(!(l&r)||l&s)&&(i[a]=Lv(l,n)):o<=n&&(e.expiredLanes|=l),t&=~l}}function yt(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ko(){var e=hs;return hs<<=1,!(hs&4194240)&&(hs=64),e}function Ni(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function rs(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ue(n),e[n]=r}function Dv(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Ue(r),t=1<<i;n[i]=0,s[i]=-1,e[i]=-1,r&=~t}}function va(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var s=31-Ue(r),i=1<<s;i&n|e[s]&n&&(e[s]|=n),r&=~i}}var L=0;function Jo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zo,ua,Xo,ed,nd,xt=!1,fs=[],an=null,ln=null,on=null,Or=new Map,Rr=new Map,en=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ol(e,n){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Or.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(n.pointerId)}}function fr(e,n,r,s,i,t){return e===null||e.nativeEvent!==t?(e={blockedOn:n,domEventName:r,eventSystemFlags:s,nativeEvent:t,targetContainers:[i]},n!==null&&(n=is(n),n!==null&&ua(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function _v(e,n,r,s,i){switch(n){case"focusin":return an=fr(an,e,n,r,s,i),!0;case"dragenter":return ln=fr(ln,e,n,r,s,i),!0;case"mouseover":return on=fr(on,e,n,r,s,i),!0;case"pointerover":var t=i.pointerId;return Or.set(t,fr(Or.get(t)||null,e,n,r,s,i)),!0;case"gotpointercapture":return t=i.pointerId,Rr.set(t,fr(Rr.get(t)||null,e,n,r,s,i)),!0}return!1}function rd(e){var n=In(e.target);if(n!==null){var r=Nn(n);if(r!==null){if(n=r.tag,n===13){if(n=$o(r),n!==null){e.blockedOn=n,nd(e.priority,function(){Xo(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=kt(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);gt=s,r.target.dispatchEvent(s),gt=null}else return n=is(r),n!==null&&ua(n),e.blockedOn=r,!1;n.shift()}return!0}function dl(e,n,r){zs(e)&&r.delete(n)}function Ov(){xt=!1,an!==null&&zs(an)&&(an=null),ln!==null&&zs(ln)&&(ln=null),on!==null&&zs(on)&&(on=null),Or.forEach(dl),Rr.forEach(dl)}function wr(e,n){e.blockedOn===n&&(e.blockedOn=null,xt||(xt=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,Ov)))}function Br(e){function n(i){return wr(i,e)}if(0<fs.length){wr(fs[0],e);for(var r=1;r<fs.length;r++){var s=fs[r];s.blockedOn===e&&(s.blockedOn=null)}}for(an!==null&&wr(an,e),ln!==null&&wr(ln,e),on!==null&&wr(on,e),Or.forEach(n),Rr.forEach(n),r=0;r<en.length;r++)s=en[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<en.length&&(r=en[0],r.blockedOn===null);)rd(r),r.blockedOn===null&&en.shift()}var Xn=Ke.ReactCurrentBatchConfig,Hs=!0;function Rv(e,n,r,s){var i=L,t=Xn.transition;Xn.transition=null;try{L=1,ma(e,n,r,s)}finally{L=i,Xn.transition=t}}function Bv(e,n,r,s){var i=L,t=Xn.transition;Xn.transition=null;try{L=4,ma(e,n,r,s)}finally{L=i,Xn.transition=t}}function ma(e,n,r,s){if(Hs){var i=kt(e,n,r,s);if(i===null)Hi(e,n,s,Gs,r),ol(e,s);else if(_v(i,e,n,r,s))s.stopPropagation();else if(ol(e,s),n&4&&-1<Fv.indexOf(e)){for(;i!==null;){var t=is(i);if(t!==null&&Zo(t),t=kt(e,n,r,s),t===null&&Hi(e,n,s,Gs,r),t===i)break;i=t}i!==null&&s.stopPropagation()}else Hi(e,n,s,null,r)}}var Gs=null;function kt(e,n,r,s){if(Gs=null,e=da(s),e=In(e),e!==null)if(n=Nn(e),n===null)e=null;else if(r=n.tag,r===13){if(e=$o(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Gs=e,null}function sd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pv()){case ca:return 1;case Yo:return 4;case Ws:case Tv:return 16;case Qo:return 536870912;default:return 16}default:return 16}}var rn=null,pa=null,js=null;function id(){if(js)return js;var e,n=pa,r=n.length,s,i="value"in rn?rn.value:rn.textContent,t=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(s=1;s<=a&&n[r-s]===i[t-s];s++);return js=i.slice(e,1<s?1-s:void 0)}function Ms(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ws(){return!0}function cl(){return!1}function ye(e){function n(r,s,i,t,a){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=t,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(t):t[l]);return this.isDefaultPrevented=(t.defaultPrevented!=null?t.defaultPrevented:t.returnValue===!1)?ws:cl,this.isPropagationStopped=cl,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ws)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ws)},persist:function(){},isPersistent:ws}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ha=ye(cr),ss=B({},cr,{view:0,detail:0}),Vv=ye(ss),Di,Fi,br,ui=B({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Di=e.screenX-br.screenX,Fi=e.screenY-br.screenY):Fi=Di=0,br=e),Di)},movementY:function(e){return"movementY"in e?e.movementY:Fi}}),vl=ye(ui),Wv=B({},ui,{dataTransfer:0}),$v=ye(Wv),Hv=B({},ss,{relatedTarget:0}),_i=ye(Hv),Gv=B({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=ye(Gv),Yv=B({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qv=ye(Yv),Kv=B({},cr,{data:0}),ul=ye(Kv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xv[e])?!!n[e]:!1}function ga(){return eu}var nu=B({},ss,{key:function(e){if(e.key){var n=Jv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(e){return e.type==="keypress"?Ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ru=ye(nu),su=B({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ml=ye(su),iu=B({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),tu=ye(iu),au=B({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lu=ye(au),ou=B({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),du=ye(ou),cu=[9,13,27,32],fa=Ge&&"CompositionEvent"in window,Tr=null;Ge&&"documentMode"in document&&(Tr=document.documentMode);var vu=Ge&&"TextEvent"in window&&!Tr,td=Ge&&(!fa||Tr&&8<Tr&&11>=Tr),pl=" ",hl=!1;function ad(e,n){switch(e){case"keyup":return cu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function uu(e,n){switch(e){case"compositionend":return ld(n);case"keypress":return n.which!==32?null:(hl=!0,pl);case"textInput":return e=n.data,e===pl&&hl?null:e;default:return null}}function mu(e,n){if(Rn)return e==="compositionend"||!fa&&ad(e,n)?(e=id(),js=pa=rn=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return td&&n.locale!=="ko"?null:n.data;default:return null}}var pu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!pu[e.type]:n==="textarea"}function od(e,n,r,s){Oo(s),n=qs(n,"onChange"),0<n.length&&(r=new ha("onChange","change",null,r,s),e.push({event:r,listeners:n}))}var zr=null,Vr=null;function hu(e){bd(e,0)}function mi(e){var n=Wn(e);if(Mo(n))return e}function gu(e,n){if(e==="change")return n}var dd=!1;if(Ge){var Oi;if(Ge){var Ri="oninput"in document;if(!Ri){var fl=document.createElement("div");fl.setAttribute("oninput","return;"),Ri=typeof fl.oninput=="function"}Oi=Ri}else Oi=!1;dd=Oi&&(!document.documentMode||9<document.documentMode)}function wl(){zr&&(zr.detachEvent("onpropertychange",cd),Vr=zr=null)}function cd(e){if(e.propertyName==="value"&&mi(Vr)){var n=[];od(n,Vr,e,da(e)),Wo(hu,n)}}function fu(e,n,r){e==="focusin"?(wl(),zr=n,Vr=r,zr.attachEvent("onpropertychange",cd)):e==="focusout"&&wl()}function wu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(Vr)}function bu(e,n){if(e==="click")return mi(n)}function yu(e,n){if(e==="input"||e==="change")return mi(n)}function xu(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ne=typeof Object.is=="function"?Object.is:xu;function Wr(e,n){if(Ne(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),s=Object.keys(n);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!it.call(n,i)||!Ne(e[i],n[i]))return!1}return!0}function bl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yl(e,n){var r=bl(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=n&&s>=n)return{node:r,offset:n-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=bl(r)}}function vd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ud(){for(var e=window,n=Rs();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Rs(e.document)}return n}function wa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ku(e){var n=ud(),r=e.focusedElem,s=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&vd(r.ownerDocument.documentElement,r)){if(s!==null&&wa(r)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,t=Math.min(s.start,i);s=s.end===void 0?t:Math.min(s.end,i),!e.extend&&t>s&&(i=s,s=t,t=i),i=yl(r,t);var a=yl(r,s);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),t>s?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Iu=Ge&&"documentMode"in document&&11>=document.documentMode,Bn=null,It=null,jr=null,St=!1;function xl(e,n,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;St||Bn==null||Bn!==Rs(s)||(s=Bn,"selectionStart"in s&&wa(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),jr&&Wr(jr,s)||(jr=s,s=qs(It,"onSelect"),0<s.length&&(n=new ha("onSelect","select",null,n,r),e.push({event:n,listeners:s}),n.target=Bn)))}function bs(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Vn={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionend:bs("Transition","TransitionEnd")},Bi={},md={};Ge&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function pi(e){if(Bi[e])return Bi[e];if(!Vn[e])return e;var n=Vn[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in md)return Bi[e]=n[r];return e}var pd=pi("animationend"),hd=pi("animationiteration"),gd=pi("animationstart"),fd=pi("transitionend"),wd=new Map,kl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,n){wd.set(e,n),Ln(n,[e])}for(var Vi=0;Vi<kl.length;Vi++){var Wi=kl[Vi],Su=Wi.toLowerCase(),Au=Wi[0].toUpperCase()+Wi.slice(1);gn(Su,"on"+Au)}gn(pd,"onAnimationEnd");gn(hd,"onAnimationIteration");gn(gd,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(fd,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function Il(e,n,r){var s=e.type||"unknown-event";e.currentTarget=r,Sv(s,n,void 0,e),e.currentTarget=null}function bd(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],i=s.event;s=s.listeners;e:{var t=void 0;if(n)for(var a=s.length-1;0<=a;a--){var l=s[a],o=l.instance,d=l.currentTarget;if(l=l.listener,o!==t&&i.isPropagationStopped())break e;Il(i,l,d),t=o}else for(a=0;a<s.length;a++){if(l=s[a],o=l.instance,d=l.currentTarget,l=l.listener,o!==t&&i.isPropagationStopped())break e;Il(i,l,d),t=o}}}if(Vs)throw e=bt,Vs=!1,bt=null,e}function D(e,n){var r=n[Tt];r===void 0&&(r=n[Tt]=new Set);var s=e+"__bubble";r.has(s)||(yd(n,e,2,!1),r.add(s))}function $i(e,n,r){var s=0;n&&(s|=4),yd(r,e,s,n)}var ys="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[ys]){e[ys]=!0,Co.forEach(function(r){r!=="selectionchange"&&(Eu.has(r)||$i(r,!1,e),$i(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ys]||(n[ys]=!0,$i("selectionchange",!1,n))}}function yd(e,n,r,s){switch(sd(n)){case 1:var i=Rv;break;case 4:i=Bv;break;default:i=ma}r=i.bind(null,n,r,e),i=void 0,!wt||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(n,r,{capture:!0,passive:i}):e.addEventListener(n,r,!0):i!==void 0?e.addEventListener(n,r,{passive:i}):e.addEventListener(n,r,!1)}function Hi(e,n,r,s,i){var t=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var l=s.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=s.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;a=a.return}for(;l!==null;){if(a=In(l),a===null)return;if(o=a.tag,o===5||o===6){s=t=a;continue e}l=l.parentNode}}s=s.return}Wo(function(){var d=t,p=da(r),m=[];e:{var h=wd.get(e);if(h!==void 0){var w=ha,b=e;switch(e){case"keypress":if(Ms(r)===0)break e;case"keydown":case"keyup":w=ru;break;case"focusin":b="focus",w=_i;break;case"focusout":b="blur",w=_i;break;case"beforeblur":case"afterblur":w=_i;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=tu;break;case pd:case hd:case gd:w=qv;break;case fd:w=lu;break;case"scroll":w=Vv;break;case"wheel":w=du;break;case"copy":case"cut":case"paste":w=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ml}var y=(n&4)!==0,I=!y&&e==="scroll",v=y?h!==null?h+"Capture":null:h;y=[];for(var c=d,u;c!==null;){u=c;var g=u.stateNode;if(u.tag===5&&g!==null&&(u=g,v!==null&&(g=_r(c,v),g!=null&&y.push(Hr(c,g,u)))),I)break;c=c.return}0<y.length&&(h=new w(h,b,null,r,p),m.push({event:h,listeners:y}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&r!==gt&&(b=r.relatedTarget||r.fromElement)&&(In(b)||b[qe]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(b=r.relatedTarget||r.toElement,w=d,b=b?In(b):null,b!==null&&(I=Nn(b),b!==I||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=d),w!==b)){if(y=vl,g="onMouseLeave",v="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=ml,g="onPointerLeave",v="onPointerEnter",c="pointer"),I=w==null?h:Wn(w),u=b==null?h:Wn(b),h=new y(g,c+"leave",w,r,p),h.target=I,h.relatedTarget=u,g=null,In(p)===d&&(y=new y(v,c+"enter",b,r,p),y.target=u,y.relatedTarget=I,g=y),I=g,w&&b)n:{for(y=w,v=b,c=0,u=y;u;u=Fn(u))c++;for(u=0,g=v;g;g=Fn(g))u++;for(;0<c-u;)y=Fn(y),c--;for(;0<u-c;)v=Fn(v),u--;for(;c--;){if(y===v||v!==null&&y===v.alternate)break n;y=Fn(y),v=Fn(v)}y=null}else y=null;w!==null&&Sl(m,h,w,y,!1),b!==null&&I!==null&&Sl(m,I,b,y,!0)}}e:{if(h=d?Wn(d):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var x=gu;else if(gl(h))if(dd)x=yu;else{x=wu;var E=fu}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=bu);if(x&&(x=x(e,d))){od(m,x,r,p);break e}E&&E(e,h,d),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&vt(h,"number",h.value)}switch(E=d?Wn(d):window,e){case"focusin":(gl(E)||E.contentEditable==="true")&&(Bn=E,It=d,jr=null);break;case"focusout":jr=It=Bn=null;break;case"mousedown":St=!0;break;case"contextmenu":case"mouseup":case"dragend":St=!1,xl(m,r,p);break;case"selectionchange":if(Iu)break;case"keydown":case"keyup":xl(m,r,p)}var C;if(fa)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Rn?ad(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(td&&r.locale!=="ko"&&(Rn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Rn&&(C=id()):(rn=p,pa="value"in rn?rn.value:rn.textContent,Rn=!0)),E=qs(d,P),0<E.length&&(P=new ul(P,e,null,r,p),m.push({event:P,listeners:E}),C?P.data=C:(C=ld(r),C!==null&&(P.data=C)))),(C=vu?uu(e,r):mu(e,r))&&(d=qs(d,"onBeforeInput"),0<d.length&&(p=new ul("onBeforeInput","beforeinput",null,r,p),m.push({event:p,listeners:d}),p.data=C))}bd(m,n)})}function Hr(e,n,r){return{instance:e,listener:n,currentTarget:r}}function qs(e,n){for(var r=n+"Capture",s=[];e!==null;){var i=e,t=i.stateNode;i.tag===5&&t!==null&&(i=t,t=_r(e,r),t!=null&&s.unshift(Hr(e,t,i)),t=_r(e,n),t!=null&&s.push(Hr(e,t,i))),e=e.return}return s}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sl(e,n,r,s,i){for(var t=n._reactName,a=[];r!==null&&r!==s;){var l=r,o=l.alternate,d=l.stateNode;if(o!==null&&o===s)break;l.tag===5&&d!==null&&(l=d,i?(o=_r(r,t),o!=null&&a.unshift(Hr(r,o,l))):i||(o=_r(r,t),o!=null&&a.push(Hr(r,o,l)))),r=r.return}a.length!==0&&e.push({event:n,listeners:a})}var Cu=/\r\n?/g,Pu=/\u0000|\uFFFD/g;function Al(e){return(typeof e=="string"?e:""+e).replace(Cu,`
`).replace(Pu,"")}function xs(e,n,r){if(n=Al(n),Al(e)!==n&&r)throw Error(f(425))}function Ys(){}var At=null,Et=null;function Ct(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pt=typeof setTimeout=="function"?setTimeout:void 0,Tu=typeof clearTimeout=="function"?clearTimeout:void 0,El=typeof Promise=="function"?Promise:void 0,zu=typeof queueMicrotask=="function"?queueMicrotask:typeof El<"u"?function(e){return El.resolve(null).then(e).catch(ju)}:Pt;function ju(e){setTimeout(function(){throw e})}function Gi(e,n){var r=n,s=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){e.removeChild(i),Br(n);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);Br(n)}function dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Cl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),_e="__reactFiber$"+vr,Gr="__reactProps$"+vr,qe="__reactContainer$"+vr,Tt="__reactEvents$"+vr,Mu="__reactListeners$"+vr,Uu="__reactHandles$"+vr;function In(e){var n=e[_e];if(n)return n;for(var r=e.parentNode;r;){if(n=r[qe]||r[_e]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Cl(e);e!==null;){if(r=e[_e])return r;e=Cl(e)}return n}e=r,r=e.parentNode}return null}function is(e){return e=e[_e]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(f(33))}function hi(e){return e[Gr]||null}var zt=[],$n=-1;function fn(e){return{current:e}}function F(e){0>$n||(e.current=zt[$n],zt[$n]=null,$n--)}function N(e,n){$n++,zt[$n]=e.current,e.current=n}var hn={},te=fn(hn),ue=fn(!1),Tn=hn;function sr(e,n){var r=e.type.contextTypes;if(!r)return hn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var i={},t;for(t in r)i[t]=n[t];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Qs(){F(ue),F(te)}function Pl(e,n,r){if(te.current!==hn)throw Error(f(168));N(te,n),N(ue,r)}function xd(e,n,r){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in n))throw Error(f(108,fv(e)||"Unknown",i));return B({},r,s)}function Ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Tn=te.current,N(te,e),N(ue,ue.current),!0}function Tl(e,n,r){var s=e.stateNode;if(!s)throw Error(f(169));r?(e=xd(e,n,Tn),s.__reactInternalMemoizedMergedChildContext=e,F(ue),F(te),N(te,e)):F(ue),N(ue,r)}var Ve=null,gi=!1,qi=!1;function kd(e){Ve===null?Ve=[e]:Ve.push(e)}function Lu(e){gi=!0,kd(e)}function wn(){if(!qi&&Ve!==null){qi=!0;var e=0,n=L;try{var r=Ve;for(L=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Ve=null,gi=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),qo(ca,wn),i}finally{L=n,qi=!1}}return null}var Hn=[],Gn=0,Js=null,Zs=0,xe=[],ke=0,zn=null,We=1,$e="";function xn(e,n){Hn[Gn++]=Zs,Hn[Gn++]=Js,Js=e,Zs=n}function Id(e,n,r){xe[ke++]=We,xe[ke++]=$e,xe[ke++]=zn,zn=e;var s=We;e=$e;var i=32-Ue(s)-1;s&=~(1<<i),r+=1;var t=32-Ue(n)+i;if(30<t){var a=i-i%5;t=(s&(1<<a)-1).toString(32),s>>=a,i-=a,We=1<<32-Ue(n)+i|r<<i|s,$e=t+e}else We=1<<t|r<<i|s,$e=e}function ba(e){e.return!==null&&(xn(e,1),Id(e,1,0))}function ya(e){for(;e===Js;)Js=Hn[--Gn],Hn[Gn]=null,Zs=Hn[--Gn],Hn[Gn]=null;for(;e===zn;)zn=xe[--ke],xe[ke]=null,$e=xe[--ke],xe[ke]=null,We=xe[--ke],xe[ke]=null}var fe=null,ge=null,_=!1,Me=null;function Sd(e,n){var r=Ie(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function zl(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,fe=e,ge=dn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,fe=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=zn!==null?{id:We,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=Ie(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,fe=e,ge=null,!0):!1;default:return!1}}function jt(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mt(e){if(_){var n=ge;if(n){var r=n;if(!zl(e,n)){if(jt(e))throw Error(f(418));n=dn(r.nextSibling);var s=fe;n&&zl(e,n)?Sd(s,r):(e.flags=e.flags&-4097|2,_=!1,fe=e)}}else{if(jt(e))throw Error(f(418));e.flags=e.flags&-4097|2,_=!1,fe=e}}}function jl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;fe=e}function ks(e){if(e!==fe)return!1;if(!_)return jl(e),_=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ct(e.type,e.memoizedProps)),n&&(n=ge)){if(jt(e))throw Ad(),Error(f(418));for(;n;)Sd(e,n),n=dn(n.nextSibling)}if(jl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){ge=dn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=fe?dn(e.stateNode.nextSibling):null;return!0}function Ad(){for(var e=ge;e;)e=dn(e.nextSibling)}function ir(){ge=fe=null,_=!1}function xa(e){Me===null?Me=[e]:Me.push(e)}var Nu=Ke.ReactCurrentBatchConfig;function yr(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(f(309));var s=r.stateNode}if(!s)throw Error(f(147,e));var i=s,t=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===t?n.ref:(n=function(a){var l=i.refs;a===null?delete l[t]:l[t]=a},n._stringRef=t,n)}if(typeof e!="string")throw Error(f(284));if(!r._owner)throw Error(f(290,e))}return e}function Is(e,n){throw e=Object.prototype.toString.call(n),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ml(e){var n=e._init;return n(e._payload)}function Ed(e){function n(v,c){if(e){var u=v.deletions;u===null?(v.deletions=[c],v.flags|=16):u.push(c)}}function r(v,c){if(!e)return null;for(;c!==null;)n(v,c),c=c.sibling;return null}function s(v,c){for(v=new Map;c!==null;)c.key!==null?v.set(c.key,c):v.set(c.index,c),c=c.sibling;return v}function i(v,c){return v=mn(v,c),v.index=0,v.sibling=null,v}function t(v,c,u){return v.index=u,e?(u=v.alternate,u!==null?(u=u.index,u<c?(v.flags|=2,c):u):(v.flags|=2,c)):(v.flags|=1048576,c)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,c,u,g){return c===null||c.tag!==6?(c=et(u,v.mode,g),c.return=v,c):(c=i(c,u),c.return=v,c)}function o(v,c,u,g){var x=u.type;return x===On?p(v,c,u.props.children,g,u.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ze&&Ml(x)===c.type)?(g=i(c,u.props),g.ref=yr(v,c,u),g.return=v,g):(g=Os(u.type,u.key,u.props,null,v.mode,g),g.ref=yr(v,c,u),g.return=v,g)}function d(v,c,u,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=nt(u,v.mode,g),c.return=v,c):(c=i(c,u.children||[]),c.return=v,c)}function p(v,c,u,g,x){return c===null||c.tag!==7?(c=Cn(u,v.mode,g,x),c.return=v,c):(c=i(c,u),c.return=v,c)}function m(v,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=et(""+c,v.mode,u),c.return=v,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case us:return u=Os(c.type,c.key,c.props,null,v.mode,u),u.ref=yr(v,null,c),u.return=v,u;case _n:return c=nt(c,v.mode,u),c.return=v,c;case Ze:var g=c._init;return m(v,g(c._payload),u)}if(Sr(c)||hr(c))return c=Cn(c,v.mode,u,null),c.return=v,c;Is(v,c)}return null}function h(v,c,u,g){var x=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return x!==null?null:l(v,c,""+u,g);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case us:return u.key===x?o(v,c,u,g):null;case _n:return u.key===x?d(v,c,u,g):null;case Ze:return x=u._init,h(v,c,x(u._payload),g)}if(Sr(u)||hr(u))return x!==null?null:p(v,c,u,g,null);Is(v,u)}return null}function w(v,c,u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return v=v.get(u)||null,l(c,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case us:return v=v.get(g.key===null?u:g.key)||null,o(c,v,g,x);case _n:return v=v.get(g.key===null?u:g.key)||null,d(c,v,g,x);case Ze:var E=g._init;return w(v,c,u,E(g._payload),x)}if(Sr(g)||hr(g))return v=v.get(u)||null,p(c,v,g,x,null);Is(c,g)}return null}function b(v,c,u,g){for(var x=null,E=null,C=c,P=c=0,W=null;C!==null&&P<u.length;P++){C.index>P?(W=C,C=null):W=C.sibling;var M=h(v,C,u[P],g);if(M===null){C===null&&(C=W);break}e&&C&&M.alternate===null&&n(v,C),c=t(M,c,P),E===null?x=M:E.sibling=M,E=M,C=W}if(P===u.length)return r(v,C),_&&xn(v,P),x;if(C===null){for(;P<u.length;P++)C=m(v,u[P],g),C!==null&&(c=t(C,c,P),E===null?x=C:E.sibling=C,E=C);return _&&xn(v,P),x}for(C=s(v,C);P<u.length;P++)W=w(C,v,P,u[P],g),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?P:W.key),c=t(W,c,P),E===null?x=W:E.sibling=W,E=W);return e&&C.forEach(function(Ce){return n(v,Ce)}),_&&xn(v,P),x}function y(v,c,u,g){var x=hr(u);if(typeof x!="function")throw Error(f(150));if(u=x.call(u),u==null)throw Error(f(151));for(var E=x=null,C=c,P=c=0,W=null,M=u.next();C!==null&&!M.done;P++,M=u.next()){C.index>P?(W=C,C=null):W=C.sibling;var Ce=h(v,C,M.value,g);if(Ce===null){C===null&&(C=W);break}e&&C&&Ce.alternate===null&&n(v,C),c=t(Ce,c,P),E===null?x=Ce:E.sibling=Ce,E=Ce,C=W}if(M.done)return r(v,C),_&&xn(v,P),x;if(C===null){for(;!M.done;P++,M=u.next())M=m(v,M.value,g),M!==null&&(c=t(M,c,P),E===null?x=M:E.sibling=M,E=M);return _&&xn(v,P),x}for(C=s(v,C);!M.done;P++,M=u.next())M=w(C,v,P,M.value,g),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?P:M.key),c=t(M,c,P),E===null?x=M:E.sibling=M,E=M);return e&&C.forEach(function(mr){return n(v,mr)}),_&&xn(v,P),x}function I(v,c,u,g){if(typeof u=="object"&&u!==null&&u.type===On&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case us:e:{for(var x=u.key,E=c;E!==null;){if(E.key===x){if(x=u.type,x===On){if(E.tag===7){r(v,E.sibling),c=i(E,u.props.children),c.return=v,v=c;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ze&&Ml(x)===E.type){r(v,E.sibling),c=i(E,u.props),c.ref=yr(v,E,u),c.return=v,v=c;break e}r(v,E);break}else n(v,E);E=E.sibling}u.type===On?(c=Cn(u.props.children,v.mode,g,u.key),c.return=v,v=c):(g=Os(u.type,u.key,u.props,null,v.mode,g),g.ref=yr(v,c,u),g.return=v,v=g)}return a(v);case _n:e:{for(E=u.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){r(v,c.sibling),c=i(c,u.children||[]),c.return=v,v=c;break e}else{r(v,c);break}else n(v,c);c=c.sibling}c=nt(u,v.mode,g),c.return=v,v=c}return a(v);case Ze:return E=u._init,I(v,c,E(u._payload),g)}if(Sr(u))return b(v,c,u,g);if(hr(u))return y(v,c,u,g);Is(v,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(r(v,c.sibling),c=i(c,u),c.return=v,v=c):(r(v,c),c=et(u,v.mode,g),c.return=v,v=c),a(v)):r(v,c)}return I}var tr=Ed(!0),Cd=Ed(!1),Xs=fn(null),ei=null,qn=null,ka=null;function Ia(){ka=qn=ei=null}function Sa(e){var n=Xs.current;F(Xs),e._currentValue=n}function Ut(e,n,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===r)break;e=e.return}}function er(e,n){ei=e,ka=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ve=!0),e.firstContext=null)}function Ae(e){var n=e._currentValue;if(ka!==e)if(e={context:e,memoizedValue:n,next:null},qn===null){if(ei===null)throw Error(f(308));qn=e,ei.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return n}var Sn=null;function Aa(e){Sn===null?Sn=[e]:Sn.push(e)}function Pd(e,n,r,s){var i=n.interleaved;return i===null?(r.next=r,Aa(n)):(r.next=i.next,i.next=r),n.interleaved=r,Ye(e,s)}function Ye(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Xe=!1;function Ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Td(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function cn(e,n,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,U&2){var i=s.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),s.pending=n,Ye(e,r)}return i=s.interleaved,i===null?(n.next=n,Aa(s)):(n.next=i.next,i.next=n),s.interleaved=n,Ye(e,r)}function Us(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,r|=s,n.lanes=r,va(e,r)}}function Ul(e,n){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,t=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};t===null?i=t=a:t=t.next=a,r=r.next}while(r!==null);t===null?i=t=n:t=t.next=n}else i=t=n;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:t,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function ni(e,n,r,s){var i=e.updateQueue;Xe=!1;var t=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var o=l,d=o.next;o.next=null,a===null?t=d:a.next=d,a=o;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=o))}if(t!==null){var m=i.baseState;a=0,p=d=o=null,l=t;do{var h=l.lane,w=l.eventTime;if((s&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,y=l;switch(h=n,w=r,y.tag){case 1:if(b=y.payload,typeof b=="function"){m=b.call(w,m,h);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,h=typeof b=="function"?b.call(w,m,h):b,h==null)break e;m=B({},m,h);break e;case 2:Xe=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=w,o=m):p=p.next=w,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(o=m),i.baseState=o,i.firstBaseUpdate=d,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else t===null&&(i.shared.lanes=0);Mn|=a,e.lanes=a,e.memoizedState=m}}function Ll(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(f(191,i));i.call(s)}}}var ts={},Re=fn(ts),qr=fn(ts),Yr=fn(ts);function An(e){if(e===ts)throw Error(f(174));return e}function Ca(e,n){switch(N(Yr,n),N(qr,e),N(Re,ts),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:mt(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=mt(n,e)}F(Re),N(Re,n)}function ar(){F(Re),F(qr),F(Yr)}function zd(e){An(Yr.current);var n=An(Re.current),r=mt(n,e.type);n!==r&&(N(qr,e),N(Re,r))}function Pa(e){qr.current===e&&(F(Re),F(qr))}var O=fn(0);function ri(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=[];function Ta(){for(var e=0;e<Yi.length;e++)Yi[e]._workInProgressVersionPrimary=null;Yi.length=0}var Ls=Ke.ReactCurrentDispatcher,Qi=Ke.ReactCurrentBatchConfig,jn=0,R=null,Y=null,J=null,si=!1,Mr=!1,Qr=0,Du=0;function re(){throw Error(f(321))}function za(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Ne(e[r],n[r]))return!1;return!0}function ja(e,n,r,s,i,t){if(jn=t,R=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ls.current=e===null||e.memoizedState===null?Ru:Bu,e=r(s,i),Mr){t=0;do{if(Mr=!1,Qr=0,25<=t)throw Error(f(301));t+=1,J=Y=null,n.updateQueue=null,Ls.current=Vu,e=r(s,i)}while(Mr)}if(Ls.current=ii,n=Y!==null&&Y.next!==null,jn=0,J=Y=R=null,si=!1,n)throw Error(f(300));return e}function Ma(){var e=Qr!==0;return Qr=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?R.memoizedState=J=e:J=J.next=e,J}function Ee(){if(Y===null){var e=R.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=J===null?R.memoizedState:J.next;if(n!==null)J=n,Y=e;else{if(e===null)throw Error(f(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},J===null?R.memoizedState=J=e:J=J.next=e}return J}function Kr(e,n){return typeof n=="function"?n(e):n}function Ki(e){var n=Ee(),r=n.queue;if(r===null)throw Error(f(311));r.lastRenderedReducer=e;var s=Y,i=s.baseQueue,t=r.pending;if(t!==null){if(i!==null){var a=i.next;i.next=t.next,t.next=a}s.baseQueue=i=t,r.pending=null}if(i!==null){t=i.next,s=s.baseState;var l=a=null,o=null,d=t;do{var p=d.lane;if((jn&p)===p)o!==null&&(o=o.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:e(s,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};o===null?(l=o=m,a=s):o=o.next=m,R.lanes|=p,Mn|=p}d=d.next}while(d!==null&&d!==t);o===null?a=s:o.next=l,Ne(s,n.memoizedState)||(ve=!0),n.memoizedState=s,n.baseState=a,n.baseQueue=o,r.lastRenderedState=s}if(e=r.interleaved,e!==null){i=e;do t=i.lane,R.lanes|=t,Mn|=t,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Ji(e){var n=Ee(),r=n.queue;if(r===null)throw Error(f(311));r.lastRenderedReducer=e;var s=r.dispatch,i=r.pending,t=n.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do t=e(t,a.action),a=a.next;while(a!==i);Ne(t,n.memoizedState)||(ve=!0),n.memoizedState=t,n.baseQueue===null&&(n.baseState=t),r.lastRenderedState=t}return[t,s]}function jd(){}function Md(e,n){var r=R,s=Ee(),i=n(),t=!Ne(s.memoizedState,i);if(t&&(s.memoizedState=i,ve=!0),s=s.queue,Ua(Nd.bind(null,r,s,e),[e]),s.getSnapshot!==n||t||J!==null&&J.memoizedState.tag&1){if(r.flags|=2048,Jr(9,Ld.bind(null,r,s,i,n),void 0,null),Z===null)throw Error(f(349));jn&30||Ud(r,n,i)}return i}function Ud(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=R.updateQueue,n===null?(n={lastEffect:null,stores:null},R.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Ld(e,n,r,s){n.value=r,n.getSnapshot=s,Dd(n)&&Fd(e)}function Nd(e,n,r){return r(function(){Dd(n)&&Fd(e)})}function Dd(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Ne(e,r)}catch{return!0}}function Fd(e){var n=Ye(e,1);n!==null&&Le(n,e,1,-1)}function Nl(e){var n=Fe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},n.queue=e,e=e.dispatch=Ou.bind(null,R,e),[n.memoizedState,e]}function Jr(e,n,r,s){return e={tag:e,create:n,destroy:r,deps:s,next:null},n=R.updateQueue,n===null?(n={lastEffect:null,stores:null},R.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,n.lastEffect=e)),e}function _d(){return Ee().memoizedState}function Ns(e,n,r,s){var i=Fe();R.flags|=e,i.memoizedState=Jr(1|n,r,void 0,s===void 0?null:s)}function fi(e,n,r,s){var i=Ee();s=s===void 0?null:s;var t=void 0;if(Y!==null){var a=Y.memoizedState;if(t=a.destroy,s!==null&&za(s,a.deps)){i.memoizedState=Jr(n,r,t,s);return}}R.flags|=e,i.memoizedState=Jr(1|n,r,t,s)}function Dl(e,n){return Ns(8390656,8,e,n)}function Ua(e,n){return fi(2048,8,e,n)}function Od(e,n){return fi(4,2,e,n)}function Rd(e,n){return fi(4,4,e,n)}function Bd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vd(e,n,r){return r=r!=null?r.concat([e]):null,fi(4,4,Bd.bind(null,n,e),r)}function La(){}function Wd(e,n){var r=Ee();n=n===void 0?null:n;var s=r.memoizedState;return s!==null&&n!==null&&za(n,s[1])?s[0]:(r.memoizedState=[e,n],e)}function $d(e,n){var r=Ee();n=n===void 0?null:n;var s=r.memoizedState;return s!==null&&n!==null&&za(n,s[1])?s[0]:(e=e(),r.memoizedState=[e,n],e)}function Hd(e,n,r){return jn&21?(Ne(r,n)||(r=Ko(),R.lanes|=r,Mn|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=r)}function Fu(e,n){var r=L;L=r!==0&&4>r?r:4,e(!0);var s=Qi.transition;Qi.transition={};try{e(!1),n()}finally{L=r,Qi.transition=s}}function Gd(){return Ee().memoizedState}function _u(e,n,r){var s=un(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},qd(e))Yd(n,r);else if(r=Pd(e,n,r,s),r!==null){var i=le();Le(r,e,s,i),Qd(r,n,s)}}function Ou(e,n,r){var s=un(e),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(qd(e))Yd(n,i);else{var t=e.alternate;if(e.lanes===0&&(t===null||t.lanes===0)&&(t=n.lastRenderedReducer,t!==null))try{var a=n.lastRenderedState,l=t(a,r);if(i.hasEagerState=!0,i.eagerState=l,Ne(l,a)){var o=n.interleaved;o===null?(i.next=i,Aa(n)):(i.next=o.next,o.next=i),n.interleaved=i;return}}catch{}finally{}r=Pd(e,n,i,s),r!==null&&(i=le(),Le(r,e,s,i),Qd(r,n,s))}}function qd(e){var n=e.alternate;return e===R||n!==null&&n===R}function Yd(e,n){Mr=si=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Qd(e,n,r){if(r&4194240){var s=n.lanes;s&=e.pendingLanes,r|=s,n.lanes=r,va(e,r)}}var ii={readContext:Ae,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Ru={readContext:Ae,useCallback:function(e,n){return Fe().memoizedState=[e,n===void 0?null:n],e},useContext:Ae,useEffect:Dl,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Ns(4194308,4,Bd.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Ns(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ns(4,2,e,n)},useMemo:function(e,n){var r=Fe();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var s=Fe();return n=r!==void 0?r(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=_u.bind(null,R,e),[s.memoizedState,e]},useRef:function(e){var n=Fe();return e={current:e},n.memoizedState=e},useState:Nl,useDebugValue:La,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Nl(!1),n=e[0];return e=Fu.bind(null,e[1]),Fe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var s=R,i=Fe();if(_){if(r===void 0)throw Error(f(407));r=r()}else{if(r=n(),Z===null)throw Error(f(349));jn&30||Ud(s,n,r)}i.memoizedState=r;var t={value:r,getSnapshot:n};return i.queue=t,Dl(Nd.bind(null,s,t,e),[e]),s.flags|=2048,Jr(9,Ld.bind(null,s,t,r,n),void 0,null),r},useId:function(){var e=Fe(),n=Z.identifierPrefix;if(_){var r=$e,s=We;r=(s&~(1<<32-Ue(s)-1)).toString(32)+r,n=":"+n+"R"+r,r=Qr++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=Du++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Bu={readContext:Ae,useCallback:Wd,useContext:Ae,useEffect:Ua,useImperativeHandle:Vd,useInsertionEffect:Od,useLayoutEffect:Rd,useMemo:$d,useReducer:Ki,useRef:_d,useState:function(){return Ki(Kr)},useDebugValue:La,useDeferredValue:function(e){var n=Ee();return Hd(n,Y.memoizedState,e)},useTransition:function(){var e=Ki(Kr)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:jd,useSyncExternalStore:Md,useId:Gd,unstable_isNewReconciler:!1},Vu={readContext:Ae,useCallback:Wd,useContext:Ae,useEffect:Ua,useImperativeHandle:Vd,useInsertionEffect:Od,useLayoutEffect:Rd,useMemo:$d,useReducer:Ji,useRef:_d,useState:function(){return Ji(Kr)},useDebugValue:La,useDeferredValue:function(e){var n=Ee();return Y===null?n.memoizedState=e:Hd(n,Y.memoizedState,e)},useTransition:function(){var e=Ji(Kr)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:jd,useSyncExternalStore:Md,useId:Gd,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function Lt(e,n,r,s){n=e.memoizedState,r=r(s,n),r=r==null?n:B({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var wi={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var s=le(),i=un(e),t=He(s,i);t.payload=n,r!=null&&(t.callback=r),n=cn(e,t,i),n!==null&&(Le(n,e,i,s),Us(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var s=le(),i=un(e),t=He(s,i);t.tag=1,t.payload=n,r!=null&&(t.callback=r),n=cn(e,t,i),n!==null&&(Le(n,e,i,s),Us(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=le(),s=un(e),i=He(r,s);i.tag=2,n!=null&&(i.callback=n),n=cn(e,i,s),n!==null&&(Le(n,e,s,r),Us(n,e,s))}};function Fl(e,n,r,s,i,t,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,t,a):n.prototype&&n.prototype.isPureReactComponent?!Wr(r,s)||!Wr(i,t):!0}function Kd(e,n,r){var s=!1,i=hn,t=n.contextType;return typeof t=="object"&&t!==null?t=Ae(t):(i=me(n)?Tn:te.current,s=n.contextTypes,t=(s=s!=null)?sr(e,i):hn),n=new n(r,t),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=wi,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=t),n}function _l(e,n,r,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,s),n.state!==e&&wi.enqueueReplaceState(n,n.state,null)}function Nt(e,n,r,s){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Ea(e);var t=n.contextType;typeof t=="object"&&t!==null?i.context=Ae(t):(t=me(n)?Tn:te.current,i.context=sr(e,t)),i.state=e.memoizedState,t=n.getDerivedStateFromProps,typeof t=="function"&&(Lt(e,n,t,r),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&wi.enqueueReplaceState(i,i.state,null),ni(e,r,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,n){try{var r="",s=n;do r+=gv(s),s=s.return;while(s);var i=r}catch(t){i=`
Error generating stack: `+t.message+`
`+t.stack}return{value:e,source:n,stack:i,digest:null}}function Zi(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function Dt(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var Wu=typeof WeakMap=="function"?WeakMap:Map;function Jd(e,n,r){r=He(-1,r),r.tag=3,r.payload={element:null};var s=n.value;return r.callback=function(){ai||(ai=!0,Gt=s),Dt(e,n)},r}function Zd(e,n,r){r=He(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=n.value;r.payload=function(){return s(i)},r.callback=function(){Dt(e,n)}}var t=e.stateNode;return t!==null&&typeof t.componentDidCatch=="function"&&(r.callback=function(){Dt(e,n),typeof s!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),r}function Ol(e,n,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Wu;var i=new Set;s.set(n,i)}else i=s.get(n),i===void 0&&(i=new Set,s.set(n,i));i.has(r)||(i.add(r),e=sm.bind(null,e,n,r),n.then(e,e))}function Rl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Bl(e,n,r,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=He(-1,1),n.tag=2,cn(r,n,1))),r.lanes|=1),e)}var $u=Ke.ReactCurrentOwner,ve=!1;function ae(e,n,r,s){n.child=e===null?Cd(n,null,r,s):tr(n,e.child,r,s)}function Vl(e,n,r,s,i){r=r.render;var t=n.ref;return er(n,i),s=ja(e,n,r,s,t,i),r=Ma(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Qe(e,n,i)):(_&&r&&ba(n),n.flags|=1,ae(e,n,s,i),n.child)}function Wl(e,n,r,s,i){if(e===null){var t=r.type;return typeof t=="function"&&!Va(t)&&t.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=t,Xd(e,n,t,s,i)):(e=Os(r.type,null,s,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(t=e.child,!(e.lanes&i)){var a=t.memoizedProps;if(r=r.compare,r=r!==null?r:Wr,r(a,s)&&e.ref===n.ref)return Qe(e,n,i)}return n.flags|=1,e=mn(t,s),e.ref=n.ref,e.return=n,n.child=e}function Xd(e,n,r,s,i){if(e!==null){var t=e.memoizedProps;if(Wr(t,s)&&e.ref===n.ref)if(ve=!1,n.pendingProps=s=t,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return n.lanes=e.lanes,Qe(e,n,i)}return Ft(e,n,r,s,i)}function ec(e,n,r){var s=n.pendingProps,i=s.children,t=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},N(Qn,he),he|=r;else{if(!(r&1073741824))return e=t!==null?t.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,N(Qn,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=t!==null?t.baseLanes:r,N(Qn,he),he|=s}else t!==null?(s=t.baseLanes|r,n.memoizedState=null):s=r,N(Qn,he),he|=s;return ae(e,n,i,r),n.child}function nc(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Ft(e,n,r,s,i){var t=me(r)?Tn:te.current;return t=sr(n,t),er(n,i),r=ja(e,n,r,s,t,i),s=Ma(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Qe(e,n,i)):(_&&s&&ba(n),n.flags|=1,ae(e,n,r,i),n.child)}function $l(e,n,r,s,i){if(me(r)){var t=!0;Ks(n)}else t=!1;if(er(n,i),n.stateNode===null)Ds(e,n),Kd(n,r,s),Nt(n,r,s,i),s=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var o=a.context,d=r.contextType;typeof d=="object"&&d!==null?d=Ae(d):(d=me(r)?Tn:te.current,d=sr(n,d));var p=r.getDerivedStateFromProps,m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==s||o!==d)&&_l(n,a,s,d),Xe=!1;var h=n.memoizedState;a.state=h,ni(n,s,a,i),o=n.memoizedState,l!==s||h!==o||ue.current||Xe?(typeof p=="function"&&(Lt(n,r,p,s),o=n.memoizedState),(l=Xe||Fl(n,r,l,s,h,o,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=o),a.props=s,a.state=o,a.context=d,s=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{a=n.stateNode,Td(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:ze(n.type,l),a.props=d,m=n.pendingProps,h=a.context,o=r.contextType,typeof o=="object"&&o!==null?o=Ae(o):(o=me(r)?Tn:te.current,o=sr(n,o));var w=r.getDerivedStateFromProps;(p=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||h!==o)&&_l(n,a,s,o),Xe=!1,h=n.memoizedState,a.state=h,ni(n,s,a,i);var b=n.memoizedState;l!==m||h!==b||ue.current||Xe?(typeof w=="function"&&(Lt(n,r,w,s),b=n.memoizedState),(d=Xe||Fl(n,r,d,s,h,b,o)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,b,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,b,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=b),a.props=s,a.state=b,a.context=o,s=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),s=!1)}return _t(e,n,r,s,t,i)}function _t(e,n,r,s,i,t){nc(e,n);var a=(n.flags&128)!==0;if(!s&&!a)return i&&Tl(n,r,!1),Qe(e,n,t);s=n.stateNode,$u.current=n;var l=a&&typeof r.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&a?(n.child=tr(n,e.child,null,t),n.child=tr(n,null,l,t)):ae(e,n,l,t),n.memoizedState=s.state,i&&Tl(n,r,!0),n.child}function rc(e){var n=e.stateNode;n.pendingContext?Pl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Pl(e,n.context,!1),Ca(e,n.containerInfo)}function Hl(e,n,r,s,i){return ir(),xa(i),n.flags|=256,ae(e,n,r,s),n.child}var Ot={dehydrated:null,treeContext:null,retryLane:0};function Rt(e){return{baseLanes:e,cachePool:null,transitions:null}}function sc(e,n,r){var s=n.pendingProps,i=O.current,t=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(t=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),N(O,i&1),e===null)return Mt(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=s.children,e=s.fallback,t?(s=n.mode,t=n.child,a={mode:"hidden",children:a},!(s&1)&&t!==null?(t.childLanes=0,t.pendingProps=a):t=xi(a,s,0,null),e=Cn(e,s,r,null),t.return=n,e.return=n,t.sibling=e,n.child=t,n.child.memoizedState=Rt(r),n.memoizedState=Ot,e):Na(n,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Hu(e,n,a,s,l,i,r);if(t){t=s.fallback,a=n.mode,i=e.child,l=i.sibling;var o={mode:"hidden",children:s.children};return!(a&1)&&n.child!==i?(s=n.child,s.childLanes=0,s.pendingProps=o,n.deletions=null):(s=mn(i,o),s.subtreeFlags=i.subtreeFlags&14680064),l!==null?t=mn(l,t):(t=Cn(t,a,r,null),t.flags|=2),t.return=n,s.return=n,s.sibling=t,n.child=s,s=t,t=n.child,a=e.child.memoizedState,a=a===null?Rt(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},t.memoizedState=a,t.childLanes=e.childLanes&~r,n.memoizedState=Ot,s}return t=e.child,e=t.sibling,s=mn(t,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=r),s.return=n,s.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=s,n.memoizedState=null,s}function Na(e,n){return n=xi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ss(e,n,r,s){return s!==null&&xa(s),tr(n,e.child,null,r),e=Na(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hu(e,n,r,s,i,t,a){if(r)return n.flags&256?(n.flags&=-257,s=Zi(Error(f(422))),Ss(e,n,a,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(t=s.fallback,i=n.mode,s=xi({mode:"visible",children:s.children},i,0,null),t=Cn(t,i,a,null),t.flags|=2,s.return=n,t.return=n,s.sibling=t,n.child=s,n.mode&1&&tr(n,e.child,null,a),n.child.memoizedState=Rt(a),n.memoizedState=Ot,t);if(!(n.mode&1))return Ss(e,n,a,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var l=s.dgst;return s=l,t=Error(f(419)),s=Zi(t,s,void 0),Ss(e,n,a,s)}if(l=(a&e.childLanes)!==0,ve||l){if(s=Z,s!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|a)?0:i,i!==0&&i!==t.retryLane&&(t.retryLane=i,Ye(e,i),Le(s,e,i,-1))}return Ba(),s=Zi(Error(f(421))),Ss(e,n,a,s)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=im.bind(null,e),i._reactRetry=n,null):(e=t.treeContext,ge=dn(i.nextSibling),fe=n,_=!0,Me=null,e!==null&&(xe[ke++]=We,xe[ke++]=$e,xe[ke++]=zn,We=e.id,$e=e.overflow,zn=n),n=Na(n,s.children),n.flags|=4096,n)}function Gl(e,n,r){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ut(e.return,n,r)}function Xi(e,n,r,s,i){var t=e.memoizedState;t===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(t.isBackwards=n,t.rendering=null,t.renderingStartTime=0,t.last=s,t.tail=r,t.tailMode=i)}function ic(e,n,r){var s=n.pendingProps,i=s.revealOrder,t=s.tail;if(ae(e,n,s.children,r),s=O.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gl(e,r,n);else if(e.tag===19)Gl(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(N(O,s),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(r=n.child,i=null;r!==null;)e=r.alternate,e!==null&&ri(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),Xi(n,!1,i,r,t);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ri(e)===null){n.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Xi(n,!0,r,null,t);break;case"together":Xi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ds(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Qe(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Mn|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(f(153));if(n.child!==null){for(e=n.child,r=mn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=mn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Gu(e,n,r){switch(n.tag){case 3:rc(n),ir();break;case 5:zd(n);break;case 1:me(n.type)&&Ks(n);break;case 4:Ca(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,i=n.memoizedProps.value;N(Xs,s._currentValue),s._currentValue=i;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(N(O,O.current&1),n.flags|=128,null):r&n.child.childLanes?sc(e,n,r):(N(O,O.current&1),e=Qe(e,n,r),e!==null?e.sibling:null);N(O,O.current&1);break;case 19:if(s=(r&n.childLanes)!==0,e.flags&128){if(s)return ic(e,n,r);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(O,O.current),s)break;return null;case 22:case 23:return n.lanes=0,ec(e,n,r)}return Qe(e,n,r)}var tc,Bt,ac,lc;tc=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Bt=function(){};ac=function(e,n,r,s){var i=e.memoizedProps;if(i!==s){e=n.stateNode,An(Re.current);var t=null;switch(r){case"input":i=dt(e,i),s=dt(e,s),t=[];break;case"select":i=B({},i,{value:void 0}),s=B({},s,{value:void 0}),t=[];break;case"textarea":i=ut(e,i),s=ut(e,s),t=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ys)}pt(r,s);var a;r=null;for(d in i)if(!s.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Dr.hasOwnProperty(d)?t||(t=[]):(t=t||[]).push(d,null));for(d in s){var o=s[d];if(l=i!=null?i[d]:void 0,s.hasOwnProperty(d)&&o!==l&&(o!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in o)o.hasOwnProperty(a)&&l[a]!==o[a]&&(r||(r={}),r[a]=o[a])}else r||(t||(t=[]),t.push(d,r)),r=o;else d==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(t=t||[]).push(d,o)):d==="children"?typeof o!="string"&&typeof o!="number"||(t=t||[]).push(d,""+o):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Dr.hasOwnProperty(d)?(o!=null&&d==="onScroll"&&D("scroll",e),t||l===o||(t=[])):(t=t||[]).push(d,o))}r&&(t=t||[]).push("style",r);var d=t;(n.updateQueue=d)&&(n.flags|=4)}};lc=function(e,n,r,s){r!==s&&(n.flags|=4)};function xr(e,n){if(!_)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(n)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=r,n}function qu(e,n,r){var s=n.pendingProps;switch(ya(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return me(n.type)&&Qs(),se(n),null;case 3:return s=n.stateNode,ar(),F(ue),F(te),Ta(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ks(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(Qt(Me),Me=null))),Bt(e,n),se(n),null;case 5:Pa(n);var i=An(Yr.current);if(r=n.type,e!==null&&n.stateNode!=null)ac(e,n,r,s,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(f(166));return se(n),null}if(e=An(Re.current),ks(n)){s=n.stateNode,r=n.type;var t=n.memoizedProps;switch(s[_e]=n,s[Gr]=t,e=(n.mode&1)!==0,r){case"dialog":D("cancel",s),D("close",s);break;case"iframe":case"object":case"embed":D("load",s);break;case"video":case"audio":for(i=0;i<Er.length;i++)D(Er[i],s);break;case"source":D("error",s);break;case"img":case"image":case"link":D("error",s),D("load",s);break;case"details":D("toggle",s);break;case"input":nl(s,t),D("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!t.multiple},D("invalid",s);break;case"textarea":sl(s,t),D("invalid",s)}pt(r,t),i=null;for(var a in t)if(t.hasOwnProperty(a)){var l=t[a];a==="children"?typeof l=="string"?s.textContent!==l&&(t.suppressHydrationWarning!==!0&&xs(s.textContent,l,e),i=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(t.suppressHydrationWarning!==!0&&xs(s.textContent,l,e),i=["children",""+l]):Dr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&D("scroll",s)}switch(r){case"input":ms(s),rl(s,t,!0);break;case"textarea":ms(s),il(s);break;case"select":case"option":break;default:typeof t.onClick=="function"&&(s.onclick=Ys)}s=i,n.updateQueue=s,s!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=No(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=a.createElement(r,{is:s.is}):(e=a.createElement(r),r==="select"&&(a=e,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):e=a.createElementNS(e,r),e[_e]=n,e[Gr]=s,tc(e,n,!1,!1),n.stateNode=e;e:{switch(a=ht(r,s),r){case"dialog":D("cancel",e),D("close",e),i=s;break;case"iframe":case"object":case"embed":D("load",e),i=s;break;case"video":case"audio":for(i=0;i<Er.length;i++)D(Er[i],e);i=s;break;case"source":D("error",e),i=s;break;case"img":case"image":case"link":D("error",e),D("load",e),i=s;break;case"details":D("toggle",e),i=s;break;case"input":nl(e,s),i=dt(e,s),D("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=B({},s,{value:void 0}),D("invalid",e);break;case"textarea":sl(e,s),i=ut(e,s),D("invalid",e);break;default:i=s}pt(r,i),l=i;for(t in l)if(l.hasOwnProperty(t)){var o=l[t];t==="style"?_o(e,o):t==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Do(e,o)):t==="children"?typeof o=="string"?(r!=="textarea"||o!=="")&&Fr(e,o):typeof o=="number"&&Fr(e,""+o):t!=="suppressContentEditableWarning"&&t!=="suppressHydrationWarning"&&t!=="autoFocus"&&(Dr.hasOwnProperty(t)?o!=null&&t==="onScroll"&&D("scroll",e):o!=null&&ta(e,t,o,a))}switch(r){case"input":ms(e),rl(e,s,!1);break;case"textarea":ms(e),il(e);break;case"option":s.value!=null&&e.setAttribute("value",""+pn(s.value));break;case"select":e.multiple=!!s.multiple,t=s.value,t!=null?Kn(e,!!s.multiple,t,!1):s.defaultValue!=null&&Kn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ys)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)lc(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(f(166));if(r=An(Yr.current),An(Re.current),ks(n)){if(s=n.stateNode,r=n.memoizedProps,s[_e]=n,(t=s.nodeValue!==r)&&(e=fe,e!==null))switch(e.tag){case 3:xs(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xs(s.nodeValue,r,(e.mode&1)!==0)}t&&(n.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[_e]=n,n.stateNode=s}return se(n),null;case 13:if(F(O),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_&&ge!==null&&n.mode&1&&!(n.flags&128))Ad(),ir(),n.flags|=98560,t=!1;else if(t=ks(n),s!==null&&s.dehydrated!==null){if(e===null){if(!t)throw Error(f(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));t[_e]=n}else ir(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),t=!1}else Me!==null&&(Qt(Me),Me=null),t=!0;if(!t)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||O.current&1?Q===0&&(Q=3):Ba())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return ar(),Bt(e,n),e===null&&$r(n.stateNode.containerInfo),se(n),null;case 10:return Sa(n.type._context),se(n),null;case 17:return me(n.type)&&Qs(),se(n),null;case 19:if(F(O),t=n.memoizedState,t===null)return se(n),null;if(s=(n.flags&128)!==0,a=t.rendering,a===null)if(s)xr(t,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=ri(e),a!==null){for(n.flags|=128,xr(t,!1),s=a.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=r,r=n.child;r!==null;)t=r,e=s,t.flags&=14680066,a=t.alternate,a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return N(O,O.current&1|2),n.child}e=e.sibling}t.tail!==null&&H()>or&&(n.flags|=128,s=!0,xr(t,!1),n.lanes=4194304)}else{if(!s)if(e=ri(a),e!==null){if(n.flags|=128,s=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),xr(t,!0),t.tail===null&&t.tailMode==="hidden"&&!a.alternate&&!_)return se(n),null}else 2*H()-t.renderingStartTime>or&&r!==1073741824&&(n.flags|=128,s=!0,xr(t,!1),n.lanes=4194304);t.isBackwards?(a.sibling=n.child,n.child=a):(r=t.last,r!==null?r.sibling=a:n.child=a,t.last=a)}return t.tail!==null?(n=t.tail,t.rendering=n,t.tail=n.sibling,t.renderingStartTime=H(),n.sibling=null,r=O.current,N(O,s?r&1|2:r&1),n):(se(n),null);case 22:case 23:return Ra(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?he&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(f(156,n.tag))}function Yu(e,n){switch(ya(n),n.tag){case 1:return me(n.type)&&Qs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ar(),F(ue),F(te),Ta(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Pa(n),null;case 13:if(F(O),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(f(340));ir()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(O),null;case 4:return ar(),null;case 10:return Sa(n.type._context),null;case 22:case 23:return Ra(),null;case 24:return null;default:return null}}var As=!1,ie=!1,Qu=typeof WeakSet=="function"?WeakSet:Set,k=null;function Yn(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){V(e,n,s)}else r.current=null}function Vt(e,n,r){try{r()}catch(s){V(e,n,s)}}var ql=!1;function Ku(e,n){if(At=Hs,e=ud(),wa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,t=s.focusNode;s=s.focusOffset;try{r.nodeType,t.nodeType}catch{r=null;break e}var a=0,l=-1,o=-1,d=0,p=0,m=e,h=null;n:for(;;){for(var w;m!==r||i!==0&&m.nodeType!==3||(l=a+i),m!==t||s!==0&&m.nodeType!==3||(o=a+s),m.nodeType===3&&(a+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break n;if(h===r&&++d===i&&(l=a),h===t&&++p===s&&(o=a),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}r=l===-1||o===-1?null:{start:l,end:o}}else r=null}r=r||{start:0,end:0}}else r=null;for(Et={focusedElem:e,selectionRange:r},Hs=!1,k=n;k!==null;)if(n=k,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,k=e;else for(;k!==null;){n=k;try{var b=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,I=b.memoizedState,v=n.stateNode,c=v.getSnapshotBeforeUpdate(n.elementType===n.type?y:ze(n.type,y),I);v.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var u=n.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(f(163))}}catch(g){V(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}return b=ql,ql=!1,b}function Ur(e,n,r){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var t=i.destroy;i.destroy=void 0,t!==void 0&&Vt(n,r,t)}i=i.next}while(i!==s)}}function bi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==n)}}function Wt(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function oc(e){var n=e.alternate;n!==null&&(e.alternate=null,oc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[_e],delete n[Gr],delete n[Tt],delete n[Mu],delete n[Uu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dc(e){return e.tag===5||e.tag===3||e.tag===4}function Yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $t(e,n,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Ys));else if(s!==4&&(e=e.child,e!==null))for($t(e,n,r),e=e.sibling;e!==null;)$t(e,n,r),e=e.sibling}function Ht(e,n,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ht(e,n,r),e=e.sibling;e!==null;)Ht(e,n,r),e=e.sibling}var X=null,je=!1;function Je(e,n,r){for(r=r.child;r!==null;)cc(e,n,r),r=r.sibling}function cc(e,n,r){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(vi,r)}catch{}switch(r.tag){case 5:ie||Yn(r,n);case 6:var s=X,i=je;X=null,Je(e,n,r),X=s,je=i,X!==null&&(je?(e=X,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):X.removeChild(r.stateNode));break;case 18:X!==null&&(je?(e=X,r=r.stateNode,e.nodeType===8?Gi(e.parentNode,r):e.nodeType===1&&Gi(e,r),Br(e)):Gi(X,r.stateNode));break;case 4:s=X,i=je,X=r.stateNode.containerInfo,je=!0,Je(e,n,r),X=s,je=i;break;case 0:case 11:case 14:case 15:if(!ie&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var t=i,a=t.destroy;t=t.tag,a!==void 0&&(t&2||t&4)&&Vt(r,n,a),i=i.next}while(i!==s)}Je(e,n,r);break;case 1:if(!ie&&(Yn(r,n),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){V(r,n,l)}Je(e,n,r);break;case 21:Je(e,n,r);break;case 22:r.mode&1?(ie=(s=ie)||r.memoizedState!==null,Je(e,n,r),ie=s):Je(e,n,r);break;default:Je(e,n,r)}}function Ql(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Qu),n.forEach(function(s){var i=tm.bind(null,e,s);r.has(s)||(r.add(s),s.then(i,i))})}}function Pe(e,n){var r=n.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var t=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:X=l.stateNode,je=!1;break e;case 3:X=l.stateNode.containerInfo,je=!0;break e;case 4:X=l.stateNode.containerInfo,je=!0;break e}l=l.return}if(X===null)throw Error(f(160));cc(t,a,i),X=null,je=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(d){V(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vc(n,e),n=n.sibling}function vc(e,n){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),De(e),s&4){try{Ur(3,e,e.return),bi(3,e)}catch(y){V(e,e.return,y)}try{Ur(5,e,e.return)}catch(y){V(e,e.return,y)}}break;case 1:Pe(n,e),De(e),s&512&&r!==null&&Yn(r,r.return);break;case 5:if(Pe(n,e),De(e),s&512&&r!==null&&Yn(r,r.return),e.flags&32){var i=e.stateNode;try{Fr(i,"")}catch(y){V(e,e.return,y)}}if(s&4&&(i=e.stateNode,i!=null)){var t=e.memoizedProps,a=r!==null?r.memoizedProps:t,l=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{l==="input"&&t.type==="radio"&&t.name!=null&&Uo(i,t),ht(l,a);var d=ht(l,t);for(a=0;a<o.length;a+=2){var p=o[a],m=o[a+1];p==="style"?_o(i,m):p==="dangerouslySetInnerHTML"?Do(i,m):p==="children"?Fr(i,m):ta(i,p,m,d)}switch(l){case"input":ct(i,t);break;case"textarea":Lo(i,t);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!t.multiple;var w=t.value;w!=null?Kn(i,!!t.multiple,w,!1):h!==!!t.multiple&&(t.defaultValue!=null?Kn(i,!!t.multiple,t.defaultValue,!0):Kn(i,!!t.multiple,t.multiple?[]:"",!1))}i[Gr]=t}catch(y){V(e,e.return,y)}}break;case 6:if(Pe(n,e),De(e),s&4){if(e.stateNode===null)throw Error(f(162));i=e.stateNode,t=e.memoizedProps;try{i.nodeValue=t}catch(y){V(e,e.return,y)}}break;case 3:if(Pe(n,e),De(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Br(n.containerInfo)}catch(y){V(e,e.return,y)}break;case 4:Pe(n,e),De(e);break;case 13:Pe(n,e),De(e),i=e.child,i.flags&8192&&(t=i.memoizedState!==null,i.stateNode.isHidden=t,!t||i.alternate!==null&&i.alternate.memoizedState!==null||(_a=H())),s&4&&Ql(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(ie=(d=ie)||p,Pe(n,e),ie=d):Pe(n,e),De(e),s&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(k=e,p=e.child;p!==null;){for(m=k=p;k!==null;){switch(h=k,w=h.child,h.tag){case 0:case 11:case 14:case 15:Ur(4,h,h.return);break;case 1:Yn(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){s=h,r=h.return;try{n=s,b.props=n.memoizedProps,b.state=n.memoizedState,b.componentWillUnmount()}catch(y){V(s,r,y)}}break;case 5:Yn(h,h.return);break;case 22:if(h.memoizedState!==null){Jl(m);continue}}w!==null?(w.return=h,k=w):Jl(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,d?(t=i.style,typeof t.setProperty=="function"?t.setProperty("display","none","important"):t.display="none"):(l=m.stateNode,o=m.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=Fo("display",a))}catch(y){V(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(y){V(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pe(n,e),De(e),s&4&&Ql(e);break;case 21:break;default:Pe(n,e),De(e)}}function De(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(dc(r)){var s=r;break e}r=r.return}throw Error(f(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(Fr(i,""),s.flags&=-33);var t=Yl(e);Ht(e,t,i);break;case 3:case 4:var a=s.stateNode.containerInfo,l=Yl(e);$t(e,l,a);break;default:throw Error(f(161))}}catch(o){V(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ju(e,n,r){k=e,uc(e)}function uc(e,n,r){for(var s=(e.mode&1)!==0;k!==null;){var i=k,t=i.child;if(i.tag===22&&s){var a=i.memoizedState!==null||As;if(!a){var l=i.alternate,o=l!==null&&l.memoizedState!==null||ie;l=As;var d=ie;if(As=a,(ie=o)&&!d)for(k=i;k!==null;)a=k,o=a.child,a.tag===22&&a.memoizedState!==null?Zl(i):o!==null?(o.return=a,k=o):Zl(i);for(;t!==null;)k=t,uc(t),t=t.sibling;k=i,As=l,ie=d}Kl(e)}else i.subtreeFlags&8772&&t!==null?(t.return=i,k=t):Kl(e)}}function Kl(e){for(;k!==null;){var n=k;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ie||bi(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!ie)if(r===null)s.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:ze(n.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var t=n.updateQueue;t!==null&&Ll(n,t,s);break;case 3:var a=n.updateQueue;if(a!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Ll(n,a,r)}break;case 5:var l=n.stateNode;if(r===null&&n.flags&4){r=l;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src&&(r.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Br(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(f(163))}ie||n.flags&512&&Wt(n)}catch(h){V(n,n.return,h)}}if(n===e){k=null;break}if(r=n.sibling,r!==null){r.return=n.return,k=r;break}k=n.return}}function Jl(e){for(;k!==null;){var n=k;if(n===e){k=null;break}var r=n.sibling;if(r!==null){r.return=n.return,k=r;break}k=n.return}}function Zl(e){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{bi(4,n)}catch(o){V(n,r,o)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var i=n.return;try{s.componentDidMount()}catch(o){V(n,i,o)}}var t=n.return;try{Wt(n)}catch(o){V(n,t,o)}break;case 5:var a=n.return;try{Wt(n)}catch(o){V(n,a,o)}}}catch(o){V(n,n.return,o)}if(n===e){k=null;break}var l=n.sibling;if(l!==null){l.return=n.return,k=l;break}k=n.return}}var Zu=Math.ceil,ti=Ke.ReactCurrentDispatcher,Da=Ke.ReactCurrentOwner,Se=Ke.ReactCurrentBatchConfig,U=0,Z=null,G=null,ee=0,he=0,Qn=fn(0),Q=0,Zr=null,Mn=0,yi=0,Fa=0,Lr=null,ce=null,_a=0,or=1/0,Be=null,ai=!1,Gt=null,vn=null,Es=!1,sn=null,li=0,Nr=0,qt=null,Fs=-1,_s=0;function le(){return U&6?H():Fs!==-1?Fs:Fs=H()}function un(e){return e.mode&1?U&2&&ee!==0?ee&-ee:Nu.transition!==null?(_s===0&&(_s=Ko()),_s):(e=L,e!==0||(e=window.event,e=e===void 0?16:sd(e.type)),e):1}function Le(e,n,r,s){if(50<Nr)throw Nr=0,qt=null,Error(f(185));rs(e,r,s),(!(U&2)||e!==Z)&&(e===Z&&(!(U&2)&&(yi|=r),Q===4&&nn(e,ee)),pe(e,s),r===1&&U===0&&!(n.mode&1)&&(or=H()+500,gi&&wn()))}function pe(e,n){var r=e.callbackNode;Nv(e,n);var s=$s(e,e===Z?ee:0);if(s===0)r!==null&&ll(r),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(r!=null&&ll(r),n===1)e.tag===0?Lu(Xl.bind(null,e)):kd(Xl.bind(null,e)),zu(function(){!(U&6)&&wn()}),r=null;else{switch(Jo(s)){case 1:r=ca;break;case 4:r=Yo;break;case 16:r=Ws;break;case 536870912:r=Qo;break;default:r=Ws}r=yc(r,mc.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function mc(e,n){if(Fs=-1,_s=0,U&6)throw Error(f(327));var r=e.callbackNode;if(nr()&&e.callbackNode!==r)return null;var s=$s(e,e===Z?ee:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=oi(e,s);else{n=s;var i=U;U|=2;var t=hc();(Z!==e||ee!==n)&&(Be=null,or=H()+500,En(e,n));do try{nm();break}catch(l){pc(e,l)}while(!0);Ia(),ti.current=t,U=i,G!==null?n=0:(Z=null,ee=0,n=Q)}if(n!==0){if(n===2&&(i=yt(e),i!==0&&(s=i,n=Yt(e,i))),n===1)throw r=Zr,En(e,0),nn(e,s),pe(e,H()),r;if(n===6)nn(e,s);else{if(i=e.current.alternate,!(s&30)&&!Xu(i)&&(n=oi(e,s),n===2&&(t=yt(e),t!==0&&(s=t,n=Yt(e,t))),n===1))throw r=Zr,En(e,0),nn(e,s),pe(e,H()),r;switch(e.finishedWork=i,e.finishedLanes=s,n){case 0:case 1:throw Error(f(345));case 2:kn(e,ce,Be);break;case 3:if(nn(e,s),(s&130023424)===s&&(n=_a+500-H(),10<n)){if($s(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pt(kn.bind(null,e,ce,Be),n);break}kn(e,ce,Be);break;case 4:if(nn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,i=-1;0<s;){var a=31-Ue(s);t=1<<a,a=n[a],a>i&&(i=a),s&=~t}if(s=i,s=H()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Zu(s/1960))-s,10<s){e.timeoutHandle=Pt(kn.bind(null,e,ce,Be),s);break}kn(e,ce,Be);break;case 5:kn(e,ce,Be);break;default:throw Error(f(329))}}}return pe(e,H()),e.callbackNode===r?mc.bind(null,e):null}function Yt(e,n){var r=Lr;return e.current.memoizedState.isDehydrated&&(En(e,n).flags|=256),e=oi(e,n),e!==2&&(n=ce,ce=r,n!==null&&Qt(n)),e}function Qt(e){ce===null?ce=e:ce.push.apply(ce,e)}function Xu(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],t=i.getSnapshot;i=i.value;try{if(!Ne(t(),i))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nn(e,n){for(n&=~Fa,n&=~yi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-Ue(n),s=1<<r;e[r]=-1,n&=~s}}function Xl(e){if(U&6)throw Error(f(327));nr();var n=$s(e,0);if(!(n&1))return pe(e,H()),null;var r=oi(e,n);if(e.tag!==0&&r===2){var s=yt(e);s!==0&&(n=s,r=Yt(e,s))}if(r===1)throw r=Zr,En(e,0),nn(e,n),pe(e,H()),r;if(r===6)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kn(e,ce,Be),pe(e,H()),null}function Oa(e,n){var r=U;U|=1;try{return e(n)}finally{U=r,U===0&&(or=H()+500,gi&&wn())}}function Un(e){sn!==null&&sn.tag===0&&!(U&6)&&nr();var n=U;U|=1;var r=Se.transition,s=L;try{if(Se.transition=null,L=1,e)return e()}finally{L=s,Se.transition=r,U=n,!(U&6)&&wn()}}function Ra(){he=Qn.current,F(Qn)}function En(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Tu(r)),G!==null)for(r=G.return;r!==null;){var s=r;switch(ya(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Qs();break;case 3:ar(),F(ue),F(te),Ta();break;case 5:Pa(s);break;case 4:ar();break;case 13:F(O);break;case 19:F(O);break;case 10:Sa(s.type._context);break;case 22:case 23:Ra()}r=r.return}if(Z=e,G=e=mn(e.current,null),ee=he=n,Q=0,Zr=null,Fa=yi=Mn=0,ce=Lr=null,Sn!==null){for(n=0;n<Sn.length;n++)if(r=Sn[n],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,t=r.pending;if(t!==null){var a=t.next;t.next=i,s.next=a}r.pending=s}Sn=null}return e}function pc(e,n){do{var r=G;try{if(Ia(),Ls.current=ii,si){for(var s=R.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}si=!1}if(jn=0,J=Y=R=null,Mr=!1,Qr=0,Da.current=null,r===null||r.return===null){Q=1,Zr=n,G=null;break}e:{var t=e,a=r.return,l=r,o=n;if(n=ee,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=o,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Rl(a);if(w!==null){w.flags&=-257,Bl(w,a,l,t,n),w.mode&1&&Ol(t,d,n),n=w,o=d;var b=n.updateQueue;if(b===null){var y=new Set;y.add(o),n.updateQueue=y}else b.add(o);break e}else{if(!(n&1)){Ol(t,d,n),Ba();break e}o=Error(f(426))}}else if(_&&l.mode&1){var I=Rl(a);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Bl(I,a,l,t,n),xa(lr(o,l));break e}}t=o=lr(o,l),Q!==4&&(Q=2),Lr===null?Lr=[t]:Lr.push(t),t=a;do{switch(t.tag){case 3:t.flags|=65536,n&=-n,t.lanes|=n;var v=Jd(t,o,n);Ul(t,v);break e;case 1:l=o;var c=t.type,u=t.stateNode;if(!(t.flags&128)&&(typeof c.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(vn===null||!vn.has(u)))){t.flags|=65536,n&=-n,t.lanes|=n;var g=Zd(t,l,n);Ul(t,g);break e}}t=t.return}while(t!==null)}fc(r)}catch(x){n=x,G===r&&r!==null&&(G=r=r.return);continue}break}while(!0)}function hc(){var e=ti.current;return ti.current=ii,e===null?ii:e}function Ba(){(Q===0||Q===3||Q===2)&&(Q=4),Z===null||!(Mn&268435455)&&!(yi&268435455)||nn(Z,ee)}function oi(e,n){var r=U;U|=2;var s=hc();(Z!==e||ee!==n)&&(Be=null,En(e,n));do try{em();break}catch(i){pc(e,i)}while(!0);if(Ia(),U=r,ti.current=s,G!==null)throw Error(f(261));return Z=null,ee=0,Q}function em(){for(;G!==null;)gc(G)}function nm(){for(;G!==null&&!Ev();)gc(G)}function gc(e){var n=bc(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?fc(e):G=n,Da.current=null}function fc(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=Yu(r,n),r!==null){r.flags&=32767,G=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,G=null;return}}else if(r=qu(r,n,he),r!==null){G=r;return}if(n=n.sibling,n!==null){G=n;return}G=n=e}while(n!==null);Q===0&&(Q=5)}function kn(e,n,r){var s=L,i=Se.transition;try{Se.transition=null,L=1,rm(e,n,r,s)}finally{Se.transition=i,L=s}return null}function rm(e,n,r,s){do nr();while(sn!==null);if(U&6)throw Error(f(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var t=r.lanes|r.childLanes;if(Dv(e,t),e===Z&&(G=Z=null,ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Es||(Es=!0,yc(Ws,function(){return nr(),null})),t=(r.flags&15990)!==0,r.subtreeFlags&15990||t){t=Se.transition,Se.transition=null;var a=L;L=1;var l=U;U|=4,Da.current=null,Ku(e,r),vc(r,e),ku(Et),Hs=!!At,Et=At=null,e.current=r,Ju(r),Cv(),U=l,L=a,Se.transition=t}else e.current=r;if(Es&&(Es=!1,sn=e,li=i),t=e.pendingLanes,t===0&&(vn=null),zv(r.stateNode),pe(e,H()),n!==null)for(s=e.onRecoverableError,r=0;r<n.length;r++)i=n[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(ai)throw ai=!1,e=Gt,Gt=null,e;return li&1&&e.tag!==0&&nr(),t=e.pendingLanes,t&1?e===qt?Nr++:(Nr=0,qt=e):Nr=0,wn(),null}function nr(){if(sn!==null){var e=Jo(li),n=Se.transition,r=L;try{if(Se.transition=null,L=16>e?16:e,sn===null)var s=!1;else{if(e=sn,sn=null,li=0,U&6)throw Error(f(331));var i=U;for(U|=4,k=e.current;k!==null;){var t=k,a=t.child;if(k.flags&16){var l=t.deletions;if(l!==null){for(var o=0;o<l.length;o++){var d=l[o];for(k=d;k!==null;){var p=k;switch(p.tag){case 0:case 11:case 15:Ur(8,p,t)}var m=p.child;if(m!==null)m.return=p,k=m;else for(;k!==null;){p=k;var h=p.sibling,w=p.return;if(oc(p),p===d){k=null;break}if(h!==null){h.return=w,k=h;break}k=w}}}var b=t.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}k=t}}if(t.subtreeFlags&2064&&a!==null)a.return=t,k=a;else e:for(;k!==null;){if(t=k,t.flags&2048)switch(t.tag){case 0:case 11:case 15:Ur(9,t,t.return)}var v=t.sibling;if(v!==null){v.return=t.return,k=v;break e}k=t.return}}var c=e.current;for(k=c;k!==null;){a=k;var u=a.child;if(a.subtreeFlags&2064&&u!==null)u.return=a,k=u;else e:for(a=c;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bi(9,l)}}catch(x){V(l,l.return,x)}if(l===a){k=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,k=g;break e}k=l.return}}if(U=i,wn(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(vi,e)}catch{}s=!0}return s}finally{L=r,Se.transition=n}}return!1}function eo(e,n,r){n=lr(r,n),n=Jd(e,n,1),e=cn(e,n,1),n=le(),e!==null&&(rs(e,1,n),pe(e,n))}function V(e,n,r){if(e.tag===3)eo(e,e,r);else for(;n!==null;){if(n.tag===3){eo(n,e,r);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(vn===null||!vn.has(s))){e=lr(r,e),e=Zd(n,e,1),n=cn(n,e,1),e=le(),n!==null&&(rs(n,1,e),pe(n,e));break}}n=n.return}}function sm(e,n,r){var s=e.pingCache;s!==null&&s.delete(n),n=le(),e.pingedLanes|=e.suspendedLanes&r,Z===e&&(ee&r)===r&&(Q===4||Q===3&&(ee&130023424)===ee&&500>H()-_a?En(e,0):Fa|=r),pe(e,n)}function wc(e,n){n===0&&(e.mode&1?(n=gs,gs<<=1,!(gs&130023424)&&(gs=4194304)):n=1);var r=le();e=Ye(e,n),e!==null&&(rs(e,n,r),pe(e,r))}function im(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),wc(e,r)}function tm(e,n){var r=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(f(314))}s!==null&&s.delete(n),wc(e,r)}var bc;bc=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||ue.current)ve=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return ve=!1,Gu(e,n,r);ve=!!(e.flags&131072)}else ve=!1,_&&n.flags&1048576&&Id(n,Zs,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Ds(e,n),e=n.pendingProps;var i=sr(n,te.current);er(n,r),i=ja(null,n,s,e,i,r);var t=Ma();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,me(s)?(t=!0,Ks(n)):t=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ea(n),i.updater=wi,n.stateNode=i,i._reactInternals=n,Nt(n,s,e,r),n=_t(null,n,s,!0,t,r)):(n.tag=0,_&&t&&ba(n),ae(null,n,i,r),n=n.child),n;case 16:s=n.elementType;e:{switch(Ds(e,n),e=n.pendingProps,i=s._init,s=i(s._payload),n.type=s,i=n.tag=lm(s),e=ze(s,e),i){case 0:n=Ft(null,n,s,e,r);break e;case 1:n=$l(null,n,s,e,r);break e;case 11:n=Vl(null,n,s,e,r);break e;case 14:n=Wl(null,n,s,ze(s.type,e),r);break e}throw Error(f(306,s,""))}return n;case 0:return s=n.type,i=n.pendingProps,i=n.elementType===s?i:ze(s,i),Ft(e,n,s,i,r);case 1:return s=n.type,i=n.pendingProps,i=n.elementType===s?i:ze(s,i),$l(e,n,s,i,r);case 3:e:{if(rc(n),e===null)throw Error(f(387));s=n.pendingProps,t=n.memoizedState,i=t.element,Td(e,n),ni(n,s,null,r);var a=n.memoizedState;if(s=a.element,t.isDehydrated)if(t={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=t,n.memoizedState=t,n.flags&256){i=lr(Error(f(423)),n),n=Hl(e,n,s,r,i);break e}else if(s!==i){i=lr(Error(f(424)),n),n=Hl(e,n,s,r,i);break e}else for(ge=dn(n.stateNode.containerInfo.firstChild),fe=n,_=!0,Me=null,r=Cd(n,null,s,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ir(),s===i){n=Qe(e,n,r);break e}ae(e,n,s,r)}n=n.child}return n;case 5:return zd(n),e===null&&Mt(n),s=n.type,i=n.pendingProps,t=e!==null?e.memoizedProps:null,a=i.children,Ct(s,i)?a=null:t!==null&&Ct(s,t)&&(n.flags|=32),nc(e,n),ae(e,n,a,r),n.child;case 6:return e===null&&Mt(n),null;case 13:return sc(e,n,r);case 4:return Ca(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=tr(n,null,s,r):ae(e,n,s,r),n.child;case 11:return s=n.type,i=n.pendingProps,i=n.elementType===s?i:ze(s,i),Vl(e,n,s,i,r);case 7:return ae(e,n,n.pendingProps,r),n.child;case 8:return ae(e,n,n.pendingProps.children,r),n.child;case 12:return ae(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(s=n.type._context,i=n.pendingProps,t=n.memoizedProps,a=i.value,N(Xs,s._currentValue),s._currentValue=a,t!==null)if(Ne(t.value,a)){if(t.children===i.children&&!ue.current){n=Qe(e,n,r);break e}}else for(t=n.child,t!==null&&(t.return=n);t!==null;){var l=t.dependencies;if(l!==null){a=t.child;for(var o=l.firstContext;o!==null;){if(o.context===s){if(t.tag===1){o=He(-1,r&-r),o.tag=2;var d=t.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?o.next=o:(o.next=p.next,p.next=o),d.pending=o}}t.lanes|=r,o=t.alternate,o!==null&&(o.lanes|=r),Ut(t.return,r,n),l.lanes|=r;break}o=o.next}}else if(t.tag===10)a=t.type===n.type?null:t.child;else if(t.tag===18){if(a=t.return,a===null)throw Error(f(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Ut(a,r,n),a=t.sibling}else a=t.child;if(a!==null)a.return=t;else for(a=t;a!==null;){if(a===n){a=null;break}if(t=a.sibling,t!==null){t.return=a.return,a=t;break}a=a.return}t=a}ae(e,n,i.children,r),n=n.child}return n;case 9:return i=n.type,s=n.pendingProps.children,er(n,r),i=Ae(i),s=s(i),n.flags|=1,ae(e,n,s,r),n.child;case 14:return s=n.type,i=ze(s,n.pendingProps),i=ze(s.type,i),Wl(e,n,s,i,r);case 15:return Xd(e,n,n.type,n.pendingProps,r);case 17:return s=n.type,i=n.pendingProps,i=n.elementType===s?i:ze(s,i),Ds(e,n),n.tag=1,me(s)?(e=!0,Ks(n)):e=!1,er(n,r),Kd(n,s,i),Nt(n,s,i,r),_t(null,n,s,!0,e,r);case 19:return ic(e,n,r);case 22:return ec(e,n,r)}throw Error(f(156,n.tag))};function yc(e,n){return qo(e,n)}function am(e,n,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,n,r,s){return new am(e,n,r,s)}function Va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lm(e){if(typeof e=="function")return Va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===la)return 11;if(e===oa)return 14}return 2}function mn(e,n){var r=e.alternate;return r===null?(r=Ie(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Os(e,n,r,s,i,t){var a=2;if(s=e,typeof e=="function")Va(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case On:return Cn(r.children,i,t,n);case aa:a=8,i|=8;break;case tt:return e=Ie(12,r,n,i|2),e.elementType=tt,e.lanes=t,e;case at:return e=Ie(13,r,n,i),e.elementType=at,e.lanes=t,e;case lt:return e=Ie(19,r,n,i),e.elementType=lt,e.lanes=t,e;case zo:return xi(r,i,t,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Po:a=10;break e;case To:a=9;break e;case la:a=11;break e;case oa:a=14;break e;case Ze:a=16,s=null;break e}throw Error(f(130,e==null?e:typeof e,""))}return n=Ie(a,r,n,i),n.elementType=e,n.type=s,n.lanes=t,n}function Cn(e,n,r,s){return e=Ie(7,e,s,n),e.lanes=r,e}function xi(e,n,r,s){return e=Ie(22,e,s,n),e.elementType=zo,e.lanes=r,e.stateNode={isHidden:!1},e}function et(e,n,r){return e=Ie(6,e,null,n),e.lanes=r,e}function nt(e,n,r){return n=Ie(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function om(e,n,r,s,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wa(e,n,r,s,i,t,a,l,o){return e=new om(e,n,r,l,o),n===1?(n=1,t===!0&&(n|=8)):n=0,t=Ie(3,null,null,n),e.current=t,t.stateNode=e,t.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ea(t),e}function dm(e,n,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:s==null?null:""+s,children:e,containerInfo:n,implementation:r}}function xc(e){if(!e)return hn;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(f(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(f(171))}if(e.tag===1){var r=e.type;if(me(r))return xd(e,r,n)}return n}function kc(e,n,r,s,i,t,a,l,o){return e=Wa(r,s,!0,e,i,t,a,l,o),e.context=xc(null),r=e.current,s=le(),i=un(r),t=He(s,i),t.callback=n??null,cn(r,t,i),e.current.lanes=i,rs(e,i,s),pe(e,s),e}function ki(e,n,r,s){var i=n.current,t=le(),a=un(i);return r=xc(r),n.context===null?n.context=r:n.pendingContext=r,n=He(t,a),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=cn(i,n,a),e!==null&&(Le(e,i,a,t),Us(e,i,a)),a}function di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function no(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function $a(e,n){no(e,n),(e=e.alternate)&&no(e,n)}function cm(){return null}var Ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ha(e){this._internalRoot=e}Ii.prototype.render=Ha.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(f(409));ki(e,n,null,null)};Ii.prototype.unmount=Ha.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Un(function(){ki(null,e,null,null)}),n[qe]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var n=ed();e={blockedOn:null,target:e,priority:n};for(var r=0;r<en.length&&n!==0&&n<en[r].priority;r++);en.splice(r,0,e),r===0&&rd(e)}};function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ro(){}function vm(e,n,r,s,i){if(i){if(typeof s=="function"){var t=s;s=function(){var d=di(a);t.call(d)}}var a=kc(n,s,e,0,null,!1,!1,"",ro);return e._reactRootContainer=a,e[qe]=a.current,$r(e.nodeType===8?e.parentNode:e),Un(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var l=s;s=function(){var d=di(o);l.call(d)}}var o=Wa(e,0,!1,null,null,!1,!1,"",ro);return e._reactRootContainer=o,e[qe]=o.current,$r(e.nodeType===8?e.parentNode:e),Un(function(){ki(n,o,r,s)}),o}function Ai(e,n,r,s,i){var t=r._reactRootContainer;if(t){var a=t;if(typeof i=="function"){var l=i;i=function(){var o=di(a);l.call(o)}}ki(n,a,e,i)}else a=vm(r,n,e,i,s);return di(a)}Zo=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=Ar(n.pendingLanes);r!==0&&(va(n,r|1),pe(n,H()),!(U&6)&&(or=H()+500,wn()))}break;case 13:Un(function(){var s=Ye(e,1);if(s!==null){var i=le();Le(s,e,1,i)}}),$a(e,1)}};ua=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var r=le();Le(n,e,134217728,r)}$a(e,134217728)}};Xo=function(e){if(e.tag===13){var n=un(e),r=Ye(e,n);if(r!==null){var s=le();Le(r,e,n,s)}$a(e,n)}};ed=function(){return L};nd=function(e,n){var r=L;try{return L=e,n()}finally{L=r}};ft=function(e,n,r){switch(n){case"input":if(ct(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var s=r[n];if(s!==e&&s.form===e.form){var i=hi(s);if(!i)throw Error(f(90));Mo(s),ct(s,i)}}}break;case"textarea":Lo(e,r);break;case"select":n=r.value,n!=null&&Kn(e,!!r.multiple,n,!1)}};Bo=Oa;Vo=Un;var um={usingClientEntryPoint:!1,Events:[is,Wn,hi,Oo,Ro,Oa]},kr={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mm={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ho(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||cm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{vi=Cs.inject(mm),Oe=Cs}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=um;be.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ga(n))throw Error(f(200));return dm(e,n,null,r)};be.createRoot=function(e,n){if(!Ga(e))throw Error(f(299));var r=!1,s="",i=Ic;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Wa(e,1,!1,null,null,r,!1,s,i),e[qe]=n.current,$r(e.nodeType===8?e.parentNode:e),new Ha(n)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=Ho(n),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Un(e)};be.hydrate=function(e,n,r){if(!Si(n))throw Error(f(200));return Ai(null,e,n,!0,r)};be.hydrateRoot=function(e,n,r){if(!Ga(e))throw Error(f(405));var s=r!=null&&r.hydratedSources||null,i=!1,t="",a=Ic;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),n=kc(n,null,e,1,r??null,i,!1,t,a),e[qe]=n.current,$r(e),s)for(e=0;e<s.length;e++)r=s[e],i=r._getVersion,i=i(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new Ii(n)};be.render=function(e,n,r){if(!Si(n))throw Error(f(200));return Ai(null,e,n,!1,r)};be.unmountComponentAtNode=function(e){if(!Si(e))throw Error(f(40));return e._reactRootContainer?(Un(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};be.unstable_batchedUpdates=Oa;be.unstable_renderSubtreeIntoContainer=function(e,n,r,s){if(!Si(r))throw Error(f(200));if(e==null||e._reactInternals===void 0)throw Error(f(38));return Ai(e,n,r,!1,s)};be.version="18.3.1-next-f1338f8080-20240426";function Sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc)}catch(e){console.error(e)}}Sc(),So.exports=be;var pm=So.exports,so=pm;st.createRoot=so.createRoot,st.hydrateRoot=so.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Xr.apply(this,arguments)}var tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tn||(tn={}));const io="popstate";function hm(e){e===void 0&&(e={});function n(s,i){let{pathname:t,search:a,hash:l}=s.location;return Kt("",{pathname:t,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(s,i){return typeof i=="string"?i:Ec(i)}return fm(n,r,null,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ac(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function gm(){return Math.random().toString(36).substr(2,8)}function to(e,n){return{usr:e.state,key:e.key,idx:n}}function Kt(e,n,r,s){return r===void 0&&(r=null),Xr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ur(n):n,{state:r,key:n&&n.key||s||gm()})}function Ec(e){let{pathname:n="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function ur(e){let n={};if(e){let r=e.indexOf("#");r>=0&&(n.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function fm(e,n,r,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:t=!1}=s,a=i.history,l=tn.Pop,o=null,d=p();d==null&&(d=0,a.replaceState(Xr({},a.state,{idx:d}),""));function p(){return(a.state||{idx:null}).idx}function m(){l=tn.Pop;let I=p(),v=I==null?null:I-d;d=I,o&&o({action:l,location:y.location,delta:v})}function h(I,v){l=tn.Push;let c=Kt(y.location,I,v);d=p()+1;let u=to(c,d),g=y.createHref(c);try{a.pushState(u,"",g)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(g)}t&&o&&o({action:l,location:y.location,delta:1})}function w(I,v){l=tn.Replace;let c=Kt(y.location,I,v);d=p();let u=to(c,d),g=y.createHref(c);a.replaceState(u,"",g),t&&o&&o({action:l,location:y.location,delta:0})}function b(I){let v=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof I=="string"?I:Ec(I);return c=c.replace(/ $/,"%20"),q(v,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,v)}let y={get action(){return l},get location(){return e(i,a)},listen(I){if(o)throw new Error("A history only accepts one active listener");return i.addEventListener(io,m),o=I,()=>{i.removeEventListener(io,m),o=null}},createHref(I){return n(i,I)},createURL:b,encodeLocation(I){let v=b(I);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:w,go(I){return a.go(I)}};return y}var ao;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ao||(ao={}));function wm(e,n,r){return r===void 0&&(r="/"),bm(e,n,r)}function bm(e,n,r,s){let i=typeof n=="string"?ur(n):n,t=Tc(i.pathname||"/",r);if(t==null)return null;let a=Cc(e);ym(a);let l=null;for(let o=0;l==null&&o<a.length;++o){let d=Mm(t);l=Tm(a[o],d)}return l}function Cc(e,n,r,s){n===void 0&&(n=[]),r===void 0&&(r=[]),s===void 0&&(s="");let i=(t,a,l)=>{let o={relativePath:l===void 0?t.path||"":l,caseSensitive:t.caseSensitive===!0,childrenIndex:a,route:t};o.relativePath.startsWith("/")&&(q(o.relativePath.startsWith(s),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(s.length));let d=Pn([s,o.relativePath]),p=r.concat(o);t.children&&t.children.length>0&&(q(t.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Cc(t.children,n,p,d)),!(t.path==null&&!t.index)&&n.push({path:d,score:Cm(d,t.index),routesMeta:p})};return e.forEach((t,a)=>{var l;if(t.path===""||!((l=t.path)!=null&&l.includes("?")))i(t,a);else for(let o of Pc(t.path))i(t,a,o)}),n}function Pc(e){let n=e.split("/");if(n.length===0)return[];let[r,...s]=n,i=r.endsWith("?"),t=r.replace(/\?$/,"");if(s.length===0)return i?[t,""]:[t];let a=Pc(s.join("/")),l=[];return l.push(...a.map(o=>o===""?t:[t,o].join("/"))),i&&l.push(...a),l.map(o=>e.startsWith("/")&&o===""?"/":o)}function ym(e){e.sort((n,r)=>n.score!==r.score?r.score-n.score:Pm(n.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const xm=/^:[\w-]+$/,km=3,Im=2,Sm=1,Am=10,Em=-2,lo=e=>e==="*";function Cm(e,n){let r=e.split("/"),s=r.length;return r.some(lo)&&(s+=Em),n&&(s+=Im),r.filter(i=>!lo(i)).reduce((i,t)=>i+(xm.test(t)?km:t===""?Sm:Am),s)}function Pm(e,n){return e.length===n.length&&e.slice(0,-1).every((s,i)=>s===n[i])?e[e.length-1]-n[n.length-1]:0}function Tm(e,n,r){let{routesMeta:s}=e,i={},t="/",a=[];for(let l=0;l<s.length;++l){let o=s[l],d=l===s.length-1,p=t==="/"?n:n.slice(t.length)||"/",m=zm({path:o.relativePath,caseSensitive:o.caseSensitive,end:d},p),h=o.route;if(!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:Pn([t,m.pathname]),pathnameBase:Dm(Pn([t,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(t=Pn([t,m.pathnameBase]))}return a}function zm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=jm(e.path,e.caseSensitive,e.end),i=n.match(r);if(!i)return null;let t=i[0],a=t.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:s.reduce((d,p,m)=>{let{paramName:h,isOptional:w}=p;if(h==="*"){let y=l[m]||"";a=t.slice(0,t.length-y.length).replace(/(.)\/+$/,"$1")}const b=l[m];return w&&!b?d[h]=void 0:d[h]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:t,pathnameBase:a,pattern:e}}function jm(e,n,r){n===void 0&&(n=!1),r===void 0&&(r=!0),Ac(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,o)=>(s.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),s]}function Mm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ac(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Tc(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function Um(e,n){n===void 0&&(n="/");let{pathname:r,search:s="",hash:i=""}=typeof e=="string"?ur(e):e;return{pathname:r?r.startsWith("/")?r:Lm(r,n):n,search:Fm(s),hash:_m(i)}}function Lm(e,n){let r=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function rt(e,n,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Nm(e){return e.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function zc(e,n){let r=Nm(e);return n?r.map((s,i)=>i===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function jc(e,n,r,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=ur(e):(i=Xr({},e),q(!i.pathname||!i.pathname.includes("?"),rt("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),rt("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),rt("#","search","hash",i)));let t=e===""||i.pathname==="",a=t?"/":i.pathname,l;if(a==null)l=r;else{let m=n.length-1;if(!s&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}l=m>=0?n[m]:"/"}let o=Um(i,l),d=a&&a!=="/"&&a.endsWith("/"),p=(t||a===".")&&r.endsWith("/");return!o.pathname.endsWith("/")&&(d||p)&&(o.pathname+="/"),o}const Pn=e=>e.join("/").replace(/\/\/+/g,"/"),Dm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_m=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Om(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mc=["post","put","patch","delete"];new Set(Mc);const Rm=["get",...Mc];new Set(Rm);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},es.apply(this,arguments)}const qa=S.createContext(null),Bm=S.createContext(null),as=S.createContext(null),Ei=S.createContext(null),Dn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Uc=S.createContext(null);function ls(){return S.useContext(Ei)!=null}function os(){return ls()||q(!1),S.useContext(Ei).location}function Lc(e){S.useContext(as).static||S.useLayoutEffect(e)}function Vm(){let{isDataRoute:e}=S.useContext(Dn);return e?np():Wm()}function Wm(){ls()||q(!1);let e=S.useContext(qa),{basename:n,future:r,navigator:s}=S.useContext(as),{matches:i}=S.useContext(Dn),{pathname:t}=os(),a=JSON.stringify(zc(i,r.v7_relativeSplatPath)),l=S.useRef(!1);return Lc(()=>{l.current=!0}),S.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){s.go(d);return}let m=jc(d,JSON.parse(a),t,p.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:Pn([n,m.pathname])),(p.replace?s.replace:s.push)(m,p.state,p)},[n,s,a,t,e])}function $m(e,n){return Hm(e,n)}function Hm(e,n,r,s){ls()||q(!1);let{navigator:i}=S.useContext(as),{matches:t}=S.useContext(Dn),a=t[t.length-1],l=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let d=os(),p;if(n){var m;let I=typeof n=="string"?ur(n):n;o==="/"||(m=I.pathname)!=null&&m.startsWith(o)||q(!1),p=I}else p=d;let h=p.pathname||"/",w=h;if(o!=="/"){let I=o.replace(/^\//,"").split("/");w="/"+h.replace(/^\//,"").split("/").slice(I.length).join("/")}let b=wm(e,{pathname:w}),y=Km(b&&b.map(I=>Object.assign({},I,{params:Object.assign({},l,I.params),pathname:Pn([o,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?o:Pn([o,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),t,r,s);return n&&y?S.createElement(Ei.Provider,{value:{location:es({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:tn.Pop}},y):y}function Gm(){let e=ep(),n=Om(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),r?S.createElement("pre",{style:i},r):null,null)}const qm=S.createElement(Gm,null);class Ym extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?S.createElement(Dn.Provider,{value:this.props.routeContext},S.createElement(Uc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qm(e){let{routeContext:n,match:r,children:s}=e,i=S.useContext(qa);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),S.createElement(Dn.Provider,{value:n},s)}function Km(e,n,r,s){var i;if(n===void 0&&(n=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var t;if(!r)return null;if(r.errors)e=r.matches;else if((t=s)!=null&&t.v7_partialHydration&&n.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let p=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||q(!1),a=a.slice(0,Math.min(a.length,p+1))}let o=!1,d=-1;if(r&&s&&s.v7_partialHydration)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:h,errors:w}=r,b=m.route.loader&&h[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||b){o=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,h)=>{let w,b=!1,y=null,I=null;r&&(w=l&&m.route.id?l[m.route.id]:void 0,y=m.route.errorElement||qm,o&&(d<0&&h===0?(rp("route-fallback"),b=!0,I=null):d===h&&(b=!0,I=m.route.hydrateFallbackElement||null)));let v=n.concat(a.slice(0,h+1)),c=()=>{let u;return w?u=y:b?u=I:m.route.Component?u=S.createElement(m.route.Component,null):m.route.element?u=m.route.element:u=p,S.createElement(Qm,{match:m,routeContext:{outlet:p,matches:v,isDataRoute:r!=null},children:u})};return r&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?S.createElement(Ym,{location:r.location,revalidation:r.revalidation,component:y,error:w,children:c(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):c()},null)}var Nc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nc||{}),Dc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Dc||{});function Jm(e){let n=S.useContext(qa);return n||q(!1),n}function Zm(e){let n=S.useContext(Bm);return n||q(!1),n}function Xm(e){let n=S.useContext(Dn);return n||q(!1),n}function Fc(e){let n=Xm(),r=n.matches[n.matches.length-1];return r.route.id||q(!1),r.route.id}function ep(){var e;let n=S.useContext(Uc),r=Zm(),s=Fc();return n!==void 0?n:(e=r.errors)==null?void 0:e[s]}function np(){let{router:e}=Jm(Nc.UseNavigateStable),n=Fc(Dc.UseNavigateStable),r=S.useRef(!1);return Lc(()=>{r.current=!0}),S.useCallback(function(i,t){t===void 0&&(t={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,es({fromRouteId:n},t)))},[e,n])}const oo={};function rp(e,n,r){oo[e]||(oo[e]=!0)}function sp(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ip(e){let{to:n,replace:r,state:s,relative:i}=e;ls()||q(!1);let{future:t,static:a}=S.useContext(as),{matches:l}=S.useContext(Dn),{pathname:o}=os(),d=Vm(),p=jc(n,zc(l,t.v7_relativeSplatPath),o,i==="path"),m=JSON.stringify(p);return S.useEffect(()=>d(JSON.parse(m),{replace:r,state:s,relative:i}),[d,m,i,r,s]),null}function Jt(e){q(!1)}function tp(e){let{basename:n="/",children:r=null,location:s,navigationType:i=tn.Pop,navigator:t,static:a=!1,future:l}=e;ls()&&q(!1);let o=n.replace(/^\/*/,"/"),d=S.useMemo(()=>({basename:o,navigator:t,static:a,future:es({v7_relativeSplatPath:!1},l)}),[o,l,t,a]);typeof s=="string"&&(s=ur(s));let{pathname:p="/",search:m="",hash:h="",state:w=null,key:b="default"}=s,y=S.useMemo(()=>{let I=Tc(p,o);return I==null?null:{location:{pathname:I,search:m,hash:h,state:w,key:b},navigationType:i}},[o,p,m,h,w,b,i]);return y==null?null:S.createElement(as.Provider,{value:d},S.createElement(Ei.Provider,{children:r,value:y}))}function ap(e){let{children:n,location:r}=e;return $m(Zt(n),r)}new Promise(()=>{});function Zt(e,n){n===void 0&&(n=[]);let r=[];return S.Children.forEach(e,(s,i)=>{if(!S.isValidElement(s))return;let t=[...n,i];if(s.type===S.Fragment){r.push.apply(r,Zt(s.props.children,t));return}s.type!==Jt&&q(!1),!s.props.index||!s.props.children||q(!1);let a={id:s.props.id||t.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(a.children=Zt(s.props.children,t)),r.push(a)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const lp="6";try{window.__reactRouterVersion=lp}catch{}const op="startTransition",co=sv[op];function dp(e){let{basename:n,children:r,future:s,window:i}=e,t=S.useRef();t.current==null&&(t.current=hm({window:i,v5Compat:!0}));let a=t.current,[l,o]=S.useState({action:a.action,location:a.location}),{v7_startTransition:d}=s||{},p=S.useCallback(m=>{d&&co?co(()=>o(m)):o(m)},[o,d]);return S.useLayoutEffect(()=>a.listen(p),[a,p]),S.useEffect(()=>sp(s),[s]),S.createElement(tp,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:a,future:s})}var vo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vo||(vo={}));var uo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(uo||(uo={}));function cp(){const{pathname:e,search:n,hash:r}=os();return S.useEffect(()=>{if(r){const s=document.querySelector(r);if(s){s.scrollIntoView({behavior:"smooth"});return}}window.scrollTo(0,0)},[e,n,r]),null}const vp=e=>{if(!e)return{content:"",title:document.title,bodyClass:document.body.className};const n=e.match(/<title>([\s\S]*?)<\/title>/i),r=n?n[1].trim():document.title,s=e.match(/<body[^>]*>/i);let i=document.body.className;if(s){const o=s[0].match(/class\s*=\s*"([^"]*)"/i);i=o?o[1]:i}const t=e.match(/<body[^>]*>([\s\S]*?)<\/body>/i);return{content:(t?t[1]:e).replace(/<script[\s\S]*?<\/script>/gi,""),title:r,bodyClass:i}};function up({html:e}){const{content:n,title:r,bodyClass:s}=S.useMemo(()=>vp(e),[e]);return S.useEffect(()=>{const i=document.title;return r&&(document.title=r),()=>{document.title=i}},[r]),S.useEffect(()=>{const i=document.body.className;return s&&(document.body.className=s),()=>{document.body.className=i}},[s]),S.useEffect(()=>{window.dispatchEvent(new Event("resize"))},[n]),Te.jsx("div",{dangerouslySetInnerHTML:{__html:n}})}const mp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark no-top no-bottom text-light jarallax relative mh-800" data-video-src="mp4:video/2.mp4">\r
            <div class="gradient-edge-top op-6 h-50 color"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="abs abs-centered z-2 w-80">\r
                <div class="container wow scaleIn" data-wow-duration="3s">\r
                    <div class="row">\r
                        <div class="col-lg-12 text-center">\r
                            <div class="subtitle">The Future of Intelligence</div>\r
                            <h1 class="fs-120 text-uppercase fs-sm-12vw mb-4 lh-1">AI Summit 2025</h1>\r
\r
                            <div class="d-block d-md-flex justify-content-center">\r
                                <div class="d-flex justify-content-center align-items-center mx-4">\r
                                    <i class="fa fa-calendar id-color me-3"></i>\r
                                    <h4 class="mb-0">October 1–5, 2025</h4>\r
                                </div>\r
\r
                                <div class="d-flex justify-content-center align-items-center mx-4">\r
                                    <i class="fa fa-location-pin id-color me-3"></i>\r
                                    <h4 class="mb-0">San Francisco, CA</h4>\r
                                </div>\r
                            </div>\r
\r
                            <div class="spacer-single"></div>\r
\r
                            <a class="btn-main mx-2 fx-slide" href="#section-tickets"><span>Get Tickets</span></a>\r
                            <a class="btn-main btn-line mx-2 fx-slide" href="#section-schedule"><span>View Schedule</span></a>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div class="abs w-100 start-0 bottom-0 z-3">\r
                <div class="container">\r
                    <div class="sm-hide border-white-op-3 p-40 py-4 rounded-1 bg-blur relative overflow-hidden wow fadeInUp">\r
                        <div class="gradient-edge-bottom color start-0 h-50 op-5"></div>\r
                        <div class="row g-4 justify-content-between align-items-center relative z-2">\r
                            <div class="col-lg-3">\r
                                <h2 class="mb-0">Hurry Up!</h2>\r
                                <h4 class="mb-0">Book Your Seat Now</h4>\r
                            </div>\r
                            <div class="col-lg-4">\r
                                <div id="defaultCountdown" class="pt-2"></div>\r
                            </div>\r
                            <div class="col-lg-4">\r
                                <div class="d-flex">\r
                                    <i class="fs-60 icofont-google-map id-color"></i>\r
                                    <div class="ms-3">\r
                                        <h4 class="mb-0">121 AI Blvd,<br>San Francisco BCA 94107</h4>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-about" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row  gx-5 align-items-center justify-content-between">\r
                    <div class="col-lg-6">\r
                          <div class="me-lg-5 pe-lg-5 py-5 my-5">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".2s">About the Event</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".4s">A Global Gathering of AI Innovators</h2>\r
                              <p class="wow fadeInUp" data-wow-delay=".6s">Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity, and the future\r
                              of work.</p>\r
\r
                              <ul class="ul-check">\r
                                  <li class="wow fadeInUp" data-wow-delay=".8s">5 days of keynotes, workshops, and networking</li>\r
                                  <li class="wow fadeInUp" data-wow-delay=".9s">50 world-class speakers</li>\r
                                  <li class="wow fadeInUp" data-wow-delay="1s">Startup showcase and live demos</li>\r
                              </ul>\r
\r
                          </div>\r
                    </div>\r
\r
                    <div class="col-lg-5">\r
                        <div class="wow scaleIn">\r
                            <img src="images/misc/c1.webp" class="w-100 rotate-animation" alt="">\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="section-dark p-0" aria-label="section">\r
            <div class="bg-color text-light d-flex py-4 lh-1 rot-2">\r
              <div class="de-marquee-list-1 wow fadeInLeft" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
\r
            <div class="bg-color-2 text-light d-flex py-4 lh-1 rot-min-1 mt-min-20">\r
              <div class="de-marquee-list-2 wow fadeInRight" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-why-attend" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-6 offset-lg-3 text-center">\r
                        <div class="subtitle wow fadeInUp mb-3">Why Attend</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">What You’ll Gain</h2>\r
                        <p class="lead mb-0 wow fadeInUp">Hear from global AI pioneers, industry disruptors, and bold thinkers shaping the future across every domain.</p>\r
                    </div>\r
                </div>\r
\r
                <div class="spacer-single"></div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Cutting-Edge Knowledge</h4>\r
                                        <p class="mb-0">Stay ahead of the curve with insights from AI leaders shaping tomorrow’s technology.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s3.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Hands-On Learning</h4>\r
                                        <p class="mb-0">Join live workshops and labs to build practical skills in AI and machine learning.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s4.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Global Networking</h4>\r
                                        <p class="mb-0">Meet developers, founders, and researchers from around the world to collaborate and grow.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s5.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Startup Showcase</h4>\r
                                        <p class="mb-0">Explore the latest AI tools and ideas from promising startups and research labs.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s6.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>AI Career Boost</h4>\r
                                        <p class="mb-0">Access exclusive job fairs, mentorship sessions, and recruiting events to grow your career.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s7.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Ethics & Future</h4>\r
                                        <p class="mb-0">Engage in vital conversations around AI ethics, policy, and the future of intelligence.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s8.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/2.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container relative z-4">\r
                <div class="row align-items-center g-5">\r
                    <div class="col-md-4">\r
                        <div class="relative w-100 d-inline-block pe-5">\r
                            <div class="abs bg-color w-80px h-80px rounded-1 text-center end-0 z-2 wow scaleIn">\r
                                <i class="icofont-quote-left text-white fs-40 d-block pt-3"></i>\r
                            </div>\r
                            <img src="images/misc/s9.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-md-8">\r
                        <h3 class="fs-32 mb-4 wow fadeInUp">“Artificial intelligence is advancing rapidly, and while it offers immense opportunity, it also poses significant risks. If not properly regulated and aligned with human values, AI could become a fundamental threat to civilization.”</h3>\r
\r
                        <span>Elon Musk</span>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-speakers" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-6 relative z-3">\r
                          <div class="text-center">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Speakers</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".2s">Meet the Visionaries</h2>\r
                              <p class="lead wow fadeInUp">Whether it's a quick refresh or a deep clean transformation, our expert touch leaves your home or office shining.</p>\r
                          </div>\r
                    </div>\r
                </div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/1.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Joshua Henry</h3>\r
                                    <span>Chief AI Scientist, OpenAI</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/2.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Leila Zhang</h3>\r
                                    <span>VP of Machine Learning, Google</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/3.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Carlos Rivera</h3>\r
                                    <span>Founder & CEO, NeuralCore</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/1.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container">\r
                <div class="row g-4">\r
\r
                    <div class="col-md-12 wow fadeInUp">\r
                        <div class="owl-6 no-alpha owl-carousel owl-theme wow mask-right">\r
                            <img src="images/logo-light/1.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/2.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/3.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/4.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/5.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/6.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/7.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/8.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/9.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/10.webp" class="w-100 px-4" alt="">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-schedule" class="bg-dark section-dark text-light">\r
            <div class="container">\r
              <div class="row g-4 gx-5 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Event Schedule</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">5 Days of AI Excellence</h2>\r
                </div>\r
              </div>\r
              <div class="row g-4 gx-5 justify-content-center wow fadeInUp">\r
                <div class="col-lg-12">\r
                    <div class="de-tab plain">\r
                        <ul class="d-tab-nav mb-4 pb-4 d-flex justify-content-between">\r
                            <li class="active-tab">\r
                                <h3>Day 1</h3>\r
                                Oct 1, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 2</h3>\r
                                Oct 2, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 3</h3>\r
                                Oct 3, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 4</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 5</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                        </ul>\r
                        <ul class="d-tab-content pt-3 wow fadeInUp">   \r
                            <!-- day 1 -->                        \r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            08:00 – 10:00 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/1.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Joshua Henry</h5>\r
                                                    AI Research Lead, DeepTech Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Opening Keynote – The State of AI 2025</h3>\r
                                            <p class="fs-15 mb-0">Kick off the event with an insightful overview of where artificial intelligence is headed. Ava will explore breakthroughs, global shifts, and what’s next in deep learning, generative models, and AI ethics.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            12:00 – 14:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/2.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    VP of Machine Learning, Google\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building Human-Centered AI Products</h3>\r
                                            <p class="fs-15 mb-0">This session covers how to design AI solutions that prioritize usability, fairness, and real-world impact. Bring your laptop—hands-on UX exercises included.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 18:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/3.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Carlos Rivera</h5>\r
                                                    Founder & CEO, NeuralCore\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI Policy & Regulation – A Global Overview</h3>\r
                                            <p class="fs-15 mb-0">Learn how nations and organizations are approaching AI governance, including frameworks for data privacy, bias mitigation, and accountability in model deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            20:00 – 22:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/4.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Maria Gonzalez</h5>\r
                                                    Founder & CEO, SynthCore AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building a Startup with AI at the Core</h3>\r
                                            <p class="fs-15 mb-0">Marco shares his journey launching an AI-first startup. Discover tips on tech stacks, team-building, funding, and scaling responsibly.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                            </li>\r
\r
                            <!-- day 2 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/5.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    Head of AI Strategy, VisionFlow\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical AI — From Theory to Practice</h3>\r
                                            <p class="fs-15 mb-0">Explore how leading companies are implementing fairness, accountability, and transparency in real-world AI systems across healthcare and finance.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/6.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lisa Zhang</h5>\r
                                                    AI Ethics Researcher, FairAI Group\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Bias in Data — Hidden Dangers in AI Pipelines</h3>\r
                                            <p class="fs-15 mb-0">Lisa dives deep into the causes of bias in training data and showcases methods to detect and mitigate harm before deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/7.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Markus Blom</h5>\r
                                                    CTO, SynthMind AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Generative Models Beyond Text</h3>\r
                                            <p class="fs-15 mb-0">A practical tour of the next generation of multimodal models generating images, video, and even 3D environments with AI.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/8.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Priya Natarajan</h5>\r
                                                    Lead Engineer, CogniWare\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI-Powered Interfaces</h3>\r
                                            <p class="fs-15 mb-0">Learn how to embed conversational AI into web and mobile apps using modern open-source frameworks and API-first design.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 3 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/9.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Sofia Romero</h5>\r
                                                    ML Engineer, NeuronEdge\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Transformers in 2025 — What's Next?</h3>\r
                                            <p class="fs-15 mb-0">A technical session diving into the future of transformer architectures, memory optimization, and scaling challenges.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/10.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Tomás Eriksson</h5>\r
                                                    Founder, RealSim AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Synthetic Data Generation for Training</h3>\r
                                            <p class="fs-15 mb-0">Tomás shares tools and techniques for creating high-quality synthetic datasets that speed up training and reduce risk.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/11.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Aisha Mensah</h5>\r
                                                    Senior AI Strategist, Datavine\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Panel: AI Regulation & Global Policy Outlook</h3>\r
                                            <p class="fs-15 mb-0">Top voices discuss the global AI policy landscape, upcoming legislation, and how it will shape the future of AI deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/12.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leo Tanaka</h5>\r
                                                    Robotics Engineer, MetaForm\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Embodied AI in Robotics</h3>\r
                                            <p class="fs-15 mb-0">Discover how AI is powering next-gen robotics for manufacturing, logistics, and autonomous mobility through real-time interaction models.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 4 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/13.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Nina Köhler</h5>\r
                                                    Chief Product Officer, SynthOS\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI in Product Design — From Concept to Launch</h3>\r
                                            <p class="fs-15 mb-0">Nina shares how AI is revolutionizing product development, from ideation to real-time user feedback integration.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/14.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Emmanuel Ruiz</h5>\r
                                                    CEO, NextCore Analytics\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Scaling AI Infrastructure for Enterprise</h3>\r
                                            <p class="fs-15 mb-0">Explore key considerations when deploying and managing scalable, secure, and cost-effective AI systems in the enterprise space.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/15.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Isabelle Chen</h5>\r
                                                    Head of Language Models, LumoAI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Multilingual AI — Global Challenges & Innovations</h3>\r
                                            <p class="fs-15 mb-0">How modern LLMs are overcoming linguistic bias, translation errors, and dialect diversity in global applications.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/16.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Connor Walsh</h5>\r
                                                    Cloud AI Architect, SkyStack\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI Pipelines in the Cloud</h3>\r
                                            <p class="fs-15 mb-0">Hands-on session building a full AI workflow using serverless tech, vector databases, and model deployment strategies.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                                \r
                            </li>\r
\r
                            <!-- day 5 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/17.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Elena Greco</h5>\r
                                                    Ethics Advisor, Global AI Forum\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical Design in AI — A Human-Centered Approach</h3>\r
                                            <p class="fs-15 mb-0">A deep dive into responsible AI, highlighting bias mitigation, fairness, transparency, and global implications of autonomous systems.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/18.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Marcus Dlamini</h5>\r
                                                    Founder, EduAI Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Personalized Learning with AI</h3>\r
                                            <p class="fs-15 mb-0">Explore how AI-driven platforms are transforming education with adaptive learning paths and dynamic content delivery.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/19.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lara Nguyen</h5>\r
                                                    GenAI Director, NovaSynth\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Creative AI — From Text to Video</h3>\r
                                            <p class="fs-15 mb-0">Lara demonstrates how generative AI is transforming content creation, with real-time demos in video, audio, and image generation.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/20.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Dr. Hassan Al-Mansour</h5>\r
                                                    Lead Data Scientist, FutureVision\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Closing Keynote: AI & Humanity — Co-Evolution or Collapse?</h3>\r
                                            <p class="fs-15 mb-0">A visionary closing on AI’s long-term trajectory, human-AI collaboration, and the existential questions we must answer now.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                        </ul>\r
                    </div>\r
                </div>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-tickets" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/7.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-7"></div>\r
\r
            <div class="container relative z-2">\r
                <div class="row g-4 gx-5 justify-content-center">\r
                  <div class="col-lg-6 text-center">\r
                      <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Ticket Options</div>\r
                      <h2 class="wow fadeInUp" data-wow-delay=".2s">Choose Your Pass</h2>\r
                      <p class="lead wow fadeInUp" data-wow-delay=".4s">Select the perfect ticket for your needs and gain access to exclusive sessions, workshops, and more.</p>\r
                  </div>\r
                </div>\r
\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-12">\r
                        <div class="owl-carousel owl-theme owl-3-dots wow mask-right">\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Standard</h2>\r
                                    <h4 class="mb-4">$299</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
\r
                                <div class="relative overflow-hidden">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and sessions.</li>\r
                                            <li>Admission to exhibitions and demos.</li>\r
                                            <li>Networking opportunities.</li>\r
                                            <li>Digital materials and session recordings.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                                    \r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>VIP</h2>\r
                                    <h4 class="mb-4">$699</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Standard benefits.</li>\r
                                            <li>VIP lounge access and exclusive events.</li>\r
                                            <li>Front-row seating and priority workshop access.</li>\r
                                            <li>VIP swag bag and exclusive content.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Full Access</h2>\r
                                    <h4 class="mb-4">$1199</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All VIP benefits.</li>\r
                                            <li>Access to all workshops and breakout sessions.</li>\r
                                            <li>Personalized session scheduling.</li>\r
                                            <li>Speaker meet-and-greet and after-party access.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Exclusive Access</h2>\r
                                    <h4 class="mb-4">$2499</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Full Access Pass benefits.</li>\r
                                            <li>Private one-on-one sessions with speakers.</li>\r
                                            <li>Priority access to all events and workshops.</li>\r
                                            <li>Exclusive VIP gala and after-party invitations.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Student</h2>\r
                                    <h4 class="mb-4">$149</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and workshops.</li>\r
                                            <li>Student-specific networking events.</li>\r
                                            <li>Discounted online resources post-event.</li>\r
                                            <li>Special student meetups for networking.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Virtual</h2>\r
                                    <h4 class="mb-4">$99</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Live-streamed keynotes and workshops.</li>\r
                                            <li>On-demand access to recorded sessions.</li>\r
                                            <li>Interactive Q&A with speakers.</li>\r
                                            <li>Virtual networking and digital swag.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-venue" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Event Location</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Location & Venue</h2>\r
                    <p class="lead wow fadeInUp" data-wow-delay=".6s">Join us in the heart of innovation at San Francisco Tech Pavilion—surrounded by top hotels, transit, and culture.</p>\r
                </div>\r
            </div>\r
\r
            <div class="row g-4">\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l1.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l2.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="clearfix"></div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".2s">\r
                        <i class="fs-60 id-color icofont-google-map"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Address</h4>\r
                            <p>121 AI Blvd, San Francisco, CA 94107</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".4s">\r
                        <i class="fs-60 id-color icofont-phone"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Phone</h4>\r
                            <p>Call: +1 123 456 789</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".6s">\r
                        <i class="fs-60 id-color icofont-envelope"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Email</h4>\r
                            <p>contact@aivent.com</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
          </div>\r
        </section>\r
\r
        <section  id="section-faq" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-5">\r
                        <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Everything You Need to Know</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>\r
                    </div>\r
\r
                    <div class="col-lg-7">\r
                        <div class="accordion s2 wow fadeInUp">\r
                            <div class="accordion-section">\r
                                <div class="accordion-section-title" data-tab="#accordion-a1">\r
                                    What is the AI Summit 2025?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a1">\r
                                    The AI Summit 2025 is a premier event gathering leading AI experts, thought leaders, and innovators. It features keynotes, workshops, panels, and networking opportunities focusing on the latest advancements in artificial intelligence.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a2">\r
                                    When and where will the event be held?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a2">\r
                                    The AI Summit 2025 will take place from **[Event Dates]** at **[Event Location]**. More details about the venue and directions will be provided closer to the event.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a3">\r
                                    How can I register for the event?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a3">\r
                                    You can register for the AI Summit 2025 through our official website. Simply choose your ticket type and fill out the registration form.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a4">\r
                                    What ticket options are available?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a4">\r
                                    We offer a range of ticket options, including Standard, VIP, Full Access Pass, Student, and Virtual tickets. You can find more details about each ticket type on our [Tickets Page](#).\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a5">\r
                                    Can I transfer my ticket to someone else?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a5">\r
                                    Tickets are non-transferable. If you are unable to attend, please contact our support team for assistance.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a6">\r
                                    Will there be virtual participation?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a6">\r
                                    Yes! For those who can’t attend in person, we offer a **Virtual Ticket**. This provides access to live-streamed sessions, workshops, and networking opportunities online.\r
                                </div>\r
                            </div>\r
                        </div>                        \r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/3.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-8 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Stay in the Loop</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Join the Future of Innovation</h2>\r
                    <p class="wow fadeInUp" data-wow-delay=".4s">\r
                      Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We'll share other exciting news and exclusive offers, too.\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <form class="row justify-content-center">\r
              <div class="col-md-6 col-lg-4 mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <input type="email" class="form-control form-control-lg text-center" placeholder="Enter Your Email Address" required>\r
              </div>\r
              <div class="col-auto mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <button type="submit" class="btn bg-color text-light btn-lg px-4">SIGN UP</button>\r
              </div>\r
\r
              <div class="col-12 text-center wow fadeInUp" data-wow-delay=".8s">\r
                <div class="form-check d-flex justify-content-center mb-2">\r
                  <input class="form-check-input me-2" type="checkbox" value="" id="updatesCheck" checked>\r
                  <label class="form-check-label" for="updatesCheck">\r
                    Keep me updated on other news and exclusive offers\r
                  </label>\r
                </div>\r
                <p class="small text-muted wow fadeInUp" data-wow-delay="1s">\r
                  Note: You can opt-out at any time. See our <a href="#" class="text-decoration-underline">Privacy Policy</a> and <a href="#" class="text-decoration-underline">Terms</a>.\r
                </p>\r
              </div>\r
            </form>\r
          </div>\r
        </section>\r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/countdown-custom.js"><\/script>\r
    <script src="js/custom-marquee.js"><\/script>\r
\r
</body>\r
\r
</html>`,pp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark text-light pt-80 pb-0 jarallax relative overflow-hidden jarallax">\r
            <img src="images/background/8.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-bottom h-10"></div>\r
            <div class="sw-overlay op-5"></div>\r
            \r
            <div class="container">\r
              <div class="row g-4 gx-5 align-items-center">\r
                <div class="col-lg-6">\r
                  <div class="relative">\r
                    <img src="images/misc/c2.webp" class="w-100 wow fadeInUp" data-wow-delay=".3s" alt="">\r
                  </div>                        \r
                </div>\r
                <div class="col-lg-6">\r
                  <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Welcome to Aivent</div>\r
                  <h1 class="wow fadeInUp" data-wow-delay=".2s">Empowering the Future with Artificial Intelligence</h1>\r
                  <p class="col-lg-10 wow fadeInUp" data-wow-delay=".4s">\r
                    Join global innovators, researchers, and industry leaders at Aivent — a premier conference exploring real-world applications of AI. Discover cutting-edge technologies, gain insights from experts, and shape the next wave of intelligent solutions.\r
                  </p>\r
                  <a class="btn-main fx-slide mb10 mb-3 wow fadeInUp" data-wow-delay=".6s" href="tickets.html"><span>Get Ticket</span></a>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="spacer-single"></div>\r
            <div class="spacer-double"></div>\r
\r
\r
            <div class="abs w-100 start-0 bottom-0 z-3">\r
                <div class="container">\r
                    <div class="sm-hide border-white-op-3 p-40 py-4 rounded-1 bg-blur relative overflow-hidden wow fadeInUp">\r
                        <div class="gradient-edge-bottom color start-0 h-50 op-5"></div>\r
                        <div class="row g-4 justify-content-between align-items-center relative z-2">\r
                            <div class="col-lg-3">\r
                                <h2 class="mb-0">Hurry Up!</h2>\r
                                <h4 class="mb-0">Book Your Seat Now</h4>\r
                            </div>\r
                            <div class="col-lg-4">\r
                                <div id="defaultCountdown" class="pt-2"></div>\r
                            </div>\r
                            <div class="col-lg-4">\r
                                <div class="d-flex">\r
                                    <i class="fs-60 icofont-google-map id-color"></i>\r
                                    <div class="ms-3">\r
                                        <h4 class="mb-0">121 AI Blvd,<br>San Francisco BCA 94107</h4>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
        </section>\r
\r
        <section id="section-about" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row  gx-5 align-items-center">\r
                    <div class="col-lg-6">\r
                          <div class="me-lg-5 pe-lg-5 py-5 my-5">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".2s">About the Event</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".4s">A Global Gathering of AI Innovators</h2>\r
                              <p class="wow fadeInUp" data-wow-delay=".6s">Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity, and the future\r
                              of work.</p>\r
\r
                              <ul class="ul-check">\r
                                  <li class="wow fadeInUp" data-wow-delay=".8s">5 days of keynotes, workshops, and networking</li>\r
                                  <li class="wow fadeInUp" data-wow-delay=".9s">50 world-class speakers</li>\r
                                  <li class="wow fadeInUp" data-wow-delay="1s">Startup showcase and live demos</li>\r
                              </ul>\r
\r
                          </div>\r
                    </div>\r
\r
                    <div class="col-lg-6">\r
                        <div class="row g-4">\r
                            <div class="col-6">\r
                                <div class="relative overflow-hidden rounded-1 wow scale-in-mask mb-4">\r
                                    <img src="images/misc/s1.webp" class="img-fluid" alt="">\r
                                    <div class="gradient-edge-bottom h-50"></div>\r
                                </div>\r
                                <div class="col-12 text-center">\r
                                    <div class="bg-color text-light p-30 rounded-1 wow scale-in-mask">\r
                                        <div class="de_count">\r
                                            <h2 class="mb-0"><span class="timer" data-to="50" data-speed="3000"></span></h2>\r
                                            <div>World-class Speakers</div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="col-6">\r
                                <div class="spacer-double sm-hide"></div>\r
                                <div class="col-12 text-center">\r
                                    <div class="bg-color-2 text-light p-30 rounded-1 wow scale-in-mask">\r
                                        <div class="de_count">\r
                                            <h2 class="mb-0"><span class="timer" data-to="5" data-speed="3000"></span></h2>\r
                                            <div>Days of Event</div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div class="relative overflow-hidden rounded-1 wow scale-in-mask mt-4">\r
                                    <img src="images/misc/s2.webp" class="img-fluid" alt="">\r
                                    <div class="gradient-edge-bottom h-50"></div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="section-dark p-0" aria-label="section">\r
            <div class="bg-color text-light d-flex py-4 lh-1 rot-2">\r
              <div class="de-marquee-list-1 wow fadeInLeft" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
\r
            <div class="bg-color-2 text-light d-flex py-4 lh-1 rot-min-1 mt-min-20">\r
              <div class="de-marquee-list-2 wow fadeInRight" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-why-attend" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-6 offset-lg-3 text-center">\r
                        <div class="subtitle wow fadeInUp mb-3">Why Attend</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">What You’ll Gain</h2>\r
                        <p class="lead mb-0 wow fadeInUp">Hear from global AI pioneers, industry disruptors, and bold thinkers shaping the future across every domain.</p>\r
                    </div>\r
                </div>\r
\r
                <div class="spacer-single"></div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Cutting-Edge Knowledge</h4>\r
                                        <p class="mb-0">Stay ahead of the curve with insights from AI leaders shaping tomorrow’s technology.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s3.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Hands-On Learning</h4>\r
                                        <p class="mb-0">Join live workshops and labs to build practical skills in AI and machine learning.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s4.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Global Networking</h4>\r
                                        <p class="mb-0">Meet developers, founders, and researchers from around the world to collaborate and grow.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s5.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Startup Showcase</h4>\r
                                        <p class="mb-0">Explore the latest AI tools and ideas from promising startups and research labs.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s6.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>AI Career Boost</h4>\r
                                        <p class="mb-0">Access exclusive job fairs, mentorship sessions, and recruiting events to grow your career.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s7.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Ethics & Future</h4>\r
                                        <p class="mb-0">Engage in vital conversations around AI ethics, policy, and the future of intelligence.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s8.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/2.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container relative z-4">\r
                <div class="row align-items-center g-5">\r
                    <div class="col-md-4">\r
                        <div class="relative w-100 d-inline-block pe-5">\r
                            <div class="abs bg-color w-80px h-80px rounded-1 text-center end-0 z-2 wow scaleIn">\r
                                <i class="icofont-quote-left text-white fs-40 d-block pt-3"></i>\r
                            </div>\r
                            <img src="images/misc/s9.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-md-8">\r
                        <h3 class="fs-32 mb-4 wow fadeInUp">“Artificial intelligence is advancing rapidly, and while it offers immense opportunity, it also poses significant risks. If not properly regulated and aligned with human values, AI could become a fundamental threat to civilization.”</h3>\r
\r
                        <span>Elon Musk</span>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-speakers" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-6 relative z-3">\r
                          <div class="text-center">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Speakers</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".2s">Meet the Visionaries</h2>\r
                              <p class="lead wow fadeInUp">Whether it's a quick refresh or a deep clean transformation, our expert touch leaves your home or office shining.</p>\r
                          </div>\r
                    </div>\r
                </div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/1.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Joshua Henry</h3>\r
                                    <span>Chief AI Scientist, OpenAI</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/2.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Leila Zhang</h3>\r
                                    <span>VP of Machine Learning, Google</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/3.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Carlos Rivera</h3>\r
                                    <span>Founder & CEO, NeuralCore</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/1.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container">\r
                <div class="row g-4">\r
\r
                    <div class="col-md-12 wow fadeInUp">\r
                        <div class="owl-6 no-alpha owl-carousel owl-theme wow mask-right">\r
                            <img src="images/logo-light/1.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/2.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/3.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/4.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/5.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/6.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/7.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/8.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/9.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/10.webp" class="w-100 px-4" alt="">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-schedule" class="bg-dark section-dark text-light">\r
            <div class="container">\r
              <div class="row g-4 gx-5 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Event Schedule</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">5 Days of AI Excellence</h2>\r
                </div>\r
              </div>\r
              <div class="row g-4 gx-5 justify-content-center wow fadeInUp">\r
                <div class="col-lg-12">\r
                    <div class="de-tab plain">\r
                        <ul class="d-tab-nav mb-4 pb-4 d-flex justify-content-between">\r
                            <li class="active-tab">\r
                                <h3>Day 1</h3>\r
                                Oct 1, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 2</h3>\r
                                Oct 2, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 3</h3>\r
                                Oct 3, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 4</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 5</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                        </ul>\r
                        <ul class="d-tab-content pt-3 wow fadeInUp">   \r
                            <!-- day 1 -->                        \r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            08:00 – 10:00 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/1.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Joshua Henry</h5>\r
                                                    AI Research Lead, DeepTech Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Opening Keynote – The State of AI 2025</h3>\r
                                            <p class="fs-15 mb-0">Kick off the event with an insightful overview of where artificial intelligence is headed. Ava will explore breakthroughs, global shifts, and what’s next in deep learning, generative models, and AI ethics.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            12:00 – 14:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/2.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    VP of Machine Learning, Google\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building Human-Centered AI Products</h3>\r
                                            <p class="fs-15 mb-0">This session covers how to design AI solutions that prioritize usability, fairness, and real-world impact. Bring your laptop—hands-on UX exercises included.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 18:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/3.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Carlos Rivera</h5>\r
                                                    Founder & CEO, NeuralCore\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI Policy & Regulation – A Global Overview</h3>\r
                                            <p class="fs-15 mb-0">Learn how nations and organizations are approaching AI governance, including frameworks for data privacy, bias mitigation, and accountability in model deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            20:00 – 22:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/4.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Maria Gonzalez</h5>\r
                                                    Founder & CEO, SynthCore AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building a Startup with AI at the Core</h3>\r
                                            <p class="fs-15 mb-0">Marco shares his journey launching an AI-first startup. Discover tips on tech stacks, team-building, funding, and scaling responsibly.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                            </li>\r
\r
                            <!-- day 2 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/5.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    Head of AI Strategy, VisionFlow\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical AI — From Theory to Practice</h3>\r
                                            <p class="fs-15 mb-0">Explore how leading companies are implementing fairness, accountability, and transparency in real-world AI systems across healthcare and finance.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/6.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lisa Zhang</h5>\r
                                                    AI Ethics Researcher, FairAI Group\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Bias in Data — Hidden Dangers in AI Pipelines</h3>\r
                                            <p class="fs-15 mb-0">Lisa dives deep into the causes of bias in training data and showcases methods to detect and mitigate harm before deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/7.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Markus Blom</h5>\r
                                                    CTO, SynthMind AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Generative Models Beyond Text</h3>\r
                                            <p class="fs-15 mb-0">A practical tour of the next generation of multimodal models generating images, video, and even 3D environments with AI.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/8.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Priya Natarajan</h5>\r
                                                    Lead Engineer, CogniWare\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI-Powered Interfaces</h3>\r
                                            <p class="fs-15 mb-0">Learn how to embed conversational AI into web and mobile apps using modern open-source frameworks and API-first design.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 3 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/9.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Sofia Romero</h5>\r
                                                    ML Engineer, NeuronEdge\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Transformers in 2025 — What's Next?</h3>\r
                                            <p class="fs-15 mb-0">A technical session diving into the future of transformer architectures, memory optimization, and scaling challenges.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/10.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Tomás Eriksson</h5>\r
                                                    Founder, RealSim AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Synthetic Data Generation for Training</h3>\r
                                            <p class="fs-15 mb-0">Tomás shares tools and techniques for creating high-quality synthetic datasets that speed up training and reduce risk.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/11.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Aisha Mensah</h5>\r
                                                    Senior AI Strategist, Datavine\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Panel: AI Regulation & Global Policy Outlook</h3>\r
                                            <p class="fs-15 mb-0">Top voices discuss the global AI policy landscape, upcoming legislation, and how it will shape the future of AI deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/12.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leo Tanaka</h5>\r
                                                    Robotics Engineer, MetaForm\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Embodied AI in Robotics</h3>\r
                                            <p class="fs-15 mb-0">Discover how AI is powering next-gen robotics for manufacturing, logistics, and autonomous mobility through real-time interaction models.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 4 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/13.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Nina Köhler</h5>\r
                                                    Chief Product Officer, SynthOS\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI in Product Design — From Concept to Launch</h3>\r
                                            <p class="fs-15 mb-0">Nina shares how AI is revolutionizing product development, from ideation to real-time user feedback integration.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/14.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Emmanuel Ruiz</h5>\r
                                                    CEO, NextCore Analytics\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Scaling AI Infrastructure for Enterprise</h3>\r
                                            <p class="fs-15 mb-0">Explore key considerations when deploying and managing scalable, secure, and cost-effective AI systems in the enterprise space.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/15.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Isabelle Chen</h5>\r
                                                    Head of Language Models, LumoAI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Multilingual AI — Global Challenges & Innovations</h3>\r
                                            <p class="fs-15 mb-0">How modern LLMs are overcoming linguistic bias, translation errors, and dialect diversity in global applications.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/16.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Connor Walsh</h5>\r
                                                    Cloud AI Architect, SkyStack\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI Pipelines in the Cloud</h3>\r
                                            <p class="fs-15 mb-0">Hands-on session building a full AI workflow using serverless tech, vector databases, and model deployment strategies.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                                \r
                            </li>\r
\r
                            <!-- day 5 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/17.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Elena Greco</h5>\r
                                                    Ethics Advisor, Global AI Forum\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical Design in AI — A Human-Centered Approach</h3>\r
                                            <p class="fs-15 mb-0">A deep dive into responsible AI, highlighting bias mitigation, fairness, transparency, and global implications of autonomous systems.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/18.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Marcus Dlamini</h5>\r
                                                    Founder, EduAI Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Personalized Learning with AI</h3>\r
                                            <p class="fs-15 mb-0">Explore how AI-driven platforms are transforming education with adaptive learning paths and dynamic content delivery.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/19.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lara Nguyen</h5>\r
                                                    GenAI Director, NovaSynth\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Creative AI — From Text to Video</h3>\r
                                            <p class="fs-15 mb-0">Lara demonstrates how generative AI is transforming content creation, with real-time demos in video, audio, and image generation.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/20.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Dr. Hassan Al-Mansour</h5>\r
                                                    Lead Data Scientist, FutureVision\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Closing Keynote: AI & Humanity — Co-Evolution or Collapse?</h3>\r
                                            <p class="fs-15 mb-0">A visionary closing on AI’s long-term trajectory, human-AI collaboration, and the existential questions we must answer now.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                        </ul>\r
                    </div>\r
                </div>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-tickets" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/7.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-7"></div>\r
\r
            <div class="container relative z-2">\r
                <div class="row g-4 gx-5 justify-content-center">\r
                  <div class="col-lg-6 text-center">\r
                      <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Ticket Options</div>\r
                      <h2 class="wow fadeInUp" data-wow-delay=".2s">Choose Your Pass</h2>\r
                      <p class="lead wow fadeInUp" data-wow-delay=".4s">Select the perfect ticket for your needs and gain access to exclusive sessions, workshops, and more.</p>\r
                  </div>\r
                </div>\r
\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-12">\r
                        <div class="owl-carousel owl-theme owl-3-dots wow mask-right">\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Standard</h2>\r
                                    <h4 class="mb-4">$299</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
\r
                                <div class="relative overflow-hidden">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and sessions.</li>\r
                                            <li>Admission to exhibitions and demos.</li>\r
                                            <li>Networking opportunities.</li>\r
                                            <li>Digital materials and session recordings.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                                    \r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>VIP</h2>\r
                                    <h4 class="mb-4">$699</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Standard benefits.</li>\r
                                            <li>VIP lounge access and exclusive events.</li>\r
                                            <li>Front-row seating and priority workshop access.</li>\r
                                            <li>VIP swag bag and exclusive content.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Full Access</h2>\r
                                    <h4 class="mb-4">$1199</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All VIP benefits.</li>\r
                                            <li>Access to all workshops and breakout sessions.</li>\r
                                            <li>Personalized session scheduling.</li>\r
                                            <li>Speaker meet-and-greet and after-party access.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Exclusive Access</h2>\r
                                    <h4 class="mb-4">$2499</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Full Access Pass benefits.</li>\r
                                            <li>Private one-on-one sessions with speakers.</li>\r
                                            <li>Priority access to all events and workshops.</li>\r
                                            <li>Exclusive VIP gala and after-party invitations.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Student</h2>\r
                                    <h4 class="mb-4">$149</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and workshops.</li>\r
                                            <li>Student-specific networking events.</li>\r
                                            <li>Discounted online resources post-event.</li>\r
                                            <li>Special student meetups for networking.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Virtual</h2>\r
                                    <h4 class="mb-4">$99</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Live-streamed keynotes and workshops.</li>\r
                                            <li>On-demand access to recorded sessions.</li>\r
                                            <li>Interactive Q&A with speakers.</li>\r
                                            <li>Virtual networking and digital swag.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-venue" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Event Location</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Location & Venue</h2>\r
                    <p class="lead wow fadeInUp" data-wow-delay=".6s">Join us in the heart of innovation at San Francisco Tech Pavilion—surrounded by top hotels, transit, and culture.</p>\r
                </div>\r
            </div>\r
\r
            <div class="row g-4">\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l1.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l2.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="clearfix"></div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".2s">\r
                        <i class="fs-60 id-color icofont-google-map"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Address</h4>\r
                            <p>121 AI Blvd, San Francisco, CA 94107</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".4s">\r
                        <i class="fs-60 id-color icofont-phone"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Phone</h4>\r
                            <p>Call: +1 123 456 789</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".6s">\r
                        <i class="fs-60 id-color icofont-envelope"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Email</h4>\r
                            <p>contact@aivent.com</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
          </div>\r
        </section>\r
\r
        <section  id="section-faq" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-5">\r
                        <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Everything You Need to Know</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>\r
                    </div>\r
\r
                    <div class="col-lg-7">\r
                        <div class="accordion s2 wow fadeInUp">\r
                            <div class="accordion-section">\r
                                <div class="accordion-section-title" data-tab="#accordion-a1">\r
                                    What is the AI Summit 2025?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a1">\r
                                    The AI Summit 2025 is a premier event gathering leading AI experts, thought leaders, and innovators. It features keynotes, workshops, panels, and networking opportunities focusing on the latest advancements in artificial intelligence.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a2">\r
                                    When and where will the event be held?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a2">\r
                                    The AI Summit 2025 will take place from **[Event Dates]** at **[Event Location]**. More details about the venue and directions will be provided closer to the event.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a3">\r
                                    How can I register for the event?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a3">\r
                                    You can register for the AI Summit 2025 through our official website. Simply choose your ticket type and fill out the registration form.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a4">\r
                                    What ticket options are available?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a4">\r
                                    We offer a range of ticket options, including Standard, VIP, Full Access Pass, Student, and Virtual tickets. You can find more details about each ticket type on our [Tickets Page](#).\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a5">\r
                                    Can I transfer my ticket to someone else?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a5">\r
                                    Tickets are non-transferable. If you are unable to attend, please contact our support team for assistance.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a6">\r
                                    Will there be virtual participation?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a6">\r
                                    Yes! For those who can’t attend in person, we offer a **Virtual Ticket**. This provides access to live-streamed sessions, workshops, and networking opportunities online.\r
                                </div>\r
                            </div>\r
                        </div>                        \r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/3.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-8 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Stay in the Loop</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Join the Future of Innovation</h2>\r
                    <p class="wow fadeInUp" data-wow-delay=".4s">\r
                      Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We'll share other exciting news and exclusive offers, too.\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <form class="row justify-content-center">\r
              <div class="col-md-6 col-lg-4 mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <input type="email" class="form-control form-control-lg text-center" placeholder="Enter Your Email Address" required>\r
              </div>\r
              <div class="col-auto mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <button type="submit" class="btn bg-color text-light btn-lg px-4">SIGN UP</button>\r
              </div>\r
\r
              <div class="col-12 text-center wow fadeInUp" data-wow-delay=".8s">\r
                <div class="form-check d-flex justify-content-center mb-2">\r
                  <input class="form-check-input me-2" type="checkbox" value="" id="updatesCheck" checked>\r
                  <label class="form-check-label" for="updatesCheck">\r
                    Keep me updated on other news and exclusive offers\r
                  </label>\r
                </div>\r
                <p class="small text-muted wow fadeInUp" data-wow-delay="1s">\r
                  Note: You can opt-out at any time. See our <a href="#" class="text-decoration-underline">Privacy Policy</a> and <a href="#" class="text-decoration-underline">Terms</a>.\r
                </p>\r
              </div>\r
            </form>\r
          </div>\r
        </section>\r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/countdown-custom.js"><\/script>\r
    <script src="js/custom-marquee.js"><\/script>\r
\r
</body>\r
\r
</html>`,hp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="coun6x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark no-top no-bottom text-light jarallax relative mh-800" data-video-src="mp4:video/1.mp4">\r
            <div class="gradient-edge-top op-6 h-50 color"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="abs abs-centered z-2 w-100">\r
                <div class="container wow scaleIn" data-wow-duration="3s">\r
                    <div class="row g-4 justify-content-between align-items-center">\r
                        <div class="col-lg-6">\r
                            <div>\r
                                <div class="d-block d-md-flex mb-2">\r
                                    <div class="d-flex justify-content-center align-items-center me-4">\r
                                        <i class="fa fa-calendar id-color me-3"></i>\r
                                        <h4 class="mb-0">October 1–5, 2025</h4>\r
                                    </div>\r
\r
                                    <div class="d-flex justify-content-center align-items-center me-4">\r
                                        <i class="fa fa-location-pin id-color me-3"></i>\r
                                        <h4 class="mb-0">San Francisco, CA</h4>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <h1 class="fs-120 text-uppercase fs-sm-12vw mb-1 lh-1">Innovate. Integrate. Inspire.</h1>\r
                            <div class="spacer-single"></div>\r
                            <a class="btn-main mx-2 fx-slide" href="#section-tickets"><span>Get Tickets</span></a>\r
                            <a class="btn-main btn-line mx-2 fx-slide" href="#section-schedule"><span>View Schedule</span></a>\r
                        </div>\r
\r
                        <div class="col-lg-4 text-lg-end">\r
                            <p>\r
                                Step into the future where groundbreaking ideas meet real-world solutions. Join visionaries, technologists, and industry leaders as we explore the next frontier of artificial intelligence. \r
                            </p>\r
\r
                            <div class="countdown-s2">\r
                                <div id="defaultCountdown"></div>\r
                            </div> \r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
        </section>\r
\r
        <section id="section-about" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row  gx-5 align-items-center justify-content-between">\r
                    <div class="col-lg-6">\r
                          <div class="me-lg-5 pe-lg-5 py-5 my-5">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".2s">About the Event</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".4s">A Global Gathering of AI Innovators</h2>\r
                              <p class="wow fadeInUp" data-wow-delay=".6s">Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity, and the future\r
                              of work.</p>\r
\r
                              <ul class="ul-check">\r
                                  <li class="wow fadeInUp" data-wow-delay=".8s">5 days of keynotes, workshops, and networking</li>\r
                                  <li class="wow fadeInUp" data-wow-delay=".9s">50 world-class speakers</li>\r
                                  <li class="wow fadeInUp" data-wow-delay="1s">Startup showcase and live demos</li>\r
                              </ul>\r
\r
                          </div>\r
                    </div>\r
\r
                    <div class="col-lg-5">\r
                        <div class="wow scaleIn">\r
                            <img src="images/misc/c1.webp" class="w-100 rotate-animation" alt="">\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="section-dark p-0" aria-label="section">\r
            <div class="bg-color text-light d-flex py-4 lh-1 rot-2">\r
              <div class="de-marquee-list-1 wow fadeInLeft" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
\r
            <div class="bg-color-2 text-light d-flex py-4 lh-1 rot-min-1 mt-min-20">\r
              <div class="de-marquee-list-2 wow fadeInRight" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-why-attend" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-6 offset-lg-3 text-center">\r
                        <div class="subtitle wow fadeInUp mb-3">Why Attend</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">What You’ll Gain</h2>\r
                        <p class="lead mb-0 wow fadeInUp">Hear from global AI pioneers, industry disruptors, and bold thinkers shaping the future across every domain.</p>\r
                    </div>\r
                </div>\r
\r
                <div class="spacer-single"></div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Cutting-Edge Knowledge</h4>\r
                                        <p class="mb-0">Stay ahead of the curve with insights from AI leaders shaping tomorrow’s technology.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s3.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Hands-On Learning</h4>\r
                                        <p class="mb-0">Join live workshops and labs to build practical skills in AI and machine learning.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s4.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Global Networking</h4>\r
                                        <p class="mb-0">Meet developers, founders, and researchers from around the world to collaborate and grow.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s5.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Startup Showcase</h4>\r
                                        <p class="mb-0">Explore the latest AI tools and ideas from promising startups and research labs.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s6.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>AI Career Boost</h4>\r
                                        <p class="mb-0">Access exclusive job fairs, mentorship sessions, and recruiting events to grow your career.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s7.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Ethics & Future</h4>\r
                                        <p class="mb-0">Engage in vital conversations around AI ethics, policy, and the future of intelligence.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s8.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/2.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container relative z-4">\r
                <div class="row align-items-center g-5">\r
                    <div class="col-md-4">\r
                        <div class="relative w-100 d-inline-block pe-5">\r
                            <div class="abs bg-color w-80px h-80px rounded-1 text-center end-0 z-2 wow scaleIn">\r
                                <i class="icofont-quote-left text-white fs-40 d-block pt-3"></i>\r
                            </div>\r
                            <img src="images/misc/s9.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-md-8">\r
                        <h3 class="fs-32 mb-4 wow fadeInUp">“Artificial intelligence is advancing rapidly, and while it offers immense opportunity, it also poses significant risks. If not properly regulated and aligned with human values, AI could become a fundamental threat to civilization.”</h3>\r
\r
                        <span>Elon Musk</span>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-speakers" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-6 relative z-3">\r
                          <div class="text-center">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Speakers</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".2s">Meet the Visionaries</h2>\r
                              <p class="lead wow fadeInUp">Whether it's a quick refresh or a deep clean transformation, our expert touch leaves your home or office shining.</p>\r
                          </div>\r
                    </div>\r
                </div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/1.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Joshua Henry</h3>\r
                                    <span>Chief AI Scientist, OpenAI</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/2.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Leila Zhang</h3>\r
                                    <span>VP of Machine Learning, Google</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/3.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Carlos Rivera</h3>\r
                                    <span>Founder & CEO, NeuralCore</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/1.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container">\r
                <div class="row g-4">\r
\r
                    <div class="col-md-12 wow fadeInUp">\r
                        <div class="owl-6 no-alpha owl-carousel owl-theme wow mask-right">\r
                            <img src="images/logo-light/1.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/2.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/3.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/4.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/5.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/6.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/7.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/8.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/9.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/10.webp" class="w-100 px-4" alt="">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-schedule" class="bg-dark section-dark text-light">\r
            <div class="container">\r
              <div class="row g-4 gx-5 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Event Schedule</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">5 Days of AI Excellence</h2>\r
                </div>\r
              </div>\r
              <div class="row g-4 gx-5 justify-content-center wow fadeInUp">\r
                <div class="col-lg-12">\r
                    <div class="de-tab plain">\r
                        <ul class="d-tab-nav mb-4 pb-4 d-flex justify-content-between">\r
                            <li class="active-tab">\r
                                <h3>Day 1</h3>\r
                                Oct 1, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 2</h3>\r
                                Oct 2, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 3</h3>\r
                                Oct 3, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 4</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 5</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                        </ul>\r
                        <ul class="d-tab-content pt-3 wow fadeInUp">   \r
                            <!-- day 1 -->                        \r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            08:00 – 10:00 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/1.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Joshua Henry</h5>\r
                                                    AI Research Lead, DeepTech Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Opening Keynote – The State of AI 2025</h3>\r
                                            <p class="fs-15 mb-0">Kick off the event with an insightful overview of where artificial intelligence is headed. Ava will explore breakthroughs, global shifts, and what’s next in deep learning, generative models, and AI ethics.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            12:00 – 14:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/2.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    VP of Machine Learning, Google\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building Human-Centered AI Products</h3>\r
                                            <p class="fs-15 mb-0">This session covers how to design AI solutions that prioritize usability, fairness, and real-world impact. Bring your laptop—hands-on UX exercises included.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 18:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/3.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Carlos Rivera</h5>\r
                                                    Founder & CEO, NeuralCore\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI Policy & Regulation – A Global Overview</h3>\r
                                            <p class="fs-15 mb-0">Learn how nations and organizations are approaching AI governance, including frameworks for data privacy, bias mitigation, and accountability in model deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            20:00 – 22:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/4.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Maria Gonzalez</h5>\r
                                                    Founder & CEO, SynthCore AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building a Startup with AI at the Core</h3>\r
                                            <p class="fs-15 mb-0">Marco shares his journey launching an AI-first startup. Discover tips on tech stacks, team-building, funding, and scaling responsibly.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                            </li>\r
\r
                            <!-- day 2 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/5.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    Head of AI Strategy, VisionFlow\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical AI — From Theory to Practice</h3>\r
                                            <p class="fs-15 mb-0">Explore how leading companies are implementing fairness, accountability, and transparency in real-world AI systems across healthcare and finance.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/6.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lisa Zhang</h5>\r
                                                    AI Ethics Researcher, FairAI Group\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Bias in Data — Hidden Dangers in AI Pipelines</h3>\r
                                            <p class="fs-15 mb-0">Lisa dives deep into the causes of bias in training data and showcases methods to detect and mitigate harm before deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/7.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Markus Blom</h5>\r
                                                    CTO, SynthMind AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Generative Models Beyond Text</h3>\r
                                            <p class="fs-15 mb-0">A practical tour of the next generation of multimodal models generating images, video, and even 3D environments with AI.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/8.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Priya Natarajan</h5>\r
                                                    Lead Engineer, CogniWare\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI-Powered Interfaces</h3>\r
                                            <p class="fs-15 mb-0">Learn how to embed conversational AI into web and mobile apps using modern open-source frameworks and API-first design.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 3 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/9.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Sofia Romero</h5>\r
                                                    ML Engineer, NeuronEdge\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Transformers in 2025 — What's Next?</h3>\r
                                            <p class="fs-15 mb-0">A technical session diving into the future of transformer architectures, memory optimization, and scaling challenges.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/10.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Tomás Eriksson</h5>\r
                                                    Founder, RealSim AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Synthetic Data Generation for Training</h3>\r
                                            <p class="fs-15 mb-0">Tomás shares tools and techniques for creating high-quality synthetic datasets that speed up training and reduce risk.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/11.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Aisha Mensah</h5>\r
                                                    Senior AI Strategist, Datavine\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Panel: AI Regulation & Global Policy Outlook</h3>\r
                                            <p class="fs-15 mb-0">Top voices discuss the global AI policy landscape, upcoming legislation, and how it will shape the future of AI deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/12.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leo Tanaka</h5>\r
                                                    Robotics Engineer, MetaForm\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Embodied AI in Robotics</h3>\r
                                            <p class="fs-15 mb-0">Discover how AI is powering next-gen robotics for manufacturing, logistics, and autonomous mobility through real-time interaction models.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 4 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/13.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Nina Köhler</h5>\r
                                                    Chief Product Officer, SynthOS\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI in Product Design — From Concept to Launch</h3>\r
                                            <p class="fs-15 mb-0">Nina shares how AI is revolutionizing product development, from ideation to real-time user feedback integration.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/14.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Emmanuel Ruiz</h5>\r
                                                    CEO, NextCore Analytics\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Scaling AI Infrastructure for Enterprise</h3>\r
                                            <p class="fs-15 mb-0">Explore key considerations when deploying and managing scalable, secure, and cost-effective AI systems in the enterprise space.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/15.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Isabelle Chen</h5>\r
                                                    Head of Language Models, LumoAI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Multilingual AI — Global Challenges & Innovations</h3>\r
                                            <p class="fs-15 mb-0">How modern LLMs are overcoming linguistic bias, translation errors, and dialect diversity in global applications.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/16.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Connor Walsh</h5>\r
                                                    Cloud AI Architect, SkyStack\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI Pipelines in the Cloud</h3>\r
                                            <p class="fs-15 mb-0">Hands-on session building a full AI workflow using serverless tech, vector databases, and model deployment strategies.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                                \r
                            </li>\r
\r
                            <!-- day 5 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/17.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Elena Greco</h5>\r
                                                    Ethics Advisor, Global AI Forum\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical Design in AI — A Human-Centered Approach</h3>\r
                                            <p class="fs-15 mb-0">A deep dive into responsible AI, highlighting bias mitigation, fairness, transparency, and global implications of autonomous systems.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/18.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Marcus Dlamini</h5>\r
                                                    Founder, EduAI Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Personalized Learning with AI</h3>\r
                                            <p class="fs-15 mb-0">Explore how AI-driven platforms are transforming education with adaptive learning paths and dynamic content delivery.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/19.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lara Nguyen</h5>\r
                                                    GenAI Director, NovaSynth\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Creative AI — From Text to Video</h3>\r
                                            <p class="fs-15 mb-0">Lara demonstrates how generative AI is transforming content creation, with real-time demos in video, audio, and image generation.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/20.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Dr. Hassan Al-Mansour</h5>\r
                                                    Lead Data Scientist, FutureVision\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Closing Keynote: AI & Humanity — Co-Evolution or Collapse?</h3>\r
                                            <p class="fs-15 mb-0">A visionary closing on AI’s long-term trajectory, human-AI collaboration, and the existential questions we must answer now.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                        </ul>\r
                    </div>\r
                </div>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-tickets" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/7.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-7"></div>\r
\r
            <div class="container relative z-2">\r
                <div class="row g-4 gx-5 justify-content-center">\r
                  <div class="col-lg-6 text-center">\r
                      <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Ticket Options</div>\r
                      <h2 class="wow fadeInUp" data-wow-delay=".2s">Choose Your Pass</h2>\r
                      <p class="lead wow fadeInUp" data-wow-delay=".4s">Select the perfect ticket for your needs and gain access to exclusive sessions, workshops, and more.</p>\r
                  </div>\r
                </div>\r
\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-12">\r
                        <div class="owl-carousel owl-theme owl-3-dots wow mask-right">\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Standard</h2>\r
                                    <h4 class="mb-4">$299</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
\r
                                <div class="relative overflow-hidden">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and sessions.</li>\r
                                            <li>Admission to exhibitions and demos.</li>\r
                                            <li>Networking opportunities.</li>\r
                                            <li>Digital materials and session recordings.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                                    \r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>VIP</h2>\r
                                    <h4 class="mb-4">$699</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Standard benefits.</li>\r
                                            <li>VIP lounge access and exclusive events.</li>\r
                                            <li>Front-row seating and priority workshop access.</li>\r
                                            <li>VIP swag bag and exclusive content.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Full Access</h2>\r
                                    <h4 class="mb-4">$1199</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All VIP benefits.</li>\r
                                            <li>Access to all workshops and breakout sessions.</li>\r
                                            <li>Personalized session scheduling.</li>\r
                                            <li>Speaker meet-and-greet and after-party access.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Exclusive Access</h2>\r
                                    <h4 class="mb-4">$2499</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Full Access Pass benefits.</li>\r
                                            <li>Private one-on-one sessions with speakers.</li>\r
                                            <li>Priority access to all events and workshops.</li>\r
                                            <li>Exclusive VIP gala and after-party invitations.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Student</h2>\r
                                    <h4 class="mb-4">$149</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and workshops.</li>\r
                                            <li>Student-specific networking events.</li>\r
                                            <li>Discounted online resources post-event.</li>\r
                                            <li>Special student meetups for networking.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Virtual</h2>\r
                                    <h4 class="mb-4">$99</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Live-streamed keynotes and workshops.</li>\r
                                            <li>On-demand access to recorded sessions.</li>\r
                                            <li>Interactive Q&A with speakers.</li>\r
                                            <li>Virtual networking and digital swag.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-venue" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Event Location</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Location & Venue</h2>\r
                    <p class="lead wow fadeInUp" data-wow-delay=".6s">Join us in the heart of innovation at San Francisco Tech Pavilion—surrounded by top hotels, transit, and culture.</p>\r
                </div>\r
            </div>\r
\r
            <div class="row g-4">\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l1.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l2.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="clearfix"></div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".2s">\r
                        <i class="fs-60 id-color icofont-google-map"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Address</h4>\r
                            <p>121 AI Blvd, San Francisco, CA 94107</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".4s">\r
                        <i class="fs-60 id-color icofont-phone"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Phone</h4>\r
                            <p>Call: +1 123 456 789</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".6s">\r
                        <i class="fs-60 id-color icofont-envelope"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Email</h4>\r
                            <p>contact@aivent.com</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
          </div>\r
        </section>\r
\r
        <section  id="section-faq" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-5">\r
                        <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Everything You Need to Know</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>\r
                    </div>\r
\r
                    <div class="col-lg-7">\r
                        <div class="accordion s2 wow fadeInUp">\r
                            <div class="accordion-section">\r
                                <div class="accordion-section-title" data-tab="#accordion-a1">\r
                                    What is the AI Summit 2025?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a1">\r
                                    The AI Summit 2025 is a premier event gathering leading AI experts, thought leaders, and innovators. It features keynotes, workshops, panels, and networking opportunities focusing on the latest advancements in artificial intelligence.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a2">\r
                                    When and where will the event be held?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a2">\r
                                    The AI Summit 2025 will take place from **[Event Dates]** at **[Event Location]**. More details about the venue and directions will be provided closer to the event.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a3">\r
                                    How can I register for the event?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a3">\r
                                    You can register for the AI Summit 2025 through our official website. Simply choose your ticket type and fill out the registration form.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a4">\r
                                    What ticket options are available?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a4">\r
                                    We offer a range of ticket options, including Standard, VIP, Full Access Pass, Student, and Virtual tickets. You can find more details about each ticket type on our [Tickets Page](#).\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a5">\r
                                    Can I transfer my ticket to someone else?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a5">\r
                                    Tickets are non-transferable. If you are unable to attend, please contact our support team for assistance.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a6">\r
                                    Will there be virtual participation?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a6">\r
                                    Yes! For those who can’t attend in person, we offer a **Virtual Ticket**. This provides access to live-streamed sessions, workshops, and networking opportunities online.\r
                                </div>\r
                            </div>\r
                        </div>                        \r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/3.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-8 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Stay in the Loop</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Join the Future of Innovation</h2>\r
                    <p class="wow fadeInUp" data-wow-delay=".4s">\r
                      Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We'll share other exciting news and exclusive offers, too.\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <form class="row justify-content-center">\r
              <div class="col-md-6 col-lg-4 mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <input type="email" class="form-control form-control-lg text-center" placeholder="Enter Your Email Address" required>\r
              </div>\r
              <div class="col-auto mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <button type="submit" class="btn bg-color text-light btn-lg px-4">SIGN UP</button>\r
              </div>\r
\r
              <div class="col-12 text-center wow fadeInUp" data-wow-delay=".8s">\r
                <div class="form-check d-flex justify-content-center mb-2">\r
                  <input class="form-check-input me-2" type="checkbox" value="" id="updatesCheck" checked>\r
                  <label class="form-check-label" for="updatesCheck">\r
                    Keep me updated on other news and exclusive offers\r
                  </label>\r
                </div>\r
                <p class="small text-muted wow fadeInUp" data-wow-delay="1s">\r
                  Note: You can opt-out at any time. See our <a href="#" class="text-decoration-underline">Privacy Policy</a> and <a href="#" class="text-decoration-underline">Terms</a>.\r
                </p>\r
              </div>\r
            </form>\r
          </div>\r
        </section>\r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/countdown-custom.js"><\/script>\r
    <script src="js/custom-marquee.js"><\/script>\r
\r
</body>\r
\r
</html>`,gp=`<!DOCTYPE html>\r
<html lang="zxx">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/swiper.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- custom-css -->\r
    <link href="css/swiper-custom-1.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme section-dark">\r
    <div id="wrapper">\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
        \r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
        \r
        <!-- header begin -->\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="#section-hero">Home</a></li>\r
                                        <li><a class="menu-item" href="#section-features">Features</a></li>\r
                                        <li><a class="menu-item" href="#section-demo">Demo Preview</a></li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
        <!-- header close -->\r
        <!-- content begin -->\r
        <div class="no-bottom no-top" id="content">\r
            <div id="top"></div>\r
\r
            <!--<div class="de_ribbon d-ribbon wow fadeInDown animated" data-wow-delay="1.5s">SAVE 50%</div>-->\r
\r
            <section id="section-hero" class="section-dark text-light bg-dark-1 jarallax pb-0 overflow-hidden" aria-label="section">\r
                <img src="demo/bg.webp" class="jarallax-img" alt="">\r
                <div class="sw-overlay op-9"></div>\r
                <div class="gradient-edge-top"></div>\r
                <div class="gradient-edge-bottom color h-50"></div>\r
\r
                <div class="sm-hide w-200 absolute start-10 top-20 text-center z-3 wow scaleIn" data-wow-delay="1.2s" >\r
                    <img src="demo/elite-author.png" class="w-60px mb-3" alt="" >\r
                    <h5>Envato Elite Author</h5>\r
                </div>\r
                \r
                <div class="sm-hide w-200 absolute end-10 top-20 text-center z-3 wow scaleIn" data-wow-delay="1.2s" >\r
                    <img src="demo/featured-author.png" class="w-60px mb-3" alt="" >\r
                    <h5>Featured Author</h5>\r
                </div>\r
\r
                <div class="container relative z-2">\r
                    <div class="row g-4 gx-5 justify-content-center">\r
                        <div class="col-lg-6 text-center">\r
                            <div class="py-4">\r
                                <div class="subtitle s2 mb-3 wow fadeInUp">Introducing AIvent</div>\r
                                <h1 class="fs-72 lh-1 text-uppercase wow fadeInUp">AI Event Website Template</h1>\r
                                <p class="wow fadeInUp">AIvent combines top-tier coding and design standards to help you build a professional-looking website quickly and effortlessly.</p>\r
                                <a class="btn-main fx-slide wow fadeInUp" href="#section-preview"><span>View Demo</span></a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="spacer-double"></div>\r
\r
                <div class="ss-wrap text-center z-4">\r
                    <img src="demo/preview/homepage-1.webp" class="img-c1 relative wow fadeInUp" data-wow-delay=".6s" alt="">\r
                    <img src="demo/preview/homepage-2.webp" class="abs img-l1 wow fadeInUp" data-wow-delay=".9s" alt="">\r
                    <img src="demo/preview/homepage-3.webp" class="abs img-l2 wow fadeInUp" data-wow-delay="1.2s" alt="">\r
                    <img src="demo/preview/homepage-4.webp" class="abs img-r1 wow fadeInUp" data-wow-delay=".9s" alt="">\r
                    <img src="demo/preview/homepage-5.webp" class="abs img-r2 wow fadeInUp" data-wow-delay="1.2s" alt="">\r
                </div>\r
            </section>\r
\r
            <section id="section-features" class="relative">\r
                <div class="gradient-edge-top op-2"></div>\r
                <div class="container relative z-2">\r
                    <div class="row justify-content-center">                        \r
                        <div class="col-lg-6 text-center">\r
                            <div class="subtitle wow fadeInUp mb-3">Why Choose AIvent</div>\r
                            <h2 class="wow fadeInUp" data-wow-delay=".2s">AIvent Features</h2>\r
                        </div>\r
                    </div>\r
                    <div class="row g-4">\r
                        <div class="clearfix"></div>\r
\r
                        <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".2s">\r
                            <div class="bg-dark-2 p-40 h-100 rounded-10">\r
                                <img src="demo/icons/booststrap-5.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">\r
                                <h4>Bootstrap 5 Framework</h4>\r
                                    AIvent using latest Bootstrap 5 framework. The most camplete and flexible framework for website development.\r
                            </div>\r
                        </div>\r
                        <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".4s" >\r
                            <div class="bg-dark-2 p-40 h-100 rounded-10">\r
                                <img src="demo/icons/flash.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">\r
                                <h4>Blazing Speed</h4>\r
                                    Say goodbye to frustrating load times and hello to a seamless online experience. Explore, engage, and enjoy without the wait!\r
                            </div>\r
                        </div>\r
                        <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".6s">\r
                            <div class="bg-dark-2 p-40 h-100 rounded-10">\r
                                <img src="demo/icons/responsive.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">\r
                                <h4>Responsive Layouts</h4>\r
                                    AIvent layouts can fit to all screens sizes so it looks great on any kind of devices. One website for all devices.\r
                            </div>\r
                        </div>\r
                        <div class="col-lg-4 col-sm-6 wow fadeInRight" data-wow-delay="0s">\r
                            <div class="p-40 text-center rounded-10 bg-color-2 text-light">\r
                                <h2 class="mb-1">23,000+</h2>\r
                                Clients Trust Designesia\r
                            </div>\r
                        </div>\r
                        <div class="col-lg-4 col-sm-6 wow fadeInRight" data-wow-delay=".2s">\r
                            <div class="p-40 text-center rounded-10 bg-color-2 text-light">\r
                                <h2 class="mb-1">17</h2>\r
                                Years of Experiences\r
                            </div>\r
                        </div>\r
                        <div class="col-lg-4 col-sm-6 wow fadeInRight" data-wow-delay=".4s">\r
                            <div class="p-40 text-center rounded-10 bg-color-2 text-light">\r
                                <h2 class="mb-1">Free</h2>\r
                                Lifetime Update\r
                            </div>\r
                        </div>\r
                        <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".2s">\r
                            <div class="bg-dark-2 p-40 h-100 rounded-10">\r
                                <img src="demo/icons/font-awesome-6.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">\r
                                <h4>Font Awesome 6</h4>\r
                                    Font Awesome is the world's most popular icon set and toolkit. We include latest version of Font Awesome.\r
                            </div>\r
                        </div>\r
                        <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".4s">\r
                            <div class="bg-dark-2 p-40 h-100 rounded-10">\r
                                <img src="demo/icons/swiper-slider.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">\r
                                <h4>Swiper Slider</h4>\r
                                    Swiper is the most modern free and open source slider with hardware accelerated transitions and amazing native behavior. \r
                            </div>\r
                        </div>\r
                        <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".6s">\r
                            <div class="bg-dark-2 p-40 h-100 rounded-10">\r
                                <img src="demo/icons/php.png" class="w-100px mb-3 wow zoomIn" data-wow-delay=".3s" alt="">\r
                                <h4>PHP Form</h4>\r
                                    A clean and functional PHP form that collects user input and processes it securely.\r
                            </div>\r
                        </div>\r
\r
                        \r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section id="section-demo" class="overlay-dark-1">\r
               <div class="container relative z-2">\r
                    <div class="row g-4 justify-content-center">\r
                        <div class="col-md-6 text-center wow fadeInUp">\r
                            <div class="subtitle wow fadeInUp mb-3">All Demos Included</div>\r
                            <h2 class="wow fadeInUp mb20" data-wow-delay=".2s">Demo Preview</h2>\r
                        </div>\r
                    </div>\r
\r
                    <div class="row g-4 sequence justify-content-center">\r
\r
                        <div class="col-md-6 gallery-item text-center mb20">\r
                            <a class="d_demo_img wow" target="_blank" href="index.html">\r
                                <span class="d-overlay"><span>Live Preview</span></span>\r
                                <img src="demo/preview/homepage-1.webp" class="color w-100" alt="">\r
                            </a>\r
                            <h5 class="s2">Main (Video Background)</h5>\r
                        </div>                        \r
\r
                        <div class="col-md-6 gallery-item text-center mb20">\r
                            <a class="d_demo_img wow" target="_blank" href="index-slider.html">\r
                                <span class="d-overlay"><span>Live Preview</span></span>\r
                                <img src="demo/preview/homepage-2.webp" class="color w-100" alt="">\r
                            </a>\r
                            <h5 class="s2">Slider Background</h5>\r
                        </div>\r
\r
                        <div class="col-md-6 gallery-item text-center mb20">\r
                            <a class="d_demo_img wow" target="_blank" href="index-static-background.html">\r
                                <span class="d-overlay"><span>Live Preview</span></span>\r
                                <img src="demo/preview/homepage-3.webp" class="color w-100" alt="">\r
                            </a>\r
                            <h5 class="s2">Static Background</h5>\r
                        </div>\r
\r
                        <div class="col-md-6 gallery-item text-center mb20">\r
                            <a class="d_demo_img wow" target="_blank" href="index-slider-text.html">\r
                                <span class="d-overlay"><span>Live Preview</span></span>\r
                                <img src="demo/preview/homepage-4.webp" class="color w-100" alt="">\r
                            </a>\r
                            <h5 class="s2">Slider Text</h5>\r
                        </div>\r
\r
                        <div class="col-md-6 gallery-item text-center mb20">\r
                            <a class="d_demo_img wow" target="_blank" href="index-countdown.html">\r
                                <span class="d-overlay"><span>Live Preview</span></span>\r
                                <img src="demo/preview/homepage-5.webp" class="color w-100" alt="">\r
                            </a>\r
                            <h5 class="s2">Video Background + Countdown</h5>\r
                        </div>\r
\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section class="text-light bg-dark-1 section-dark jarallax" aria-label="section">\r
                <img src="demo/bg-2.webp" class="jarallax-img" alt="">\r
                <div class="gradient-edge-bottom"></div>\r
                <div class="sw-overlay op-9"></div>\r
                <div class="container relative z-1000">\r
                    <div class="row align-items-center justify-content-center">  \r
                        <div class="col-lg-6 text-center">\r
                            <div class="subtitle wow fadeInUp" data-wow-delay="0s">Start Your Website</div>\r
                            <h1 class="wow fadeInUp" data-wow-delay=".2s">Build a stunning website in no time!</h1>\r
                            \r
                            <a class="btn-main fx-slide wow fadeInUp" data-wow-delay=".6s" target="_blank" href="#"><span>Buy Now</span></a>\r
\r
                            <div class="spacer-single"></div>                        \r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
        <!-- content close -->\r
        \r
    </div>\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
\r
</body>\r
\r
</html>`,fp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/swiper.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- custom css -->\r
    <link href="css/swiper-custom-1.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark text-light p-0 relative overflow-hidden z-1000">\r
            <div class="mh-800">\r
                <div class="swiper">\r
                  <!-- Additional required wrapper -->\r
                  <div class="swiper-wrapper">\r
                    <!-- Slides -->\r
                    <div class="swiper-slide">\r
                        <div class="abs abs-centered z-2 w-100">\r
                            <div class="container" data-wow-duration="1s">\r
                                <div class="row">\r
                                    <div class="col-lg-7">\r
                                        <div class="subtitle">AI Summit 2025</div>\r
                                        <h1 class="mb-4 uppercase">Unleashing Human Potential Through AI</h1>\r
\r
                                        <div class="d-block d-md-flex">\r
                                            <div class="d-flex align-items-center me-4">\r
                                                <i class="fa fa-calendar id-color me-3"></i>\r
                                                <h4 class="mb-0">October 1–5, 2025</h4>\r
                                            </div>\r
\r
                                            <div class="d-flex align-items-center me-4">\r
                                                <i class="fa fa-location-pin id-color me-3"></i>\r
                                                <h4 class="mb-0">San Francisco, CA</h4>\r
                                            </div>\r
                                        </div>\r
\r
                                        <div class="spacer-single"></div>\r
\r
                                        <a class="btn-main mx-2 fx-slide" href="#section-tickets"><span>Get Tickets</span></a>\r
                                        <a class="btn-main btn-line mx-2 fx-slide" href="#section-schedule"><span>View Schedule</span></a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="swiper-inner" data-bgimage="url(images/slider/3.webp)">\r
                            <div class="sw-overlay op-3"></div>\r
                            <div class="gradient-edge-bottom"></div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Slides -->\r
                    <div class="swiper-slide">\r
                        <div class="abs abs-centered z-2 w-100">\r
                            <div class="container" data-wow-duration="1s">\r
                                <div class="row">\r
                                    <div class="col-lg-7">\r
                                        <div class="subtitle">AI Summit 2025</div>\r
                                        <h1 class="mb-4 uppercase">Join the Minds Building the Future AI</h1>\r
\r
                                        <div class="d-block d-md-flex">\r
                                            <div class="d-flex align-items-center me-4">\r
                                                <i class="fa fa-calendar id-color me-3"></i>\r
                                                <h4 class="mb-0">October 1–5, 2025</h4>\r
                                            </div>\r
\r
                                            <div class="d-flex align-items-center me-4">\r
                                                <i class="fa fa-location-pin id-color me-3"></i>\r
                                                <h4 class="mb-0">San Francisco, CA</h4>\r
                                            </div>\r
                                        </div>\r
\r
                                        <div class="spacer-single"></div>\r
\r
                                        <a class="btn-main mx-2 fx-slide" href="#section-tickets"><span>Get Tickets</span></a>\r
                                        <a class="btn-main btn-line mx-2 fx-slide" href="#section-schedule"><span>View Schedule</span></a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="swiper-inner" data-bgimage="url(images/slider/4.webp)">\r
                            <div class="sw-overlay op-3"></div>\r
                            <div class="gradient-edge-bottom"></div>\r
                        </div>\r
                    </div>\r
\r
\r
                  </div>\r
                  <!-- If we need pagination -->\r
                  <div class="swiper-pagination"></div>\r
\r
                  <!-- If we need navigation buttons -->\r
                  <div class="swiper-button-prev"></div>\r
                  <div class="swiper-button-next"></div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-about" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row  gx-5 align-items-center justify-content-between">\r
                    <div class="col-lg-6">\r
                          <div class="me-lg-5 pe-lg-5 py-5 my-5">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".2s">About the Event</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".4s">A Global Gathering of AI Innovators</h2>\r
                              <p class="wow fadeInUp" data-wow-delay=".6s">Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity, and the future\r
                              of work.</p>\r
\r
                              <ul class="ul-check">\r
                                  <li class="wow fadeInUp" data-wow-delay=".8s">5 days of keynotes, workshops, and networking</li>\r
                                  <li class="wow fadeInUp" data-wow-delay=".9s">50 world-class speakers</li>\r
                                  <li class="wow fadeInUp" data-wow-delay="1s">Startup showcase and live demos</li>\r
                              </ul>\r
\r
                          </div>\r
                    </div>\r
\r
                    <div class="col-lg-5">\r
                        <div class="wow scaleIn">\r
                            <img src="images/misc/c1.webp" class="w-100 rotate-animation" alt="">\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="section-dark p-0" aria-label="section">\r
            <div class="bg-color text-light d-flex py-4 lh-1 rot-2">\r
              <div class="de-marquee-list-1 wow fadeInLeft" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
\r
            <div class="bg-color-2 text-light d-flex py-4 lh-1 rot-min-1 mt-min-20">\r
              <div class="de-marquee-list-2 wow fadeInRight" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-why-attend" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-6 offset-lg-3 text-center">\r
                        <div class="subtitle wow fadeInUp mb-3">Why Attend</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">What You’ll Gain</h2>\r
                        <p class="lead mb-0 wow fadeInUp">Hear from global AI pioneers, industry disruptors, and bold thinkers shaping the future across every domain.</p>\r
                    </div>\r
                </div>\r
\r
                <div class="spacer-single"></div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Cutting-Edge Knowledge</h4>\r
                                        <p class="mb-0">Stay ahead of the curve with insights from AI leaders shaping tomorrow’s technology.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s3.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Hands-On Learning</h4>\r
                                        <p class="mb-0">Join live workshops and labs to build practical skills in AI and machine learning.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s4.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Global Networking</h4>\r
                                        <p class="mb-0">Meet developers, founders, and researchers from around the world to collaborate and grow.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s5.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Startup Showcase</h4>\r
                                        <p class="mb-0">Explore the latest AI tools and ideas from promising startups and research labs.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s6.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>AI Career Boost</h4>\r
                                        <p class="mb-0">Access exclusive job fairs, mentorship sessions, and recruiting events to grow your career.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s7.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Ethics & Future</h4>\r
                                        <p class="mb-0">Engage in vital conversations around AI ethics, policy, and the future of intelligence.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s8.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/2.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container relative z-4">\r
                <div class="row align-items-center g-5">\r
                    <div class="col-md-4">\r
                        <div class="relative w-100 d-inline-block pe-5">\r
                            <div class="abs bg-color w-80px h-80px rounded-1 text-center end-0 z-2 wow scaleIn">\r
                                <i class="icofont-quote-left text-white fs-40 d-block pt-3"></i>\r
                            </div>\r
                            <img src="images/misc/s9.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-md-8">\r
                        <h3 class="fs-32 mb-4 wow fadeInUp">“Artificial intelligence is advancing rapidly, and while it offers immense opportunity, it also poses significant risks. If not properly regulated and aligned with human values, AI could become a fundamental threat to civilization.”</h3>\r
\r
                        <span>Elon Musk</span>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-speakers" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-6 relative z-3">\r
                          <div class="text-center">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Speakers</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".2s">Meet the Visionaries</h2>\r
                              <p class="lead wow fadeInUp">Whether it's a quick refresh or a deep clean transformation, our expert touch leaves your home or office shining.</p>\r
                          </div>\r
                    </div>\r
                </div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/1.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Joshua Henry</h3>\r
                                    <span>Chief AI Scientist, OpenAI</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/2.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Leila Zhang</h3>\r
                                    <span>VP of Machine Learning, Google</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/3.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Carlos Rivera</h3>\r
                                    <span>Founder & CEO, NeuralCore</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/1.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container">\r
                <div class="row g-4">\r
\r
                    <div class="col-md-12 wow fadeInUp">\r
                        <div class="owl-6 no-alpha owl-carousel owl-theme wow mask-right">\r
                            <img src="images/logo-light/1.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/2.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/3.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/4.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/5.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/6.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/7.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/8.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/9.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/10.webp" class="w-100 px-4" alt="">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-schedule" class="bg-dark section-dark text-light">\r
            <div class="container">\r
              <div class="row g-4 gx-5 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Event Schedule</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">5 Days of AI Excellence</h2>\r
                </div>\r
              </div>\r
              <div class="row g-4 gx-5 justify-content-center wow fadeInUp">\r
                <div class="col-lg-12">\r
                    <div class="de-tab plain">\r
                        <ul class="d-tab-nav mb-4 pb-4 d-flex justify-content-between">\r
                            <li class="active-tab">\r
                                <h3>Day 1</h3>\r
                                Oct 1, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 2</h3>\r
                                Oct 2, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 3</h3>\r
                                Oct 3, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 4</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 5</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                        </ul>\r
                        <ul class="d-tab-content pt-3 wow fadeInUp">   \r
                            <!-- day 1 -->                        \r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            08:00 – 10:00 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/1.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Joshua Henry</h5>\r
                                                    AI Research Lead, DeepTech Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Opening Keynote – The State of AI 2025</h3>\r
                                            <p class="fs-15 mb-0">Kick off the event with an insightful overview of where artificial intelligence is headed. Ava will explore breakthroughs, global shifts, and what’s next in deep learning, generative models, and AI ethics.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            12:00 – 14:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/2.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    VP of Machine Learning, Google\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building Human-Centered AI Products</h3>\r
                                            <p class="fs-15 mb-0">This session covers how to design AI solutions that prioritize usability, fairness, and real-world impact. Bring your laptop—hands-on UX exercises included.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 18:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/3.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Carlos Rivera</h5>\r
                                                    Founder & CEO, NeuralCore\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI Policy & Regulation – A Global Overview</h3>\r
                                            <p class="fs-15 mb-0">Learn how nations and organizations are approaching AI governance, including frameworks for data privacy, bias mitigation, and accountability in model deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            20:00 – 22:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/4.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Maria Gonzalez</h5>\r
                                                    Founder & CEO, SynthCore AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building a Startup with AI at the Core</h3>\r
                                            <p class="fs-15 mb-0">Marco shares his journey launching an AI-first startup. Discover tips on tech stacks, team-building, funding, and scaling responsibly.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                            </li>\r
\r
                            <!-- day 2 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/5.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    Head of AI Strategy, VisionFlow\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical AI — From Theory to Practice</h3>\r
                                            <p class="fs-15 mb-0">Explore how leading companies are implementing fairness, accountability, and transparency in real-world AI systems across healthcare and finance.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/6.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lisa Zhang</h5>\r
                                                    AI Ethics Researcher, FairAI Group\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Bias in Data — Hidden Dangers in AI Pipelines</h3>\r
                                            <p class="fs-15 mb-0">Lisa dives deep into the causes of bias in training data and showcases methods to detect and mitigate harm before deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/7.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Markus Blom</h5>\r
                                                    CTO, SynthMind AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Generative Models Beyond Text</h3>\r
                                            <p class="fs-15 mb-0">A practical tour of the next generation of multimodal models generating images, video, and even 3D environments with AI.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/8.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Priya Natarajan</h5>\r
                                                    Lead Engineer, CogniWare\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI-Powered Interfaces</h3>\r
                                            <p class="fs-15 mb-0">Learn how to embed conversational AI into web and mobile apps using modern open-source frameworks and API-first design.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 3 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/9.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Sofia Romero</h5>\r
                                                    ML Engineer, NeuronEdge\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Transformers in 2025 — What's Next?</h3>\r
                                            <p class="fs-15 mb-0">A technical session diving into the future of transformer architectures, memory optimization, and scaling challenges.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/10.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Tomás Eriksson</h5>\r
                                                    Founder, RealSim AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Synthetic Data Generation for Training</h3>\r
                                            <p class="fs-15 mb-0">Tomás shares tools and techniques for creating high-quality synthetic datasets that speed up training and reduce risk.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/11.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Aisha Mensah</h5>\r
                                                    Senior AI Strategist, Datavine\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Panel: AI Regulation & Global Policy Outlook</h3>\r
                                            <p class="fs-15 mb-0">Top voices discuss the global AI policy landscape, upcoming legislation, and how it will shape the future of AI deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/12.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leo Tanaka</h5>\r
                                                    Robotics Engineer, MetaForm\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Embodied AI in Robotics</h3>\r
                                            <p class="fs-15 mb-0">Discover how AI is powering next-gen robotics for manufacturing, logistics, and autonomous mobility through real-time interaction models.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 4 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/13.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Nina Köhler</h5>\r
                                                    Chief Product Officer, SynthOS\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI in Product Design — From Concept to Launch</h3>\r
                                            <p class="fs-15 mb-0">Nina shares how AI is revolutionizing product development, from ideation to real-time user feedback integration.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/14.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Emmanuel Ruiz</h5>\r
                                                    CEO, NextCore Analytics\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Scaling AI Infrastructure for Enterprise</h3>\r
                                            <p class="fs-15 mb-0">Explore key considerations when deploying and managing scalable, secure, and cost-effective AI systems in the enterprise space.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/15.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Isabelle Chen</h5>\r
                                                    Head of Language Models, LumoAI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Multilingual AI — Global Challenges & Innovations</h3>\r
                                            <p class="fs-15 mb-0">How modern LLMs are overcoming linguistic bias, translation errors, and dialect diversity in global applications.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/16.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Connor Walsh</h5>\r
                                                    Cloud AI Architect, SkyStack\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI Pipelines in the Cloud</h3>\r
                                            <p class="fs-15 mb-0">Hands-on session building a full AI workflow using serverless tech, vector databases, and model deployment strategies.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                                \r
                            </li>\r
\r
                            <!-- day 5 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/17.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Elena Greco</h5>\r
                                                    Ethics Advisor, Global AI Forum\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical Design in AI — A Human-Centered Approach</h3>\r
                                            <p class="fs-15 mb-0">A deep dive into responsible AI, highlighting bias mitigation, fairness, transparency, and global implications of autonomous systems.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/18.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Marcus Dlamini</h5>\r
                                                    Founder, EduAI Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Personalized Learning with AI</h3>\r
                                            <p class="fs-15 mb-0">Explore how AI-driven platforms are transforming education with adaptive learning paths and dynamic content delivery.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/19.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lara Nguyen</h5>\r
                                                    GenAI Director, NovaSynth\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Creative AI — From Text to Video</h3>\r
                                            <p class="fs-15 mb-0">Lara demonstrates how generative AI is transforming content creation, with real-time demos in video, audio, and image generation.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/20.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Dr. Hassan Al-Mansour</h5>\r
                                                    Lead Data Scientist, FutureVision\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Closing Keynote: AI & Humanity — Co-Evolution or Collapse?</h3>\r
                                            <p class="fs-15 mb-0">A visionary closing on AI’s long-term trajectory, human-AI collaboration, and the existential questions we must answer now.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                        </ul>\r
                    </div>\r
                </div>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-tickets" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/7.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-7"></div>\r
\r
            <div class="container relative z-2">\r
                <div class="row g-4 gx-5 justify-content-center">\r
                  <div class="col-lg-6 text-center">\r
                      <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Ticket Options</div>\r
                      <h2 class="wow fadeInUp" data-wow-delay=".2s">Choose Your Pass</h2>\r
                      <p class="lead wow fadeInUp" data-wow-delay=".4s">Select the perfect ticket for your needs and gain access to exclusive sessions, workshops, and more.</p>\r
                  </div>\r
                </div>\r
\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-12">\r
                        <div class="owl-carousel owl-theme owl-3-dots wow mask-right">\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Standard</h2>\r
                                    <h4 class="mb-4">$299</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
\r
                                <div class="relative overflow-hidden">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and sessions.</li>\r
                                            <li>Admission to exhibitions and demos.</li>\r
                                            <li>Networking opportunities.</li>\r
                                            <li>Digital materials and session recordings.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                                    \r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>VIP</h2>\r
                                    <h4 class="mb-4">$699</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Standard benefits.</li>\r
                                            <li>VIP lounge access and exclusive events.</li>\r
                                            <li>Front-row seating and priority workshop access.</li>\r
                                            <li>VIP swag bag and exclusive content.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Full Access</h2>\r
                                    <h4 class="mb-4">$1199</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All VIP benefits.</li>\r
                                            <li>Access to all workshops and breakout sessions.</li>\r
                                            <li>Personalized session scheduling.</li>\r
                                            <li>Speaker meet-and-greet and after-party access.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Exclusive Access</h2>\r
                                    <h4 class="mb-4">$2499</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Full Access Pass benefits.</li>\r
                                            <li>Private one-on-one sessions with speakers.</li>\r
                                            <li>Priority access to all events and workshops.</li>\r
                                            <li>Exclusive VIP gala and after-party invitations.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Student</h2>\r
                                    <h4 class="mb-4">$149</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and workshops.</li>\r
                                            <li>Student-specific networking events.</li>\r
                                            <li>Discounted online resources post-event.</li>\r
                                            <li>Special student meetups for networking.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Virtual</h2>\r
                                    <h4 class="mb-4">$99</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Live-streamed keynotes and workshops.</li>\r
                                            <li>On-demand access to recorded sessions.</li>\r
                                            <li>Interactive Q&A with speakers.</li>\r
                                            <li>Virtual networking and digital swag.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-venue" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Event Location</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Location & Venue</h2>\r
                    <p class="lead wow fadeInUp" data-wow-delay=".6s">Join us in the heart of innovation at San Francisco Tech Pavilion—surrounded by top hotels, transit, and culture.</p>\r
                </div>\r
            </div>\r
\r
            <div class="row g-4">\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l1.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l2.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="clearfix"></div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".2s">\r
                        <i class="fs-60 id-color icofont-google-map"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Address</h4>\r
                            <p>121 AI Blvd, San Francisco, CA 94107</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".4s">\r
                        <i class="fs-60 id-color icofont-phone"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Phone</h4>\r
                            <p>Call: +1 123 456 789</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".6s">\r
                        <i class="fs-60 id-color icofont-envelope"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Email</h4>\r
                            <p>contact@aivent.com</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
          </div>\r
        </section>\r
\r
        <section  id="section-faq" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-5">\r
                        <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Everything You Need to Know</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>\r
                    </div>\r
\r
                    <div class="col-lg-7">\r
                        <div class="accordion s2 wow fadeInUp">\r
                            <div class="accordion-section">\r
                                <div class="accordion-section-title" data-tab="#accordion-a1">\r
                                    What is the AI Summit 2025?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a1">\r
                                    The AI Summit 2025 is a premier event gathering leading AI experts, thought leaders, and innovators. It features keynotes, workshops, panels, and networking opportunities focusing on the latest advancements in artificial intelligence.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a2">\r
                                    When and where will the event be held?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a2">\r
                                    The AI Summit 2025 will take place from **[Event Dates]** at **[Event Location]**. More details about the venue and directions will be provided closer to the event.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a3">\r
                                    How can I register for the event?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a3">\r
                                    You can register for the AI Summit 2025 through our official website. Simply choose your ticket type and fill out the registration form.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a4">\r
                                    What ticket options are available?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a4">\r
                                    We offer a range of ticket options, including Standard, VIP, Full Access Pass, Student, and Virtual tickets. You can find more details about each ticket type on our [Tickets Page](#).\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a5">\r
                                    Can I transfer my ticket to someone else?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a5">\r
                                    Tickets are non-transferable. If you are unable to attend, please contact our support team for assistance.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a6">\r
                                    Will there be virtual participation?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a6">\r
                                    Yes! For those who can’t attend in person, we offer a **Virtual Ticket**. This provides access to live-streamed sessions, workshops, and networking opportunities online.\r
                                </div>\r
                            </div>\r
                        </div>                        \r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/3.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-8 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Stay in the Loop</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Join the Future of Innovation</h2>\r
                    <p class="wow fadeInUp" data-wow-delay=".4s">\r
                      Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We'll share other exciting news and exclusive offers, too.\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <form class="row justify-content-center">\r
              <div class="col-md-6 col-lg-4 mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <input type="email" class="form-control form-control-lg text-center" placeholder="Enter Your Email Address" required>\r
              </div>\r
              <div class="col-auto mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <button type="submit" class="btn bg-color text-light btn-lg px-4">SIGN UP</button>\r
              </div>\r
\r
              <div class="col-12 text-center wow fadeInUp" data-wow-delay=".8s">\r
                <div class="form-check d-flex justify-content-center mb-2">\r
                  <input class="form-check-input me-2" type="checkbox" value="" id="updatesCheck" checked>\r
                  <label class="form-check-label" for="updatesCheck">\r
                    Keep me updated on other news and exclusive offers\r
                  </label>\r
                </div>\r
                <p class="small text-muted wow fadeInUp" data-wow-delay="1s">\r
                  Note: You can opt-out at any time. See our <a href="#" class="text-decoration-underline">Privacy Policy</a> and <a href="#" class="text-decoration-underline">Terms</a>.\r
                </p>\r
              </div>\r
            </form>\r
          </div>\r
        </section>\r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/countdown-custom.js"><\/script>\r
    <script src="js/custom-marquee.js"><\/script>\r
    <script src="js/swiper.js"><\/script>\r
    <script src="js/custom-swiper-1.js"><\/script>\r
\r
</body>\r
\r
</html>`,wp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/swiper.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- custom css -->\r
    <link href="css/swiper-custom-1.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark text-light no-top no-bottom relative overflow-hidden z-1000">\r
            <div class="abs abs-centered z-2 w-80">\r
                <div class="container wow scaleIn" data-wow-duration="3s">\r
                    <div class="row justify-content-center">\r
                        <div class="col-lg-12 text-center">\r
                            <div class="subtitle">The Future of Intelligence</div>\r
                            <h1 class="fs-72 text-uppercase fs-sm-12vw mb-4 lh-1">Pioneering breakthroughs in AI, robotics, and digital human evolution.</h1>\r
\r
                            <div class="d-block d-md-flex justify-content-center">\r
                                <div class="d-flex justify-content-center align-items-center mx-4">\r
                                    <i class="fa fa-calendar id-color me-3"></i>\r
                                    <h4 class="mb-0">October 1–5, 2025</h4>\r
                                </div>\r
\r
                                <div class="d-flex justify-content-center align-items-center mx-4">\r
                                    <i class="fa fa-location-pin id-color me-3"></i>\r
                                    <h4 class="mb-0">San Francisco, CA</h4>\r
                                </div>\r
                            </div>\r
\r
                            <div class="spacer-single"></div>\r
\r
                            <a class="btn-main mx-2 fx-slide" href="#section-tickets"><span>Get Tickets</span></a>\r
                            <a class="btn-main btn-line mx-2 fx-slide" href="#section-schedule"><span>View Schedule</span></a>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="mh-800">\r
                <div class="swiper">\r
                  <!-- Additional required wrapper -->\r
                  <div class="swiper-wrapper">\r
                    <!-- Slides -->\r
                    <div class="swiper-slide">\r
                        <div class="swiper-inner" data-bgimage="url(images/slider/1.webp)">\r
                            <div class="sw-overlay op-6"></div>\r
                            <div class="gradient-edge-bottom"></div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Slides -->\r
                    <div class="swiper-slide">\r
                        <div class="swiper-inner" data-bgimage="url(images/slider/2.webp)">\r
                            <div class="sw-overlay op-6"></div>\r
                            <div class="gradient-edge-bottom"></div>\r
                        </div>\r
                    </div>\r
\r
\r
                  </div>\r
                  <!-- If we need pagination -->\r
                  <div class="swiper-pagination"></div>\r
\r
                  <!-- If we need navigation buttons -->\r
                  <div class="swiper-button-prev"></div>\r
                  <div class="swiper-button-next"></div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-about" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row  gx-5 align-items-center">\r
                    <div class="col-lg-6">\r
                          <div class="me-lg-5 pe-lg-5 py-5 my-5">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".2s">About the Event</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".4s">A Global Gathering of AI Innovators</h2>\r
                              <p class="wow fadeInUp" data-wow-delay=".6s">Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity, and the future\r
                              of work.</p>\r
\r
                              <ul class="ul-check">\r
                                  <li class="wow fadeInUp" data-wow-delay=".8s">5 days of keynotes, workshops, and networking</li>\r
                                  <li class="wow fadeInUp" data-wow-delay=".9s">50 world-class speakers</li>\r
                                  <li class="wow fadeInUp" data-wow-delay="1s">Startup showcase and live demos</li>\r
                              </ul>\r
\r
                          </div>\r
                    </div>\r
\r
                    <div class="col-lg-6">\r
                        <div class="row g-4">\r
                            <div class="col-6">\r
                                <div class="relative overflow-hidden rounded-1 wow scale-in-mask mb-4">\r
                                    <img src="images/misc/s1.webp" class="img-fluid" alt="">\r
                                    <div class="gradient-edge-bottom h-50"></div>\r
                                </div>\r
                                <div class="col-12 text-center">\r
                                    <div class="bg-color text-light p-30 rounded-1 wow scale-in-mask">\r
                                        <div class="de_count">\r
                                            <h2 class="mb-0"><span class="timer" data-to="50" data-speed="3000"></span></h2>\r
                                            <div>World-class Speakers</div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="col-6">\r
                                <div class="spacer-double sm-hide"></div>\r
                                <div class="col-12 text-center">\r
                                    <div class="bg-color-2 text-light p-30 rounded-1 wow scale-in-mask">\r
                                        <div class="de_count">\r
                                            <h2 class="mb-0"><span class="timer" data-to="5" data-speed="3000"></span></h2>\r
                                            <div>Days of Event</div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div class="relative overflow-hidden rounded-1 wow scale-in-mask mt-4">\r
                                    <img src="images/misc/s2.webp" class="img-fluid" alt="">\r
                                    <div class="gradient-edge-bottom h-50"></div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="section-dark p-0" aria-label="section">\r
            <div class="bg-color text-light d-flex py-4 lh-1 rot-2">\r
              <div class="de-marquee-list-1 wow fadeInLeft" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
\r
            <div class="bg-color-2 text-light d-flex py-4 lh-1 rot-min-1 mt-min-20">\r
              <div class="de-marquee-list-2 wow fadeInRight" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-why-attend" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-6 offset-lg-3 text-center">\r
                        <div class="subtitle wow fadeInUp mb-3">Why Attend</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">What You’ll Gain</h2>\r
                        <p class="lead mb-0 wow fadeInUp">Hear from global AI pioneers, industry disruptors, and bold thinkers shaping the future across every domain.</p>\r
                    </div>\r
                </div>\r
\r
                <div class="spacer-single"></div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Cutting-Edge Knowledge</h4>\r
                                        <p class="mb-0">Stay ahead of the curve with insights from AI leaders shaping tomorrow’s technology.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s3.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Hands-On Learning</h4>\r
                                        <p class="mb-0">Join live workshops and labs to build practical skills in AI and machine learning.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s4.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Global Networking</h4>\r
                                        <p class="mb-0">Meet developers, founders, and researchers from around the world to collaborate and grow.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s5.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Startup Showcase</h4>\r
                                        <p class="mb-0">Explore the latest AI tools and ideas from promising startups and research labs.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s6.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>AI Career Boost</h4>\r
                                        <p class="mb-0">Access exclusive job fairs, mentorship sessions, and recruiting events to grow your career.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s7.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Ethics & Future</h4>\r
                                        <p class="mb-0">Engage in vital conversations around AI ethics, policy, and the future of intelligence.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s8.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/2.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container relative z-4">\r
                <div class="row align-items-center g-5">\r
                    <div class="col-md-4">\r
                        <div class="relative w-100 d-inline-block pe-5">\r
                            <div class="abs bg-color w-80px h-80px rounded-1 text-center end-0 z-2 wow scaleIn">\r
                                <i class="icofont-quote-left text-white fs-40 d-block pt-3"></i>\r
                            </div>\r
                            <img src="images/misc/s9.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-md-8">\r
                        <h3 class="fs-32 mb-4 wow fadeInUp">“Artificial intelligence is advancing rapidly, and while it offers immense opportunity, it also poses significant risks. If not properly regulated and aligned with human values, AI could become a fundamental threat to civilization.”</h3>\r
\r
                        <span>Elon Musk</span>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-speakers" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-6 relative z-3">\r
                          <div class="text-center">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Speakers</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".2s">Meet the Visionaries</h2>\r
                              <p class="lead wow fadeInUp">Whether it's a quick refresh or a deep clean transformation, our expert touch leaves your home or office shining.</p>\r
                          </div>\r
                    </div>\r
                </div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/1.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Joshua Henry</h3>\r
                                    <span>Chief AI Scientist, OpenAI</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/2.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Leila Zhang</h3>\r
                                    <span>VP of Machine Learning, Google</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/3.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Carlos Rivera</h3>\r
                                    <span>Founder & CEO, NeuralCore</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/1.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container">\r
                <div class="row g-4">\r
\r
                    <div class="col-md-12 wow fadeInUp">\r
                        <div class="owl-6 no-alpha owl-carousel owl-theme wow mask-right">\r
                            <img src="images/logo-light/1.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/2.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/3.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/4.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/5.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/6.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/7.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/8.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/9.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/10.webp" class="w-100 px-4" alt="">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-schedule" class="bg-dark section-dark text-light">\r
            <div class="container">\r
              <div class="row g-4 gx-5 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Event Schedule</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">5 Days of AI Excellence</h2>\r
                </div>\r
              </div>\r
              <div class="row g-4 gx-5 justify-content-center wow fadeInUp">\r
                <div class="col-lg-12">\r
                    <div class="de-tab plain">\r
                        <ul class="d-tab-nav mb-4 pb-4 d-flex justify-content-between">\r
                            <li class="active-tab">\r
                                <h3>Day 1</h3>\r
                                Oct 1, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 2</h3>\r
                                Oct 2, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 3</h3>\r
                                Oct 3, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 4</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 5</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                        </ul>\r
                        <ul class="d-tab-content pt-3 wow fadeInUp">   \r
                            <!-- day 1 -->                        \r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            08:00 – 10:00 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/1.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Joshua Henry</h5>\r
                                                    AI Research Lead, DeepTech Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Opening Keynote – The State of AI 2025</h3>\r
                                            <p class="fs-15 mb-0">Kick off the event with an insightful overview of where artificial intelligence is headed. Ava will explore breakthroughs, global shifts, and what’s next in deep learning, generative models, and AI ethics.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            12:00 – 14:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/2.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    VP of Machine Learning, Google\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building Human-Centered AI Products</h3>\r
                                            <p class="fs-15 mb-0">This session covers how to design AI solutions that prioritize usability, fairness, and real-world impact. Bring your laptop—hands-on UX exercises included.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 18:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/3.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Carlos Rivera</h5>\r
                                                    Founder & CEO, NeuralCore\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI Policy & Regulation – A Global Overview</h3>\r
                                            <p class="fs-15 mb-0">Learn how nations and organizations are approaching AI governance, including frameworks for data privacy, bias mitigation, and accountability in model deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            20:00 – 22:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/4.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Maria Gonzalez</h5>\r
                                                    Founder & CEO, SynthCore AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building a Startup with AI at the Core</h3>\r
                                            <p class="fs-15 mb-0">Marco shares his journey launching an AI-first startup. Discover tips on tech stacks, team-building, funding, and scaling responsibly.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                            </li>\r
\r
                            <!-- day 2 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/5.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    Head of AI Strategy, VisionFlow\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical AI — From Theory to Practice</h3>\r
                                            <p class="fs-15 mb-0">Explore how leading companies are implementing fairness, accountability, and transparency in real-world AI systems across healthcare and finance.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/6.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lisa Zhang</h5>\r
                                                    AI Ethics Researcher, FairAI Group\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Bias in Data — Hidden Dangers in AI Pipelines</h3>\r
                                            <p class="fs-15 mb-0">Lisa dives deep into the causes of bias in training data and showcases methods to detect and mitigate harm before deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/7.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Markus Blom</h5>\r
                                                    CTO, SynthMind AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Generative Models Beyond Text</h3>\r
                                            <p class="fs-15 mb-0">A practical tour of the next generation of multimodal models generating images, video, and even 3D environments with AI.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/8.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Priya Natarajan</h5>\r
                                                    Lead Engineer, CogniWare\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI-Powered Interfaces</h3>\r
                                            <p class="fs-15 mb-0">Learn how to embed conversational AI into web and mobile apps using modern open-source frameworks and API-first design.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 3 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/9.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Sofia Romero</h5>\r
                                                    ML Engineer, NeuronEdge\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Transformers in 2025 — What's Next?</h3>\r
                                            <p class="fs-15 mb-0">A technical session diving into the future of transformer architectures, memory optimization, and scaling challenges.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/10.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Tomás Eriksson</h5>\r
                                                    Founder, RealSim AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Synthetic Data Generation for Training</h3>\r
                                            <p class="fs-15 mb-0">Tomás shares tools and techniques for creating high-quality synthetic datasets that speed up training and reduce risk.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/11.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Aisha Mensah</h5>\r
                                                    Senior AI Strategist, Datavine\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Panel: AI Regulation & Global Policy Outlook</h3>\r
                                            <p class="fs-15 mb-0">Top voices discuss the global AI policy landscape, upcoming legislation, and how it will shape the future of AI deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/12.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leo Tanaka</h5>\r
                                                    Robotics Engineer, MetaForm\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Embodied AI in Robotics</h3>\r
                                            <p class="fs-15 mb-0">Discover how AI is powering next-gen robotics for manufacturing, logistics, and autonomous mobility through real-time interaction models.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 4 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/13.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Nina Köhler</h5>\r
                                                    Chief Product Officer, SynthOS\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI in Product Design — From Concept to Launch</h3>\r
                                            <p class="fs-15 mb-0">Nina shares how AI is revolutionizing product development, from ideation to real-time user feedback integration.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/14.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Emmanuel Ruiz</h5>\r
                                                    CEO, NextCore Analytics\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Scaling AI Infrastructure for Enterprise</h3>\r
                                            <p class="fs-15 mb-0">Explore key considerations when deploying and managing scalable, secure, and cost-effective AI systems in the enterprise space.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/15.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Isabelle Chen</h5>\r
                                                    Head of Language Models, LumoAI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Multilingual AI — Global Challenges & Innovations</h3>\r
                                            <p class="fs-15 mb-0">How modern LLMs are overcoming linguistic bias, translation errors, and dialect diversity in global applications.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/16.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Connor Walsh</h5>\r
                                                    Cloud AI Architect, SkyStack\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI Pipelines in the Cloud</h3>\r
                                            <p class="fs-15 mb-0">Hands-on session building a full AI workflow using serverless tech, vector databases, and model deployment strategies.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                                \r
                            </li>\r
\r
                            <!-- day 5 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/17.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Elena Greco</h5>\r
                                                    Ethics Advisor, Global AI Forum\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical Design in AI — A Human-Centered Approach</h3>\r
                                            <p class="fs-15 mb-0">A deep dive into responsible AI, highlighting bias mitigation, fairness, transparency, and global implications of autonomous systems.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/18.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Marcus Dlamini</h5>\r
                                                    Founder, EduAI Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Personalized Learning with AI</h3>\r
                                            <p class="fs-15 mb-0">Explore how AI-driven platforms are transforming education with adaptive learning paths and dynamic content delivery.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/19.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lara Nguyen</h5>\r
                                                    GenAI Director, NovaSynth\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Creative AI — From Text to Video</h3>\r
                                            <p class="fs-15 mb-0">Lara demonstrates how generative AI is transforming content creation, with real-time demos in video, audio, and image generation.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/20.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Dr. Hassan Al-Mansour</h5>\r
                                                    Lead Data Scientist, FutureVision\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Closing Keynote: AI & Humanity — Co-Evolution or Collapse?</h3>\r
                                            <p class="fs-15 mb-0">A visionary closing on AI’s long-term trajectory, human-AI collaboration, and the existential questions we must answer now.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                        </ul>\r
                    </div>\r
                </div>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-tickets" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/7.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-7"></div>\r
\r
            <div class="container relative z-2">\r
                <div class="row g-4 gx-5 justify-content-center">\r
                  <div class="col-lg-6 text-center">\r
                      <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Ticket Options</div>\r
                      <h2 class="wow fadeInUp" data-wow-delay=".2s">Choose Your Pass</h2>\r
                      <p class="lead wow fadeInUp" data-wow-delay=".4s">Select the perfect ticket for your needs and gain access to exclusive sessions, workshops, and more.</p>\r
                  </div>\r
                </div>\r
\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-12">\r
                        <div class="owl-carousel owl-theme owl-3-dots wow mask-right">\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Standard</h2>\r
                                    <h4 class="mb-4">$299</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
\r
                                <div class="relative overflow-hidden">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and sessions.</li>\r
                                            <li>Admission to exhibitions and demos.</li>\r
                                            <li>Networking opportunities.</li>\r
                                            <li>Digital materials and session recordings.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                                    \r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>VIP</h2>\r
                                    <h4 class="mb-4">$699</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Standard benefits.</li>\r
                                            <li>VIP lounge access and exclusive events.</li>\r
                                            <li>Front-row seating and priority workshop access.</li>\r
                                            <li>VIP swag bag and exclusive content.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Full Access</h2>\r
                                    <h4 class="mb-4">$1199</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All VIP benefits.</li>\r
                                            <li>Access to all workshops and breakout sessions.</li>\r
                                            <li>Personalized session scheduling.</li>\r
                                            <li>Speaker meet-and-greet and after-party access.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Exclusive Access</h2>\r
                                    <h4 class="mb-4">$2499</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Full Access Pass benefits.</li>\r
                                            <li>Private one-on-one sessions with speakers.</li>\r
                                            <li>Priority access to all events and workshops.</li>\r
                                            <li>Exclusive VIP gala and after-party invitations.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Student</h2>\r
                                    <h4 class="mb-4">$149</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and workshops.</li>\r
                                            <li>Student-specific networking events.</li>\r
                                            <li>Discounted online resources post-event.</li>\r
                                            <li>Special student meetups for networking.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Virtual</h2>\r
                                    <h4 class="mb-4">$99</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Live-streamed keynotes and workshops.</li>\r
                                            <li>On-demand access to recorded sessions.</li>\r
                                            <li>Interactive Q&A with speakers.</li>\r
                                            <li>Virtual networking and digital swag.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-venue" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Event Location</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Location & Venue</h2>\r
                    <p class="lead wow fadeInUp" data-wow-delay=".6s">Join us in the heart of innovation at San Francisco Tech Pavilion—surrounded by top hotels, transit, and culture.</p>\r
                </div>\r
            </div>\r
\r
            <div class="row g-4">\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l1.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l2.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="clearfix"></div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".2s">\r
                        <i class="fs-60 id-color icofont-google-map"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Address</h4>\r
                            <p>121 AI Blvd, San Francisco, CA 94107</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".4s">\r
                        <i class="fs-60 id-color icofont-phone"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Phone</h4>\r
                            <p>Call: +1 123 456 789</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".6s">\r
                        <i class="fs-60 id-color icofont-envelope"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Email</h4>\r
                            <p>contact@aivent.com</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
          </div>\r
        </section>\r
\r
        <section  id="section-faq" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-5">\r
                        <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Everything You Need to Know</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>\r
                    </div>\r
\r
                    <div class="col-lg-7">\r
                        <div class="accordion s2 wow fadeInUp">\r
                            <div class="accordion-section">\r
                                <div class="accordion-section-title" data-tab="#accordion-a1">\r
                                    What is the AI Summit 2025?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a1">\r
                                    The AI Summit 2025 is a premier event gathering leading AI experts, thought leaders, and innovators. It features keynotes, workshops, panels, and networking opportunities focusing on the latest advancements in artificial intelligence.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a2">\r
                                    When and where will the event be held?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a2">\r
                                    The AI Summit 2025 will take place from **[Event Dates]** at **[Event Location]**. More details about the venue and directions will be provided closer to the event.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a3">\r
                                    How can I register for the event?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a3">\r
                                    You can register for the AI Summit 2025 through our official website. Simply choose your ticket type and fill out the registration form.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a4">\r
                                    What ticket options are available?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a4">\r
                                    We offer a range of ticket options, including Standard, VIP, Full Access Pass, Student, and Virtual tickets. You can find more details about each ticket type on our [Tickets Page](#).\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a5">\r
                                    Can I transfer my ticket to someone else?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a5">\r
                                    Tickets are non-transferable. If you are unable to attend, please contact our support team for assistance.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a6">\r
                                    Will there be virtual participation?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a6">\r
                                    Yes! For those who can’t attend in person, we offer a **Virtual Ticket**. This provides access to live-streamed sessions, workshops, and networking opportunities online.\r
                                </div>\r
                            </div>\r
                        </div>                        \r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/3.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-8 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Stay in the Loop</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Join the Future of Innovation</h2>\r
                    <p class="wow fadeInUp" data-wow-delay=".4s">\r
                      Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We'll share other exciting news and exclusive offers, too.\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <form class="row justify-content-center">\r
              <div class="col-md-6 col-lg-4 mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <input type="email" class="form-control form-control-lg text-center" placeholder="Enter Your Email Address" required>\r
              </div>\r
              <div class="col-auto mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <button type="submit" class="btn bg-color text-light btn-lg px-4">SIGN UP</button>\r
              </div>\r
\r
              <div class="col-12 text-center wow fadeInUp" data-wow-delay=".8s">\r
                <div class="form-check d-flex justify-content-center mb-2">\r
                  <input class="form-check-input me-2" type="checkbox" value="" id="updatesCheck" checked>\r
                  <label class="form-check-label" for="updatesCheck">\r
                    Keep me updated on other news and exclusive offers\r
                  </label>\r
                </div>\r
                <p class="small text-muted wow fadeInUp" data-wow-delay="1s">\r
                  Note: You can opt-out at any time. See our <a href="#" class="text-decoration-underline">Privacy Policy</a> and <a href="#" class="text-decoration-underline">Terms</a>.\r
                </p>\r
              </div>\r
            </form>\r
          </div>\r
        </section>\r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/countdown-custom.js"><\/script>\r
    <script src="js/custom-marquee.js"><\/script>\r
    <script src="js/swiper.js"><\/script>\r
    <script src="js/custom-swiper-1.js"><\/script>\r
\r
</body>\r
\r
</html>`,bp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark no-top no-bottom text-light jarallax relative mh-800 jarallax">\r
            <img src="images/background/5.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-bottom h-50"></div>\r
            <div class="sw-overlay op-5"></div>\r
            <div class="abs w-80 bottom-10 z-2 w-100">\r
                <div class="container">\r
                    <div class="row">\r
                        <div class="col-lg-12">\r
                            <div class="relative wow mask-right">\r
                                <div class="text-start">\r
                                    <h1 class="fs-130 text-uppercase fs-sm-10vw mb-0 lh-1">The Future</h1>\r
                                </div>\r
\r
                                <div class="text-lg-end">\r
                                    <h1 class="fs-130 text-uppercase fs-sm-10vw mb-4 lh-1">Intelligent</h1>\r
                                </div>\r
\r
                                <div class="abs top-0 pt-lg-5 end-0 p-sm-relative wow fadeInRight" data-wow-delay="1.5s">\r
                                    <div class="d-flex">\r
                                        <i class="fs-60 icofont-google-map id-color"></i>\r
                                        <div class="ms-3 mb-4">\r
                                            <h4 class="mb-0">121 AI Blvd,<br>San Francisco BCA 94107</h4>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
\r
                                <div class="abs w-30 w-sm-100 bottom-0 p-sm-relative wow fadeInRight" data-wow-delay="1.5s">\r
                                    <p>Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity.</p>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-about" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row  gx-5 align-items-center">\r
                    <div class="col-lg-6">\r
                          <div class="me-lg-5 pe-lg-5 py-5 my-5">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".2s">About the Event</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".4s">A Global Gathering of AI Innovators</h2>\r
                              <p class="wow fadeInUp" data-wow-delay=".6s">Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity, and the future\r
                              of work.</p>\r
\r
                              <ul class="ul-check">\r
                                  <li class="wow fadeInUp" data-wow-delay=".8s">5 days of keynotes, workshops, and networking</li>\r
                                  <li class="wow fadeInUp" data-wow-delay=".9s">50 world-class speakers</li>\r
                                  <li class="wow fadeInUp" data-wow-delay="1s">Startup showcase and live demos</li>\r
                              </ul>\r
\r
                          </div>\r
                    </div>\r
\r
                    <div class="col-lg-6">\r
                        <div class="row g-4">\r
                            <div class="col-6">\r
                                <div class="relative overflow-hidden rounded-1 wow scale-in-mask mb-4">\r
                                    <img src="images/misc/s1.webp" class="img-fluid" alt="">\r
                                    <div class="gradient-edge-bottom h-50"></div>\r
                                </div>\r
                                <div class="col-12 text-center">\r
                                    <div class="bg-color text-light p-30 rounded-1 wow scale-in-mask">\r
                                        <div class="de_count">\r
                                            <h2 class="mb-0"><span class="timer" data-to="50" data-speed="3000"></span></h2>\r
                                            <div>World-class Speakers</div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="col-6">\r
                                <div class="spacer-double sm-hide"></div>\r
                                <div class="col-12 text-center">\r
                                    <div class="bg-color-2 text-light p-30 rounded-1 wow scale-in-mask">\r
                                        <div class="de_count">\r
                                            <h2 class="mb-0"><span class="timer" data-to="5" data-speed="3000"></span></h2>\r
                                            <div>Days of Event</div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div class="relative overflow-hidden rounded-1 wow scale-in-mask mt-4">\r
                                    <img src="images/misc/s2.webp" class="img-fluid" alt="">\r
                                    <div class="gradient-edge-bottom h-50"></div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="section-dark p-0" aria-label="section">\r
            <div class="bg-color text-light d-flex py-4 lh-1 rot-2">\r
              <div class="de-marquee-list-1 wow fadeInLeft" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
\r
            <div class="bg-color-2 text-light d-flex py-4 lh-1 rot-min-1 mt-min-20">\r
              <div class="de-marquee-list-2 wow fadeInRight" data-wow-duration="3s">\r
                <span class="fs-60 mx-3">Next Intelligence</span>\r
                <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Future Now</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Empowering Innovation</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Smarter Tomorrow</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Think Forward</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
                <span class="fs-60 mx-3">Cognitive Shift</span>\r
                 <span class="fs-60 mx-3 op-2">/</span>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-why-attend" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-6 offset-lg-3 text-center">\r
                        <div class="subtitle wow fadeInUp mb-3">Why Attend</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">What You’ll Gain</h2>\r
                        <p class="lead mb-0 wow fadeInUp">Hear from global AI pioneers, industry disruptors, and bold thinkers shaping the future across every domain.</p>\r
                    </div>\r
                </div>\r
\r
                <div class="spacer-single"></div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Cutting-Edge Knowledge</h4>\r
                                        <p class="mb-0">Stay ahead of the curve with insights from AI leaders shaping tomorrow’s technology.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s3.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Hands-On Learning</h4>\r
                                        <p class="mb-0">Join live workshops and labs to build practical skills in AI and machine learning.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s4.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Global Networking</h4>\r
                                        <p class="mb-0">Meet developers, founders, and researchers from around the world to collaborate and grow.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s5.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Startup Showcase</h4>\r
                                        <p class="mb-0">Explore the latest AI tools and ideas from promising startups and research labs.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s6.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>AI Career Boost</h4>\r
                                        <p class="mb-0">Access exclusive job fairs, mentorship sessions, and recruiting events to grow your career.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s7.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4 col-md-6">\r
                        <div class="hover">\r
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">\r
                                <div class="abs p-40 bottom-0 z-2">\r
                                    <div class="relative wow fadeInUp">\r
                                        <h4>Ethics & Future</h4>\r
                                        <p class="mb-0">Engage in vital conversations around AI ethics, policy, and the future of intelligence.</p>\r
                                    </div>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100"></div>\r
                                <img src="images/misc/s8.webp" class="w-100 hover-scale-1-1" alt="">\r
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/2.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container relative z-4">\r
                <div class="row align-items-center g-5">\r
                    <div class="col-md-4">\r
                        <div class="relative w-100 d-inline-block pe-5">\r
                            <div class="abs bg-color w-80px h-80px rounded-1 text-center end-0 z-2 wow scaleIn">\r
                                <i class="icofont-quote-left text-white fs-40 d-block pt-3"></i>\r
                            </div>\r
                            <img src="images/misc/s9.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-md-8">\r
                        <h3 class="fs-32 mb-4 wow fadeInUp">“Artificial intelligence is advancing rapidly, and while it offers immense opportunity, it also poses significant risks. If not properly regulated and aligned with human values, AI could become a fundamental threat to civilization.”</h3>\r
\r
                        <span>Elon Musk</span>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-speakers" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-6 relative z-3">\r
                          <div class="text-center">\r
                              <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Speakers</div>\r
                              <h2 class="wow fadeInUp" data-wow-delay=".2s">Meet the Visionaries</h2>\r
                              <p class="lead wow fadeInUp">Whether it's a quick refresh or a deep clean transformation, our expert touch leaves your home or office shining.</p>\r
                          </div>\r
                    </div>\r
                </div>\r
\r
                <div class="row g-4">\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/1.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Joshua Henry</h3>\r
                                    <span>Chief AI Scientist, OpenAI</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/2.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Leila Zhang</h3>\r
                                    <span>VP of Machine Learning, Google</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">\r
                            <img src="images/team/3.webp" class="w-100 hover-scale-1-1" alt="">\r
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>\r
                            <div class="abs w-100 start-0 bottom-0 z-3">\r
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">\r
                                    <h3 class="mb-0">Carlos Rivera</h3>\r
                                    <span>Founder & CEO, NeuralCore</span>\r
                                </div>\r
                                <div class="gradient-edge-bottom h-100 op-8"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/1.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
            <div class="container">\r
                <div class="row g-4">\r
\r
                    <div class="col-md-12 wow fadeInUp">\r
                        <div class="owl-6 no-alpha owl-carousel owl-theme wow mask-right">\r
                            <img src="images/logo-light/1.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/2.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/3.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/4.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/5.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/6.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/7.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/8.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/9.webp" class="w-100 px-4" alt="">\r
                            <img src="images/logo-light/10.webp" class="w-100 px-4" alt="">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-schedule" class="bg-dark section-dark text-light">\r
            <div class="container">\r
              <div class="row g-4 gx-5 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Event Schedule</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">5 Days of AI Excellence</h2>\r
                </div>\r
              </div>\r
              <div class="row g-4 gx-5 justify-content-center wow fadeInUp">\r
                <div class="col-lg-12">\r
                    <div class="de-tab plain">\r
                        <ul class="d-tab-nav mb-4 pb-4 d-flex justify-content-between">\r
                            <li class="active-tab">\r
                                <h3>Day 1</h3>\r
                                Oct 1, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 2</h3>\r
                                Oct 2, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 3</h3>\r
                                Oct 3, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 4</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                            <li>\r
                                <h3>Day 5</h3>\r
                                Oct 5, 2025\r
                            </li>\r
                        </ul>\r
                        <ul class="d-tab-content pt-3 wow fadeInUp">   \r
                            <!-- day 1 -->                        \r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            08:00 – 10:00 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/1.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Joshua Henry</h5>\r
                                                    AI Research Lead, DeepTech Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Opening Keynote – The State of AI 2025</h3>\r
                                            <p class="fs-15 mb-0">Kick off the event with an insightful overview of where artificial intelligence is headed. Ava will explore breakthroughs, global shifts, and what’s next in deep learning, generative models, and AI ethics.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            12:00 – 14:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/2.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    VP of Machine Learning, Google\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building Human-Centered AI Products</h3>\r
                                            <p class="fs-15 mb-0">This session covers how to design AI solutions that prioritize usability, fairness, and real-world impact. Bring your laptop—hands-on UX exercises included.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 18:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/3.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Carlos Rivera</h5>\r
                                                    Founder & CEO, NeuralCore\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI Policy & Regulation – A Global Overview</h3>\r
                                            <p class="fs-15 mb-0">Learn how nations and organizations are approaching AI governance, including frameworks for data privacy, bias mitigation, and accountability in model deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            20:00 – 22:00 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/4.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Maria Gonzalez</h5>\r
                                                    Founder & CEO, SynthCore AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Building a Startup with AI at the Core</h3>\r
                                            <p class="fs-15 mb-0">Marco shares his journey launching an AI-first startup. Discover tips on tech stacks, team-building, funding, and scaling responsibly.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                            </li>\r
\r
                            <!-- day 2 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/5.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leila Zhang</h5>\r
                                                    Head of AI Strategy, VisionFlow\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical AI — From Theory to Practice</h3>\r
                                            <p class="fs-15 mb-0">Explore how leading companies are implementing fairness, accountability, and transparency in real-world AI systems across healthcare and finance.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/6.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lisa Zhang</h5>\r
                                                    AI Ethics Researcher, FairAI Group\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Bias in Data — Hidden Dangers in AI Pipelines</h3>\r
                                            <p class="fs-15 mb-0">Lisa dives deep into the causes of bias in training data and showcases methods to detect and mitigate harm before deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/7.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Markus Blom</h5>\r
                                                    CTO, SynthMind AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Generative Models Beyond Text</h3>\r
                                            <p class="fs-15 mb-0">A practical tour of the next generation of multimodal models generating images, video, and even 3D environments with AI.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/8.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Priya Natarajan</h5>\r
                                                    Lead Engineer, CogniWare\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI-Powered Interfaces</h3>\r
                                            <p class="fs-15 mb-0">Learn how to embed conversational AI into web and mobile apps using modern open-source frameworks and API-first design.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 3 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/9.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Sofia Romero</h5>\r
                                                    ML Engineer, NeuronEdge\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Transformers in 2025 — What's Next?</h3>\r
                                            <p class="fs-15 mb-0">A technical session diving into the future of transformer architectures, memory optimization, and scaling challenges.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/10.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Tomás Eriksson</h5>\r
                                                    Founder, RealSim AI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Synthetic Data Generation for Training</h3>\r
                                            <p class="fs-15 mb-0">Tomás shares tools and techniques for creating high-quality synthetic datasets that speed up training and reduce risk.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/11.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Aisha Mensah</h5>\r
                                                    Senior AI Strategist, Datavine\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Panel: AI Regulation & Global Policy Outlook</h3>\r
                                            <p class="fs-15 mb-0">Top voices discuss the global AI policy landscape, upcoming legislation, and how it will shape the future of AI deployment.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/12.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Leo Tanaka</h5>\r
                                                    Robotics Engineer, MetaForm\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Embodied AI in Robotics</h3>\r
                                            <p class="fs-15 mb-0">Discover how AI is powering next-gen robotics for manufacturing, logistics, and autonomous mobility through real-time interaction models.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                            <!-- day 4 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/13.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Nina Köhler</h5>\r
                                                    Chief Product Officer, SynthOS\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: AI in Product Design — From Concept to Launch</h3>\r
                                            <p class="fs-15 mb-0">Nina shares how AI is revolutionizing product development, from ideation to real-time user feedback integration.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/14.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Emmanuel Ruiz</h5>\r
                                                    CEO, NextCore Analytics\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Scaling AI Infrastructure for Enterprise</h3>\r
                                            <p class="fs-15 mb-0">Explore key considerations when deploying and managing scalable, secure, and cost-effective AI systems in the enterprise space.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/15.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Isabelle Chen</h5>\r
                                                    Head of Language Models, LumoAI\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Multilingual AI — Global Challenges & Innovations</h3>\r
                                            <p class="fs-15 mb-0">How modern LLMs are overcoming linguistic bias, translation errors, and dialect diversity in global applications.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/16.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Connor Walsh</h5>\r
                                                    Cloud AI Architect, SkyStack\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Workshop: Building AI Pipelines in the Cloud</h3>\r
                                            <p class="fs-15 mb-0">Hands-on session building a full AI workflow using serverless tech, vector databases, and model deployment strategies.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
                                \r
                            </li>\r
\r
                            <!-- day 5 -->\r
                            <li>\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            09:00 – 10:30 AM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/17.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Elena Greco</h5>\r
                                                    Ethics Advisor, Global AI Forum\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Ethical Design in AI — A Human-Centered Approach</h3>\r
                                            <p class="fs-15 mb-0">A deep dive into responsible AI, highlighting bias mitigation, fairness, transparency, and global implications of autonomous systems.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            11:00 – 12:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/18.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Marcus Dlamini</h5>\r
                                                    Founder, EduAI Labs\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Personalized Learning with AI</h3>\r
                                            <p class="fs-15 mb-0">Explore how AI-driven platforms are transforming education with adaptive learning paths and dynamic content delivery.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="border-white-bottom-op-2 pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            14:00 – 15:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/19.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Lara Nguyen</h5>\r
                                                    GenAI Director, NovaSynth\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Session: Creative AI — From Text to Video</h3>\r
                                            <p class="fs-15 mb-0">Lara demonstrates how generative AI is transforming content creation, with real-time demos in video, audio, and image generation.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                                <!-- schedule item begin -->\r
                                <div class="pb-5 mb-5">\r
                                    <div class="row g-4 align-items-center">\r
                                        <div class="col-md-2">\r
                                            16:00 – 17:30 PM\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="d-flex align-items-center">\r
                                                <img src="images/team/20.webp" class="w-100px rounded-1 me-4" alt="">\r
                                                <div>\r
                                                    <h5 class="mb-0">Dr. Hassan Al-Mansour</h5>\r
                                                    Lead Data Scientist, FutureVision\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-6">\r
                                            <h3>Closing Keynote: AI & Humanity — Co-Evolution or Collapse?</h3>\r
                                            <p class="fs-15 mb-0">A visionary closing on AI’s long-term trajectory, human-AI collaboration, and the existential questions we must answer now.</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <!-- schedule item end -->\r
\r
                            </li>\r
\r
                        </ul>\r
                    </div>\r
                </div>\r
              </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-tickets" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/7.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-7"></div>\r
\r
            <div class="container relative z-2">\r
                <div class="row g-4 gx-5 justify-content-center">\r
                  <div class="col-lg-6 text-center">\r
                      <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Ticket Options</div>\r
                      <h2 class="wow fadeInUp" data-wow-delay=".2s">Choose Your Pass</h2>\r
                      <p class="lead wow fadeInUp" data-wow-delay=".4s">Select the perfect ticket for your needs and gain access to exclusive sessions, workshops, and more.</p>\r
                  </div>\r
                </div>\r
\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-12">\r
                        <div class="owl-carousel owl-theme owl-3-dots wow mask-right">\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Standard</h2>\r
                                    <h4 class="mb-4">$299</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
\r
                                <div class="relative overflow-hidden">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and sessions.</li>\r
                                            <li>Admission to exhibitions and demos.</li>\r
                                            <li>Networking opportunities.</li>\r
                                            <li>Digital materials and session recordings.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                                    \r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>VIP</h2>\r
                                    <h4 class="mb-4">$699</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Standard benefits.</li>\r
                                            <li>VIP lounge access and exclusive events.</li>\r
                                            <li>Front-row seating and priority workshop access.</li>\r
                                            <li>VIP swag bag and exclusive content.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Full Access</h2>\r
                                    <h4 class="mb-4">$1199</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All VIP benefits.</li>\r
                                            <li>Access to all workshops and breakout sessions.</li>\r
                                            <li>Personalized session scheduling.</li>\r
                                            <li>Speaker meet-and-greet and after-party access.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Exclusive Access</h2>\r
                                    <h4 class="mb-4">$2499</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Full Access Pass benefits.</li>\r
                                            <li>Private one-on-one sessions with speakers.</li>\r
                                            <li>Priority access to all events and workshops.</li>\r
                                            <li>Exclusive VIP gala and after-party invitations.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Student</h2>\r
                                    <h4 class="mb-4">$149</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and workshops.</li>\r
                                            <li>Student-specific networking events.</li>\r
                                            <li>Discounted online resources post-event.</li>\r
                                            <li>Special student meetups for networking.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="item">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Virtual</h2>\r
                                    <h4 class="mb-4">$99</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="py-4 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Live-streamed keynotes and workshops.</li>\r
                                            <li>On-demand access to recorded sessions.</li>\r
                                            <li>Interactive Q&A with speakers.</li>\r
                                            <li>Virtual networking and digital swag.</li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
\r
                                <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>\r
                            </div>\r
                            <!-- ticket item end -->\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section id="section-venue" class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-6 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Event Location</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Location & Venue</h2>\r
                    <p class="lead wow fadeInUp" data-wow-delay=".6s">Join us in the heart of innovation at San Francisco Tech Pavilion—surrounded by top hotels, transit, and culture.</p>\r
                </div>\r
            </div>\r
\r
            <div class="row g-4">\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l1.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="col-sm-6">\r
                    <img src="images/misc/l2.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">\r
                </div>\r
\r
                <div class="clearfix"></div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".2s">\r
                        <i class="fs-60 id-color icofont-google-map"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Address</h4>\r
                            <p>121 AI Blvd, San Francisco, CA 94107</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".4s">\r
                        <i class="fs-60 id-color icofont-phone"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Phone</h4>\r
                            <p>Call: +1 123 456 789</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4 col-md-6 mb-sm-30">\r
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".6s">\r
                        <i class="fs-60 id-color icofont-envelope"></i>\r
                        <div class="ms-3">\r
                            <h4 class="mb-0">Email</h4>\r
                            <p>contact@aivent.com</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
          </div>\r
        </section>\r
\r
        <section  id="section-faq" class="bg-dark section-dark text-light">\r
            <div class="container">\r
                <div class="row g-4">\r
                    <div class="col-lg-5">\r
                        <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Everything You Need to Know</div>\r
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>\r
                    </div>\r
\r
                    <div class="col-lg-7">\r
                        <div class="accordion s2 wow fadeInUp">\r
                            <div class="accordion-section">\r
                                <div class="accordion-section-title" data-tab="#accordion-a1">\r
                                    What is the AI Summit 2025?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a1">\r
                                    The AI Summit 2025 is a premier event gathering leading AI experts, thought leaders, and innovators. It features keynotes, workshops, panels, and networking opportunities focusing on the latest advancements in artificial intelligence.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a2">\r
                                    When and where will the event be held?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a2">\r
                                    The AI Summit 2025 will take place from **[Event Dates]** at **[Event Location]**. More details about the venue and directions will be provided closer to the event.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a3">\r
                                    How can I register for the event?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a3">\r
                                    You can register for the AI Summit 2025 through our official website. Simply choose your ticket type and fill out the registration form.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a4">\r
                                    What ticket options are available?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a4">\r
                                    We offer a range of ticket options, including Standard, VIP, Full Access Pass, Student, and Virtual tickets. You can find more details about each ticket type on our [Tickets Page](#).\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a5">\r
                                    Can I transfer my ticket to someone else?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a5">\r
                                    Tickets are non-transferable. If you are unable to attend, please contact our support team for assistance.\r
                                </div>\r
\r
                                <div class="accordion-section-title" data-tab="#accordion-a6">\r
                                    Will there be virtual participation?\r
                                </div>\r
                                <div class="accordion-section-content" id="accordion-a6">\r
                                    Yes! For those who can’t attend in person, we offer a **Virtual Ticket**. This provides access to live-streamed sessions, workshops, and networking opportunities online.\r
                                </div>\r
                            </div>\r
                        </div>                        \r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">\r
            <img src="images/background/3.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-top"></div>\r
            <div class="gradient-edge-bottom"></div>\r
            <div class="sw-overlay op-8"></div>\r
          <div class="container relative z-2">\r
            <div class="row g-4 justify-content-center">\r
                <div class="col-lg-8 text-center">\r
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Stay in the Loop</div>\r
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Join the Future of Innovation</h2>\r
                    <p class="wow fadeInUp" data-wow-delay=".4s">\r
                      Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We'll share other exciting news and exclusive offers, too.\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <form class="row justify-content-center">\r
              <div class="col-md-6 col-lg-4 mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <input type="email" class="form-control form-control-lg text-center" placeholder="Enter Your Email Address" required>\r
              </div>\r
              <div class="col-auto mb-3 wow fadeInUp" data-wow-delay=".6s">\r
                <button type="submit" class="btn bg-color text-light btn-lg px-4">SIGN UP</button>\r
              </div>\r
\r
              <div class="col-12 text-center wow fadeInUp" data-wow-delay=".8s">\r
                <div class="form-check d-flex justify-content-center mb-2">\r
                  <input class="form-check-input me-2" type="checkbox" value="" id="updatesCheck" checked>\r
                  <label class="form-check-label" for="updatesCheck">\r
                    Keep me updated on other news and exclusive offers\r
                  </label>\r
                </div>\r
                <p class="small text-muted wow fadeInUp" data-wow-delay="1s">\r
                  Note: You can opt-out at any time. See our <a href="#" class="text-decoration-underline">Privacy Policy</a> and <a href="#" class="text-decoration-underline">Terms</a>.\r
                </p>\r
              </div>\r
            </form>\r
          </div>\r
        </section>\r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/countdown-custom.js"><\/script>\r
    <script src="js/custom-marquee.js"><\/script>\r
\r
</body>\r
\r
</html>`,yp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="index.html#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="index.html#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark no-top no-bottom text-light jarallax relative mh-500 jarallax">\r
            <img src="images/background/4.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-bottom h-50"></div>\r
            <div class="sw-overlay op-5"></div>\r
            <div class="abs w-80 bottom-10 z-2 w-100">\r
                <div class="container">\r
                    <div class="row align-items-center justify-content-between gx-5">\r
                        <div class="col-lg-6">\r
                            <div class="relative wow mask-right">\r
                                <div class="text-start">\r
                                    <h1 class="fs-96 text-uppercase fs-sm-10vw mb-0 lh-1">Contact</h1>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-4 wow fadeInRight" data-wow-delay=".3s">\r
                            <p class="mb-0">Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity.</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
        \r
        <section class="section-dark relative">\r
            <div class="container">\r
              <div class="row align-items-center justify-content-center">\r
                <div class="col-lg-6">\r
                    <div class="subtitle">Get In Touch</div>\r
                    <h2 class="wow fadeInUp">We’re here to answer your questions.</h2>\r
\r
                    <p class="col-lg-8">Have a question, suggestion, or just want to say hi? We’re here and happy to hear from you!</p>\r
\r
                    <div class="spacer-single"></div>\r
\r
                    <div class="row">\r
                        <div class="col-lg-12">\r
                            <div class="relative mb-4">\r
                                <i class="abs fs-28 p-3 bg-color text-light rounded-1 icofont-location-pin"></i>\r
                                <div class="ms-80px">\r
                                    <h4 class="mb-0">Event Location</h4>\r
                                    121 AI Blvd, San Francisco, BCA 94107\r
                                </div>\r
                            </div>\r
\r
                            <div class="relative mb-4">\r
                                <i class="abs fs-28 p-3 bg-color text-light rounded-1 icofont-envelope"></i>\r
                                <div class="ms-80px">\r
                                    <h4 class="mb-0">Send a Message</h4>\r
                                    contact@aivent-support.com\r
                                </div>\r
                            </div>\r
\r
                            <div class="relative mb-4">\r
                                <i class="abs fs-28 p-3 bg-color text-light rounded-1 icofont-phone"></i>\r
                                <div class="ms-80px">\r
                                    <h4 class="mb-0">Call Us Directly</h4>\r
                                    +1 123 456 789\r
                                </div>\r
                            </div>\r
                            \r
                        </div>\r
                    </div>\r
\r
                </div>\r
\r
                <div class="col-lg-6">\r
                    <div class="bg-dark-2 rounded-1 p-60 relative">\r
                        <form name="contactForm" id="contact_form" method="post" action="#">\r
                        <div class="row g-4">\r
                            <div class="col-lg-12">\r
                                <h3>Get In Touch</h3>\r
                                <p>Have a question, suggestion, or just want to say hi? Fill out the form below and we’ll get back to you soon.</p>\r
\r
                                <div class="field-set">\r
                                    <input type="text" name="name" id="name" class="form-underline" placeholder="Your Name" required>\r
                                </div>\r
\r
                                <div class="field-set">\r
                                    <input type="text" name="email" id="email" class="form-underline" placeholder="Your Email" required>\r
                                </div>\r
\r
                                <div class="field-set">\r
                                    <input type="text" name="phone" id="phone" class="form-underline" placeholder="Your Phone" required>\r
                                </div>\r
\r
                                <div class="field-set">\r
                                    <textarea name="message" id="message" class="form-underline h-100px" placeholder="Your Message" required></textarea>\r
                                </div>\r
                            </div>\r
                        </div>\r
                            \r
                        \r
                        <div class="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>\r
                        <div id='submit' class="mt-3">\r
                            <input type='submit' id='send_message' value='Send Message' class="btn-main">\r
                        </div>\r
\r
                        <div id="success_message" class='success'>\r
                            Your message has been sent successfully. Refresh this page if you want to send more messages.\r
                        </div>\r
                        <div id="error_message" class='error'>\r
                            Sorry there was an error sending your form.\r
                        </div>\r
                    </form>\r
                    </div>\r
                </div>\r
              </div>\r
            </div>\r
        </section>        \r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/validation-contact.js"><\/script>\r
\r
</body>\r
\r
</html>`,xp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="index.html#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="index.html#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark no-top no-bottom text-light jarallax relative mh-500 jarallax">\r
            <img src="images/background/3.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-bottom h-50"></div>\r
            <div class="sw-overlay op-5"></div>\r
            <div class="abs w-80 bottom-10 z-2 w-100">\r
                <div class="container">\r
                    <div class="row align-items-center justify-content-between gx-5">\r
                        <div class="col-lg-6">\r
                            <div class="relative wow mask-right">\r
                                <div class="text-start">\r
                                    <h1 class="fs-96 text-uppercase fs-sm-10vw mb-0 lh-1">News</h1>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-4 wow fadeInRight" data-wow-delay=".3s">\r
                            <p class="mb-0">Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity.</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
        \r
        <section>\r
            <div class="container">\r
                <div class="row g-4">\r
\r
                    <div class="col-lg-4">\r
                        <a href="news-single.html" class="d-block hover relative rounded-20 overflow-hidden text-light">\r
                            <div class="abs z-2 bg-color rounded-2 text-white p-3 pb-2 m-4 text-center fw-600">\r
                                <h4 class="fs-36 mb-0 lh-1">28</h4>\r
                                <span>May</span>\r
                            </div>\r
\r
                            <img src="images/news/s1.webp" class="w-100 hover-scale-1-1" alt="">\r
\r
                            <div class="absolute start-0 bottom-0 p-4 z-2">\r
                                <h4>The AI Conference 2025 Set to Discuss AGI and Neural Architectures in SF</h4>\r
                            </div>\r
\r
                            <div class="gradient-edge-bottom h-70"></div>\r
                        </a>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <a href="news-single.html" class="d-block hover relative rounded-20 overflow-hidden text-light">\r
                            <div class="abs z-2 bg-color rounded-2 text-white p-3 pb-2 m-4 text-center fw-600">\r
                                <h4 class="fs-36 mb-0 lh-1">27</h4>\r
                                <span>May</span>\r
                            </div>\r
\r
                            <img src="images/news/s2.webp" class="w-100 hover-scale-1-1" alt="">\r
\r
                            <div class="absolute start-0 bottom-0 p-4 z-2">\r
                                <h4>Tony Blair Advocates for AI Integration in UK Healthcare and Education</h4>\r
                            </div>\r
\r
                            <div class="gradient-edge-bottom h-70"></div>\r
                        </a>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <a href="news-single.html" class="d-block hover relative rounded-20 overflow-hidden text-light">\r
                            <div class="abs z-2 bg-color rounded-2 text-white p-3 pb-2 m-4 text-center fw-600">\r
                                <h4 class="fs-36 mb-0 lh-1">26</h4>\r
                                <span>May</span>\r
                            </div>\r
\r
                            <img src="images/news/s3.webp" class="w-100 hover-scale-1-1" alt="">\r
\r
                            <div class="absolute start-0 bottom-0 p-4 z-2">\r
                                <h4>Apple's WWDC 2025 Faces Low Investor Expectations Over Siri AI Delay</h4>\r
                            </div>\r
\r
                            <div class="gradient-edge-bottom h-70"></div>\r
                        </a>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <a href="news-single.html" class="d-block hover relative rounded-20 overflow-hidden text-light">\r
                            <div class="abs z-2 bg-color rounded-2 text-white p-3 pb-2 m-4 text-center fw-600">\r
                                <h4 class="fs-36 mb-0 lh-1">25</h4>\r
                                <span>May</span>\r
                            </div>\r
\r
                            <img src="images/news/s4.webp" class="w-100 hover-scale-1-1" alt="">\r
\r
                            <div class="absolute start-0 bottom-0 p-4 z-2">\r
                                <h4>NYC Tech Week Highlights Human Skills' Value in AI-Dominated Discussions</h4>\r
                            </div>\r
\r
                            <div class="gradient-edge-bottom h-70"></div>\r
                        </a>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <a href="news-single.html" class="d-block hover relative rounded-20 overflow-hidden text-light">\r
                            <div class="abs z-2 bg-color rounded-2 text-white p-3 pb-2 m-4 text-center fw-600">\r
                                <h4 class="fs-36 mb-0 lh-1">24</h4>\r
                                <span>May</span>\r
                            </div>\r
\r
                            <img src="images/news/s5.webp" class="w-100 hover-scale-1-1" alt="">\r
\r
                            <div class="absolute start-0 bottom-0 p-4 z-2">\r
                                <h4>Data + AI Summit 2025 to Explore Data Engineering and Machine Learning</h4>\r
                            </div>\r
\r
                            <div class="gradient-edge-bottom h-70"></div>\r
                        </a>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                        <a href="news-single.html" class="d-block hover relative rounded-20 overflow-hidden text-light">\r
                            <div class="abs z-2 bg-color rounded-2 text-white p-3 pb-2 m-4 text-center fw-600">\r
                                <h4 class="fs-36 mb-0 lh-1">23</h4>\r
                                <span>May</span>\r
                            </div>\r
\r
                            <img src="images/news/s6.webp" class="w-100 hover-scale-1-1" alt="">\r
\r
                            <div class="absolute start-0 bottom-0 p-4 z-2">\r
                                <h4>World Summit AI 2025 in Amsterdam to Focus on Generative AI Trends</h4>\r
                            </div>\r
\r
                            <div class="gradient-edge-bottom h-70"></div>\r
                        </a>\r
                    </div>     \r
\r
                    <!-- pagination begin -->\r
                    <div class="col-lg-12 pt-4 text-center">\r
                        <div class="d-inline-block">\r
                            <nav aria-label="Page navigation example">\r
                              <ul class="pagination">\r
                                <li class="page-item">\r
                                  <a class="page-link" href="#" aria-label="Previous">\r
                                    <span aria-hidden="true"><i class="fa fa-chevron-left"></i></span>\r
                                  </a>\r
                                </li>\r
                                <li class="page-item"><a class="page-link" href="#">1</a></li>\r
                                <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>\r
                                <li class="page-item"><a class="page-link" href="#">3</a></li>\r
                                <li class="page-item">\r
                                  <a class="page-link" href="#" aria-label="Next">\r
                                    <span aria-hidden="true"><i class="fa fa-chevron-right"></i></span>\r
                                  </a>\r
                                </li>\r
                              </ul>\r
                            </nav>\r
                        </div>\r
                    </div>\r
                    <!-- pagination end -->\r
                    \r
                </div>\r
            </div>\r
        </section>        \r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/countdown-custom.js"><\/script>\r
    <script src="js/custom-marquee.js"><\/script>\r
\r
</body>\r
\r
</html>`,kp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme section-dark">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="index.html#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="index.html#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark no-top no-bottom text-light jarallax relative mh-500 jarallax">\r
            <img src="images/background/3.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-bottom h-50"></div>\r
            <div class="sw-overlay op-5"></div>\r
            <div class="abs bottom-10 z-2 w-100">\r
                <div class="container">\r
                    <div class="row justify-content-center align-items-center">\r
                        <div class="col-lg-8">\r
                            <h1 class="text-start fs-48 fs-sm-10vw wow fadeIn" data-wow-delay=".6s">\r
                                Global Design Minds to Converge at 2025 Design Expo Conference\r
                            </h1>\r
\r
                        </div>\r
\r
                        <div class="col-lg-2">\r
                            <div class="relative text-lg-end">\r
                                <div class="d-inline-block z-2 bg-color rounded-1 text-white p-4 text-center fw-600 wow fadeIn" data-wow-delay="1s">\r
                                    <h4 class="fs-60 mb-0 lh-1">28</h4>\r
                                    <span class="fs-20 fw-60">May</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
        \r
        <section>\r
            <div class="container">\r
                <div class="row g-4 justify-content-center">\r
                    <div class="col-lg-10">\r
                        <div class="blog-read">\r
\r
                            <div class="post-text">\r
\r
                                <img src="images/misc/sd1.webp" class="w-100 rounded-1 mb-4" alt="">\r
\r
                                <p>The 2025 Design Expo Conference is set to become the epicenter of global design innovation, as top creatives, technologists, and thought leaders gather to explore the future of design across industries. Scheduled for October 1–5, 2025 in San Francisco, the event promises to showcase cutting-edge design practices, technological integrations, and visionary ideas that are shaping the next generation of user experience, product development, and visual storytelling.</p>\r
\r
                                <p>Bringing together architects, UX/UI designers, product innovators, AI enthusiasts, and creative directors from over 50 countries, the conference serves as a collaborative platform to exchange knowledge, trends, and tools transforming the design ecosystem. Key themes for this year include AI-driven creativity, sustainability in design, spatial computing, and inclusive design methodologies.</p>\r
\r
                                <h5>Highlights of the 2025 Design Expo include:</h5>\r
\r
                                <ul class="ul-check">\r
                                    <li>Keynote addresses by global design icons and industry disruptors</li>\r
                                    <li>Hands-on workshops covering tools like Figma, Adobe Firefly, Midjourney, and more</li>\r
                                    <li>Panel discussions on the ethical impact of generative AI in design</li>\r
                                    <li>Startup design showcases and prototype exhibitions</li>\r
                                    <li>Networking zones connecting talent with top design-led companies</li>\r
                                </ul>\r
\r
                                <p>In addition to in-person attendance, the event will feature a hybrid format with virtual access to all keynotes and live panels, allowing participants from around the world to engage and collaborate.</p>\r
\r
                                <p>Whether you're a seasoned professional or a rising designer, the 2025 Design Expo Conference is the ultimate opportunity to stay ahead of the curve and shape what’s next in the world of design.</p>\r
\r
                            </div>\r
\r
                        </div>\r
\r
                        <div class="spacer-single"></div>\r
\r
                        <div id="blog-comment">\r
                            <h4>Comments (5)</h4>\r
\r
                            <div class="spacer-half"></div>\r
\r
                            <ol>\r
                                <li>\r
                                    <div class="avatar">\r
                                        <img src="images/testimonial/1.webp" class="w-70px" alt="" ></div>\r
                                    <div class="comment-info">\r
                                        <span class="c_name text-light">Merrill Rayos</span>\r
                                        <span class="c_date id-color">2 days ago</span>\r
                                        <span class="c_reply"><a href="#">Reply</a></span>\r
                                        <div class="clearfix"></div>\r
                                    </div>\r
\r
                                    <div class="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>\r
                                    <ol>\r
                                        <li>\r
                                            <div class="avatar">\r
                                                <img src="images/testimonial/2.webp" class="w-70px" alt="" ></div>\r
                                            <div class="comment-info">\r
                                                <span class="c_name text-light">Jackqueline Sprang</span>\r
                                                <span class="c_date id-color">2 days ago</span>\r
                                                <span class="c_reply"><a href="#">Reply</a></span>\r
                                                <div class="clearfix"></div>\r
                                            </div>\r
                                            <div class="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\r
                                                explicabo.</div>\r
                                        </li>\r
                                    </ol>\r
                                </li>\r
\r
                                <li>\r
                                    <div class="avatar">\r
                                        <img src="images/testimonial/3.webp" class="w-70px" alt="" ></div>\r
                                    <div class="comment-info">\r
                                        <span class="c_name text-light">Sanford Crowley</span>\r
                                        <span class="c_date id-color">2 days ago</span>\r
                                        <span class="c_reply"><a href="#">Reply</a></span>\r
                                        <div class="clearfix"></div>\r
                                    </div>\r
                                    <div class="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>\r
                                    <ol>\r
                                        <li>\r
                                            <div class="avatar">\r
                                                <img src="images/testimonial/4.webp" class="w-70px" alt="" ></div>\r
                                            <div class="comment-info">\r
                                                <span class="c_name text-light">Lyndon Pocekay</span>\r
                                                <span class="c_date id-color">2 days ago</span>\r
                                                <span class="c_reply"><a href="#">Reply</a></span>\r
                                                <div class="clearfix"></div>\r
                                            </div>\r
                                            <div class="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\r
                                                explicabo.</div>\r
                                        </li>\r
                                    </ol>\r
                                </li>\r
\r
                                <li>\r
                                    <div class="avatar">\r
                                        <img src="images/testimonial/5.webp" class="w-70px" alt="" ></div>\r
                                    <div class="comment-info">\r
                                        <span class="c_name text-light">Aleen Crigger</span>\r
                                        <span class="c_date id-color">2 days ago</span>\r
                                        <span class="c_reply"><a href="#">Reply</a></span>\r
\r
                                        <div class="clearfix"></div>\r
                                    </div>\r
                                    <div class="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>\r
                                </li>\r
                            </ol>\r
\r
                            <div class="spacer-single"></div>\r
\r
                            <div id="comment-form-wrapper">\r
                                <h4>Leave a Comment</h4>\r
                                <div class="comment_form_holder">\r
                                    <form id="contact_form" name="form1" class="form-border" method="post" action="#">\r
\r
                                        <label>Name</label>\r
                                        <input type="text" name="name" id="name" class="form-control mb-4" >\r
\r
                                        <label>Email <span class="req">*</span></label>\r
                                        <input type="text" name="email" id="email" class="form-control mb-4" >\r
                                        <div id="error_email" class="error">Please check your email</div>\r
\r
                                        <label>Message <span class="req">*</span></label>\r
                                        <textarea cols="10" rows="10" name="message" id="message" class="form-control mb-4"></textarea>\r
                                        <div id="error_message" class="error">Please check your message</div>\r
                                        <div id="mail_success" class="success">Thank you. Your message has been sent.</div>\r
                                        <div id="mail_failed" class="error">Error, email not sent</div>\r
                                        <a class="btn-main fx-slide" href="#"><span>Submit</span></a>\r
                                    </form>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                    </div>\r
                    \r
                </div>\r
            </div>\r
        </section>        \r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/countdown-custom.js"><\/script>\r
    <script src="js/custom-marquee.js"><\/script>\r
\r
</body>\r
\r
</html>`,Ip=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="index.html#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="index.html#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark no-top no-bottom text-light jarallax relative mh-500 jarallax">\r
            <img src="images/background/7.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-bottom h-50"></div>\r
            <div class="sw-overlay op-5"></div>\r
            <div class="abs w-80 bottom-10 z-2 w-100">\r
                <div class="container">\r
                    <div class="row align-items-center justify-content-between gx-5">\r
                        <div class="col-lg-6">\r
                            <div class="relative wow mask-right">\r
                                <div class="text-start">\r
                                    <h1 class="fs-96 text-uppercase fs-sm-10vw mb-0 lh-1">Tickets</h1>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-4 wow fadeInRight" data-wow-delay=".3s">\r
                            <p class="mb-0">Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity.</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
        \r
\r
        \r
\r
        <section id="section-tickets" class="bg-dark section-dark text-light pt-80 relative" aria-label="section">\r
            <div class="container relative z-2">\r
                <div class="row gy-4 gx-5 justify-content-center">\r
                    <div class="col-lg-8">\r
                        <div class="row g-4">\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="relative overflow-hidden h-100 border-white-op-3 rounded-1 bg-blur">\r
                                    <div class="gradient-edge-bottom color op-5"></div>\r
                                    <div class="p-40 pb-80 z-2">\r
                                        <div class="text-center">\r
                                            <h2 class="fs-40 mb-0">Standard</h2>\r
                                            <h3 class="id-color mb-4">$299</h3>\r
                                            <h4>Benefits:</h4>\r
                                        </div>\r
\r
                                        <div class="border-white-bottom-op-2 mb-4"></div>\r
\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and sessions.</li>\r
                                            <li>Admission to exhibitions and demos.</li>\r
                                            <li>Networking opportunities.</li>\r
                                            <li>Digital materials and session recordings.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                    \r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="relative overflow-hidden h-100 border-white-op-3 rounded-1 bg-blur">\r
                                    <div class="gradient-edge-bottom color op-5"></div>\r
                                    <div class="p-40 pb-80 z-2">\r
                                        <div class="text-center">\r
                                            <h2 class="fs-40 mb-0">VIP</h2>\r
                                            <h3 class="id-color mb-4">$699</h3>\r
                                            <h4>Benefits:</h4>\r
                                        </div>\r
\r
                                        <div class="border-white-bottom-op-2 mb-4"></div>\r
\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Standard benefits.</li>\r
                                            <li>VIP lounge access and exclusive events.</li>\r
                                            <li>Front-row seating and priority workshop access.</li>\r
                                            <li>VIP swag bag and exclusive content.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="relative overflow-hidden h-100 border-white-op-3 rounded-1 bg-blur">\r
                                    <div class="gradient-edge-bottom color op-5"></div>\r
                                    <div class="p-40 pb-80 z-2">\r
                                        <div class="text-center">\r
                                            <h2 class="fs-40 mb-0">Full Access Pass</h2>\r
                                            <h3 class="id-color mb-4">$1,199</h3>\r
                                            <h4>Benefits:</h4>\r
                                        </div>\r
\r
                                        <div class="border-white-bottom-op-2 mb-4"></div>\r
\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All VIP benefits.</li>\r
                                            <li>Access to all workshops and breakout sessions.</li>\r
                                            <li>Personalized session scheduling.</li>\r
                                            <li>Speaker meet-and-greet and after-party access.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="relative overflow-hidden h-100 border-white-op-3 rounded-1 bg-blur">\r
                                    <div class="gradient-edge-bottom color op-5"></div>\r
                                    <div class="p-40 pb-80 z-2">\r
                                        <div class="text-center">\r
                                            <h2 class="fs-40 mb-0">Exclusive Access</h2>\r
                                            <h3 class="id-color mb-4">$2,499</h3>\r
                                            <h4>Benefits:</h4>\r
                                        </div>\r
\r
                                        <div class="border-white-bottom-op-2 mb-4"></div>\r
\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Full Access Pass benefits.</li>\r
                                            <li>Private one-on-one sessions with speakers.</li>\r
                                            <li>Priority access to all events and workshops.</li>\r
                                            <li>Exclusive VIP gala and after-party invitations.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="relative overflow-hidden h-100 border-white-op-3 rounded-1 bg-blur">\r
                                    <div class="gradient-edge-bottom color op-5"></div>\r
                                    <div class="p-40 pb-80 z-2">\r
                                        <div class="text-center">\r
                                            <h2 class="fs-40 mb-0">Student</h2>\r
                                            <h3 class="id-color mb-4">$149</h3>\r
                                            <h4>Benefits:</h4>\r
                                        </div>\r
\r
                                        <div class="border-white-bottom-op-2 mb-4"></div>\r
\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and workshops.</li>\r
                                            <li>Student-specific networking events.</li>\r
                                            <li>Discounted online resources post-event.</li>\r
                                            <li>Special student meetups for networking.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="relative overflow-hidden h-100 border-white-op-3 rounded-1 bg-blur">\r
                                    <div class="gradient-edge-bottom color op-5"></div>\r
                                    <div class="p-40 pb-80 z-2">\r
                                        <div class="text-center">\r
                                            <h2 class="fs-40 mb-0">Virtual</h2>\r
                                            <h3 class="id-color mb-4">$99</h3>\r
                                            <h4>Benefits:</h4>\r
                                        </div>\r
\r
                                        <div class="border-white-bottom-op-2 mb-4"></div>\r
\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Live-streamed keynotes and workshops.</li>\r
                                            <li>On-demand access to recorded sessions.</li>\r
                                            <li>Interactive Q&A with speakers.</li>\r
                                            <li>Virtual networking and digital swag.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                            <h3>Carts</h3>\r
                        \r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">Standard <span class="id-color">(x2)</span></h5>\r
                               <span class="me-4 op-8">$299</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$598</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">VIP <span class="id-color">(x1)</span></h5>\r
                               <span class="me-4 op-8">$699</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$699</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">Full Access Pass <span class="id-color">(x1)</span></h5>\r
                               <span class="me-4 op-8">$1,199</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$1,199</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">Exclusive Access <span class="id-color">(x1)</span></h5>\r
                               <span class="me-4 op-8">$2,499</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$2,499</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">Student <span class="id-color">(x1)</span></h5>\r
                               <span class="me-4 op-8">$149</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$149</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">Virtual <span class="id-color">(x1)</span></h5>\r
                               <span class="me-4 op-8">$99</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$99</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center py-3">\r
                             <div class="flex-grow-1">\r
                               <h3 class="mb-0">Total</h3>\r
                             </div>\r
                             <div class="text-end">\r
                               <h3>$5,243</h3>\r
                             </div>\r
                           </div>\r
\r
                           <a class="btn-main fx-slide w-100" href="#"><span>Buy Now</span></a>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/countdown-custom.js"><\/script>\r
    <script src="js/custom-marquee.js"><\/script>\r
\r
</body>\r
\r
</html>`,Sp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <title>AIvent - AI Event, Conference and Meetup Website Template</title>\r
    <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16">\r
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\r
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >\r
    <meta content="AIvent" name="description" >\r
    <meta content="" name="keywords" >\r
    <meta content="" name="author" >\r
    <!-- CSS Files\r
    ================================================== -->\r
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">\r
    <link href="css/vendors.css" rel="stylesheet" type="text/css" >\r
    <link href="css/style.css" rel="stylesheet" type="text/css" >\r
    <!-- color scheme -->\r
    <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" >\r
\r
</head>\r
\r
<body class="dark-scheme">\r
\r
    <div id="wrapper">\r
\r
        <div class="float-text show-on-scroll">\r
            <span><a href="#">Scroll to top</a></span>\r
        </div>\r
        <div class="scrollbar-v show-on-scroll"></div>\r
\r
        <!-- page preloader begin -->\r
        <div id="de-loader"></div>\r
        <!-- page preloader close -->\r
\r
        <header class="transparent">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12">\r
                        <div class="de-flex">\r
                            <div class="de-flex-col">\r
                                <!-- logo begin -->\r
                                <div id="logo">\r
                                    <a href="index.html">\r
                                        <img class="logo-main" src="images/logo.webp" alt="" >\r
                                        <img class="logo-scroll" src="images/logo.webp" alt="" >\r
                                        <img class="logo-mobile" src="images/logo.webp" alt="" >\r
                                    </a>\r
                                </div>\r
                                <!-- logo close -->\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <div class="de-flex-col header-col-mid">\r
                                    <ul id="mainmenu">\r
                                        <li><a class="menu-item active" href="index.html#section-hero">Home</a>\r
                                            <ul class="mega">\r
                                                <li>\r
                                                    <div class="container">\r
                                                        <div class="sb-menu p-4">\r
                                                            <div class="row g-3">\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index.html">\r
                                                                            <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 1</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider.html">\r
                                                                            <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 2</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-static-background.html">\r
                                                                            <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 3</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-slider-text.html">\r
                                                                            <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 4</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-countdown.html">\r
                                                                            <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 5</h6>\r
                                                                </div>\r
\r
                                                                <div class="col-lg-2 col-md-4 col-sm-6 text-center">\r
                                                                    <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">\r
                                                                        <a class="p-0" href="index-6.html">\r
                                                                            <img src="images/demo/homepage-6.webp" class="w-100 relative hover-scale-1-1" alt="">\r
                                                                        </a>\r
                                                                    </div>\r
                                                                    <h6 class="mt-3">Demo 6</h6>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </li>\r
                                            </ul>\r
                                        </li>\r
                                        <li><a class="menu-item" href="index.html#section-about">About</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-why-attend">Why Attend</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-speakers">Speakers</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-schedule">Schedule</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-tickets">Tickets</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-venue">Venue</a></li>\r
                                        <li><a class="menu-item" href="index.html#section-faq">FAQ</a></li>\r
                                        <li><a class="menu-item" href="news.html">Pages</a>\r
                                            <ul>\r
                                                <li><a class="menu-item" href="tickets.html">Tickets Style 1</a></li>\r
                                                <li><a class="menu-item" href="tickets-2.html">Tickets Style 2</a></li>\r
                                                <li><a class="menu-item" href="news.html">News</a></li>\r
                                                <li><a class="menu-item" href="news-single.html">News Single</a></li>\r
                                                <li><a class="menu-item" href="contact.html">Contact</a>\r
                                            </ul>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
\r
                            <div class="de-flex-col">\r
                                <a class="btn-main fx-slide w-100" href="tickets-2.html"><span>Buy Tickets</span></a>\r
\r
                                <div class="menu_side_area">\r
                                    <span id="menu-btn"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <section id="section-hero" class="section-dark no-top no-bottom text-light jarallax relative mh-500 jarallax">\r
            <img src="images/background/7.webp" class="jarallax-img" alt="">\r
            <div class="gradient-edge-bottom h-50"></div>\r
            <div class="sw-overlay op-5"></div>\r
            <div class="abs w-80 bottom-10 z-2 w-100">\r
                <div class="container">\r
                    <div class="row align-items-center justify-content-between gx-5">\r
                        <div class="col-lg-6">\r
                            <div class="relative wow mask-right">\r
                                <div class="text-start">\r
                                    <h1 class="fs-96 text-uppercase fs-sm-10vw mb-0 lh-1">Tickets</h1>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-4 wow fadeInRight" data-wow-delay=".3s">\r
                            <p class="mb-0">Join thought leaders, developers, researchers, and founders as we explore how artificial intelligence is reshaping industries, creativity.</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
        \r
\r
        \r
\r
        <section id="section-tickets" class="bg-dark section-dark text-light pt-80 relative" aria-label="section">\r
            <div class="container relative z-2">\r
                <div class="row gy-4 gx-5 justify-content-center">\r
                    <div class="col-lg-8">\r
                        <div class="row g-4">\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Standard</h2>\r
                                    <h4 class="mb-4">$299</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
\r
                                <div class="relative overflow-hidden">\r
                                    <div class="pt-40 pb-80 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and sessions.</li>\r
                                            <li>Admission to exhibitions and demos.</li>\r
                                            <li>Networking opportunities.</li>\r
                                            <li>Digital materials and session recordings.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                    \r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="d-ticket">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>VIP</h2>\r
                                    <h4 class="mb-4">$699</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="pt-40 pb-80 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Standard benefits.</li>\r
                                            <li>VIP lounge access and exclusive events.</li>\r
                                            <li>Front-row seating and priority workshop access.</li>\r
                                            <li>VIP swag bag and exclusive content.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Full Access</h2>\r
                                    <h4 class="mb-4">$1199</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="pt-40 pb-80 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All VIP benefits.</li>\r
                                            <li>Access to all workshops and breakout sessions.</li>\r
                                            <li>Personalized session scheduling.</li>\r
                                            <li>Speaker meet-and-greet and after-party access.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="d-ticket s2">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Exclusive Access</h2>\r
                                    <h4 class="mb-4">$2499</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="pt-40 pb-80 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>All Full Access Pass benefits.</li>\r
                                            <li>Private one-on-one sessions with speakers.</li>\r
                                            <li>Priority access to all events and workshops.</li>\r
                                            <li>Exclusive VIP gala and after-party invitations.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Student</h2>\r
                                    <h4 class="mb-4">$149</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="pt-40 pb-80 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Access to keynotes and workshops.</li>\r
                                            <li>Student-specific networking events.</li>\r
                                            <li>Discounted online resources post-event.</li>\r
                                            <li>Special student meetups for networking.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
\r
                            <!-- ticket item begin -->\r
                            <div class="col-md-6">\r
                                <div class="d-ticket s3">\r
                                    <img src="images/logo.webp" class="w-80px mb-4" alt="">\r
                                    <img src="images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">\r
                                    <img src="images/logo-big-white.webp" class="w-40 abs abs-centered me-4 op-2" alt="">\r
                                    <h2>Virtual</h2>\r
                                    <h4 class="mb-4">$99</h4>\r
                                    <div class="fs-14">October 1 to 5 - 10:00 AM</div>\r
                                </div>\r
                                <div class="relative">\r
                                    <div class="pt-40 pb-80 z-2">\r
                                        <ul class="ul-check mb-4">\r
                                            <li>Live-streamed keynotes and workshops.</li>\r
                                            <li>On-demand access to recorded sessions.</li>\r
                                            <li>Interactive Q&A with speakers.</li>\r
                                            <li>Virtual networking and digital swag.</li>\r
                                        </ul>\r
                                    </div>\r
\r
                                    <div class="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">\r
                                        <div class="de-number">\r
                                            <span class="d-minus">-</span>\r
                                            <input type="text" class="no-border no-bg" value="0">\r
                                            <span class="d-plus">+</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <!-- ticket item end -->\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-lg-4">\r
                            <h3>Carts</h3>\r
                        \r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">Standard <span class="id-color">(x2)</span></h5>\r
                               <span class="me-4 op-8">$299</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$598</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">VIP <span class="id-color">(x1)</span></h5>\r
                               <span class="me-4 op-8">$699</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$699</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">Full Access Pass <span class="id-color">(x1)</span></h5>\r
                               <span class="me-4 op-8">$1,199</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$1,199</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">Exclusive Access <span class="id-color">(x1)</span></h5>\r
                               <span class="me-4 op-8">$2,499</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$2,499</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">Student <span class="id-color">(x1)</span></h5>\r
                               <span class="me-4 op-8">$149</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$149</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center border-bottom py-3">\r
                             <div class="flex-grow-1">\r
                               <h5 class="mb-0">Virtual <span class="id-color">(x1)</span></h5>\r
                               <span class="me-4 op-8">$99</span>\r
                               <span class="op-5">100 available</span>\r
                             </div>\r
                             <div class="text-end">\r
                               <p class="fw-bold text-light mb-0">$99</p>\r
                               <button class="btn btn-link p-0 text-light op-5">Delete</button>\r
                             </div>\r
                           </div>\r
\r
                           <div class="d-flex align-items-center py-3">\r
                             <div class="flex-grow-1">\r
                               <h3 class="mb-0">Total</h3>\r
                             </div>\r
                             <div class="text-end">\r
                               <h3>$5,243</h3>\r
                             </div>\r
                           </div>\r
\r
                           <a class="btn-main fx-slide w-100" href="#"><span>Buy Now</span></a>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
    </div>\r
\r
    <!-- footer begin -->\r
    <footer class="text-light section-dark">\r
        <div class="container">\r
            <div class="row g-4 align-items-center">\r
                <div class="col-md-12">\r
                    <div class="d-lg-flex align-items-center justify-content-between text-center">\r
                        <div>\r
                            <h3 class="fs-20">Address</h3>\r
                            121 AI Blvd, San Francisco<br>\r
                            BCA 94107\r
                        </div>\r
                        <div>\r
                            <img src="images/logo.webp" class="w-150px" alt=""><br>\r
                            <div class="social-icons mb-sm-30 mt-4">\r
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>\r
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
                            </div>\r
\r
                        </div>\r
                        <div>\r
                            <h3 class="fs-20">Contact Us</h3>\r
                            T. +1 123 456 789<br>\r
                            M. contact@aivent.com\r
                        </div>\r
                    </div>\r
                </div>                    \r
            </div>\r
        </div>\r
        <div class="subfooter">\r
            <div class="container">\r
                <div class="row">\r
                    <div class="col-md-12 text-center">\r
                        Copyright 2025 - AIvent by Designesia\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </footer>\r
    <!-- footer end -->\r
    \r
    <!-- Javascript Files\r
    ================================================== -->\r
    <script src="js/vendors.js"><\/script>\r
    <script src="js/designesia.js"><\/script>\r
    <script src="js/countdown-custom.js"><\/script>\r
    <script src="js/custom-marquee.js"><\/script>\r
\r
</body>\r
\r
</html>`,Ap=[{html:mp,paths:["/","/index.html"]},{html:pp,paths:["/index-6","/index-6.html"]},{html:hp,paths:["/index-countdown","/index-countdown.html"]},{html:gp,paths:["/index-select","/index-select.html"]},{html:fp,paths:["/index-slider-text","/index-slider-text.html"]},{html:wp,paths:["/index-slider","/index-slider.html"]},{html:bp,paths:["/index-static-background","/index-static-background.html"]},{html:yp,paths:["/contact","/contact.html"]},{html:xp,paths:["/news","/news.html"]},{html:kp,paths:["/news-single","/news-single.html"]},{html:Ip,paths:["/tickets","/tickets.html"]},{html:Sp,paths:["/tickets-2","/tickets-2.html"]}],Ep=Ap.flatMap(({html:e,paths:n})=>n.map(r=>({path:r,html:e}))),Cp=["/js/designesia.js","/js/countdown-custom.js","/js/custom-marquee.js","/js/swiper.js","/js/custom-swiper-1.js","/js/validation-contact.js"],Pp=e=>new Promise(n=>{const r=document.createElement("script");r.src=e,r.async=!1,r.dataset.legacyReload="true",r.onload=()=>{r.remove(),n()},r.onerror=()=>{console.warn(`Failed to reload legacy script: ${e}`),r.remove(),n()},document.body.appendChild(r)}),Tp=()=>{const e=os();S.useEffect(()=>{let n=!1;return(async()=>{for(const s of Cp){if(n)return;await Pp(s)}})(),()=>{n=!0}},[e.pathname])};function zp(){return Tp(),Te.jsxs(Te.Fragment,{children:[Te.jsx(cp,{}),Te.jsxs(ap,{children:[Ep.map(({path:e,html:n})=>Te.jsx(Jt,{path:e,element:Te.jsx(up,{html:n})},e)),Te.jsx(Jt,{path:"*",element:Te.jsx(ip,{to:"/",replace:!0})})]})]})}st.createRoot(document.getElementById("root")).render(Te.jsx(dp,{children:Te.jsx(zp,{})}));
