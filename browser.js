// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";function e(){var e,n=arguments,r="https://stdlib.io/e/"+n[0]+"?";for(e=1;e<n.length;e++)r+="&arg[]="+encodeURIComponent(n[e]);return r}return function(n,r){var t,o,i,f;if(0===(t=function(e){var n=e.ndims;return"number"==typeof n?n:e.shape.length}(n)))throw new TypeError(e("1nvF7",t));if(f=t-1,-1===(o=(i=r)<0?(i+=f+1)<0?-1:i:i>f?-1:i))throw new RangeError(e("1nvF8",t,r));return function(e,n){var r=e.shape;return n?function(e){var n,r,t;for(r=e.length,n=[],t=0;t<r;t++)n.push(e[t]);return n}(r):r}(n,!1)[o]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).numelDimension=n();
//# sourceMappingURL=browser.js.map
