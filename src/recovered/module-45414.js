// Recovered from the public Golden Letter demo; original module 45414.
export default function (t, e, i) {
  i.d(e, {
    Pn: function () {
      return s;
    },
    Wi: function () {
      return r;
    },
    frameData: function () {
      return o;
    },
    yL: function () {
      return a;
    },
  });
  var n = i(56277);
  let {
    schedule: r,
    cancel: s,
    state: o,
    steps: a,
  } = (0, i(85005).Z)(
    "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z,
    !0,
  );
}
