// Recovered from the public Golden Letter demo; original module 35938.
export default function (t, e, i) {
  i.d(e, {
    featureDefinitions: function () {
      return r;
    },
  });
  let n = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    },
    r = {};
  for (let t in n) r[t] = { isEnabled: (e) => n[t].some((t) => !!e[t]) };
}
