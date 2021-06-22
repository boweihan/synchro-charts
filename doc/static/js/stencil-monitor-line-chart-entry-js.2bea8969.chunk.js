(this["webpackJsonpmonitor-components-doc-site"]=this["webpackJsonpmonitor-components-doc-site"]||[]).push([[28],{103:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d}));var i=n(92),r=n(97),a=n(93),o=function(t){var e=t.viewPort,n=e.end,i=e.start,r=e.yMax,a=e.yMin,o=t.toClipSpace,c=t.size,s=c.width,u=c.height;return{x:Math.abs((o(n.getTime())-o(i.getTime()))/s),y:Math.abs((r-a)/u)}},c=function(t,e,n,r){var a=t.map((function(t){var n=e.find((function(e){var n=e.id;return t.id===n}));if(null==n)throw new Error("data streams must have an associated data stream info.\n         missing the data stream info for data stream id: "+t.id);return Object(i.p)(t,n)}));n.count=function(t){return t.reduce((function(t,e){return t+Math.max(e.length,0)}),0)}(a);var o=n.geometry.attributes,c=o.currPoint,s=o.nextPoint,u=o.segmentColor,f=0,d=0;a.forEach((function(t){t.forEach((function(e,n){var i=n===t.length-1?e:t[n+1],a=e[0],o=e[1],l=e[2],m=e[3],h=e[4],p=i[0],v=i[1];c.array[f]=r(a),c.array[f+1]=o,s.array[f]=r(p),s.array[f+1]=v,u.array[d]=l,u.array[d+1]=m,u.array[d+2]=h,d+=3,f+=2}))})),c.needsUpdate=!0,s.needsUpdate=!0,u.needsUpdate=!0},s=[[0,-.5],[1,-.5],[1,.5],[0,-.5],[1,.5],[0,.5]],u=function(t){var e=t.viewPort,n=t.dataStreams,r=t.dataStreamInfo,a=t.chartSize,u=t.minBufferSize,f=t.bufferFactor,d=t.toClipSpace,l=new i.c,m=Math.max(u,Object(i.o)(n)*f);!function(t,e){t.setAttribute("position",new i.h(new Float32Array(s.flat()),2)),t.setAttribute("currPoint",new i.j(new Float32Array(2*e),2,!1)),t.setAttribute("nextPoint",new i.j(new Float32Array(2*e),2,!1)),t.setAttribute("segmentColor",new i.j(new Uint8Array(3*e),3,!0))}(l,m);var h=o({viewPort:e,toClipSpace:d,size:a}),p=h.x,v=h.y,g=new i.e({vertexShader:"\nprecision highp float;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float width;\nuniform float xPixelDensity;\nuniform float yPixelDensity;\nattribute vec2 currPoint;\nattribute vec2 nextPoint;\nattribute vec2 position;\nattribute vec3 segmentColor;\nvarying vec3 vColor;\n\n// line shader using instanced lines\n// https://wwwtyro.net/2019/11/18/instanced-lines.html for information on this approach\nvoid main() {\n  // Convert the points to pixel coordinates - otherwise out basis vectors won't be perpendicular when\n  // rasterized to the screen.\n  vec2 currPointPx = vec2(currPoint.x / xPixelDensity, currPoint.y / yPixelDensity);\n  vec2 nextPointPx = vec2(nextPoint.x / xPixelDensity, nextPoint.y / yPixelDensity);\n\n  // create the basis vectors of a coordinate space where the x axis is parallel with\n  // the path between currPoint and nextPoint, and the y axis is perpendicular to the\n  // path between currPoint and nextPoint\n  vec2 xBasis = nextPointPx - currPointPx;\n  vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));\n\n  // project the instance segment along the basis vectors\n  vec2 positionPx = currPointPx + xBasis * position.x + yBasis * width * position.y;\n\n  // Convert from pixel coordinates back to model space\n  vec2 positionModel = vec2(positionPx.x * xPixelDensity, positionPx.y * yPixelDensity);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(positionModel, 0.0, 1.0);\n  vColor = segmentColor;\n}\n",fragmentShader:"\nprecision highp float;\nvarying vec3 vColor;\n\n// Fills in triangles which make up a line segment, with the corresponding color\nvoid main() {\n  gl_FragColor = vec4(vColor, 1.0);\n}\n",side:i.b,transparent:!0,uniforms:{width:{value:1.5},xPixelDensity:{value:p},yPixelDensity:{value:v}}}),S=new i.i(l,g,m);return S.frustumCulled=!1,c(n,r,S,d),S},f=function(t){var e=t.dataStreams,n=t.dataStreamInfo,o=t.chartSize,c=t.container,s=t.viewPort,f=t.minBufferSize,d=t.bufferFactor,l=t.onUpdate,m=new i.l,h=Object(a.a)(s),p=[];return p[1]=u({toClipSpace:h,chartSize:o,dataStreams:e,dataStreamInfo:n,viewPort:s,minBufferSize:f,bufferFactor:d}),p[r.b]=Object(r.c)({dataStreams:e,dataStreamInfo:n,minBufferSize:f,bufferFactor:d,toClipSpace:h}),p.forEach((function(t){return m.add(t)})),Object(i.k)({scene:m,viewPort:s,container:c,toClipSpace:h,onUpdate:l})},d=function(t){var e=t.scene,n=t.dataStreams,s=t.chartSize,u=t.dataStreamInfo,d=t.container,l=t.viewPort,m=t.hasDataChanged,h=t.bufferFactor,p=t.minBufferSize,v=t.onUpdate,g=e.scene.children[1],S=e.scene.children[r.b];return function(t){return t.geometry.attributes.position.array.length/r.a}(S)<Object(i.o)(n)||Object(a.b)(l,e.toClipSpace)?f({dataStreams:n,chartSize:s,dataStreamInfo:u,container:d,viewPort:l,minBufferSize:p,bufferFactor:h,onUpdate:v,thresholds:[]}):(function(t){var e=t.chartSize,n=t.toClipSpace,i=t.lines,r=t.dataStreams,a=t.dataStreamInfo,s=t.viewPort,u=t.hasDataChanged,f=o({viewPort:s,toClipSpace:n,size:e}),d=f.x,l=f.y;i.material.uniforms.xPixelDensity.value=d,i.material.uniforms.yPixelDensity.value=l,u&&c(r,a,i,n)}({lines:g,dataStreams:n,dataStreamInfo:u,chartSize:s,viewPort:l,hasDataChanged:m,toClipSpace:e.toClipSpace}),m&&Object(r.d)(n,u,S,e.toClipSpace),e)}},49:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_line_chart",(function(){return o}));var i=n(2),r=(n(94),n(88),n(89),n(95),n(90)),a=(n(92),n(97),n(100),n(98),n(101),n(103)),o=(n(93),function(){function t(t){Object(i.i)(this,t),this.isLoading=!1,this.isEditing=!1,this.isFetching=!1,this.errorMap={},this.bufferFactor=2,this.minBufferSize=1e3}return t.prototype.render=function(){var t=this;return Object(i.h)("monitor-size-provider",{size:this.config.size,renderFunc:function(e){return Object(i.h)("monitor-viewport-provider",{dataStreams:t.data,config:t.config,annotations:t.annotations,renderFunc:function(n){return Object(i.h)("monitor-webgl-base-chart",{configId:t.config.id,legend:t.config.legend,annotations:t.annotations,updateChartScene:a.b,createChartScene:a.a,dataStreamInfo:t.config.dataStreamInfo,errorMap:t.errorMap,size:Object.assign(Object.assign(Object.assign({},r.a.size),t.config.size),e),data:t.data,viewPort:Object.assign(Object.assign({},t.config.viewPort),n),minBufferSize:t.minBufferSize,bufferFactor:t.bufferFactor,isEditing:t.isEditing,isFetching:t.isFetching,isLoading:t.isLoading})}})}})},t}())},88:function(t,e,n){"use strict";var i,r;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(i||(i={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(r||(r={}))},89:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return f}));var i=1e3,r=60*i,a=60*r,o=24*a,c=30*o,s=12*c,u=function(t){if(t<0)throw new Error("Time cannot be negative!");var e=Math.floor(t/1e3),n=Math.floor(e/60),i=Math.floor(n/60);return{day:Math.floor(i/24),hour:i%=24,minute:n%=60,seconds:e%=60}},f=function(t,e,n){var i=n.start,c=n.end;if(e<o){var s=c.getTime()-i.getTime();return s<r?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):s<10*r?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}return e<=a?t.toLocaleString("en-US",{hour:"numeric",day:"long",hour12:!0}):e<=o?t.toLocaleString("en-US",{day:"numeric",month:"long"}):t.toLocaleString("en-US",{year:"numeric",month:"long"})}},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(88),r={id:"fake-id",viewPort:{start:new Date(1995,0,0,0),end:new Date(2020,1,0,0),yMin:0,yMax:1e4},size:{width:475,height:350,marginLeft:50,marginRight:50,marginTop:8,marginBottom:30},movement:{enableXScroll:!0,enableYScroll:!1,zoomMax:1/0,zoomMin:1e-5},layout:{xGridVisible:!1,yGridVisible:!0,xTicksVisible:!0,yTicksVisible:!0},scale:{xScaleType:i.b.TimeSeries,yScaleType:i.b.Linear,xScaleSide:"bottom",yScaleSide:"left"},dataStreamInfo:[],legend:{position:i.a.BOTTOM,width:180}}},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var i=n(89),r=function(t){var e=t.end.getTime()-t.start.getTime(),n=t.start.getTime()-.25*e,r=function(t){return t<10*i.c?1:t<i.a?i.d/10:t<7*i.a?i.d:t<i.e?i.c:t<30*i.e?30*i.c:i.a}(e);return function(t){return Math.floor((t-n)/r)}},a=function(t,e){return Math.abs(e(t.getTime()))>=Math.pow(10,7)},o=function(t,e){var n=a(t.start,e)||a(t.end,e),i=t.end.getTime()-t.start.getTime(),r=e(t.end.getTime())-e(t.start.getTime());return n||i>r&&r<3e3}},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u}));var i=n(92),r=0,a=function(t){return 0===(null!=t[0]?t[0].resolution:null)?4:6.25},o=2,c=function(t,e,n,r){var a=e.map((function(t){var e=n.find((function(e){var n=e.id;return t.id===n}));if(null==e)throw new Error("data streams must have an associated data stream info.\n         missing the data stream info for data stream id: "+t.id);return Object(i.p)(t,e)})).flat(),c=t.attributes,s=c.position,u=c.pointColor;a.forEach((function(t,e){var n=t[0],i=t[1],a=t[2],c=t[3],f=t[4];s.array[e*o]=r(n),s.array[e*o+1]=i,u.array[3*e]=a,u.array[3*e+1]=c,u.array[3*e+2]=f})),t.setDrawRange(0,a.length),s.needsUpdate=!0,u.needsUpdate=!0},s=function(t){var e=t.toClipSpace,n=t.dataStreams,r=t.dataStreamInfo,s=t.minBufferSize,u=t.bufferFactor,f=Math.max(s,Object(i.o)(n)*u),d=new i.a;!function(t,e){t.setAttribute("position",new i.h(new Float32Array(e*o),o)),t.setAttribute("pointColor",new i.h(new Uint8Array(3*e),3,!0))}(d,f),c(d,n,r,e);var l=new i.f({vertexShader:"\nvarying vec3 vColor;\nattribute vec3 pointColor;\nuniform float pointDiameter;\nuniform float devicePixelRatio;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, 0.0, 1.0);\n  gl_PointSize = pointDiameter * devicePixelRatio;\n  vColor = pointColor;\n}\n",fragmentShader:"\nvarying vec3 vColor;\n\nvoid main() {\n  // calculate position such that the center is (0, 0) in a region of [-1, 1] x [-1, 1]\n  vec2 pos = 2.0 * gl_PointCoord.xy - 1.0;\n  // r = distance squared from the origin of the point being rendered\n  float r = dot(pos, pos);\n  if (r > 1.0) {\n    discard;\n  }\n  float alpha = 1.0 - smoothstep(0.5, 1.0, sqrt(r));\n  gl_FragColor = vec4(vColor, alpha);\n}\n",transparent:!0,uniforms:{pointDiameter:{value:a(n)},devicePixelRatio:{value:window.devicePixelRatio}}}),m=new i.d(d,l);return m.frustumCulled=!1,m},u=function(t,e,n,i){n.material.uniforms.pointDiameter.value=a(t),c(n.geometry,t,e,i)}}}]);
//# sourceMappingURL=stencil-monitor-line-chart-entry-js.2bea8969.chunk.js.map