(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{913:function(t,e,i){"use strict";i.r(e),i.d(e,"line_chart_viewport_change",(function(){return c}));var n=i(13),r="some-group",o={start:new Date(2e3,0,0),end:new Date(2e3,0,1),group:r},w={start:new Date(2e3,0,0),end:new Date(2001,0,0),group:r},c=function(){function t(t){var e=this;Object(n.l)(this,t),this.viewport=o,this.toggleViewPort=function(){e.viewport=e.viewport!==o?o:w}}return t.prototype.render=function(){return Object(n.j)("div",null,Object(n.j)("button",{id:"toggle-view-port",onClick:this.toggleViewPort},"use ",this.viewport===o?"wide":"narrow"," viewport"),Object(n.j)("br",null),Object(n.j)("br",null),Object(n.j)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},Object(n.j)("sc-line-chart",{widgetId:"widget-id",dataStreams:[],viewport:this.viewport})),Object(n.j)("sc-webgl-context",null))},t}()}}]);