// Recovered from the public Golden Letter demo; original module 79205.
export default function (t, e, i) {
  i.d(e, {
    Z: function () {
      return h;
    },
  });
  var n = i(2265);
  let r = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    s = (t) =>
      t.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, e, i) =>
        i ? i.toUpperCase() : e.toLowerCase(),
      ),
    o = (t) => {
      let e = s(t);
      return e.charAt(0).toUpperCase() + e.slice(1);
    },
    a = function () {
      for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      return e
        .filter((t, e, i) => !!t && "" !== t.trim() && i.indexOf(t) === e)
        .join(" ")
        .trim();
    };
  var l = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  let u = (0, n.forwardRef)((t, e) => {
      let {
        color: i = "currentColor",
        size: r = 24,
        strokeWidth: s = 2,
        absoluteStrokeWidth: o,
        className: u = "",
        children: h,
        iconNode: c,
        ...d
      } = t;
      return (0, n.createElement)(
        "svg",
        {
          ref: e,
          ...l,
          width: r,
          height: r,
          stroke: i,
          strokeWidth: o ? (24 * Number(s)) / Number(r) : s,
          className: a("lucide", u),
          ...d,
        },
        [
          ...c.map((t) => {
            let [e, i] = t;
            return (0, n.createElement)(e, i);
          }),
          ...(Array.isArray(h) ? h : [h]),
        ],
      );
    }),
    h = (t, e) => {
      let i = (0, n.forwardRef)((i, s) => {
        let { className: l, ...h } = i;
        return (0, n.createElement)(u, {
          ref: s,
          iconNode: e,
          className: a("lucide-".concat(r(o(t))), "lucide-".concat(t), l),
          ...h,
        });
      });
      return ((i.displayName = o(t)), i);
    };
}
