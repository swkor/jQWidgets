/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){t.jqx.jqxWidget("jqxScrollBar","",{}),t.extend(t.jqx._jqxScrollBar.prototype,{defineInstance:function(){var e={height:null,width:null,vertical:!1,min:0,max:1e3,value:0,step:10,largestep:50,thumbMinSize:10,thumbSize:0,thumbStep:"auto",roundedCorners:"all",showButtons:!0,disabled:!1,touchMode:"auto",touchModeStyle:"auto",thumbTouchSize:0,_triggervaluechanged:!0,rtl:!1,areaDownCapture:!1,areaUpCapture:!1,_initialLayout:!1,offset:0,reference:0,velocity:0,frame:0,timestamp:0,ticker:null,amplitude:0,target:0};return this===t.jqx._jqxScrollBar.prototype?e:(t.extend(!0,this,e),e)},createInstance:function(t){this.render()},render:function(){this._mouseup=new Date;var e=this,s="<div id='jqxScrollOuterWrap' style='box-sizing: content-box; width:100%; height: 100%; align:left; border: 0px; valign:top; position: relative;'><div id='jqxScrollWrap' style='box-sizing: content-box; width:100%; height: 100%; left: 0px; top: 0px; align:left; valign:top; position: absolute;'><div id='jqxScrollBtnUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div><div id='jqxScrollAreaUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollThumb' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollAreaDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollBtnDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div></div></div>";if(t.jqx.utilities&&"hidden"==t.jqx.utilities.scrollBarButtonsVisibility&&(this.showButtons=!1),e.WinJS?MSApp.execUnsafeLocalFunction(function(){e.host.html(s)}):this.element.innerHTML=s,void 0!=this.width&&parseInt(this.width)>0&&this.host.width(parseInt(this.width)),void 0!=this.height&&parseInt(this.height)>0&&this.host.height(parseInt(this.height)),this.isPercentage=!1,null!=this.width&&-1!=this.width.toString().indexOf("%")&&(this.host.width(this.width),this.isPercentage=!0),null!=this.height&&-1!=this.height.toString().indexOf("%")&&(this.host.height(this.height),this.isPercentage=!0),this.isPercentage){var i=this;t.jqx.utilities.resize(this.host,function(){i._arrange()},!1)}this.thumbCapture=!1,this.scrollOuterWrap=t(this.element.firstChild),this.scrollWrap=t(this.scrollOuterWrap[0].firstChild),this.btnUp=t(this.scrollWrap[0].firstChild),this.areaUp=t(this.btnUp[0].nextSibling),this.btnThumb=t(this.areaUp[0].nextSibling),this.arrowUp=t(this.btnUp[0].firstChild),this.areaDown=t(this.btnThumb[0].nextSibling),this.btnDown=t(this.areaDown[0].nextSibling),this.arrowDown=t(this.btnDown[0].firstChild);var r=this.element.id;if(this.btnUp[0].id="jqxScrollBtnUp"+r,this.btnDown[0].id="jqxScrollBtnDown"+r,this.btnThumb[0].id="jqxScrollThumb"+r,this.areaUp[0].id="jqxScrollAreaUp"+r,this.areaDown[0].id="jqxScrollAreaDown"+r,this.scrollWrap[0].id="jqxScrollWrap"+r,this.scrollOuterWrap[0].id="jqxScrollOuterWrap"+r,!this.host.jqxRepeatButton)throw new Error("jqxScrollBar: Missing reference to jqxbuttons.js.");this.btnUp.jqxRepeatButton({_ariaDisabled:!0,overrideTheme:!0,disabled:this.disabled}),this.btnDown.jqxRepeatButton({_ariaDisabled:!0,overrideTheme:!0,disabled:this.disabled}),this.btnDownInstance=t.data(this.btnDown[0],"jqxRepeatButton").instance,this.btnUpInstance=t.data(this.btnUp[0],"jqxRepeatButton").instance,this.areaUp.jqxRepeatButton({_scrollAreaButton:!0,_ariaDisabled:!0,overrideTheme:!0}),this.areaDown.jqxRepeatButton({_scrollAreaButton:!0,_ariaDisabled:!0,overrideTheme:!0}),this.btnThumb.jqxButton({_ariaDisabled:!0,overrideTheme:!0,disabled:this.disabled}),this.propertyChangeMap.value=function(t,e,s,i){isNaN(i)||s!=i&&t.setPosition(parseFloat(i),!0)},this.propertyChangeMap.width=function(t,e,s,i){void 0!=t.width&&parseInt(t.width)>0&&(t.host.width(parseInt(t.width)),t._arrange())},this.propertyChangeMap.height=function(t,e,s,i){void 0!=t.height&&parseInt(t.height)>0&&(t.host.height(parseInt(t.height)),t._arrange())},this.propertyChangeMap.theme=function(t,e,s,i){t.setTheme()},this.propertyChangeMap.max=function(t,e,s,i){isNaN(i)||s!=i&&(t.max=parseInt(i),t.min>t.max&&(t.max=t.min+1),t._arrange(),t.setPosition(t.value))},this.propertyChangeMap.min=function(t,e,s,i){isNaN(i)||s!=i&&(t.min=parseInt(i),t.min>t.max&&(t.max=t.min+1),t._arrange(),t.setPosition(t.value))},this.propertyChangeMap.disabled=function(t,e,s,i){s!=i&&(i?t.host.addClass(t.toThemeProperty("jqx-fill-state-disabled")):t.host.removeClass(t.toThemeProperty("jqx-fill-state-disabled")),t.btnUp.jqxRepeatButton("disabled",t.disabled),t.btnDown.jqxRepeatButton("disabled",t.disabled),t.btnThumb.jqxButton("disabled",t.disabled))},this.propertyChangeMap.touchMode=function(t,e,s,i){s!=i&&(t._updateTouchBehavior(),!0===i?(t.showButtons=!1,t.refresh()):!1===i&&(t.showButtons=!0,t.refresh()))},this.propertyChangeMap.rtl=function(t,e,s,i){s!=i&&t.refresh()},this.buttonUpCapture=!1,this.buttonDownCapture=!1,this._updateTouchBehavior(),this.setPosition(this.value),this._addHandlers(),this.setTheme()},resize:function(t,e){this.width=t,this.height=e,this._arrange()},_updateTouchBehavior:function(){if(this.isTouchDevice=t.jqx.mobile.isTouchDevice(),1==this.touchMode){if(t.jqx.browser.msie&&t.jqx.browser.version<9)return void this.setTheme();this.isTouchDevice=!0,t.jqx.mobile.setMobileSimulator(this.btnThumb[0]),this._removeHandlers(),this._addHandlers(),this.setTheme()}else 0==this.touchMode&&(this.isTouchDevice=!1)},_addHandlers:function(){var e=this,s=!1;try{("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(s=!0,this._touchSupport=!0)}catch(t){}if((e.isTouchDevice||s)&&(this.addHandler(this.btnThumb,t.jqx.mobile.getTouchEventName("touchend"),function(t){var s=e.vertical?e.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):e.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal"),i=e.toThemeProperty("jqx-fill-state-pressed");return e.btnThumb.removeClass(s),e.btnThumb.removeClass(i),e.disabled||e.handlemouseup(e,t),!1}),this.addHandler(this.btnThumb,t.jqx.mobile.getTouchEventName("touchstart"),function(t){if(!e.disabled){if(1==e.touchMode)t.clientX=t.originalEvent.clientX,t.clientY=t.originalEvent.clientY;else{var s=t;s.originalEvent.touches&&s.originalEvent.touches.length?(t.clientX=s.originalEvent.touches[0].clientX,t.clientY=s.originalEvent.touches[0].clientY):(t.clientX=t.originalEvent.clientX,t.clientY=t.originalEvent.clientY)}e.handlemousedown(t),t.preventDefault&&t.preventDefault()}}),t.jqx.mobile.touchScroll(this.element,e.max,function(t,s,i,r,o){if("visible"==e.host.css("visibility")){if(1==e.touchMode)o.clientX=o.originalEvent.clientX,o.clientY=o.originalEvent.clientY;else{var a=o;a.originalEvent.touches&&a.originalEvent.touches.length?(o.clientX=a.originalEvent.touches[0].clientX,o.clientY=a.originalEvent.touches[0].clientY):(o.clientX=o.originalEvent.clientX,o.clientY=o.originalEvent.clientY)}var n=e.vertical?e.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):e.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");e.btnThumb.addClass(n),e.btnThumb.addClass(e.toThemeProperty("jqx-fill-state-pressed")),e.thumbCapture=!0,e.handlemousemove(o)}},e.element.id,e.host,e.host)),!this.isTouchDevice){try{if((""!=document.referrer||window.frameElement)&&null!=window.top&&window.top!=window.self){var i=null;if(window.parent&&document.referrer&&(i=document.referrer),i&&-1!=i.indexOf(document.location.host)){var r=function(t){e.disabled||e.handlemouseup(e,t)};window.top.document.addEventListener?window.top.document.addEventListener("mouseup",r,!1):window.top.document.attachEvent&&window.top.document.attachEvent("onmouseup",r)}}}catch(t){}this.addHandler(this.btnDown,"click mouseup mousedown",function(t){var s=e.step;switch(Math.abs(e.max-e.min)<=s&&(s=1),e.rtl&&!e.vertical&&(s=-e.step),t.type){case"click":e.buttonDownCapture&&!e.isTouchDevice?e.disabled||e.setPosition(e.value+s):!e.disabled&&e.isTouchDevice&&e.setPosition(e.value+s);break;case"mouseup":if(!e.btnDownInstance.base.disabled&&e.buttonDownCapture)return e.buttonDownCapture=!1,e.btnDown.removeClass(e.toThemeProperty("jqx-scrollbar-button-state-pressed")),e.btnDown.removeClass(e.toThemeProperty("jqx-fill-state-pressed")),e._removeArrowClasses("pressed","down"),e.handlemouseup(e,t),e.setPosition(e.value+s),!1;break;case"mousedown":if(!e.btnDownInstance.base.disabled)return e.buttonDownCapture=!0,e.btnDown.addClass(e.toThemeProperty("jqx-fill-state-pressed")),e.btnDown.addClass(e.toThemeProperty("jqx-scrollbar-button-state-pressed")),e._addArrowClasses("pressed","down"),!1}}),this.addHandler(this.btnUp,"click mouseup mousedown",function(t){var s=e.step;switch(Math.abs(e.max-e.min)<=s&&(s=1),e.rtl&&!e.vertical&&(s=-e.step),t.type){case"click":e.buttonUpCapture&&!e.isTouchDevice?e.disabled||e.setPosition(e.value-s):!e.disabled&&e.isTouchDevice&&e.setPosition(e.value-s);break;case"mouseup":if(!e.btnUpInstance.base.disabled&&e.buttonUpCapture)return e.buttonUpCapture=!1,e.btnUp.removeClass(e.toThemeProperty("jqx-scrollbar-button-state-pressed")),e.btnUp.removeClass(e.toThemeProperty("jqx-fill-state-pressed")),e._removeArrowClasses("pressed","up"),e.handlemouseup(e,t),e.setPosition(e.value-s),!1;break;case"mousedown":if(!e.btnUpInstance.base.disabled)return e.buttonUpCapture=!0,e.btnUp.addClass(e.toThemeProperty("jqx-fill-state-pressed")),e.btnUp.addClass(e.toThemeProperty("jqx-scrollbar-button-state-pressed")),e._addArrowClasses("pressed","up"),!1}})}var o="click";if(this.isTouchDevice&&(o=t.jqx.mobile.getTouchEventName("touchend")),this.addHandler(this.areaUp,o,function(t){if(!e.disabled){var s=e.largestep;return e.rtl&&!e.vertical&&(s=-e.largestep),e.setPosition(e.value-s),!1}}),this.addHandler(this.areaDown,o,function(t){if(!e.disabled){var s=e.largestep;return e.rtl&&!e.vertical&&(s=-e.largestep),e.setPosition(e.value+s),!1}}),this.addHandler(this.areaUp,"mousedown",function(t){if(!e.disabled)return e.areaUpCapture=!0,!1}),this.addHandler(this.areaDown,"mousedown",function(t){if(!e.disabled)return e.areaDownCapture=!0,!1}),this.addHandler(this.btnThumb,"mousedown dragstart",function(t){if("dragstart"===t.type)return!1;e.disabled||e.handlemousedown(t),t.preventDefault&&t.preventDefault()}),this.addHandler(t(document),"mouseup."+this.element.id,function(t){e.disabled||e.handlemouseup(e,t)}),!this.isTouchDevice&&(this.mousemoveFunc=function(t){e.disabled||e.handlemousemove(t)},this.addHandler(t(document),"mousemove."+this.element.id,this.mousemoveFunc),this.addHandler(t(document),"mouseleave."+this.element.id,function(t){e.disabled||e.handlemouseleave(t)}),this.addHandler(t(document),"mouseenter."+this.element.id,function(t){e.disabled||e.handlemouseenter(t)}),!e.disabled)){this.addHandler(this.btnUp,"mouseenter mouseleave",function(t){"mouseenter"===t.type?e.disabled||e.btnUpInstance.base.disabled||1==e.touchMode||(e.btnUp.addClass(e.toThemeProperty("jqx-scrollbar-button-state-hover")),e.btnUp.addClass(e.toThemeProperty("jqx-fill-state-hover")),e._addArrowClasses("hover","up")):e.disabled||e.btnUpInstance.base.disabled||1==e.touchMode||(e.btnUp.removeClass(e.toThemeProperty("jqx-scrollbar-button-state-hover")),e.btnUp.removeClass(e.toThemeProperty("jqx-fill-state-hover")),e._removeArrowClasses("hover","up"))});var a=e.toThemeProperty("jqx-scrollbar-thumb-state-hover");e.vertical||(a=e.toThemeProperty("jqx-scrollbar-thumb-state-hover-horizontal")),this.addHandler(this.btnThumb,"mouseenter mouseleave",function(t){"mouseenter"===t.type?e.disabled||1==e.touchMode||(e.btnThumb.addClass(a),e.btnThumb.addClass(e.toThemeProperty("jqx-fill-state-hover"))):e.disabled||1==e.touchMode||(e.btnThumb.removeClass(a),e.btnThumb.removeClass(e.toThemeProperty("jqx-fill-state-hover")))}),this.addHandler(this.btnDown,"mouseenter mouseleave",function(t){"mouseenter"===t.type?e.disabled||e.btnDownInstance.base.disabled||1==e.touchMode||(e.btnDown.addClass(e.toThemeProperty("jqx-scrollbar-button-state-hover")),e.btnDown.addClass(e.toThemeProperty("jqx-fill-state-hover")),e._addArrowClasses("hover","down")):e.disabled||e.btnDownInstance.base.disabled||1==e.touchMode||(e.btnDown.removeClass(e.toThemeProperty("jqx-scrollbar-button-state-hover")),e.btnDown.removeClass(e.toThemeProperty("jqx-fill-state-hover")),e._removeArrowClasses("hover","down"))})}},destroy:function(){var e=this.btnUp,s=this.btnDown,i=this.btnThumb,r=(this.scrollWrap,this.areaUp),o=this.areaDown;this.arrowUp.remove(),delete this.arrowUp,this.arrowDown.remove(),delete this.arrowDown,o.removeClass(),r.removeClass(),s.removeClass(),e.removeClass(),i.removeClass(),e.jqxRepeatButton("destroy"),s.jqxRepeatButton("destroy"),r.jqxRepeatButton("destroy"),o.jqxRepeatButton("destroy"),i.jqxButton("destroy");var a=t.data(this.element,"jqxScrollBar");this._removeHandlers(),this.btnUp=null,this.btnDown=null,this.scrollWrap=null,this.areaUp=null,this.areaDown=null,this.scrollOuterWrap=null,delete this.mousemoveFunc,delete this.btnDownInstance,delete this.btnUpInstance,delete this.scrollOuterWrap,delete this.scrollWrap,delete this.btnDown,delete this.areaDown,delete this.areaUp,delete this.btnDown,delete this.btnUp,delete this.btnThumb,delete this.propertyChangeMap.value,delete this.propertyChangeMap.min,delete this.propertyChangeMap.max,delete this.propertyChangeMap.touchMode,delete this.propertyChangeMap.disabled,delete this.propertyChangeMap.theme,delete this.propertyChangeMap,a&&delete a.instance,this.host.removeData(),this.host.remove(),delete this.host,delete this.set,delete this.get,delete this.call,delete this.element},_removeHandlers:function(){this.removeHandler(this.btnUp,"mouseenter"),this.removeHandler(this.btnDown,"mouseenter"),this.removeHandler(this.btnThumb,"mouseenter"),this.removeHandler(this.btnUp,"mouseleave"),this.removeHandler(this.btnDown,"mouseleave"),this.removeHandler(this.btnThumb,"mouseleave"),this.removeHandler(this.btnUp,"click"),this.removeHandler(this.btnDown,"click"),this.removeHandler(this.btnDown,"mouseup"),this.removeHandler(this.btnUp,"mouseup"),this.removeHandler(this.btnDown,"mousedown"),this.removeHandler(this.btnUp,"mousedown"),this.removeHandler(this.areaUp,"mousedown"),this.removeHandler(this.areaDown,"mousedown"),this.removeHandler(this.areaUp,"click"),this.removeHandler(this.areaDown,"click"),this.removeHandler(this.btnThumb,"mousedown"),this.removeHandler(this.btnThumb,"dragstart"),this.removeHandler(t(document),"mouseup."+this.element.id),this.mousemoveFunc?this.removeHandler(t(document),"mousemove."+this.element.id,this.mousemoveFunc):this.removeHandler(t(document),"mousemove."+this.element.id),this.removeHandler(t(document),"mouseleave."+this.element.id),this.removeHandler(t(document),"mouseenter."+this.element.id)},_addArrowClasses:function(t,e){"pressed"==t&&(t="selected"),""!=t&&(t="-"+t),this.vertical?("up"!=e&&void 0!=e||this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-up"+t)),"down"!=e&&void 0!=e||this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-down"+t))):("up"!=e&&void 0!=e||this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-left"+t)),"down"!=e&&void 0!=e||this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-right"+t)))},_removeArrowClasses:function(t,e){"pressed"==t&&(t="selected"),""!=t&&(t="-"+t),this.vertical?("up"!=e&&void 0!=e||this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-up"+t)),"down"!=e&&void 0!=e||this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-down"+t))):("up"!=e&&void 0!=e||this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-left"+t)),"down"!=e&&void 0!=e||this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-right"+t)))},setTheme:function(){var e=this.btnUp,s=this.btnDown,i=this.btnThumb,r=this.scrollWrap,o=(this.areaUp,this.areaDown,this.arrowUp),a=this.arrowDown;this.scrollWrap[0].className=this.toThemeProperty("jqx-reset"),this.scrollOuterWrap[0].className=this.toThemeProperty("jqx-reset");var n=this.toThemeProperty("jqx-reset");this.areaDown[0].className=n,this.areaUp[0].className=n;var h=this.toThemeProperty("jqx-scrollbar")+" "+this.toThemeProperty("jqx-widget")+" "+this.toThemeProperty("jqx-widget-content");this.host.addClass(h),this.isTouchDevice&&this.host.addClass(this.toThemeProperty("jqx-scrollbar-mobile")),s[0].className=this.toThemeProperty("jqx-scrollbar-button-state-normal"),e[0].className=this.toThemeProperty("jqx-scrollbar-button-state-normal");var l="";if(this.vertical?(o[0].className=n+" "+this.toThemeProperty("jqx-icon-arrow-up"),a[0].className=n+" "+this.toThemeProperty("jqx-icon-arrow-down"),l=this.toThemeProperty("jqx-scrollbar-thumb-state-normal")):(o[0].className=n+" "+this.toThemeProperty("jqx-icon-arrow-left"),a[0].className=n+" "+this.toThemeProperty("jqx-icon-arrow-right"),l=this.toThemeProperty("jqx-scrollbar-thumb-state-normal-horizontal")),l+=" "+this.toThemeProperty("jqx-fill-state-normal"),i[0].className=l,this.disabled?(r.addClass(this.toThemeProperty("jqx-fill-state-disabled")),r.removeClass(this.toThemeProperty("jqx-scrollbar-state-normal"))):(r.addClass(this.toThemeProperty("jqx-scrollbar-state-normal")),r.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))),"all"==this.roundedCorners)if(this.host.addClass(this.toThemeProperty("jqx-rc-all")),this.vertical){var d=t.jqx.cssroundedcorners("top");d=this.toThemeProperty(d),e.addClass(d);var u=t.jqx.cssroundedcorners("bottom");u=this.toThemeProperty(u),s.addClass(u)}else{var p=t.jqx.cssroundedcorners("left");p=this.toThemeProperty(p),e.addClass(p);var m=t.jqx.cssroundedcorners("right");m=this.toThemeProperty(m),s.addClass(m)}else{c=t.jqx.cssroundedcorners(this.roundedCorners);c=this.toThemeProperty(c),elBtnUp.addClass(c),elBtnDown.addClass(c)}var c=t.jqx.cssroundedcorners(this.roundedCorners);c=this.toThemeProperty(c),i.hasClass(c)||i.addClass(c),"none"===e.css("display")&&(this.showButtons=!1,this.touchModeStyle=!0,i.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-normal-touch"))),this.isTouchDevice&&0!=this.touchModeStyle&&(this.showButtons=!1,i.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-normal-touch")))},isScrolling:function(){return void 0!=this.thumbCapture&&void 0!=this.buttonDownCapture&&void 0!=this.buttonUpCapture&&void 0!=this.areaDownCapture&&void 0!=this.areaUpCapture&&(this.thumbCapture||this.buttonDownCapture||this.buttonUpCapture||this.areaDownCapture||this.areaUpCapture)},track:function(){var t,e,s,i;e=(t=Date.now())-this.timestamp,this.timestamp=t,s=this.offset-this.frame,this.frame=this.offset,i=1e3*s/(1+e),this.velocity=.2*i+.2*this.velocity},handlemousedown:function(e){if(void 0==this.thumbCapture||0==this.thumbCapture){this.thumbCapture=!0;var s=this.btnThumb;null!=s&&(s.addClass(this.toThemeProperty("jqx-fill-state-pressed")),this.vertical?s.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed")):s.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal")))}var i=this;this.thumbCapture&&t.jqx.scrollAnimation&&(i.reference=parseInt(i.btnThumb[0].style.top),i.offset=parseInt(i.btnThumb[0].style.top),i.vertical||(i.reference=parseInt(i.btnThumb[0].style.left),i.offset=parseInt(i.btnThumb[0].style.left)),i.velocity=i.amplitude=0,i.frame=i.offset,i.timestamp=Date.now(),clearInterval(i.ticker),i.ticker=setInterval(function(){i.track()},100)),this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.dragStartValue=this.value},toggleHover:function(t,e){},refresh:function(){this._arrange()},_setElementPosition:function(t,e,s){isNaN(e)||parseInt(t[0].style.left)!=parseInt(e)&&(t[0].style.left=e+"px"),isNaN(s)||parseInt(t[0].style.top)!=parseInt(s)&&(t[0].style.top=s+"px")},_setElementTopPosition:function(t,e){isNaN(e)||(t[0].style.top=e+"px")},_setElementLeftPosition:function(t,e){isNaN(e)||(t[0].style.left=e+"px")},handlemouseleave:function(t){var e=this.btnUp,s=this.btnDown;if((this.buttonDownCapture||this.buttonUpCapture)&&(e.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed")),s.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed")),this._removeArrowClasses("pressed")),1==this.thumbCapture){var i=this.btnThumb,r=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");i.removeClass(r),i.removeClass(this.toThemeProperty("jqx-fill-state-pressed"))}},handlemouseenter:function(t){var e=this.btnUp,s=this.btnDown;if(this.buttonUpCapture&&(e.addClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed")),e.addClass(this.toThemeProperty("jqx-fill-state-pressed")),this._addArrowClasses("pressed","up")),this.buttonDownCapture&&(s.addClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed")),s.addClass(this.toThemeProperty("jqx-fill-state-pressed")),this._addArrowClasses("pressed","down")),1==this.thumbCapture){var i=this.btnThumb;this.vertical?i.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed")):i.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal")),i.addClass(this.toThemeProperty("jqx-fill-state-pressed"))}},handlemousemove:function(t){var e=this.btnUp,s=this.btnDown;if(null!=s&&null!=e){if(null!=e&&null!=s&&void 0!=this.buttonDownCapture&&void 0!=this.buttonUpCapture&&(this.buttonDownCapture&&0==t.which?(s.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed")),s.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),this._removeArrowClasses("pressed","down"),this.buttonDownCapture=!1):this.buttonUpCapture&&0==t.which&&(e.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed")),e.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),this._removeArrowClasses("pressed","up"),this.buttonUpCapture=!1)),1!=this.thumbCapture)return!1;var i=this.btnThumb;if(0==t.which&&!this.isTouchDevice&&!this._touchSupport){this.thumbCapture=!1,this._arrange();var r=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");return i.removeClass(r),i.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),!0}void 0!=t.preventDefault&&t.preventDefault(),null!=t.originalEvent&&(t.originalEvent.mouseHandled=!0),void 0!=t.stopPropagation&&t.stopPropagation();var o=0;try{o=this.vertical?t.clientY-this.dragStartY:t.clientX-this.dragStartX;var a=this._btnAndThumbSize;this._btnAndThumbSize||(a=this.vertical?e.height()+s.height()+i.height():e.width()+s.width()+i.width());var n=(this.max-this.min)/(this.scrollBarSize-a);if("auto"!=this.thumbStep){if(o*=n,Math.abs(this.dragStartValue+o-this.value)>=parseInt(this.thumbStep)){h=Math.round(parseInt(o)/this.thumbStep)*this.thumbStep;return this.rtl&&!this.vertical?this.setPosition(this.dragStartValue-h):this.setPosition(this.dragStartValue+h),!1}return!1}var h=o*=n;this.rtl&&!this.vertical&&(h=-o),this.setPosition(this.dragStartValue+h),this.offset=parseInt(i[0].style.left),this.vertical&&(this.offset=parseInt(i[0].style.top))}catch(t){alert(t)}return!1}},handlemouseup:function(e,s){function i(){var t,e;if(n.amplitude)if(t=Date.now()-n.timestamp,(e=-n.amplitude*Math.exp(-t/325))>.5||e<-.5){o=r=(s=(n.max-n.min)/(n.scrollBarSize-n._btnAndThumbSize))*(n.target+e);n.rtl&&!n.vertical&&(o=-r),n.setPosition(n.dragStartValue+o),requestAnimationFrame(i)}else{var s=(n.max-n.min)/(n.scrollBarSize-n._btnAndThumbSize),r=s*(n.target+e),o=r;n.rtl&&!n.vertical&&(o=-r),n.setPosition(n.dragStartValue+o)}}var r=!1;if(this.thumbCapture){this.thumbCapture=!1;var o=this.btnThumb,a=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");if(o.removeClass(a),o.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),r=!0,this._mouseup=new Date,t.jqx.scrollAnimation){var n=this;clearInterval(this.ticker),(this.velocity>25||this.velocity<-25)&&(this.amplitude=.8*this.velocity,this.target=Math.round(this.offset+this.amplitude),this.vertical,this.target-=this.reference,this.timestamp=Date.now(),requestAnimationFrame(i))}}if(this.areaDownCapture=this.areaUpCapture=!1,this.buttonUpCapture||this.buttonDownCapture){var h=this.btnUp,l=this.btnDown;this.buttonUpCapture=!1,this.buttonDownCapture=!1,h.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed")),l.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed")),h.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),l.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),this._removeArrowClasses("pressed"),r=!0,this._mouseup=new Date}r&&(void 0!=s.preventDefault&&s.preventDefault(),null!=s.originalEvent&&(s.originalEvent.mouseHandled=!0),void 0!=s.stopPropagation&&s.stopPropagation())},setPosition:function(e,s){this.element;if(void 0!=e&&NaN!=e||(e=this.min),e>=this.max&&(e=this.max),e<this.min&&(e=this.min),this.value!==e||1==s){if(e==this.max){var i=new t.Event("complete");this.host.trigger(i)}var r=this.value;if(this._triggervaluechanged){var o=new t.Event("valueChanged");o.previousValue=this.value,o.currentValue=e}this.value=e,this._positionelements(),this._triggervaluechanged&&this.host.trigger(o),this.valueChanged&&this.valueChanged({currentValue:this.value,previousvalue:r})}return e},val:function(t){return function(e){for(var s in e)if(e.hasOwnProperty(s))return!1;return"number"!=typeof t&&"date"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t}(t)||0==arguments.length?this.value:(this.setPosition(t),t)},_getThumbSize:function(t){var e=this.max-this.min,s=0;return e>1?s=t/(e+t)*t:1==e?s=t-1:0==e&&(s=t),this.thumbSize>0&&(s=this.thumbSize),s<this.thumbMinSize&&(s=this.thumbMinSize),Math.min(s,t)},_positionelements:function(){this.element;var t=this.areaUp,e=this.areaDown,s=(this.btnUp,this.btnDown,this.btnThumb),i=(this.scrollWrap,this._height?this._height:this.host.height()),r=this._width?this._width:this.host.width(),o=this.vertical?r:i;this.showButtons||(o=0);var a=this.vertical?i:r;this.scrollBarSize=a;var n=this._getThumbSize(a-2*o);(n=Math.floor(n))<this.thumbMinSize&&(n=this.thumbMinSize),(NaN==i||i<10)&&(i=10),(NaN==r||r<10)&&(r=10),o+=2,this.btnSize=o;h=this._btnAndThumbSize;if(!this._btnAndThumbSize){var h=this.vertical?2*this.btnSize+s.outerHeight():2*this.btnSize+s.outerWidth();h=Math.round(h)}var l=(a-h)/(this.max-this.min)*(this.value-this.min);if(this.rtl&&!this.vertical&&(l=(a-h)/(this.max-this.min)*(this.max-this.value-this.min)),(l=Math.round(l))<0&&(l=0),this.vertical){var d=a-l-h;d<0&&(d=0),e[0].style.height=d+"px",t[0].style.height=l+"px",this._setElementTopPosition(t,o),this._setElementTopPosition(s,o+l),this._setElementTopPosition(e,o+l+n)}else t[0].style.width=l+"px",e[0].style.width=a-l-h>=0?a-l-h+"px":"0px",this._setElementLeftPosition(t,o),this._setElementLeftPosition(s,o+l),this._setElementLeftPosition(e,2+o+l+n)},_arrange:function(){var t=this;if(t._initialLayout)t._initialLayout=!1;else{if(t.min>t.max){var e=t.min;t.min=t.max,t.max=e}if(t.min<0){var s=t.max-t.min;t.min=0,t.max=s}t.element;var i=t.areaUp,r=t.areaDown,o=t.btnUp,a=t.btnDown,n=t.btnThumb,h=t.scrollWrap,l=parseInt(t.element.style.height),d=parseInt(t.element.style.width);if(t.isPercentage)var l=t.host.height(),d=t.host.width();isNaN(l)&&(l=0),isNaN(d)&&(d=0),t._width=d,t._height=l;var u=t.vertical?d:l;t.showButtons||(u=0),o[0].style.width=u+"px",o[0].style.height=u+"px",a[0].style.width=u+"px",a[0].style.height=u+"px",t.vertical?h[0].style.width=d+2+"px":h[0].style.height=l+2+"px",t._setElementPosition(o,0,0);var p=u+2;t.vertical?t._setElementPosition(a,0,l-p):t._setElementPosition(a,d-p,0);var m=t.vertical?l:d;t.scrollBarSize=m;var c=t._getThumbSize(m-2*p);(c=Math.floor(c-2))<t.thumbMinSize&&(c=t.thumbMinSize);var b=!1;t.isTouchDevice&&0!=t.touchModeStyle&&(b=!0),t.vertical?(n[0].style.width=d+"px",n[0].style.height=c+"px",b&&0!==t.thumbTouchSize&&(n.css({width:t.thumbTouchSize+"px"}),n.css("margin-left",(t.host.width()-t.thumbTouchSize)/2))):(n[0].style.width=c+"px",n[0].style.height=l+"px",b&&0!==t.thumbTouchSize&&(n.css({height:t.thumbTouchSize+"px"}),n.css("margin-top",(t.host.height()-t.thumbTouchSize)/2))),(NaN==l||l<10)&&(l=10),(NaN==d||d<10)&&(d=10),t.btnSize=u;var v=t.vertical?2*p+(2+parseInt(n[0].style.height)):2*p+(2+parseInt(n[0].style.width));v=Math.round(v),t._btnAndThumbSize=v;var w=(m-v)/(t.max-t.min)*(t.value-t.min);if(t.rtl&&!t.vertical&&(w=(m-v)/(t.max-t.min)*(t.max-t.value-t.min)),w=Math.round(w),(isNaN(w)||w<0||w===-1/0||w===1/0)&&(w=0),t.vertical){var x=m-w-v;x<0&&(x=0),r[0].style.height=x+"px",r[0].style.width=d+"px",i[0].style.height=w+"px",i[0].style.width=d+"px";var f=parseInt(t.element.style.height);t.isPercentage&&(f=t.host.height()),n[0].style.visibility="inherit",(f-3*parseInt(u)<0||f<v)&&(n[0].style.visibility="hidden"),t._setElementPosition(i,0,p),t._setElementPosition(n,0,p+w),t._setElementPosition(r,0,p+w+c)}else{w>0&&(i[0].style.width=w+"px"),l>0&&(i[0].style.height=l+"px");var y=m-w-v;y<0&&(y=0),r[0].style.width=y+"px",r[0].style.height=l+"px";var g=parseInt(t.element.style.width);t.isPercentage&&(g=t.host.width()),n[0].style.visibility="inherit",(g-3*parseInt(u)<0||g<v)&&(n[0].style.visibility="hidden"),t._setElementPosition(i,p,0),t._setElementPosition(n,p+w,0),t._setElementPosition(r,p+w+c,0)}}}})}(jqxBaseFramework);

