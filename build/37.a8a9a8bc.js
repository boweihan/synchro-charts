(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1013:function(e,r,t){"use strict";t.r(r),t.d(r,"widget_test_route",(function(){return P}));var n=t(13),a=t(14),i=t(36),o=(t(136),t(64)),s=t(1020),u=function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var n=Array(e),a=0;for(r=0;r<t;r++)for(var i=arguments[r],o=0,s=i.length;o<s;o++,a++)n[a]=i[o];return n},c=new Date(2e3,0,0),l=new Date(2e3,0,1),d=l.getTime()-c.getTime(),f=(i.b.STRING,i.c.ALARM,i.b.STRING,i.c.ALARM,i.b.NUMBER,i.c.ALARM,i.c.ALARM,{}[o.c]=[{x:c.getTime()+d/5,y:12},{x:c.getTime()+2*d/5,y:15},{x:c.getTime()+3*d/5,y:60},{x:c.getTime()+4*d/5,y:120}],o.c,i.c.ALARM,i.c.ALARM,i.c.ALARM,c.getTime(),c.getTime(),c.getTime(),c.getTime(),c.getTime(),c.getTime(),c.getTime(),c.getTime(),i.c.ALARM,{start:c,end:l}),p={height:500,width:500},g={position:a.c.RIGHT,width:200,legendLabels:{title:"Number of data points"}},m="%[a-f0-9]{2}",y=new RegExp(m,"gi"),v=new RegExp("("+m+")+","gi");function h(e,r){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],h(t),h(n))}function b(e){try{return decodeURIComponent(e)}catch(n){for(var r=e.match(y),t=1;t<r.length;t++)r=(e=h(r,t).join("")).match(y);return e}}var O=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},t=v.exec(e);t;){try{r[t[0]]=decodeURIComponent(t[0])}catch(e){var n=b(t[0]);n!==t[0]&&(r[t[0]]=n)}t=v.exec(e)}r["%C2"]="\ufffd";for(var a=Object.keys(r),i=0;i<a.length;i++){var o=a[i];e=e.replace(new RegExp(o,"g"),r[o])}return e}(e)}},w=function(e,r){if("string"!=typeof e||"string"!=typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];var t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]},j=function(e,r){for(var t={},n=Object.keys(e),a=Array.isArray(r),i=0;i<n.length;i++){var o=n[i],s=e[o];(a?-1!==r.indexOf(o):r(o,s,e))&&(t[o]=s)}return t},S=Object(s.b)((function(e,r){function t(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function n(e,r){return r.encode?r.strict?function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}(e):encodeURIComponent(e):e}function a(e,r){return r.decode?O(e):e}function i(e){var r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function o(e){var r=(e=i(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function s(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function c(e,r){t((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var n=function(e){var r;switch(e.arrayFormat){case"index":return function(e,t,n){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return function(e,t,n){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return function(r,t,n){var i="string"==typeof t&&t.includes(e.arrayFormatSeparator),o="string"==typeof t&&!i&&a(t,e).includes(e.arrayFormatSeparator);t=o?a(t,e):t;var s=i||o?t.split(e.arrayFormatSeparator).map((function(r){return a(r,e)})):null===t?t:a(t,e);n[r]=s};default:return function(e,r,t){void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),i=Object.create(null);if("string"!=typeof e)return i;if(!(e=e.trim().replace(/^[?#&]/,"")))return i;for(var o=0,u=e.split("&");o<u.length;o++){var c=u[o];if(""!==c){var l=w(r.decode?c.replace(/\+/g," "):c,"="),d=l[0];g=void 0===(g=l[1])?null:["comma","separator"].includes(r.arrayFormat)?g:a(g,r),n(a(d,r),g,i)}}for(var f=0,p=Object.keys(i);f<p.length;f++){var g;if(d=p[f],"object"==typeof(g=i[d])&&null!==g)for(var m=0,y=Object.keys(g);m<y.length;m++){var v=y[m];g[v]=s(g[v],r)}else i[d]=s(g,r)}return!1===r.sort?i:(!0===r.sort?Object.keys(i).sort():Object.keys(i).sort(r.sort)).reduce((function(e,r){var t=i[r];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[r]=function e(r){return Array.isArray(r)?r.sort():"object"==typeof r?e(Object.keys(r)).sort((function(e,r){return Number(e)-Number(r)})).map((function(e){return r[e]})):r}(t):e[r]=t,e}),Object.create(null))}r.extract=o,r.parse=c,r.stringify=function(e,r){if(!e)return"";t((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var a=function(t){return r.skipNull&&function(e){return null==e}(e[t])||r.skipEmptyString&&""===e[t]},i=function(e){switch(e.arrayFormat){case"index":return function(r){return function(t,a){var i=t.length;return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?t:u(t,null===a?[[n(r,e),"[",i,"]"].join("")]:[[n(r,e),"[",n(i,e),"]=",n(a,e)].join("")])}};case"bracket":return function(r){return function(t,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?t:u(t,null===a?[[n(r,e),"[]"].join("")]:[[n(r,e),"[]=",n(a,e)].join("")])}};case"comma":case"separator":return function(r){return function(t,a){return null==a||0===a.length?t:0===t.length?[[n(r,e),"=",n(a,e)].join("")]:[[t,n(a,e)].join(e.arrayFormatSeparator)]}};default:return function(r){return function(t,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?t:u(t,null===a?[n(r,e)]:[[n(r,e),"=",n(a,e)].join("")])}}}}(r),o={},s=0,c=Object.keys(e);s<c.length;s++){var l=c[s];a(l)||(o[l]=e[l])}var d=Object.keys(o);return!1!==r.sort&&d.sort(r.sort),d.map((function(t){var a=e[t];return void 0===a?"":null===a?n(t,r):Array.isArray(a)?a.reduce(i(t),[]).join("&"):n(t,r)+"="+n(a,r)})).filter((function(e){return e.length>0})).join("&")},r.parseUrl=function(e,r){r=Object.assign({decode:!0},r);var t=w(e,"#"),n=t[0],i=t[1];return Object.assign({url:n.split("?")[0]||"",query:c(o(e),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:a(i,r)}:{})},r.stringifyUrl=function(e,t){t=Object.assign({encode:!0,strict:!0},t);var a=i(e.url).split("?")[0]||"",o=r.extract(e.url),s=r.parse(o,{sort:!1}),u=Object.assign(s,e.query),c=r.stringify(u,t);c&&(c="?"+c);var l=function(e){var r="",t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(l="#"+n(e.fragmentIdentifier,t)),""+a+c+l},r.pick=function(e,t,n){n=Object.assign({parseFragmentIdentifier:!0},n);var a=r.parseUrl(e,n),i=a.url,o=a.query,s=a.fragmentIdentifier;return r.stringifyUrl({url:i,query:j(o,t),fragmentIdentifier:s},n)},r.exclude=function(e,t,n){var a=Array.isArray(t)?function(e){return!t.includes(e)}:function(e,r){return!t(e,r)};return r.pick(e,a,n)}})).parse,x=function(e){return"true"===e},N=function(e){var r=JSON.parse(e),t=r.x;return Object.assign(Object.assign({},r),{x:null!=t?t.map((function(e){return Object.assign(Object.assign({},e),{value:new Date(e.value)})})):void 0})},E=function(e){return Object.assign(Object.assign({},e),{data:e.data.map((function(e){return{x:Number(e.x),y:e.y}}))})},T=function(){var e=S(window.location.search);return{alarms:e.alarms?JSON.parse(e.alarms):void 0,width:e.width?JSON.parse(e.width):void 0,axis:e.axis?JSON.parse(e.axis):void 0,height:e.height?JSON.parse(e.height):void 0,duration:e.duration?JSON.parse(e.duration):void 0,errMsg:e.errMsg,gestures:null==e.gestures||x(e.gestures),delayBeforeDataLoads:null!=e.delayBeforeDataLoads?JSON.parse(e.delayBeforeDataLoads):0,dataStreamInfos:null!=e.dataStreamInfos?JSON.parse(e.dataStreamInfos):[],tableColumns:null!=e.tableColumns?JSON.parse(e.tableColumns):[],legend:null!=e.legend?JSON.parse(e.legend):g,messageOverrides:null!=e.messageOverrides?JSON.parse(e.messageOverrides):void 0,componentTag:null!=e.componentTag?e.componentTag:"sc-line-chart",displayInfoNames:!!e.displayInfoNames&&x(e.displayInfoNames),annotations:null!=e.annotations?N(e.annotations):void 0,isEditing:null!=e.isEditing&&x(e.isEditing),hasError:null!=e.hasError&&x(e.hasError),dataStreams:null!=e.dataStreams?JSON.parse(e.dataStreams).map(E):[],asyncDataStreams:null!=e.asyncDataStreams?JSON.parse(e.asyncDataStreams).map(E):[],viewportStart:null!=e.viewportStart?new Date(e.viewportStart):new Date(2e3,0,0),viewportEnd:null!=e.viewportEnd?new Date(e.viewportEnd):new Date(2e3,0,1)}}(),A=T.alarms,I=T.messageOverrides,k=T.width,F=void 0===k?700:k,R=T.height,C=void 0===R?400:R,D=T.axis,J=T.componentTag,L=T.annotations,M=T.viewportStart,U=T.viewportEnd,B=T.duration,q=T.isEditing,$=T.dataStreams,_=T.gestures,G=T.legend,H=T.tableColumns,W=function(e){if("string"!=typeof e)return Object.assign(Object.assign({},p),{width:F,height:C})},z=function(e){return"string"==typeof e?e:e+"px"},P=function(){function e(e){Object(n.l)(this,e),this.dataStreamInfos=[],this.component=J}return e.prototype.onWidgetUpdated=function(e){var r=e.detail;r.dataStreamInfo&&(this.dataStreamInfos=r.dataStreamInfo)},e.prototype.render=function(){var e=Object.assign(Object.assign({},f),{start:M,end:U,duration:B,group:"some-viewport-group"});return null!=B&&(delete e.start,delete e.end),Object(n.j)("div",{style:{width:z(F),height:z(C)}},Object(n.j)(this.component,{widgetId:"some-widget-id",dataStreams:$,isEditing:q,alarms:A,viewport:e,legend:G,size:W(F),axis:D,tableColumns:H,annotations:L,gestures:_,messageOverrides:I,invalidTagErrorHeader:"invalidComponentTag.header",invalidTagErrorSubheader:"invalidComponentTag.subheader",liveModeOnlyMessage:"invalidWidgetForHistoricalData.content"}),Object(n.j)("sc-webgl-context",null))},e}()},1020:function(e,r,t){"use strict";(function(e){t.d(r,"a",(function(){return n})),t.d(r,"b",(function(){return i})),t.d(r,"c",(function(){return a}));var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}}).call(this,t(37))}}]);