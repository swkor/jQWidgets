/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){t.extend(t.jqx._jqxChart.prototype,{_moduleAnnotations:!0,_renderAnnotation:function(t,e,i){var a=this.seriesGroups[t],s=this.renderer;if(!isNaN(t)){var o=this._get([this.getXAxisDataPointOffset(e.xValue,t),e.x]),n=this._get([this.getValueAxisDataPointOffset(e.yValue,t),e.y]),r=this._get([this.getXAxisDataPointOffset(e.xValue2,t),e.x2]),f=this._get([this.getValueAxisDataPointOffset(e.yValue2,t),e.y2]);if(a.polar||a.spider){var l=this.getPolarDataPointOffset(e.xValue,e.yValue,t);!l||isNaN(l.x)||isNaN(l.y)?(o=e.x,n=e.y):(o=l.x,n=l.y)}if(isNaN(n)||isNaN(o))return!1;if("horizontal"==a.orientation){var h=o;o=n,n=h,h=r,r=f,f=h}e.offset&&(isNaN(e.offset.x)||(o+=e.offset.x,r+=e.offset.x),isNaN(e.offset.y)||(n+=e.offset.y,f+=e.offset.y));var c,x=this._get([e.width,r-o]),y=this._get([e.height,f-n]);switch(e.type){case"rect":c=s.rect(o,n,x,y);break;case"circle":c=s.rect(o,n,e.radius);break;case"line":c=s.rect(o,n,r,f);break;case"path":c=s.path(e.path)}s.attr(c,{fill:e.fillColor,stroke:e.lineColor,opacity:this._get([e.fillOpacity,e.opacity]),"stroke-opacity":this._get([e.lineOpacity,e.opacity]),"stroke-width":e.lineWidth,"stroke-dasharray":e.dashStyle||"none"});var N;if(e.text){var d=e.text,u=0,g=0;d.offset&&(isNaN(d.offset.x)||(u+=d.offset.x),isNaN(d.offset.y)||(g+=d.offset.y)),N=s.text(d.value,o+u,n+g,NaN,NaN,d.angle,{},!0===d.clip,d.horizontalAlignment||"center",d.verticalAlignment||"center",d.rotationPoint||"centermiddle"),s.attr(N,{fill:d.fillColor,stroke:d.lineColor,class:d.class})}for(var v=["click","mouseenter","mouseleave"],_=this,p=0;p<v.length;p++){var A=this._getEvent(v[p])||v[p];c&&this.renderer.addHandler(c,A,function(){_._raiseAnnotationEvent(e,A)}),N&&this.renderer.addHandler(N,A,function(){_._raiseAnnotationEvent(e,A)})}}},_raiseAnnotationEvent:function(t,e){this._raiseEvent("annotation_"+e,{annotation:t})}})}(jqxBaseFramework);

