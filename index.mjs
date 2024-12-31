// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-complex-floating-point-data-type@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-strides@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-offset@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-order@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind2sub@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function h(h){var f,v,y,g,c,b,x;if(!t(h))throw new TypeError(j("nullDv",h));if("function"==typeof h["toJSON"])return h.toJSON();for((f={}).type="ndarray",f.dtype=r(h),f.flags={READONLY:e(h)},f.order=m(h),y=d(h),f.shape=y,g=i(h),f.strides=g.slice(),c=n(h),v=o(f.shape),x=0;x<g.length;x++)f.strides[x]<0&&(f.strides[x]*=-1);if(f.data=[],s(f.dtype))for(x=0;x<v;x++)b=h.get.apply(h,a(y,g,c,f.order,x,"throw")),f.data.push(p(b),l(b));else for(x=0;x<v;x++)f.data.push(h.get.apply(h,a(y,g,c,f.order,x,"throw")));return f}export{h as default};
//# sourceMappingURL=index.mjs.map
