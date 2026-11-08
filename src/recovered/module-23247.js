// Recovered from the public Golden Letter demo; original module 23247.
export default function (e, t, a) {
  a.d(t, {
    Cz: function () {
      return u;
    },
    JE: function () {
      return m;
    },
    ZP: function () {
      return x;
    },
  });
  var n = a(57437),
    r = a(9954),
    l = a(69678),
    s = a(87262),
    i = a(35536),
    o = a(36800);
  function c(e) {
    return String(e).padStart(2, "0");
  }
  function d(e) {
    return (
      e.getUTCFullYear() +
      c(e.getUTCMonth() + 1) +
      c(e.getUTCDate()) +
      "T" +
      c(e.getUTCHours()) +
      c(e.getUTCMinutes()) +
      c(e.getUTCSeconds()) +
      "Z"
    );
  }
  let u =
    "inline-flex items-center gap-2 border-2 border-[#b98a4a] bg-transparent px-5 py-2.5 font-heading text-base tracking-wide text-[#14261c] shadow-[inset_0_0_0_1px_rgba(185,138,74,0.35)] transition hover:bg-[#b98a4a]/10 [clip-path:polygon(0_8%,4%_0,96%_0,100%_8%,100%_92%,96%_100%,4%_100%,0_92%)]";
  function m(e) {
    switch (e) {
      case "ivory":
        return "inline-flex items-center justify-center gap-2 rounded-full border border-[#0f5132]/35 bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#0f5132] transition hover:bg-white";
      case "lavender":
        return "inline-flex items-center justify-center gap-2 rounded-full border border-[#44274B]/35 px-5 py-2.5 text-sm font-semibold text-[#44274B] transition hover:bg-[#44274B]/10";
      case "arabian":
        return "inline-flex items-center justify-center gap-2 rounded-full border border-[#7a4a2b]/35 px-5 py-2.5 text-sm font-semibold text-[#7a4a2b] transition hover:bg-[#7a4a2b]/10";
      case "petal":
        return "inline-flex items-center justify-center gap-2 rounded-full border border-[#6b2c3f]/35 px-5 py-2.5 text-sm font-semibold text-[#6b2c3f] transition hover:bg-[#6b2c3f]/10";
      case "beach":
        return "inline-flex items-center justify-center gap-2 rounded-full border border-[#0b5563]/35 bg-[#ef7f5b]/10 px-5 py-2.5 text-sm font-semibold text-[#0b5563] transition hover:bg-[#ef7f5b]/20";
      case "bloom":
        return "inline-flex items-center justify-center gap-2 rounded-full border border-[#8a6d3b]/35 bg-[#c98f4a]/10 px-5 py-2.5 text-sm font-semibold text-[#8a6d3b] transition hover:bg-[#c98f4a]/20";
      case "emerald":
        return "".concat(u, " justify-center");
      case "noor":
        return "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#3f6b54] px-7 py-3 font-heading text-sm tracking-wide text-[#fbf8f1] shadow-[0_6px_18px_rgba(31,74,51,0.25)] transition hover:bg-[#355c47]";
      case "golden":
        return "inline-flex items-center justify-center gap-2 rounded-full border border-[#3d1f06]/35 bg-[#c89c59] px-5 py-2.5 text-sm font-semibold text-[#3d1f06] transition hover:bg-[#bf9250]";
      case "light":
        return "inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-100";
      default:
        return "inline-flex items-center justify-center gap-2 rounded-full border border-gold-400/40 px-5 py-2.5 text-sm font-semibold text-gold-200 transition hover:bg-gold-400/10";
    }
  }
  function x(e) {
    let {
        invitation: t,
        event: a,
        className: c = "",
        variant: u = "royal",
        lang: x = "en",
        label: p,
      } = e,
      f = (0, o.b)(),
      h =
        null != a
          ? a
          : t
            ? (function (e) {
                var t, a;
                if (!(null === (t = e.event) || void 0 === t ? void 0 : t.date))
                  return null;
                let n = (0, l.p7)(e.couple),
                  r =
                    (null === (a = e.event.occasionType) || void 0 === a
                      ? void 0
                      : a.trim()) || "Wedding",
                  s = [e.event.venueName, e.event.address, e.event.city]
                    .filter(Boolean)
                    .join(", ");
                return {
                  title: "".concat(n, " — ").concat(r),
                  description: e.story
                    ? e.story
                    : "You're invited to celebrate "
                        .concat(n, "'s ")
                        .concat(r, "."),
                  location: s,
                  date: e.event.date,
                  time: e.event.time,
                };
              })(t)
            : null;
    if (!h) return null;
    let v = m(u);
    return (0, n.jsxs)("button", {
      type: "button",
      onClick: () => {
        if (f.locked) {
          f.notify("calendar");
          return;
        }
        if (
          (function () {
            if ("undefined" == typeof navigator) return !1;
            let e = navigator.userAgent || "",
              t = /iPad|iPhone|iPod/i.test(e),
              a =
                "MacIntel" === navigator.platform &&
                (navigator.maxTouchPoints || 0) > 1,
              n =
                /Macintosh/i.test(e) &&
                /Safari/i.test(e) &&
                !/Chrome|CriOS|Edg|Firefox/i.test(e);
            return t || a || n;
          })()
        ) {
          let e = (function (e) {
            var t, a, n;
            let r = (0, s.Ry)(e.date, e.time);
            if (!r) return null;
            let l =
                null !==
                  (n = (0, s.OM)(
                    e.date,
                    e.time,
                    null !== (t = e.durationHours) && void 0 !== t ? t : 3,
                  )) && void 0 !== n
                  ? n
                  : new Date(
                      r.getTime() +
                        (null !== (a = e.durationHours) && void 0 !== a
                          ? a
                          : 3) *
                          36e5,
                    ),
              i = d(new Date()),
              o = (e) =>
                e
                  .replace(/\\/g, "\\\\")
                  .replace(/;/g, "\\;")
                  .replace(/,/g, "\\,")
                  .replace(/\n/g, "\\n");
            return [
              "BEGIN:VCALENDAR",
              "VERSION:2.0",
              "PRODID:-//Forever Tale//Invitation//EN",
              "CALSCALE:GREGORIAN",
              "METHOD:PUBLISH",
              "BEGIN:VEVENT",
              "UID:"
                .concat(i, "-")
                .concat(
                  Math.random().toString(36).slice(2),
                  "@theforevertale.com",
                ),
              "DTSTAMP:".concat(i),
              "DTSTART:".concat(d(r)),
              "DTEND:".concat(d(l)),
              "SUMMARY:".concat(o(e.title)),
              e.description ? "DESCRIPTION:".concat(o(e.description)) : "",
              e.location ? "LOCATION:".concat(o(e.location)) : "",
              "END:VEVENT",
              "END:VCALENDAR",
            ]
              .filter(Boolean)
              .join("\r\n");
          })(h);
          if (!e) return;
          !(function (e, t) {
            let a = new Blob([t], { type: "text/calendar;charset=utf-8" }),
              n = URL.createObjectURL(a),
              r = document.createElement("a");
            ((r.href = n),
              (r.download = e),
              document.body.appendChild(r),
              r.click(),
              r.remove(),
              URL.revokeObjectURL(n));
          })("".concat(h.title.replace(/[^\w.-]+/g, "_"), ".ics"), e);
          return;
        }
        let e = (function (e) {
          var t, a, n;
          let r = (0, s.Ry)(e.date, e.time);
          if (!r) return null;
          let l =
              null !==
                (n = (0, s.OM)(
                  e.date,
                  e.time,
                  null !== (t = e.durationHours) && void 0 !== t ? t : 3,
                )) && void 0 !== n
                ? n
                : new Date(
                    r.getTime() +
                      (null !== (a = e.durationHours) && void 0 !== a ? a : 3) *
                        36e5,
                  ),
            i = "".concat(d(r), "/").concat(d(l)),
            o = new URLSearchParams({
              action: "TEMPLATE",
              text: e.title,
              dates: i,
              details: e.description || "",
              location: e.location || "",
            });
          return "https://calendar.google.com/calendar/render?".concat(
            o.toString(),
          );
        })(h);
        e && window.open(e, "_blank", "noopener,noreferrer");
      },
      className: "".concat(v, " ").concat(c),
      children: [
        (0, n.jsx)(r.Z, { className: "h-4 w-4" }),
        null != p ? p : (0, i.MH)(x).addToCalendar,
      ],
    });
  }
}
