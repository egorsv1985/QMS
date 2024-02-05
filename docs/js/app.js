(() => {
  var e = {
      807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
    },
    t = {};
  function i(s) {
    var r = t[s];
    if (void 0 !== r) return r.exports;
    var o = (t[s] = { exports: {} });
    return e[s](o, o.exports, i), o.exports;
  }
  (() => {
    "use strict";
    const e = {},
      t = document.querySelector(".header");
    t.addEventListener("click", function (e) {
      e.target.classList.contains("menu__link") && o();
    }),
      (window.onload = function () {
        const e = document.querySelector(".connect"),
          i = document.querySelector(".canvas__item"),
          s = document.getElementById("background");
        let r = t.getBoundingClientRect().top + window.pageYOffset,
          o = window.pageYOffset + e.getBoundingClientRect().y - r,
          l = s.getBoundingClientRect().height;
        document.querySelector(".wrapper").getBoundingClientRect().height;
        for (var n = [], a = 3; a < 300; a++) {
          var c = "000";
          a < 10 ? (c += "00") : a < 100 && (c += "0"), (c += a + ".jpg");
          var h = new Image();
          (h.src = "./img/canvas/" + c), n.push(h);
        }
        let d = document.getElementById("background").getContext("2d"),
          u = function (e) {
            d.drawImage(n[e], 0, 0, 960, 960);
          };
        setTimeout(() => {
          u(3);
        }, 1e3);
        i.style.top = "70px";
        let p = function () {
          let e = window.pageYOffset + l;
          e < o - 70
            ? ((i.style.position = "fixed"), (i.style.top = "70px"))
            : e > o - 70 &&
              ((i.style.position = "absolute"),
              (i.style.top = o - l - 20 + "px"));
        };
        p(),
          window.addEventListener("scroll", (e) => {
            p();
            let t =
                (window.pageYOffset + document.documentElement.clientHeight) /
                300,
              i = Math.round(window.pageYOffset / t);
            u(i);
          });
      });
    let s = !0,
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (s) {
          let i = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (s = !1),
            setTimeout(function () {
              s = !0;
            }, e);
        }
      };
    function o() {
      r(), document.documentElement.classList.remove("menu-open");
    }
    function l(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    let n = {
      getErrors(e) {
        let t = 0,
          i = e.querySelectorAll("*[data-required]");
        return (
          i.length &&
            i.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
              ? this.removeError(e)
              : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.closest(".form__row").classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`,
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error"),
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let i = t.querySelectorAll("input,textarea");
            for (let e = 0; e < i.length; e++) {
              const t = i[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                n.removeError(t);
            }
            let s = t.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (e.select) {
              let i = t.querySelectorAll(".select");
              if (i.length)
                for (let t = 0; t < i.length; t++) {
                  const s = i[t].querySelector("select");
                  e.select.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    var a = i(807);
    const c = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
    const h =
      "object" == typeof global && global && global.Object === Object && global;
    var d = "object" == typeof self && self && self.Object === Object && self;
    const u = h || d || Function("return this")();
    const p = function () {
      return u.Date.now();
    };
    var f = /\s/;
    const v = function (e) {
      for (var t = e.length; t-- && f.test(e.charAt(t)); );
      return t;
    };
    var m = /^\s+/;
    const g = function (e) {
      return e ? e.slice(0, v(e) + 1).replace(m, "") : e;
    };
    const b = u.Symbol;
    var E = Object.prototype,
      y = E.hasOwnProperty,
      x = E.toString,
      w = b ? b.toStringTag : void 0;
    const S = function (e) {
      var t = y.call(e, w),
        i = e[w];
      try {
        e[w] = void 0;
        var s = !0;
      } catch (e) {}
      var r = x.call(e);
      return s && (t ? (e[w] = i) : delete e[w]), r;
    };
    var A = Object.prototype.toString;
    const O = function (e) {
      return A.call(e);
    };
    var k = b ? b.toStringTag : void 0;
    const L = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : k && k in Object(e)
          ? S(e)
          : O(e);
    };
    const W = function (e) {
      return null != e && "object" == typeof e;
    };
    const M = function (e) {
      return "symbol" == typeof e || (W(e) && "[object Symbol]" == L(e));
    };
    var N = /^[-+]0x[0-9a-f]+$/i,
      C = /^0b[01]+$/i,
      z = /^0o[0-7]+$/i,
      T = parseInt;
    const _ = function (e) {
      if ("number" == typeof e) return e;
      if (M(e)) return NaN;
      if (c(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = c(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = g(e);
      var i = C.test(e);
      return i || z.test(e) ? T(e.slice(2), i ? 2 : 8) : N.test(e) ? NaN : +e;
    };
    var R = Math.max,
      q = Math.min;
    const D = function (e, t, i) {
      var s,
        r,
        o,
        l,
        n,
        a,
        h = 0,
        d = !1,
        u = !1,
        f = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function v(t) {
        var i = s,
          o = r;
        return (s = r = void 0), (h = t), (l = e.apply(o, i));
      }
      function m(e) {
        var i = e - a;
        return void 0 === a || i >= t || i < 0 || (u && e - h >= o);
      }
      function g() {
        var e = p();
        if (m(e)) return b(e);
        n = setTimeout(
          g,
          (function (e) {
            var i = t - (e - a);
            return u ? q(i, o - (e - h)) : i;
          })(e),
        );
      }
      function b(e) {
        return (n = void 0), f && s ? v(e) : ((s = r = void 0), l);
      }
      function E() {
        var e = p(),
          i = m(e);
        if (((s = arguments), (r = this), (a = e), i)) {
          if (void 0 === n)
            return (function (e) {
              return (h = e), (n = setTimeout(g, t)), d ? v(e) : l;
            })(a);
          if (u) return clearTimeout(n), (n = setTimeout(g, t)), v(a);
        }
        return void 0 === n && (n = setTimeout(g, t)), l;
      }
      return (
        (t = _(t) || 0),
        c(i) &&
          ((d = !!i.leading),
          (o = (u = "maxWait" in i) ? R(_(i.maxWait) || 0, t) : o),
          (f = "trailing" in i ? !!i.trailing : f)),
        (E.cancel = function () {
          void 0 !== n && clearTimeout(n), (h = 0), (s = a = r = n = void 0);
        }),
        (E.flush = function () {
          return void 0 === n ? l : b(p());
        }),
        E
      );
    };
    const B = function (e, t, i) {
      var s = !0,
        r = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        c(i) &&
          ((s = "leading" in i ? !!i.leading : s),
          (r = "trailing" in i ? !!i.trailing : r)),
        D(e, t, { leading: s, maxWait: t, trailing: r })
      );
    };
    var V = function () {
        return (
          (V =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          V.apply(this, arguments)
        );
      },
      H = null,
      j = null;
    function I() {
      if (null === H) {
        if ("undefined" == typeof document) return (H = 0);
        var e = document.body,
          t = document.createElement("div");
        t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
        var i = t.getBoundingClientRect().right;
        e.removeChild(t), (H = i);
      }
      return H;
    }
    function Y(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView
        ? e.ownerDocument.defaultView
        : window;
    }
    function P(e) {
      return e && e.ownerDocument ? e.ownerDocument : document;
    }
    a &&
      window.addEventListener("resize", function () {
        j !== window.devicePixelRatio &&
          ((j = window.devicePixelRatio), (H = null));
      });
    var X = function (e) {
      return Array.prototype.reduce.call(
        e,
        function (e, t) {
          var i = t.name.match(/data-simplebar-(.+)/);
          if (i) {
            var s = i[1].replace(/\W+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
            switch (t.value) {
              case "true":
                e[s] = !0;
                break;
              case "false":
                e[s] = !1;
                break;
              case void 0:
                e[s] = !0;
                break;
              default:
                e[s] = t.value;
            }
          }
          return e;
        },
        {},
      );
    };
    function F(e, t) {
      var i;
      e && (i = e.classList).add.apply(i, t.split(" "));
    }
    function $(e, t) {
      e &&
        t.split(" ").forEach(function (t) {
          e.classList.remove(t);
        });
    }
    function U(e) {
      return ".".concat(e.split(" ").join("."));
    }
    var Q = Object.freeze({
        __proto__: null,
        getElementWindow: Y,
        getElementDocument: P,
        getOptions: X,
        addClasses: F,
        removeClasses: $,
        classNamesToQuery: U,
      }),
      G = Y,
      Z = P,
      J = X,
      K = F,
      ee = $,
      te = U,
      ie = (function () {
        function e(t, i) {
          void 0 === i && (i = {});
          var s = this;
          if (
            ((this.removePreventClickId = null),
            (this.minScrollbarWidth = 20),
            (this.stopScrollDelay = 175),
            (this.isScrolling = !1),
            (this.isMouseEntering = !1),
            (this.scrollXTicking = !1),
            (this.scrollYTicking = !1),
            (this.wrapperEl = null),
            (this.contentWrapperEl = null),
            (this.contentEl = null),
            (this.offsetEl = null),
            (this.maskEl = null),
            (this.placeholderEl = null),
            (this.heightAutoObserverWrapperEl = null),
            (this.heightAutoObserverEl = null),
            (this.rtlHelpers = null),
            (this.scrollbarWidth = 0),
            (this.resizeObserver = null),
            (this.mutationObserver = null),
            (this.elStyles = null),
            (this.isRtl = null),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.onMouseMove = function () {}),
            (this.onWindowResize = function () {}),
            (this.onStopScrolling = function () {}),
            (this.onMouseEntered = function () {}),
            (this.onScroll = function () {
              var e = G(s.el);
              s.scrollXTicking ||
                (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
                s.scrollYTicking ||
                  (e.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0)),
                s.isScrolling ||
                  ((s.isScrolling = !0), K(s.el, s.classNames.scrolling)),
                s.showScrollbar("x"),
                s.showScrollbar("y"),
                s.onStopScrolling();
            }),
            (this.scrollX = function () {
              s.axis.x.isOverflowing && s.positionScrollbar("x"),
                (s.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              s.axis.y.isOverflowing && s.positionScrollbar("y"),
                (s.scrollYTicking = !1);
            }),
            (this._onStopScrolling = function () {
              ee(s.el, s.classNames.scrolling),
                s.options.autoHide &&
                  (s.hideScrollbar("x"), s.hideScrollbar("y")),
                (s.isScrolling = !1);
            }),
            (this.onMouseEnter = function () {
              s.isMouseEntering ||
                (K(s.el, s.classNames.mouseEntered),
                s.showScrollbar("x"),
                s.showScrollbar("y"),
                (s.isMouseEntering = !0)),
                s.onMouseEntered();
            }),
            (this._onMouseEntered = function () {
              ee(s.el, s.classNames.mouseEntered),
                s.options.autoHide &&
                  (s.hideScrollbar("x"), s.hideScrollbar("y")),
                (s.isMouseEntering = !1);
            }),
            (this._onMouseMove = function (e) {
              (s.mouseX = e.clientX),
                (s.mouseY = e.clientY),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseMoveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              s.onMouseMove.cancel(),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseLeaveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseLeaveForAxis("y"),
                (s.mouseX = -1),
                (s.mouseY = -1);
            }),
            (this._onWindowResize = function () {
              (s.scrollbarWidth = s.getScrollbarWidth()),
                s.hideNativeScrollbar();
            }),
            (this.onPointerEvent = function (e) {
              var t, i;
              s.axis.x.track.el &&
                s.axis.y.track.el &&
                s.axis.x.scrollbar.el &&
                s.axis.y.scrollbar.el &&
                ((s.axis.x.track.rect =
                  s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  (t = s.isWithinBounds(s.axis.x.track.rect)),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  (i = s.isWithinBounds(s.axis.y.track.rect)),
                (t || i) &&
                  (e.stopPropagation(),
                  "pointerdown" === e.type &&
                    "touch" !== e.pointerType &&
                    (t &&
                      ((s.axis.x.scrollbar.rect =
                        s.axis.x.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.x.scrollbar.rect)
                        ? s.onDragStart(e, "x")
                        : s.onTrackClick(e, "x")),
                    i &&
                      ((s.axis.y.scrollbar.rect =
                        s.axis.y.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.y.scrollbar.rect)
                        ? s.onDragStart(e, "y")
                        : s.onTrackClick(e, "y")))));
            }),
            (this.drag = function (t) {
              var i, r, o, l, n, a, c, h, d, u, p;
              if (s.draggedAxis && s.contentWrapperEl) {
                var f = s.axis[s.draggedAxis].track,
                  v =
                    null !==
                      (r =
                        null === (i = f.rect) || void 0 === i
                          ? void 0
                          : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r
                      ? r
                      : 0,
                  m = s.axis[s.draggedAxis].scrollbar,
                  g =
                    null !==
                      (l =
                        null === (o = s.contentWrapperEl) || void 0 === o
                          ? void 0
                          : o[s.axis[s.draggedAxis].scrollSizeAttr]) &&
                    void 0 !== l
                      ? l
                      : 0,
                  b = parseInt(
                    null !==
                      (a =
                        null === (n = s.elStyles) || void 0 === n
                          ? void 0
                          : n[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a
                      ? a
                      : "0px",
                    10,
                  );
                t.preventDefault(), t.stopPropagation();
                var E =
                    ("y" === s.draggedAxis ? t.pageY : t.pageX) -
                    (null !==
                      (h =
                        null === (c = f.rect) || void 0 === c
                          ? void 0
                          : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== h
                      ? h
                      : 0) -
                    s.axis[s.draggedAxis].dragOffset,
                  y =
                    ((E =
                      "x" === s.draggedAxis && s.isRtl
                        ? (null !==
                            (u =
                              null === (d = f.rect) || void 0 === d
                                ? void 0
                                : d[s.axis[s.draggedAxis].sizeAttr]) &&
                          void 0 !== u
                            ? u
                            : 0) -
                          m.size -
                          E
                        : E) /
                      (v - m.size)) *
                    (g - b);
                "x" === s.draggedAxis &&
                  s.isRtl &&
                  (y = (
                    null === (p = e.getRtlHelpers()) || void 0 === p
                      ? void 0
                      : p.isScrollingToNegative
                  )
                    ? -y
                    : y),
                  (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] =
                    y);
              }
            }),
            (this.onEndDrag = function (e) {
              var t = Z(s.el),
                i = G(s.el);
              e.preventDefault(),
                e.stopPropagation(),
                ee(s.el, s.classNames.dragging),
                t.removeEventListener("mousemove", s.drag, !0),
                t.removeEventListener("mouseup", s.onEndDrag, !0),
                (s.removePreventClickId = i.setTimeout(function () {
                  t.removeEventListener("click", s.preventClick, !0),
                    t.removeEventListener("dblclick", s.preventClick, !0),
                    (s.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.options = V(V({}, e.defaultOptions), i)),
            (this.classNames = V(
              V({}, e.defaultOptions.classNames),
              i.classNames,
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
            }),
            "object" != typeof this.el || !this.el.nodeName)
          )
            throw new Error(
              "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                this.el,
              ),
            );
          (this.onMouseMove = B(this._onMouseMove, 64)),
            (this.onWindowResize = D(this._onWindowResize, 64, {
              leading: !0,
            })),
            (this.onStopScrolling = D(
              this._onStopScrolling,
              this.stopScrollDelay,
            )),
            (this.onMouseEntered = D(
              this._onMouseEntered,
              this.stopScrollDelay,
            )),
            this.init();
        }
        return (
          (e.getRtlHelpers = function () {
            if (e.rtlHelpers) return e.rtlHelpers;
            var t = document.createElement("div");
            t.innerHTML =
              '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
            var i = t.firstElementChild,
              s = null == i ? void 0 : i.firstElementChild;
            if (!s) return null;
            document.body.appendChild(i), (i.scrollLeft = 0);
            var r = e.getOffset(i),
              o = e.getOffset(s);
            i.scrollLeft = -999;
            var l = e.getOffset(s);
            return (
              document.body.removeChild(i),
              (e.rtlHelpers = {
                isScrollOriginAtZero: r.left !== o.left,
                isScrollingToNegative: o.left !== l.left,
              }),
              e.rtlHelpers
            );
          }),
          (e.prototype.getScrollbarWidth = function () {
            try {
              return (this.contentWrapperEl &&
                "none" ===
                  getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                    .display) ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : I();
            } catch (e) {
              return I();
            }
          }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              i = Z(e),
              s = G(e);
            return {
              top: t.top + (s.pageYOffset || i.documentElement.scrollTop),
              left: t.left + (s.pageXOffset || i.documentElement.scrollLeft),
            };
          }),
          (e.prototype.init = function () {
            a &&
              (this.initDOM(),
              (this.rtlHelpers = e.getRtlHelpers()),
              (this.scrollbarWidth = this.getScrollbarWidth()),
              this.recalculate(),
              this.initListeners());
          }),
          (e.prototype.initDOM = function () {
            var e, t;
            (this.wrapperEl = this.el.querySelector(
              te(this.classNames.wrapper),
            )),
              (this.contentWrapperEl =
                this.options.scrollableNode ||
                this.el.querySelector(te(this.classNames.contentWrapper))),
              (this.contentEl =
                this.options.contentNode ||
                this.el.querySelector(te(this.classNames.contentEl))),
              (this.offsetEl = this.el.querySelector(
                te(this.classNames.offset),
              )),
              (this.maskEl = this.el.querySelector(te(this.classNames.mask))),
              (this.placeholderEl = this.findChild(
                this.wrapperEl,
                te(this.classNames.placeholder),
              )),
              (this.heightAutoObserverWrapperEl = this.el.querySelector(
                te(this.classNames.heightAutoObserverWrapperEl),
              )),
              (this.heightAutoObserverEl = this.el.querySelector(
                te(this.classNames.heightAutoObserverEl),
              )),
              (this.axis.x.track.el = this.findChild(
                this.el,
                ""
                  .concat(te(this.classNames.track))
                  .concat(te(this.classNames.horizontal)),
              )),
              (this.axis.y.track.el = this.findChild(
                this.el,
                ""
                  .concat(te(this.classNames.track))
                  .concat(te(this.classNames.vertical)),
              )),
              (this.axis.x.scrollbar.el =
                (null === (e = this.axis.x.track.el) || void 0 === e
                  ? void 0
                  : e.querySelector(te(this.classNames.scrollbar))) || null),
              (this.axis.y.scrollbar.el =
                (null === (t = this.axis.y.track.el) || void 0 === t
                  ? void 0
                  : t.querySelector(te(this.classNames.scrollbar))) || null),
              this.options.autoHide ||
                (K(this.axis.x.scrollbar.el, this.classNames.visible),
                K(this.axis.y.scrollbar.el, this.classNames.visible));
          }),
          (e.prototype.initListeners = function () {
            var e,
              t = this,
              i = G(this.el);
            if (
              (this.el.addEventListener("mouseenter", this.onMouseEnter),
              this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              null === (e = this.contentWrapperEl) ||
                void 0 === e ||
                e.addEventListener("scroll", this.onScroll),
              i.addEventListener("resize", this.onWindowResize),
              this.contentEl)
            ) {
              if (window.ResizeObserver) {
                var s = !1,
                  r = i.ResizeObserver || ResizeObserver;
                (this.resizeObserver = new r(function () {
                  s &&
                    i.requestAnimationFrame(function () {
                      t.recalculate();
                    });
                })),
                  this.resizeObserver.observe(this.el),
                  this.resizeObserver.observe(this.contentEl),
                  i.requestAnimationFrame(function () {
                    s = !0;
                  });
              }
              (this.mutationObserver = new i.MutationObserver(function () {
                i.requestAnimationFrame(function () {
                  t.recalculate();
                });
              })),
                this.mutationObserver.observe(this.contentEl, {
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                });
            }
          }),
          (e.prototype.recalculate = function () {
            if (
              this.heightAutoObserverEl &&
              this.contentEl &&
              this.contentWrapperEl &&
              this.wrapperEl &&
              this.placeholderEl
            ) {
              var e = G(this.el);
              (this.elStyles = e.getComputedStyle(this.el)),
                (this.isRtl = "rtl" === this.elStyles.direction);
              var t = this.contentEl.offsetWidth,
                i = this.heightAutoObserverEl.offsetHeight <= 1,
                s = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                r = this.contentWrapperEl.offsetWidth,
                o = this.elStyles.overflowX,
                l = this.elStyles.overflowY;
              (this.contentEl.style.padding = ""
                .concat(this.elStyles.paddingTop, " ")
                .concat(this.elStyles.paddingRight, " ")
                .concat(this.elStyles.paddingBottom, " ")
                .concat(this.elStyles.paddingLeft)),
                (this.wrapperEl.style.margin = "-"
                  .concat(this.elStyles.paddingTop, " -")
                  .concat(this.elStyles.paddingRight, " -")
                  .concat(this.elStyles.paddingBottom, " -")
                  .concat(this.elStyles.paddingLeft));
              var n = this.contentEl.scrollHeight,
                a = this.contentEl.scrollWidth;
              (this.contentWrapperEl.style.height = i ? "auto" : "100%"),
                (this.placeholderEl.style.width = s
                  ? "".concat(t || a, "px")
                  : "auto"),
                (this.placeholderEl.style.height = "".concat(n, "px"));
              var c = this.contentWrapperEl.offsetHeight;
              (this.axis.x.isOverflowing = 0 !== t && a > t),
                (this.axis.y.isOverflowing = n > c),
                (this.axis.x.isOverflowing =
                  "hidden" !== o && this.axis.x.isOverflowing),
                (this.axis.y.isOverflowing =
                  "hidden" !== l && this.axis.y.isOverflowing),
                (this.axis.x.forceVisible =
                  "x" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                (this.axis.y.forceVisible =
                  "y" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                this.hideNativeScrollbar();
              var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                d = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
              (this.axis.x.isOverflowing =
                this.axis.x.isOverflowing && a > r - d),
                (this.axis.y.isOverflowing =
                  this.axis.y.isOverflowing && n > c - h),
                (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                this.axis.x.scrollbar.el &&
                  (this.axis.x.scrollbar.el.style.width = "".concat(
                    this.axis.x.scrollbar.size,
                    "px",
                  )),
                this.axis.y.scrollbar.el &&
                  (this.axis.y.scrollbar.el.style.height = "".concat(
                    this.axis.y.scrollbar.size,
                    "px",
                  )),
                this.positionScrollbar("x"),
                this.positionScrollbar("y"),
                this.toggleTrackVisibility("x"),
                this.toggleTrackVisibility("y");
            }
          }),
          (e.prototype.getScrollbarSize = function (e) {
            var t, i;
            if (
              (void 0 === e && (e = "y"),
              !this.axis[e].isOverflowing || !this.contentEl)
            )
              return 0;
            var s,
              r = this.contentEl[this.axis[e].scrollSizeAttr],
              o =
                null !==
                  (i =
                    null === (t = this.axis[e].track.el) || void 0 === t
                      ? void 0
                      : t[this.axis[e].offsetSizeAttr]) && void 0 !== i
                  ? i
                  : 0,
              l = o / r;
            return (
              (s = Math.max(~~(l * o), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (s = Math.min(s, this.options.scrollbarMaxSize)),
              s
            );
          }),
          (e.prototype.positionScrollbar = function (t) {
            var i, s, r;
            void 0 === t && (t = "y");
            var o = this.axis[t].scrollbar;
            if (
              this.axis[t].isOverflowing &&
              this.contentWrapperEl &&
              o.el &&
              this.elStyles
            ) {
              var l = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                n =
                  (null === (i = this.axis[t].track.el) || void 0 === i
                    ? void 0
                    : i[this.axis[t].offsetSizeAttr]) || 0,
                a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
              (c =
                "x" === t &&
                this.isRtl &&
                (null === (s = e.getRtlHelpers()) || void 0 === s
                  ? void 0
                  : s.isScrollOriginAtZero)
                  ? -c
                  : c),
                "x" === t &&
                  this.isRtl &&
                  (c = (
                    null === (r = e.getRtlHelpers()) || void 0 === r
                      ? void 0
                      : r.isScrollingToNegative
                  )
                    ? c
                    : -c);
              var h = c / (l - a),
                d = ~~((n - o.size) * h);
              (d = "x" === t && this.isRtl ? -d + (n - o.size) : d),
                (o.el.style.transform =
                  "x" === t
                    ? "translate3d(".concat(d, "px, 0, 0)")
                    : "translate3d(0, ".concat(d, "px, 0)"));
            }
          }),
          (e.prototype.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              i = this.axis[e].scrollbar.el;
            t &&
              i &&
              this.contentWrapperEl &&
              (this.axis[e].isOverflowing || this.axis[e].forceVisible
                ? ((t.style.visibility = "visible"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "scroll"),
                  this.el.classList.add(
                    "".concat(this.classNames.scrollable, "-").concat(e),
                  ))
                : ((t.style.visibility = "hidden"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "hidden"),
                  this.el.classList.remove(
                    "".concat(this.classNames.scrollable, "-").concat(e),
                  )),
              this.axis[e].isOverflowing
                ? (i.style.display = "block")
                : (i.style.display = "none"));
          }),
          (e.prototype.showScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                !this.axis[e].scrollbar.isVisible &&
                (K(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !0));
          }),
          (e.prototype.hideScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                this.axis[e].scrollbar.isVisible &&
                (ee(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !1));
          }),
          (e.prototype.hideNativeScrollbar = function () {
            this.offsetEl &&
              ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                this.axis.y.isOverflowing || this.axis.y.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"));
          }),
          (e.prototype.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e];
            t.track.el &&
              t.scrollbar.el &&
              ((t.track.rect = t.track.el.getBoundingClientRect()),
              (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(t.track.rect)
                ? (this.showScrollbar(e),
                  K(t.track.el, this.classNames.hover),
                  this.isWithinBounds(t.scrollbar.rect)
                    ? K(t.scrollbar.el, this.classNames.hover)
                    : ee(t.scrollbar.el, this.classNames.hover))
                : (ee(t.track.el, this.classNames.hover),
                  this.options.autoHide && this.hideScrollbar(e)));
          }),
          (e.prototype.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              ee(this.axis[e].track.el, this.classNames.hover),
              ee(this.axis[e].scrollbar.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(e);
          }),
          (e.prototype.onDragStart = function (e, t) {
            var i;
            void 0 === t && (t = "y");
            var s = Z(this.el),
              r = G(this.el),
              o = this.axis[t].scrollbar,
              l = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset =
              l -
              ((null === (i = o.rect) || void 0 === i
                ? void 0
                : i[this.axis[t].offsetAttr]) || 0)),
              (this.draggedAxis = t),
              K(this.el, this.classNames.dragging),
              s.addEventListener("mousemove", this.drag, !0),
              s.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (s.addEventListener("click", this.preventClick, !0),
                  s.addEventListener("dblclick", this.preventClick, !0))
                : (r.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (e.prototype.onTrackClick = function (e, t) {
            var i,
              s,
              r,
              o,
              l = this;
            void 0 === t && (t = "y");
            var n = this.axis[t];
            if (
              this.options.clickOnTrack &&
              n.scrollbar.el &&
              this.contentWrapperEl
            ) {
              e.preventDefault();
              var a = G(this.el);
              this.axis[t].scrollbar.rect =
                n.scrollbar.el.getBoundingClientRect();
              var c =
                  null !==
                    (s =
                      null === (i = this.axis[t].scrollbar.rect) || void 0 === i
                        ? void 0
                        : i[this.axis[t].offsetAttr]) && void 0 !== s
                    ? s
                    : 0,
                h = parseInt(
                  null !==
                    (o =
                      null === (r = this.elStyles) || void 0 === r
                        ? void 0
                        : r[this.axis[t].sizeAttr]) && void 0 !== o
                    ? o
                    : "0px",
                  10,
                ),
                d = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                u =
                  ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                p = -1 === u ? d - h : d + h,
                f = function () {
                  l.contentWrapperEl &&
                    (-1 === u
                      ? d > p &&
                        ((d -= 40),
                        (l.contentWrapperEl[l.axis[t].scrollOffsetAttr] = d),
                        a.requestAnimationFrame(f))
                      : d < p &&
                        ((d += 40),
                        (l.contentWrapperEl[l.axis[t].scrollOffsetAttr] = d),
                        a.requestAnimationFrame(f)));
                };
              f();
            }
          }),
          (e.prototype.getContentElement = function () {
            return this.contentEl;
          }),
          (e.prototype.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (e.prototype.removeListeners = function () {
            var e = G(this.el);
            this.el.removeEventListener("mouseenter", this.onMouseEnter),
              this.el.removeEventListener(
                "pointerdown",
                this.onPointerEvent,
                !0,
              ),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll,
                ),
              e.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.onMouseMove.cancel(),
              this.onWindowResize.cancel(),
              this.onStopScrolling.cancel(),
              this.onMouseEntered.cancel();
          }),
          (e.prototype.unMount = function () {
            this.removeListeners();
          }),
          (e.prototype.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (e.prototype.findChild = function (e, t) {
            var i =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return i.call(e, t);
            })[0];
          }),
          (e.rtlHelpers = null),
          (e.defaultOptions = {
            forceVisible: !1,
            clickOnTrack: !0,
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            ariaLabel: "scrollable content",
            classNames: {
              contentEl: "simplebar-content",
              contentWrapper: "simplebar-content-wrapper",
              offset: "simplebar-offset",
              mask: "simplebar-mask",
              wrapper: "simplebar-wrapper",
              placeholder: "simplebar-placeholder",
              scrollbar: "simplebar-scrollbar",
              track: "simplebar-track",
              heightAutoObserverWrapperEl:
                "simplebar-height-auto-observer-wrapper",
              heightAutoObserverEl: "simplebar-height-auto-observer",
              visible: "simplebar-visible",
              horizontal: "simplebar-horizontal",
              vertical: "simplebar-vertical",
              hover: "simplebar-hover",
              dragging: "simplebar-dragging",
              scrolling: "simplebar-scrolling",
              scrollable: "simplebar-scrollable",
              mouseEntered: "simplebar-mouse-entered",
            },
            scrollableNode: null,
            contentNode: null,
            autoHide: !0,
          }),
          (e.getOptions = J),
          (e.helpers = Q),
          e
        );
      })(),
      se = function (e, t) {
        return (
          (se =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }),
          se(e, t)
        );
      };
    var re = ie.helpers,
      oe = re.getOptions,
      le = re.addClasses,
      ne = (function (e) {
        function t() {
          for (var i = [], s = 0; s < arguments.length; s++)
            i[s] = arguments[s];
          var r = e.apply(this, i) || this;
          return t.instances.set(i[0], r), r;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function i() {
              this.constructor = e;
            }
            se(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          })(t, e),
          (t.initDOMLoadedElements = function () {
            document.removeEventListener(
              "DOMContentLoaded",
              this.initDOMLoadedElements,
            ),
              window.removeEventListener("load", this.initDOMLoadedElements),
              Array.prototype.forEach.call(
                document.querySelectorAll("[data-simplebar]"),
                function (e) {
                  "init" === e.getAttribute("data-simplebar") ||
                    t.instances.has(e) ||
                    new t(e, oe(e.attributes));
                },
              );
          }),
          (t.removeObserver = function () {
            var e;
            null === (e = t.globalObserver) || void 0 === e || e.disconnect();
          }),
          (t.prototype.initDOM = function () {
            var e,
              t,
              i,
              s = this;
            if (
              !Array.prototype.filter.call(this.el.children, function (e) {
                return e.classList.contains(s.classNames.wrapper);
              }).length
            ) {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  le(this.wrapperEl, this.classNames.wrapper),
                  le(this.contentWrapperEl, this.classNames.contentWrapper),
                  le(this.offsetEl, this.classNames.offset),
                  le(this.maskEl, this.classNames.mask),
                  le(this.contentEl, this.classNames.contentEl),
                  le(this.placeholderEl, this.classNames.placeholder),
                  le(
                    this.heightAutoObserverWrapperEl,
                    this.classNames.heightAutoObserverWrapperEl,
                  ),
                  le(
                    this.heightAutoObserverEl,
                    this.classNames.heightAutoObserverEl,
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl,
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.setAttribute("tabindex", "0"),
                null === (t = this.contentWrapperEl) ||
                  void 0 === t ||
                  t.setAttribute("role", "region"),
                null === (i = this.contentWrapperEl) ||
                  void 0 === i ||
                  i.setAttribute("aria-label", this.options.ariaLabel);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var r = document.createElement("div"),
                o = document.createElement("div");
              le(r, this.classNames.track),
                le(o, this.classNames.scrollbar),
                r.appendChild(o),
                (this.axis.x.track.el = r.cloneNode(!0)),
                le(this.axis.x.track.el, this.classNames.horizontal),
                (this.axis.y.track.el = r.cloneNode(!0)),
                le(this.axis.y.track.el, this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            ie.prototype.initDOM.call(this),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.prototype.unMount = function () {
            ie.prototype.unMount.call(this), t.instances.delete(this.el);
          }),
          (t.initHtmlApi = function () {
            (this.initDOMLoadedElements =
              this.initDOMLoadedElements.bind(this)),
              "undefined" != typeof MutationObserver &&
                ((this.globalObserver = new MutationObserver(
                  t.handleMutations,
                )),
                this.globalObserver.observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              "complete" === document.readyState ||
              ("loading" !== document.readyState &&
                !document.documentElement.doScroll)
                ? window.setTimeout(this.initDOMLoadedElements)
                : (document.addEventListener(
                    "DOMContentLoaded",
                    this.initDOMLoadedElements,
                  ),
                  window.addEventListener("load", this.initDOMLoadedElements));
          }),
          (t.handleMutations = function (e) {
            e.forEach(function (e) {
              e.addedNodes.forEach(function (e) {
                1 === e.nodeType &&
                  (e.hasAttribute("data-simplebar")
                    ? !t.instances.has(e) &&
                      document.documentElement.contains(e) &&
                      new t(e, oe(e.attributes))
                    : e
                        .querySelectorAll("[data-simplebar]")
                        .forEach(function (e) {
                          "init" !== e.getAttribute("data-simplebar") &&
                            !t.instances.has(e) &&
                            document.documentElement.contains(e) &&
                            new t(e, oe(e.attributes));
                        }));
              }),
                e.removedNodes.forEach(function (e) {
                  1 === e.nodeType &&
                    ("init" === e.getAttribute("data-simplebar")
                      ? t.instances.has(e) &&
                        !document.documentElement.contains(e) &&
                        t.instances.get(e).unMount()
                      : Array.prototype.forEach.call(
                          e.querySelectorAll('[data-simplebar="init"]'),
                          function (e) {
                            t.instances.has(e) &&
                              !document.documentElement.contains(e) &&
                              t.instances.get(e).unMount();
                          },
                        ));
                });
            });
          }),
          (t.instances = new WeakMap()),
          t
        );
      })(ie);
    a && ne.initHtmlApi(),
      document.querySelectorAll("[data-simplebar]").length &&
        document.querySelectorAll("[data-simplebar]").forEach((e) => {
          new ne(e, { autoHide: !1 });
        }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 0);
      }),
      (function () {
        let e = document.querySelector(".burger");
        e &&
          e.addEventListener("click", function (e) {
            s && document.documentElement.classList.toggle("menu-open");
          });
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              n.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && n.validateInput(t));
          });
      })(),
      (function (t) {
        e.popup && e.popup.open("some");
        const i = document.forms;
        if (i.length)
          for (const e of i)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                n.formClean(t);
              });
        async function s(e, i) {
          if (0 === (t ? n.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              i.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                s = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                o = new FormData(e);
              e.classList.add("_sending");
              const l = await fetch(t, { method: s, body: o });
              if (l.ok) {
                await l.json();
                e.classList.remove("_sending"), r(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (i.preventDefault(), r(e));
          } else {
            i.preventDefault();
            const t = e.querySelector("._form-error");
            t &&
              e.hasAttribute("data-goto-error") &&
              ((e, t = !1, i = 500, s = 0) => {
                const r = "string" == typeof e ? document.querySelector(e) : e;
                if (r) {
                  let n = "",
                    a = 0;
                  t &&
                    ((n = "header.header"),
                    (a = document.querySelector(n).offsetHeight));
                  let c = {
                    speedAsDuration: !0,
                    speed: i,
                    header: n,
                    offset: s,
                    easing: "easeOutQuad",
                  };
                  if (
                    (document.documentElement.classList.contains("menu-open") &&
                      o(),
                    "undefined" != typeof SmoothScroll)
                  )
                    new SmoothScroll().animateScroll(r, "", c);
                  else {
                    let e = r.getBoundingClientRect().top + scrollY;
                    window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
                  }
                  l(`[gotoBlock]: Юхуу...едем к ${e}`);
                } else
                  l(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
              })(t, !0, 1e3);
          }
        }
        function r(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } }),
          ),
            setTimeout(() => {
              if (e.popup) {
                const i = t.dataset.popupMessage;
                i && e.popup.open(i);
              }
            }, 0),
            n.formClean(t),
            l(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0);
  })();
})();
