// Recovered from the public Golden Letter demo; original module 62592.
export default function (e, n, a) {
  a.d(n, {
    $D: function () {
      return d;
    },
    $y: function () {
      return m;
    },
    Hd: function () {
      return s;
    },
    Hn: function () {
      return r;
    },
    Lw: function () {
      return c;
    },
    Mv: function () {
      return v;
    },
    OK: function () {
      return g;
    },
    UU: function () {
      return o;
    },
    mO: function () {
      return t;
    },
    mg: function () {
      return i;
    },
    nG: function () {
      return f;
    },
    o2: function () {
      return p;
    },
    qv: function () {
      return h;
    },
    sh: function () {
      return l;
    },
    zj: function () {
      return u;
    },
  });
  let o = "upload",
    t = "extract-video",
    r = "youtube-link",
    i = "nasheed_shukran-laka-rabbi.mp3",
    l = "wedding_nasheed.mp3",
    u = "wedding_nasheed_2.mp3",
    s = "im alive 1 - atif aslam - maher zain-2.mp3",
    c = "im alive 2 - atif aslam - maher zain-2.mp3",
    d = [
      { value: "none", label: "No background audio", iconType: "none" },
      { value: o, label: "Upload audio", iconType: "upload" },
      { value: r, label: "Youtube link", iconType: "link" },
      { value: t, label: "Extract from video", iconType: "video" },
      { value: i, label: "nasheed_shukran-laka-rabbi.mp3", iconType: "audio" },
      { value: l, label: "wedding_nasheed.mp3", iconType: "audio" },
      { value: u, label: "wedding_nasheed_2.mp3", iconType: "audio" },
      { value: s, label: "I'm Alive 1", iconType: "audio" },
      { value: c, label: "I'm Alive 2", iconType: "audio" },
    ],
    v = {
      [i]: "/nasheed_shukran-laka-rabbi.mp3",
      [l]: "/wedding_nasheed.mp3",
      [u]: "/wedding_nasheed_2.mp3",
      [s]: encodeURI("/im alive 1 - atif aslam - maher zain-2.mp3"),
      [c]: encodeURI("/im alive 2 - atif aslam - maher zain-2.mp3"),
    };
  function m(e) {
    if (!e) return null;
    let n = v[e];
    if (n) return n;
    let a = e.trim().toLowerCase();
    for (let [e, n] of Object.entries(v)) if (e.toLowerCase() === a) return n;
    return a.includes("alive") && a.includes("2")
      ? v[c]
      : a.includes("alive") && a.includes("1")
        ? v[s]
        : null;
  }
  function p(e) {
    return e === o || e === t || "video-link" === e || e === r;
  }
  function h(e) {
    var n;
    return (null === (n = e.musicConfig) || void 0 === n ? void 0 : n.mode) ===
      "upload"
      ? e.musicConfig.sourceType || o
      : e.music || "none";
  }
  function f(e) {
    let n = e.musicConfig;
    if ((null == n ? void 0 : n.mode) !== "upload" || !n.url) return null;
    let a = Math.max(0, n.trimStartSec || 0),
      o = "number" == typeof n.trimEndSec ? n.trimEndSec : null;
    return { url: n.url, startSec: a, endSec: null !== o && o > a ? o : null };
  }
  function g(e) {
    let n = f(e);
    if (n) return n;
    let a = m(e.music);
    return a ? { url: a, startSec: 0, endSec: null } : null;
  }
}
