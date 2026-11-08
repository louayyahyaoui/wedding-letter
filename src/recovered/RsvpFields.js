// Recovered from the public Golden Letter demo; original module 1290.
export default function (e, t, a) {
  a.d(t, {
    GuestRsvpProvider: function () {
      return s;
    },
    RsvpFieldsProvider: function () {
      return c;
    },
    _: function () {
      return i;
    },
    b: function () {
      return d;
    },
  });
  var n = a(57437),
    r = a(2265);
  let l = (0, r.createContext)(null);
  function s(e) {
    let { subdomain: t, eventKeys: a, children: r } = e;
    return (0, n.jsx)(l.Provider, {
      value: { subdomain: t, eventKeys: a },
      children: r,
    });
  }
  function i() {
    return (0, r.useContext)(l);
  }
  let o = (0, r.createContext)([]);
  function c(e) {
    let { fields: t, children: a } = e;
    return (0, n.jsx)(o.Provider, {
      value: null != t ? t : [],
      children: a,
    });
  }
  function d() {
    return (0, r.useContext)(o);
  }
}
