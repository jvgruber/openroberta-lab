define(["require","exports","message","log","jquery","blockly","interpreter.util","guiState.controller","jquery-validate","bootstrap"],(function(e,t,i,o,n,r,a,s){Object.defineProperty(t,"__esModule",{value:!0}),t.toFixedPrecision=t.closeSimRobotWindow=t.openSimRobotWindow=t.removeLinks=t.annotateBlocks=t.clearAnnotations=t.clearTabAlert=t.alertTab=t.isLocalStorageAvailable=t.countBlocks=t.getHashFrom=t.download=t.getBasename=t.sgn=t.round=t.response=t.showMsgOnTop=t.showSingleListModal=t.showSingleModal=t.setFocusOnElement=t.checkVisibility=t.calcDataTableHeight=t.formatResultLog=t.parseDate=t.formatDate=t.setObjectProperty=t.getPropertyFromObject=t.isEmpty=t.clone=t.base64decode=t.renameNeuron=t.getAllBlocks=t.getTheStartBlock=t.getRobotGroupsPrettyPrint=t.cleanUri=t.RGBAToHexA=t.addVariableValue=t.extendMouseEvent=t.getWebAudio=t.initMicrophone=t.isWebBleSupported=t.isWebUsbSupported=t.isChromeOS=t.isWindowsOS=t.isChromium=t.isEdge=t.isIE=t.checkInCircle=t.isMobile=t.arrayToCsv=t.csvToArray=t.activationDisplayName=t.getLinesFromRectangle=void 0;var l=750;function d(){return r.Workspace.getByContainer("blocklyDiv").getAllBlocks()}t.getLinesFromRectangle=function(e){return[{x1:e.x,x2:e.x,y1:e.y,y2:e.y+e.h},{x1:e.x,x2:e.x+e.w,y1:e.y,y2:e.y},{x1:e.x+e.w,x2:e.x,y1:e.y+e.h,y2:e.y+e.h},{x1:e.x+e.w,x2:e.x+e.w,y1:e.y+e.h,y2:e.y}]},t.getTheStartBlock=function(){for(var e=0,t=r.Workspace.getByContainer("blocklyDiv").getTopBlocks();e<t.length;e++){var i=t[e];if(!i.isDeletable())return i}throw"start block not found. That is impossible."},t.getAllBlocks=d,t.renameNeuron=function(e,t){for(var i=d(),o=0;o<i.length;o++){var n=i[o];if(n.dependNeuron){var a=("function"==typeof n.dependNeuron?n.dependNeuron():n.dependNeuron).dropDown;Array.isArray(a)||(a=[a]);for(var s=0;s<a.length;s++){for(var l=-1,c=0;c<a[s].menuGenerator_.length;c++)if(a[s].menuGenerator_[c][1]===e){l=c;break}l>=0?(a[s].menuGenerator_[l][0]=t,a[s].menuGenerator_[l][1]=t,a[s].value_===e&&a[s].setValue(t)):(a[s].menuGenerator_.push([t,t]),a[s].arrow_&&a[s].arrow_.replaceChild(document.createTextNode(a[s].sourceBlock_.RTL?r.FieldDropdown.ARROW_CHAR+" ":" "+r.FieldDropdown.ARROW_CHAR),a[s].arrow_.childNodes[0]),a[s].render_())}n.render()}}},t.activationDisplayName={linear:"Linear",relu:"ReLU",tanh:"Tanh",sigmoid:"Sigmoid",bool:"Bool(0,1)"};t.csvToArray=function(e,t,i){return void 0===t&&(t=";"),void 0===i&&(i=!1),e.slice(i?e.indexOf("\n")+1:0).split("\n").filter((function(e){return 0!==e.length})).map((function(e){return e.split(t)}))};t.arrayToCsv=function(e,t){return void 0===t&&(t=";"),e.map((function(e){return e.join(t)})).join("\n")};var c=1,u=[];function g(e){var t="{",i=!1;for(var o in e)i?t+=",":i=!0,t+='"'+o+'":',e.hasOwnProperty(o)&&(e[o].length>100?t+='"'+JSON.stringify(e[o]).substring(1,100)+' ..."':t+=JSON.stringify(e[o]));return t+="}"}function h(e){setTimeout((function(){1==e.is(":visible")&&e.focus()}),800)}function f(e,t){return parseFloat(e.toFixed(t))}function v(e){document.body.removeChild(e.target)}function m(e){n("#"+e).children().remove(".typcn"),n("#"+e).removeClass("blinking")}t.base64decode=function(e){for(var t=atob(e),i=new Array(t.length),o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return new Uint8Array(i)},t.clone=function e(t){var i;if(null==t||"object"!=typeof t)return t;if(t instanceof Date)return(i=new Date).setTime(t.getTime()),i;if(t instanceof Array){i=[];for(var o=0,n=t.length;o<n;o++)i[o]=e(t[o]);return i}if(t instanceof Object){for(var r in i={},t)t.hasOwnProperty(r)&&(i[r]=e(t[r]));return i}throw new Error("Unable to copy obj! Its type isn't supported.")},t.isEmpty=function(e){return 0===Object.keys(e).length&&e.constructor===Object},t.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},t.getPropertyFromObject=function e(t,i,o){if(void 0===t)return!1;var n=i.indexOf(".");return n>-1?e(t[i.substring(0,n)],i.substr(n+1),o):null!=o?t[i][o]:t[i]},t.setObjectProperty=function e(t,i,o,n){if(void 0===t)return!1;var r=i.indexOf(".");return r>-1?e(t[i.substring(0,r)],i.substr(r+1),o,n):null!=n?t[i][n]=o:void(t[i]=o)},t.formatDate=function(e){if(e){var t=new Date(e);return("0"+t.getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2)+"."+t.getFullYear()+", "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)}return""},t.parseDate=function(e){if(e){var t=e.split(", ")[0],i=e.split(", ")[1],o=t.split(".")[0],n=t.split(".")[1]-1,r=t.split(".")[2],a=i.split(":")[0],s=i.split(":")[1],l=i.split(":")[2],d=i.split(".")[1];return new Date(r,n,o,a,s,l,d).getTime()}return 0},t.formatResultLog=g,t.calcDataTableHeight=function(){return Math.round(n(window).height()-100)},t.checkVisibility=function(){var e,t,i={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(e in i)if(e in document){t=i[e];break}return function(i){return i&&document.addEventListener(t,i),!document[e]}},t.setFocusOnElement=h,t.showSingleModal=function(e,t,i,o){e(),n("#single-modal-form").onWrap("submit",(function(e){e.preventDefault(),t()}),"sim start clicked"),n("#single-modal").onWrap("hidden.bs.modal",(function(){n("#single-modal-form").off("submit"),n("#singleModalInput").val(""),n("#single-modal-form").validate().resetForm(),i()}),"sim start clicked"),n("#single-modal-form").removeData("validator"),n("#single-modal-form").validate(o),h(n("#singleModalInput")),n("#single-modal").modal("show")},t.showSingleListModal=function(e,t,i,o){n("#single-modal-list-form").onWrap("submit",(function(e){e.preventDefault(),t()}),"sim start clicked"),n("#single-modal-list").onWrap("hidden.bs.modal",(function(){n("#single-modal-list-form").unbind("submit"),i()}),"sim start clicked"),h(n("#singleModalListInput")),n("#single-modal-list").modal("show")},t.showMsgOnTop=function(e){n("#show-message").find("button").removeAttr("data-bs-dismiss"),n("#show-message").find("button").oneWrap("click",(function(e){n("#show-message").modal("hide"),n("#show-message").find("button").attr("data-bs-dismiss","modal")})),i.displayInformation({rc:"not ok"},"",e)},t.response=function(e){o.info("result from server: "+g(e)),"ok"!=e.rc&&i.displayMessage(e.message,"POPUP","")},t.round=f,t.sgn=function(e){return(e>0)-(e<0)},t.getBasename=function(e){var t=String(e).substring(e.lastIndexOf("/")+1);return-1!=t.lastIndexOf(".")&&(t=t.substring(0,t.lastIndexOf("."))),t},t.download=function(e,t){if("Blob"in window&&null==navigator.userAgent.toLowerCase().match(/iPad|iPhone|Android/i)){var i=new Blob([t],{type:"application/octet-stream"});if("msSaveOrOpenBlob"in navigator)navigator.msSaveOrOpenBlob(i,e);else(o=document.createElement("a")).download=e,o.innerHTML="Download File",o.href=window.URL.createObjectURL(i),o.onclick=v,o.style.display="none",document.body.appendChild(o),setTimeout((function(){o.click()}),0)}else{var o;(o=document.createElement("a")).setAttribute("href","data:text/"+e.substring(e.indexOf(".")+1)+";charset=utf-8,"+encodeURIComponent(t)),o.setAttribute("download",e),o.style.display="none",document.body.appendChild(o),o.onclick=v,setTimeout((function(){o.click()}),0)}},t.getHashFrom=function(e){for(var t=0,i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i++);return t<0?-1*t+4294967295:t},t.countBlocks=function(e){for(var t=0,i=0;-1!=(i=e.indexOf("<block",i));)t++,i+=6;return t-1},t.isLocalStorageAvailable=function(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(e){return!1}},t.alertTab=function(e){m(e),n("#"+e).width(),n("#"+e).prepend('<span class="typcn typcn-warning-outline"></span>'),n("#"+e).addClass("blinking")},t.clearTabAlert=m;var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};String.prototype.escapeHTML=function(){return String(this).replace(/[&<>"'\/]/g,(function(e){return p[e]}))},n.fn.draggable=function(e){e=n.extend({handle:"",cursor:"move",draggableClass:"draggable",activeHandleClass:"active-handle"},e);var t=null;return(""===e.handle?this:this.find(e.handle)).css("cursor",e.cursor).on("mousedown touchstart",(function(i){var o=i.pageX||i.originalEvent.touches[0].pageX,r=i.pageY||i.originalEvent.touches[0].pageY;""===e.handle?(t=n(this)).addClass(e.draggableClass):(t=n(this).parent()).addClass(e.draggableClass).find(e.handle).addClass(e.activeHandleClass);var a=t.outerHeight(),s=t.outerWidth(),l=t.offset().top+a-r,d=t.offset().left+s-o;n(document).on("mousemove touchmove",(function(i){var o=i.pageX||i.originalEvent.touches[0].pageX,r=i.pageY||i.originalEvent.touches[0].pageY,u=o+d-s,g=r+l-a;if("window"==e.constraint){u>=n(window).width()-19?u=n(window).width()-20:u<=19-t.width()&&(u=18-t.width());g>=n(window).height()-19?g=n(window).height()-20:g<=19-t.height()+92&&(g=18-t.height()+92)}if("x"==e.axis){var h=o+d-s;h=Math.min(h,n("#main-section").width()-24),h=Math.max(h,42);t.offset({top:0,left:h}),n("#blocklyDiv").outerWidth(h),n(".fromRight").css({width:n("#main-section").width()-n("#blocklyDiv").outerWidth()}),c=n("#blocklyDiv").outerWidth()/n("#main-section").width(),n(window).trigger("resize")}else t.offset({top:g,left:u});t.css({right:"auto"})})).on("mouseup touchend",(function(){n(document).off("mousemove touchmove"),null!==t&&(t.removeClass(e.draggableClass),t=null)}))})).on("mouseup touchend",(function(){t&&(""===e.handle?t.removeClass(e.draggableClass):t.removeClass(e.draggableClass).find(e.handle).removeClass(e.activeHandleClass)),t=null})),this};var b=n.fn.addClass;n.fn.addClass=function(){var e=b.apply(this,arguments);return n(this).trigger("classChange"),e};var w,y=n.fn.removeClass;function k(){for(var e=n(".simWindow:visible"),t=0,i=e;t<i.length;t++){var o,r=i[t];o=0!==n(window).width()?Math.abs(r.offsetLeft/n(window).width()%1):0,u[r.id]=o}e.addClass("simWindow-openedButHidden").animate({opacity:"hide",left:""+n(window).width()},l)}function A(){return window.navigator.userAgent.indexOf("Chrome")>-1}function C(){return null!==navigator.userAgent.toLowerCase().match(/iPad|iPhone/i)}n.fn.removeClass=function(){var e=y.apply(this,arguments);return n(this).trigger("classChange"),e},n.fn.toggleSimPopup=function(e){n(this).is(":hidden")&&n(this).css({top:e.top+n("#header").height()+12,left:e.left}),n(this).animate({opacity:"toggle",top:"toggle"},300),n(this).draggable({constraint:"window"})},n.fn.closeRightView=function(e){if(!n(".fromRight.rightActive").hasClass("shifting")){n(".fromRight.rightActive").addClass("shifting"),n(".blocklyToolboxDiv").css("display","inherit");var t=this;n(".fromRight.rightActive").animate({width:0},{duration:l,start:function(){n(".modal").modal("hide"),n(".rightMenuButton.rightActive").removeClass("rightActive")},step:function(e){n(window).trigger("resize"),t.width(n("#main-section").width()-Math.ceil(e)),c=n("#blocklyDiv").outerWidth()/n("#main-section").outerWidth()},done:function(){t.width(n("#main-section").outerWidth()),c=1,n(".fromRight").width(0),t.removeClass("rightActive"),n(".fromRight.rightActive").removeClass("rightActive"),n("#sliderDiv").hide(),n(window).trigger("resize"),"function"==typeof e&&e(),n(".fromRight").trigger("closed")},always:function(){n(".fromRight.shifting").removeClass("shifting")}})}},n.fn.openRightView=function(e,t,i){if(!n(".fromRight.rightActive").hasClass("shifting")){var o,r,a=n("#blocklyDiv");if(n(window).width()<768?(r=!0,o=a.outerWidth()-52):(r=!1,o=a.outerWidth()*t),a.hasClass("rightActive"))return n(".fromRight.rightActive").removeClass("rightActive"),n(".rightMenuButton.rightActive").removeClass("rightActive"),e.addClass("rightActive"),n(this).addClass("rightActive"),n(window).trigger("resize"),r&&n(".blocklyToolboxDiv").css("display","none"),"function"==typeof i&&i(),n(this).attr("id").startsWith("sim")||k(),void n(".fromRight").trigger("closed");a.addClass("rightActive"),e.addClass("shifting rightActive"),n(this).addClass("rightActive"),n(".fromRight.rightActive").animate({width:o},{duration:l,step:function(e,t){a.outerWidth(n("#main-section").width()-e),c=n("#blocklyDiv").outerWidth()/n("#main-section").width(),n(window).trigger("resize")},done:function(){n("#sliderDiv").show(),a.outerWidth(n("#main-section").width()-n(".fromRight.rightActive").width()),c=n("#blocklyDiv").outerWidth()/n("#main-section").width(),n(window).trigger("resize"),r&&n(".blocklyToolboxDiv").css("display","none"),n("#sliderDiv").css({left:a.outerWidth()}),"function"==typeof i&&i()},always:function(){e.removeClass("shifting")}})}},n(window).on("resize",(function(){var e=n("#main-section").width(),t=e,i=n("#main-section").height(),o=(1-c)*t,a=c*t;!n(".fromRight.rightActive.shifting").length>0?(n(".fromRight.rightActive").length>0&&(n(".fromRight.rightActive").width(o),n("#sliderDiv").css("left",a)),n("#blocklyDiv").outerWidth(a)):a=n("#blocklyDiv").outerWidth(),n("#blocklyDiv")&&(n("#blocklyDiv").outerWidth(a),n("#blocklyDiv").height(i),n(".blocklyToolboxDiv").height(n(".blocklyToolboxDiv").height()-36),a<768?n("#program .blocklyToolboxDiv").addClass("small"):n("#program .blocklyToolboxDiv").removeClass("small")),n("#bricklyDiv")&&(n("#bricklyDiv").width(t),n("#bricklyDiv").height(i),t<768?n("#configuration .blocklyToolboxDiv").addClass("small"):n("#configuration .blocklyToolboxDiv").removeClass("small"));for(var s=0,l=n(".simWindow:visible");s<l.length;s++){var d=l[s];d.offsetLeft>=n(window).width()-20&&n("#"+d.id).css({left:""+n(window).width()-20}),d.offsetTop>=n(window).height()-20&&n("#"+d.id).css({top:""+n(window).height()-20})}var u=e-n("#blocklyDiv").outerWidth()-o;0!=u&&n("#blocklyDiv").outerWidth(a+u);var g=r.getMainWorkspace();g&&r.svgResize(g)})),t.clearAnnotations=function(e){if(e&&e instanceof r.Workspace)for(var t=e.getAllBlocks(),i=0;i<t.length;i++)for(var o=t[i].getIcons(),n=0;n<o.length;n++){var a=o[n].block_;a.error?(a.error.dispose(),a.render()):a.warning&&(a.warning.dispose(),a.render())}},t.annotateBlocks=function(e,t){for(var i in t){var o=e.getBlockById(i);if(o){var n=t[i];for(var a in n){var s=r.Msg[n[a]]||n[a]||"unknown error";switch(a){case"ERROR":o.setErrorText(s),o.error.setVisible(!0);break;case"WARNING":o.setWarningText(s),o.warning.setVisible(!0);break;default:console.warn("Unsupported annotation: "+a)}}}}},t.removeLinks=function(e){e.filter((function(){return n(this).attr("href")&&(0===n(this).attr("href").indexOf("http")||0===n(this).attr("href").indexOf("javascript:linkTo"))})).each((function(){n(this).removeAttr("href")}))},t.checkInCircle=function(e,t,i,o,n){return(e-i)*(e-i)+(t-o)*(t-o)<=n*n},t.openSimRobotWindow=function(){for(var e=0,t=n(".simWindow-openedButHidden");e<t.length;e++){var i=t[e],o=n(window).width()*u[i.id];n("#"+i.id).animate({opacity:"show",left:""+o},l)}n(".simWindow").removeClass("simWindow-openedButHidden")},t.closeSimRobotWindow=k,t.isIE=function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE "),i=e.indexOf("Trident/");return t>-1||i>-1},t.isEdge=function(){return window.navigator.userAgent.indexOf("Edge")>-1},t.isChromium=A,t.isWindowsOS=function(){return-1!=navigator.userAgent.indexOf("Windows")},t.isChromeOS=function(){return-1!=navigator.userAgent.indexOf("CrOS")},t.isWebUsbSupported=function(){return A()&&!C()},t.isWebBleSupported=function(){return A()&&!C()},t.initMicrophone=function(e){navigator.mediaDevices.getUserMedia=navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;try{navigator.mediaDevices.getUserMedia({audio:{mandatory:{googEchoCancellation:"false",googAutoGainControl:"false",googNoiseSuppression:"false",googHighpassFilter:"false"},optional:[]}}).then((function(t){var i=e.webAudio.context.createMediaStreamSource(t);e.sound=Volume.createAudioMeter(e.webAudio.context),i.connect(e.sound)}),(function(){console.log("Sorry, but there is no microphone available on your system")}))}catch(e){console.log("Sorry, but there is no microphone available on your system")}},t.getWebAudio=function(){if(!w){w={};var e=window.AudioContext||window.webkitAudioContext||!1;e?w.context=new e:(w.context=null,w.oscillator=null,console.log("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox"))}return w},t.extendMouseEvent=function(e,t,i){var o=e.clientX||e.originalEvent.touches[0].pageX,n=e.clientY||e.originalEvent.touches[0].pageY,r=i.offset().top,a=i.offset().left;e.startX=(o-a)/t,e.startY=(n-r)/t},t.toFixedPrecision=function(e,t){var i=Math.pow(10,t||0);return String(Math.round(e*i)/i)},t.addVariableValue=function e(t,i,o){if(void 0!==o)switch(typeof o){case"number":t.append("<div><label>"+i+" :  </label><span> "+f(o,2)+"</span></div>");break;case"string":case"boolean":t.append("<div><label>"+i+" :  </label><span> "+o+"</span></div>");break;case"object":if(null===o)t.append("<div><label>"+i+" :  </label><span> null </span></div>");else for(var n=0;n<o.length;n++)e(t,i+" ["+String(n)+"]",o[n]);break;default:a.warn("unexpected variable type received")}},t.RGBAToHexA=function(e){var t=(+e[0]).toString(16),i=(+e[1]).toString(16),o=(+e[2]).toString(16),n=(+e[3]).toString(16);return 1==t.length&&(t="0"+t),1==i.length&&(i="0"+i),1==o.length&&(o="0"+o),1==n.length&&(n="0"+n),"#"+t+i+o+n},t.cleanUri=function(){var e=new URL(document.location),t=e.protocol+"//"+e.host;window.history.replaceState({},document.title,t)},t.getRobotGroupsPrettyPrint=function(e){var t=s.getRobots(),i={},o=function(e,t){return"arduino"===t?"Nepo4Arduino":"ev3"===t?"Ev3":s.getMenuRobotRealName(e)};if(e)return o(e,e);for(var n in t){var r=t[n].group,a=t[n].name;r&&!i[r]&&(i[r]=o(a,r))}return i}}));
//# sourceMappingURL=util.js.map
//# sourceMappingURL=util.js.map
