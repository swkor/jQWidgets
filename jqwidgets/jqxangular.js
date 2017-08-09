/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e,t,r){function a(t,r,a,n,i){if(n&&i)switch(t){case"jqxGrid":case"jqxDataTable":case"jqxTreeGrid":if(a.columns){var s=n.columns||n,o=i.columns||i;if(s.length!=o.length)return!1;var j={};if(e.each(s,function(e,t){var r=this;for(var a in this)if(r[a]!=o[e][a]){var n=r.datafield||r.dataField;j[n]||(j[n]={}),j[n][a]=r[a]}}),!e.isEmptyObject(j))return e.each(j,function(t,a){for(var n in a)e(r).jqxProxy("getcolumnproperty",t,n)!==a[n]&&e(r).jqxProxy("setcolumnproperty",t,n,a[n])}),!0}}return!1}function n(a,n,s,o,j,x,l){var u=function(t){if("jqxTree"===x||"jqxMenu"===x)return t;if("object"==typeof t&&t&&null!=t._bindingUpdate)return t;var r={},a=!1;if(e.isArray(t)||t instanceof Object&&!t.url&&!t.localdata&&!t.localData){if("jqxChart"===x)return t;if(a=!0,r.localData=t,r.type="array",t[0]){var n=new Array;"object"==e.type(t[0])&&(e.each(t[0],function(t,r){var a={name:t,type:e.type(r)};n.push(a)}),r.datafields=n)}}else t&&t.url?r=t:t&&(t.localdata||t.localData)&&(r=t);return e.jqx.dataAdapter?new e.jqx.dataAdapter(r):a?t:null};if(s.jqxSource!=r){h=a.$watchCollection(s.jqxSource,function(r,i){if(r!=i){if(t.equals(r,i))return;if(r&&i&&r._source&&i._source&&t.equals(r._source,i._source))return;var o=u(r);e(n).jqxProxy({source:o});var j=t.extend({},a.$eval(s.jqxSettings));s.jqxSettings&&j&&j.propertyChanged&&j.propertyChanged("source",i,r)}});l.push(h)}else if(s.jqxSettings!=r){var d={},q=null,c=p(s.jqxSettings)(a),g=n.controller();for(var f in g)if(c&&g[f]==c.source){q=f;break}if(!q)for(var f in a)if(c&&a[f]==c.source){q=f;break}if(q){var v="";for(var f in a)if(a[f]==g){v=f;break}""!=v&&(q=v+"."+q);h=j.$watchCollection(q,function(r,i){if(r!=i){if(t.equals(r,i))return;if(r&&i&&r._source&&i._source&&t.equals(r._source,i._source))return;var o=e.isArray(r)||"array"===e.type(r);if(new Date-d["jqxSettings.source"]>1e3||d=={}||!d["jqxSettings.source"]||o){var j=u(r);e(n).jqxProxy({source:j});var x=t.extend({},a.$eval(s.jqxSettings));s.jqxSettings&&x&&x.propertyChanged&&x.propertyChanged("source",i,r),d.property=new Date}}});l.push(h)}h=a.$watchCollection(s.jqxSettings+".source",function(r,i){if(r!=i){if(t.equals(r,i))return;if(r&&i&&r._source&&i._source&&t.equals(r._source,i._source))return;if(new Date-d.property>1e3||!d["jqxSettings.property"]||d=={}){var o=u(r);e(n).jqxProxy({source:o});var j=t.extend({},a.$eval(s.jqxSettings));s.jqxSettings&&j&&j.propertyChanged&&j.propertyChanged("source",i,r),d["jqxSettings.source"]=new Date}}});l.push(h);var h=a.$watchCollection(s.jqxSettings,function(r,o){if(r)if(o){if(r.source!=o.source){if(t.equals(r.source,o.source))return;if(r&&o&&r.source&&o.source&&r.source._source&&o.source._source&&t.equals(r.source._source,o.source._source))return;if(r.source&&o.source&&e.isArray(r.source)&&e.isArray(o.source)&&i(r.source)==i(o.source))return;if(new Date-d.property>1e3||!d["jqxSettings.source"]||d=={}){x=u(r.source);e(n).jqxProxy({source:x});var j=t.extend({},a.$eval(s.jqxSettings));s.jqxSettings&&j&&j.propertyChanged&&j.propertyChanged("source",o.source,r.source),d["jqxSettings.source"]=new Date}}}else{var x=u(r.source);e(n).jqxProxy({source:x})}});l.push(h)}return u(o)}function i(t){if(null==t)return"";var r="";return e.each(t,function(t){var a=this;t>0&&(r+=", "),r+="[";var n=0;if("object"==e.type(a))for(var i in a)n>0&&(r+=", "),r+="{"+i+":"+a[i]+"}",n++;else n>0&&(r+=", "),r+="{"+t+":"+a+"}",n++;r+="]"}),r}function s(t,r,a,n,i,s){e.extend(e.jqx["_"+n].prototype,{definedInstance:function(){if(this.element&&this.element!==r[0])return!0;if(this.base&&this.base.element!==r[0])return!0;var o=this,j=function(r){e.each(s,function(a,n){o.addHandler(e(r),a,function(r){t.$parent?e.proxy(n,i)(r):n(r),"$apply"!=t.$root.$$phase&&"$digest"!=t.$root.$$phase&&t.$apply()})});var n=a.$attr;if(e.each(a,function(i,s){if(i.indexOf("jqxOn")>=0){var j=n[i].substring(7),x=e.camelCase(j),l=s;o.addHandler(e(r),x,function(e){if(e.data=a.data||a.jqxData,l.indexOf("(")>=0){var r=l.indexOf("("),n=p(l.substring(0,r))(t);n?n(e):t.$emit(x,e)}else t.$emit(l,e);"$apply"!=t.$root.$$phase&&"$digest"!=t.$root.$$phase&&t.$apply()})}}),a.jqxInstance){var j=p(a.jqxInstance).assign;j&&j(t,o),"$apply"!=t.$root.$$phase&&"$digest"!=t.$root.$$phase&&t.$apply()}};j(r),"jqxPopover"==n&&setTimeout(function(){j(o.host)})}})}function o(n,i,s,o,j,x){if(s.jqxSettings){var l=p(s.jqxSettings)(n);l&&(l.apply?($[j.$id+o+s.jqxSettings]||($[j.$id+o+s.jqxSettings]=new Array),$[j.$id+o+s.jqxSettings].push(x)):(l.apply=l[o]=function(){var t=arguments,r=new Array;return 0==t.length||(e.each($[j.$id+o+s.jqxSettings],function(a,n){var i=this;r.push({widgetName:o,element:i,result:e.jqx.jqxWidgetProxy(o,i,t)})}),1==r.length?r[0].result:r)},l.digest=function(){/^\$(digest|apply)$/.test(n.$root.$$phase)||n.$digest()},l.refresh=function(x,u){var d={},q=e(i)[o]("getInstance");if(e.each(l,function(e,t){if("created"===e||"propertyChanged"===e||"data"==e||"refresh"==e||e==o||"apply"==e)return!0;var a=q.events||q._events;return!!(a&&a.indexOf(e)>=0||e.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g))||(x!=r&&-1===x.indexOf(e)||void(d[e]=t))}),d!=={})if(u)e.each(d,function(e,t){l[e]=q[e]}),"$apply"!=n.$root.$$phase&&"$digest"!=n.$root.$$phase&&n.$apply();else if(e.each($[j.$id+o+s.jqxSettings],function(t,r){e(this).jqxProxy(d)}),s.jqxWatchSettings!=r&&j){var c=p(s.jqxSettings)(j);e.each(c,function(r,i){if(r.match(/(source|propertyChanged|created|data|apply|refresh)/g))return!0;var x=q.events||q._events;if(x&&x.indexOf(r)>=0||r.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g))return!0;if(r===o)return!0;if(!m[s.jqxSettings+"."+r]){var l=r,u=j.$watch(s.jqxSettings+"."+r,function(r,i){if(r!=i){if(t.equals(r,i))return;var x={};x[l]=r,e.each($[j.$id+o+s.jqxSettings],function(t,n){a(o,e(this),x,r,i)||e(this).jqxProxy(x)});var u=t.extend({},n.$eval(s.jqxSettings));s.jqxSettings&&u&&u.propertyChanged&&u.propertyChanged(l,i,r)}},!0);m[s.jqxSettings+"."+r]=u}})}C[i[0].id]&&(d={},e.each(C[i[0].id],function(){if(x!=r&&-1===x.indexOf(e.camelCase(this.value.substring(4))))return!0;if(d[e.camelCase(this.value.substring(4))]=n.$eval(this.label),u){var t=e.parse(this.label)(n).assign;t&&t(n,q[e.camelCase(this.value.substring(4))])}}),u?"$apply"!=n.$root.$$phase&&"$digest"!=n.$root.$$phase&&n.$apply():e.each($[j.$id+o+s.jqxSettings],function(t,r){e(this).jqxProxy(d)}))},$[j.$id+o+s.jqxSettings]=new Array,$[j.$id+o+s.jqxSettings].push(x)))}}function j(a,i,s,o,j,x,l){var u=/(jqxGrid|jqxTree|jqxMenu|jqxDataTable|jqxTreeGrid|jqxListBox|jqxTreeMap|jqxComboBox|jqxDropDownList|jqxChart)/gi;if(s.jqxSettings&&x&&x.source===r&&s.jqxSource===r&&o.match(u)&&(o.match(/(jqxTree|jqxMenu)/gi)?-1===i[0].innerHTML.toLowerCase().indexOf("ul")&&(x.source=[]):x.source=[]),x.source!==r&&s.jqxSettings)x.source=n(a,i,s,x.source,j,o,l);else if(s.jqxSource!==r){var d=t.extend({},a.$eval(s.jqxSource)),q=!(!s.jqxSource||!s.jqxSource.dataBind);x.source=q?n(a,i,s,s.jqxSource,j,o,l):n(a,i,s,d,j,o,l)}var c=a.$watch(s.ngDisabled,function(t,a){if(t!=r&&(t!=a||e(i).jqxProxy("disabled")!==t)){var n={};n.disabled=t,e(i).length>0&&e(i).jqxProxy(n)}});l.push(c)}function x(n,i,x,u,d){var q=new Array,c=t.extend({},n.$eval(x.jqxSettings));j(n,i,x,u,d,c,q);var p={},g={};if(C[i[0].id]&&e.each(C[i[0].id],function(){var s=this.label,o=this.value,j=e.camelCase(o.substring("4"));if(void 0!==x[s]){var l=n.$eval(x[s]);if(l===r&&"string"===e.type(x[s])&&(l=x[s]),"instance"==j)return!0;"array"===e.type(l)&&"source"!==u?l=l.slice(0):"object"===e.type(l)&&"source"!==u&&(l=e.extend({},l));var d=/(columnmenuopening|columnmenuclosing|aggregatesrenderer|tooltipFormatFunction|labelsFormatFunction|rendergridrows|draw|renderFiles|initTools|initFeedBack|onTargetDrop|drawBefore|dragStart|dragEnd|onDropTargetEnter|onDropTargetLeave|onDrag|createCommand|ready|render|initrowdetails|initTabContent|initContent|renderer|renderToolbar|renderStatusBar|groupsrenderer|pagerrenderer|groupcolumnrenderer|updatefilterconditions|handlekeyboardnavigation|updatefilterpanel|rendered|virtualModeCreateRecords|virtualModeRecordCreating|search|selectionRenderer)/gi,c=/(searchMode)/gi,f=/(ready|aggregatesrenderer|initrowdetails|initTabContent|initContent|renderToolbar|renderStatusBar|pagerRenderer)/gi;if(e.isFunction(l)&&!j.match(d))g[index]=l;else{if(j.match(d)&&!j.match(c)){return p[j]=function(){var e=l.apply(this,arguments);return j.match(f)&&!/^\$(digest|apply)$/.test(n.$root.$$phase)&&n.$digest(),e},!0}p[j]=l}v=function(r,s){if(r!=s){if(t.equals(r,s))return;var j=e.camelCase(o.substring("4"));if("watch"==j){if(x.jqxWatch.indexOf(",")>=0||x.jqxWatch.indexOf("[")>=0)return l=(l=x.jqxWatch).replace("[",""),l=l.replace("]",""),l=l.trim(),l=l.split(","),void e.each(l,function(o,l){for(var d=this.split("."),q=0;q<d.length;q++){if(d[q]in e(i).data().jqxWidget){j=d[q];break}if(d[q].toLowerCase()in e(i).data().jqxWidget){j=d[q].toLowerCase();break}}var c={};if(c[j]=r[o],!a(u,e(i),c,r,s)){e(i).jqxProxy(c);var p=t.extend({},n.$eval(x.jqxSettings));x.jqxSettings&&p&&p.propertyChanged&&p.propertyChanged(j,s,r)}});for(var l=x.jqxWatch.split("."),d=0;d<l.length;d++){if(l[d]in e(i).data().jqxWidget){j=l[d];break}if(l[d].toLowerCase()in e(i).data().jqxWidget){j=l[d].toLowerCase();break}}}var q={};if(q[j]=r,!a(u,e(i),q,r,s)){e(i).jqxProxy(q);var c=t.extend({},n.$eval(x.jqxSettings));x.jqxSettings&&c&&c.propertyChanged&&c.propertyChanged(j,s,r)}}};if("watch"==j){delete p[j];v=n.$watch(x[s],v,!0);q.push(v)}else{var v=n.$watch(x[s],v);q.push(v)}}}),""==i[0].id?(r==b[u]&&(b[u]=0),i[0].id=u+b[u]++):""!=i[0].id&&i[0].id==u+"0"&&(r==b[u]&&(b[u]=0),i[0].id=u+b[u]++),!e(i)[u])throw new Error("Missing required JavaScript references for: "+u);e.each(c,function(t,r){if("data"===t||"created"===t||"propertyChanged"===t)return!0;var a=/(columnmenuopening|columnmenuclosing|aggregatesrenderer|tooltipFormatFunction|labelsFormatFunction|rendergridrows|renderFiles|initTools|draw|drawBefore|dragStart|dragEnd|initFeedBack|onTargetDrop|onDropTargetEnter|onDropTargetLeave|onDrag|createCommand|ready|render|initrowdetails|initTabContent|initContent|renderer|renderToolbar|renderStatusBar|groupsrenderer|pagerrenderer|groupcolumnrenderer|updatefilterconditions|handlekeyboardnavigation|updatefilterpanel|rendered|virtualModeCreateRecords|virtualModeRecordCreating|search|selectionRenderer)/gi,i=/(searchMode)/gi,s=/(ready|aggregatesrenderer|initrowdetails|initTabContent|initContent|renderToolbar|renderStatusBar|pagerRenderer)/gi;if(e.isFunction(r)&&!t.match(a))g[t]=r;else{if(t.match(a)&&!t.match(i)){return p[t]=function(){var e=r.apply(this,arguments);return t.match(s)&&!/^\$(digest|apply)$/.test(n.$root.$$phase)&&n.$digest(),e},!0}"array"===e.type(r)&&"source"!==t?r=r.slice(0):"object"===e.type(r)&&"source"!==t&&(r=e.extend({},r)),p[t]=r}}),s(n,i,x,u,d,g);var f=i[0];o(n,i,x,u,d,f);e(i)[u](p);var v=e(i)[u]("getInstance");l(n,i,x,u,d,c,f,v,p,q);var h=n.$on("$destroy",function(){v&&v.destroy&&!v.isDestroyed?(v.isDestroyed=!0,e(i).parents().length>0&&e(i)[u]("destroy"),v=null):(e(i).remove(),v=null);for(var t=0;t<q.length;t++)q[t]();p=[],g=[],h()});return v}function l(s,o,j,x,l,u,d,q,c,g){if(j.jqxSettings){if(j.jqxWatchSettings!=r&&l){var f=p(j.jqxSettings)(l);e.each(f,function(r,n){if(r.match(/(source|created|propertyChanged|data|apply|refresh)/g))return!0;var i=q.events||q._events;if(i&&i.indexOf(r)>=0||r.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g))return!0;if(r===x)return!0;if(c.hasOwnProperty(r)){var u=r,d=l.$watch(j.jqxSettings+"."+r,function(r,n){if(r!=n){if(t.equals(r,n))return;var i={};if(i[u]=r,!a(x,e(o),i,r,n)){e(o).jqxProxy(i);var l=t.extend({},s.$eval(j.jqxSettings));j.jqxSettings&&l&&l.propertyChanged&&l.propertyChanged(u,n,r)}}},!0);m[j.jqxSettings+"."+r]=d,g.push(d)}})}var v=s.$watch(j.jqxSettings,function(u,d){var c={},p=!1;if(u!=d){if(t.equals(u,d))return;if(e.each(u,function(u,f){if("source"===u){if(null!=d.source)return!0;var v=n(s,o,j,f,l,g);c[u]=v}if("created"===u)return!0;if("propertyChanged"===u)return!0;if("data"===u)return s.$apply(),!0;var h=q.events||q._events;if(h&&h.indexOf(u)>=0||u.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g))return!0;var b=function(n){if(j.jqxWatchSettings!=r&&l&&!m[j.jqxSettings+"."+n]){var n=u,i=l.$watch(j.jqxSettings+"."+n,function(r,i){if(r!=i){if(t.equals(r,i))return;var l={};if(l[n]=r,!a(x,e(o),l,r,i)){e(o).jqxProxy(l);var u=t.extend({},s.$eval(j.jqxSettings));j.jqxSettings&&u&&u.propertyChanged&&u.propertyChanged(n,i,r)}}},!0);m[j.jqxSettings+"."+n]=i,g.push(i)}};f instanceof Object||null!=d&&f===d[u]?u!==x&&"apply"!==u&&"created"!==u&&"propertyChanged"!==u&&f instanceof Object&&(null==d||i(f)!==i(d[u])||""==i(f)&&""==i(d[u]))&&(c[u]=f,b(u),p=!0):(c[u]=f,b(u),p=!0)}),c!=={}&&p&&!a(x,e(o),c,u,d)){e(o).jqxProxy(c);var f=t.extend({},s.$eval(j.jqxSettings));j.jqxSettings&&f&&f.propertyChanged&&f.propertyChanged(index,d,u)}}});g.push(v)}}function u(t,a,n,i){var s=t[0].nodeName.toLowerCase(),o=e(t).parent(),j=e(t).html(),x=!(!o||!o[0]||"ng-include"!=o[0].nodeName.toLowerCase());if(e(t).parents("[ui-view]").length>0&&(x=!0),!x||a){var l='<div id="jqx-ngwidget">'+j+"</div>";if(s.indexOf("jqx")>=0){var u=t[0].attributes,d=t;if(s.indexOf("input")>=0)s.indexOf("date")>=0||s.indexOf("number")>=0?e(t).replaceWith('<div id="jqx-ngwidget"></div>'):s.indexOf("password")>=0?e(t).replaceWith('<input id="jqx-ngwidget" type="password"/>'):e(t).replaceWith('<input id="jqx-ngwidget"/>');else if(s.indexOf("jqx-button")>=0&&-1==s.indexOf("jqx-button-group"))e(t).replaceWith('<button id="jqx-ngwidget">'+j+"</button>");else if(s.indexOf("jqx-toggle-button")>=0)e(t).replaceWith('<button id="jqx-ngwidget">'+j+"</button>");else if(s.indexOf("jqx-link-button")>=0)if(e(t).find("a").length>0){var q=e(t).find("a");q.attr("id","jqx-ngwidget"),e(t).replaceWith(q)}else e(t).replaceWith('<a id="jqx-ngwidget">'+j+"</a>");else if(s.indexOf("jqx-data-table")>=0||s.indexOf("jqx-grid")>=0)e(t).find("tr").length>0?e(t).replaceWith('<div id="jqx-ngwidget">'+j+"</div>"):e(t).replaceWith('<div id="jqx-ngwidget"></div>');else if(s.indexOf("jqx-list-box")>=0||s.indexOf("jqx-drop-down-list")>=0||s.indexOf("jqx-combo-box")>=0)e(t).find("option").length>0?e(t).replaceWith('<select id="jqx-ngwidget">'+j+"</select>"):e(t).find("li").length>0?e(t).replaceWith('<ul id="jqx-ngwidget">'+j+"</ul>"):e(t).replaceWith('<div id="jqx-ngwidget"></div>');else if(s.indexOf("jqx-list-menu")>=0)e(t).replaceWith('<ul id="jqx-ngwidget" data-role="listmenu">'+j+"</ul>");else if(s.indexOf("jqx-tooltip")>=0){var c=e(t).children();c.detach(),e(c).insertAfter(e(t)),e.each(u,function(){e(c)[0]&&e(c)[0].setAttribute(this.name,this.value)}),e(t).remove(),t=c}else e(t).replaceWith(l);d=o.find("#jqx-ngwidget").removeAttr("id"),e.each(u,function(){e(d)[0]&&e(d)[0].setAttribute(this.name,this.value)})}var p=t[0];d&&d.length&&(p=d[0]);return""==p.id&&(r==b[i]&&(b[i]=0),p.id=i+b[i]++),e.each(n,function(e,t){e!==i&&"jqxNgModel"!=e&&-1==e.indexOf("jqxOn")&&"jqxData"!=e&&"jqxWatchSettings"!=e&&"jqxCreated"!=e&&"jqxSource"!=e&&"jqxCreate"!=e&&"jqxSettings"!=e&&e.indexOf("jqx")>=0&&(C[p.id]||(C[p.id]=new Array),C[p.id].push({label:e,value:n.$attr[e]}))}),e(p)}e(t).attr("data-jqx-ng-include",!0)}function d(t,a){!function(t){a.filesCount=0;var n=t.length;if(t.scripts){var i=t.scripts.length;for(var s in t.deps)i++,i+=t.deps[s].length;n=i}var o=function(t,i){var s=0,o=0,j=function(){var x=t[s];if(0===e('script[src*="'+x+'"]').length){var l=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript";var d=function(){if(a.filesCount++,o++,w[x]=!1,y[x]!=r&&e.each(y[x],function(){this.documentReady=!0,this.scriptsLoaded&&this.scriptsLoaded()}),y[x]=!0,a.filesCount==n)return a.documentReady=!0,void(a.scriptsLoaded&&a.scriptsLoaded());o===t.length&&i&&i()};u.addEventListener?u.addEventListener("load",d,!1):window.attachEvent&&u.attachEvent("onreadystatechange",function(){"complete"!=u.readyState&&"loaded"!=u.readyState||d()}),w[x]=!0;var q=D;"globalize.js"==x&&(q=D+"globalization/"),u.src=q+x,l.appendChild(u),++s<t.length&&j()}else{if(a.filesCount++,a.filesCount==n)return!0===y[x]||w[x]===r?(a.documentReady=!0,void(a.scriptsLoaded&&a.scriptsLoaded())):(y[x]==r&&(y[x]=new Array),void y[x].push(a));++s<t.length&&j(),++o===t.length&&i&&i()}};j()};t.scripts?(o(t.scripts),e.each(t.deps,function(e,t){var r=new Array;r.push(e),o(r,function(){o(t)})})):o(t)}({jqxCalendar:["jqxdatetimeinput.js","jqxcalendar.js","jqxtooltip.js","globalize.js","jqxbuttons.js"],jqxDateTimeInput:["jqxdatetimeinput.js","jqxcalendar.js","jqxtooltip.js","globalize.js","jqxbuttons.js"],jqxScheduler:["jqxscheduler.js","jqxscheduler.api.js","jqxdate.js","jqxmenu.js","jqxwindow.js","jqxcheckbox.js","jqxnumberinput.js","jqxscrollbar.js","jqxlistbox.js","jqxdropdownlist.js","jqxinput.js","jqxradiobutton.js","jqxdatetimeinput.js","jqxcalendar.js","jqxtooltip.js","globalize.js","jqxbuttons.js"],jqxListBox:["jqxlistbox.js","jqxdata.js","jqxbuttons.js","jqxscrollbar.js"],jqxComboBox:["jqxlistbox.js","jqxdata.js","jqxbuttons.js","jqxscrollbar.js","jqxcombobox.js"],jqxDropDownList:["jqxlistbox.js","jqxdata.js","jqxbuttons.js","jqxscrollbar.js","jqxdropdownlist.js"],jqxKanban:["jqxkanban.js","jqxsortable.js"],jqxSortable:["jqxsortable.js"],jqxKnob:["jqxdraw.js","jqxknob.js"],jqxGrid:{scripts:["jqxdatetimeinput.js","jqxcalendar.js","jqxmenu.js","jqxtooltip.js","jqxscrollbar.js","jqxbuttons.js","jqxlistbox.js","jqxdropdownlist.js","jqxcombobox.js","jqxcheckbox.js","globalize.js"],deps:{"jqxgrid.js":["jqxgrid.selection.js","jqxgrid.filter.js","jqxgrid.sort.js","jqxgrid.storage.js","jqxgrid.grouping.js","jqxgrid.pager.js","jqxgrid.columnsresize.js","jqxgrid.columnsreorder.js","jqxgrid.edit.js","jqxgrid.export.js","jqxgrid.aggregates.js"],"jqxdata.js":["jqxdata.export.js"]}},jqxDataTable:{scripts:["jqxdatatable.js","jqxdatetimeinput.js","jqxcalendar.js","jqxmenu.js","jqxtooltip.js","jqxscrollbar.js","jqxbuttons.js","jqxlistbox.js","jqxdropdownlist.js","jqxcombobox.js","jqxcheckbox.js","globalize.js","jqxinput.js"],deps:{"jqxdata.js":["jqxdata.export.js"]}},jqxTreeGrid:{scripts:["jqxdatetimeinput.js","jqxcalendar.js","jqxmenu.js","jqxtooltip.js","jqxscrollbar.js","jqxbuttons.js","jqxlistbox.js","jqxdropdownlist.js","jqxcombobox.js","jqxcheckbox.js","globalize.js","jqxinput.js"],deps:{"jqxdatatable.js":["jqxtreegrid.js"],"jqxdata.js":["jqxdata.export.js"]}},jqxDockingLayout:{scripts:["jqxmenu.js"],deps:{"jqxlayout.js":["jqxdockinglayout.js"]}},jqxCheckBox:["jqxcheckbox.js"],jqxRadioButton:["jqxradiobutton.js"],jqxBulletChart:["jqxbulletchart.js","jqxtooltip.js"],jqxRangeSelector:["jqxrangeselector.js"],jqxScrollView:["jqxbuttons.js","jqxscrollview.js"],jqxSwitchButton:["jqxswitchbutton.js"],jqxTouch:["jqxtouch.js"],jqxColorPicker:["jqxcolorpicker.js"],jqxInput:["jqxinput.js"],jqxTextArea:["jqxtextarea.js","jqxbuttons.js","jqxscrollbar.js"],jqxTagCloud:["jqxtagcloud.js"],jqxPopover:["jqxpopover.js"],jqxLayout:["jqxlayout.js","jqxmenu.js","jqxwindow.js"],jqxLoader:["jqxloader.js"],jqxResponsivePanel:["jqxresponsivepanel.js"],jqxEditor:["jqxeditor.js"],jqxNumberInput:["jqxbuttons.js","jqxnumberinput.js"],jqxMaskedInput:["jqxmaskedinput.js"],jqxSlider:["jqxbuttons.js","jqxslider.js"],jqxPanel:["jqxbuttons.js","jqxscrollbar.js","jqxpanel.js"],jqxButton:["jqxbuttons.js"],jqxLinkButton:["jqxbuttons.js"],jqxToggleButton:["jqxbuttons.js"],jqxRepeatButton:["jqxbuttons.js"],jqxDropDownButton:["jqxdropdownbutton.js"],jqxNotification:["jqxnotification.js"],jqxDockPanel:["jqxdockpanel.js"],jqxProgressBar:["jqxprogressbar.js"],jqxListMenu:["jqxbuttons.js","jqxscrollbar.js","jqxpanel.js","jqxlistmenu.js"],jqxTree:["jqxbuttons.js","jqxscrollbar.js","jqxpanel.js","jqxtree.js","jqxdata.js"],jqxMenu:["jqxmenu.js","jqxdata.js"],jqxTabs:["jqxtabs.js","jqxbuttons.js"],jqxDragDrop:["jqxdragdrop.js"],jqxDraw:["jqxdraw.js"],jqxWindow:["jqxwindow.js"],jqxDocking:["jqxwindow.js","jqxdocking.js"],jqxButtonGroup:["jqxbuttons.js","jqxbuttongroup.js"],jqxChart:["jqxdata.js","jqxchart.js"],jqxNavigationBar:["jqxnavigationbar.js"],jqxExpander:["jqxexpander.js"],jqxResponse:["jqxresponse.js"],jqxPasswordInput:["jqxpasswordinput.js"],jqxRating:["jqxrating.js"],jqxSplitter:["jqxbuttons.js","jqxsplitter.js"],jqxValidator:["jqxvalidator.js"],jqxTooltip:["jqxtooltip.js"],jqxGauge:["jqxdraw.js","jqxgauge.js"],jqxLinearGauge:["jqxdraw.js","jqxgauge.js"],jqxTreeMap:["jqxtreemap.js"],jqxRibbon:["jqxbuttons.js","jqxribbon.js"],jqxFormattedInput:["jqxbuttons.js","jqxformattedinput.js"],jqxComplexInput:["jqxbuttons.js","jqxcomplexinput.js"],jqxToolBar:["jqxtoolbar.js"],jqxFileUpload:["jqxfileupload.js"],jqxNavBar:["jqxnavbar.js"]}[t])}function q(t){var a=function(a,n,i,s,o){if(e(n).attr("data-jqx-ng-include")){e(n).removeAttr("data-jqx-ng-include");var j=e(n.children()).detach();(n=u(n,!0,i,t)).append(j),v(n)(a);var l=!0;for(var q in i)if(-1!=q.toString().indexOf("jqx")&&(a[i[q]]!=r&&(l=!1),i[q].split(".").length>1))for(var c=i[q].split("."),h=0;h<c.length;h++)a[c[h]]!=r&&(l=!1);l&&i.jqxSettings&&(p(i.jqxSettings)(a)||(l=!1)),l&&(a=a.$parent)}if(e.jqx.AMD){var b={};S[t]=!1,b.documentReady=!1,d(t,b)}var $=n[0].style.visibility,m=n[0].style.display;n[0].style.visibility="hidden",n[0].style.display="none";var y=a,w=f(function(){f.cancel(w),w=r;var o=function(){var o=s[0];n[0].style.visibility=$,n[0].style.display=m;var j=x(a,n,i,t,y),l=(t.toLowerCase(),t.match(/(input|list|radio|checkbox|combobox|rating|slider|scrollbar|progress|range|editor|picker|range|gauge|textarea|calendar|switch|button)/gi)),u={element:n[0],name:t,instance:e(n).data().jqxWidget,id:n[0].id,scope:a},d=function(){a.$emit(t+"Created",u),i.jqxSettings&&p(i.jqxSettings)(a)&&p(i.jqxSettings)(a).created&&g(function(){(0,p(i.jqxSettings)(a).created)(u)}),i.jqxCreated&&g(function(){p(i.jqxCreated)(a)(u)})};if("jqxGrid"===t||"jqxDataTable"===t)var q=0,c=f(function(){e(n).data().jqxWidget?(e(n).data().jqxWidget.initializedcall||25==q)&&(f.cancel(c),c=r,d()):(f.cancel(c),c=r),q++},100);else d();g(function(){if(o){if(o.$render=function(){var i=o.$viewValue;i===r&&(i=o.$modelValue);{if("jqxRadioButton"!==t)return"jqxCheckBox"===t?(a.$eval(e(n).attr("ng-true-value"))==o.$viewValue&&e(n).val(!0),void(a.$eval(e(n).attr("ng-false-value"))==o.$viewValue?e(n).val(!1):e(n).val(o.$viewValue))):void(i!=e(n).val()&&g(function(){e(n).val(i)}));a.$eval(e(n).attr("value"))==o.$viewValue?e(n).val(!0):"true"==a.$eval(e(n).attr("value"))&&1==o.$viewValue?e(n).val(!0):e(n).val(!1)}},"jqxRadioButton"===t)a.$eval(e(n).attr("value"))==o.$viewValue?e(n).val(!0):"true"==a.$eval(e(n).attr("value"))&&1==o.$viewValue?e(n).val(!0):e(n).val(!1);else if("jqxCheckBox"===t)a.$eval(e(n).attr("ng-true-value"))==o.$viewValue&&e(n).val(!0),a.$eval(e(n).attr("ng-false-value"))==o.$viewValue?e(n).val(!1):e(n).val(o.$viewValue);else if("jqxDropDownList"===t||"jqxComboBox"===t||"jqxListBox"===t||"jqxInput"===t||"jqxTextArea"===t)if(i.jqxNgModel!=r){var s=e(n).data().jqxWidget;"jqxInput"!=t?s.valueMember?s.selectItem(o.$viewValue[s.valueMember]):s.displayMember?s.selectItem(o.$viewValue[s.displayMember]):e(n).val(o.$viewValue):e(n).val(o.$viewValue)}else e(n).val(o.$viewValue);else"jqxDateTimeInput"===t||"jqxCalendar"===t?i.jqxNgModel!=r?"range"==(s=e(n).data().jqxWidget).selectionMode?s.setRange(o.$viewValue):s.setDate(o.$viewValue):e(n).val(o.$viewValue):"jqxToggleButton"==t?((s=e(n).data().jqxWidget).toggled=!0,s.refresh()):e(n).val(o.$viewValue);if(l){var x="keyup change";"jqxScrollBar"==t&&(x="valueChanged"),"jqxToggleButton"==t&&(x="keyup click"),"jqxInput"==t&&(x="keyup change select");var u,d=j.host;!d&&j.base&&(d=j.base.host),e(d).on(x,function(s){var j=s.args;u&&g.cancel(u),u=g(function(){if("jqxRadioButton"===t)j&&"api"!=j.type&&o.$setViewValue(a.$eval(e(n).attr("value")));else if("jqxCheckBox"===t)e(n).attr("ng-true-value")!=r&&j.checked?o.$setViewValue(e(n).attr("ng-true-value")):e(n).attr("ng-false-value")==r||j.checked?o.$setViewValue(e(n).val()):o.$setViewValue(e(n).attr("ng-false-value"));else if("jqxDropDownList"===t||"jqxComboBox"===t||"jqxListBox"===t||"jqxInput"===t||"jqxTextArea"===t){var s=e(n).val();i.jqxNgModel!=r?((x=e(n).data().jqxWidget).getSelectedItem&&(s=x.getSelectedItem()).originalItem&&(s=s.originalItem),"jqxInput"!==t&&"jqxTextArea"!==t||(s=x.selectedItem),o.$setViewValue(s)):o.$setViewValue(s)}else if("jqxDateTimeInput"===t||"jqxCalendar"===t)i.jqxNgModel!=r?"range"==(x=e(n).data().jqxWidget).selectionMode?o.$setViewValue(x.getRange()):o.$setViewValue(x.getDate()):"date"===e.type(o.$viewValue)?"range"==(x=e(n).data().jqxWidget).selectionMode?o.$setViewValue(x.getRange()):o.$setViewValue(x.getDate()):o.$setViewValue(e(n).val());else if("jqxToggleButton"==t){var x=e(n).data().jqxWidget;o.$setViewValue(x.toggled)}else o.$setViewValue(e(n).val());a.$emit(t+"ModelChange",o.$viewValue)})})}}})};if(i.ngShow===r||i.jqxCreate!==r){var j=function(){if(null!=i.jqxCreate||null!=i.jqxCreate)if(!0===i.jqxCreate||null!==i.jqxCreate&&"object"==e.type(i.jqxCreate))o();else var t=a.$watch(i.jqxCreate,function(e,r){"number"==typeof e?(g(o,e),t()):e&&(o(),t())});else o()};if(e.jqx.AMD){var l=function(){var t=!0;for(var r in S)if(!S[r]){t=!1;break}if(t){k||(a.$emit("jQWidgetsScriptsLoaded"),k=!0);for(var r in S)e.each(S[r],function(){this()}),S[r]=new Array}};if(b.documentReady){var u={element:n[0],name:t,scope:a};a.$emit(t+"ScriptsLoaded",u),S[t]||(S[t]=new Array),S[t].push(j),l()}else b.scriptsLoaded=function(){var e={element:n[0],name:t,scope:a};a.$emit(t+"ScriptsLoaded",e),S[t]||(S[t]=new Array),S[t].push(j),l()}}else j()}else var d=a.$watch(i.ngShow,function(e,t){e&&(o(),d())})})};c.directive(t,["$timeout","$interval","$parse","$compile","$log",function(e,r,n,i,s){g=e,f=r,p=n,v=i,h=s;var o;return{restrict:"ACE",require:["?ngModel"],scope:!1,template:function(e,r){u(e,!1,r,t),o=this.scope},controller:["$scope","$attrs","$element","$transclude",function(e,t,r,a){}],compile:function(e,t,r){return{pre:function(e,t,r,a,n){},post:function(e,t,r,n,i){a(e,t,r,n)}}},link:a}}])}if(t){e.jqx=e.jqx||{},e.jqx.AMD=!1;var c=t.module("jqwidgets",[]),p=(t.module("jqwidgets-amd",[],function(){e.jqx.AMD=!0}),null),g=null,f=null,v=null,h=null,b=new Array,$=new Array,m=new Array,y=new Array,w=new Array,S=new Array,C={},k=!1,D=function(){var e,t,r,a=document.getElementsByTagName("script");for(e=0;t=a[e];e++)if((r=t.src).indexOf("jqxcore.js")>=0){var n=r.substring(0,r.indexOf("jqxcore.js"));break}return n}();e.jqx.angularCompile=function(e,a){e.length>0&&(e=e[0]);var n=t.element(e),i=n.injector();a==r&&(a=e.innerHTML),i.invoke(["$compile","$rootScope",function(e,t){var r=n.html(a).scope();e(n)(r||t),/^\$(digest|apply)$/.test(t.$$phase)?/^\$(digest|apply)$/.test(r.$$phase)||r.$digest():t.$digest()}])},q("jqxBulletChart"),q("jqxButtonGroup"),q("jqxButton"),q("jqxBarGauge"),q("jqxRepeatButton"),q("jqxToggleButton"),q("jqxLinkButton"),q("jqxCalendar"),q("jqxChart"),q("jqxCheckBox"),q("jqxComplexInput"),q("jqxColorPicker"),q("jqxComboBox"),q("jqxDataTable"),q("jqxDateTimeInput"),q("jqxDocking"),q("jqxDockPanel"),q("jqxDragDrop"),q("jqxDraw"),q("jqxDropDownButton"),q("jqxDropDownList"),q("jqxEditor"),q("jqxExpander"),q("jqxFormattedInput"),q("jqxFileUpload"),q("jqxGauge"),q("jqxLinearGauge"),q("jqxGrid"),q("jqxInput"),q("jqxListBox"),q("jqxListMenu"),q("jqxMaskedInput"),q("jqxMenu"),q("jqxNavigationBar"),q("jqxNavBar"),q("jqxNotification"),q("jqxNumberInput"),q("jqxPanel"),q("jqxPasswordInput"),q("jqxProgressBar"),q("jqxRadioButton"),q("jqxRangeSelector"),q("jqxRating"),q("jqxRibbon"),q("jqxScrollBar"),q("jqxScrollView"),q("jqxSlider"),q("jqxSplitter"),q("jqxSwitchButton"),q("jqxTabs"),q("jqxToolBar"),q("jqxTooltip"),q("jqxTouch"),q("jqxTree"),q("jqxTreeGrid"),q("jqxTreeMap"),q("jqxValidator"),q("jqxWindow"),q("jqxTagCloud"),q("jqxPopover"),q("jqxKanban"),q("jqxKnob"),q("jqxSortablePlugin"),q("jqxScheduler"),q("jqxTextArea"),q("jqxLayout"),q("jqxDockingLayout"),q("jqxResponsivePanel"),q("jqxLoader")}}(jqxBaseFramework,window.angular);

