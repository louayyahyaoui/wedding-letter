// Recovered from the public Golden Letter demo; original module 40504.
export default function (t, e, i) {
  let n;
  i.d(e, {
    X: function () {
      return a;
    },
  });
  var r = i(24118),
    s = i(45414);
  function o() {
    n = void 0;
  }
  let a = {
    now: () => (
      void 0 === n &&
        a.set(
          s.frameData.isProcessing || r.c.useManualTiming
            ? s.frameData.timestamp
            : performance.now(),
        ),
      n
    ),
    set: (t) => {
      ((n = t), queueMicrotask(o));
    },
  };
}
