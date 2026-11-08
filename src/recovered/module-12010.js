// Recovered from the public Golden Letter demo; original module 12010.
export default function (e, t) {
  "use strict";
  function n(e, t) {
    var n = e.length;
    for (e.push(t); 0 < n;) {
      var r = (n - 1) >>> 1,
        o = e[r];
      if (0 < u(o, t)) ((e[r] = t), (e[n] = o), (n = r));
      else break;
    }
  }
  function r(e) {
    return 0 === e.length ? null : e[0];
  }
  function o(e) {
    if (0 === e.length) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      for (var r = 0, o = e.length, l = o >>> 1; r < l;) {
        var a = 2 * (r + 1) - 1,
          i = e[a],
          c = a + 1,
          s = e[c];
        if (0 > u(i, n))
          c < o && 0 > u(s, i)
            ? ((e[r] = s), (e[c] = n), (r = c))
            : ((e[r] = i), (e[a] = n), (r = a));
        else if (c < o && 0 > u(s, n)) ((e[r] = s), (e[c] = n), (r = c));
        else break;
      }
    }
    return t;
  }
  function u(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  if (
    ((t.unstable_now = void 0),
    "object" == typeof performance && "function" == typeof performance.now)
  ) {
    var l,
      a = performance;
    t.unstable_now = function () {
      return a.now();
    };
  } else {
    var i = Date,
      c = i.now();
    t.unstable_now = function () {
      return i.now() - c;
    };
  }
  var s = [],
    f = [],
    d = 1,
    p = null,
    h = 3,
    y = !1,
    _ = !1,
    v = !1,
    b = "function" == typeof setTimeout ? setTimeout : null,
    g = "function" == typeof clearTimeout ? clearTimeout : null,
    m = "undefined" != typeof setImmediate ? setImmediate : null;
  function R(e) {
    for (var t = r(f); null !== t;) {
      if (null === t.callback) o(f);
      else if (t.startTime <= e)
        (o(f), (t.sortIndex = t.expirationTime), n(s, t));
      else break;
      t = r(f);
    }
  }
  function P(e) {
    if (((v = !1), R(e), !_)) {
      if (null !== r(s)) ((_ = !0), x());
      else {
        var t = r(f);
        null !== t && A(P, t.startTime - e);
      }
    }
  }
  "undefined" != typeof navigator &&
    void 0 !== navigator.scheduling &&
    void 0 !== navigator.scheduling.isInputPending &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var j = !1,
    O = -1,
    S = 5,
    E = -1;
  function w() {
    return !(t.unstable_now() - E < S);
  }
  function T() {
    if (j) {
      var e = t.unstable_now();
      E = e;
      var n = !0;
      try {
        e: {
          ((_ = !1), v && ((v = !1), g(O), (O = -1)), (y = !0));
          var u = h;
          try {
            t: {
              for (
                R(e), p = r(s);
                null !== p && !(p.expirationTime > e && w());
              ) {
                var a = p.callback;
                if ("function" == typeof a) {
                  ((p.callback = null), (h = p.priorityLevel));
                  var i = a(p.expirationTime <= e);
                  if (((e = t.unstable_now()), "function" == typeof i)) {
                    ((p.callback = i), R(e), (n = !0));
                    break t;
                  }
                  (p === r(s) && o(s), R(e));
                } else o(s);
                p = r(s);
              }
              if (null !== p) n = !0;
              else {
                var c = r(f);
                (null !== c && A(P, c.startTime - e), (n = !1));
              }
            }
            break e;
          } finally {
            ((p = null), (h = u), (y = !1));
          }
          n = void 0;
        }
      } finally {
        n ? l() : (j = !1);
      }
    }
  }
  if ("function" == typeof m)
    l = function () {
      m(T);
    };
  else if ("undefined" != typeof MessageChannel) {
    var M = new MessageChannel(),
      C = M.port2;
    ((M.port1.onmessage = T),
      (l = function () {
        C.postMessage(null);
      }));
  } else
    l = function () {
      b(T, 0);
    };
  function x() {
    j || ((j = !0), l());
  }
  function A(e, n) {
    O = b(function () {
      e(t.unstable_now());
    }, n);
  }
  ((t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (e) {
      e.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      _ || y || ((_ = !0), x());
    }),
    (t.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (S = 0 < e ? Math.floor(1e3 / e) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return r(s);
    }),
    (t.unstable_next = function (e) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = h;
      }
      var n = h;
      h = t;
      try {
        return e();
      } finally {
        h = n;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = h;
      h = e;
      try {
        return t();
      } finally {
        h = n;
      }
    }),
    (t.unstable_scheduleCallback = function (e, o, u) {
      var l = t.unstable_now();
      switch (
        ((u =
          "object" == typeof u &&
          null !== u &&
          "number" == typeof (u = u.delay) &&
          0 < u
            ? l + u
            : l),
        e)
      ) {
        case 1:
          var a = -1;
          break;
        case 2:
          a = 250;
          break;
        case 5:
          a = 1073741823;
          break;
        case 4:
          a = 1e4;
          break;
        default:
          a = 5e3;
      }
      return (
        (a = u + a),
        (e = {
          id: d++,
          callback: o,
          priorityLevel: e,
          startTime: u,
          expirationTime: a,
          sortIndex: -1,
        }),
        u > l
          ? ((e.sortIndex = u),
            n(f, e),
            null === r(s) &&
              e === r(f) &&
              (v ? (g(O), (O = -1)) : (v = !0), A(P, u - l)))
          : ((e.sortIndex = a), n(s, e), _ || y || ((_ = !0), x())),
        e
      );
    }),
    (t.unstable_shouldYield = w),
    (t.unstable_wrapCallback = function (e) {
      var t = h;
      return function () {
        var n = h;
        h = t;
        try {
          return e.apply(this, arguments);
        } finally {
          h = n;
        }
      };
    }));
}
