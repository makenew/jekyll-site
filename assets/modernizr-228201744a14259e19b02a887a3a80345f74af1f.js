/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-contains-search-target-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,r,c;for(var u in i)if(i.hasOwnProperty(u)){if(e=[],n=i[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)r=e[a],c=r.split("."),1===c.length?Modernizr[c[0]]=s:(!Modernizr[c[0]]||Modernizr[c[0]]instanceof Boolean||(Modernizr[c[0]]=new Boolean(Modernizr[c[0]])),Modernizr[c[0]][c[1]]=s),l.push((s?"":"no-")+c.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(f&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),f?u.className.baseVal=n:u.className=n)}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):f?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var i=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){i.push({name:e,fn:n,options:t})},addAsyncTest:function(e){i.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var l=[],u=n.documentElement,f="svg"===u.nodeName.toLowerCase(),d=function(){function e(e,n){var s;return e?(n&&"string"!=typeof n||(n=r(n||"div")),e="on"+e,s=e in n,!s&&o&&(n.setAttribute||(n=r("div")),n.setAttribute(e,""),s="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),s):!1}var o=!("onblur"in n.documentElement);return e}();c.hasEvent=d,Modernizr.addTest("inputsearchevent",d("search")),Modernizr.addTest("target",function(){var n=e.document;if(!("querySelectorAll"in n))return!1;try{return n.querySelectorAll(":target"),!0}catch(t){return!1}}),Modernizr.addTest("contains",o(String.prototype.contains,"function")),s(),a(l),delete c.addTest,delete c.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);