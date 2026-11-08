// Recovered from the public Golden Letter demo; original module 60896.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return v;
    },
  });
  var n = a(57437),
    r = a(2265),
    l = a(74550),
    s = a(9646),
    i = a(68920),
    o = a(88997),
    c = a(51817),
    d = a(71837),
    u = a(1290),
    m = a(36800),
    x = a(17282),
    p = a(23247),
    f = a(35536),
    h = a(20693);
  function v(e) {
    var t, a;
    let {
        subdomain: v,
        variant: b = "light",
        showHeading: g = !0,
        compact: y = !1,
        lang: w = "en",
        extraFields: j,
        eventAttendanceOptions: N,
        ctaClassName: k,
        formClassName: E,
        fieldClassName: S,
        headingClassName: C,
      } = e,
      T = (0, f.MH)(w),
      M = (0, u._)(),
      L = (0, m.b)(),
      _ =
        (null !== (a = null == N ? void 0 : N.length) && void 0 !== a ? a : 0) >
        1,
      D = (0, r.useMemo)(() => {
        var e, t;
        if (!_ || !N) return [];
        let a =
          null !==
            (t =
              null == M
                ? void 0
                : null === (e = M.eventKeys) || void 0 === e
                  ? void 0
                  : e.filter(Boolean)) && void 0 !== t
            ? t
            : [];
        if (a.length > 0) {
          let e = new Set(N.map((e) => e.key)),
            t = a.filter((t) => e.has(t));
          if (t.length > 0) return t;
        }
        return N.map((e) => e.key);
      }, [N, null == M ? void 0 : M.eventKeys, _]),
      [z, R] = (0, r.useState)(() => D),
      Z = [
        { value: "yes", label: T.joyfullyAccepts },
        { value: "maybe", label: T.maybe },
        { value: "no", label: T.regretfullyDeclines },
      ],
      [B, I] = (0, r.useState)(""),
      [A, F] = (0, r.useState)(null),
      [O, P] = (0, r.useState)("1"),
      U = Math.min(20, Math.max(1, parseInt(O, 10) || 1)),
      [W, H] = (0, r.useState)(""),
      [q, Y] = (0, r.useState)(""),
      K = (0, u.b)(),
      [V, G] = (0, r.useState)({}),
      [$, X] = (0, r.useState)(!1),
      [J, Q] = (0, r.useState)(null),
      [ee, et] = (0, r.useState)(null),
      [ea, en] = (0, r.useState)(!1),
      er = "royal" === b,
      el = "golden" === b,
      es = "lavender" === b,
      ei = "petal" === b || "arabian" === b,
      eo = "beach" === b,
      ec = "bloom" === b,
      ed = "emerald" === b,
      eu = "noor" === b,
      em = el
        ? "text-[#3d1f06]"
        : er
          ? "text-gold-200"
          : es
            ? "text-[#44274B]"
            : ei
              ? "text-[#6b2c3f]"
              : eo
                ? "text-[#0b5563]"
                : ec
                  ? "text-[#8a6d3b]"
                  : ed
                    ? "text-[#1f3a2b]"
                    : eu
                      ? "text-[#1f4a33]"
                      : "text-brand-900",
      ex =
        null != C
          ? C
          : eu
            ? "font-noor-title text-6xl leading-[1.05] sm:text-7xl ".concat(em)
            : "".concat(h.y, " ").concat(em),
      ep = el
        ? "w-full rounded-xl border border-[#3d1f06]/25 bg-[#c89c59] px-4 py-2.5 text-sm text-[#3d1f06] outline-none transition-colors placeholder:text-[#6b4218]/55 focus:border-[#3d1f06]/55 focus:bg-[#c89c59] disabled:cursor-not-allowed"
        : er
          ? "w-full rounded-xl border border-gold-400/30 bg-brand-950 px-4 py-2.5 text-sm text-ivory outline-none transition-colors placeholder:text-gold-100/40 focus:border-gold-400/60 disabled:cursor-not-allowed"
          : es
            ? "w-full rounded-xl border border-[#44274B]/25 bg-transparent px-4 py-2.5 text-sm text-[#44274B] outline-none transition-colors placeholder:text-[#44274B]/40 focus:border-[#44274B]/55 disabled:cursor-not-allowed"
            : ei
              ? "w-full rounded-xl border border-[#6b2c3f]/25 bg-transparent px-4 py-2.5 text-sm text-[#6b2c3f] outline-none transition-colors placeholder:text-[#6b2c3f]/40 focus:border-[#6b2c3f]/55 disabled:cursor-not-allowed"
              : eo
                ? "w-full rounded-xl border border-[#0b5563]/25 bg-white/60 px-4 py-2.5 text-sm text-[#0b5563] outline-none transition-colors placeholder:text-[#0b5563]/40 focus:border-[#0b5563]/55 disabled:cursor-not-allowed"
                : ec
                  ? "w-full rounded-xl border border-[#8a6d3b]/25 bg-transparent px-4 py-2.5 text-sm text-[#8a6d3b] outline-none transition-colors placeholder:text-[#8a6d3b]/40 focus:border-[#8a6d3b]/55 disabled:cursor-not-allowed"
                  : ed
                    ? "w-full rounded-xl border border-[#b98a4a]/30 bg-[#f7efd9]/60 px-4 py-2.5 text-sm text-[#1f3a2b] outline-none transition-colors placeholder:text-[#1f3a2b]/40 focus:border-[#b98a4a]/60 disabled:cursor-not-allowed"
                    : eu
                      ? "w-full rounded-xl border border-[#a27b4c]/35 bg-[#fbf8f1]/80 px-4 py-2.5 text-sm text-[#1f4a33] outline-none transition-colors placeholder:text-[#5b5043]/45 focus:border-[#1f4a33]/50 disabled:cursor-not-allowed"
                      : x.Xi,
      ef = null != S ? S : ep,
      eh = null != k ? k : (0, p.JE)(b),
      ev = "".concat(eh, " w-full"),
      eb = y ? "px-0 py-0" : "px-6 py-16",
      eg = A
        ? null === (t = Z.find((e) => e.value === A)) || void 0 === t
          ? void 0
          : t.label
        : null,
      ey = async (e) => {
        if ((e.preventDefault(), A)) {
          if (!B.trim()) {
            et("Please enter your name");
            return;
          }
          if (L.locked) {
            L.notify("rsvp");
            return;
          }
          (X(!0), Q(null), et(null));
          try {
            var t, a;
            let e =
              null !== (a = null == M ? void 0 : M.subdomain) && void 0 !== a
                ? a
                : v;
            if (!e) {
              en(!0);
              return;
            }
            let n = {
              guestName: B,
              attending: A,
              partySize: "no" === A ? 1 : U,
              message: W,
            };
            (null == j ? void 0 : j.some((e) => "songRequest" === e.key)) &&
              q.trim() &&
              (n.songRequest = q.trim());
            let r = ("no" === A ? [] : K)
              .map((e) => {
                var t;
                return {
                  fieldId: e.id,
                  value: (null !== (t = V[e.id]) && void 0 !== t
                    ? t
                    : ""
                  ).trim(),
                };
              })
              .filter((e) => e.value);
            (r.length > 0 && (n.customAnswers = r),
              _ && "no" !== A && z.length > 0
                ? (n.eventKeys = z)
                : (null == M
                    ? void 0
                    : null === (t = M.eventKeys) || void 0 === t
                      ? void 0
                      : t.length) && (n.eventKeys = M.eventKeys),
              await (0, d.CE)(e, n),
              en(!0));
          } catch (e) {
            Q(e instanceof d.MS ? e.message : T.sendFailed);
          } finally {
            X(!1);
          }
        }
      };
    return ea
      ? (0, n.jsxs)("section", {
          "data-guest-rsvp": !0,
          className: "mx-auto max-w-lg text-center ".concat(eb),
          children: [
            eo
              ? (0, n.jsx)(l.Z, {
                  className: "mx-auto mb-4 h-6 w-6 text-[#ef7f5b]",
                })
              : ec
                ? (0, n.jsx)(s.Z, {
                    className: "mx-auto mb-4 h-6 w-6 text-[#c98f4a]",
                  })
                : ed
                  ? (0, n.jsx)(i.Z, {
                      className: "mx-auto mb-4 h-6 w-6 text-[#b98a4a]",
                    })
                  : eu
                    ? (0, n.jsx)(s.Z, {
                        className: "mx-auto mb-4 h-6 w-6 text-[#a27b4c]",
                      })
                    : (0, n.jsx)(o.Z, {
                        className: "mx-auto mb-4 h-6 w-6 ".concat(
                          el
                            ? "text-[#3d1f06]"
                            : er
                              ? "text-gold-300"
                              : es
                                ? "text-[#c4a35a]"
                                : ei
                                  ? "text-[#c9975a]"
                                  : "text-brand-700",
                        ),
                      }),
            (0, n.jsx)("h2", { className: ex, children: T.thankYou }),
            (0, n.jsx)("p", {
              className: el
                ? "mt-2 text-center text-sm text-[#5a3510]"
                : er
                  ? "mt-2 text-center text-sm text-gold-100/80"
                  : es
                    ? "mt-2 text-center text-sm text-[#44274B]/80"
                    : ei
                      ? "mt-2 text-center text-sm text-[#6b2c3f]/80"
                      : eo
                        ? "mt-2 text-center text-sm text-[#0b5563]/80"
                        : ec
                          ? "mt-2 text-center text-sm text-[#8a6d3b]/80"
                          : ed
                            ? "mt-2 text-center text-sm text-[#1f3a2b]/80"
                            : eu
                              ? "mt-2 text-center text-sm text-[#5b5043]"
                              : "mt-2 text-center text-sm text-brand-800/70",
              children: v ? T.replySent : T.previewNotSent,
            }),
          ],
        })
      : (0, n.jsxs)("section", {
          "data-guest-rsvp": !0,
          className: "mx-auto max-w-lg ".concat(eb),
          style:
            !(el || er || es || ei || eo || ec || ed || eu) ||
            es ||
            ei ||
            eo ||
            ec ||
            ed ||
            eu
              ? void 0
              : { borderColor: el ? "#3d1f0622" : void 0 },
          children: [
            g &&
              (0, n.jsx)("h2", {
                className: "text-center ".concat(ex),
                children: T.willYouJoin,
              }),
            (0, n.jsx)("form", {
              onSubmit: ey,
              className: ""
                .concat(
                  null != E
                    ? E
                    : el
                      ? "mt-6 space-y-4 rounded-2xl border border-[#3d1f06]/20 bg-[#c4892e]/35 p-6"
                      : er
                        ? "mt-6 space-y-4 rounded-2xl border border-gold-400/25 bg-brand-900/55 p-6"
                        : es || ei || eo || ec || ed || eu
                          ? "".concat(y ? "mt-4" : "mt-6", " space-y-3 p-1")
                          : "mt-6 space-y-4 rounded-2xl border border-brand-100 bg-white/70 p-6",
                  " ",
                )
                .concat(
                  el
                    ? "[&_label>span]:text-[#5a3510] [&_label>span>span]:text-[#3d1f06]"
                    : er
                      ? "[&_label>span]:text-gold-100/70 [&_label>span>span]:text-gold-300"
                      : es
                        ? "[&_label>span]:text-[#44274B]/80 [&_label>span>span]:text-[#44274B]"
                        : ei
                          ? "[&_label>span]:text-[#6b2c3f]/80 [&_label>span>span]:text-[#6b2c3f]"
                          : eo
                            ? "[&_label>span]:text-[#0b5563]/80 [&_label>span>span]:text-[#0b5563]"
                            : ec
                              ? "[&_label>span]:text-[#8a6d3b]/80 [&_label>span>span]:text-[#8a6d3b]"
                              : ed
                                ? "[&_label>span]:text-[#1f3a2b]/80 [&_label>span>span]:text-[#1f3a2b]"
                                : eu
                                  ? "[&_label>span]:text-[#5b5043] [&_label>span>span]:text-[#1f4a33]"
                                  : "",
                ),
              children: A
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                          (0, n.jsx)("p", {
                            className: "text-sm font-semibold ".concat(em),
                            children: eg,
                          }),
                          (0, n.jsx)("button", {
                            type: "button",
                            onClick: () => F(null),
                            className:
                              "text-xs font-medium underline-offset-2 hover:underline ".concat(
                                el
                                  ? "text-[#5a3510]/80 hover:text-[#3d1f06]"
                                  : er
                                    ? "text-gold-100/70 hover:text-gold-100"
                                    : es
                                      ? "text-[#44274B]/70 hover:text-[#44274B]"
                                      : ei
                                        ? "text-[#6b2c3f]/70 hover:text-[#6b2c3f]"
                                        : eo
                                          ? "text-[#0b5563]/70 hover:text-[#0b5563]"
                                          : ec
                                            ? "text-[#8a6d3b]/70 hover:text-[#8a6d3b]"
                                            : ed
                                              ? "text-[#1f3a2b]/70 hover:text-[#1f3a2b]"
                                              : eu
                                                ? "text-[#1f4a33]/70 hover:text-[#1f4a33]"
                                                : "text-brand-700/70 hover:text-brand-800",
                              ),
                            children: T.changeRsvp,
                          }),
                        ],
                      }),
                      (0, n.jsxs)(x.gN, {
                        label: T.yourName,
                        required: !0,
                        children: [
                          (0, n.jsx)("input", {
                            value: B,
                            onChange: (e) => {
                              (I(e.target.value), ee && et(null));
                            },
                            placeholder: T.guestNamePlaceholder,
                            className: ef,
                            "aria-invalid": !!ee || void 0,
                          }),
                          ee &&
                            (0, n.jsx)("p", {
                              className:
                                "mt-1.5 text-xs font-medium text-red-600",
                              children: ee,
                            }),
                        ],
                      }),
                      _ && "no" !== A
                        ? (0, n.jsx)(x.gN, {
                            label: "The events you are attending",
                            children: (0, n.jsx)("div", {
                              className: "flex flex-col gap-2",
                              children: N.map((e) => {
                                let t = z.includes(e.key);
                                return (0, n.jsxs)(
                                  "label",
                                  {
                                    className:
                                      "flex cursor-pointer items-center gap-2.5 rounded-xl border px-3 py-2.5 text-sm transition-colors ".concat(
                                        t
                                          ? ec
                                            ? "border-[#8a6d3b]/45 bg-[#8a6d3b]/08"
                                            : "border-brand-700/35 bg-brand-50/80"
                                          : ec
                                            ? "border-[#8a6d3b]/20 bg-transparent"
                                            : "border-brand-200/80 bg-white/50",
                                      ),
                                    children: [
                                      (0, n.jsx)("input", {
                                        type: "checkbox",
                                        checked: t,
                                        onChange: () => {
                                          R((a) =>
                                            t
                                              ? a.length <= 1
                                                ? a
                                                : a.filter((t) => t !== e.key)
                                              : [...a, e.key],
                                          );
                                        },
                                        className:
                                          "h-4 w-4 shrink-0 accent-[#8a6d3b]",
                                      }),
                                      (0, n.jsx)("span", {
                                        className: em,
                                        children: e.label,
                                      }),
                                    ],
                                  },
                                  e.key,
                                );
                              }),
                            }),
                          })
                        : null,
                      "no" !== A &&
                        (0, n.jsx)(x.gN, {
                          label: T.numberOfGuests,
                          children: (0, n.jsx)("input", {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            value: O,
                            onChange: (e) =>
                              P(
                                e.target.value
                                  .replace(/[^0-9]/g, "")
                                  .slice(0, 2),
                              ),
                            onBlur: () => P(String(U)),
                            className: ef,
                          }),
                        }),
                      "no" !== A &&
                        K.map((e) => {
                          var t;
                          return (0, n.jsx)(
                            x.gN,
                            {
                              label: e.label,
                              children: (0, n.jsx)("input", {
                                type: "phone" === e.type ? "tel" : "text",
                                inputMode:
                                  "number" === e.type
                                    ? "decimal"
                                    : "phone" === e.type
                                      ? "tel"
                                      : void 0,
                                autoComplete:
                                  "phone" === e.type ? "tel" : void 0,
                                maxLength: "text" === e.type ? 500 : 40,
                                value:
                                  null !== (t = V[e.id]) && void 0 !== t
                                    ? t
                                    : "",
                                onChange: (t) => {
                                  let a = t.target.value,
                                    n =
                                      "number" === e.type
                                        ? a.replace(/[^0-9.,-]/g, "")
                                        : "phone" === e.type
                                          ? a.replace(/[^0-9+()\-\s]/g, "")
                                          : a;
                                  G((t) => ({ ...t, [e.id]: n }));
                                },
                                className: ef,
                              }),
                            },
                            e.id,
                          );
                        }),
                      (0, n.jsx)(x.gN, {
                        label: T.messageOptional,
                        children: (0, n.jsx)("textarea", {
                          value: W,
                          onChange: (e) => H(e.target.value),
                          rows: y ? 2 : 3,
                          placeholder: T.wishPlaceholder,
                          className: ef,
                        }),
                      }),
                      null == j
                        ? void 0
                        : j.map((e) =>
                            "songRequest" === e.key
                              ? (0, n.jsx)(
                                  x.gN,
                                  {
                                    label: e.label,
                                    children: (0, n.jsx)("input", {
                                      value: q,
                                      onChange: (t) => {
                                        var a;
                                        return Y(
                                          t.target.value.slice(
                                            0,
                                            null !== (a = e.maxLength) &&
                                              void 0 !== a
                                              ? a
                                              : 200,
                                          ),
                                        );
                                      },
                                      placeholder: e.placeholder,
                                      className: ef,
                                    }),
                                  },
                                  e.key,
                                )
                              : null,
                          ),
                      J &&
                        (0, n.jsx)("p", {
                          className: "text-sm font-medium ".concat(
                            el
                              ? "text-[#3d1f06]"
                              : er
                                ? "text-gold-300"
                                : es
                                  ? "text-[#44274B]"
                                  : ei
                                    ? "text-[#6b2c3f]"
                                    : eo
                                      ? "text-[#0b5563]"
                                      : ec
                                        ? "text-[#8a6d3b]"
                                        : ed
                                          ? "text-[#1f3a2b]"
                                          : eu
                                            ? "text-[#1f4a33]"
                                            : "text-brand-600",
                          ),
                          children: J,
                        }),
                      (0, n.jsxs)("button", {
                        type: "submit",
                        disabled: $ || (_ && "no" !== A && 0 === z.length),
                        className: "".concat(eh, " w-full disabled:opacity-50"),
                        children: [
                          $ &&
                            (0, n.jsx)(c.Z, {
                              className: "h-4 w-4 animate-spin",
                            }),
                          T.sendReply,
                        ],
                      }),
                    ],
                  })
                : (0, n.jsx)("div", {
                    className: "flex flex-col gap-2.5",
                    children: Z.map((e) =>
                      (0, n.jsx)(
                        "button",
                        {
                          type: "button",
                          onClick: () => F(e.value),
                          className: ev,
                          children: e.label,
                        },
                        e.value,
                      ),
                    ),
                  }),
            }),
          ],
        });
  }
}
