(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1022:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return o})),n(14);var a=0,i=5e3,r=new Date(2e3,0,0,0,0),o=new Date(2e3,0,0,0,10),d=2500,c=(new Date(r.getTime()+1/3*(o.getTime()-r.getTime())),{x:(r.getTime()+o.getTime())/2,y:d})},934:function(t,e,n){"use strict";n.r(e),n.d(e,"sc_scatter_chart_dynamic_data",(function(){return s}));var a=n(13),i=(n(14),n(36)),r=(n(136),n(64)),o=n(1022),d=new Date(1998,0,0),c=new Date(2e3,0,1),u=c.getTime()-d.getTime(),s=function(){function t(t){var e=this;Object(a.l)(this,t),this.data=[],this.addDataPoint=function(){var t={x:d.getTime()+u/(2+e.data.length),y:o.c};e.data=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var a=Array(t),i=0;for(e=0;e<n;e++)for(var r=arguments[e],o=0,d=r.length;o<d;o++,i++)a[i]=r[o];return a}([t],e.data)},this.removeDataPoint=function(){var t=e.data,n=(t[0],t.slice(1));e.data=n}}return t.prototype.render=function(){var t;return Object(a.j)("div",null,Object(a.j)("button",{id:"add-data-point",onClick:this.addDataPoint},"Add Data Point"),Object(a.j)("button",{id:"remove-data-point",onClick:this.removeDataPoint},"Remove Data Point"),Object(a.j)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},Object(a.j)("sc-scatter-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"red",name:"test stream",data:[],aggregates:(t={},t[r.f]=this.data,t),resolution:r.f,dataType:i.b.NUMBER}],size:{height:500,width:500},viewport:{start:d,end:c,yMin:0,yMax:5e3}}),Object(a.j)("sc-webgl-context",null)))},t}()}}]);