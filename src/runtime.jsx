import React from "react";
import * as JSX from "react/jsx-runtime";
import * as ReactDOM from "react-dom";
import { modules } from "./recovered/modules.js";
const cache = {};
function Image({
  src,
  fill,
  priority,
  unoptimized,
  quality,
  loader,
  placeholder,
  blurDataURL,
  style,
  ...props
}) {
  return (
    <img
      {...props}
      src={typeof src === "string" ? src : src?.src}
      style={
        fill
          ? {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              ...style,
            }
          : style
      }
    />
  );
}
function Link({ href, prefetch, replace, scroll, locale, ...props }) {
  return (
    <a href={typeof href === "string" ? href : href?.pathname} {...props} />
  );
}
const navigation = {
  usePathname: () => location.pathname,
  useSearchParams: () => new URLSearchParams(location.search),
  useRouter: () => ({
    push: (url) => location.assign(url),
    replace: (url) => location.replace(url),
    back: () => history.back(),
    refresh: () => location.reload(),
  }),
};
const overrides = {
  94270: { default: () => null },
  30667: Object.fromEntries(['B9','I0','LH','M_','O7','W2','Yx','l7','qu','yG'].map(key=>[key,()=>undefined])),
  2265: React,
  57437: JSX,
  4887: ReactDOM,
  33145: { default: Image },
  87138: { default: Link },
  99376: navigation,
  35475: navigation,
};
export function requireModule(id) {
  if (overrides[id]) return overrides[id];
  if (cache[id]) return cache[id].exports;
  if (!modules[id]) throw Error(`Missing recovered module ${id}`);
  const module = { exports: {} };
  cache[id] = module;
  modules[id](module, module.exports, requireModule);
  return module.exports;
}
requireModule.d = (exports, defs) => {
  for (const k in defs)
    if (!Object.hasOwn(exports, k))
      Object.defineProperty(exports, k, { enumerable: true, get: defs[k] });
};
requireModule.o = (o, k) => Object.hasOwn(o, k);
requireModule.r = (o) =>
  Object.defineProperty(o, "__esModule", { value: true });
requireModule.n = (o) => {
  const getter = o && o.__esModule ? () => o.default : () => o;
  requireModule.d(getter, { a: getter });
  return getter;
};
requireModule.e = () => Promise.resolve();
requireModule.g = globalThis;
requireModule.p = "/";
requireModule.nmd = (m) => m;
