(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1022:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a}));var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}}).call(this,r(37))},1024:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(1027),a=function(e){var t=n.a.get(e);return null==t&&console.error("provided an invalid color string, '"+e+"'"),null==t?[0,0,0]:t.value}},1025:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return c}));var n=r(64),a=r(138),o=r(1023),i=r(1028),u=r(1024),c=function(e,t){var r=Object(u.a)(e.color||"black"),n=r[0],o=r[1],i=r[2];return Object(a.a)(e,t).map((function(e){return[e.x,e.y,n,o,i]}))},l=function(e){var t=e.scene,r=e.container,n=e.viewport,a=e.toClipSpace,u=e.onUpdate,c=new o.d(a(n.start.getTime()),a(n.end.getTime()),n.yMax,n.yMin,.1,1e3);return c.position.z=500,{toClipSpace:a,scene:t,container:r,id:Object(i.a)(),camera:c,dispose:function(){return function(e){e.children.forEach((function(e){try{var t=e;t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach((function(e){e.dispose()}))}catch(t){throw new Error("\n        scene currently does not support objects of type "+e.constructor.name+"\n        and does not know how to dispose of it.\n      ")}})),e.dispose()}(t)},viewportGroup:n.group,updateViewPort:function(e){var t=e.start,r=e.end;c.left=a(t.getTime()),c.right=a(r.getTime()),c.updateProjectionMatrix(),u&&u({start:t,end:r})}}},s=function(e){return e.map((function(e){return Object(a.a)(e,e.resolution).length})).reduce((function(e,t){return e+t}),0)},d=function(e){return e<10*n.c?1:e<n.a?n.d/10:e<7*n.a?n.d:e<n.e?n.c:e<30*n.e?30*n.c:n.a},f=function(e){var t=e.end.getTime()-e.start.getTime(),r=e.start.getTime()-.25*t,n=d(t);return function(e){return Math.floor((e-r)/n)}},h=function(e,t){return Math.abs(t(e.getTime()))>=Math.pow(10,7)},m=function(e,t){var r=h(e.start,t)||h(e.end,t),n=e.end.getTime()-e.start.getTime(),a=t(e.end.getTime())-t(e.start.getTime());return r||n>a&&a<3e3}},1027:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(1022),a={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},o=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))},i=Object(n.b)((function(e){var t=Array.prototype.concat,r=Array.prototype.slice,n=e.exports=function(e){for(var n=[],a=0,i=e.length;a<i;a++){var u=e[a];o(u)?n=t.call(n,r.call(u)):n.push(u)}return n};n.wrap=function(e){return function(){return e(n(arguments))}}})),u=Object(n.b)((function(e){var t={};for(var r in a)a.hasOwnProperty(r)&&(t[a[r]]=r);var n=e.exports={to:{},get:{}};function o(e,t,r){return Math.min(Math.max(t,e),r)}function u(e){var t=e.toString(16).toUpperCase();return t.length<2?"0"+t:t}n.get=function(e){var t,r;switch(e.substring(0,3).toLowerCase()){case"hsl":t=n.get.hsl(e),r="hsl";break;case"hwb":t=n.get.hwb(e),r="hwb";break;default:t=n.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},n.get.rgb=function(e){if(!e)return null;var t,r,n,i=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(n=t[2],t=t[1],r=0;r<3;r++){var u=2*r;i[r]=parseInt(t.slice(u,u+2),16)}n&&(i[3]=parseInt(n,16)/255)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(n=(t=t[1])[3],r=0;r<3;r++)i[r]=parseInt(t[r]+t[r],16);n&&(i[3]=parseInt(n+n,16)/255)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(r=0;r<3;r++)i[r]=parseInt(t[r+1],0);t[4]&&(i[3]=parseFloat(t[4]))}else{if(!(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(t=e.match(/(\D+)/))?"transparent"===t[1]?[0,0,0,0]:(i=a[t[1]])?(i[3]=1,i):null:null;for(r=0;r<3;r++)i[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(i[3]=parseFloat(t[4]))}for(r=0;r<3;r++)i[r]=o(i[r],0,255);return i[3]=o(i[3],0,1),i},n.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])+360)%360,o(parseFloat(t[2]),0,100),o(parseFloat(t[3]),0,100),o(isNaN(r)?1:r,0,1)]}return null},n.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,o(parseFloat(t[2]),0,100),o(parseFloat(t[3]),0,100),o(isNaN(r)?1:r,0,1)]}return null},n.to.hex=function(){var e=i(arguments);return"#"+u(e[0])+u(e[1])+u(e[2])+(e[3]<1?u(Math.round(255*e[3])):"")},n.to.rgb=function(){var e=i(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},n.to.rgb.percent=function(){var e=i(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},n.to.hsl=function(){var e=i(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},n.to.hwb=function(){var e=i(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},n.to.keyword=function(e){return t[e.slice(0,3)]}}))},1028:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));for(var n=r(1022),a=Object(n.b)((function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}})),o=[],i=0;i<256;++i)o[i]=(i+256).toString(16).substr(1);var u=function(e,t){var r=t||0,n=o;return[n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]]].join("")},c=function(e,t,r){var n=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var i=0;i<16;++i)t[n+i]=o[i];return t||u(o)}},1029:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){return Math.abs(e(new Date(t).getTime())-e(new Date(0).getTime()))}},1035:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(137),a=r(54),o=r(1022),i=Object(o.b)((function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t=r(e);throw null===e?t="null":"object"===t&&(t=e.constructor.name),new TypeError("Expected a string but received a ".concat(t))}},e.exports=t.default,e.exports.default=t.default}));Object(o.c)(i);var u=Object(o.b)((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,r.default)(e);var i=t.strictSeparator?a.test(e):n.test(e);return i&&t.strict?o(e):i};var r=function(e){return e&&e.__esModule?e:{default:e}}(i),n=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,a=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,o=function(e){var t=e.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);if(t){var r=Number(t[1]),n=Number(t[2]);return r%4==0&&r%100!=0||r%400==0?n<=366:n<=365}var a=e.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),o=a[1],i=a[2],u=a[3],c=i?"0".concat(i).slice(-2):i,l=u?"0".concat(u).slice(-2):u,s=new Date("".concat(o,"-").concat(c||"01","-").concat(l||"01"));return!i||!u||s.getUTCFullYear()===o&&s.getUTCMonth()+1===i&&s.getUTCDate()===u};e.exports=t.default,e.exports.default=t.default})),c=Object(o.c)(u),l=function(e){return e instanceof Date||c(e)},s=function(e){var t=e.viewport;if(null!=t){if(Object(a.b)(t)&&null!=t.duration&&console.warn("Detected both static and live viewport type. Duration will be used"),Object(a.b)(t)&&(!l(t.start)||!l(t.end)))throw new Error("Unable to parse start date: '"+t.start+"' and/or end date: '"+t.end+"'");if(!Object(a.b)(t)&&"string"==typeof t.duration&&null==Object(n.a)(t.duration,"ms"))throw new Error("Unable to parse duration: '"+t.duration+"'")}}},1036:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i}));var n=r(14),a={widgetId:"fake-id",viewport:{start:new Date(1995,0,0,0),end:new Date(2020,1,0,0),yMin:0,yMax:1e4},size:{width:475,height:350,marginLeft:50,marginRight:50,marginTop:24,marginBottom:30},movement:{enableXScroll:!0,enableYScroll:!1,zoomMax:1/0,zoomMin:1e-5},layout:{xGridVisible:!1,yGridVisible:!0,xTicksVisible:!0,yTicksVisible:!0},scale:{xScaleType:n.d.TimeSeries,yScaleType:n.d.Linear,xScaleSide:"bottom",yScaleSide:"left"},dataStreams:[],legend:{position:n.c.BOTTOM,width:170}},o={showColor:!0},i={showColor:!1}},1041:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return s})),r.d(t,"g",(function(){return d})),r.d(t,"h",(function(){return m})),r.d(t,"i",(function(){return h})),r.d(t,"j",(function(){return g})),r.d(t,"k",(function(){return f})),r.d(t,"l",(function(){return p})),r.d(t,"m",(function(){return b}));var n=r(64),a=r(54),o=10,i=8,u=.05,c=1/15,l="#ffffff",s="#0073bb",d="#012E4A",f=function(e){var t=e.yValue,r=e.yMax,n=e.yMin,a=e.bucketCount;return Math.abs(Math.floor((t-n)/(r-n)*a))},h=function(e){var t=e.xValue,r=e.xBucketRange;return Math.floor(t/r)*r},m=function(e){var t=e.oldHeatValues,r=void 0===t?{maxHeatValue:0,minHeatValue:1/0}:t,n=e.dataStreams,o=e.xBucketRange,i=e.viewport,u=e.bucketCount,c=i.yMax,l=i.yMin;return function(e){var t=e;return Object.values(t).forEach((function(e){Object.values(e).forEach((function(e){t.minHeatValue=Math.min(t.minHeatValue,e.bucketHeatValue),t.maxHeatValue=Math.max(t.maxHeatValue,e.bucketHeatValue)}))})),t}(n.filter(a.c).reduce((function(e,t){return t.data.reduce((function(e,r){return function(e){var t,r,n,a=e.heatValues,o=e.xBucketRangeStart,i=e.bucketIndex,u=e.dataStreamId;if(!u)return{maxHeatValue:0,minHeatValue:1/0};var c=a;return c[o]=null!==(t=a[o])&&void 0!==t?t:{},c[o][i]=null!==(r=a[o][i])&&void 0!==r?r:{bucketHeatValue:0,streamCount:{}},c[o][i].streamCount[u]=null!==(n=a[o][i].streamCount[u])&&void 0!==n?n:0,c[o][i].streamCount[u]+=1,c[o][i].bucketHeatValue+=1,a}({heatValues:e,xBucketRangeStart:h({xValue:r.x,xBucketRange:o}),bucketIndex:f({yValue:r.y,yMax:c,yMin:l,bucketCount:u}),dataStreamId:t.id})}),e)}),r))},p=function(e){var t=e.start,r=e.end.getTime()-t.getTime();return r>n.e?n.e:r>90*n.a?n.f:r>3*n.a?n.a:r>1.5*n.b?n.b:r>1.5*n.c?n.c:n.d},g=function(e,t){var r=t.start,a=t.end.getTime()-r.getTime(),o=e.startDate,i=e.endDate;return a<n.c?o.toLocaleString("en-US",{minute:"numeric",second:"numeric"})+" - "+i.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):a<=10*n.c?o.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0})+" - "+i.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):a<=n.b?o.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})+" - "+i.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):a<=7*n.a?o.toLocaleString("en-US",{month:"numeric",hour:"numeric",day:"numeric",hour12:!0})+" - "+i.toLocaleString("en-US",{month:"numeric",hour:"numeric",day:"numeric",hour12:!0}):o.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})+" - "+i.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})},b=function(e){var t=e.oldViewport,r=e.newViewport,n=t.yMin,a=t.yMax,o=t.start,i=t.end,u=r.yMin,c=r.yMax,l=r.start,s=r.end;return n!==u||a!==c||p({start:o,end:i})!==p({start:l,end:s})}},1047:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return i}));var n=r(1024),a=r(1029),o=r(1041),i=function(e){var t=e.toClipSpace,r=e.xBucketRange;return Object(a.a)(t,r)-function(e,t){return Object(a.a)(e,t*o.c)}(t,r)},u=function(e){var t=e.yMin,r=e.yMax,n=Math.abs(r-t);return n/o.a-n/o.a*o.e},c=function(e,t){void 0===t&&(t=[o.b,o.f,o.g]);var r=e.minHeatValue,a=e.maxHeatValue,i=Math.min(a-r+1,o.d),u={r:[],g:[],b:[]},c=t.map((function(e){return Object(n.a)(e)}));if(r===a){var l=c[c.length-1];return{r:[l[0]],g:[l[1]],b:[l[2]]}}for(var s=Math.ceil(i/(t.length-1)),d=1/s,f=1/s,h=0,m=0;m<i;m+=1)0!==m&&m%s==0&&(h+=1,d=f),u.r[m]=d*c[h+1][0]+(1-d)*c[h][0],u.g[m]=d*c[h+1][1]+(1-d)*c[h][1],u.b[m]=d*c[h+1][2]+(1-d)*c[h][2],d+=f;return u},l=function(e){var t=e.heatValues,r=e.xBucket,n=e.yBucket,a=e.colorPalette,i=t.minHeatValue,u=t.maxHeatValue,c=t[r][n].bucketHeatValue,l=Math.min(u-i+1,o.d),s=a.r.length;if(c===u)return[a.r[s-1],a.g[s-1],a.b[s-1]];var d=Math.floor((c-i)/l*s);return[a.r[d],a.g[d],a.b[d]]}},927:function(e,t,r){"use strict";r.r(t),r.d(t,"sc_heatmap",(function(){return w}));var n=r(13),a=(r(14),r(36),r(137),r(64),r(54),r(138),r(1023)),o=(r(1022),r(1028),r(1027),r(1024),r(1025)),i=(r(1029),r(1041)),u=r(1047),c=r(1036),l=r(1035),s=function(e){var t=e.mesh,r=e.toClipSpace,n=e.viewport,a=e.heatValues,o=t.geometry.attributes,c=o.color,l=o.bucket,s=n.yMin,d=n.yMax,f=0,h=0,m=0,p=Object(u.b)(a),g=Object(i.l)(n);Object.keys(a).forEach((function(e){m+=Object.keys(a[e]).length,Object.keys(a[e]).forEach((function(t){l.array[f]=r(+e+g),l.array[f+1]=s+ +t*((d-s)/i.a);var n=Object(u.c)({heatValues:a,xBucket:e,yBucket:t,colorPalette:p}),o=n[0],m=n[1],b=n[2];c.array[h]=o,c.array[h+1]=m,c.array[h+2]=b,h+=3,f+=2}))})),t.count=m,l.needsUpdate=!0,c.needsUpdate=!0},d=[0,0,0,1,1,0,0,1,1,0,1,1],f=function(e,t){e.setAttribute("position",new a.a(new Float32Array(d),2)),e.setAttribute("bucket",new a.j(new Float32Array(2*t),2,!1)),e.setAttribute("color",new a.j(new Uint8Array(3*t),3,!0))},h=function(e){var t=e.dataStreams,r=e.toClipSpace,n=e.bufferFactor,c=e.minBufferSize,l=e.viewport,d=e.heatValues,h=new a.c,m=Math.max(c,Object(o.d)(t)*n),p=Object(i.l)(l);f(h,m);var g=new a.f({vertexShader:"\nprecision highp float;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float width;\nuniform float bucketHeight;\nattribute vec2 bucket;\nattribute vec2 position;\nattribute vec3 color;\nvarying vec3 vColor;\n\nvoid main() {\n  // Negative width here because we want to render the bars' width to the left side starting from its x position.\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * -width + bucket.x, position.y * bucketHeight + bucket.y, 0.0, 1.0);\n  vColor = color;\n}\n",fragmentShader:"\nprecision highp float;\nvarying vec3 vColor;\n\nvoid main() {\n  gl_FragColor = vec4(vColor, 1.0);\n}\n",side:a.b,transparent:!1,uniforms:{width:{value:0!==t.length?Object(u.d)({toClipSpace:r,xBucketRange:p}):0},bucketHeight:{value:Object(u.a)(l)}}}),b=new a.i(h,g,m);return s({mesh:b,toClipSpace:r,viewport:l,heatValues:d}),b.frustumCulled=!1,b},m=function(e){var t=e.buckets,r=e.dataStreams,n=e.toClipSpace,a=e.hasDataChanged,o=e.shouldRerender,c=void 0!==o&&o,l=e.viewport,d=e.heatValues;if(a||c){var f=Object(i.l)(l);t.material.uniforms.width.value=0!==r.length?Object(u.d)({toClipSpace:n,xBucketRange:f}):0,t.material.uniforms.bucketHeight.value=Object(u.a)(l),s({mesh:t,toClipSpace:n,viewport:l,heatValues:d})}},p=function(e){var t=e.viewport,r=e.dataStreams,n=Object(i.l)(t);return 0!==r.length?Object(i.h)({dataStreams:r,xBucketRange:n,viewport:t,bucketCount:i.a}):{maxHeatValue:0,minHeatValue:1/0}},g=function(e){var t=e.dataStreams,r=e.container,n=e.viewport,i=e.bufferFactor,u=e.minBufferSize,c=e.onUpdate,l=new a.g,s=Object(o.a)(n),d=p({viewport:n,dataStreams:t});return l.add(h({dataStreams:t,toClipSpace:s,bufferFactor:i,minBufferSize:u,viewport:n,heatValues:d})),Object(o.c)({scene:l,viewport:n,container:r,toClipSpace:s,onUpdate:c})},b=function(e){var t=e.scene,r=e.dataStreams,n=e.hasDataChanged,a=e.shouldRerender,i=void 0!==a&&a,u=e.minBufferSize,c=e.bufferFactor,l=e.viewport,s=e.container,d=e.onUpdate,f=e.chartSize,h=e.thresholdOptions,b=e.thresholds,v=t.scene.children[0],y=p({viewport:l,dataStreams:r});return function(e){return e.geometry.attributes.bucket.array.length/2}(v)<function(e){var t=0;return Object.keys(e).forEach((function(r){t+=Object.keys(e[r]).length})),t}(y)||Object(o.b)(l,t.toClipSpace)?g({onUpdate:d,dataStreams:r,container:s,viewport:l,minBufferSize:u,bufferFactor:c,chartSize:f,thresholdOptions:h,thresholds:b}):(m({buckets:v,dataStreams:r,toClipSpace:t.toClipSpace,hasDataChanged:n,shouldRerender:i,viewport:l,heatValues:y}),t)},v=function(e){return Object(n.j)("sc-heatmap-tooltip",Object.assign({},e))},y=function(e){return Object(n.j)("sc-heatmap-legend",Object.assign({},e))},w=function(){function e(e){Object(n.l)(this,e),this.gestures=!0,this.isEditing=!1,this.bufferFactor=2,this.minBufferSize=1e3}return e.prototype.componentWillRender=function(){Object(l.a)(this)},e.prototype.render=function(){var e=this;return Object(n.j)("sc-size-provider",{size:this.size,renderFunc:function(t){return Object(n.j)("sc-webgl-base-chart",{axis:e.axis,gestures:e.gestures,configId:e.widgetId,requestData:e.requestData,legend:e.legend,renderLegend:y,updateChartScene:b,createChartScene:g,size:Object.assign(Object.assign(Object.assign({},c.a.size),e.size),t),dataStreams:e.dataStreams,viewport:e.viewport,minBufferSize:e.minBufferSize,bufferFactor:e.bufferFactor,isEditing:e.isEditing,yRangeStartFromZero:!0,renderTooltip:v,supportString:!1,visualizesAlarms:!1,messageOverrides:e.messageOverrides,shouldRerenderOnViewportChange:i.m})}})},e}()}}]);