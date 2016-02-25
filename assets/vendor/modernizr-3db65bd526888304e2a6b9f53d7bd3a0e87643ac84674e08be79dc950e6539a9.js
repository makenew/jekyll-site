/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(n,e,s){function o(n,e){return typeof n===e}function a(){var n,e,s,a,t,l,c;for(var u in i)if(i.hasOwnProperty(u)){if(n=[],e=i[u],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(a=o(e.fn,"function")?e.fn():e.fn,t=0;t<n.length;t++)l=n[t],c=l.split("."),1===c.length?f[c[0]]=a:(!f[c[0]]||f[c[0]]instanceof Boolean||(f[c[0]]=new Boolean(f[c[0]])),f[c[0]][c[1]]=a),r.push((a?"":"no-")+c.join("-"))}}function t(n){var e=c.className,s=f._config.classPrefix||"";if(u&&(e=e.baseVal),f._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}f._config.enableClasses&&(e+=" "+s+n.join(" "+s),u?c.className.baseVal=e:c.className=e)}var i=[],l={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){i.push({name:n,fn:e,options:s})},addAsyncTest:function(n){i.push({name:null,fn:n})}},f=function(){};f.prototype=l,f=new f;var r=[],c=e.documentElement,u="svg"===c.nodeName.toLowerCase();a(),t(r),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<f._q.length;p++)f._q[p]();n.Modernizr=f}(window,document);