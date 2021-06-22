(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1076:function(n,e,t){"use strict";t.r(e),t.d(e,"monitor_webgl_chart_standard_with_legend_on_right",(function(){return d}));var r=t(61),i=t(1130),o=(t(1135),t(1132),t(1133)),u=(t(1131),t(1134),new Date(1998,0,0)),a=new Date(2e3,0,1),c={x:new Date((u.getTime()+a.getTime())/2).getTime(),y:2500},d=function(){function n(n){Object(r.i)(this,n)}return n.prototype.render=function(){return Object(r.h)("div",null,Object(r.h)("monitor-line-chart",{dataStreams:[{id:"test",color:"black",name:"test stream",data:[c],resolution:0,dataType:i.a.NUMBER}],widgetId:"widget-id",size:{height:500,width:500},legend:{width:100,position:o.a.RIGHT},viewPort:{start:u,end:a,yMin:0,yMax:5e3}}),Object(r.h)("monitor-webgl-context",null))},n}()},1130:function(n,e,t){"use strict";var r,i;t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return d})),t.d(e,"d",(function(){return o})),t.d(e,"e",(function(){return u})),t.d(e,"f",(function(){return a})),t.d(e,"g",(function(){return c})),function(n){n.NUMBER="NUMBER",n.STRING="STRING",n.BOOLEAN="BOOLEAN"}(r||(r={})),function(n){n.ALARM="ALARM",n.ANOMALY="ANOMALY"}(i||(i={}));var o={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},u="round",a=3,c="M 2 2 H 15",d="1, 5"},1131:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"d",(function(){return u})),t.d(e,"e",(function(){return a}));var r="-",i="No properties or alarms",o="This widget doesn't have any properties or alarms.",u="No data",a="There's no data to display for this time range."},1132:function(n,e,t){"use strict";var r,i,o;t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),function(n){n.LESS_THAN="LT",n.GREATER_THAN="GT",n.LESS_THAN_EQUAL="LTE",n.GREATER_THAN_EQUAL="GTE",n.EQUAL="EQ"}(r||(r={})),function(n){!function(n){n.EITHER="EITHER",n.RIGHT="RIGHT",n.LEFT="LEFT"}(n.DATA_ALIGNMENT||(n.DATA_ALIGNMENT={}))}(i||(i={})),function(n){n.ERROR="error",n.ACTIVE="active",n.NORMAL="normal",n.ACKNOWLEDGED="acknowledged",n.SNOOZED="snoozed",n.DISABLED="disabled",n.LATCHED="latched"}(o||(o={}))},1133:function(n,e,t){"use strict";var r,i;t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return r})),function(n){n.TimeSeries="time-series",n.Log="log",n.Linear="linear"}(r||(r={})),function(n){n.RIGHT="RIGHT",n.BOTTOM="BOTTOM"}(i||(i={}))},1134:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return r})),t.d(e,"e",(function(){return c})),t.d(e,"f",(function(){return a})),t.d(e,"g",(function(){return d})),t.d(e,"h",(function(){return s}));var r=1e3,i=60*r,o=60*i,u=24*o,a=30*u,c=12*a,d=function(n){if(n<0)throw new Error("Time cannot be negative!");var e=Math.floor(n/1e3),t=Math.floor(e/60),r=Math.floor(t/60);return{day:Math.floor(r/24),hour:r%=24,minute:t%=60,seconds:e%=60}},s=function(n,e,t){var r=t.start,c=t.end.getTime()-r.getTime();return e<o?c<i?n.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*i?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=o?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=u?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=a?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):n.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):e<=o?n.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):e<u?n.toLocaleString("en-US",{day:"numeric",month:"numeric"}):n.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1135:function(n,e,t){"use strict";var r;t.d(e,"a",(function(){return r})),t(1130),t(1132),t(1133),t(1131),t(1134),function(n){n.LINEAR="linear-regression"}(r||(r={}))},935:function(n,e,t){"use strict";t.r(e),t.d(e,"monitor_webgl_chart_standard_with_legend_on_right",(function(){return d}));var r=t(60),i=t(42),o=(t(138),t(68),t(99)),u=(t(51),t(69),new Date(1998,0,0)),a=new Date(2e3,0,1),c={x:new Date((u.getTime()+a.getTime())/2).getTime(),y:2500},d=function(){function n(n){Object(r.i)(this,n)}return n.prototype.render=function(){return Object(r.h)("div",null,Object(r.h)("monitor-line-chart",{dataStreams:[{id:"test",color:"black",name:"test stream",data:[c],resolution:0,dataType:i.a.NUMBER}],widgetId:"widget-id",size:{height:500,width:500},legend:{width:100,position:o.a.RIGHT},viewPort:{start:u,end:a,yMin:0,yMax:5e3}}),Object(r.h)("monitor-webgl-context",null))},n}()}}]);