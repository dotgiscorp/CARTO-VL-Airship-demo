(window["webpackJsonpdotgis-carto-vl-demo"]=window["webpackJsonpdotgis-carto-vl-demo"]||[]).push([[20],{103:function(t,a,e){"use strict";function r(t){for(var a=0,e=t.querySelectorAll("*");a<e.length;a++){var r=e[a];0===r.tagName.toLowerCase().indexOf("as-")&&r.forceUpdate&&r.forceUpdate()}}e.d(a,"a",(function(){return r}))},90:function(t,a,e){"use strict";e.r(a),e.d(a,"AsTabs",(function(){return s}));var r=e(14),o=e(103),s=function(){function t(){this.activeTab=0,this.xl=!1}return t.prototype.render=function(){var t=this._parseChildren();return[this._renderTabs(t),Object(r.b)("slot",null)]},t.prototype.componentDidLoad=function(){var t=this._parseChildren();this._updateActiveTab(t)},t.prototype.componentDidUpdate=function(){var t=this._parseChildren();this._updateActiveTab(t)},t.prototype._parseChildren=function(){return Array.from(this.element.querySelectorAll('[role="tabpanel"]'))},t.prototype._updateActiveTab=function(t){var a=this;t?t.forEach((function(t,e){var r=a.activeTab===e;r?t.removeAttribute("hidden"):t.setAttribute("hidden","hidden"),r&&Object(o.a)(t)})):console.warn('Airship Tabs: Children elements must have role="tabpanel" attribute.')},t.prototype._renderTabs=function(t){return Object(r.b)("div",{role:"tablist",class:{"as-tabs":!0,"as-tabs--xl":this.xl}},t.map(this._renderTab.bind(this)))},t.prototype._renderTab=function(t,a){var e=this,o={"as-tabs__item":!0,"as-tabs__item--active":a===this.activeTab},s=this._getTitle(t,a);return Object(r.b)("button",{role:"tab",class:o,onClick:function(){e.activeTab=a}}," ",s," ")},t.prototype._getTitle=function(t,a){return t.getAttribute("data-title")?t.getAttribute("data-title"):"Tab "+a},Object.defineProperty(t,"is",{get:function(){return"as-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activeTab:{type:Number,attr:"active-tab",mutable:!0},element:{elementRef:!0},xl:{type:Boolean,attr:"xl"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".as-tabs{--as--tabs--background-color:var(--as--color--ui-01,#fff);--as--tabs--border-color:var(--as--color--ui-03,#e2e6e3);--as--tabs--item--font:var(--as--font--body);--as--tabs--item--color:var(--as--color--primary,#1785fb);--as--tabs--item--color-hover:var(--as--color--type-01,#2c2c2c);--as--tabs--item--color-active:var(--as--color--primary,#1785fb);--as--tabs--item--border-color-hover:var(--as--color--complementary,#47db99);--as--tabs--item--border-color-active:var(--as--color--primary,#1785fb);--as--tabs--item--border-color-hover-active:var(--as--color--primary,#1785fb);--as--tabs--subheader--font:var(--as--font--subheader);--as--tabs--horizontal-padding:12px;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;margin:0;padding:0 var(--as--tabs--horizontal-padding);overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;background:var(--as--tabs--background-color);-webkit-box-shadow:inset 0 -1px 0 0 var(--as--tabs--border-color);box-shadow:inset 0 -1px 0 0 var(--as--tabs--border-color);list-style:none}.as-tabs::-webkit-scrollbar,.as-tabs::-webkit-scrollbar-thumb{display:none}.as-tabs__item{padding:8px 12px;display:inline-block;-ms-flex:0 0 auto;flex:0 0 auto;margin:0;-webkit-transition:border .2s;transition:border .2s;border:none;border-bottom:2px solid transparent;outline:none;background:none;color:var(--as--tabs--item--color);font:var(--as--tabs--item--font);text-decoration:none;cursor:pointer}.as-tabs__item:hover{border-bottom:2px solid var(--as--tabs--item--border-color-hover)}.as-tabs__item--active{border-bottom:2px solid var(--as--tabs--item--border-color-active);color:var(--as--tabs--item--color-active)}.as-tabs__item--active:hover{border-bottom:2px solid var(--as--tabs--item--border-color-hover-active)}.as-tabs__item a{color:inherit;text-decoration:none}.as-tabs--xl .as-tabs__item{border-bottom:4px solid transparent;font:var(--as--tabs--subheader--font)}.as-tabs--xl .as-tabs__item:focus,.as-tabs--xl .as-tabs__item:hover{border-bottom:4px solid var(--as--tabs--item--border-color-hover)}.as-tabs--xl .as-tabs__item--active,.as-tabs--xl .as-tabs__item:active{border-bottom:4px solid var(--as--tabs--item--border-color-active);color:var(--as--tabs--item--color-active)}as-tabs{display:block}"},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=20.f9513d79.chunk.js.map