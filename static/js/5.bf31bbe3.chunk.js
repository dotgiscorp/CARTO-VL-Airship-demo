(window["webpackJsonpdotgis-carto-vl-demo"]=window["webpackJsonpdotgis-carto-vl-demo"]||[]).push([[5],{104:function(e,t,r){"use strict";function a(e,t,r){if("number"!=typeof e||e<-1||e>1||"string"!=typeof t||"r"!=t[0]&&"#"!=t[0]||r&&"string"!=typeof r)return null;var a=function(e){var t=e.length,r={};if(t>9){if((e=e.split(",")).length<3||e.length>4)return null;r[0]=o(e[0].split("(")[1]),r[1]=o(e[1]),r[2]=o(e[2]),r[3]=e[3]?parseFloat(e[3]):-1}else{if(8==t||6==t||t<4)return null;t<6&&(e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+(t>4?e[4]+""+e[4]:"")),e=o(e.slice(1),16),r[0]=e>>16&255,r[1]=e>>8&255,r[2]=255&e,r[3]=-1,9!=t&&5!=t||(r[3]=i(r[2]/255*1e4)/1e4,r[2]=r[1],r[1]=r[0],r[0]=e>>24&255)}return r},o=parseInt,i=Math.round,n=t.length>9,s=(n="string"==typeof r?r.length>9||"c"==r&&!n:n,e<0),c=(e=s?-1*e:e,r=r&&"c"!=r?r:s?"#000000":"#FFFFFF",a(t)),g=a(r);return c&&g?n?"rgb"+(c[3]>-1||g[3]>-1?"a(":"(")+i((g[0]-c[0])*e+c[0])+","+i((g[1]-c[1])*e+c[1])+","+i((g[2]-c[2])*e+c[2])+(c[3]<0&&g[3]<0?")":","+(c[3]>-1&&g[3]>-1?i(1e4*((g[3]-c[3])*e+c[3]))/1e4:g[3]<0?c[3]:g[3])+")"):"#"+(4294967296+16777216*i((g[0]-c[0])*e+c[0])+65536*i((g[1]-c[1])*e+c[1])+256*i((g[2]-c[2])*e+c[2])+(c[3]>-1&&g[3]>-1?i(255*((g[3]-c[3])*e+c[3])):g[3]>-1?i(255*g[3]):c[3]>-1?i(255*c[3]):255)).toString(16).slice(1,c[3]>-1||g[3]>-1?void 0:-2):null}r.d(t,"a",(function(){return a}))},59:function(e,t,r){"use strict";r.r(t),r.d(t,"AsCategoryWidget",(function(){return c}));var a=r(96),o=r(14),i=r(98),n=r(104),s=r(99),c=function(){function e(){this.categories=[],this.disableInteractivity=!1,this.valueFormatter=this.defaultFormatter,this.showClearButton=!1,this.showHeader=!0,this.useTotalPercentage=!1,this.visibleCategories=1/0,this.isLoading=!1,this.error="",this.errorDescription="",this.noDataHeaderMessage="NO DATA AVAILABLE",this.noDataBodyMessage="There is no data to display.",this.selectedCategories=[]}return e.prototype.defaultFormatter=function(e){return""+Object(i.a)(e)},e.prototype.getSelectedCategories=function(){return a.a(this,void 0,void 0,(function(){return a.b(this,(function(e){return[2,this.selectedCategories]}))}))},e.prototype.clearSelection=function(){return a.a(this,void 0,void 0,(function(){return a.b(this,(function(e){return this.selectedCategories.length?(this.selectedCategories=[],this._onCategoriesChanged(),[2]):[2]}))}))},e.prototype.render=function(){return[this._renderHeader(),this._renderSelection(),this._renderContent()]},e.prototype._renderSelection=function(){var e=this;if(this.isLoading||this._isEmpty()||this.error||!this.showClearButton)return"";var t=this.selectedCategories.length;return Object(o.b)("as-widget-selection",{selection:(t||"All")+" selected",clearText:"Clear selection",showClear:t>0,onClear:function(){return e.clearSelection()}})},e.prototype._renderHeader=function(){if(this.showHeader)return Object(o.b)("as-widget-header",{header:this.heading,subheader:this.description,"is-empty":this._isEmpty(),"is-loading":this.isLoading,error:this.error,"no-data-message":this.noDataHeaderMessage})},e.prototype._renderContent=function(){return Object(s.a)(this.isLoading,this.error,this._isEmpty(),this.heading,this.errorDescription,this.noDataBodyMessage,this._renderCategoryList())},e.prototype._renderCategoryList=function(){return Object(o.b)("ul",{class:{"as-category-widget__list":!0,"as-category-widget__list--disabled":this.disableInteractivity}},this._renderCategories())},e.prototype._renderCategories=function(){var e,t=this,r=this.categories.length>this.visibleCategories,a=this._parseCategories(),o=a.categories,i=a.otherCategory,n=o.slice(0,this.visibleCategories),s=this.useTotalPercentage?this._getCategoriesTotalValue(this.categories):this._getCategoriesMaximumValue(o,Boolean(i));return(i||r)&&(e=this._renderOtherCategory(i,{maximumValue:s})),[n.map((function(e){return t._renderCategory(e,{maximumValue:s})})),e]},e.prototype._renderCategory=function(e,t){var r=this,a=t.isOther,i=t.maximumValue,n=this._isSelected(e.name),s=this.selectedCategories.length>0,c={backgroundColor:this._getBarColor(e.color,{isSelected:n,isOther:a})||"var(--as--category-bar--color)",width:e.value/i*100+"%"},g={"as-category-widget__category":!0,"as-category-widget__category--not-selected":s&&(!n||a),"as-category-widget__category--other":a,"as-category-widget__category--selected":n},l=this.valueFormatter(e.value);return Object(o.b)("li",{class:g,onClick:function(){return r._toggleCategory(e)}},Object(o.b)("p",{class:"as-category-widget__info as-body"},Object(o.b)("div",{class:"as-category-widget__title"},e.name),l),Object(o.b)("div",{class:"as-category-widget__bar"},Object(o.b)("div",{class:"as-category-widget__bar-value",style:c})))},e.prototype._renderOtherCategory=function(e,t){var r=e||{name:"Other",value:this._getCategoriesTotalValue(this.categories.slice(this.visibleCategories,this.categories.length))};return this._renderCategory(r,{maximumValue:t.maximumValue,isOther:!0})},e.prototype._isSelected=function(e){return this.selectedCategories.includes(e)},e.prototype._toggleCategory=function(e){this.disableInteractivity||(this.selectedCategories=this._isSelected(e.name)?this.selectedCategories.filter((function(t){return t!==e.name})):this.selectedCategories.concat([e.name]),this._onCategoriesChanged())},e.prototype._onCategoriesChanged=function(){this.categoriesSelected.emit(this.selectedCategories)},e.prototype._getCategoriesMaximumValue=function(e,t){return void 0===t&&(t=!1),this._getVisibleCategories(e,t).reduce((function(e,t){return t.value>e?t.value:e}),0)},e.prototype._getCategoriesTotalValue=function(e){return e.reduce((function(e,t){return t.value+e}),0)},e.prototype._getBarColor=function(e,t){return void 0===t&&(t={}),t.isOther?"#747474":t.isSelected?Object(n.a)(-.16,e):e},e.prototype._parseCategories=function(){var e=this.categories.find((function(e){return"Other"===e.name}));return e?{categories:this.categories.filter((function(t){return t.name!==e.name})),otherCategory:e}:{categories:this.categories}},e.prototype._getVisibleCategories=function(e,t){return t?e:e.slice(0,this.visibleCategories)},e.prototype._isEmpty=function(){return!this.categories||!this.categories.length},Object.defineProperty(e,"is",{get:function(){return"as-category-widget"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{categories:{type:"Any",attr:"categories"},clearSelection:{method:!0},defaultBarColor:{type:String,attr:"default-bar-color"},description:{type:String,attr:"description"},disableInteractivity:{type:Boolean,attr:"disable-interactivity"},error:{type:String,attr:"error"},errorDescription:{type:String,attr:"error-description"},getSelectedCategories:{method:!0},heading:{type:String,attr:"heading"},isLoading:{type:Boolean,attr:"is-loading"},noDataBodyMessage:{type:String,attr:"no-data-body-message"},noDataHeaderMessage:{type:String,attr:"no-data-header-message"},selectedCategories:{state:!0},showClearButton:{type:Boolean,attr:"show-clear-button"},showHeader:{type:Boolean,attr:"show-header"},useTotalPercentage:{type:Boolean,attr:"use-total-percentage"},valueFormatter:{type:"Any",attr:"value-formatter"},visibleCategories:{type:Number,attr:"visible-categories"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"categoriesSelected",method:"categoriesSelected",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"as-category-widget{--as--category-bar--background-color:var(--as--color--ui-02,#f5f5f5);--as--category-bar--color:var(--as--color--complementary,#47db99);--as--category-widget--background-color:var(--as--color--ui-01,#fff);--as--category-widget--bar--height:4px;--as--category-widget--description--color:var(--as--color--type-02,#747474);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:228px;height:100%;overflow-y:auto;background:var(--as--category-widget--background-color)}as-category-widget .content{min-height:100px}as-category-widget .as-category-widget__count{color:var(--as--category-widget--description--color)}as-category-widget .as-category-widget__list{-ms-flex:1;flex:1;margin:0;padding:0;overflow-y:auto;list-style:none}as-category-widget .as-category-widget__list.as-category-widget__list--disabled li{pointer-events:none}as-category-widget .as-category-widget__footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}as-category-widget .as-category-widget__list+.as-category-widget__footer{margin-top:16px}as-category-widget .as-category-widget__info{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}as-category-widget .as-category-widget__title{-ms-flex:1;flex:1;width:100%;padding-right:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}as-category-widget .as-category-widget__bar{position:relative;width:100%;height:var(--as--category-widget--bar--height);border-radius:2px;background-color:var(--as--category-bar--background-color)}as-category-widget .as-category-widget__bar-value{position:absolute;left:0;max-width:100%;height:var(--as--category-widget--bar--height);-webkit-transition:background .2s ease,opacity .5s ease;transition:background .2s ease,opacity .5s ease;border-radius:2px}as-category-widget .as-category-widget__category{margin-bottom:8px;cursor:pointer}as-category-widget .as-category-widget__category--other{pointer-events:none}as-category-widget .as-category-widget__category--not-selected{opacity:.5}as-category-widget .as-category-widget__category:not(.as-category-widget__category--selected):hover .as-category-widget__bar-value{opacity:.6}"},enumerable:!0,configurable:!0}),e}()},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));function a(e,t,r,a){return new(r||(r=Promise))((function(o,i){function n(e){try{c(a.next(e))}catch(t){i(t)}}function s(e){try{c(a.throw(e))}catch(t){i(t)}}function c(e){e.done?o(e.value):new r((function(t){t(e.value)})).then(n,s)}c((a=a.apply(e,t||[])).next())}))}function o(e,t){var r,a,o,i,n={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,a&&(o=2&i[0]?a.return:i[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,i[1])).done)return o;switch(a=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return n.label++,{value:i[1],done:!1};case 5:n.label++,a=i[1],i=[0];continue;case 7:i=n.ops.pop(),n.trys.pop();continue;default:if(!(o=(o=n.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){n=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){n.label=i[1];break}if(6===i[0]&&n.label<o[1]){n.label=o[1],o=i;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(i);break}o[2]&&n.ops.pop(),n.trys.pop();continue}i=t.call(e,n)}catch(s){i=[6,s],a=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}},98:function(e,t,r){"use strict";function a(e){var t=Math.abs(Math.ceil(100*e)/100);if(t>=1e9)return((t/1e9).toFixed(1)+"G").padStart(5);if(t>=1e6)return((t/1e6).toFixed(1)+"M").padStart(5);if(t>=1e3)return((t/1e3).toFixed(1)+"K").padStart(5);var r=""+t;return r.padStart(6+Math.abs(r.length-3))}r.d(t,"a",(function(){return a}))},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(14);function o(e,t,r,o,i,n,s){return e?Object(a.b)("as-loader",{class:o?"content as-pb--36":"content as-pb--20"}):t?Object(a.b)("p",{class:"content as-body"},i||"Unexpected error"):r?Object(a.b)("p",{class:"content as-body"},n):s}}}]);
//# sourceMappingURL=5.bf31bbe3.chunk.js.map