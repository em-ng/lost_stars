!function(){var t={9662:function(t,e,n){var i=n(7854),r=n(614),o=n(6330),s=i.TypeError;t.exports=function(t){if(r(t))return t;throw s(o(t)+" is not a function")}},1223:function(t,e,n){var i=n(5112),r=n(30),o=n(3070),s=i("unscopables"),a=Array.prototype;null==a[s]&&o.f(a,s,{configurable:!0,value:r(null)}),t.exports=function(t){a[s][t]=!0}},9670:function(t,e,n){var i=n(7854),r=n(111),o=i.String,s=i.TypeError;t.exports=function(t){if(r(t))return t;throw s(o(t)+" is not an object")}},1285:function(t,e,n){"use strict";var i=n(7908),r=n(1400),o=n(6244);t.exports=function(t){for(var e=i(this),n=o(e),s=arguments.length,a=r(s>1?arguments[1]:void 0,n),c=s>2?arguments[2]:void 0,u=void 0===c?n:r(c,n);u>a;)e[a++]=t;return e}},8533:function(t,e,n){"use strict";var i=n(2092).forEach,r=n(9341)("forEach");t.exports=r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,e,n){var i=n(5656),r=n(1400),o=n(6244),s=function(t){return function(e,n,s){var a,c=i(e),u=o(c),f=r(s,u);if(t&&n!=n){for(;u>f;)if((a=c[f++])!=a)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},2092:function(t,e,n){var i=n(9974),r=n(1702),o=n(8361),s=n(7908),a=n(6244),c=n(5417),u=r([].push),f=function(t){var e=1==t,n=2==t,r=3==t,f=4==t,p=6==t,h=7==t,l=5==t||p;return function(v,y,d,m){for(var g,x,b=s(v),w=o(b),S=i(y,d),O=a(w),j=0,E=m||c,k=e?E(v,O):n||h?E(v,0):void 0;O>j;j++)if((l||j in w)&&(x=S(g=w[j],j,b),t))if(e)k[j]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:u(k,g)}else switch(t){case 4:return!1;case 7:u(k,g)}return p?-1:r||f?f:k}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},1194:function(t,e,n){var i=n(7293),r=n(5112),o=n(7392),s=r("species");t.exports=function(t){return o>=51||!i((function(){var e=[];return(e.constructor={})[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:function(t,e,n){"use strict";var i=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},7475:function(t,e,n){var i=n(7854),r=n(3157),o=n(4411),s=n(111),a=n(5112)("species"),c=i.Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,(o(e)&&(e===c||r(e.prototype))||s(e)&&null===(e=e[a]))&&(e=void 0)),void 0===e?c:e}},5417:function(t,e,n){var i=n(7475);t.exports=function(t,e){return new(i(t))(0===e?0:e)}},4326:function(t,e,n){var i=n(1702),r=i({}.toString),o=i("".slice);t.exports=function(t){return o(r(t),8,-1)}},648:function(t,e,n){var i=n(7854),r=n(1694),o=n(614),s=n(4326),a=n(5112)("toStringTag"),c=i.Object,u="Arguments"==s(function(){return arguments}());t.exports=r?s:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=c(t),a))?n:u?s(e):"Object"==(i=s(e))&&o(e.callee)?"Arguments":i}},9920:function(t,e,n){var i=n(2597),r=n(3887),o=n(1236),s=n(3070);t.exports=function(t,e){for(var n=r(e),a=s.f,c=o.f,u=0;u<n.length;u++){var f=n[u];i(t,f)||a(t,f,c(e,f))}}},8880:function(t,e,n){var i=n(9781),r=n(3070),o=n(9114);t.exports=i?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,n){"use strict";var i=n(4948),r=n(3070),o=n(9114);t.exports=function(t,e,n){var s=i(e);s in t?r.f(t,s,o(0,n)):t[s]=n}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var i=n(7854),r=n(111),o=i.document,s=r(o)&&r(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,e,n){var i=n(317)("span").classList,r=i&&i.constructor&&i.constructor.prototype;t.exports=r===Object.prototype?void 0:r},8113:function(t,e,n){var i=n(5005);t.exports=i("navigator","userAgent")||""},7392:function(t,e,n){var i,r,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,f=u&&u.v8;f&&(r=(i=f.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&s&&(!(i=s.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=s.match(/Chrome\/(\d+)/))&&(r=+i[1]),t.exports=r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var i=n(7854),r=n(1236).f,o=n(8880),s=n(1320),a=n(3505),c=n(9920),u=n(4705);t.exports=function(t,e){var n,f,p,h,l,v=t.target,y=t.global,d=t.stat;if(n=y?i:d?i[v]||a(v,{}):(i[v]||{}).prototype)for(f in e){if(h=e[f],p=t.noTargetGet?(l=r(n,f))&&l.value:n[f],!u(y?f:v+(d?".":"#")+f,t.forced)&&void 0!==p){if(typeof h==typeof p)continue;c(h,p)}(t.sham||p&&p.sham)&&o(h,"sham",!0),s(n,f,h,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,e,n){var i=n(1702),r=n(9662),o=i(i.bind);t.exports=function(t,e){return r(t),void 0===e?t:o?o(t,e):function(){return t.apply(e,arguments)}}},6916:function(t){var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:function(t,e,n){var i=n(9781),r=n(2597),o=Function.prototype,s=i&&Object.getOwnPropertyDescriptor,a=r(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!i||i&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t){var e=Function.prototype,n=e.bind,i=e.call,r=n&&n.bind(i);t.exports=n?function(t){return t&&r(i,t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},5005:function(t,e,n){var i=n(7854),r=n(614),o=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(1702),r=n(7908),o=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(r(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var i=n(5005);t.exports=i("document","documentElement")},4664:function(t,e,n){var i=n(9781),r=n(7293),o=n(317);t.exports=!i&&!r((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(7854),r=n(1702),o=n(7293),s=n(4326),a=i.Object,c=r("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?c(t,""):a(t)}:a},2788:function(t,e,n){var i=n(1702),r=n(614),o=n(5465),s=i(Function.toString);r(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},9909:function(t,e,n){var i,r,o,s=n(8536),a=n(7854),c=n(1702),u=n(111),f=n(8880),p=n(2597),h=n(5465),l=n(6200),v=n(3501),y="Object already initialized",d=a.TypeError,m=a.WeakMap;if(s||h.state){var g=h.state||(h.state=new m),x=c(g.get),b=c(g.has),w=c(g.set);i=function(t,e){if(b(g,t))throw new d(y);return e.facade=t,w(g,t,e),e},r=function(t){return x(g,t)||{}},o=function(t){return b(g,t)}}else{var S=l("state");v[S]=!0,i=function(t,e){if(p(t,S))throw new d(y);return e.facade=t,f(t,S,e),e},r=function(t){return p(t,S)?t[S]:{}},o=function(t){return p(t,S)}}t.exports={set:i,get:r,has:o,enforce:function(t){return o(t)?r(t):i(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=r(e)).type!==t)throw d("Incompatible receiver, "+t+" required");return n}}}},3157:function(t,e,n){var i=n(4326);t.exports=Array.isArray||function(t){return"Array"==i(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,n){var i=n(1702),r=n(7293),o=n(614),s=n(648),a=n(5005),c=n(2788),u=function(){},f=[],p=a("Reflect","construct"),h=/^\s*(?:class|function)\b/,l=i(h.exec),v=!h.exec(u),y=function(t){if(!o(t))return!1;try{return p(u,f,t),!0}catch(t){return!1}};t.exports=!p||r((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?function(t){if(!o(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return v||!!l(h,c(t))}:y},4705:function(t,e,n){var i=n(7293),r=n(614),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==f||n!=u&&(r(e)?i(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",f=s.POLYFILL="P";t.exports=s},111:function(t,e,n){var i=n(614);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(7854),r=n(5005),o=n(614),s=n(7976),a=n(3307),c=i.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&s(e.prototype,c(t))}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},133:function(t,e,n){var i=n(7392),r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(t,e,n){var i=n(7854),r=n(614),o=n(2788),s=i.WeakMap;t.exports=r(s)&&/native code/.test(o(s))},30:function(t,e,n){var i,r=n(9670),o=n(6048),s=n(748),a=n(3501),c=n(490),u=n(317),f=n(6200)("IE_PROTO"),p=function(){},h=function(t){return"<script>"+t+"<\/script>"},l=function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){try{i=new ActiveXObject("htmlfile")}catch(t){}var t,e;v="undefined"!=typeof document?document.domain&&i?l(i):((e=u("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F):l(i);for(var n=s.length;n--;)delete v.prototype[s[n]];return v()};a[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=r(t),n=new p,p.prototype=null,n[f]=t):n=v(),void 0===e?n:o(n,e)}},6048:function(t,e,n){var i=n(9781),r=n(3070),o=n(9670),s=n(5656),a=n(1956);t.exports=i?Object.defineProperties:function(t,e){o(t);for(var n,i=s(e),c=a(e),u=c.length,f=0;u>f;)r.f(t,n=c[f++],i[n]);return t}},3070:function(t,e,n){var i=n(7854),r=n(9781),o=n(4664),s=n(9670),a=n(4948),c=i.TypeError,u=Object.defineProperty;e.f=r?u:function(t,e,n){if(s(t),e=a(e),s(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),r=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),f=n(4664),p=Object.getOwnPropertyDescriptor;e.f=i?p:function(t,e){if(t=a(t),e=c(e),f)try{return p(t,e)}catch(t){}if(u(t,e))return s(!r(o.f,t,e),t[e])}},8006:function(t,e,n){var i=n(6324),r=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:function(t,e,n){var i=n(1702),r=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=i([].push);t.exports=function(t,e){var n,i=o(t),u=0,f=[];for(n in i)!r(a,n)&&r(i,n)&&c(f,n);for(;e.length>u;)r(i,n=e[u++])&&(~s(f,n)||c(f,n));return f}},1956:function(t,e,n){var i=n(6324),r=n(748);t.exports=Object.keys||function(t){return i(t,r)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);e.f=r?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},288:function(t,e,n){"use strict";var i=n(1694),r=n(648);t.exports=i?{}.toString:function(){return"[object "+r(this)+"]"}},2140:function(t,e,n){var i=n(7854),r=n(6916),o=n(614),s=n(111),a=i.TypeError;t.exports=function(t,e){var n,i;if("string"===e&&o(n=t.toString)&&!s(i=r(n,t)))return i;if(o(n=t.valueOf)&&!s(i=r(n,t)))return i;if("string"!==e&&o(n=t.toString)&&!s(i=r(n,t)))return i;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),r=n(1702),o=n(8006),s=n(5181),a=n(9670),c=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},1320:function(t,e,n){var i=n(7854),r=n(614),o=n(2597),s=n(8880),a=n(3505),c=n(2788),u=n(9909),f=n(6530).CONFIGURABLE,p=u.get,h=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var u,p=!!c&&!!c.unsafe,v=!!c&&!!c.enumerable,y=!!c&&!!c.noTargetGet,d=c&&void 0!==c.name?c.name:e;r(n)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||f&&n.name!==d)&&s(n,"name",d),(u=h(n)).source||(u.source=l.join("string"==typeof d?d:""))),t!==i?(p?!y&&t[e]&&(v=!0):delete t[e],v?t[e]=n:s(t,e,n)):v?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return r(this)&&p(this).source||c(this)}))},4488:function(t,e,n){var i=n(7854).TypeError;t.exports=function(t){if(null==t)throw i("Can't call method on "+t);return t}},3505:function(t,e,n){var i=n(7854),r=Object.defineProperty;t.exports=function(t,e){try{r(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},6200:function(t,e,n){var i=n(2309),r=n(9711),o=i("keys");t.exports=function(t){return o[t]||(o[t]=r(t))}},5465:function(t,e,n){var i=n(7854),r=n(3505),o="__core-js_shared__",s=i[o]||r(o,{});t.exports=s},2309:function(t,e,n){var i=n(1913),r=n(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.2",mode:i?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,n){var i=n(9303),r=Math.max,o=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):o(n,e)}},5656:function(t,e,n){var i=n(8361),r=n(4488);t.exports=function(t){return i(r(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var i=+t;return i!=i||0===i?0:(i>0?n:e)(i)}},7466:function(t,e,n){var i=n(9303),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(7854),r=n(4488),o=i.Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var i=n(7854),r=n(6916),o=n(111),s=n(2190),a=n(8173),c=n(2140),u=n(5112),f=i.TypeError,p=u("toPrimitive");t.exports=function(t,e){if(!o(t)||s(t))return t;var n,i=a(t,p);if(i){if(void 0===e&&(e="default"),n=r(i,t,e),!o(n)||s(n))return n;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var i=n(7593),r=n(2190);t.exports=function(t){var e=i(t,"string");return r(e)?e:e+""}},1694:function(t,e,n){var i={};i[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(i)},6330:function(t,e,n){var i=n(7854).String;t.exports=function(t){try{return i(t)}catch(t){return"Object"}}},9711:function(t,e,n){var i=n(1702),r=0,o=Math.random(),s=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++r+o,36)}},3307:function(t,e,n){var i=n(133);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var i=n(7854),r=n(2309),o=n(2597),s=n(9711),a=n(133),c=n(3307),u=r("wks"),f=i.Symbol,p=f&&f.for,h=c?f:f&&f.withoutSetter||s;t.exports=function(t){if(!o(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&o(f,t)?u[t]=f[t]:u[t]=c&&p?p(e):h(e)}return u[t]}},3290:function(t,e,n){var i=n(2109),r=n(1285),o=n(1223);i({target:"Array",proto:!0},{fill:r}),o("fill")},561:function(t,e,n){"use strict";var i=n(2109),r=n(7854),o=n(1400),s=n(9303),a=n(6244),c=n(7908),u=n(5417),f=n(6135),p=n(1194)("splice"),h=r.TypeError,l=Math.max,v=Math.min,y=9007199254740991,d="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var n,i,r,p,m,g,x=c(this),b=a(x),w=o(t,b),S=arguments.length;if(0===S?n=i=0:1===S?(n=0,i=b-w):(n=S-2,i=v(l(s(e),0),b-w)),b+n-i>y)throw h(d);for(r=u(x,i),p=0;p<i;p++)(m=w+p)in x&&f(r,p,x[m]);if(r.length=i,n<i){for(p=w;p<b-i;p++)g=p+n,(m=p+i)in x?x[g]=x[m]:delete x[g];for(p=b;p>b-i+n;p--)delete x[p-1]}else if(n>i)for(p=b-i;p>w;p--)g=p+n-1,(m=p+i-1)in x?x[g]=x[m]:delete x[g];for(p=0;p<n;p++)x[p+w]=arguments[p+2];return x.length=b-i+n,r}})},5438:function(t,e,n){var i=n(2109),r=Math.hypot,o=Math.abs,s=Math.sqrt;i({target:"Math",stat:!0,forced:!!r&&r(1/0,NaN)!==1/0},{hypot:function(t,e){for(var n,i,r=0,a=0,c=arguments.length,u=0;a<c;)u<(n=o(arguments[a++]))?(r=r*(i=u/n)*i+1,u=n):r+=n>0?(i=n/u)*i:n;return u===1/0?1/0:u*s(r)}})},1539:function(t,e,n){var i=n(1694),r=n(1320),o=n(288);i||r(Object.prototype,"toString",o,{unsafe:!0})},4747:function(t,e,n){var i=n(7854),r=n(8324),o=n(8509),s=n(8533),a=n(8880),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in r)r[u]&&c(i[u]&&i[u].prototype);c(o)}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(1539),n(4747),n(5438),n(561);var t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.addEventListener("keydown",(function(t){switch(t.key){case"a":e.spaceship.moveLeft();break;case"w":e.spaceship.moveUp();break;case"d":e.spaceship.moveRight();break;case"s":e.spaceship.moveDown();break;case"w":e.spaceship.moveUpperLeft();break;case"w":e.spaceship.moveUpperRight();break;case"s":e.spaceship.moveLowerLeft();break;case"d":e.spaceship.moveLowerRight()}})),document.addEventListener("keyup",(function(t){switch(t.key){case"a":e.spaceship.xSpeed<0&&e.spaceship.stop();break;case"w":e.spaceship.ySpeed<0&&e.spaceship.stop();break;case"d":e.spaceship.xSpeed>0&&e.spaceship.stop();break;case"s":e.spaceship.ySpeed>0&&e.spaceship.stop()}})),window.addEventListener("click",(function(t){e.spaceship.fire(t)}))};function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(3290);var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.radius=6,this.position1={x:e.position.x+e.shipWidth/2,y:e.position.y,y2:e.position.y+o.shipHeight},this.position2={x:e.position.x+e.shipWidth/2,y:e.position.y+e.shipHeight},this.velocity={}}var n,i;return n=t,(i=[{key:"draw",value:function(t){t.beginPath(),t.fillStyle="#30DFC2",t.arc(this.position1.x,this.position1.y,this.radius,0,2*Math.PI),t.arc(this.position2.x,this.position2.y,this.radius,0,2*Math.PI),t.fill()}},{key:"update",value:function(){this.position1.x+=this.velocity.x,this.position1.y+=this.velocity.y,this.position2.x+=this.velocity.x,this.position2.y+=this.velocity.y}}])&&e(n.prototype,i),t}();function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.image=document.getElementById("img_ship"),this.game=e,this.gameWidth=e.gameWidth,this.gameHeight=e.gameHeight,this.shipWidth=150,this.shipHeight=68,this.position={x:this.shipWidth,y:this.gameHeight-this.shipHeight-50},this.maxSpeed=5,this.xSpeed=0,this.ySpeed=0,this.canvas=document.getElementById("gameView")}var e,n;return e=t,(n=[{key:"draw",value:function(t){t.drawImage(this.image,this.position.x,this.position.y)}},{key:"update",value:function(){this.position.x+=this.xSpeed,this.position.y+=this.ySpeed,this.position.x<0&&(this.position.x=0),this.position.y<0&&(this.position.y=0),this.position.x>this.gameWidth-this.shipWidth&&(this.position.x=this.gameWidth-this.shipWidth),this.position.y>this.gameHeight-this.shipHeight&&(this.position.y=this.gameHeight-this.shipHeight)}},{key:"moveLeft",value:function(){this.xSpeed=-this.maxSpeed}},{key:"moveRight",value:function(){this.xSpeed=this.maxSpeed}},{key:"moveUp",value:function(){this.ySpeed=-this.maxSpeed}},{key:"moveDown",value:function(){this.ySpeed=this.maxSpeed}},{key:"moveUpperLeft",value:function(){this.xSpeed=-this.maxSpeed,this.ySpeed=-this.maxSpeed}},{key:"moveUpperRight",value:function(){this.xSpeed=this.maxSpeed,this.ySpeed=-this.maxSpeed}},{key:"moveLowerLeft",value:function(){this.xSpeed=-this.maxSpeed,this.ySpeed=this.maxSpeed}},{key:"moveLowerRight",value:function(){this.xSpeed=this.maxSpeed,this.ySpeed=this.maxSpeed}},{key:"stop",value:function(){this.xSpeed=0,this.ySpeed=0}},{key:"fire",value:function(t){var e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,o=new i(this);this.game.projectiles.push(o);var s=Math.atan2(r-o.position1.y,n-o.position1.x);o.velocity={x:5*Math.cos(s),y:5*Math.sin(s)}}}])&&r(e.prototype,n),t}();function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.image=document.getElementById("img_ban"),this.game=e,this.x=e.gameWidth,this.y=Math.random()*e.gameHeight,this.enemyWidth=50,this.enemyHeight=35,this.velocity={}}var e,n;return e=t,(n=[{key:"draw",value:function(t){t.drawImage(this.image,this.x,this.y)}},{key:"update",value:function(){this.x+=this.velocity.x,this.y+=this.velocity.y}}])&&s(e.prototype,n),t}();function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameWidth=t,this.gameHeight=n,this.projectiles=[],this.enemies=[],this.spaceship=new o(this),this.score=0,this.lives=3}var n,i;return n=e,(i=[{key:"start",value:function(){new t(this)}},{key:"spawnEnemies",value:function(){var t=this;setInterval((function(){var e=new a(t),n=Math.atan2(t.spaceship.position.y-e.y,t.spaceship.position.x-e.x);e.velocity={x:Math.cos(n),y:Math.sin(n)},t.enemies.push(e)}),2e3)}},{key:"draw",value:function(t){var e=new Image;e.src="src/images/spacejunk.jpeg",t.globalAlpha=.8,t.drawImage(e,0,0,900,550),this.spaceship.draw(t),this.projectiles.forEach((function(e){e.draw(t)})),this.enemies.forEach((function(e){e.draw(t)}))}},{key:"update",value:function(t){var e=this;this.spaceship.update(),this.projectiles.forEach((function(t){t.update()})),this.enemies.forEach((function(t,n){t.update();var i=Math.hypot(e.spaceship.position.x-t.x+t.enemyWidth/2,e.spaceship.position.y-t.y-t.enemyHeight/2);(i-t.enemyWidth<1||i-t.enemyWidth<1)&&(e.enemies.splice(n,1),e.lives>0&&(e.lives-=1)),e.projectiles.forEach((function(i,r){var o=Math.hypot(i.position1.x-t.x+t.enemyWidth/2,i.position1.y-t.y-t.enemyHeight/2),s=Math.hypot(i.position2.x-t.x+t.enemyWidth/2,i.position2.y-t.y-t.enemyHeight/2);(o-i.radius-.25*t.enemyWidth<1||s-i.radius-.25*t.enemyWidth<1)&&(e.enemies.splice(n,1),e.projectiles.splice(r,1),e.score+=1)}))})),this.stats(),this.draw(t)}},{key:"stats",value:function(){document.getElementById("score-container").innerText="Score: ".concat(this.score),document.getElementById("lives-container").innerText="Lives: ".concat(this.lives)}}])&&c(n.prototype,i),e}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("gameView").getContext("2d"),e=new Audio("src/music/life-is-a-dream.mp3");document.getElementById("unmuteButton"),e.play();var n=new u(900,550);n.start(),n.spawnEnemies(),function e(){requestAnimationFrame(e),t.clearRect(0,0,900,550),n.update(t)}()}))}()}();
//# sourceMappingURL=main.js.map