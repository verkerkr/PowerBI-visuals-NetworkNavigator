!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("jQuery"),require("React"),require("ReactDOM"));else if("function"==typeof define&&define.amd)define(["jQuery","React","ReactDOM"],t);else{var n="object"==typeof exports?t(require("jQuery"),require("React"),require("ReactDOM")):t(e.jQuery,e.React,e.ReactDOM);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=n(4),i=n(5),a=n(1),l=n(3),s=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.componentDidMount=function(){this.node=i.findDOMNode(this),this.documentViewer=new l.DocumentViewer(a(this.node)),this.renderContent()},t.prototype.componentWillReceiveProps=function(e){this.renderContent(e)},t.prototype.render=function(){return o.createElement("div",{style:{width:"100%",height:"100%"}})},t.prototype.renderContent=function(e){e=e||this.props,this.documentViewer.data=e.data},t}(o.Component);t.DocumentViewer=s},function(t,n){t.exports=e},function(e,t,n){var r;!function(o){"use strict";var i="undefined"==typeof window?null:window;0?"undefined"!=typeof e?e.exports=o(i):i.DOMPurify=o(i):(r=function(){return o(i)}.call(t,n,t,e),!(void 0!==r&&(e.exports=r)))}(function o(e){"use strict";var t=function(e){return o(e)};if(t.version="0.7.3",!e||!e.document||9!==e.document.nodeType)return t.isSupported=!1,t;var n=e.document,r=n,i=e.DocumentFragment,a=e.HTMLTemplateElement,l=e.NodeFilter,s=e.NamedNodeMap||e.MozNamedAttrMap,c=e.Text,u=e.Comment,d=e.DOMParser;"function"==typeof a&&(n=n.createElement("template").content.ownerDocument);var p=n.implementation,m=n.createNodeIterator,f=n.getElementsByTagName,h=n.createDocumentFragment,y=r.importNode,g={};t.isSupported="undefined"!=typeof p.createHTMLDocument&&9!==n.documentMode;var v=function(e,t){for(var n=t.length;n--;)e[t[n]]=!0;return e},b=function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},x=null,T=v({},["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","svg","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","switch","symbol","text","textpath","title","tref","tspan","view","vkern","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","#text"]),k=null,A=v({},["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns","accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mode","min","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","surfacescale","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","y","y1","y2","z","zoomandpan","accent","accentunder","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","display","displaystyle","fence","frame","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),w=null,E=null,M=!0,D=!1,O=!1,R=/\{\{.*|.*\}\}/gm,N=/<%.*|.*%>/gm,S=!1,_=!1,L=!1,C=!1,z=!0,F=!0,H=v({},["audio","head","math","script","style","svg","video"]),j=v({},["audio","video","img","source"]),q=null,B=n.createElement("form"),I=function(e){"object"!=typeof e&&(e={}),x="ALLOWED_TAGS"in e?v({},e.ALLOWED_TAGS):T,k="ALLOWED_ATTR"in e?v({},e.ALLOWED_ATTR):A,w="FORBID_TAGS"in e?v({},e.FORBID_TAGS):{},E="FORBID_ATTR"in e?v({},e.FORBID_ATTR):{},M=e.ALLOW_DATA_ATTR!==!1,D=e.SAFE_FOR_JQUERY||!1,O=e.SAFE_FOR_TEMPLATES||!1,S=e.WHOLE_DOCUMENT||!1,_=e.RETURN_DOM||!1,L=e.RETURN_DOM_FRAGMENT||!1,C=e.RETURN_DOM_IMPORT||!1,z=e.SANITIZE_DOM!==!1,F=e.KEEP_CONTENT!==!1,L&&(_=!0),e.ADD_TAGS&&(x===T&&(x=b(x)),v(x,e.ADD_TAGS)),e.ADD_ATTR&&(k===A&&(k=b(k)),v(k,e.ADD_ATTR)),F&&(x["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(e),q=e},G=function(e){try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},P=function(e){var t,n;try{t=(new d).parseFromString(e,"text/html")}catch(r){}return t||(t=p.createHTMLDocument(""),n=t.body,n.parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=e),"function"==typeof t.getElementsByTagName?t.getElementsByTagName(S?"html":"body")[0]:f.call(t,S?"html":"body")[0]},W=function(e){return m.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,function(){return l.FILTER_ACCEPT},!1)},V=function(e){return e instanceof c||e instanceof u?!1:!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof s&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},Q=function(e){if(Z("beforeSanitizeElements",e,null),V(e))return G(e),!0;var t=e.nodeName.toLowerCase();if(Z("uponSanitizeElement",e,{tagName:t}),!x[t]||w[t]){if(F&&!H[t]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(n){}return G(e),!0}if(!D||e.firstElementChild||e.content&&e.content.firstElementChild||(e.innerHTML=e.textContent.replace(/</g,"&lt;")),O&&3===e.nodeType){var r=e.textContent;r=r.replace(R," "),r=r.replace(N," "),e.textContent=r}return Z("afterSanitizeElements",e,null),!1},U=/^data-[\w.\u00B7-\uFFFF-]/,J=/^(?:\w+script|data):/i,Y=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,K=function(t){Z("beforeSanitizeAttributes",t,null);var r=t.attributes;if(r){for(var o,i,a,l,s,c={attrName:"",attrValue:"",keepAttr:!0},u=r.length;u--;)if(o=r[u],i=o.name,a=o.value,l=i.toLowerCase(),c.attrName=l,c.attrValue=a,c.keepAttr=!0,Z("uponSanitizeAttribute",t,c),a=c.attrValue,"name"===l&&"IMG"===t.nodeName&&r.id?(s=r.id,r=Array.prototype.slice.apply(r),t.removeAttribute("id"),t.removeAttribute(i),r.indexOf(s)>u&&t.setAttribute("id",s.value)):("id"===i&&t.setAttribute(i,""),t.removeAttribute(i)),c.keepAttr&&(!z||"id"!==l&&"name"!==l||!(a in e||a in n||a in B))&&(k[l]&&!E[l]||!O&&M&&U.test(l))&&(!J.test(a.replace(Y,""))||"src"===l&&0===a.indexOf("data:")&&j[t.nodeName.toLowerCase()]))try{O&&(a=a.replace(R," "),a=a.replace(N," ")),t.setAttribute(i,a)}catch(d){}Z("afterSanitizeAttributes",t,null)}},X=function $(e){var t,n=W(e);for(Z("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)Z("uponSanitizeShadowNode",t,null),Q(t)||(t.content instanceof i&&$(t.content),K(t));Z("afterSanitizeShadowDOM",e,null)},Z=function(e,n,r){g[e]&&g[e].forEach(function(e){e.call(t,n,r,q)})};return t.sanitize=function(n,o){if(n||(n=""),"string"!=typeof n&&(n=n.toString()),!t.isSupported)return"object"==typeof e.toStaticHTML||"function"==typeof e.toStaticHTML?e.toStaticHTML(n):n;if(I(o),!_&&!S&&n.indexOf("<")===-1)return n;var a=P(n);if(!a)return _?null:"";for(var l,s,c=W(a);l=c.nextNode();)3===l.nodeType&&l===s||Q(l)||(l.content instanceof i&&X(l.content),K(l),s=l);var u;if(_){if(L)for(u=h.call(a.ownerDocument);a.firstChild;)u.appendChild(a.firstChild);else u=a;return C&&(u=y.call(r,u,!0)),u}return S?a.outerHTML:a.innerHTML},t.addHook=function(e,t){"function"==typeof t&&(g[e]=g[e]||[],g[e].push(t))},t.removeHook=function(e){g[e]&&g[e].pop()},t.removeHooks=function(e){g[e]&&(g[e]=[])},t.removeAllHooks=function(){g=[]},t})},function(e,t,n){"use strict";var r=n(2),o=n(1),i=function(){function e(t){this.element=o(e.template),this.tableElement=this.element.find(".table"),t.append(this.element)}return Object.defineProperty(e.prototype,"data",{set:function(e){this.tableElement.empty();var t;if(1===e.length){var n=e.map(function(e){var t=o('\n                    <div class="document">\n                    </div>\n                '.trim());return t.append(e.items.map(function(e){var t=o('\n                            <div>\n                                <div class="column-label">'+e.name+':&nbsp;</div>\n                                <div class="contents '+(e.type.html?"html":"text")+'"></div>\n                            </div>\n                        '),n=t.find(".contents");return e.type.html?n.append("<div>"+r.sanitize(e.value,{SAFE_FOR_JQUERY:!0})+"</div>"):n.text(e.value),t})),t});this.tableElement.append(n)}else t=e.length>1?"Too many documents, please limit the number of documents to a single document.":"No Results";this.tableElement.toggle(!t),this.element.find(".error").text(t||"").toggle(!!t)},enumerable:!0,configurable:!0}),e.template='\n        <div>\n            <div class="table"></div>\n            <div class="error"></div>\n        </div>\n    '.trim(),e}();t.DocumentViewer=i},function(e,n){e.exports=t},function(e,t){e.exports=n}])});