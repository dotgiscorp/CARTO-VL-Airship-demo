(window["webpackJsonpdotgis-carto-vl-demo"]=window["webpackJsonpdotgis-carto-vl-demo"]||[]).push([[38],{56:function(o,e,n){"use strict";n.r(e),n.d(e,"AsLegendColorBins",(function(){return r})),n.d(e,"AsLegendColorBinsPolygon",(function(){return s}));var l=n(14),r=function(){function o(){}return o.prototype.render=function(){return this.data&&0!==this.data.length?"polygon"===this.data[0].type?Object(l.b)("as-legend-color-bins-polygon",{data:this.data,orientation:this.orientation}):Object(l.b)("as-legend-category",{data:this.data,orientation:this.orientation,width:this.width}):null},Object.defineProperty(o,"is",{get:function(){return"as-legend-color-bins"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{data:{type:"Any",attr:"data"},orientation:{type:String,attr:"orientation"},width:{type:Number,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return"as-legend-color-bins{display:block}"},enumerable:!0,configurable:!0}),o}(),s=function(){function o(){this.orientation="vertical"}return o.prototype.render=function(){var o;if(!this.data)return null;var e=((o={"as-legend-color-bins-polygon--outer-wrapper":!0})["as-legend-color-bins-polygon--"+this.orientation]=!0,o);return Object(l.b)("div",{class:e},Object(l.b)("div",{class:"as-legend-color-bins-polygon--wrapper as-legend-color-bins-polygon--color"},this.data.map(this.renderStep)),Object(l.b)("div",{class:"as-legend-color-bins-polygon--wrapper as-legend-color-bins-polygon--labels"},this.data.map(this.renderLabels)))},o.prototype.renderStep=function(o){return Object(l.b)("div",{class:"as-legend-color-bins-polygon--step",style:{background:o.color}})},o.prototype.renderLabels=function(o){return Object(l.b)("div",{class:"as-legend-color-bins-polygon--label"},Object(l.b)("span",null,o.label))},Object.defineProperty(o,"is",{get:function(){return"as-legend-color-bins-polygon"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{data:{type:"Any",attr:"data"},orientation:{type:String,attr:"orientation"}}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return"as-legend-color-bins-polygon{--as-legend-color-bins-polygon--border-color:rgba(0,0,0,0.1);--as-legend-color-bins-polygon--color:var(--as--color--type-01);display:block}as-legend-color-bins-polygon .as-legend-color-bins-polygon--outer-wrapper{display:-ms-flexbox;display:flex}as-legend-color-bins-polygon .as-legend-color-bins-polygon--outer-wrapper.as-legend-color-bins-polygon--vertical{-ms-flex-direction:row;flex-direction:row}as-legend-color-bins-polygon .as-legend-color-bins-polygon--outer-wrapper.as-legend-color-bins-polygon--horizontal{-ms-flex-direction:column;flex-direction:column}as-legend-color-bins-polygon .as-legend-color-bins-polygon--wrapper{display:-ms-flexbox;display:flex}as-legend-color-bins-polygon .as-legend-color-bins-polygon--color{-webkit-box-shadow:-1px 0 2px 0 var(--as-legend-color-bins-polygon--border-color);box-shadow:-1px 0 2px 0 var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--horizontal .as-legend-color-bins-polygon--wrapper{min-width:300px}as-legend-color-bins-polygon .as-legend-color-bins-polygon--horizontal .as-legend-color-bins-polygon--labels{margin-top:8px}as-legend-color-bins-polygon .as-legend-color-bins-polygon--label{-ms-flex:1;flex:1;color:var(--as-legend-color-bins-polygon--color);font:var(--as--font--caption);text-transform:capitalize;white-space:nowrap}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--wrapper{-ms-flex-direction:column;flex-direction:column;min-height:300px}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--labels{margin-left:8px}as-legend-color-bins-polygon .as-legend-color-bins-polygon--step{-ms-flex:1;flex:1}as-legend-color-bins-polygon .as-legend-color-bins-polygon--horizontal .as-legend-color-bins-polygon--step{height:8px;border-top:1px solid var(--as-legend-color-bins-polygon--border-color);border-bottom:1px solid var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--step{width:8px;border-right:1px solid var(--as-legend-color-bins-polygon--border-color);border-left:1px solid var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--horizontal .as-legend-color-bins-polygon--step:first-of-type{border-left:1px solid var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--horizontal .as-legend-color-bins-polygon--step:last-of-type{border-right:1px solid var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--step:first-of-type{border-top:1px solid var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--step:last-of-type{border-bottom:1px solid var(--as-legend-color-bins-polygon--border-color)}"},enumerable:!0,configurable:!0}),o}()}}]);
//# sourceMappingURL=38.7dac3a97.chunk.js.map