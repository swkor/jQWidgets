/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){"use strict";e.jqx.jqxWidget("jqxComplexInput","",{}),e.extend(e.jqx._jqxComplexInput.prototype,{defineInstance:function(){var t={width:null,height:null,decimalNotation:"default",value:"",spinButtons:!1,spinButtonsStep:1,placeHolder:"",roundedCorners:!0,disabled:!1,rtl:!1,changeType:null,template:"",events:["change"]};return this===e.jqx._jqxComplexInput.prototype?t:(e.extend(!0,this,t),t)},createInstance:function(){var t=this;t._firefox="mozilla"===e.jqx.browser.browser,t._currentNumber={},t._allowedCharacters=new RegExp(/([\+\-\.0-9i])/i),t.render()},render:function(){var e=this;if("DIV"===e.element.nodeName.toUpperCase()){e.baseHost=e.host;var t=e.host.data();e.host=e.baseHost.children("input"),e.element=e.host[0],e.host.data(t)}if(!0===e.spinButtons){if(!e.baseHost)throw new Error("jqxComplexInput: Invalid HTML structure. Please initialize the complex input from a div with an input and another div inside.");e._appendSpinButtons()}if(e._addClasses(),e._setSize(),e._removeHandlers(),e._addHandlers(),"exponential"===e.decimalNotation&&-1!==e.value.toLowerCase().indexOf("e")){var n=e._exponentialToDecimal(e.value),o=n.realPart,r=n.imaginaryPart,a=o+" "+(r<0?"-":"+")+" "+Math.abs(r)+"i";e._currentNumber={value:a,realPart:o,imaginaryPart:r}}else e._currentNumber={value:e.value,realPart:e._getReal(e.value),imaginaryPart:e._getImaginary(e.value)};"default"===e.decimalNotation?e.element.value=e.value:e._setNotation(),e._refreshPlaceHolder()},refresh:function(e){!0!==e&&this.render()},destroy:function(){var e=this;e._removeHandlers(),e.host.destroy()},val:function(t){var n=this;if("string"!=typeof t&&("object"!=typeof t||!1!==e.isEmptyObject(t)))return n.element.value;var o,r;if("string"==typeof t)if(-1===(t=t.toLowerCase()).indexOf("e"))o=n._getReal(t),r=n._getImaginary(t);else{var a=n._exponentialToDecimal(t);o=1*a.realPart,r=1*a.imaginaryPart}else"object"==typeof t&&!1===e.isEmptyObject(t)&&(o=t.real,r=t.imaginary);var s=o+" "+(r>=0?"+":"-")+" "+Math.abs(r)+"i";s!==n._currentNumber.value&&(n.element.value=s,n._onChange(n.value),"default"!==n.decimalNotation&&n._setNotation())},getReal:function(){return this._currentNumber.realPart},_getReal:function(t){function n(t){return o=o.slice(0,t),o=e.trim(o),parseFloat(r+""+o)}(!t||"object"==typeof t&&!0===e.isEmptyObject(t))&&(t=this.element.value);var o=e.trim(t),r="";if(0===(t.match(/i/g)||[]).length)return parseFloat(o);"+"===t.charAt(0)?o=o.slice(1,t.length):"-"===t.charAt(0)&&(o=o.slice(1,t.length),r="-");var a=o.indexOf("+");if(-1!==a)return n(a);var s=o.indexOf("-");return-1!==s?n(s):0},getImaginary:function(){return this._currentNumber.imaginaryPart},_getImaginary:function(t){function n(t,n){return o=o.slice(t+1,o.indexOf("i")),""===(o=e.trim(o))&&(o=1),parseFloat(n+""+o)}if((!t||"object"==typeof t&&!0===e.isEmptyObject(t))&&(t=this.element.value),0===(t.match(/i/g)||[]).length)return 0;var o=e.trim(t),r="";"-"!==o.charAt(0)&&"+"!==o.charAt(0)||(r="-"===o.charAt(0)?"-":"+",o=e.trim(o.slice(1,t.length)));var a=o.indexOf("+");if(-1!==a)return n(a,"+");var s=o.indexOf("-");return-1!==s?n(s,"-"):""==(o=r+""+o.slice(0,o.indexOf("i")))||"+"===o?1:"-"===o?-1:parseFloat(o)},getDecimalNotation:function(e,t){var n=this;"real"===e?e=n._currentNumber.realPart:"imaginary"===e&&(e=n._currentNumber.imaginaryPart);var o=e.toExponential();return"scientific"===t?function(e){var t=e.indexOf("e"),o=e.slice(t+1),r=e.slice(0,t+1);return r=r.replace("e","×10"),r+=n._toSuperScript(o),r=r.replace("+","")}(o):"engineering"===t?function(e){var t=e.indexOf("e"),o=e.slice(t+1),r=e.slice(0,t),a=parseInt(o,10)%3;r*=Math.pow(10,a);var s=e.slice(0,t).length-a-2;return s>=0&&(r=r.toFixed(s)),r+"×10"+n._toSuperScript((parseInt(o,10)-a).toString())}(o):o},propertyChangedHandler:function(t,n,o,r){if(r!==o)switch(n){case"template":t.template&&(t._upbutton.removeClass(that.toThemeProperty("jqx-"+o)),t._downbutton.removeClass(that.toThemeProperty("jqx-"+o)),t._upbutton.addClass(that.toThemeProperty("jqx-"+t.template)),t._downbutton.addClass(that.toThemeProperty("jqx-"+t.template)));break;case"width":case"height":t._setSize();break;case"decimalNotation":"default"===r?t.element.value=t._currentNumber.value:t._setNotation();break;case"value":t.element.value=r,t._onChange(o);break;case"spinButtons":var a=function(){t.host.removeClass(t.toThemeProperty("jqx-rc-all")),!1===t.rtl?(t.host.addClass(t.toThemeProperty("jqx-rc-l")),t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-rc-r"))):(t.host.addClass(t.toThemeProperty("jqx-rc-r")),t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-rc-l")))};if(t._spinButtonsContainer){var s=t.host.width(),i=t._spinButtonsContainer.outerWidth();!1===r?(t.host.width(s+i),t._spinButtonsContainer.hide(),t.host.addClass(t.toThemeProperty("jqx-rc-all"))):(t.host.width(s-i),t._spinButtonsContainer.show(),a())}else if(!0===r){var l=e("<div></div>");if(t.baseHost)t.host.after(l),t.render();else{var u=t.element.id;t.host.removeAttr("id"),t.host.wrap('<div id="'+u+'" style="display: inline-block;"></div>');var d=e("#"+u);d.append(l);var p=t.host.data();p.jqxComplexInput.host=d,p.jqxComplexInput.element=d[0],t.baseHost=d,t.baseHost.data(p),t.render()}a()}break;case"placeHolder":t._refreshPlaceHolder(o);break;case"roundedCorners":t._spinButtonsContainer?!0===r?!1===t.rtl?(t.host.addClass(t.toThemeProperty("jqx-rc-l")),t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-rc-r"))):(t.host.addClass(t.toThemeProperty("jqx-rc-r")),t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-rc-l"))):!1===t.rtl?(t.host.removeClass(t.toThemeProperty("jqx-rc-l")),t._spinButtonsContainer.removeClass(t.toThemeProperty("jqx-rc-r"))):(t.host.removeClass(t.toThemeProperty("jqx-rc-r")),t._spinButtonsContainer.removeClass(t.toThemeProperty("jqx-rc-l"))):!0===r?t.host.addClass(t.toThemeProperty("jqx-rc-all")):t.host.removeClass(t.toThemeProperty("jqx-rc-all"));break;case"disabled":!0===r?(t.host.attr("disabled",!0),t.host.addClass(t.toThemeProperty("jqx-fill-state-disabled jqx-input-disabled")),t._spinButtonsContainer&&t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-fill-state-disabled"))):(t.host.removeAttr("disabled"),t.host.removeClass(t.toThemeProperty("jqx-fill-state-disabled jqx-input-disabled")),t._spinButtonsContainer&&t._spinButtonsContainer.removeClass(t.toThemeProperty("jqx-fill-state-disabled")));break;case"rtl":t._spinButtonsContainer&&(!0===r?(t.host.addClass(t.toThemeProperty("jqx-complex-input-child-rtl")),t._spinButtonsContainer.removeClass(t.toThemeProperty("jqx-complex-input-spin-buttons-container-ltr")),t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-complex-input-child-rtl jqx-complex-input-spin-buttons-container-rtl")),!0===t.roundedCorners&&(t.host.removeClass(t.toThemeProperty("jqx-rc-l")),t.host.addClass(t.toThemeProperty("jqx-rc-r")),t._spinButtonsContainer.removeClass(t.toThemeProperty("jqx-rc-r")),t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-rc-l")))):(t.host.removeClass(t.toThemeProperty("jqx-complex-input-child-rtl")),t._spinButtonsContainer.removeClass(t.toThemeProperty("jqx-complex-input-child-rtl jqx-complex-input-spin-buttons-container-rtl")),t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-complex-input-spin-buttons-container-ltr")),!0===t.roundedCorners&&(t.host.removeClass(t.toThemeProperty("jqx-rc-r")),t.host.addClass(t.toThemeProperty("jqx-rc-l")),t._spinButtonsContainer.removeClass(t.toThemeProperty("jqx-rc-l")),t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-rc-r")))));break;case"theme":e.jqx.utilities.setTheme(o,r,t.host)}},_raiseEvent:function(t,n){void 0===n&&(n={owner:null});var o=this.events[t];n.owner=this;var r=new e.Event(o);return r.owner=this,n.type=this.changeType,this.changeType=null,r.args=n,r.preventDefault&&r.preventDefault(),this.host.trigger(r)},_appendSpinButtons:function(){var t=this;t._spinButtonsContainer=e(t.baseHost.children("div")),t._spinButtonsContainer.attr("unselectable","on"),t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-fill-state-normal jqx-complex-input-child jqx-formatted-input-spin-buttons-container jqx-complex-input-spin-buttons-container")),!1===t.rtl?t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-complex-input-spin-buttons-container-ltr")):t._spinButtonsContainer.addClass(t.toThemeProperty("jqx-complex-input-child-rtl jqx-complex-input-spin-buttons-container-rtl"));var n='<div unselectable="on" class="'+t.toThemeProperty("jqx-fill-state-normal jqx-formatted-input-spin-button")+'"><div class="'+t.toThemeProperty("jqx-input-icon")+'"></div></div>';t._upbutton=e(n),t._spinButtonsContainer.append(t._upbutton),t._downbutton=e(n),t._spinButtonsContainer.append(t._downbutton),t._upArrow=t._upbutton.find("div"),t._upArrow.addClass(t.toThemeProperty("jqx-icon-arrow-up")),t._downArrow=t._downbutton.find("div"),t._downArrow.addClass(t.toThemeProperty("jqx-icon-arrow-down")),t._upArrow.add(t._downArrow).attr("unselectable","on"),t.template&&(t._upbutton.addClass(t.toThemeProperty("jqx-"+t.template)),t._downbutton.addClass(t.toThemeProperty("jqx-"+t.template)))},_addClasses:function(){var e=this;e.host.addClass(e.toThemeProperty("jqx-widget jqx-input jqx-complex-input jqx-widget-content")),e.baseHost&&(e.baseHost.addClass(e.toThemeProperty("jqx-widget jqx-complex-input-parent")),e.host.addClass(e.toThemeProperty("jqx-complex-input-child"))),!0===e.roundedCorners&&(e._spinButtonsContainer?!1===e.rtl?(e.host.addClass(e.toThemeProperty("jqx-rc-l")),e._spinButtonsContainer.addClass(e.toThemeProperty("jqx-rc-r"))):(e.host.addClass(e.toThemeProperty("jqx-rc-r")),e._spinButtonsContainer.addClass(e.toThemeProperty("jqx-rc-l"))):e.host.addClass(e.toThemeProperty("jqx-rc-all"))),!0===e.disabled&&(e.host.attr("disabled",!0),e.host.addClass(e.toThemeProperty("jqx-fill-state-disabled jqx-input-disabled")),e._spinButtonsContainer&&e._spinButtonsContainer.addClass(e.toThemeProperty("jqx-fill-state-disabled"))),!0===e.rtl&&e.host.add(e._spinButtonsContainer).addClass(e.toThemeProperty("jqx-complex-input-child-rtl"))},_refreshPlaceHolder:function(e){var t=this;"placeholder"in t.element?t.host.attr("placeHolder",t.placeHolder):""!==t.element.value&&t.element.value!==e||(t.element.value=t.placeHolder)},_setSize:function(){function t(){var t=n.baseHost.height(),o=parseInt(n.host.css("border-left-width"),10)+parseInt(n.host.css("border-right-width"),10)+parseInt(n.host.css("padding-left"),10)+parseInt(n.host.css("padding-right"),10),r=0;if(e.jqx.browser.msie&&e.jqx.browser.version<8&&(r=o,n.host.height(n.baseHost.height()-2*(parseInt(n.host.css("border-top-width"),10)+parseInt(n.host.css("border-bottom-width"),10)+parseInt(n.host.css("padding-top"),10)+parseInt(n.host.css("padding-bottom"),10)))),n._spinButtonsContainer){var a="string"==typeof n.width&&"%"===n.width.charAt(n.width.length-1)?1:0;n.host.width(n.baseHost.width()-o-n._spinButtonsContainer.outerWidth()-r-a),e.jqx.browser.msie&&e.jqx.browser.version<8&&n._spinButtonsContainer.height(t-2*(parseInt(n._spinButtonsContainer.css("border-top-width"),10)+parseInt(n._spinButtonsContainer.css("border-bottom-width"),10)+parseInt(n._spinButtonsContainer.css("padding-top"),10)+parseInt(n._spinButtonsContainer.css("padding-bottom"),10)))}else n.host.width(n.baseHost.width()-o-r)}var n=this;n.baseHost?(n.baseHost.width(n.width),n.baseHost.height(n.height),t()):(n.host.width(n.width),n.host.height(n.height)),e.jqx.browser.msie&&e.jqx.browser.version<9&&n.host.css("line-height",n.host.height()+"px");var o=n.baseHost||n.host;e.jqx.utilities.resize(o,function(){t(),(e.jqx.browser.msie&&e.jqx.browser.version<9||!e.jqx.browser.msie)&&"string"==typeof n.height&&"%"===n.height.charAt(n.height.length-1)&&n.host.css("line-height",n.host.height()+"px")})},_addHandlers:function(){var t,n=this;t=n.baseHost?n.baseHost[0].id:n.element.id;var o=[8,9,13,32,35,36,37,38,39,40,46];if(n.addHandler(n.host,"focus.jqxComplexInput"+t,function(){if(n.host.addClass(n.toThemeProperty("jqx-fill-state-focus")),n._spinButtonsContainer&&n._spinButtonsContainer.addClass(n.toThemeProperty("jqx-fill-state-focus")),"placeholder"in n.element||n.element.value!==n.placeHolder||(n.element.value=""),"default"!==n.decimalNotation){var e=n._getCaretPosition();n.element.value=n._currentNumber.value,n._setCaretPosition(e)}}),n.addHandler(n.host,"blur.jqxComplexInput"+t,function(){n.host.removeClass(n.toThemeProperty("jqx-fill-state-focus")),n._spinButtonsContainer&&n._spinButtonsContainer.removeClass(n.toThemeProperty("jqx-fill-state-focus")),(n.element.value!==n.value||"placeholder"in n.element||!("placeholder"in n.element)&&""===n.element.value)&&n._onChange(n.value),"placeholder"in n.element||""!==n.element.value&&n.element.value!==n.placeHolder||(n.element.value=n.placeHolder),"default"!==n.decimalNotation&&n._setNotation()}),n.addHandler(n.host,"keydown.jqxComplexInput"+t,function(e){var t=e.charCode?e.charCode:e.which;if(n.changeType="keyboard",!0!==e.ctrlKey||67!==t&&86!==t&&88!==t){var r=String.fromCharCode(t);if(t>=96&&t<=105&&(r=(t-96).toString(),t-=48),(!n._firefox&&187===t||n._firefox&&61===t)&&!0===e.shiftKey?r="+":(!n._firefox&&189===t||n._firefox&&173===t)&&!1===e.shiftKey?r="-":190===t&&!1===e.shiftKey&&(r="."),!0!==n._allowedCharacters.test(r))return-1!==o.indexOf(t)&&void 0;if("+"===r||"-"===r){if((n.element.value.match(/-/g)||[]).length+(n.element.value.match(/\+/g)||[]).length>1)return!1}else if("."===r){if((n.element.value.match(/\./g)||[]).length>1)return!1}else if("i"===r.toLowerCase()&&-1!==n.element.value.indexOf(r.toLowerCase()))return!1}}),n.addHandler(n.host,"keypress.jqxComplexInput"+t,function(e){13===(e.charCode?e.charCode:e.which)&&n.element.value!==n.value&&n._onChange(n.value)}),n._spinButtonsContainer){var r=n._upbutton.add(n._downbutton);n.addHandler(n._upbutton,"mousedown.jqxComplexInputSpinButtonUp"+t,function(){n.disabled||""===n.value||null===n.value||(n._upbutton.addClass(n.toThemeProperty("jqx-fill-state-pressed")),n.changeType="mouse",n._incrementOrDecrement(!0))}),n.addHandler(n._upbutton,"mouseup.jqxComplexInputSpinButtonUp"+t,function(){n.disabled||""===n.value||null===n.value||n._upbutton.removeClass(n.toThemeProperty("jqx-fill-state-pressed"))}),n.addHandler(n._downbutton,"mousedown.jqxComplexInputSpinButtonDown"+t,function(){n.disabled||""===n.value||null===n.value||(n._downbutton.addClass(n.toThemeProperty("jqx-fill-state-pressed")),n.changeType="mouse",n._incrementOrDecrement(!1))}),n.addHandler(n._downbutton,"mouseup.jqxComplexInputSpinButtonDown"+t,function(){n.disabled||""===n.value||null===n.value||n._downbutton.removeClass(n.toThemeProperty("jqx-fill-state-pressed"))}),n.addHandler(r,"mouseenter.jqxComplexInputSpinButtons"+t,function(t){if(!n.disabled&&""!==n.value&&null!==n.value){var o=e(t.target);o.hasClass("jqx-icon-arrow-up")||o.children().hasClass("jqx-icon-arrow-up")?(n._upbutton.addClass(n.toThemeProperty("jqx-fill-state-hover")),n._upArrow.addClass(n.toThemeProperty("jqx-icon-arrow-up-hover"))):(n._downbutton.addClass(n.toThemeProperty("jqx-fill-state-hover")),n._downArrow.addClass(n.toThemeProperty("jqx-icon-arrow-down-hover")))}}),n.addHandler(r,"mouseleave.jqxComplexInputSpinButtons"+t,function(t){if(!n.disabled&&""!==n.value&&null!==n.value){var o=e(t.target);o.hasClass("jqx-icon-arrow-up")||o.children().hasClass("jqx-icon-arrow-up")?(n._upbutton.removeClass(n.toThemeProperty("jqx-fill-state-hover")),n._upArrow.removeClass(n.toThemeProperty("jqx-icon-arrow-up-hover"))):(n._downbutton.removeClass(n.toThemeProperty("jqx-fill-state-hover")),n._downArrow.removeClass(n.toThemeProperty("jqx-icon-arrow-down-hover")))}}),n.addHandler(e("body"),"mouseup.jqxComplexInputSpinButtons"+t,function(){n._upbutton.add(n._downbutton).removeClass(n.toThemeProperty("jqx-fill-state-pressed"))})}},_removeHandlers:function(){var t,n=this;if(t=n.baseHost?n.baseHost[0].id:n.element.id,n.removeHandler(n.host,"focus.jqxComplexInput"+t),n.removeHandler(n.host,"blur.jqxComplexInput"+t),n.removeHandler(n.host,"keydown.jqxComplexInput"+t),n.removeHandler(n.host,"keypress.jqxComplexInput"+t),n._spinButtonsContainer){var o=n._upbutton.add(n._downbutton);n.removeHandler(n._upbutton,"mousedown.jqxComplexInputSpinButtonUp"+t),n.removeHandler(n._upbutton,"mouseup.jqxComplexInputSpinButtonUp"+t),n.removeHandler(n._downbutton,"mousedown.jqxComplexInputSpinButtonDown"+t),n.removeHandler(n._downbutton,"mouseup.jqxComplexInputSpinButtonDown"+t),n.removeHandler(o,"mouseenter.jqxComplexInputSpinButtons"+t),n.removeHandler(o,"mouseleave.jqxComplexInputSpinButtons"+t),n.removeHandler(e("body"),"mouseup.jqxComplexInputSpinButtons"+t)}},_onChange:function(t){var n,o,r=this,a=r.element.value.toLowerCase();if(""!==e.trim(a)&&e.trim(a)!==r.placeHolder){if(-1!==a.indexOf("++")||-1!==a.indexOf("+-")){var s=a.indexOf("+");a=a.slice(0,s+1)+""+a.slice(s+2,a.length)}else if(-1!==a.indexOf("--")||-1!==a.indexOf("-+")){var i=a.indexOf("-");a=a.slice(0,i+1)+""+a.slice(i+2,a.length)}if(-1!==a.indexOf("..")){var l=a.indexOf(".");a=a.slice(0,l+1)+""+a.slice(l+2,a.length)}var u=r._getReal(a),d=r._getImaginary(a),p=d>=0?"+":"-";if(n=u,o=d,isNaN(n)||isNaN(o))return void(r.element.value=t);r.element.value=u+" "+p+" "+Math.abs(d)+"i",r.value=r.element.value}else n=0,o=0,r.value="";r.value!==t&&(r._currentNumber={value:r.value,realPart:n,imaginaryPart:o},r._raiseEvent("0",{value:r.value,oldValue:t,realPart:n,imaginaryPart:o}))},_incrementOrDecrement:function(e){function t(t){var n,o,a,s=t.toString(),i=s.indexOf(".");return-1!==i?(o=parseInt(s.slice(0,i),10),a=s.slice(s.indexOf(".")+1),n="."):(o=t,a="",n=""),t=!0===e?o+r.spinButtonsStep:o-r.spinButtonsStep,t=parseFloat(t+""+n+a)}var n,o,r=this,a=r.host.is(":focus"),s=r.element.value,i=r._currentNumber.realPart,l=r._currentNumber.imaginaryPart;a&&(n=r._getCaretPosition()),l>=0?o=s.indexOf("+"):("-"===s.charAt(0)&&(s=s.slice(1,s.length)),o=s.indexOf("-")),void 0===n||n<=o?i=t(i):l=t(l);var u=i+" "+(l>=0?"+":"-")+" "+Math.abs(l)+"i";r.element.value=u,r._onChange(r.value),a?r._setCaretPosition(n):"default"!==r.decimalNotation&&r._setNotation()},_getCaretPosition:function(){var e=this.element;if("selectionStart"in e)return e.selectionStart;if(document.selection){e.focus();var t=document.selection.createRange(),n=document.selection.createRange().text.length;return t.moveStart("character",-e.value.length),t.text.length-n}},_setCaretPosition:function(e){var t=this.element;setTimeout(function(){if("selectionStart"in t)t.focus(),t.setSelectionRange(e,e);else{var n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()}},10)},_exponentialToDecimal:function(t){var n=t.indexOf("e")+2,o=t.slice(n),r=o.indexOf("+"),a=o.indexOf("-");n=-1!==r&&(r<a||-1===a)?r:a;var s=o.slice(n),i=t.replace(s,""),l=(s=s.slice(0,s.length-1)).charAt(0);return s=e.trim(s.slice(1)),"-"===l&&(s="-"+s),i=1*parseFloat(i).toFixed(20),s=1*parseFloat(s).toFixed(20),{realPart:i,imaginaryPart:s}},_setNotation:function(){var e=this,t=e.getDecimalNotation(e._currentNumber.realPart,e.decimalNotation),n=e.getDecimalNotation(Math.abs(e._currentNumber.imaginaryPart),e.decimalNotation),o=e._currentNumber.imaginaryPart>=0?"+":"-";e.element.value=t+" "+o+" "+n+"i"},_toSuperScript:function(e,t){for(var n="⁻⁰¹²³⁴⁵⁶⁷⁸⁹",o="",r=0;r<e.length;r++)if(!0===t){var a=n.indexOf(e.charAt(r));o+=-1!==a?"-0123456789"[a]:e[r]}else{var s="-0123456789".indexOf(e.charAt(r));o+=-1!==s?n[s]:e[r]}return o}})}(jqxBaseFramework);

