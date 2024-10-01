// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndims@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function n(n,d){var i,m;if(0===(i=s(n)))throw new TypeError(t("1nvF7",i));if(-1===(m=r(d,i-1)))throw new RangeError(t("1nvF8",i,d));return e(n,!1)[m]}export{n as default};
//# sourceMappingURL=index.mjs.map
