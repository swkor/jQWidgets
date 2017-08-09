/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){e.extend(e.jqx._jqxChart.prototype,{_moduleRangeSelector:!0,_renderXAxisRangeSelector:function(t,s){var i=this;i._isTouchDevice=e.jqx.mobile.isTouchDevice();var r=i.seriesGroups[t],o=i._getXAxis(t),a=o?o.rangeSelector:void 0;if(i._isSelectorRefresh||(a&&a.renderTo?a.renderTo:i.host).find(".rangeSelector").remove(),!o||0==o.visible||"spider"==r.type)return!1;if(!i._isGroupVisible(t))return!1;if(!a)return!1;var n="horizontal"==r.orientation;a.renderTo&&(n=!1),i.rtl&&(o.flip=!0);var d=n?this.host.height():this.host.width();d-=4;var l=this._getXAxisStats(t,o,d),h=o.position;if(a.renderTo&&a.position&&(h=a.position),!this._isSelectorRefresh){var c=a.renderTo,g=e("<div class='rangeSelector jqx-disableselect' style='position: absolute; background-color: transparent;' onselectstart='return false;'></div>").appendTo(c||this.renderer.getContainer());if(c)g.css({width:c.width(),height:c.height()}),s.width=c.width(),s.height=c.height();else{var p=this.host.coord();p.top=0,p.left=0,selectorSize=this._selectorGetSize(o),n?(g.css("left",p.left+1+s.x+("right"!=h?-selectorSize:s.width)),g.css("top",p.top),g.css("height",d),g.css("width",selectorSize),s.height=selectorSize):(g.css("left",p.left+1),g.css("top",p.top+s.y+("top"!=h?s.height:-selectorSize)),g.css("height",selectorSize),g.css("width",d))}this._refreshSelector(t,o,l,g,s,n)}return this._isSelectorRefresh=!1,!0},_refreshSelector:function(t,s,i,r,o,a){var n={},d=s.rangeSelector;this.seriesGroups[t];for(var l in d)n[l]=d[l];delete n.padding;var h=n.minValue,c=n.maxValue;void 0==h&&(h=Math.min(i.min.valueOf(),i.dsRange.min.valueOf())),void 0==c&&(c=Math.max(i.max.valueOf(),i.dsRange.max.valueOf())),this._isDate(i.min)&&(h=new Date(h)),this._isDate(i.max)&&(c=new Date(c));var g=s.position;d.renderTo&&d.position&&(g=d.position),n.dataField=s.dataField,delete n.rangeSelector,n.type=s.type,n.baseUnit=d.baseUnit||s.baseUnit,n.minValue=h,n.maxValue=c,n.flip=s.flip,n.position=g;var p=2,u=2,f=2,_=2;d.renderTo||(p=a?0:o.x,u=a?0:this._rect.width-o.x-o.width,f=a?o.y:5,_=a?this._paddedRect.height-this._plotRect.height:5);var v=d.padding;v=void 0!=v||d.renderTo?{left:v&&v.left?v.left:p,top:v&&v.top?v.top:f,right:v&&v.right?v.right:u,bottom:v&&v.bottom?v.bottom:_}:{left:p,top:f,right:u,bottom:_};for(var m=s.rangeSelector.dataField,l=0;void 0==m&&l<this.seriesGroups.length;l++)for(var x=0;void 0==m&&x<this.seriesGroups[l].series.length;x++)m=this.seriesGroups[l].series[x].dataField;var S={padding:v,_isRangeSelectorInstance:!0,title:d.title||"",description:d.description||"",titlePadding:d.titlePadding,colorScheme:d.colorScheme||this.colorScheme,backgroundColor:d.backgroundColor||this.backgroundColor||"transparent",backgroundImage:d.backgroundImage||"",showBorderLine:d.showBorderLine||!!d.renderTo,borderLineWidth:d.borderLineWidth||this.borderLineWidth,borderLineColor:d.borderLineColor||this.borderLineColor,rtl:d.rtl||this.rtl,greyScale:d.greyScale||this.greyScale,renderEngine:this.renderEngine,showLegend:!1,enableAnimations:!1,enableEvents:!1,showToolTips:!1,source:this.source,xAxis:n,seriesGroups:[{orientation:a?"horizontal":"vertical",valueAxis:{visible:!1},type:s.rangeSelector.serieType||"area",skipOverlappingPoints:e.jqx.getByPriority([s.rangeSelector.skipOverlappingPoints,!0]),columnSeriesOverlap:e.jqx.getByPriority([s.rangeSelector.columnSeriesOverlap,!1]),columnsGapPercent:e.jqx.getByPriority([s.rangeSelector.columnsGapPercent,25]),seriesGapPercent:e.jqx.getByPriority([s.rangeSelector.seriesGapPercent,25]),series:[{dataField:m,opacity:.8,lineWidth:1}]}]};s.rangeSelector.seriesGroups&&(S.seriesGroups=s.rangeSelector.seriesGroups),s.rangeSelector.valueAxis&&(S.valueAxis=s.rangeSelector.valueAxis),S.showBorderLine||(S.borderLineWidth=1,S.borderLineColor=e.jqx.getByPriority([this.backgroundColor,this.background,"#FFFFFF"]),S.showBorderLine=!0);var w=this;w._supressBindingRefresh=!0,r.empty(),r.jqxChart(S),w._rangeSelectorInstances[t]=r,w._supressBindingRefresh=!1,r.on(w._getEvent("mousemove"),function(){w._unselect(),w._hideToolTip()});var y=r.jqxChart("getInstance");if(y._plotRect){var b=y._paddedRect;if(b.height=y._plotRect.height,a||"top"!=g){if(a){var T=y._renderData[0].xAxis.rect.width;b.width-=T,"right"!=g&&(b.x+=T)}}else b.y+=y._renderData[0].xAxis.rect.height;w._createSliderElements(t,r,b,d),w.removeHandler(e(document),w._getEvent("mousemove")+"."+this.element.id,w._onSliderMouseMove),w.removeHandler(e(document),w._getEvent("mousedown"),w._onSliderMouseDown),w.removeHandler(e(document),w._getEvent("mouseup")+"."+this.element.id,w._onSliderMouseUp),w.addHandler(e(document),w._getEvent("mousemove")+"."+this.element.id,w._onSliderMouseMove,{self:this,groupIndex:t,renderTo:r,swapXY:a}),w.addHandler(e(r),w._getEvent("mousedown"),this._onSliderMouseDown,{self:this,groupIndex:t,renderTo:r,swapXY:a}),w.addHandler(e(document),w._getEvent("mouseup")+"."+this.element.id,w._onSliderMouseUp,{element:this.element.id,self:this,groupIndex:t,renderTo:r,swapXY:a})}},_createSliderElements:function(t,s,i,r){s.find(".slider").remove();var o=r.selectedRangeColor||"blue",a=e.jqx.getByPriority([r.selectedRangeOpacity,.1]),n=e.jqx.getByPriority([r.unselectedRangeOpacity,.5]),d=r.unselectedRangeColor||"white",l=r.rangeLineColor||"grey",h=e("<div class='slider' style='position: absolute;'></div>");for(h.css({background:o,opacity:a,left:i.x,top:i.y,width:i.width,height:i.height}),h.appendTo(s);this._sliders.length<t+1;)this._sliders.push({});var c="<div class='slider' style='position: absolute;  background: "+d+"; opacity: "+n+";'></div>",g="<div class='slider' style='position: absolute; background:"+l+"; opacity: "+n+";'></div>",p="<div class='slider jqx-rc-all' style='position: absolute; background: white; border-style: solid; border-width: 1px; border-color: "+l+";'></div>";this._sliders[t]={element:h,host:s,_sliderInitialAbsoluteRect:{x:h.coord().left,y:h.coord().top,width:i.width,height:i.height},_hostInitialAbsolutePos:{x:s.coord().left,y:s.coord().top},getRect:function(){return{x:this.host.coord().left-this._hostInitialAbsolutePos.x+this._sliderInitialAbsoluteRect.x,y:this.host.coord().top-this._hostInitialAbsolutePos.y+this._sliderInitialAbsoluteRect.y,width:this._sliderInitialAbsoluteRect.width,height:this._sliderInitialAbsoluteRect.height}},rect:i,left:e(c),right:e(c),leftTop:e(g),rightTop:e(g),leftBorder:e(g),leftBar:e(p),rightBorder:e(g),rightBar:e(p)},this._sliders[t].left.appendTo(s),this._sliders[t].right.appendTo(s),this._sliders[t].leftTop.appendTo(s),this._sliders[t].rightTop.appendTo(s),this._sliders[t].leftBorder.appendTo(s),this._sliders[t].rightBorder.appendTo(s),this._sliders[t].leftBar.appendTo(s),this._sliders[t].rightBar.appendTo(s);var u=this._renderData[t].xAxis.data.axisStats,f=u.min.valueOf(),_=u.max.valueOf(),v=this._valueToOffset(t,f),m=this._valueToOffset(t,_);if(v>m){var x=m;m=v,v=x}"horizontal"!=this.seriesGroups[t].orientation?h.css({left:Math.round(i.x+v),top:i.y,width:Math.round(m-v),height:i.height}):h.css({top:Math.round(i.y+v),left:i.x,height:Math.round(m-v),width:i.width}),this._setSliderPositions(t,v,m)},_setSliderPositions:function(e,t,s){var i=this.seriesGroups[e],r=this._getXAxis(e),o=r.rangeSelector,a="horizontal"==i.orientation;r.rangeSelector.renderTo&&(a=!1);var n=r.position;o.renderTo&&o.position&&(n=o.position);var d=this._sliders[e],l=a?"top":"left",h=a?"left":"top",c=a?"height":"width",g=a?"width":"height",p=a?"y":"x",u=a?"x":"y",f=d.rect;d.startOffset=t,d.endOffset=s,d.left.css(l,f[p]),d.left.css(h,f[u]),d.left.css(c,t),d.left.css(g,f[g]),d.right.css(l,f[p]+s),d.right.css(h,f[u]),d.right.css(c,f[c]-s+1),d.right.css(g,f[g]),d.leftTop.css(l,f[p]),d.leftTop.css(h,f[u]+(a&&"right"==n||!a&&"top"!=n?0:f[g])),d.leftTop.css(c,t),d.leftTop.css(g,1),d.rightTop.css(l,f[p]+s),d.rightTop.css(h,f[u]+(a&&"right"==n||!a&&"top"!=n?0:f[g])),d.rightTop.css(c,f[c]-s+1),d.rightTop.css(g,1),d.leftBorder.css(l,f[p]+t),d.leftBorder.css(h,f[u]),d.leftBorder.css(c,1),d.leftBorder.css(g,f[g]);var _=f[g]/4;_>20&&(_=20),_<3&&(_=3),d.leftBar.css(l,f[p]+t-3),d.leftBar.css(h,f[u]+f[g]/2-_/2),d.leftBar.css(c,5),d.leftBar.css(g,_),d.rightBorder.css(l,f[p]+s),d.rightBorder.css(h,f[u]),d.rightBorder.css(c,1),d.rightBorder.css(g,f[g]),d.rightBar.css(l,f[p]+s-3),d.rightBar.css(h,f[u]+f[g]/2-_/2),d.rightBar.css(c,5),d.rightBar.css(g,_)},_resizeState:{},_onSliderMouseDown:function(t){t.stopImmediatePropagation(),t.stopPropagation();var s=t.data.self;s._sliders[t.data.groupIndex]&&(void 0==s._resizeState.state&&s._testAndSetReadyResize(t),"ready"==s._resizeState.state&&(e.jqx._rangeSelectorTarget=s,s._resizeState.state="resizing"))},_valueToOffset:function(e,t){var s=this.seriesGroups[e],i=this._sliders[e],r=i.host.jqxChart("getInstance")._renderData[0].xAxis.data.axisStats,o=r.min.valueOf(),a=r.max.valueOf()-o;0==a&&(a=1);var n=this._getXAxis(e),d="horizontal"==s.orientation?"height":"width",l=(t.valueOf()-o)/a;return i.getRect()[d]*(n.flip?1-l:l)},_offsetToValue:function(e,t){var s=this._sliders[e],i=this.seriesGroups[e],r=this._getXAxis(e),o="horizontal"==i.orientation?"height":"width",a=s.getRect()[o];0==a&&(a=1);var n=s.host.jqxChart("getInstance")._renderData[0].xAxis.data.axisStats,d=n.min.valueOf(),l=n.max.valueOf(),h=t/a*(l-d)+d;return 1==r.flip&&(h=l-t/a*(l-d)),this._isDate(n.min)||this._isDate(n.max)?h=new Date(h):((void 0==r.dataField||n.useIndeces)&&(h=Math.round(h)),h<n.min&&(h=n.min),h>n.max&&(h=n.max)),h},_onSliderMouseUp:function(t){var s=e.jqx._rangeSelectorTarget;if(s){var i=t.data.groupIndex,r=t.data.swapXY,o=s._sliders[i];if(o&&"resizing"==s._resizeState.state){t.stopImmediatePropagation(),t.stopPropagation(),s._resizeState={},s.host.css("cursor","default");var a=r?"top":"left",n=r?"y":"x",d=o.element.coord()[a],l=d+(r?o.element.height():o.element.width()),h=o.getRect(),c=s._offsetToValue(i,d-h[n]),g=s._offsetToValue(i,l-h[n]);!o.host.jqxChart("getInstance")._renderData[0].xAxis.data.axisStats.isTimeUnit&&g.valueOf()-c.valueOf()>864e5&&(c.setHours(0,0,0,0),g.setDate(g.getDate()+1),g.setHours(0,0,0,0));var p=s._getXAxis(i);if(p.flip){var u=c;c=g,g=u}for(var f=0;f<s.seriesGroups.length;f++)s._getXAxis(f)==p&&(s._selectorRange[f]={min:c,max:g});s._isSelectorRefresh=!0;var _=s.enableAnimations;s._raiseEvent("rangeSelectionChanging",{instance:s,minValue:c,maxValue:g}),s.enableAnimations=!1,s.update(),s.enableAnimations=_,s._raiseEvent("rangeSelectionChanged",{instance:s,minValue:c,maxValue:g})}}},_onSliderMouseMove:function(t){var s=t.data.self,i=(t.data.renderTo,t.data.groupIndex),r=s._sliders[i],o=t.data.swapXY;if(r){var a=r.getRect(),n=r.element,d=e.jqx.position(t),l=n.coord(),h=o?"top":"left",c=o?"height":"width",g=o?"y":"x";if("resizing"==s._resizeState.state){if(t.stopImmediatePropagation(),t.stopPropagation(),"left"==s._resizeState.side){var p=Math.round(d[h]-l[h]),u=a[g];if(l[h]+p>=u&&l[h]+p<=u+a[c]){var f=parseInt(n.css(h)),_=Math.max(2,(o?n.height():n.width())-p);n.css(c,_),n.css(h,f+p)}}else if("right"==s._resizeState.side){var v=o?n.height():n.width(),p=Math.round(d[h]-l[h]-v),u=a[g];if(l[h]+v+p>=u&&l[h]+p+v<=u+a[c]){_=Math.max(2,v+p);n.css(c,_)}}else if("move"==s._resizeState.side){var v=o?n.height():n.width(),f=parseInt(n.css(h)),p=Math.round(d[h]-s._resizeState.startPos);l[h]+p>=a[g]&&l[h]+p+v<=a[g]+a[c]&&(s._resizeState.startPos=d[h],n.css(h,f+p))}var m=parseInt(n.css(h))-r.rect[g],x=m+(o?n.height():n.width());s._setSliderPositions(i,m,x)}else s._testAndSetReadyResize(t)}},_testAndSetReadyResize:function(t){var s=t.data.self,i=t.data.renderTo,r=t.data.groupIndex,o=s._sliders[r],a=t.data.swapXY,n=o.getRect(),d=o.element,l=e.jqx.position(t),h=d.coord(),c=a?"left":"top",g=a?"top":"left",p=a?"width":"height",u=s._isTouchDevice?30:5;l[c]>=h[c]&&l[c]<=h[c]+n[p]?Math.abs(l[g]-h[g])<=u?(i.css("cursor",a?"row-resize":"col-resize"),s._resizeState={state:"ready",side:"left"}):Math.abs(l[g]-h[g]-(a?d.height():d.width()))<=u?(i.css("cursor",a?"row-resize":"col-resize"),s._resizeState={state:"ready",side:"right"}):l[g]+u>h[g]&&l[g]-u<h[g]+(a?d.height():d.width())?(i.css("cursor","pointer"),s._resizeState={state:"ready",side:"move",startPos:l[g]}):(i.css("cursor","default"),s._resizeState={}):(i.css("cursor","default"),s._resizeState={})},_selectorGetSize:function(e){return e.rangeSelector.renderTo?0:e.rangeSelector.size||this._paddedRect.height/3}})}(jqxBaseFramework);

