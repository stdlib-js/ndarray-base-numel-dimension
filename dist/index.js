"use strict";var m=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var s=m(function(l,o){
var t=require('@stdlib/ndarray-base-normalize-index/dist'),u=require('@stdlib/ndarray-base-ndims/dist'),d=require('@stdlib/ndarray-base-shape/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function v(n,e){var r,i;if(r=u(n),r===0)throw new TypeError(a('1nvF7',r));if(i=t(e,r-1),i===-1)throw new RangeError(a('1nvF8',r,e));return d(n,!1)[i]}o.exports=v
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
