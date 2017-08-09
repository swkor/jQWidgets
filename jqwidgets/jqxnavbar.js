/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){e.jqx.jqxWidget("jqxNavBar","",{}),e.extend(e.jqx._jqxNavBar.prototype,{defineInstance:function(){var t={height:"auto",minimizedHeight:30,popupAnimationDelay:250,minimizeButtonPosition:"left",width:"100%",selectedItem:0,selection:!0,disabled:!1,rtl:!1,minimized:!1,columns:null,minimizedTitle:"",orientation:"horizontal",events:["change"]};return this===e.jqx._jqxNavBar.prototype?t:(e.extend(!0,this,t),t)},createInstance:function(e){this.render()},render:function(){var t=this;t.ul&&t.ul.parent()[0]!==t.element&&(t.ul.detach(),t.host.children().remove(),t.host.append(t.ul),t.popup&&t.popup.remove(),t.host.height(null),t.host.removeClass(t.toThemeProperty("jqx-widget-header")),t.host.removeClass(t.toThemeProperty("jqx-navbar-minimized"))),t.ul=t.host.children(),t._items=t.ul.children(),e.each(t._items,function(){e(this).removeClass()}),null!==this.width&&(this.width.toString().indexOf("%")>=0||this.width.toString().indexOf("px")>=0)?this.element.style.width=this.width:this.element.style.width=this.width+"px",t._layoutItems(),t._addClasses(),t._addHandlers(),t._handleMinimize(),e.jqx.utilities.resize(this.host,function(){t._resizePopup()})},_layoutItems:function(){var t=this,i=1,s=0,o=null===this.height||"auto"===this.height;if("horizontal"===t.orientation){if(t._items.length>5){n="50%";t._items.css("width",n);r=t.height;if(i=Math.ceil(t._items.length/2),!o){p=!1;r.toString().indexOf("%")>=0?(m=parseInt(r)/i,m+="%",p=!0):m=parseInt(r)/i,s=2,p?(t._items.css("height",m),t._items.css("line-height",t._items.height()+"px")):(t._items.height(m),t._items.css("line-height",m+"px"))}}else{var n=t.host.width/2,h=t._items.length,n=100/h+"%";t._items.css("width",n),o||(t.height.toString().indexOf("%")>=0?(t._items.css("height",m),t._items.css("line-height",t.height)):(t._items.height(t.height),t._items.css("line-height",parseInt(t.height)+"px"))),s=h}if(t.columns){for(var r=t.height,d=0,a=0;a<t._items.length;a++){l=t._items[a];e(l).css("width",t.columns[d]),++d>=t.columns.length&&(d=0,t.columns.length!==t._items.length&&i++)}p=!1;r.toString().indexOf("%")>=0?(m=parseInt(r)/i,m+="%",p=!0):m=parseInt(r)/i,o||(p?(t._items.css("height",m),t._items.css("line-height",t._items.height()+"px")):(t._items.height(m),t._items.css("line-height",m+"px"))),s=t.columns.length}}else{for(var r=t.height,d=0,a=0;a<t._items.length;a++){var l=t._items[a];e(l).css("width","100%")}if(i=t._items.length,!o){var m,p=!1;r.toString().indexOf("%")>=0?(m=parseInt(r)/i,m+="%",p=!0):m=parseInt(r)/i,p?(t._items.css("height",m),t._items.css("line-height",t._items.height()+"px")):(t._items.height(m),t._items.css("line-height",m+"px"))}s=1}if(t.selection){var c=0,g=!1;t._items.length/s<i&&(g=!0);for(a=0;a<i;a++)for(var u=0;u<s;u++){if(u<s-1){var v=t.rtl?"left":"right";e(t._items[c]).css("border-"+v+"-width","1px"),e(t._items[c]).css("border-"+v+"-style","solid")}i>1&&a>0&&(e(t._items[c]).css("border-top-width","1px"),e(t._items[c]).css("border-top-style","solid")),g&&a===i-2&&u===s-1&&(e(t._items[c]).css("border-bottom-width","1px"),e(t._items[c]).css("border-bottom-style","solid")),c++}}e.jqx.browser.msie&&e.jqx.browser.version<8&&(t._items.css("padding-left","0px"),t._items.css("padding-right","0px"),e.each(t._items,function(){e(this).css("border-left-width","0px"),e(this).css("border-right-width","0px"),e(this).css("position","relative"),e(this).css("margin-left","-1px")}),t.host.css("border","none"))},_handlePopupHeight:function(){var e=this;if(e.minimized){var t,i=!1;e.height.toString().indexOf("%")>=0&&(e.host.css("height",e.height),t=e.host.height()-e.minimizedHeight-1,i=!0),i&&(e.popup.height(t),e.ul.height(t),e.host.height(e.minimizedHeight),e._layoutItems())}},_handleMinimize:function(){var t=this;if(t.minimized){var i=t.host;i.height(t.minimizedHeight),i.css("box-sizing","border-box"),i.addClass(t.toThemeProperty("jqx-widget-header")),i.addClass(t.toThemeProperty("jqx-navbar-minimized"));var s=e('<div style="cursor: pointer; height: 100%; margin:0px; margin-left: 5px; margin-right:5px;"></div>');i.append(s),s.css("float",t.minimizeButtonPosition);var o=e('<div style="height: 100%; margin:0px; margin-left: 5px; margin-right:5px;"></div>');o.append(t.minimizedTitle),o.css("float","left"===t.minimizeButtonPosition?"right":"left"),"auto"!==t.minimizedHeight&&(t.minimizedHeight.toString().indexOf("%")>=0?o.css("line-height",t.minimizedHeight):o.css("line-height",parseInt(t.minimizedHeight)+"px")),i.append(o),s.addClass(t.toThemeProperty("jqx-menu-minimized-button")),i.removeClass(t.toThemeProperty("jqx-widget-content")),t.ul.detach();var n=e("<div style='box-sizing: border-box; z-index: 999999; display: none; position: absolute;'></div>");n.addClass(t.toThemeProperty("jqx-widget jqx-widget-content jqx-popup jqx-navbar jqx-navbar-popup")),n.append(t.ul),t.popup=n,e(document.body).append(n),t.opened=!1,s.click(function(){t.opened?t.close():t.open()}),t.button=s}},close:function(){var e=this;e.popup.fadeOut(e.popupAnimationDelay),e.opened=!1},open:function(){var e=this;e.popup.fadeIn(e.popupAnimationDelay),e.popup.css("top",parseInt(e.host.coord().top)+e.host.outerHeight()-1),e.popup.width(e.host.width());var t=e.host.coord().left;e.popup.css("left",t),t.toString().indexOf(".5")>=0&&e.popup.width(e.host.width()-.5),e._handlePopupHeight(),e.opened=!0},_resizePopup:function(){var e=this;if(e.minimized&&e.popup){e.popup.width(e.host.width());var t=e.host.coord().left;e.popup.css("left",t),t.toString().indexOf(".5")>=0&&e.popup.width(e.host.width()-.5),e.popup.css("top",parseInt(e.host.coord().top)+e.host.outerHeight()-1),e._handlePopupHeight()}},selectAt:function(t){var i=this;if(i.selection){e(i._items[i.selectedItem]).removeClass(i.toThemeProperty("jqx-fill-state-pressed")),e(i._items[t]).addClass(i.toThemeProperty("jqx-fill-state-pressed"));var s=i.selectedItem;i.selectedItem=t,i._raiseEvent("0",{selectedItem:t,oldSelectedItem:s})}},getSelectedIndex:function(){return this.selectedItem},destroy:function(){var e=this;e._removeHandlers(),e.host.remove()},propertyChangedHandler:function(e,t,i,s){e.render()},_raiseEvent:function(t,i){var s=this,o=s.events[t],n=new e.Event(o);n.owner=s,n.args=i;try{var h=s.host.trigger(n)}catch(e){}return h},_removeHandlers:function(){var e=this;e.removeHandler(e._items,"click.navbar"+e.element.id),e.removeHandler(e._items,"mouseenter.navbar"+e.element.id),e.removeHandler(e._items,"mouseleave.navbar"+e.element.id)},_addClasses:function(){var t=this;t.host.addClass(t.toThemeProperty("jqx-navbar")),t.disabled&&t.host.addClass(t.toThemeProperty("jqx-fill-state-disabled")),t._items.addClass(t.toThemeProperty("jqx-navbar-block")),t.selection?(t.host.addClass(t.toThemeProperty("jqx-widget")),t.host.addClass(t.toThemeProperty("jqx-widget-content")),t.host.addClass(t.toThemeProperty("jqx-fill-state-normal")),t._items.addClass(t.toThemeProperty("jqx-fill-state-normal")),t._items.addClass(t.toThemeProperty("jqx-button")),-1!==t.selectedItem&&e(t._items[t.selectedItem]).addClass(t.toThemeProperty("jqx-fill-state-pressed"))):this.host.css("border","none"),t.rtl&&t._items.addClass(t.toThemeProperty("jqx-navbar-block-rtl"))},_addHandlers:function(){var t=this;t.addHandler(t._items,"click.navbar"+t.element.id,function(i){if(!t.disabled&&t.selection){var s=e(t._items).index(this);t.selectAt(s)}}),t.addHandler(t._items,"mouseenter.navbar"+t.element.id,function(i){!t.disabled&&t.selection&&e(i.target).addClass(t.toThemeProperty("jqx-fill-state-hover"))}),t.addHandler(t._items,"mouseleave.navbar"+t.element.id,function(i){!t.disabled&&t.selection&&e(i.target).removeClass(t.toThemeProperty("jqx-fill-state-hover"))})}})}(jqxBaseFramework);

