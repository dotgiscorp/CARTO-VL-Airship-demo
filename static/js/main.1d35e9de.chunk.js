(window["webpackJsonpdotgis-carto-vl-demo"]=window["webpackJsonpdotgis-carto-vl-demo"]||[]).push([[1],{18:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},28:function(e,t,n){var r={"./1u1qkicr.entry.js":[38,24],"./1u1qkicr.sc.entry.js":[39,25],"./2be7tag5.entry.js":[40,26],"./2be7tag5.sc.entry.js":[41,27],"./bdti9x4n.entry.js":[42,28],"./bdti9x4n.sc.entry.js":[43,29],"./fu7vp8cz.entry.js":[44,30],"./fu7vp8cz.sc.entry.js":[45,31],"./han7hxga.entry.js":[46,32],"./han7hxga.sc.entry.js":[47,33],"./hfmalcli.entry.js":[48,34],"./hfmalcli.sc.entry.js":[49,35],"./jistiymx.entry.js":[50,0,8],"./jistiymx.sc.entry.js":[51,0,9],"./jxraf4um.entry.js":[52,36],"./jxraf4um.sc.entry.js":[53,37],"./k9rm7qpz.entry.js":[54,10],"./k9rm7qpz.sc.entry.js":[55,11],"./kcyrxlpo.entry.js":[56,38],"./kcyrxlpo.sc.entry.js":[57,39],"./lviodzsm.entry.js":[58,4],"./lviodzsm.sc.entry.js":[59,5],"./mbrd1z8r.entry.js":[60,40],"./mbrd1z8r.sc.entry.js":[61,41],"./nycfox15.entry.js":[62,12],"./nycfox15.sc.entry.js":[63,13],"./qdb7o0gd.entry.js":[64,42],"./qdb7o0gd.sc.entry.js":[65,43],"./qhnsomau.entry.js":[66,44],"./qhnsomau.sc.entry.js":[67,45],"./rfxa1fox.entry.js":[68,46],"./rfxa1fox.sc.entry.js":[69,47],"./se9scahi.entry.js":[70,48],"./se9scahi.sc.entry.js":[71,49],"./sqqya1ws.entry.js":[72,50],"./sqqya1ws.sc.entry.js":[73,51],"./syejocpl.entry.js":[74,0,6],"./syejocpl.sc.entry.js":[75,0,7],"./t74bwt0k.entry.js":[76,52],"./t74bwt0k.sc.entry.js":[77,53],"./tglswmhe.entry.js":[78,0,18],"./tglswmhe.sc.entry.js":[79,0,19],"./tmuj3ovx.entry.js":[80,14],"./tmuj3ovx.sc.entry.js":[81,15],"./tx8kmi5k.entry.js":[82,54],"./tx8kmi5k.sc.entry.js":[83,55],"./ujs6osbl.entry.js":[84,16],"./ujs6osbl.sc.entry.js":[85,17],"./utgne20j.entry.js":[86,56],"./utgne20j.sc.entry.js":[87,57],"./w6zfcvoh.entry.js":[88,22],"./w6zfcvoh.sc.entry.js":[89,23],"./wubyvvev.entry.js":[90,20],"./wubyvvev.sc.entry.js":[91,21],"./xmgcm8yw.entry.js":[92,58],"./xmgcm8yw.sc.entry.js":[93,59],"./zhtrkmsa.entry.js":[94,60],"./zhtrkmsa.sc.entry.js":[95,61]};function s(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(r)},s.id=28,e.exports=s},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(4),c=n.n(a),o=(n(23),n(2)),i=n(3),y=n(7),j=n(5),u=n(8),l=n(13),m=n(9),d=n.n(m),f={QUERY:"SELECT cartodb_id, the_geom_webmercator, description FROM alcoy",USERNAME:"dotgis",API_KEY:"default_public"},h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(n=Object(y.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(s))))._addLayer=function(){var e=n.props.map,t=new d.a.source.SQL(f.QUERY,{username:f.USERNAME,apiKey:f.API_KEY}),r=new d.a.Viz("\n      @v_histogram: viewportHistogram($description, [[1, 2], [2, 3], [3, 4], [4, 5]])\n      color: opacity(ramp($description, BOLD), .6)\n      strokeColor: rgb(0, 255, 153)\n      width: 75 * animation($description, 5, fade(1, 2))\n      strokeWidth: 2\n    "),s=new d.a.Layer("test-layer",t,r);try{s.addTo(e,"waterway-label")}catch(a){throw new Error("Could not render the layer: ".concat(a))}s.on("updated",(function(){var e=s.viz.variables.v_histogram.value;n.props.onViewportHistogram(e)}))},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this._addLayer()}},{key:"render",value:function(){return null}}]),t}(s.a.Component),p=n(6),b=n(16);n(29);Object(b.a)(window);var v=function(e){var t=e.data,n=Object(r.useRef)(null),a=Object(r.useState)(null),c=Object(p.a)(a,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){i(t.map((function(e){return{start:e.x[0],end:e.x[1],value:e.y}})))}),[t]),Object(r.useEffect)((function(){n.current.data=o}),[o]),s.a.createElement("div",{className:"sidebar-container"},s.a.createElement("div",{className:"sidebar-container-histogram"},s.a.createElement("as-histogram-widget",{ref:n,"disable-interactivity":!0,responsive:!0,heading:"Type","show-header":!0,"show-clear":!0})))},w=Object(l.b)({accessToken:"pk.eyJ1IjoiZG90Z2lzIiwiYSI6ImNqd3Z6amtjMTBjOTA0OW84ZjVvYzF6bjQifQ.LIbUaYq3GaiWTzsBV6YnTA"}),g={BASEMAP:"mapbox://styles/dotgis/cjy5jaxp10qyc1cqurvmoc05v",CENTER:[-.48,38.71],ZOOM:[14],PITCH:[60]},E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(n=Object(y.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(s)))).state={mainData:[]},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.mainData;return s.a.createElement(r.Fragment,null,s.a.createElement(w,{style:g.BASEMAP,center:g.CENTER,zoom:g.ZOOM,pitch:g.PITCH,containerStyle:{position:"absolute",height:"100%",width:"100%"}},s.a.createElement(l.a.Consumer,null,(function(t){return s.a.createElement(h,{map:t,onViewportHistogram:function(t){e.setState({mainData:t})}})}))),t&&s.a.createElement(v,{data:t}))}}]),t}(s.a.Component);c.a.render(s.a.createElement(E,null),document.getElementById("root"))}},[[18,2,3]]]);
//# sourceMappingURL=main.1d35e9de.chunk.js.map