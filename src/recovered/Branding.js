// Recovered from the public Golden Letter demo; original module 64244.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return l;
    },
  });
  var n = a(57437),
    r = a(30157);
  function l(e) {
    let {
        customBrand: t,
        defaultLabel: a = "Digital invite built with ",
        className: l = "",
        linkClassName: s = "",
        style: i,
        linkStyle: o,
      } = e,
      c = (null == t ? void 0 : t.trim().replace(/^@+/, "")) || "";
    return c
      ? (0, n.jsxs)("p", {
          className: l,
          style: i,
          children: [
            (0, n.jsx)("span", { children: "Digital Invitation made by" }),
            (0, n.jsx)("a", {
              href: (function (e) {
                let t = e.trim();
                if (!t) return r.lz.social.instagram;
                if (/^https?:\/\//i.test(t)) return t;
                let a = t
                  .replace(/^@+/, "")
                  .replace(/^(?:www\.)?instagram\.com\//i, "")
                  .replace(/\/+$/, "")
                  .split(/[/?#]/)[0];
                return a
                  ? "https://www.instagram.com/".concat(
                      encodeURIComponent(a),
                      "/",
                    )
                  : r.lz.social.instagram;
              })(c),
              target: "_blank",
              rel: "noopener noreferrer",
              "data-pdf-link": !0,
              className: s,
              style: o,
              children: c,
            }),
          ],
        })
      : (0, n.jsxs)("p", {
          className: l,
          style: i,
          children: [
            (0, n.jsx)("span", { children: a }),
            (0, n.jsx)("a", {
              href: r.lz.url,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-pdf-link": !0,
              className: s,
              style: o,
              children: "theforevertale.com",
            }),
          ],
        });
  }
}
