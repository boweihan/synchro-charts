(this["webpackJsonpmonitor-components-doc-site"]=this["webpackJsonpmonitor-components-doc-site"]||[]).push([[46],{100:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));for(var r=n(95),i=Object(r.a)((function(t){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var n=new Uint8Array(16);t.exports=function(){return e(n),n}}else{var r=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),r[e]=t>>>((3&e)<<3)&255;return r}}})),a=[],o=0;o<256;++o)a[o]=(o+256).toString(16).substr(1);var c=function(t,e){var n=e||0,r=a;return[r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]]].join("")};var d=function(t,e,n){var r=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var a=(t=t||{}).random||(t.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e)for(var o=0;o<16;++o)e[r+o]=a[o];return e||c(a)}},104:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},70:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_webgl_chart_dynamic_charts",(function(){return l}));var r=n(2),i=(n(88),n(95),n(91),n(90),n(96)),a=n(100),o=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var a=arguments[e],o=0,c=a.length;o<c;o++,i++)r[i]=a[o];return r},c=i.a.viewPort,d=c.start,s=c.end,h={x:new Date((d.getTime()+s.getTime())/2),y:250},f=function(t,e){return new Array(e).fill(0).map((function(e,n){return{x:t.x,y:t.y+250*n}}))},u=1,l=function(){function t(t){var e=this;Object(r.i)(this,t),this.chartKeys=[],this.width=500,this.xOffset=0,this.shiftLeft=function(){e.xOffset-=100},this.shiftRight=function(){e.xOffset+=100},this.increaseWidth=function(){e.width+=100},this.decreaseWidth=function(){e.width>100&&(e.width-=100)},this.addChartAtFront=function(){var t=Object(a.a)();e.chartKeys=o([{key:t,data:[{id:t,data:f(h,u),resolution:0}]}],e.chartKeys),u+=1},this.addChartAtBack=function(){var t=Object(a.a)();e.chartKeys=o(e.chartKeys,[{key:t,data:[{id:t,data:f(h,u),resolution:0}]}]),u+=1},this.removeFrontChart=function(){e.chartKeys.length>0&&(e.chartKeys=e.chartKeys.slice(1))},this.removeBackChart=function(){e.chartKeys.length>0&&(e.chartKeys=e.chartKeys.slice(0,-1))}}return t.prototype.render=function(){var t=this;return Object(r.h)("div",null,Object(r.h)("button",{id:"shift-right",onClick:this.shiftRight},"Shift Right"),Object(r.h)("button",{id:"shift-left",onClick:this.shiftLeft},"Shift Left"),Object(r.h)("button",{id:"increase-width",onClick:this.increaseWidth},"Increase Width"),Object(r.h)("button",{id:"decrease-width",onClick:this.decreaseWidth},"Decrease Width"),Object(r.h)("button",{id:"add-chart-to-front",onClick:this.addChartAtFront},"Add Chart To Front"),Object(r.h)("button",{id:"add-chart-to-back",onClick:this.addChartAtBack},"Add Chart To Back"),Object(r.h)("button",{id:"remove-chart-from-back",onClick:this.removeBackChart},"Remove Chart From Back"),Object(r.h)("button",{id:"remove-chart-from-front",onClick:this.removeFrontChart},"Remove Chart From Front"),Object(r.h)("hr",null),this.chartKeys.map((function(e){var n=e.key,i=e.data;return Object(r.h)("div",{key:n,style:{marginLeft:t.xOffset+"px",width:t.width+"px",height:"500px"}},Object(r.h)("monitor-line-chart",{data:i,config:{id:n,dataStreamInfo:[{id:n,color:"black",name:"test stream"}],viewPort:{start:d,end:s,yMin:0,yMax:5e3}}}))})),Object(r.h)("monitor-webgl-context",null))},t}()},88:function(t,e,n){"use strict";var r,i;n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(r||(r={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(i||(i={}))},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(88),i={id:"fake-id",viewPort:{start:new Date(1995,0,0,0),end:new Date(2020,1,0,0),yMin:0,yMax:1e4},size:{width:475,height:350,marginLeft:50,marginRight:50,marginTop:8,marginBottom:30},movement:{enableXScroll:!0,enableYScroll:!1,zoomMax:1/0,zoomMin:1e-5},layout:{xGridVisible:!1,yGridVisible:!0,xTicksVisible:!0,yTicksVisible:!0},scale:{xScaleType:r.b.TimeSeries,yScaleType:r.b.Linear,xScaleSide:"bottom",yScaleSide:"left"},dataStreamInfo:[],legend:{position:r.a.BOTTOM,width:180}}},91:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i;!function(t){t.BLUE_MUTED="blue-MUTED",t.QUALITATIVE_MUTED="qualitative-muted"}(i||(i={}));var a=((r={})[i.BLUE_MUTED]=[["#5e87b5"],["#5e87b5","#b8c6df"],["#5e87b5","#9cb1d2","#d4dced"],["#5e87b5","#88a2c8","#aebfda","#d4dced"],["#5e87b5","#7e9bc3","#9cb1d2","#b8c6df","#d4dced"],["#5e87b5","#769dd2","#96b2dd","#b4c7e9","#d4dced","#eff2fb"]],r[i.QUALITATIVE_MUTED]=[["#5e87b5"],["#5e87b5","#e6ac8c"],["#5e87b5","#e6ac8c","#7fc6b1"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090","#ae779c"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090","#ae779c","#f9da95"]],r),o=function(t,e){var n=a[t][e-1];if(null==n)throw new Error("Cannot add more than 6 data streams");return n}},95:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i}));var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function a(t,e){return t(e={exports:{}},e.exports),e.exports}}).call(this,n(104))},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(91),i=n(90),a=[{id:"some-id",name:"high",detailedName:"/amazon/stocks/high",color:Object(r.b)(r.a.QUALITATIVE_MUTED,5)[0],unit:"USD"}],o={id:"fake-id",legend:i.a.legend,viewPort:{start:new Date(1998,0,0),end:new Date(2e3,0,1)},dataStreamInfo:a}}}]);
//# sourceMappingURL=stencil-monitor-webgl-chart-dynamic-charts-entry-js.1c2ef67e.chunk.js.map