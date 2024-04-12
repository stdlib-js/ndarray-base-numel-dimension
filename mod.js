// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(){var n,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(n=1;n<r.length;n++)e+="&arg[]="+encodeURIComponent(r[n]);return e}function r(r,e){var t,o,u,a;if(t=function(n){var r=n.ndims;return"number"==typeof r?r:n.shape.length}(r),0===t)throw new TypeError(n("1nvF7",t));if(a=t-1,-1===(o=(u=e)<0?(u+=a+1)<0?-1:u:u>a?-1:u))throw new RangeError(n("1nvF8",t,e));return function(n,r){var e=n.shape;return r?function(n){var r,e,t;for(e=n.length,r=[],t=0;t<e;t++)r.push(n[t]);return r}(e):e}(r,!1)[o]}export{r as default};
//# sourceMappingURL=mod.js.map
