/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){e.jqx.jqxWidget("jqxTagCloud","",{}),e.extend(e.jqx._jqxTagCloud.prototype,{defineInstance:function(){var r={width:null,height:null,source:null,disabled:!1,rtl:!1,valueMember:"value",displayMember:"label",urlMember:"url",urlBase:"",autoBind:!0,takeTopWeightedItems:!1,displayLimit:null,minValueToDisplay:0,maxValueToDisplay:0,minFontSize:10,maxFontSize:24,fontSizeUnit:"px",displayValue:!1,sortBy:"none",alterTextCase:"none",sortOrder:"ascending",textColor:null,minColor:null,maxColor:null,tagRenderer:null};return this===e.jqx._jqxTagCloud.prototype?r:(e.extend(!0,this,r),r)},createInstance:function(){var e=this;e.render(),e.dataBind(e.source,!0)},dataBind:function(r,t){var a=this;a.records=[];var i;!!r._source?(i=r,r=r._source):(r.datafields=[{name:a.displayMember},{name:a.valueMember},{name:a.urlMember}],i=new e.jqx.dataAdapter(r,{autoBind:!0}));var n=function(e){e._setSourceData(i),e._raiseEvent(1,{records:e.records}),e._renderTags()};switch(void 0!==r.type&&(i._options.type=r.type),void 0!==r.formatdata&&(i._options.formatData=r.formatdata),void 0!==r.contenttype&&(i._options.contentType=r.contenttype),void 0!==r.async&&(i._options.async=r.async),r.datatype){case"local":case"array":default:(null!=r.localdata||e.isArray(r))&&(i.unbindBindingUpdate(a.element.id),(a.autoBind||!a.autoBind&&!t)&&i.dataBind(),n(a),i.bindBindingUpdate(a.element.id,function(e){n(a)}));break;case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":case"csv":case"tab":if(null!=r.localdata)return i.unbindBindingUpdate(a.element.id),(a.autoBind||!a.autoBind&&!t)&&i.dataBind(),n(a),void i.bindBindingUpdate(a.element.id,function(){n(a)});var d={};i._options.data?e.extend(i._options.data,d):(r.data&&e.extend(d,r.data),i._options.data=d);i.unbindDownloadComplete(a.element.id),i.bindDownloadComplete(a.element.id,function(){n(a)}),(a.autoBind||!a.autoBind&&!t)&&i.dataBind()}a._raiseEvent(2,{records:a.records})},destroy:function(){var e=this;e.removeHandler(e._el,"keydown"),e.removeHandler(e._el,"click"),e.host.empty(),e.host.remove()},findTagIndex:function(e){for(var r=this,t=0;t<r.records.length;t++)if(r.records[t][r.displayMember]===e)return r.records[t].index;return-1},getHiddenTagsList:function(){return this.hiddenList.slice()},getRenderedTags:function(){return this.renderedData.slice()},getTagsList:function(){return this.records.slice()},insertAt:function(e,r){var t=this;if(r.index=e,void 0===r[this.displayMember])throw new Error("jqxTagCloud: Insert tag requires a valid displayMember field to be supplied in the parameter");var a=void 0!==r[t.valueMember]?parseFloat(r[t.valueMember]):0;if(r[t.valueMember]=isNaN(a)?0:a,t.source.insertTag&&"function"==typeof t.source.insertTag)t.source.insertTag(e,r,function(a){if(a){t.records.splice(e,0,r);for(var i=e+1;i<t.records.length;i++)t.records[i].index+=1;for(i=0;i<t.hiddenList.length;i++)t.hiddenList[i]>=e&&t.hiddenList[i]++;t._renderTags()}});else{t.records.splice(e,0,r);for(var i=e+1;i<t.records.length;i++)t.records[i].index+=1;for(i=0;i<t.hiddenList.length;i++)t.hiddenList[i]>=e&&t.hiddenList[i]++;t._renderTags()}},updateAt:function(r,t){var a=this;if(void 0===t[this.displayMember])throw new Error("jqxTagCloud: Update tag requires a valid displayMember field to be supplied in the parameter");t.index=r,t.uid=a.records[r].uid,a.source.updateTag&&"function"==typeof a.source.updateTag?a.source.updateTag(r,t,function(i){i&&(e.each(t,function(e,t){a.records[r][e]=t}),a._renderTags())}):(e.each(t,function(e,t){a.records[r][e]=t}),a._renderTags())},removeAt:function(e){var r=this;if(r.source.deleteTag&&"function"==typeof r.source.deleteTag)r.source.deleteTag(e,function(t){if(t){r.records.splice(e,1);for(var a=e;a<r.records.length;a++)r.records[a].index-=1;for(a=0;a<r.hiddenList.length;a++)r.hiddenList[a]>e?r.hiddenList[a]--:r.hiddenList[a]===e&&r.hiddentList.splice(e,1)}});else{r.records.splice(e,1);for(var t=e;t<r.records.length;t++)r.records[t].index-=1;for(t=0;t<r.hiddenList.length;t++)r.hiddenList[t]>e?r.hiddenList[t]--:r.hiddenList[t]===e&&r.hiddentList.splice(e,1)}r._renderTags()},hideItem:function(r){var t=this;if("number"==typeof r&&-1===t.hiddenList.indexOf(r)){t.hiddenList.push(r);for(var a=-1,i=0;i<t.renderedData.length;i++)t.renderedData[i].index===r&&(a=i);-1!==a&&(e(t._el).find("li")[a].style.display="none")}},showItem:function(r){var t=this;if(-1!==t.hiddenList.indexOf(r)){for(var a=-1,i=0;i<t.renderedData.length;i++)t.renderedData[i].index===r&&(a=i);-1!==a&&(e(t._el).find("li")[a].style.display=""),t.hiddenList.splice(t.hiddenList.indexOf(r),1)}},render:function(){var r=this;r._updateSize(),r.renderedData=[],r._el=e("<ul>"),r.host.addClass(r.toThemeProperty("jqx-widget jqx-tag-cloud")),r._setRtl(),r.host.append(r._el),r.focusedItem=null,r.minColor=r._parseColor(r.minColor),r.maxColor=r._parseColor(r.maxColor),r.displayLimit=parseInt(r.displayLimit),r.disabled&&r.host.addClass(r.toThemeProperty("jqx-fill-state-disabled")),r.addHandler(r._el,"click",function(t){e(document.activeElement).parents("#"+r._el[0].parentElement.id).length||(null!=r.focusedItem?e(r.focusedItem).focus():(e(r._el).find("a")[0].focus(),r.focusedItem=document.activeElement)),r.disabled&&t.preventDefault(),"a"===t.target.tagName.toLowerCase()&&(t.target.focus(),r.focusedItem=document.activeElement),"li"===t.target.tagName.toLowerCase()&&(e(t.target).find("a").focus(),r.focusedItem=document.activeElement);var a=e(t.target).closest("li").index();-1!==a&&r._raiseEvent(0,{label:r.renderedData[a][r.displayMember],url:r.renderedData[a][r.urlMember],value:r.renderedData[a][r.valueMember],visibleIndex:a,index:r.renderedData[a].index,target:e(t.target).closest("li")[0],originalEvent:t})}),r._addKeyboardSupport()},resize:function(e,r){var t=this;t.width=e,t.height=r,t._updateSize()},propertyChangedHandler:function(e,r,t,a){var i=this;"source"===r&&i.dataBind(e.source),"displayLimit"===r&&(i[r]=parseInt(a)),"minColor"!==r&&"maxColor"!==r||(i[r]=i._parseColor(a)),"rtl"!==r?"width"!==r&&"height"!==r?"textColor"!==r||i.minColor&&i.maxColor?i._renderTags():i._updateColor():i._updateSize():i._setRtl()},_alterCase:function(e){var r=this;if("none"!==r.alterTextCase)switch(r.alterTextCase){case"allLower":for(var t=0;t<e.length;t++)e[t][r.displayMember]=e[t][r.displayMember].toString().toLowerCase();break;case"allUpper":for(t=0;t<e.length;t++)e[t][r.displayMember]=e[t][r.displayMember].toString().toUpperCase();break;case"firstUpper":for(t=0;t<e.length;t++)e[t][r.displayMember]=e[t][r.displayMember].toString().toLowerCase(),e[t][r.displayMember]=e[t][r.displayMember].substr(0,1).toUpperCase()+e[t][r.displayMember].substr(1);break;case"titleCase":for(t=0;t<e.length;t++)e[t][r.displayMember]=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}(e[t][r.displayMember].toString());break;default:throw new Error("jqxTagCloud: Invalid alterTextCase value. Possible values: 'none', 'allLower', 'allUpper', 'firstUpper', 'titleCase'")}return e},_addKeyboardSupport:function(){var r=this;r.addHandler(r._el,"keydown",function(t){39==t.keyCode&&(e("a:focus").closest("li").next().find("a").focus(),r.focusedItem=document.activeElement),37==t.keyCode&&(e("a:focus").closest("li").prev().find("a").focus(),r.focusedItem=document.activeElement)})},_renderTags:function(){var r=this,t=r.records.slice();if(e.each(r.records,function(e,t){if(void 0===t[r.displayMember])throw new Error("jqxTagCloud: 'label' property must be specified for every element.")}),t=r._filter(t),t=r._sort(t),t=r._alterCase(t),r._el.empty(),0!==t.length){for(var a=r._getMaxValue(t),i=r._getMinValue(t),n=a-i,d=0;d<t.length;d++){var o=r._prepareTag(t[d],i,n);r._el.append(o),-1!=r.hiddenList.indexOf(t[d].index)&&(o[0].style.display="none")}r.renderedData=t,r.focusedItem=null}},_prepareTag:function(r,t,a){var i=this;a||(a=1);var n=e("<li>"),d="";d=null!==i.tagRenderer&&"function"==typeof i.tagRenderer?i.tagRenderer.apply(i,arguments):r[i.displayMember]+(i.displayValue?"("+r[i.valueMember]+")":""),d=e('<a rel="tag">').append(d);var o="javascript:void(0)";void 0!==r[i.urlMember]&&(o=(null!=i.urlBase?i.urlBase:"")+r[i.urlMember]),d.attr("href",o),n.append(d),n.addClass(i.toThemeProperty("jqx-tag-cloud-item"));var s=+i.minFontSize+(i.maxFontSize-i.minFontSize)*((r[i.valueMember]-t)/a);if(n[0].style.fontSize=s+i.fontSizeUnit,i.minColor&&i.maxColor){var l=i.minColor.split("(")[1].split(")")[0];l=l.split(",");var f=parseInt(l[0]),u=parseInt(l[1]),c=parseInt(l[2]),p=parseFloat(l[3]);l=(l=i.maxColor.split("(")[1].split(")")[0]).split(",");var m=parseInt(l[0]),b=parseInt(l[1]),h=parseInt(l[2]),g=parseFloat(l[3]);f+=Math.floor((r[i.valueMember]-t)/a*(m-f)),u+=Math.floor((r[i.valueMember]-t)/a*(b-u)),c+=Math.floor((r[i.valueMember]-t)/a*(h-c)),p+=(r[i.valueMember]-t)/a*(g-p),n[0].style.color="rgba("+f+","+u+","+c+","+p+")",n.find("a")[0].style.color="inherit"}else null!==i.textColor&&(n[0].style.color=i.textColor,n.find("a")[0].style.color="inherit");return n},_parseColor:function(r){var t,a,i;if("rgba"===(r=e("<span>").css("color",r).css("color")).substr(0,4))return r;if("rgb"===r.substr(0,3)){var n=r.split("(")[1].split(")")[0];return n=n.split(","),t=parseInt(n[0]),a=parseInt(n[1]),i=parseInt(n[2]),"rgba("+t+","+a+","+i+",1)"}return"#"===r.substr(0,1)&&7===r.length?(t=parseInt(r.substr(1,2),16),a=parseInt(r.substr(3,2),16),i=parseInt(r.substr(5,2),16),"rgba("+t+","+a+","+i+",1)"):"#"===r.substr(0,1)&&4===r.length?(t=parseInt(r.substr(1,1)+r.substr(1,1),16),a=parseInt(r.substr(2,1)+r.substr(2,1),16),i=parseInt(r.substr(3,1)+r.substr(3,1),16),"rgba("+t+","+a+","+i+",1)"):(r=function(e){var r={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};return void 0!==r[e.toLowerCase()]&&r[e.toLowerCase()]}(r))?(t=parseInt(r.substr(1,2),16),a=parseInt(r.substr(3,2),16),i=parseInt(r.substr(5,2),16),"rgba("+t+","+a+","+i+",1)"):r},_events:["itemClick","bindingUpdateComplete","bindingComplete"],_raiseEvent:function(r,t){var a=this._events[r],i=e.Event(a);return i.args=t,this.host.trigger(i)},_filter:function(e){var r=this;if(0!=r.minValueToDisplay)for(t=0;t<e.length;)e[t][r.valueMember]<r.minValueToDisplay?e.splice(t,1):t++;if(0!=r.maxValueToDisplay)for(var t=0;t<e.length;)e[t][r.valueMember]>r.maxValueToDisplay?e.splice(t,1):t++;return null==r.displayLimit||isNaN(r.displayLimit)||(!0===r.takeTopWeightedItems?(e.sort(function(e,t){return e[r.valueMember]<t[r.valueMember]?1:e[r.valueMember]>t[r.valueMember]?-1:0}),(e=e.slice(0,r.displayLimit)).sort(function(e,r){return e.index<r.index?-1:e.index>r.index?1:0})):e=e.slice(0,r.displayLimit)),e},_sort:function(e){var r=this;if("none"!==r.sortBy){if("label"===r.sortBy)e.sort(function(e,t){return e[r.displayMember]<t[r.displayMember]?-1:e[r.displayMember]>t[r.displayMember]?1:0});else{if("value"!==r.sortBy)throw new Error("jqxTagCloud: sortBy option needs to be either 'none' or 'label' or 'value'");e.sort(function(e,t){return e[r.valueMember]<t[r.valueMember]?-1:e[r.valueMember]>t[r.valueMember]?1:0})}if("ascending"===r.sortOrder)return e;if("descending"===r.sortOrder)return e.reverse();throw new Error("jqxTagCloud: sortOrder option needs to be either 'ascending' or 'descending'")}return e},_getMaxValue:function(e){for(var r=this,t=e[0][r.valueMember],a=0;a<e.length;a++)t<e[a][r.valueMember]&&(t=e[a][r.valueMember]);return t},_getMinValue:function(e){for(var r=this,t=e[0][r.valueMember],a=0;a<e.length;a++)t>e[a][r.valueMember]&&(t=e[a][r.valueMember]);return t},_setSourceData:function(e){var r=this;r.records=e.records;for(var t=0;t<r.records.length;t++){var a=void 0!==r.records[t][r.valueMember]?parseFloat(r.records[t][r.valueMember]):0;r.records[t][r.valueMember]=isNaN(a)?0:a,r.records[t].index=t}r.hiddenList=[]},_updateColor:function(){var r=this;r.textColor&&e(r._el).find("li").css("color",r.textColor)},_updateSize:function(){var e=this;e.width&&e.host.width(e.width),e.height&&e.host.height(e.height)},_setRtl:function(){var e=this;e.rtl?e.host.addClass(e.toThemeProperty("jqx-rtl")):e.host.removeClass(e.toThemeProperty("jqx-rtl"))}})}(jqxBaseFramework);

