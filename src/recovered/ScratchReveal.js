// Recovered from the public Golden Letter demo; original module 80258.
export default function (e, t, a) {
  function n(e, t, a, n) {
    return new Promise((r) => {
      if (null == a ? void 0 : a.aborted) {
        r();
        return;
      }
      let l = document.createElement(t),
        s = !1,
        i = () => {
          if (!s) {
            ((s = !0), l.removeAttribute("src"));
            try {
              l.load();
            } catch (e) {}
            (l.removeEventListener("progress", c),
              l.removeEventListener("loadeddata", o),
              l.removeEventListener("canplaythrough", o),
              l.removeEventListener("error", o),
              null == a || a.removeEventListener("abort", d),
              r());
          }
        },
        o = () => {
          (null == n || n(1), i());
        },
        c = () => {
          try {
            if (
              !l.buffered.length ||
              !Number.isFinite(l.duration) ||
              l.duration <= 0
            )
              return;
            null == n ||
              n(
                Math.min(1, l.buffered.end(l.buffered.length - 1) / l.duration),
              );
          } catch (e) {}
        },
        d = () => i();
      ((l.preload = "auto"),
        (l.muted = !0),
        "video" === t && (l.playsInline = !0),
        l.addEventListener("progress", c),
        l.addEventListener("loadeddata", o, { once: !0 }),
        l.addEventListener("canplaythrough", o, { once: !0 }),
        l.addEventListener("error", o, { once: !0 }),
        null == a || a.addEventListener("abort", d, { once: !0 }),
        (l.src = e),
        l.load(),
        window.setTimeout(o, "video" === t ? 2e4 : 12e3));
    });
  }
  async function r(e, t, a) {
    let r = new Map();
    for (let t of e) {
      var l, s, i;
      let e = null === (l = t.url) || void 0 === l ? void 0 : l.trim();
      e &&
        r.set(
          e,
          (null !== (s = r.get(e)) && void 0 !== s ? s : 0) +
            (null !== (i = t.weight) && void 0 !== i ? i : 1),
        );
    }
    let o = [...r.entries()].map((e) => {
      let [t, a] = e;
      return { url: t, weight: a };
    });
    if (0 === o.length) {
      t(100);
      return;
    }
    let c = o.reduce((e, t) => e + t.weight, 0),
      d = Array(o.length).fill(0),
      u = () => {
        t(
          Math.max(
            0,
            Math.min(
              100,
              Math.round(
                (d.reduce((e, t, a) => e + t * o[a].weight, 0) / c) * 100,
              ),
            ),
          ),
        );
      };
    (u(),
      await Promise.all(
        o.map(async (e, t) => {
          let r = (e) => {
              ((d[t] = Math.max(d[t], Math.min(1, e))), u());
            },
            l = e.url.toLowerCase().split("?")[0];
          if (/\.(mp4|webm|mov)$/.test(l)) await n(e.url, "video", a, r);
          else if (/\.(mp3|m4a|aac|wav|ogg)$/.test(l))
            await n(e.url, "audio", a, r);
          else {
            var s;
            (await ((s = e.url),
            new Promise((e) => {
              if (null == a ? void 0 : a.aborted) {
                e();
                return;
              }
              let t = new Image(),
                n = !1,
                r = 0,
                l = () => {
                  n ||
                    ((n = !0),
                    r && window.clearTimeout(r),
                    null == a || a.removeEventListener("abort", i),
                    e());
                },
                i = () => l();
              ((t.onload = l),
                (t.onerror = l),
                null == a || a.addEventListener("abort", i, { once: !0 }),
                (r = window.setTimeout(l, 8e3)),
                (t.src = s),
                t.complete && l());
            })),
              r(1));
          }
        }),
      ),
      t(100));
  }
  a.d(t, {
    e: function () {
      return r;
    },
  });
}
