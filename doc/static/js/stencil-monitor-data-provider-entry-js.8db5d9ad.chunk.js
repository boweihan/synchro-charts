(this["webpackJsonpmonitor-components-doc-site"]=this["webpackJsonpmonitor-components-doc-site"]||[]).push([[18],{101:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r}));var i=function(t){return null!=t},r=function(t){return function(n){return t(n)}}},111:function(t,n,e){"use strict";e.d(n,"a",(function(){return y}));var i=e(95),r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof i.b&&i.b&&i.b.Object===Object&&i.b,f="object"==typeof self&&self&&self.Object===Object&&self,d=c||f||Function("return this")(),l=Object.prototype.toString,h=Math.max,p=Math.min,m=function(){return d.Date.now()};function g(t,n,e){var i,r,o,a,u,s,c=0,f=!1,d=!1,l=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=i,o=r;return i=r=void 0,c=n,a=t.apply(o,e)}function y(t){return c=t,u=setTimeout(w,n),f?g(t):a}function j(t){var e=t-s;return void 0===s||e>=n||e<0||d&&t-c>=o}function w(){var t=m();if(j(t))return O(t);u=setTimeout(w,function(t){var e=n-(t-s);return d?p(e,o-(t-c)):e}(t))}function O(t){return u=void 0,l&&i?g(t):(i=r=void 0,a)}function D(){var t=m(),e=j(t);if(i=arguments,r=this,s=t,e){if(void 0===u)return y(s);if(d)return u=setTimeout(w,n),g(s)}return void 0===u&&(u=setTimeout(w,n)),a}return n=b(n)||0,v(e)&&(f=!!e.leading,o=(d="maxWait"in e)?h(b(e.maxWait)||0,n):o,l="trailing"in e?!!e.trailing:l),D.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=s=r=u=void 0},D.flush=function(){return void 0===u?a:O(m())},D}function v(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=v(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var e=a.test(t);return e||u.test(t)?s(t.slice(2),e?2:8):o.test(t)?NaN:+t}var y=function(t,n,e){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(e)&&(i="leading"in e?!!e.leading:i,r="trailing"in e?!!e.trailing:r),g(t,n,{leading:i,maxWait:n,trailing:r})}},37:function(t,n,e){"use strict";e.r(n),e.d(n,"monitor_data_provider",(function(){return l}));var i=e(2),r=e(89),o=(e(95),e(101)),a=e(116),u=e(111),s={},c=function(t){if(0===t)return 0;var n=function(t){return Math.floor(Math.log10(t)+1)}(t)-1,e=Math.pow(10,n);return Math.ceil(t/e)*e},f=15*r.c,d=5*r.d,l=function(){function t(t){var n=this;Object(i.i)(this,t),this.readOnly=!1,this.data=[],this.isLoading=!1,this.isFetching=!1,this.errorMap={},this.hasInitialized=!1,this.setDataFromStore=function(){var t=n.config.dataStreamInfo.map((function(t){var e=t.id;return Object(a.h)(e,n.resolution,n.store.getState())})).filter(o.a).map((function(t){var e=t.dataCache,i=t.id;return{data:e.items.flat(),id:i,resolution:n.resolution}}));n.data=t},this.preventFetchingData=function(){return n.readOnly},this.callRequest=Object(u.a)((function(){if(n.hasInitialized){var t=n.config.viewPort,e=function(t,n){var e=t.start,i=t.end,r=t.max;void 0===n&&(n=.5);var o=i.getTime()-e.getTime(),a=c(o*(1+2*n)),u=a/4,s=new Date(Math.floor(e.getTime()/u)*u-u/2),f=new Date(s.getTime()+a);return{start:s>r?r:s,end:f>r?r:f}}(Object.assign(Object.assign({},t),{max:new Date})),i=e.start,r=e.end;n.config.dataStreamInfo.map((function(t){var e=t.id;return{dateRanges:n.onRequest({id:e,first:i,last:r,resolution:n.resolution}),dataStreamId:e}})).forEach((function(t){var e=t.dateRanges,i=t.dataStreamId;e.forEach((function(t){var e=t[0],r=t[1];n.onRequestData({request:{start:e,end:r},resolution:n.resolution,onError:n.onError,onSuccess:n.onSuccess,dataStreamId:i})}))}))}}),d,{trailing:!0,leading:!0}),this.store=Object(i.e)(this,"store")}return t.prototype.componentWillLoad=function(){var t=this;this.store.mapDispatchToProps(this,{onRequest:a.i,onSuccess:a.f,onError:a.g}),this.storeUnsubscribe=this.store.mapStateToProps(this,(function(n){var e=t.config.dataStreamInfo.map((function(e){var i=e.id;return Object(a.h)(i,t.resolution,n)})).filter(o.a),i=0===e.length||e.some((function(t){return t.isLoading})),r=i;return{data:e.map((function(n){var e=n.dataCache,i=n.id;return{data:e.items.flat(),id:i,resolution:t.resolution}})),isLoading:i,isFetching:r,errorMap:e.reduce((function(t,n){var e,i=n.id,r=n.error;return r?Object.assign(Object.assign({},t),((e={})[i]=r,e)):t}),s)}}))},t.prototype.componentDidLoad=function(){this.hasInitialized=!0,this.preventFetchingData()||this.callRequest()},t.prototype.componentDidUnload=function(){this.callRequest.cancel(),this.storeUnsubscribe&&this.storeUnsubscribe()},t.prototype.onResolutionChange=function(){this.setDataFromStore(),this.preventFetchingData()||this.immediatelyCallRequest()},t.prototype.configDidUpdate=function(t,n){this.preventFetchingData()||(!function(t,n){var e=n.dataStreamInfo.map((function(t){return t.id})),i=t.dataStreamInfo.map((function(t){return t.id})),r=!e.every((function(t){return i.includes(t)}))||!i.every((function(t){return e.includes(t)})),o=n.viewPort.end>=new Date(Date.now()-f);return r||!o}(n,t)?this.callRequest():this.immediatelyCallRequest())},t.prototype.immediatelyCallRequest=function(){this.callRequest.cancel(),this.callRequest(),this.callRequest.flush()},t.prototype.render=function(){return this.renderFunc({data:this.data,errorMap:this.errorMap,isLoading:this.isLoading,isFetching:this.isFetching})},Object.defineProperty(t,"watchers",{get:function(){return{resolution:["onResolutionChange"],config:["configDidUpdate"]}},enumerable:!0,configurable:!0}),t}()},95:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r}));var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function o(t,n){return t(n={exports:{}},n.exports),n.exports}}).call(this,e(104))}}]);
//# sourceMappingURL=stencil-monitor-data-provider-entry-js.8db5d9ad.chunk.js.map