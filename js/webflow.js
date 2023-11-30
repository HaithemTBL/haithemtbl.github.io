/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("SW REGISTRED !");
      console.log(registration);
    })
    .catch((error) => {
      console.log("REGISTRATION ERROR ! ");
      console.log(error);
    });
}

const config = {
  apiKey: "AIzaSyCG4DcxWk1hDJFDGCJfIRSiwCCfUdItv5c",
  authDomain: "test-pwa-7a8d5.firebaseapp.com",
  projectId: "test-pwa-7a8d5",
  storageBucket: "test-pwa-7a8d5.appspot.com",
  messagingSenderId: "204981974196",
  appId: "1:204981974196:web:6feba7a6069cfab267d3e1",
  measurementId: "G-6WDXTLFZGH",
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(() => {
    message.innerHTML = "Notifications allowed";
    return messaging.getToken();
  })
  .then(token => {
    tokenString.innerHTML = "Token Is : " + token;
  })
  .catch(err => {
    errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
    console.log("No permission to send push", err);
  });
  messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    const { title, ...options } = payload.notification;
  });
  

(() => {
  var H_ = Object.create;
  var an = Object.defineProperty;
  var X_ = Object.getOwnPropertyDescriptor;
  var W_ = Object.getOwnPropertyNames;
  var B_ = Object.getPrototypeOf,
    j_ = Object.prototype.hasOwnProperty;
  var he = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    De = (e, t) => {
      for (var r in t) an(e, r, { get: t[r], enumerable: !0 });
    },
    xs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of W_(t))
          !j_.call(e, i) &&
            i !== r &&
            an(e, i, {
              get: () => t[i],
              enumerable: !(n = X_(t, i)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? H_(B_(e)) : {}),
      xs(
        t || !e || !e.__esModule
          ? an(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    tt = (e) => xs(an({}, "__esModule", { value: !0 }), e);
  var Ci = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, m) {
        var I = new k.Bare();
        return I.init(l, m);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (m) {
          return "-" + m.toLowerCase();
        });
      }
      function n(l) {
        var m = parseInt(l.slice(1), 16),
          I = (m >> 16) & 255,
          A = (m >> 8) & 255,
          b = 255 & m;
        return [I, A, b];
      }
      function i(l, m, I) {
        return (
          "#" + ((1 << 24) | (l << 16) | (m << 8) | I).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, m) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof m + "] " + m);
      }
      function s(l, m, I) {
        f("Units do not match [" + l + "]: " + m + ", " + I);
      }
      function u(l, m, I) {
        if ((m !== void 0 && (I = m), l === void 0)) return I;
        var A = I;
        return (
          St.test(l) || !lt.test(l)
            ? (A = parseInt(l, 10))
            : lt.test(l) && (A = 1e3 * parseFloat(l)),
          0 > A && (A = 0),
          A === A ? A : I
        );
      }
      function f(l) {
        se.debug && window && window.console.warn(l);
      }
      function g(l) {
        for (var m = -1, I = l ? l.length : 0, A = []; ++m < I; ) {
          var b = l[m];
          b && A.push(b);
        }
        return A;
      }
      var p = (function (l, m, I) {
          function A(ie) {
            return typeof ie == "object";
          }
          function b(ie) {
            return typeof ie == "function";
          }
          function S() {}
          function J(ie, pe) {
            function j() {
              var Ce = new ae();
              return b(Ce.init) && Ce.init.apply(Ce, arguments), Ce;
            }
            function ae() {}
            pe === I && ((pe = ie), (ie = Object)), (j.Bare = ae);
            var ue,
              be = (S[l] = ie[l]),
              et = (ae[l] = j[l] = new S());
            return (
              (et.constructor = j),
              (j.mixin = function (Ce) {
                return (ae[l] = j[l] = J(j, Ce)[l]), j;
              }),
              (j.open = function (Ce) {
                if (
                  ((ue = {}),
                  b(Ce) ? (ue = Ce.call(j, et, be, j, ie)) : A(Ce) && (ue = Ce),
                  A(ue))
                )
                  for (var mr in ue) m.call(ue, mr) && (et[mr] = ue[mr]);
                return b(et.init) || (et.init = ie), j;
              }),
              j.open(pe)
            );
          }
          return J;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (l, m, I, A) {
              var b = (l /= A) * l,
                S = b * l;
              return (
                m +
                I * (-2.75 * S * b + 11 * b * b + -15.5 * S + 8 * b + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, m, I, A) {
              var b = (l /= A) * l,
                S = b * l;
              return m + I * (-1 * S * b + 3 * b * b + -3 * S + 2 * b);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, m, I, A) {
              var b = (l /= A) * l,
                S = b * l;
              return (
                m +
                I * (0.3 * S * b + -1.6 * b * b + 2.2 * S + -1.8 * b + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, m, I, A) {
              var b = (l /= A) * l,
                S = b * l;
              return m + I * (2 * S * b + -5 * b * b + 2 * S + 2 * b);
            },
          ],
          linear: [
            "linear",
            function (l, m, I, A) {
              return (I * l) / A + m;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, m, I, A) {
              return I * (l /= A) * l + m;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, m, I, A) {
              return -I * (l /= A) * (l - 2) + m;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, m, I, A) {
              return (l /= A / 2) < 1
                ? (I / 2) * l * l + m
                : (-I / 2) * (--l * (l - 2) - 1) + m;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, m, I, A) {
              return I * (l /= A) * l * l + m;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, m, I, A) {
              return I * ((l = l / A - 1) * l * l + 1) + m;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, m, I, A) {
              return (l /= A / 2) < 1
                ? (I / 2) * l * l * l + m
                : (I / 2) * ((l -= 2) * l * l + 2) + m;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, m, I, A) {
              return I * (l /= A) * l * l * l + m;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, m, I, A) {
              return -I * ((l = l / A - 1) * l * l * l - 1) + m;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, m, I, A) {
              return (l /= A / 2) < 1
                ? (I / 2) * l * l * l * l + m
                : (-I / 2) * ((l -= 2) * l * l * l - 2) + m;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, m, I, A) {
              return I * (l /= A) * l * l * l * l + m;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, m, I, A) {
              return I * ((l = l / A - 1) * l * l * l * l + 1) + m;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, m, I, A) {
              return (l /= A / 2) < 1
                ? (I / 2) * l * l * l * l * l + m
                : (I / 2) * ((l -= 2) * l * l * l * l + 2) + m;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, m, I, A) {
              return -I * Math.cos((l / A) * (Math.PI / 2)) + I + m;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, m, I, A) {
              return I * Math.sin((l / A) * (Math.PI / 2)) + m;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, m, I, A) {
              return (-I / 2) * (Math.cos((Math.PI * l) / A) - 1) + m;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, m, I, A) {
              return l === 0 ? m : I * Math.pow(2, 10 * (l / A - 1)) + m;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, m, I, A) {
              return l === A
                ? m + I
                : I * (-Math.pow(2, (-10 * l) / A) + 1) + m;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, m, I, A) {
              return l === 0
                ? m
                : l === A
                ? m + I
                : (l /= A / 2) < 1
                ? (I / 2) * Math.pow(2, 10 * (l - 1)) + m
                : (I / 2) * (-Math.pow(2, -10 * --l) + 2) + m;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, m, I, A) {
              return -I * (Math.sqrt(1 - (l /= A) * l) - 1) + m;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, m, I, A) {
              return I * Math.sqrt(1 - (l = l / A - 1) * l) + m;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, m, I, A) {
              return (l /= A / 2) < 1
                ? (-I / 2) * (Math.sqrt(1 - l * l) - 1) + m
                : (I / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + m;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, m, I, A, b) {
              return (
                b === void 0 && (b = 1.70158),
                I * (l /= A) * l * ((b + 1) * l - b) + m
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, m, I, A, b) {
              return (
                b === void 0 && (b = 1.70158),
                I * ((l = l / A - 1) * l * ((b + 1) * l + b) + 1) + m
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, m, I, A, b) {
              return (
                b === void 0 && (b = 1.70158),
                (l /= A / 2) < 1
                  ? (I / 2) * l * l * (((b *= 1.525) + 1) * l - b) + m
                  : (I / 2) *
                      ((l -= 2) * l * (((b *= 1.525) + 1) * l + b) + 2) +
                    m
              );
            },
          ],
        },
        y = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        _ = document,
        T = window,
        P = "bkwld-tram",
        w = /[\-\.0-9]/g,
        N = /[A-Z]/,
        x = "number",
        M = /^(rgb|#)/,
        F = /(em|cm|mm|in|pt|pc|px)$/,
        L = /(em|cm|mm|in|pt|pc|px|%)$/,
        z = /(deg|rad|turn)$/,
        K = "unitless",
        $ = /(all|none) 0s ease 0s/,
        ee = /^(width|height)$/,
        U = " ",
        O = _.createElement("a"),
        v = ["Webkit", "Moz", "O", "ms"],
        R = ["-webkit-", "-moz-", "-o-", "-ms-"],
        D = function (l) {
          if (l in O.style) return { dom: l, css: l };
          var m,
            I,
            A = "",
            b = l.split("-");
          for (m = 0; m < b.length; m++)
            A += b[m].charAt(0).toUpperCase() + b[m].slice(1);
          for (m = 0; m < v.length; m++)
            if (((I = v[m] + A), I in O.style))
              return { dom: I, css: R[m] + l };
        },
        V = (t.support = {
          bind: Function.prototype.bind,
          transform: D("transform"),
          transition: D("transition"),
          backface: D("backface-visibility"),
          timing: D("transition-timing-function"),
        });
      if (V.transition) {
        var te = V.timing.dom;
        if (((O.style[te] = E["ease-in-back"][0]), !O.style[te]))
          for (var re in y) E[re][0] = y[re];
      }
      var q = (t.frame = (function () {
          var l =
            T.requestAnimationFrame ||
            T.webkitRequestAnimationFrame ||
            T.mozRequestAnimationFrame ||
            T.oRequestAnimationFrame ||
            T.msRequestAnimationFrame;
          return l && V.bind
            ? l.bind(T)
            : function (m) {
                T.setTimeout(m, 16);
              };
        })()),
        W = (t.now = (function () {
          var l = T.performance,
            m = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return m && V.bind
            ? m.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        Q = p(function (l) {
          function m(ne, ce) {
            var ye = g(("" + ne).split(U)),
              fe = ye[0];
            ce = ce || {};
            var Ne = Y[fe];
            if (!Ne) return f("Unsupported property: " + fe);
            if (!ce.weak || !this.props[fe]) {
              var We = Ne[0],
                Me = this.props[fe];
              return (
                Me || (Me = this.props[fe] = new We.Bare()),
                Me.init(this.$el, ye, Ne, ce),
                Me
              );
            }
          }
          function I(ne, ce, ye) {
            if (ne) {
              var fe = typeof ne;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                fe == "number" && ce)
              )
                return (
                  (this.timer = new oe({
                    duration: ne,
                    context: this,
                    complete: S,
                  })),
                  void (this.active = !0)
                );
              if (fe == "string" && ce) {
                switch (ne) {
                  case "hide":
                    j.call(this);
                    break;
                  case "stop":
                    J.call(this);
                    break;
                  case "redraw":
                    ae.call(this);
                    break;
                  default:
                    m.call(this, ne, ye && ye[1]);
                }
                return S.call(this);
              }
              if (fe == "function") return void ne.call(this, this);
              if (fe == "object") {
                var Ne = 0;
                et.call(
                  this,
                  ne,
                  function (Te, k_) {
                    Te.span > Ne && (Ne = Te.span), Te.stop(), Te.animate(k_);
                  },
                  function (Te) {
                    "wait" in Te && (Ne = u(Te.wait, 0));
                  }
                ),
                  be.call(this),
                  Ne > 0 &&
                    ((this.timer = new oe({ duration: Ne, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = S));
                var We = this,
                  Me = !1,
                  on = {};
                q(function () {
                  et.call(We, ne, function (Te) {
                    Te.active && ((Me = !0), (on[Te.name] = Te.nextStyle));
                  }),
                    Me && We.$el.css(on);
                });
              }
            }
          }
          function A(ne) {
            (ne = u(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new oe({
                    duration: ne,
                    context: this,
                    complete: S,
                  })),
                  (this.active = !0));
          }
          function b(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = S))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function S() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              I.call(this, ne.options, !0, ne.args);
            }
          }
          function J(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ne == "string"
              ? ((ce = {}), (ce[ne] = 1))
              : (ce = typeof ne == "object" && ne != null ? ne : this.props),
              et.call(this, ce, Ce),
              be.call(this);
          }
          function ie(ne) {
            J.call(this, ne), et.call(this, ne, mr, U_);
          }
          function pe(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function j() {
            J.call(this), (this.el.style.display = "none");
          }
          function ae() {
            this.el.offsetHeight;
          }
          function ue() {
            J.call(this), e.removeData(this.el, P), (this.$el = this.el = null);
          }
          function be() {
            var ne,
              ce,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ne in this.props)
              (ce = this.props[ne]), ce.active && ye.push(ce.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[V.transition.dom] = ye));
          }
          function et(ne, ce, ye) {
            var fe,
              Ne,
              We,
              Me,
              on = ce !== Ce,
              Te = {};
            for (fe in ne)
              (We = ne[fe]),
                fe in ve
                  ? (Te.transform || (Te.transform = {}),
                    (Te.transform[fe] = We))
                  : (N.test(fe) && (fe = r(fe)),
                    fe in Y ? (Te[fe] = We) : (Me || (Me = {}), (Me[fe] = We)));
            for (fe in Te) {
              if (((We = Te[fe]), (Ne = this.props[fe]), !Ne)) {
                if (!on) continue;
                Ne = m.call(this, fe);
              }
              ce.call(this, Ne, We);
            }
            ye && Me && ye.call(this, Me);
          }
          function Ce(ne) {
            ne.stop();
          }
          function mr(ne, ce) {
            ne.set(ce);
          }
          function U_(ne) {
            this.$el.css(ne);
          }
          function Xe(ne, ce) {
            l[ne] = function () {
              return this.children
                ? V_.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function V_(ne, ce) {
            var ye,
              fe = this.children.length;
            for (ye = 0; fe > ye; ye++) ne.apply(this.children[ye], ce);
            return this;
          }
          (l.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              se.keepInherited && !se.fallback)
            ) {
              var ce = X(this.el, "transition");
              ce && !$.test(ce) && (this.upstream = ce);
            }
            V.backface &&
              se.hideBackface &&
              h(this.el, V.backface.css, "hidden");
          }),
            Xe("add", m),
            Xe("start", I),
            Xe("wait", A),
            Xe("then", b),
            Xe("next", S),
            Xe("stop", J),
            Xe("set", ie),
            Xe("show", pe),
            Xe("hide", j),
            Xe("redraw", ae),
            Xe("destroy", ue);
        }),
        k = p(Q, function (l) {
          function m(I, A) {
            var b = e.data(I, P) || e.data(I, P, new Q.Bare());
            return b.el || b.init(I), A ? b.start(A) : b;
          }
          l.init = function (I, A) {
            var b = e(I);
            if (!b.length) return this;
            if (b.length === 1) return m(b[0], A);
            var S = [];
            return (
              b.each(function (J, ie) {
                S.push(m(ie, A));
              }),
              (this.children = S),
              this
            );
          };
        }),
        G = p(function (l) {
          function m() {
            var S = this.get();
            this.update("auto");
            var J = this.get();
            return this.update(S), J;
          }
          function I(S, J, ie) {
            return J !== void 0 && (ie = J), S in E ? S : ie;
          }
          function A(S) {
            var J = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(S);
            return (J ? i(J[1], J[2], J[3]) : S).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var b = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (S, J, ie, pe) {
            (this.$el = S), (this.el = S[0]);
            var j = J[0];
            ie[2] && (j = ie[2]),
              Z[j] && (j = Z[j]),
              (this.name = j),
              (this.type = ie[1]),
              (this.duration = u(J[1], this.duration, b.duration)),
              (this.ease = I(J[2], this.ease, b.ease)),
              (this.delay = u(J[3], this.delay, b.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ee.test(this.name)),
              (this.unit = pe.unit || this.unit || se.defaultUnit),
              (this.angle = pe.angle || this.angle || se.defaultAngle),
              se.fallback || pe.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    U +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? U + E[this.ease][0] : "") +
                    (this.delay ? U + this.delay + "ms" : "")));
          }),
            (l.set = function (S) {
              (S = this.convert(S, this.type)), this.update(S), this.redraw();
            }),
            (l.transition = function (S) {
              (this.active = !0),
                (S = this.convert(S, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  S == "auto" && (S = m.call(this))),
                (this.nextStyle = S);
            }),
            (l.fallback = function (S) {
              var J =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (S = this.convert(S, this.type)),
                this.auto &&
                  (J == "auto" && (J = this.convert(this.get(), this.type)),
                  S == "auto" && (S = m.call(this))),
                (this.tween = new C({
                  from: J,
                  to: S,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return X(this.el, this.name);
            }),
            (l.update = function (S) {
              h(this.el, this.name, S);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                h(this.el, this.name, this.get()));
              var S = this.tween;
              S && S.context && S.destroy();
            }),
            (l.convert = function (S, J) {
              if (S == "auto" && this.auto) return S;
              var ie,
                pe = typeof S == "number",
                j = typeof S == "string";
              switch (J) {
                case x:
                  if (pe) return S;
                  if (j && S.replace(w, "") === "") return +S;
                  ie = "number(unitless)";
                  break;
                case M:
                  if (j) {
                    if (S === "" && this.original) return this.original;
                    if (J.test(S))
                      return S.charAt(0) == "#" && S.length == 7 ? S : A(S);
                  }
                  ie = "hex or rgb string";
                  break;
                case F:
                  if (pe) return S + this.unit;
                  if (j && J.test(S)) return S;
                  ie = "number(px) or string(unit)";
                  break;
                case L:
                  if (pe) return S + this.unit;
                  if (j && J.test(S)) return S;
                  ie = "number(px) or string(unit or %)";
                  break;
                case z:
                  if (pe) return S + this.angle;
                  if (j && J.test(S)) return S;
                  ie = "number(deg) or string(angle)";
                  break;
                case K:
                  if (pe || (j && L.test(S))) return S;
                  ie = "number(unitless) or string(unit or %)";
              }
              return a(ie, S), S;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        d = p(G, function (l, m) {
          l.init = function () {
            m.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), M));
          };
        }),
        H = p(G, function (l, m) {
          (l.init = function () {
            m.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (I) {
              this.$el[this.name](I);
            });
        }),
        B = p(G, function (l, m) {
          function I(A, b) {
            var S, J, ie, pe, j;
            for (S in A)
              (pe = ve[S]),
                (ie = pe[0]),
                (J = pe[1] || S),
                (j = this.convert(A[S], ie)),
                b.call(this, J, j, ie);
          }
          (l.init = function () {
            m.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                ve.perspective &&
                  se.perspective &&
                  ((this.current.perspective = se.perspective),
                  h(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (A) {
              I.call(this, A, function (b, S) {
                this.current[b] = S;
              }),
                h(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (A) {
              var b = this.values(A);
              this.tween = new _e({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var S,
                J = {};
              for (S in this.current) J[S] = S in b ? b[S] : this.current[S];
              (this.active = !0), (this.nextStyle = this.style(J));
            }),
            (l.fallback = function (A) {
              var b = this.values(A);
              this.tween = new _e({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              h(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (A) {
              var b,
                S = "";
              for (b in A) S += b + "(" + A[b] + ") ";
              return S;
            }),
            (l.values = function (A) {
              var b,
                S = {};
              return (
                I.call(this, A, function (J, ie, pe) {
                  (S[J] = ie),
                    this.current[J] === void 0 &&
                      ((b = 0),
                      ~J.indexOf("scale") && (b = 1),
                      (this.current[J] = this.convert(b, pe)));
                }),
                S
              );
            });
        }),
        C = p(function (l) {
          function m(j) {
            ie.push(j) === 1 && q(I);
          }
          function I() {
            var j,
              ae,
              ue,
              be = ie.length;
            if (be)
              for (q(I), ae = W(), j = be; j--; )
                (ue = ie[j]), ue && ue.render(ae);
          }
          function A(j) {
            var ae,
              ue = e.inArray(j, ie);
            ue >= 0 &&
              ((ae = ie.slice(ue + 1)),
              (ie.length = ue),
              ae.length && (ie = ie.concat(ae)));
          }
          function b(j) {
            return Math.round(j * pe) / pe;
          }
          function S(j, ae, ue) {
            return i(
              j[0] + ue * (ae[0] - j[0]),
              j[1] + ue * (ae[1] - j[1]),
              j[2] + ue * (ae[2] - j[2])
            );
          }
          var J = { ease: E.ease[1], from: 0, to: 1 };
          (l.init = function (j) {
            (this.duration = j.duration || 0), (this.delay = j.delay || 0);
            var ae = j.ease || J.ease;
            E[ae] && (ae = E[ae][1]),
              typeof ae != "function" && (ae = J.ease),
              (this.ease = ae),
              (this.update = j.update || o),
              (this.complete = j.complete || o),
              (this.context = j.context || this),
              (this.name = j.name);
            var ue = j.from,
              be = j.to;
            ue === void 0 && (ue = J.from),
              be === void 0 && (be = J.to),
              (this.unit = j.unit || ""),
              typeof ue == "number" && typeof be == "number"
                ? ((this.begin = ue), (this.change = be - ue))
                : this.format(be, ue),
              (this.value = this.begin + this.unit),
              (this.start = W()),
              j.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = W()), (this.active = !0), m(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), A(this));
            }),
            (l.render = function (j) {
              var ae,
                ue = j - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var be = this.ease(ue, 0, 1, this.duration);
                return (
                  (ae = this.startRGB
                    ? S(this.startRGB, this.endRGB, be)
                    : b(this.begin + be * this.change)),
                  (this.value = ae + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ae = this.endHex || this.begin + this.change),
                (this.value = ae + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (j, ae) {
              if (((ae += ""), (j += ""), j.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ae)),
                  (this.endRGB = n(j)),
                  (this.endHex = j),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = ae.replace(w, ""),
                  be = j.replace(w, "");
                ue !== be && s("tween", ae, j), (this.unit = ue);
              }
              (ae = parseFloat(ae)),
                (j = parseFloat(j)),
                (this.begin = this.value = ae),
                (this.change = j - ae);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ie = [],
            pe = 1e3;
        }),
        oe = p(C, function (l) {
          (l.init = function (m) {
            (this.duration = m.duration || 0),
              (this.complete = m.complete || o),
              (this.context = m.context),
              this.play();
          }),
            (l.render = function (m) {
              var I = m - this.start;
              I < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        _e = p(C, function (l, m) {
          (l.init = function (I) {
            (this.context = I.context),
              (this.update = I.update),
              (this.tweens = []),
              (this.current = I.current);
            var A, b;
            for (A in I.values)
              (b = I.values[A]),
                this.current[A] !== b &&
                  this.tweens.push(
                    new C({
                      name: A,
                      from: this.current[A],
                      to: b,
                      duration: I.duration,
                      delay: I.delay,
                      ease: I.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (I) {
              var A,
                b,
                S = this.tweens.length,
                J = !1;
              for (A = S; A--; )
                (b = this.tweens[A]),
                  b.context &&
                    (b.render(I), (this.current[b.name] = b.value), (J = !0));
              return J
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((m.destroy.call(this), this.tweens)) {
                var I,
                  A = this.tweens.length;
                for (I = A; I--; ) this.tweens[I].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        se = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!V.transition) return (se.fallback = !0);
        se.agentTests.push("(" + l + ")");
        var m = new RegExp(se.agentTests.join("|"), "i");
        se.fallback = m.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new C(l);
        }),
        (t.delay = function (l, m, I) {
          return new oe({ complete: m, duration: l, context: I });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var h = e.style,
        X = e.css,
        Z = { transform: V.transform && V.transform.css },
        Y = {
          color: [d, M],
          background: [d, M, "background-color"],
          "outline-color": [d, M],
          "border-color": [d, M],
          "border-top-color": [d, M],
          "border-right-color": [d, M],
          "border-bottom-color": [d, M],
          "border-left-color": [d, M],
          "border-width": [G, F],
          "border-top-width": [G, F],
          "border-right-width": [G, F],
          "border-bottom-width": [G, F],
          "border-left-width": [G, F],
          "border-spacing": [G, F],
          "letter-spacing": [G, F],
          margin: [G, F],
          "margin-top": [G, F],
          "margin-right": [G, F],
          "margin-bottom": [G, F],
          "margin-left": [G, F],
          padding: [G, F],
          "padding-top": [G, F],
          "padding-right": [G, F],
          "padding-bottom": [G, F],
          "padding-left": [G, F],
          "outline-width": [G, F],
          opacity: [G, x],
          top: [G, L],
          right: [G, L],
          bottom: [G, L],
          left: [G, L],
          "font-size": [G, L],
          "text-indent": [G, L],
          "word-spacing": [G, L],
          width: [G, L],
          "min-width": [G, L],
          "max-width": [G, L],
          height: [G, L],
          "min-height": [G, L],
          "max-height": [G, L],
          "line-height": [G, K],
          "scroll-top": [H, x, "scrollTop"],
          "scroll-left": [H, x, "scrollLeft"],
        },
        ve = {};
      V.transform &&
        ((Y.transform = [B]),
        (ve = {
          x: [L, "translateX"],
          y: [L, "translateY"],
          rotate: [z],
          rotateX: [z],
          rotateY: [z],
          scale: [x],
          scaleX: [x],
          scaleY: [x],
          skew: [z],
          skewX: [z],
          skewY: [z],
        })),
        V.transform &&
          V.backface &&
          ((ve.z = [L, "translateZ"]),
          (ve.rotateZ = [z]),
          (ve.scaleZ = [x]),
          (ve.perspective = [F]));
      var St = /ms/,
        lt = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Rs = c((Pk, Ss) => {
    "use strict";
    var z_ = window.$,
      K_ = Ci() && z_.tram;
    Ss.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        g = r.forEach,
        p = r.map,
        E = r.reduce,
        y = r.reduceRight,
        _ = r.filter,
        T = r.every,
        P = r.some,
        w = r.indexOf,
        N = r.lastIndexOf,
        x = Array.isArray,
        M = Object.keys,
        F = i.bind,
        L =
          (e.each =
          e.forEach =
            function (v, R, D) {
              if (v == null) return v;
              if (g && v.forEach === g) v.forEach(R, D);
              else if (v.length === +v.length) {
                for (var V = 0, te = v.length; V < te; V++)
                  if (R.call(D, v[V], V, v) === t) return;
              } else
                for (var re = e.keys(v), V = 0, te = re.length; V < te; V++)
                  if (R.call(D, v[re[V]], re[V], v) === t) return;
              return v;
            });
      (e.map = e.collect =
        function (v, R, D) {
          var V = [];
          return v == null
            ? V
            : p && v.map === p
            ? v.map(R, D)
            : (L(v, function (te, re, q) {
                V.push(R.call(D, te, re, q));
              }),
              V);
        }),
        (e.find = e.detect =
          function (v, R, D) {
            var V;
            return (
              z(v, function (te, re, q) {
                if (R.call(D, te, re, q)) return (V = te), !0;
              }),
              V
            );
          }),
        (e.filter = e.select =
          function (v, R, D) {
            var V = [];
            return v == null
              ? V
              : _ && v.filter === _
              ? v.filter(R, D)
              : (L(v, function (te, re, q) {
                  R.call(D, te, re, q) && V.push(te);
                }),
                V);
          });
      var z =
        (e.some =
        e.any =
          function (v, R, D) {
            R || (R = e.identity);
            var V = !1;
            return v == null
              ? V
              : P && v.some === P
              ? v.some(R, D)
              : (L(v, function (te, re, q) {
                  if (V || (V = R.call(D, te, re, q))) return t;
                }),
                !!V);
          });
      (e.contains = e.include =
        function (v, R) {
          return v == null
            ? !1
            : w && v.indexOf === w
            ? v.indexOf(R) != -1
            : z(v, function (D) {
                return D === R;
              });
        }),
        (e.delay = function (v, R) {
          var D = a.call(arguments, 2);
          return setTimeout(function () {
            return v.apply(null, D);
          }, R);
        }),
        (e.defer = function (v) {
          return e.delay.apply(e, [v, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (v) {
          var R, D, V;
          return function () {
            R ||
              ((R = !0),
              (D = arguments),
              (V = this),
              K_.frame(function () {
                (R = !1), v.apply(V, D);
              }));
          };
        }),
        (e.debounce = function (v, R, D) {
          var V,
            te,
            re,
            q,
            W,
            Q = function () {
              var k = e.now() - q;
              k < R
                ? (V = setTimeout(Q, R - k))
                : ((V = null), D || ((W = v.apply(re, te)), (re = te = null)));
            };
          return function () {
            (re = this), (te = arguments), (q = e.now());
            var k = D && !V;
            return (
              V || (V = setTimeout(Q, R)),
              k && ((W = v.apply(re, te)), (re = te = null)),
              W
            );
          };
        }),
        (e.defaults = function (v) {
          if (!e.isObject(v)) return v;
          for (var R = 1, D = arguments.length; R < D; R++) {
            var V = arguments[R];
            for (var te in V) v[te] === void 0 && (v[te] = V[te]);
          }
          return v;
        }),
        (e.keys = function (v) {
          if (!e.isObject(v)) return [];
          if (M) return M(v);
          var R = [];
          for (var D in v) e.has(v, D) && R.push(D);
          return R;
        }),
        (e.has = function (v, R) {
          return f.call(v, R);
        }),
        (e.isObject = function (v) {
          return v === Object(v);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var K = /(.)^/,
        $ = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ee = /\\|'|\r|\n|\u2028|\u2029/g,
        U = function (v) {
          return "\\" + $[v];
        },
        O = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (v, R, D) {
          !R && D && (R = D), (R = e.defaults({}, R, e.templateSettings));
          var V = RegExp(
              [
                (R.escape || K).source,
                (R.interpolate || K).source,
                (R.evaluate || K).source,
              ].join("|") + "|$",
              "g"
            ),
            te = 0,
            re = "__p+='";
          v.replace(V, function (k, G, d, H, B) {
            return (
              (re += v.slice(te, B).replace(ee, U)),
              (te = B + k.length),
              G
                ? (re +=
                    `'+
((__t=(` +
                    G +
                    `))==null?'':_.escape(__t))+
'`)
                : d
                ? (re +=
                    `'+
((__t=(` +
                    d +
                    `))==null?'':__t)+
'`)
                : H &&
                  (re +=
                    `';
` +
                    H +
                    `
__p+='`),
              k
            );
          }),
            (re += `';
`);
          var q = R.variable;
          if (q) {
            if (!O.test(q))
              throw new Error("variable is not a bare identifier: " + q);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (q = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var W;
          try {
            W = new Function(R.variable || "obj", "_", re);
          } catch (k) {
            throw ((k.source = re), k);
          }
          var Q = function (k) {
            return W.call(this, k, e);
          };
          return (
            (Q.source =
              "function(" +
              q +
              `){
` +
              re +
              "}"),
            Q
          );
        }),
        e
      );
    })();
  });
  var Ve = c((qk, Fs) => {
    "use strict";
    var de = {},
      kt = {},
      Ht = [],
      Li = window.Webflow || [],
      yt = window.jQuery,
      je = yt(window),
      Y_ = yt(document),
      rt = yt.isFunction,
      Be = (de._ = Rs()),
      Ns = (de.tram = Ci() && yt.tram),
      un = !1,
      Pi = !1;
    Ns.config.hideBackface = !1;
    Ns.config.keepInherited = !0;
    de.define = function (e, t, r) {
      kt[e] && Ps(kt[e]);
      var n = (kt[e] = t(yt, Be, r) || {});
      return Ls(n), n;
    };
    de.require = function (e) {
      return kt[e];
    };
    function Ls(e) {
      de.env() &&
        (rt(e.design) && je.on("__wf_design", e.design),
        rt(e.preview) && je.on("__wf_preview", e.preview)),
        rt(e.destroy) && je.on("__wf_destroy", e.destroy),
        e.ready && rt(e.ready) && $_(e);
    }
    function $_(e) {
      if (un) {
        e.ready();
        return;
      }
      Be.contains(Ht, e.ready) || Ht.push(e.ready);
    }
    function Ps(e) {
      rt(e.design) && je.off("__wf_design", e.design),
        rt(e.preview) && je.off("__wf_preview", e.preview),
        rt(e.destroy) && je.off("__wf_destroy", e.destroy),
        e.ready && rt(e.ready) && Q_(e);
    }
    function Q_(e) {
      Ht = Be.filter(Ht, function (t) {
        return t !== e.ready;
      });
    }
    de.push = function (e) {
      if (un) {
        rt(e) && e();
        return;
      }
      Li.push(e);
    };
    de.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var sn = navigator.userAgent.toLowerCase(),
      qs = (de.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Z_ = (de.env.chrome =
        /chrome/.test(sn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(sn.match(/chrome\/(\d+)\./)[1], 10)),
      J_ = (de.env.ios = /(ipod|iphone|ipad)/.test(sn));
    de.env.safari = /safari/.test(sn) && !Z_ && !J_;
    var Ni;
    qs &&
      Y_.on("touchstart mousedown", function (e) {
        Ni = e.target;
      });
    de.validClick = qs
      ? function (e) {
          return e === Ni || yt.contains(e, Ni);
        }
      : function () {
          return !0;
        };
    var Ms = "resize.webflow orientationchange.webflow load.webflow",
      eb = "scroll.webflow " + Ms;
    de.resize = qi(je, Ms);
    de.scroll = qi(je, eb);
    de.redraw = qi();
    function qi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Be.throttle(function (i) {
          Be.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Be.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Be.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    de.location = function (e) {
      window.location = e;
    };
    de.env() && (de.location = function () {});
    de.ready = function () {
      (un = !0), Pi ? tb() : Be.each(Ht, Cs), Be.each(Li, Cs), de.resize.up();
    };
    function Cs(e) {
      rt(e) && e();
    }
    function tb() {
      (Pi = !1), Be.each(kt, Ls);
    }
    var Rt;
    de.load = function (e) {
      Rt.then(e);
    };
    function Ds() {
      Rt && (Rt.reject(), je.off("load", Rt.resolve)),
        (Rt = new yt.Deferred()),
        je.on("load", Rt.resolve);
    }
    de.destroy = function (e) {
      (e = e || {}),
        (Pi = !0),
        je.triggerHandler("__wf_destroy"),
        e.domready != null && (un = e.domready),
        Be.each(kt, Ps),
        de.resize.off(),
        de.scroll.off(),
        de.redraw.off(),
        (Ht = []),
        (Li = []),
        Rt.state() === "pending" && Ds();
    };
    yt(de.ready);
    Ds();
    Fs.exports = window.Webflow = de;
  });
  var Vs = c((Mk, Us) => {
    "use strict";
    var Gs = Ve();
    Gs.define(
      "brand",
      (Us.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var y = n.attr("data-wf-status"),
            _ = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(_) && a.hostname !== _ && (y = !0),
            y &&
              !s &&
              ((f = f || p()),
              E(),
              setTimeout(E, 500),
              e(r).off(u, g).on(u, g));
        };
        function g() {
          var y =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", y ? "display: none !important;" : "");
        }
        function p() {
          var y = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            T = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return y.append(_, T), y[0];
        }
        function E() {
          var y = i.children(o),
            _ = y.length && y.get(0) === f,
            T = Gs.env("editor");
          if (_) {
            T && y.remove();
            return;
          }
          y.length && y.remove(), T || i.append(f);
        }
        return t;
      })
    );
  });
  var Hs = c((Dk, ks) => {
    "use strict";
    var rb = Ve();
    rb.define(
      "focus-visible",
      (ks.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(x) {
            return !!(
              x &&
              x !== document &&
              x.nodeName !== "HTML" &&
              x.nodeName !== "BODY" &&
              "classList" in x &&
              "contains" in x.classList
            );
          }
          function u(x) {
            var M = x.type,
              F = x.tagName;
            return !!(
              (F === "INPUT" && a[M] && !x.readOnly) ||
              (F === "TEXTAREA" && !x.readOnly) ||
              x.isContentEditable
            );
          }
          function f(x) {
            x.getAttribute("data-wf-focus-visible") ||
              x.setAttribute("data-wf-focus-visible", "true");
          }
          function g(x) {
            x.getAttribute("data-wf-focus-visible") &&
              x.removeAttribute("data-wf-focus-visible");
          }
          function p(x) {
            x.metaKey ||
              x.altKey ||
              x.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function y(x) {
            s(x.target) && (n || u(x.target)) && f(x.target);
          }
          function _(x) {
            s(x.target) &&
              x.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              g(x.target));
          }
          function T() {
            document.visibilityState === "hidden" && (i && (n = !0), P());
          }
          function P() {
            document.addEventListener("mousemove", N),
              document.addEventListener("mousedown", N),
              document.addEventListener("mouseup", N),
              document.addEventListener("pointermove", N),
              document.addEventListener("pointerdown", N),
              document.addEventListener("pointerup", N),
              document.addEventListener("touchmove", N),
              document.addEventListener("touchstart", N),
              document.addEventListener("touchend", N);
          }
          function w() {
            document.removeEventListener("mousemove", N),
              document.removeEventListener("mousedown", N),
              document.removeEventListener("mouseup", N),
              document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerdown", N),
              document.removeEventListener("pointerup", N),
              document.removeEventListener("touchmove", N),
              document.removeEventListener("touchstart", N),
              document.removeEventListener("touchend", N);
          }
          function N(x) {
            (x.target.nodeName && x.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), w());
          }
          document.addEventListener("keydown", p, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", T, !0),
            P(),
            r.addEventListener("focus", y, !0),
            r.addEventListener("blur", _, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Bs = c((Fk, Ws) => {
    "use strict";
    var Xs = Ve();
    Xs.define(
      "focus",
      (Ws.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Xs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Ks = c((Gk, zs) => {
    "use strict";
    var Mi = window.jQuery,
      nt = {},
      cn = [],
      js = ".w-ix",
      ln = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Mi(t).triggerHandler(nt.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Mi(t).triggerHandler(nt.types.OUTRO));
        },
      };
    nt.triggers = {};
    nt.types = { INTRO: "w-ix-intro" + js, OUTRO: "w-ix-outro" + js };
    nt.init = function () {
      for (var e = cn.length, t = 0; t < e; t++) {
        var r = cn[t];
        r[0](0, r[1]);
      }
      (cn = []), Mi.extend(nt.triggers, ln);
    };
    nt.async = function () {
      for (var e in ln) {
        var t = ln[e];
        ln.hasOwnProperty(e) &&
          (nt.triggers[e] = function (r, n) {
            cn.push([t, n]);
          });
      }
    };
    nt.async();
    zs.exports = nt;
  });
  var _r = c((Uk, Qs) => {
    "use strict";
    var Di = Ks();
    function Ys(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var nb = window.jQuery,
      fn = {},
      $s = ".w-ix",
      ib = {
        reset: function (e, t) {
          Di.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Di.triggers.intro(e, t), Ys(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Di.triggers.outro(e, t), Ys(t, "COMPONENT_INACTIVE");
        },
      };
    fn.triggers = {};
    fn.types = { INTRO: "w-ix-intro" + $s, OUTRO: "w-ix-outro" + $s };
    nb.extend(fn.triggers, ib);
    Qs.exports = fn;
  });
  var Zs = c((Vk, ft) => {
    function Fi(e) {
      return (
        (ft.exports = Fi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (ft.exports.__esModule = !0),
        (ft.exports.default = ft.exports),
        Fi(e)
      );
    }
    (ft.exports = Fi),
      (ft.exports.__esModule = !0),
      (ft.exports.default = ft.exports);
  });
  var dn = c((kk, br) => {
    var ob = Zs().default;
    function Js(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Js = function (i) {
        return i ? r : t;
      })(e);
    }
    function ab(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (ob(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Js(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (br.exports = ab),
      (br.exports.__esModule = !0),
      (br.exports.default = br.exports);
  });
  var eu = c((Hk, Tr) => {
    function sb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Tr.exports = sb),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var Ee = c((Xk, tu) => {
    var pn = function (e) {
      return e && e.Math == Math && e;
    };
    tu.exports =
      pn(typeof globalThis == "object" && globalThis) ||
      pn(typeof window == "object" && window) ||
      pn(typeof self == "object" && self) ||
      pn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Xt = c((Wk, ru) => {
    ru.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Ct = c((Bk, nu) => {
    var ub = Xt();
    nu.exports = !ub(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var vn = c((jk, iu) => {
    var Ir = Function.prototype.call;
    iu.exports = Ir.bind
      ? Ir.bind(Ir)
      : function () {
          return Ir.apply(Ir, arguments);
        };
  });
  var uu = c((su) => {
    "use strict";
    var ou = {}.propertyIsEnumerable,
      au = Object.getOwnPropertyDescriptor,
      cb = au && !ou.call({ 1: 2 }, 1);
    su.f = cb
      ? function (t) {
          var r = au(this, t);
          return !!r && r.enumerable;
        }
      : ou;
  });
  var Gi = c((Kk, cu) => {
    cu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var ze = c((Yk, fu) => {
    var lu = Function.prototype,
      Ui = lu.bind,
      Vi = lu.call,
      lb = Ui && Ui.bind(Vi);
    fu.exports = Ui
      ? function (e) {
          return e && lb(Vi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Vi.apply(e, arguments);
            }
          );
        };
  });
  var vu = c(($k, pu) => {
    var du = ze(),
      fb = du({}.toString),
      db = du("".slice);
    pu.exports = function (e) {
      return db(fb(e), 8, -1);
    };
  });
  var hu = c((Qk, gu) => {
    var pb = Ee(),
      vb = ze(),
      gb = Xt(),
      hb = vu(),
      ki = pb.Object,
      Eb = vb("".split);
    gu.exports = gb(function () {
      return !ki("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return hb(e) == "String" ? Eb(e, "") : ki(e);
        }
      : ki;
  });
  var Hi = c((Zk, Eu) => {
    var yb = Ee(),
      mb = yb.TypeError;
    Eu.exports = function (e) {
      if (e == null) throw mb("Can't call method on " + e);
      return e;
    };
  });
  var Or = c((Jk, yu) => {
    var _b = hu(),
      bb = Hi();
    yu.exports = function (e) {
      return _b(bb(e));
    };
  });
  var it = c((eH, mu) => {
    mu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Wt = c((tH, _u) => {
    var Tb = it();
    _u.exports = function (e) {
      return typeof e == "object" ? e !== null : Tb(e);
    };
  });
  var Ar = c((rH, bu) => {
    var Xi = Ee(),
      Ib = it(),
      Ob = function (e) {
        return Ib(e) ? e : void 0;
      };
    bu.exports = function (e, t) {
      return arguments.length < 2 ? Ob(Xi[e]) : Xi[e] && Xi[e][t];
    };
  });
  var Iu = c((nH, Tu) => {
    var Ab = ze();
    Tu.exports = Ab({}.isPrototypeOf);
  });
  var Au = c((iH, Ou) => {
    var wb = Ar();
    Ou.exports = wb("navigator", "userAgent") || "";
  });
  var Lu = c((oH, Nu) => {
    var Cu = Ee(),
      Wi = Au(),
      wu = Cu.process,
      xu = Cu.Deno,
      Su = (wu && wu.versions) || (xu && xu.version),
      Ru = Su && Su.v8,
      Ke,
      gn;
    Ru &&
      ((Ke = Ru.split(".")),
      (gn = Ke[0] > 0 && Ke[0] < 4 ? 1 : +(Ke[0] + Ke[1])));
    !gn &&
      Wi &&
      ((Ke = Wi.match(/Edge\/(\d+)/)),
      (!Ke || Ke[1] >= 74) &&
        ((Ke = Wi.match(/Chrome\/(\d+)/)), Ke && (gn = +Ke[1])));
    Nu.exports = gn;
  });
  var Bi = c((aH, qu) => {
    var Pu = Lu(),
      xb = Xt();
    qu.exports =
      !!Object.getOwnPropertySymbols &&
      !xb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Pu && Pu < 41)
        );
      });
  });
  var ji = c((sH, Mu) => {
    var Sb = Bi();
    Mu.exports = Sb && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var zi = c((uH, Du) => {
    var Rb = Ee(),
      Cb = Ar(),
      Nb = it(),
      Lb = Iu(),
      Pb = ji(),
      qb = Rb.Object;
    Du.exports = Pb
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Cb("Symbol");
          return Nb(t) && Lb(t.prototype, qb(e));
        };
  });
  var Gu = c((cH, Fu) => {
    var Mb = Ee(),
      Db = Mb.String;
    Fu.exports = function (e) {
      try {
        return Db(e);
      } catch {
        return "Object";
      }
    };
  });
  var Vu = c((lH, Uu) => {
    var Fb = Ee(),
      Gb = it(),
      Ub = Gu(),
      Vb = Fb.TypeError;
    Uu.exports = function (e) {
      if (Gb(e)) return e;
      throw Vb(Ub(e) + " is not a function");
    };
  });
  var Hu = c((fH, ku) => {
    var kb = Vu();
    ku.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : kb(r);
    };
  });
  var Wu = c((dH, Xu) => {
    var Hb = Ee(),
      Ki = vn(),
      Yi = it(),
      $i = Wt(),
      Xb = Hb.TypeError;
    Xu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Yi((r = e.toString)) && !$i((n = Ki(r, e)))) ||
        (Yi((r = e.valueOf)) && !$i((n = Ki(r, e)))) ||
        (t !== "string" && Yi((r = e.toString)) && !$i((n = Ki(r, e))))
      )
        return n;
      throw Xb("Can't convert object to primitive value");
    };
  });
  var ju = c((pH, Bu) => {
    Bu.exports = !1;
  });
  var hn = c((vH, Ku) => {
    var zu = Ee(),
      Wb = Object.defineProperty;
    Ku.exports = function (e, t) {
      try {
        Wb(zu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        zu[e] = t;
      }
      return t;
    };
  });
  var En = c((gH, $u) => {
    var Bb = Ee(),
      jb = hn(),
      Yu = "__core-js_shared__",
      zb = Bb[Yu] || jb(Yu, {});
    $u.exports = zb;
  });
  var Qi = c((hH, Zu) => {
    var Kb = ju(),
      Qu = En();
    (Zu.exports = function (e, t) {
      return Qu[e] || (Qu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: Kb ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var ec = c((EH, Ju) => {
    var Yb = Ee(),
      $b = Hi(),
      Qb = Yb.Object;
    Ju.exports = function (e) {
      return Qb($b(e));
    };
  });
  var mt = c((yH, tc) => {
    var Zb = ze(),
      Jb = ec(),
      eT = Zb({}.hasOwnProperty);
    tc.exports =
      Object.hasOwn ||
      function (t, r) {
        return eT(Jb(t), r);
      };
  });
  var Zi = c((mH, rc) => {
    var tT = ze(),
      rT = 0,
      nT = Math.random(),
      iT = tT((1).toString);
    rc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + iT(++rT + nT, 36);
    };
  });
  var Ji = c((_H, sc) => {
    var oT = Ee(),
      aT = Qi(),
      nc = mt(),
      sT = Zi(),
      ic = Bi(),
      ac = ji(),
      Bt = aT("wks"),
      Nt = oT.Symbol,
      oc = Nt && Nt.for,
      uT = ac ? Nt : (Nt && Nt.withoutSetter) || sT;
    sc.exports = function (e) {
      if (!nc(Bt, e) || !(ic || typeof Bt[e] == "string")) {
        var t = "Symbol." + e;
        ic && nc(Nt, e)
          ? (Bt[e] = Nt[e])
          : ac && oc
          ? (Bt[e] = oc(t))
          : (Bt[e] = uT(t));
      }
      return Bt[e];
    };
  });
  var fc = c((bH, lc) => {
    var cT = Ee(),
      lT = vn(),
      uc = Wt(),
      cc = zi(),
      fT = Hu(),
      dT = Wu(),
      pT = Ji(),
      vT = cT.TypeError,
      gT = pT("toPrimitive");
    lc.exports = function (e, t) {
      if (!uc(e) || cc(e)) return e;
      var r = fT(e, gT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = lT(r, e, t)), !uc(n) || cc(n))
        )
          return n;
        throw vT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), dT(e, t);
    };
  });
  var eo = c((TH, dc) => {
    var hT = fc(),
      ET = zi();
    dc.exports = function (e) {
      var t = hT(e, "string");
      return ET(t) ? t : t + "";
    };
  });
  var ro = c((IH, vc) => {
    var yT = Ee(),
      pc = Wt(),
      to = yT.document,
      mT = pc(to) && pc(to.createElement);
    vc.exports = function (e) {
      return mT ? to.createElement(e) : {};
    };
  });
  var no = c((OH, gc) => {
    var _T = Ct(),
      bT = Xt(),
      TT = ro();
    gc.exports =
      !_T &&
      !bT(function () {
        return (
          Object.defineProperty(TT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var io = c((Ec) => {
    var IT = Ct(),
      OT = vn(),
      AT = uu(),
      wT = Gi(),
      xT = Or(),
      ST = eo(),
      RT = mt(),
      CT = no(),
      hc = Object.getOwnPropertyDescriptor;
    Ec.f = IT
      ? hc
      : function (t, r) {
          if (((t = xT(t)), (r = ST(r)), CT))
            try {
              return hc(t, r);
            } catch {}
          if (RT(t, r)) return wT(!OT(AT.f, t, r), t[r]);
        };
  });
  var wr = c((wH, mc) => {
    var yc = Ee(),
      NT = Wt(),
      LT = yc.String,
      PT = yc.TypeError;
    mc.exports = function (e) {
      if (NT(e)) return e;
      throw PT(LT(e) + " is not an object");
    };
  });
  var xr = c((Tc) => {
    var qT = Ee(),
      MT = Ct(),
      DT = no(),
      _c = wr(),
      FT = eo(),
      GT = qT.TypeError,
      bc = Object.defineProperty;
    Tc.f = MT
      ? bc
      : function (t, r, n) {
          if ((_c(t), (r = FT(r)), _c(n), DT))
            try {
              return bc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw GT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var yn = c((SH, Ic) => {
    var UT = Ct(),
      VT = xr(),
      kT = Gi();
    Ic.exports = UT
      ? function (e, t, r) {
          return VT.f(e, t, kT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var ao = c((RH, Oc) => {
    var HT = ze(),
      XT = it(),
      oo = En(),
      WT = HT(Function.toString);
    XT(oo.inspectSource) ||
      (oo.inspectSource = function (e) {
        return WT(e);
      });
    Oc.exports = oo.inspectSource;
  });
  var xc = c((CH, wc) => {
    var BT = Ee(),
      jT = it(),
      zT = ao(),
      Ac = BT.WeakMap;
    wc.exports = jT(Ac) && /native code/.test(zT(Ac));
  });
  var so = c((NH, Rc) => {
    var KT = Qi(),
      YT = Zi(),
      Sc = KT("keys");
    Rc.exports = function (e) {
      return Sc[e] || (Sc[e] = YT(e));
    };
  });
  var mn = c((LH, Cc) => {
    Cc.exports = {};
  });
  var Dc = c((PH, Mc) => {
    var $T = xc(),
      qc = Ee(),
      uo = ze(),
      QT = Wt(),
      ZT = yn(),
      co = mt(),
      lo = En(),
      JT = so(),
      eI = mn(),
      Nc = "Object already initialized",
      po = qc.TypeError,
      tI = qc.WeakMap,
      _n,
      Sr,
      bn,
      rI = function (e) {
        return bn(e) ? Sr(e) : _n(e, {});
      },
      nI = function (e) {
        return function (t) {
          var r;
          if (!QT(t) || (r = Sr(t)).type !== e)
            throw po("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    $T || lo.state
      ? ((_t = lo.state || (lo.state = new tI())),
        (Lc = uo(_t.get)),
        (fo = uo(_t.has)),
        (Pc = uo(_t.set)),
        (_n = function (e, t) {
          if (fo(_t, e)) throw new po(Nc);
          return (t.facade = e), Pc(_t, e, t), t;
        }),
        (Sr = function (e) {
          return Lc(_t, e) || {};
        }),
        (bn = function (e) {
          return fo(_t, e);
        }))
      : ((Lt = JT("state")),
        (eI[Lt] = !0),
        (_n = function (e, t) {
          if (co(e, Lt)) throw new po(Nc);
          return (t.facade = e), ZT(e, Lt, t), t;
        }),
        (Sr = function (e) {
          return co(e, Lt) ? e[Lt] : {};
        }),
        (bn = function (e) {
          return co(e, Lt);
        }));
    var _t, Lc, fo, Pc, Lt;
    Mc.exports = { set: _n, get: Sr, has: bn, enforce: rI, getterFor: nI };
  });
  var Uc = c((qH, Gc) => {
    var vo = Ct(),
      iI = mt(),
      Fc = Function.prototype,
      oI = vo && Object.getOwnPropertyDescriptor,
      go = iI(Fc, "name"),
      aI = go && function () {}.name === "something",
      sI = go && (!vo || (vo && oI(Fc, "name").configurable));
    Gc.exports = { EXISTS: go, PROPER: aI, CONFIGURABLE: sI };
  });
  var Wc = c((MH, Xc) => {
    var uI = Ee(),
      Vc = it(),
      cI = mt(),
      kc = yn(),
      lI = hn(),
      fI = ao(),
      Hc = Dc(),
      dI = Uc().CONFIGURABLE,
      pI = Hc.get,
      vI = Hc.enforce,
      gI = String(String).split("String");
    (Xc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Vc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!cI(r, "name") || (dI && r.name !== s)) && kc(r, "name", s),
          (u = vI(r)),
          u.source || (u.source = gI.join(typeof s == "string" ? s : ""))),
        e === uI)
      ) {
        o ? (e[t] = r) : lI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : kc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Vc(this) && pI(this).source) || fI(this);
    });
  });
  var ho = c((DH, Bc) => {
    var hI = Math.ceil,
      EI = Math.floor;
    Bc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? EI : hI)(t);
    };
  });
  var zc = c((FH, jc) => {
    var yI = ho(),
      mI = Math.max,
      _I = Math.min;
    jc.exports = function (e, t) {
      var r = yI(e);
      return r < 0 ? mI(r + t, 0) : _I(r, t);
    };
  });
  var Yc = c((GH, Kc) => {
    var bI = ho(),
      TI = Math.min;
    Kc.exports = function (e) {
      return e > 0 ? TI(bI(e), 9007199254740991) : 0;
    };
  });
  var Qc = c((UH, $c) => {
    var II = Yc();
    $c.exports = function (e) {
      return II(e.length);
    };
  });
  var Eo = c((VH, Jc) => {
    var OI = Or(),
      AI = zc(),
      wI = Qc(),
      Zc = function (e) {
        return function (t, r, n) {
          var i = OI(t),
            o = wI(i),
            a = AI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Jc.exports = { includes: Zc(!0), indexOf: Zc(!1) };
  });
  var mo = c((kH, tl) => {
    var xI = ze(),
      yo = mt(),
      SI = Or(),
      RI = Eo().indexOf,
      CI = mn(),
      el = xI([].push);
    tl.exports = function (e, t) {
      var r = SI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !yo(CI, o) && yo(r, o) && el(i, o);
      for (; t.length > n; ) yo(r, (o = t[n++])) && (~RI(i, o) || el(i, o));
      return i;
    };
  });
  var Tn = c((HH, rl) => {
    rl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var il = c((nl) => {
    var NI = mo(),
      LI = Tn(),
      PI = LI.concat("length", "prototype");
    nl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return NI(t, PI);
      };
  });
  var al = c((ol) => {
    ol.f = Object.getOwnPropertySymbols;
  });
  var ul = c((BH, sl) => {
    var qI = Ar(),
      MI = ze(),
      DI = il(),
      FI = al(),
      GI = wr(),
      UI = MI([].concat);
    sl.exports =
      qI("Reflect", "ownKeys") ||
      function (t) {
        var r = DI.f(GI(t)),
          n = FI.f;
        return n ? UI(r, n(t)) : r;
      };
  });
  var ll = c((jH, cl) => {
    var VI = mt(),
      kI = ul(),
      HI = io(),
      XI = xr();
    cl.exports = function (e, t) {
      for (var r = kI(t), n = XI.f, i = HI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        VI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var dl = c((zH, fl) => {
    var WI = Xt(),
      BI = it(),
      jI = /#|\.prototype\./,
      Rr = function (e, t) {
        var r = KI[zI(e)];
        return r == $I ? !0 : r == YI ? !1 : BI(t) ? WI(t) : !!t;
      },
      zI = (Rr.normalize = function (e) {
        return String(e).replace(jI, ".").toLowerCase();
      }),
      KI = (Rr.data = {}),
      YI = (Rr.NATIVE = "N"),
      $I = (Rr.POLYFILL = "P");
    fl.exports = Rr;
  });
  var vl = c((KH, pl) => {
    var _o = Ee(),
      QI = io().f,
      ZI = yn(),
      JI = Wc(),
      eO = hn(),
      tO = ll(),
      rO = dl();
    pl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        g;
      if (
        (n
          ? (a = _o)
          : i
          ? (a = _o[r] || eO(r, {}))
          : (a = (_o[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((g = QI(a, s)), (u = g && g.value)) : (u = a[s]),
            (o = rO(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            tO(f, u);
          }
          (e.sham || (u && u.sham)) && ZI(f, "sham", !0), JI(a, s, f, e);
        }
    };
  });
  var hl = c((YH, gl) => {
    var nO = mo(),
      iO = Tn();
    gl.exports =
      Object.keys ||
      function (t) {
        return nO(t, iO);
      };
  });
  var yl = c(($H, El) => {
    var oO = Ct(),
      aO = xr(),
      sO = wr(),
      uO = Or(),
      cO = hl();
    El.exports = oO
      ? Object.defineProperties
      : function (t, r) {
          sO(t);
          for (var n = uO(r), i = cO(r), o = i.length, a = 0, s; o > a; )
            aO.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var _l = c((QH, ml) => {
    var lO = Ar();
    ml.exports = lO("document", "documentElement");
  });
  var Sl = c((ZH, xl) => {
    var fO = wr(),
      dO = yl(),
      bl = Tn(),
      pO = mn(),
      vO = _l(),
      gO = ro(),
      hO = so(),
      Tl = ">",
      Il = "<",
      To = "prototype",
      Io = "script",
      Al = hO("IE_PROTO"),
      bo = function () {},
      wl = function (e) {
        return Il + Io + Tl + e + Il + "/" + Io + Tl;
      },
      Ol = function (e) {
        e.write(wl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      EO = function () {
        var e = gO("iframe"),
          t = "java" + Io + ":",
          r;
        return (
          (e.style.display = "none"),
          vO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(wl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      In,
      On = function () {
        try {
          In = new ActiveXObject("htmlfile");
        } catch {}
        On =
          typeof document < "u"
            ? document.domain && In
              ? Ol(In)
              : EO()
            : Ol(In);
        for (var e = bl.length; e--; ) delete On[To][bl[e]];
        return On();
      };
    pO[Al] = !0;
    xl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((bo[To] = fO(t)), (n = new bo()), (bo[To] = null), (n[Al] = t))
            : (n = On()),
          r === void 0 ? n : dO(n, r)
        );
      };
  });
  var Cl = c((JH, Rl) => {
    var yO = Ji(),
      mO = Sl(),
      _O = xr(),
      Oo = yO("unscopables"),
      Ao = Array.prototype;
    Ao[Oo] == null && _O.f(Ao, Oo, { configurable: !0, value: mO(null) });
    Rl.exports = function (e) {
      Ao[Oo][e] = !0;
    };
  });
  var Nl = c(() => {
    "use strict";
    var bO = vl(),
      TO = Eo().includes,
      IO = Cl();
    bO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return TO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    IO("includes");
  });
  var Pl = c((rX, Ll) => {
    var OO = Ee(),
      AO = ze();
    Ll.exports = function (e, t) {
      return AO(OO[e].prototype[t]);
    };
  });
  var Ml = c((nX, ql) => {
    Nl();
    var wO = Pl();
    ql.exports = wO("Array", "includes");
  });
  var Fl = c((iX, Dl) => {
    var xO = Ml();
    Dl.exports = xO;
  });
  var Ul = c((oX, Gl) => {
    var SO = Fl();
    Gl.exports = SO;
  });
  var wo = c((aX, Vl) => {
    var RO =
      typeof global == "object" && global && global.Object === Object && global;
    Vl.exports = RO;
  });
  var Ye = c((sX, kl) => {
    var CO = wo(),
      NO = typeof self == "object" && self && self.Object === Object && self,
      LO = CO || NO || Function("return this")();
    kl.exports = LO;
  });
  var jt = c((uX, Hl) => {
    var PO = Ye(),
      qO = PO.Symbol;
    Hl.exports = qO;
  });
  var jl = c((cX, Bl) => {
    var Xl = jt(),
      Wl = Object.prototype,
      MO = Wl.hasOwnProperty,
      DO = Wl.toString,
      Cr = Xl ? Xl.toStringTag : void 0;
    function FO(e) {
      var t = MO.call(e, Cr),
        r = e[Cr];
      try {
        e[Cr] = void 0;
        var n = !0;
      } catch {}
      var i = DO.call(e);
      return n && (t ? (e[Cr] = r) : delete e[Cr]), i;
    }
    Bl.exports = FO;
  });
  var Kl = c((lX, zl) => {
    var GO = Object.prototype,
      UO = GO.toString;
    function VO(e) {
      return UO.call(e);
    }
    zl.exports = VO;
  });
  var bt = c((fX, Ql) => {
    var Yl = jt(),
      kO = jl(),
      HO = Kl(),
      XO = "[object Null]",
      WO = "[object Undefined]",
      $l = Yl ? Yl.toStringTag : void 0;
    function BO(e) {
      return e == null
        ? e === void 0
          ? WO
          : XO
        : $l && $l in Object(e)
        ? kO(e)
        : HO(e);
    }
    Ql.exports = BO;
  });
  var xo = c((dX, Zl) => {
    function jO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Zl.exports = jO;
  });
  var So = c((pX, Jl) => {
    var zO = xo(),
      KO = zO(Object.getPrototypeOf, Object);
    Jl.exports = KO;
  });
  var dt = c((vX, ef) => {
    function YO(e) {
      return e != null && typeof e == "object";
    }
    ef.exports = YO;
  });
  var Ro = c((gX, rf) => {
    var $O = bt(),
      QO = So(),
      ZO = dt(),
      JO = "[object Object]",
      eA = Function.prototype,
      tA = Object.prototype,
      tf = eA.toString,
      rA = tA.hasOwnProperty,
      nA = tf.call(Object);
    function iA(e) {
      if (!ZO(e) || $O(e) != JO) return !1;
      var t = QO(e);
      if (t === null) return !0;
      var r = rA.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && tf.call(r) == nA;
    }
    rf.exports = iA;
  });
  var nf = c((Co) => {
    "use strict";
    Object.defineProperty(Co, "__esModule", { value: !0 });
    Co.default = oA;
    function oA(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var of = c((Lo, No) => {
    "use strict";
    Object.defineProperty(Lo, "__esModule", { value: !0 });
    var aA = nf(),
      sA = uA(aA);
    function uA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var zt;
    typeof self < "u"
      ? (zt = self)
      : typeof window < "u"
      ? (zt = window)
      : typeof global < "u"
      ? (zt = global)
      : typeof No < "u"
      ? (zt = No)
      : (zt = Function("return this")());
    var cA = (0, sA.default)(zt);
    Lo.default = cA;
  });
  var Po = c((Nr) => {
    "use strict";
    Nr.__esModule = !0;
    Nr.ActionTypes = void 0;
    Nr.default = cf;
    var lA = Ro(),
      fA = uf(lA),
      dA = of(),
      af = uf(dA);
    function uf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var sf = (Nr.ActionTypes = { INIT: "@@redux/INIT" });
    function cf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(cf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function g() {
        return o;
      }
      function p(T) {
        if (typeof T != "function")
          throw new Error("Expected listener to be a function.");
        var P = !0;
        return (
          f(),
          s.push(T),
          function () {
            if (P) {
              (P = !1), f();
              var N = s.indexOf(T);
              s.splice(N, 1);
            }
          }
        );
      }
      function E(T) {
        if (!(0, fA.default)(T))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof T.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, T));
        } finally {
          u = !1;
        }
        for (var P = (a = s), w = 0; w < P.length; w++) P[w]();
        return T;
      }
      function y(T) {
        if (typeof T != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = T), E({ type: sf.INIT });
      }
      function _() {
        var T,
          P = p;
        return (
          (T = {
            subscribe: function (N) {
              if (typeof N != "object")
                throw new TypeError("Expected the observer to be an object.");
              function x() {
                N.next && N.next(g());
              }
              x();
              var M = P(x);
              return { unsubscribe: M };
            },
          }),
          (T[af.default] = function () {
            return this;
          }),
          T
        );
      }
      return (
        E({ type: sf.INIT }),
        (n = { dispatch: E, subscribe: p, getState: g, replaceReducer: y }),
        (n[af.default] = _),
        n
      );
    }
  });
  var Mo = c((qo) => {
    "use strict";
    qo.__esModule = !0;
    qo.default = pA;
    function pA(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var df = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = yA;
    var lf = Po(),
      vA = Ro(),
      mX = ff(vA),
      gA = Mo(),
      _X = ff(gA);
    function ff(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function hA(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function EA(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: lf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                lf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function yA(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        EA(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          g = arguments[1];
        if (s) throw s;
        if (!1) var p;
        for (var E = !1, y = {}, _ = 0; _ < o.length; _++) {
          var T = o[_],
            P = r[T],
            w = f[T],
            N = P(w, g);
          if (typeof N > "u") {
            var x = hA(T, g);
            throw new Error(x);
          }
          (y[T] = N), (E = E || N !== w);
        }
        return E ? y : f;
      };
    }
  });
  var vf = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = mA;
    function pf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function mA(e, t) {
      if (typeof e == "function") return pf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = pf(a, t));
      }
      return n;
    }
  });
  var Uo = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = _A;
    function _A() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var gf = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    var bA =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Vo.default = AA;
    var TA = Uo(),
      IA = OA(TA);
    function OA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function AA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            g = {
              getState: s.getState,
              dispatch: function (E) {
                return u(E);
              },
            };
          return (
            (f = t.map(function (p) {
              return p(g);
            })),
            (u = IA.default.apply(void 0, f)(s.dispatch)),
            bA({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var ko = c((ke) => {
    "use strict";
    ke.__esModule = !0;
    ke.compose =
      ke.applyMiddleware =
      ke.bindActionCreators =
      ke.combineReducers =
      ke.createStore =
        void 0;
    var wA = Po(),
      xA = Kt(wA),
      SA = df(),
      RA = Kt(SA),
      CA = vf(),
      NA = Kt(CA),
      LA = gf(),
      PA = Kt(LA),
      qA = Uo(),
      MA = Kt(qA),
      DA = Mo(),
      AX = Kt(DA);
    function Kt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    ke.createStore = xA.default;
    ke.combineReducers = RA.default;
    ke.bindActionCreators = NA.default;
    ke.applyMiddleware = PA.default;
    ke.compose = MA.default;
  });
  var $e,
    Ho,
    ot,
    FA,
    GA,
    Xo,
    UA,
    hf = he(() => {
      "use strict";
      ($e = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Ho = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (ot = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (FA = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (GA = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Xo = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (UA = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var He,
    VA,
    Wo = he(() => {
      "use strict";
      (He = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (VA = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var kA,
    Ef = he(() => {
      "use strict";
      kA = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var HA,
    XA,
    WA,
    BA,
    jA,
    zA,
    KA,
    Bo,
    yf = he(() => {
      "use strict";
      Wo();
      ({
        TRANSFORM_MOVE: HA,
        TRANSFORM_SCALE: XA,
        TRANSFORM_ROTATE: WA,
        TRANSFORM_SKEW: BA,
        STYLE_SIZE: jA,
        STYLE_FILTER: zA,
        STYLE_FONT_VARIATION: KA,
      } = He),
        (Bo = {
          [HA]: !0,
          [XA]: !0,
          [WA]: !0,
          [BA]: !0,
          [jA]: !0,
          [zA]: !0,
          [KA]: !0,
        });
    });
  var Ie = {};
  De(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => fw,
    IX2_ANIMATION_FRAME_CHANGED: () => ow,
    IX2_CLEAR_REQUESTED: () => rw,
    IX2_ELEMENT_STATE_CHANGED: () => lw,
    IX2_EVENT_LISTENER_ADDED: () => nw,
    IX2_EVENT_STATE_CHANGED: () => iw,
    IX2_INSTANCE_ADDED: () => sw,
    IX2_INSTANCE_REMOVED: () => cw,
    IX2_INSTANCE_STARTED: () => uw,
    IX2_MEDIA_QUERIES_DEFINED: () => pw,
    IX2_PARAMETER_CHANGED: () => aw,
    IX2_PLAYBACK_REQUESTED: () => ew,
    IX2_PREVIEW_REQUESTED: () => JA,
    IX2_RAW_DATA_IMPORTED: () => YA,
    IX2_SESSION_INITIALIZED: () => $A,
    IX2_SESSION_STARTED: () => QA,
    IX2_SESSION_STOPPED: () => ZA,
    IX2_STOP_REQUESTED: () => tw,
    IX2_TEST_FRAME_RENDERED: () => vw,
    IX2_VIEWPORT_WIDTH_CHANGED: () => dw,
  });
  var YA,
    $A,
    QA,
    ZA,
    JA,
    ew,
    tw,
    rw,
    nw,
    iw,
    ow,
    aw,
    sw,
    uw,
    cw,
    lw,
    fw,
    dw,
    pw,
    vw,
    mf = he(() => {
      "use strict";
      (YA = "IX2_RAW_DATA_IMPORTED"),
        ($A = "IX2_SESSION_INITIALIZED"),
        (QA = "IX2_SESSION_STARTED"),
        (ZA = "IX2_SESSION_STOPPED"),
        (JA = "IX2_PREVIEW_REQUESTED"),
        (ew = "IX2_PLAYBACK_REQUESTED"),
        (tw = "IX2_STOP_REQUESTED"),
        (rw = "IX2_CLEAR_REQUESTED"),
        (nw = "IX2_EVENT_LISTENER_ADDED"),
        (iw = "IX2_EVENT_STATE_CHANGED"),
        (ow = "IX2_ANIMATION_FRAME_CHANGED"),
        (aw = "IX2_PARAMETER_CHANGED"),
        (sw = "IX2_INSTANCE_ADDED"),
        (uw = "IX2_INSTANCE_STARTED"),
        (cw = "IX2_INSTANCE_REMOVED"),
        (lw = "IX2_ELEMENT_STATE_CHANGED"),
        (fw = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (dw = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (pw = "IX2_MEDIA_QUERIES_DEFINED"),
        (vw = "IX2_TEST_FRAME_RENDERED");
    });
  var Re = {};
  De(Re, {
    ABSTRACT_NODE: () => dx,
    AUTO: () => tx,
    BACKGROUND: () => Yw,
    BACKGROUND_COLOR: () => Kw,
    BAR_DELIMITER: () => ix,
    BORDER_COLOR: () => $w,
    BOUNDARY_SELECTOR: () => mw,
    CHILDREN: () => ox,
    COLON_DELIMITER: () => nx,
    COLOR: () => Qw,
    COMMA_DELIMITER: () => rx,
    CONFIG_UNIT: () => xw,
    CONFIG_VALUE: () => Iw,
    CONFIG_X_UNIT: () => Ow,
    CONFIG_X_VALUE: () => _w,
    CONFIG_Y_UNIT: () => Aw,
    CONFIG_Y_VALUE: () => bw,
    CONFIG_Z_UNIT: () => ww,
    CONFIG_Z_VALUE: () => Tw,
    DISPLAY: () => Zw,
    FILTER: () => Ww,
    FLEX: () => Jw,
    FONT_VARIATION_SETTINGS: () => Bw,
    HEIGHT: () => zw,
    HTML_ELEMENT: () => lx,
    IMMEDIATE_CHILDREN: () => ax,
    IX2_ID_DELIMITER: () => gw,
    OPACITY: () => Xw,
    PARENT: () => ux,
    PLAIN_OBJECT: () => fx,
    PRESERVE_3D: () => cx,
    RENDER_GENERAL: () => vx,
    RENDER_PLUGIN: () => hx,
    RENDER_STYLE: () => gx,
    RENDER_TRANSFORM: () => px,
    ROTATE_X: () => Fw,
    ROTATE_Y: () => Gw,
    ROTATE_Z: () => Uw,
    SCALE_3D: () => Dw,
    SCALE_X: () => Pw,
    SCALE_Y: () => qw,
    SCALE_Z: () => Mw,
    SIBLINGS: () => sx,
    SKEW: () => Vw,
    SKEW_X: () => kw,
    SKEW_Y: () => Hw,
    TRANSFORM: () => Sw,
    TRANSLATE_3D: () => Lw,
    TRANSLATE_X: () => Rw,
    TRANSLATE_Y: () => Cw,
    TRANSLATE_Z: () => Nw,
    WF_PAGE: () => hw,
    WIDTH: () => jw,
    WILL_CHANGE: () => ex,
    W_MOD_IX: () => yw,
    W_MOD_JS: () => Ew,
  });
  var gw,
    hw,
    Ew,
    yw,
    mw,
    _w,
    bw,
    Tw,
    Iw,
    Ow,
    Aw,
    ww,
    xw,
    Sw,
    Rw,
    Cw,
    Nw,
    Lw,
    Pw,
    qw,
    Mw,
    Dw,
    Fw,
    Gw,
    Uw,
    Vw,
    kw,
    Hw,
    Xw,
    Ww,
    Bw,
    jw,
    zw,
    Kw,
    Yw,
    $w,
    Qw,
    Zw,
    Jw,
    ex,
    tx,
    rx,
    nx,
    ix,
    ox,
    ax,
    sx,
    ux,
    cx,
    lx,
    fx,
    dx,
    px,
    vx,
    gx,
    hx,
    _f = he(() => {
      "use strict";
      (gw = "|"),
        (hw = "data-wf-page"),
        (Ew = "w-mod-js"),
        (yw = "w-mod-ix"),
        (mw = ".w-dyn-item"),
        (_w = "xValue"),
        (bw = "yValue"),
        (Tw = "zValue"),
        (Iw = "value"),
        (Ow = "xUnit"),
        (Aw = "yUnit"),
        (ww = "zUnit"),
        (xw = "unit"),
        (Sw = "transform"),
        (Rw = "translateX"),
        (Cw = "translateY"),
        (Nw = "translateZ"),
        (Lw = "translate3d"),
        (Pw = "scaleX"),
        (qw = "scaleY"),
        (Mw = "scaleZ"),
        (Dw = "scale3d"),
        (Fw = "rotateX"),
        (Gw = "rotateY"),
        (Uw = "rotateZ"),
        (Vw = "skew"),
        (kw = "skewX"),
        (Hw = "skewY"),
        (Xw = "opacity"),
        (Ww = "filter"),
        (Bw = "font-variation-settings"),
        (jw = "width"),
        (zw = "height"),
        (Kw = "backgroundColor"),
        (Yw = "background"),
        ($w = "borderColor"),
        (Qw = "color"),
        (Zw = "display"),
        (Jw = "flex"),
        (ex = "willChange"),
        (tx = "AUTO"),
        (rx = ","),
        (nx = ":"),
        (ix = "|"),
        (ox = "CHILDREN"),
        (ax = "IMMEDIATE_CHILDREN"),
        (sx = "SIBLINGS"),
        (ux = "PARENT"),
        (cx = "preserve-3d"),
        (lx = "HTML_ELEMENT"),
        (fx = "PLAIN_OBJECT"),
        (dx = "ABSTRACT_NODE"),
        (px = "RENDER_TRANSFORM"),
        (vx = "RENDER_GENERAL"),
        (gx = "RENDER_STYLE"),
        (hx = "RENDER_PLUGIN");
    });
  var bf = {};
  De(bf, {
    ActionAppliesTo: () => VA,
    ActionTypeConsts: () => He,
    EventAppliesTo: () => Ho,
    EventBasedOn: () => ot,
    EventContinuousMouseAxes: () => FA,
    EventLimitAffectedElements: () => GA,
    EventTypeConsts: () => $e,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Re,
    InteractionTypeConsts: () => kA,
    QuickEffectDirectionConsts: () => UA,
    QuickEffectIds: () => Xo,
    ReducedMotionTypes: () => Bo,
  });
  var Fe = he(() => {
    "use strict";
    hf();
    Wo();
    Ef();
    yf();
    mf();
    _f();
  });
  var Ex,
    Tf,
    If = he(() => {
      "use strict";
      Fe();
      ({ IX2_RAW_DATA_IMPORTED: Ex } = Ie),
        (Tf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Ex:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Yt = c((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    var yx =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    me.clone = wn;
    me.addLast = wf;
    me.addFirst = xf;
    me.removeLast = Sf;
    me.removeFirst = Rf;
    me.insert = Cf;
    me.removeAt = Nf;
    me.replaceAt = Lf;
    me.getIn = xn;
    me.set = Sn;
    me.setIn = Rn;
    me.update = qf;
    me.updateIn = Mf;
    me.merge = Df;
    me.mergeDeep = Ff;
    me.mergeIn = Gf;
    me.omit = Uf;
    me.addDefaults = Vf;
    var Of = "INVALID_ARGS";
    function Af(e) {
      throw new Error(e);
    }
    function jo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var mx = {}.hasOwnProperty;
    function wn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ge(e, t, r) {
      var n = r;
      n == null && Af(Of);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var g = jo(f);
          if (g.length)
            for (var p = 0; p <= g.length; p++) {
              var E = g[p];
              if (!(e && n[E] !== void 0)) {
                var y = f[E];
                t && An(n[E]) && An(y) && (y = Ge(e, t, n[E], y)),
                  !(y === void 0 || y === n[E]) &&
                    (i || ((i = !0), (n = wn(n))), (n[E] = y));
              }
            }
        }
      }
      return n;
    }
    function An(e) {
      var t = typeof e > "u" ? "undefined" : yx(e);
      return e != null && (t === "object" || t === "function");
    }
    function wf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function xf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Sf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Rf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Cf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Nf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Lf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function xn(e, t) {
      if ((!Array.isArray(t) && Af(Of), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Sn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = wn(i);
      return (o[t] = r), o;
    }
    function Pf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          An(e) && An(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Pf(a, t, r, n + 1);
      }
      return Sn(e, o, i);
    }
    function Rn(e, t, r) {
      return t.length ? Pf(e, t, r, 0) : r;
    }
    function qf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Sn(e, t, i);
    }
    function Mf(e, t, r) {
      var n = xn(e, t),
        i = r(n);
      return Rn(e, t, i);
    }
    function Df(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ge.call.apply(Ge, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ge(!1, !1, e, t, r, n, i, o);
    }
    function Ff(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ge.call.apply(Ge, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ge(!1, !0, e, t, r, n, i, o);
    }
    function Gf(e, t, r, n, i, o, a) {
      var s = xn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          g = Array(f > 7 ? f - 7 : 0),
          p = 7;
        p < f;
        p++
      )
        g[p - 7] = arguments[p];
      return (
        g.length
          ? (u = Ge.call.apply(Ge, [null, !1, !1, s, r, n, i, o, a].concat(g)))
          : (u = Ge(!1, !1, s, r, n, i, o, a)),
        Rn(e, t, u)
      );
    }
    function Uf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (mx.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = jo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Vf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ge.call.apply(Ge, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ge(!0, !1, e, t, r, n, i, o);
    }
    var _x = {
      clone: wn,
      addLast: wf,
      addFirst: xf,
      removeLast: Sf,
      removeFirst: Rf,
      insert: Cf,
      removeAt: Nf,
      replaceAt: Lf,
      getIn: xn,
      set: Sn,
      setIn: Rn,
      update: qf,
      updateIn: Mf,
      merge: Df,
      mergeDeep: Ff,
      mergeIn: Gf,
      omit: Uf,
      addDefaults: Vf,
    };
    me.default = _x;
  });
  var Hf,
    bx,
    Tx,
    Ix,
    Ox,
    Ax,
    kf,
    Xf,
    Wf = he(() => {
      "use strict";
      Fe();
      (Hf = le(Yt())),
        ({
          IX2_PREVIEW_REQUESTED: bx,
          IX2_PLAYBACK_REQUESTED: Tx,
          IX2_STOP_REQUESTED: Ix,
          IX2_CLEAR_REQUESTED: Ox,
        } = Ie),
        (Ax = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (kf = Object.create(null, {
          [bx]: { value: "preview" },
          [Tx]: { value: "playback" },
          [Ix]: { value: "stop" },
          [Ox]: { value: "clear" },
        })),
        (Xf = (e = Ax, t) => {
          if (t.type in kf) {
            let r = [kf[t.type]];
            return (0, Hf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Le,
    wx,
    xx,
    Sx,
    Rx,
    Cx,
    Nx,
    Lx,
    Px,
    qx,
    Mx,
    Bf,
    Dx,
    jf,
    zf = he(() => {
      "use strict";
      Fe();
      (Le = le(Yt())),
        ({
          IX2_SESSION_INITIALIZED: wx,
          IX2_SESSION_STARTED: xx,
          IX2_TEST_FRAME_RENDERED: Sx,
          IX2_SESSION_STOPPED: Rx,
          IX2_EVENT_LISTENER_ADDED: Cx,
          IX2_EVENT_STATE_CHANGED: Nx,
          IX2_ANIMATION_FRAME_CHANGED: Lx,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Px,
          IX2_VIEWPORT_WIDTH_CHANGED: qx,
          IX2_MEDIA_QUERIES_DEFINED: Mx,
        } = Ie),
        (Bf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (Dx = 20),
        (jf = (e = Bf, t) => {
          switch (t.type) {
            case wx: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Le.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case xx:
              return (0, Le.set)(e, "active", !0);
            case Sx: {
              let {
                payload: { step: r = Dx },
              } = t;
              return (0, Le.set)(e, "tick", e.tick + r);
            }
            case Rx:
              return Bf;
            case Lx: {
              let {
                payload: { now: r },
              } = t;
              return (0, Le.set)(e, "tick", r);
            }
            case Cx: {
              let r = (0, Le.addLast)(e.eventListeners, t.payload);
              return (0, Le.set)(e, "eventListeners", r);
            }
            case Nx: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Le.setIn)(e, ["eventState", r], n);
            }
            case Px: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Le.setIn)(e, ["playbackState", r], n);
            }
            case qx: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Le.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case Mx:
              return (0, Le.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Yf = c((XX, Kf) => {
    function Fx() {
      (this.__data__ = []), (this.size = 0);
    }
    Kf.exports = Fx;
  });
  var Cn = c((WX, $f) => {
    function Gx(e, t) {
      return e === t || (e !== e && t !== t);
    }
    $f.exports = Gx;
  });
  var Lr = c((BX, Qf) => {
    var Ux = Cn();
    function Vx(e, t) {
      for (var r = e.length; r--; ) if (Ux(e[r][0], t)) return r;
      return -1;
    }
    Qf.exports = Vx;
  });
  var Jf = c((jX, Zf) => {
    var kx = Lr(),
      Hx = Array.prototype,
      Xx = Hx.splice;
    function Wx(e) {
      var t = this.__data__,
        r = kx(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Xx.call(t, r, 1), --this.size, !0;
    }
    Zf.exports = Wx;
  });
  var td = c((zX, ed) => {
    var Bx = Lr();
    function jx(e) {
      var t = this.__data__,
        r = Bx(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    ed.exports = jx;
  });
  var nd = c((KX, rd) => {
    var zx = Lr();
    function Kx(e) {
      return zx(this.__data__, e) > -1;
    }
    rd.exports = Kx;
  });
  var od = c((YX, id) => {
    var Yx = Lr();
    function $x(e, t) {
      var r = this.__data__,
        n = Yx(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    id.exports = $x;
  });
  var Pr = c(($X, ad) => {
    var Qx = Yf(),
      Zx = Jf(),
      Jx = td(),
      eS = nd(),
      tS = od();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = Qx;
    $t.prototype.delete = Zx;
    $t.prototype.get = Jx;
    $t.prototype.has = eS;
    $t.prototype.set = tS;
    ad.exports = $t;
  });
  var ud = c((QX, sd) => {
    var rS = Pr();
    function nS() {
      (this.__data__ = new rS()), (this.size = 0);
    }
    sd.exports = nS;
  });
  var ld = c((ZX, cd) => {
    function iS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    cd.exports = iS;
  });
  var dd = c((JX, fd) => {
    function oS(e) {
      return this.__data__.get(e);
    }
    fd.exports = oS;
  });
  var vd = c((eW, pd) => {
    function aS(e) {
      return this.__data__.has(e);
    }
    pd.exports = aS;
  });
  var at = c((tW, gd) => {
    function sS(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    gd.exports = sS;
  });
  var zo = c((rW, hd) => {
    var uS = bt(),
      cS = at(),
      lS = "[object AsyncFunction]",
      fS = "[object Function]",
      dS = "[object GeneratorFunction]",
      pS = "[object Proxy]";
    function vS(e) {
      if (!cS(e)) return !1;
      var t = uS(e);
      return t == fS || t == dS || t == lS || t == pS;
    }
    hd.exports = vS;
  });
  var yd = c((nW, Ed) => {
    var gS = Ye(),
      hS = gS["__core-js_shared__"];
    Ed.exports = hS;
  });
  var bd = c((iW, _d) => {
    var Ko = yd(),
      md = (function () {
        var e = /[^.]+$/.exec((Ko && Ko.keys && Ko.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function ES(e) {
      return !!md && md in e;
    }
    _d.exports = ES;
  });
  var Yo = c((oW, Td) => {
    var yS = Function.prototype,
      mS = yS.toString;
    function _S(e) {
      if (e != null) {
        try {
          return mS.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Td.exports = _S;
  });
  var Od = c((aW, Id) => {
    var bS = zo(),
      TS = bd(),
      IS = at(),
      OS = Yo(),
      AS = /[\\^$.*+?()[\]{}|]/g,
      wS = /^\[object .+?Constructor\]$/,
      xS = Function.prototype,
      SS = Object.prototype,
      RS = xS.toString,
      CS = SS.hasOwnProperty,
      NS = RegExp(
        "^" +
          RS.call(CS)
            .replace(AS, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function LS(e) {
      if (!IS(e) || TS(e)) return !1;
      var t = bS(e) ? NS : wS;
      return t.test(OS(e));
    }
    Id.exports = LS;
  });
  var wd = c((sW, Ad) => {
    function PS(e, t) {
      return e?.[t];
    }
    Ad.exports = PS;
  });
  var Tt = c((uW, xd) => {
    var qS = Od(),
      MS = wd();
    function DS(e, t) {
      var r = MS(e, t);
      return qS(r) ? r : void 0;
    }
    xd.exports = DS;
  });
  var Nn = c((cW, Sd) => {
    var FS = Tt(),
      GS = Ye(),
      US = FS(GS, "Map");
    Sd.exports = US;
  });
  var qr = c((lW, Rd) => {
    var VS = Tt(),
      kS = VS(Object, "create");
    Rd.exports = kS;
  });
  var Ld = c((fW, Nd) => {
    var Cd = qr();
    function HS() {
      (this.__data__ = Cd ? Cd(null) : {}), (this.size = 0);
    }
    Nd.exports = HS;
  });
  var qd = c((dW, Pd) => {
    function XS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Pd.exports = XS;
  });
  var Dd = c((pW, Md) => {
    var WS = qr(),
      BS = "__lodash_hash_undefined__",
      jS = Object.prototype,
      zS = jS.hasOwnProperty;
    function KS(e) {
      var t = this.__data__;
      if (WS) {
        var r = t[e];
        return r === BS ? void 0 : r;
      }
      return zS.call(t, e) ? t[e] : void 0;
    }
    Md.exports = KS;
  });
  var Gd = c((vW, Fd) => {
    var YS = qr(),
      $S = Object.prototype,
      QS = $S.hasOwnProperty;
    function ZS(e) {
      var t = this.__data__;
      return YS ? t[e] !== void 0 : QS.call(t, e);
    }
    Fd.exports = ZS;
  });
  var Vd = c((gW, Ud) => {
    var JS = qr(),
      e0 = "__lodash_hash_undefined__";
    function t0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = JS && t === void 0 ? e0 : t),
        this
      );
    }
    Ud.exports = t0;
  });
  var Hd = c((hW, kd) => {
    var r0 = Ld(),
      n0 = qd(),
      i0 = Dd(),
      o0 = Gd(),
      a0 = Vd();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = r0;
    Qt.prototype.delete = n0;
    Qt.prototype.get = i0;
    Qt.prototype.has = o0;
    Qt.prototype.set = a0;
    kd.exports = Qt;
  });
  var Bd = c((EW, Wd) => {
    var Xd = Hd(),
      s0 = Pr(),
      u0 = Nn();
    function c0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Xd(),
          map: new (u0 || s0)(),
          string: new Xd(),
        });
    }
    Wd.exports = c0;
  });
  var zd = c((yW, jd) => {
    function l0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    jd.exports = l0;
  });
  var Mr = c((mW, Kd) => {
    var f0 = zd();
    function d0(e, t) {
      var r = e.__data__;
      return f0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Kd.exports = d0;
  });
  var $d = c((_W, Yd) => {
    var p0 = Mr();
    function v0(e) {
      var t = p0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Yd.exports = v0;
  });
  var Zd = c((bW, Qd) => {
    var g0 = Mr();
    function h0(e) {
      return g0(this, e).get(e);
    }
    Qd.exports = h0;
  });
  var ep = c((TW, Jd) => {
    var E0 = Mr();
    function y0(e) {
      return E0(this, e).has(e);
    }
    Jd.exports = y0;
  });
  var rp = c((IW, tp) => {
    var m0 = Mr();
    function _0(e, t) {
      var r = m0(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    tp.exports = _0;
  });
  var Ln = c((OW, np) => {
    var b0 = Bd(),
      T0 = $d(),
      I0 = Zd(),
      O0 = ep(),
      A0 = rp();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = b0;
    Zt.prototype.delete = T0;
    Zt.prototype.get = I0;
    Zt.prototype.has = O0;
    Zt.prototype.set = A0;
    np.exports = Zt;
  });
  var op = c((AW, ip) => {
    var w0 = Pr(),
      x0 = Nn(),
      S0 = Ln(),
      R0 = 200;
    function C0(e, t) {
      var r = this.__data__;
      if (r instanceof w0) {
        var n = r.__data__;
        if (!x0 || n.length < R0 - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new S0(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    ip.exports = C0;
  });
  var $o = c((wW, ap) => {
    var N0 = Pr(),
      L0 = ud(),
      P0 = ld(),
      q0 = dd(),
      M0 = vd(),
      D0 = op();
    function Jt(e) {
      var t = (this.__data__ = new N0(e));
      this.size = t.size;
    }
    Jt.prototype.clear = L0;
    Jt.prototype.delete = P0;
    Jt.prototype.get = q0;
    Jt.prototype.has = M0;
    Jt.prototype.set = D0;
    ap.exports = Jt;
  });
  var up = c((xW, sp) => {
    var F0 = "__lodash_hash_undefined__";
    function G0(e) {
      return this.__data__.set(e, F0), this;
    }
    sp.exports = G0;
  });
  var lp = c((SW, cp) => {
    function U0(e) {
      return this.__data__.has(e);
    }
    cp.exports = U0;
  });
  var dp = c((RW, fp) => {
    var V0 = Ln(),
      k0 = up(),
      H0 = lp();
    function Pn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new V0(); ++t < r; ) this.add(e[t]);
    }
    Pn.prototype.add = Pn.prototype.push = k0;
    Pn.prototype.has = H0;
    fp.exports = Pn;
  });
  var vp = c((CW, pp) => {
    function X0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    pp.exports = X0;
  });
  var hp = c((NW, gp) => {
    function W0(e, t) {
      return e.has(t);
    }
    gp.exports = W0;
  });
  var Qo = c((LW, Ep) => {
    var B0 = dp(),
      j0 = vp(),
      z0 = hp(),
      K0 = 1,
      Y0 = 2;
    function $0(e, t, r, n, i, o) {
      var a = r & K0,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        g = o.get(t);
      if (f && g) return f == t && g == e;
      var p = -1,
        E = !0,
        y = r & Y0 ? new B0() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < s; ) {
        var _ = e[p],
          T = t[p];
        if (n) var P = a ? n(T, _, p, t, e, o) : n(_, T, p, e, t, o);
        if (P !== void 0) {
          if (P) continue;
          E = !1;
          break;
        }
        if (y) {
          if (
            !j0(t, function (w, N) {
              if (!z0(y, N) && (_ === w || i(_, w, r, n, o))) return y.push(N);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(_ === T || i(_, T, r, n, o))) {
          E = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), E;
    }
    Ep.exports = $0;
  });
  var mp = c((PW, yp) => {
    var Q0 = Ye(),
      Z0 = Q0.Uint8Array;
    yp.exports = Z0;
  });
  var bp = c((qW, _p) => {
    function J0(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    _p.exports = J0;
  });
  var Ip = c((MW, Tp) => {
    function eR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Tp.exports = eR;
  });
  var Sp = c((DW, xp) => {
    var Op = jt(),
      Ap = mp(),
      tR = Cn(),
      rR = Qo(),
      nR = bp(),
      iR = Ip(),
      oR = 1,
      aR = 2,
      sR = "[object Boolean]",
      uR = "[object Date]",
      cR = "[object Error]",
      lR = "[object Map]",
      fR = "[object Number]",
      dR = "[object RegExp]",
      pR = "[object Set]",
      vR = "[object String]",
      gR = "[object Symbol]",
      hR = "[object ArrayBuffer]",
      ER = "[object DataView]",
      wp = Op ? Op.prototype : void 0,
      Zo = wp ? wp.valueOf : void 0;
    function yR(e, t, r, n, i, o, a) {
      switch (r) {
        case ER:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case hR:
          return !(e.byteLength != t.byteLength || !o(new Ap(e), new Ap(t)));
        case sR:
        case uR:
        case fR:
          return tR(+e, +t);
        case cR:
          return e.name == t.name && e.message == t.message;
        case dR:
        case vR:
          return e == t + "";
        case lR:
          var s = nR;
        case pR:
          var u = n & oR;
          if ((s || (s = iR), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= aR), a.set(e, t);
          var g = rR(s(e), s(t), n, i, o, a);
          return a.delete(e), g;
        case gR:
          if (Zo) return Zo.call(e) == Zo.call(t);
      }
      return !1;
    }
    xp.exports = yR;
  });
  var qn = c((FW, Rp) => {
    function mR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Rp.exports = mR;
  });
  var Ae = c((GW, Cp) => {
    var _R = Array.isArray;
    Cp.exports = _R;
  });
  var Jo = c((UW, Np) => {
    var bR = qn(),
      TR = Ae();
    function IR(e, t, r) {
      var n = t(e);
      return TR(e) ? n : bR(n, r(e));
    }
    Np.exports = IR;
  });
  var Pp = c((VW, Lp) => {
    function OR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Lp.exports = OR;
  });
  var ea = c((kW, qp) => {
    function AR() {
      return [];
    }
    qp.exports = AR;
  });
  var ta = c((HW, Dp) => {
    var wR = Pp(),
      xR = ea(),
      SR = Object.prototype,
      RR = SR.propertyIsEnumerable,
      Mp = Object.getOwnPropertySymbols,
      CR = Mp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                wR(Mp(e), function (t) {
                  return RR.call(e, t);
                }));
          }
        : xR;
    Dp.exports = CR;
  });
  var Gp = c((XW, Fp) => {
    function NR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Fp.exports = NR;
  });
  var Vp = c((WW, Up) => {
    var LR = bt(),
      PR = dt(),
      qR = "[object Arguments]";
    function MR(e) {
      return PR(e) && LR(e) == qR;
    }
    Up.exports = MR;
  });
  var Dr = c((BW, Xp) => {
    var kp = Vp(),
      DR = dt(),
      Hp = Object.prototype,
      FR = Hp.hasOwnProperty,
      GR = Hp.propertyIsEnumerable,
      UR = kp(
        (function () {
          return arguments;
        })()
      )
        ? kp
        : function (e) {
            return DR(e) && FR.call(e, "callee") && !GR.call(e, "callee");
          };
    Xp.exports = UR;
  });
  var Bp = c((jW, Wp) => {
    function VR() {
      return !1;
    }
    Wp.exports = VR;
  });
  var Mn = c((Fr, er) => {
    var kR = Ye(),
      HR = Bp(),
      Kp = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
      jp = Kp && typeof er == "object" && er && !er.nodeType && er,
      XR = jp && jp.exports === Kp,
      zp = XR ? kR.Buffer : void 0,
      WR = zp ? zp.isBuffer : void 0,
      BR = WR || HR;
    er.exports = BR;
  });
  var Dn = c((zW, Yp) => {
    var jR = 9007199254740991,
      zR = /^(?:0|[1-9]\d*)$/;
    function KR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? jR),
        !!t &&
          (r == "number" || (r != "symbol" && zR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Yp.exports = KR;
  });
  var Fn = c((KW, $p) => {
    var YR = 9007199254740991;
    function $R(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= YR;
    }
    $p.exports = $R;
  });
  var Zp = c((YW, Qp) => {
    var QR = bt(),
      ZR = Fn(),
      JR = dt(),
      eC = "[object Arguments]",
      tC = "[object Array]",
      rC = "[object Boolean]",
      nC = "[object Date]",
      iC = "[object Error]",
      oC = "[object Function]",
      aC = "[object Map]",
      sC = "[object Number]",
      uC = "[object Object]",
      cC = "[object RegExp]",
      lC = "[object Set]",
      fC = "[object String]",
      dC = "[object WeakMap]",
      pC = "[object ArrayBuffer]",
      vC = "[object DataView]",
      gC = "[object Float32Array]",
      hC = "[object Float64Array]",
      EC = "[object Int8Array]",
      yC = "[object Int16Array]",
      mC = "[object Int32Array]",
      _C = "[object Uint8Array]",
      bC = "[object Uint8ClampedArray]",
      TC = "[object Uint16Array]",
      IC = "[object Uint32Array]",
      ge = {};
    ge[gC] =
      ge[hC] =
      ge[EC] =
      ge[yC] =
      ge[mC] =
      ge[_C] =
      ge[bC] =
      ge[TC] =
      ge[IC] =
        !0;
    ge[eC] =
      ge[tC] =
      ge[pC] =
      ge[rC] =
      ge[vC] =
      ge[nC] =
      ge[iC] =
      ge[oC] =
      ge[aC] =
      ge[sC] =
      ge[uC] =
      ge[cC] =
      ge[lC] =
      ge[fC] =
      ge[dC] =
        !1;
    function OC(e) {
      return JR(e) && ZR(e.length) && !!ge[QR(e)];
    }
    Qp.exports = OC;
  });
  var ev = c(($W, Jp) => {
    function AC(e) {
      return function (t) {
        return e(t);
      };
    }
    Jp.exports = AC;
  });
  var rv = c((Gr, tr) => {
    var wC = wo(),
      tv = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
      Ur = tv && typeof tr == "object" && tr && !tr.nodeType && tr,
      xC = Ur && Ur.exports === tv,
      ra = xC && wC.process,
      SC = (function () {
        try {
          var e = Ur && Ur.require && Ur.require("util").types;
          return e || (ra && ra.binding && ra.binding("util"));
        } catch {}
      })();
    tr.exports = SC;
  });
  var Gn = c((QW, ov) => {
    var RC = Zp(),
      CC = ev(),
      nv = rv(),
      iv = nv && nv.isTypedArray,
      NC = iv ? CC(iv) : RC;
    ov.exports = NC;
  });
  var na = c((ZW, av) => {
    var LC = Gp(),
      PC = Dr(),
      qC = Ae(),
      MC = Mn(),
      DC = Dn(),
      FC = Gn(),
      GC = Object.prototype,
      UC = GC.hasOwnProperty;
    function VC(e, t) {
      var r = qC(e),
        n = !r && PC(e),
        i = !r && !n && MC(e),
        o = !r && !n && !i && FC(e),
        a = r || n || i || o,
        s = a ? LC(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || UC.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              DC(f, u))
          ) &&
          s.push(f);
      return s;
    }
    av.exports = VC;
  });
  var Un = c((JW, sv) => {
    var kC = Object.prototype;
    function HC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || kC;
      return e === r;
    }
    sv.exports = HC;
  });
  var cv = c((e5, uv) => {
    var XC = xo(),
      WC = XC(Object.keys, Object);
    uv.exports = WC;
  });
  var Vn = c((t5, lv) => {
    var BC = Un(),
      jC = cv(),
      zC = Object.prototype,
      KC = zC.hasOwnProperty;
    function YC(e) {
      if (!BC(e)) return jC(e);
      var t = [];
      for (var r in Object(e)) KC.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    lv.exports = YC;
  });
  var Pt = c((r5, fv) => {
    var $C = zo(),
      QC = Fn();
    function ZC(e) {
      return e != null && QC(e.length) && !$C(e);
    }
    fv.exports = ZC;
  });
  var Vr = c((n5, dv) => {
    var JC = na(),
      eN = Vn(),
      tN = Pt();
    function rN(e) {
      return tN(e) ? JC(e) : eN(e);
    }
    dv.exports = rN;
  });
  var vv = c((i5, pv) => {
    var nN = Jo(),
      iN = ta(),
      oN = Vr();
    function aN(e) {
      return nN(e, oN, iN);
    }
    pv.exports = aN;
  });
  var Ev = c((o5, hv) => {
    var gv = vv(),
      sN = 1,
      uN = Object.prototype,
      cN = uN.hasOwnProperty;
    function lN(e, t, r, n, i, o) {
      var a = r & sN,
        s = gv(e),
        u = s.length,
        f = gv(t),
        g = f.length;
      if (u != g && !a) return !1;
      for (var p = u; p--; ) {
        var E = s[p];
        if (!(a ? E in t : cN.call(t, E))) return !1;
      }
      var y = o.get(e),
        _ = o.get(t);
      if (y && _) return y == t && _ == e;
      var T = !0;
      o.set(e, t), o.set(t, e);
      for (var P = a; ++p < u; ) {
        E = s[p];
        var w = e[E],
          N = t[E];
        if (n) var x = a ? n(N, w, E, t, e, o) : n(w, N, E, e, t, o);
        if (!(x === void 0 ? w === N || i(w, N, r, n, o) : x)) {
          T = !1;
          break;
        }
        P || (P = E == "constructor");
      }
      if (T && !P) {
        var M = e.constructor,
          F = t.constructor;
        M != F &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof M == "function" &&
            M instanceof M &&
            typeof F == "function" &&
            F instanceof F
          ) &&
          (T = !1);
      }
      return o.delete(e), o.delete(t), T;
    }
    hv.exports = lN;
  });
  var mv = c((a5, yv) => {
    var fN = Tt(),
      dN = Ye(),
      pN = fN(dN, "DataView");
    yv.exports = pN;
  });
  var bv = c((s5, _v) => {
    var vN = Tt(),
      gN = Ye(),
      hN = vN(gN, "Promise");
    _v.exports = hN;
  });
  var Iv = c((u5, Tv) => {
    var EN = Tt(),
      yN = Ye(),
      mN = EN(yN, "Set");
    Tv.exports = mN;
  });
  var ia = c((c5, Ov) => {
    var _N = Tt(),
      bN = Ye(),
      TN = _N(bN, "WeakMap");
    Ov.exports = TN;
  });
  var kn = c((l5, Nv) => {
    var oa = mv(),
      aa = Nn(),
      sa = bv(),
      ua = Iv(),
      ca = ia(),
      Cv = bt(),
      rr = Yo(),
      Av = "[object Map]",
      IN = "[object Object]",
      wv = "[object Promise]",
      xv = "[object Set]",
      Sv = "[object WeakMap]",
      Rv = "[object DataView]",
      ON = rr(oa),
      AN = rr(aa),
      wN = rr(sa),
      xN = rr(ua),
      SN = rr(ca),
      qt = Cv;
    ((oa && qt(new oa(new ArrayBuffer(1))) != Rv) ||
      (aa && qt(new aa()) != Av) ||
      (sa && qt(sa.resolve()) != wv) ||
      (ua && qt(new ua()) != xv) ||
      (ca && qt(new ca()) != Sv)) &&
      (qt = function (e) {
        var t = Cv(e),
          r = t == IN ? e.constructor : void 0,
          n = r ? rr(r) : "";
        if (n)
          switch (n) {
            case ON:
              return Rv;
            case AN:
              return Av;
            case wN:
              return wv;
            case xN:
              return xv;
            case SN:
              return Sv;
          }
        return t;
      });
    Nv.exports = qt;
  });
  var Uv = c((f5, Gv) => {
    var la = $o(),
      RN = Qo(),
      CN = Sp(),
      NN = Ev(),
      Lv = kn(),
      Pv = Ae(),
      qv = Mn(),
      LN = Gn(),
      PN = 1,
      Mv = "[object Arguments]",
      Dv = "[object Array]",
      Hn = "[object Object]",
      qN = Object.prototype,
      Fv = qN.hasOwnProperty;
    function MN(e, t, r, n, i, o) {
      var a = Pv(e),
        s = Pv(t),
        u = a ? Dv : Lv(e),
        f = s ? Dv : Lv(t);
      (u = u == Mv ? Hn : u), (f = f == Mv ? Hn : f);
      var g = u == Hn,
        p = f == Hn,
        E = u == f;
      if (E && qv(e)) {
        if (!qv(t)) return !1;
        (a = !0), (g = !1);
      }
      if (E && !g)
        return (
          o || (o = new la()),
          a || LN(e) ? RN(e, t, r, n, i, o) : CN(e, t, u, r, n, i, o)
        );
      if (!(r & PN)) {
        var y = g && Fv.call(e, "__wrapped__"),
          _ = p && Fv.call(t, "__wrapped__");
        if (y || _) {
          var T = y ? e.value() : e,
            P = _ ? t.value() : t;
          return o || (o = new la()), i(T, P, r, n, o);
        }
      }
      return E ? (o || (o = new la()), NN(e, t, r, n, i, o)) : !1;
    }
    Gv.exports = MN;
  });
  var fa = c((d5, Hv) => {
    var DN = Uv(),
      Vv = dt();
    function kv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Vv(e) && !Vv(t))
        ? e !== e && t !== t
        : DN(e, t, r, n, kv, i);
    }
    Hv.exports = kv;
  });
  var Wv = c((p5, Xv) => {
    var FN = $o(),
      GN = fa(),
      UN = 1,
      VN = 2;
    function kN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          f = e[u],
          g = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var p = new FN();
          if (n) var E = n(f, g, u, e, t, p);
          if (!(E === void 0 ? GN(g, f, UN | VN, n, p) : E)) return !1;
        }
      }
      return !0;
    }
    Xv.exports = kN;
  });
  var da = c((v5, Bv) => {
    var HN = at();
    function XN(e) {
      return e === e && !HN(e);
    }
    Bv.exports = XN;
  });
  var zv = c((g5, jv) => {
    var WN = da(),
      BN = Vr();
    function jN(e) {
      for (var t = BN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, WN(i)];
      }
      return t;
    }
    jv.exports = jN;
  });
  var pa = c((h5, Kv) => {
    function zN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Kv.exports = zN;
  });
  var $v = c((E5, Yv) => {
    var KN = Wv(),
      YN = zv(),
      $N = pa();
    function QN(e) {
      var t = YN(e);
      return t.length == 1 && t[0][2]
        ? $N(t[0][0], t[0][1])
        : function (r) {
            return r === e || KN(r, e, t);
          };
    }
    Yv.exports = QN;
  });
  var kr = c((y5, Qv) => {
    var ZN = bt(),
      JN = dt(),
      eL = "[object Symbol]";
    function tL(e) {
      return typeof e == "symbol" || (JN(e) && ZN(e) == eL);
    }
    Qv.exports = tL;
  });
  var Xn = c((m5, Zv) => {
    var rL = Ae(),
      nL = kr(),
      iL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      oL = /^\w*$/;
    function aL(e, t) {
      if (rL(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        nL(e)
        ? !0
        : oL.test(e) || !iL.test(e) || (t != null && e in Object(t));
    }
    Zv.exports = aL;
  });
  var tg = c((_5, eg) => {
    var Jv = Ln(),
      sL = "Expected a function";
    function va(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(sL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (va.Cache || Jv)()), r;
    }
    va.Cache = Jv;
    eg.exports = va;
  });
  var ng = c((b5, rg) => {
    var uL = tg(),
      cL = 500;
    function lL(e) {
      var t = uL(e, function (n) {
          return r.size === cL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    rg.exports = lL;
  });
  var og = c((T5, ig) => {
    var fL = ng(),
      dL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      pL = /\\(\\)?/g,
      vL = fL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(dL, function (r, n, i, o) {
            t.push(i ? o.replace(pL, "$1") : n || r);
          }),
          t
        );
      });
    ig.exports = vL;
  });
  var ga = c((I5, ag) => {
    function gL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    ag.exports = gL;
  });
  var dg = c((O5, fg) => {
    var sg = jt(),
      hL = ga(),
      EL = Ae(),
      yL = kr(),
      mL = 1 / 0,
      ug = sg ? sg.prototype : void 0,
      cg = ug ? ug.toString : void 0;
    function lg(e) {
      if (typeof e == "string") return e;
      if (EL(e)) return hL(e, lg) + "";
      if (yL(e)) return cg ? cg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -mL ? "-0" : t;
    }
    fg.exports = lg;
  });
  var vg = c((A5, pg) => {
    var _L = dg();
    function bL(e) {
      return e == null ? "" : _L(e);
    }
    pg.exports = bL;
  });
  var Hr = c((w5, gg) => {
    var TL = Ae(),
      IL = Xn(),
      OL = og(),
      AL = vg();
    function wL(e, t) {
      return TL(e) ? e : IL(e, t) ? [e] : OL(AL(e));
    }
    gg.exports = wL;
  });
  var nr = c((x5, hg) => {
    var xL = kr(),
      SL = 1 / 0;
    function RL(e) {
      if (typeof e == "string" || xL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -SL ? "-0" : t;
    }
    hg.exports = RL;
  });
  var Wn = c((S5, Eg) => {
    var CL = Hr(),
      NL = nr();
    function LL(e, t) {
      t = CL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[NL(t[r++])];
      return r && r == n ? e : void 0;
    }
    Eg.exports = LL;
  });
  var Bn = c((R5, yg) => {
    var PL = Wn();
    function qL(e, t, r) {
      var n = e == null ? void 0 : PL(e, t);
      return n === void 0 ? r : n;
    }
    yg.exports = qL;
  });
  var _g = c((C5, mg) => {
    function ML(e, t) {
      return e != null && t in Object(e);
    }
    mg.exports = ML;
  });
  var Tg = c((N5, bg) => {
    var DL = Hr(),
      FL = Dr(),
      GL = Ae(),
      UL = Dn(),
      VL = Fn(),
      kL = nr();
    function HL(e, t, r) {
      t = DL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = kL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && VL(i) && UL(a, i) && (GL(e) || FL(e)));
    }
    bg.exports = HL;
  });
  var Og = c((L5, Ig) => {
    var XL = _g(),
      WL = Tg();
    function BL(e, t) {
      return e != null && WL(e, t, XL);
    }
    Ig.exports = BL;
  });
  var wg = c((P5, Ag) => {
    var jL = fa(),
      zL = Bn(),
      KL = Og(),
      YL = Xn(),
      $L = da(),
      QL = pa(),
      ZL = nr(),
      JL = 1,
      eP = 2;
    function tP(e, t) {
      return YL(e) && $L(t)
        ? QL(ZL(e), t)
        : function (r) {
            var n = zL(r, e);
            return n === void 0 && n === t ? KL(r, e) : jL(t, n, JL | eP);
          };
    }
    Ag.exports = tP;
  });
  var jn = c((q5, xg) => {
    function rP(e) {
      return e;
    }
    xg.exports = rP;
  });
  var ha = c((M5, Sg) => {
    function nP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Sg.exports = nP;
  });
  var Cg = c((D5, Rg) => {
    var iP = Wn();
    function oP(e) {
      return function (t) {
        return iP(t, e);
      };
    }
    Rg.exports = oP;
  });
  var Lg = c((F5, Ng) => {
    var aP = ha(),
      sP = Cg(),
      uP = Xn(),
      cP = nr();
    function lP(e) {
      return uP(e) ? aP(cP(e)) : sP(e);
    }
    Ng.exports = lP;
  });
  var It = c((G5, Pg) => {
    var fP = $v(),
      dP = wg(),
      pP = jn(),
      vP = Ae(),
      gP = Lg();
    function hP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? pP
        : typeof e == "object"
        ? vP(e)
          ? dP(e[0], e[1])
          : fP(e)
        : gP(e);
    }
    Pg.exports = hP;
  });
  var Ea = c((U5, qg) => {
    var EP = It(),
      yP = Pt(),
      mP = Vr();
    function _P(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!yP(t)) {
          var o = EP(r, 3);
          (t = mP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    qg.exports = _P;
  });
  var ya = c((V5, Mg) => {
    function bP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Mg.exports = bP;
  });
  var Fg = c((k5, Dg) => {
    var TP = /\s/;
    function IP(e) {
      for (var t = e.length; t-- && TP.test(e.charAt(t)); );
      return t;
    }
    Dg.exports = IP;
  });
  var Ug = c((H5, Gg) => {
    var OP = Fg(),
      AP = /^\s+/;
    function wP(e) {
      return e && e.slice(0, OP(e) + 1).replace(AP, "");
    }
    Gg.exports = wP;
  });
  var zn = c((X5, Hg) => {
    var xP = Ug(),
      Vg = at(),
      SP = kr(),
      kg = 0 / 0,
      RP = /^[-+]0x[0-9a-f]+$/i,
      CP = /^0b[01]+$/i,
      NP = /^0o[0-7]+$/i,
      LP = parseInt;
    function PP(e) {
      if (typeof e == "number") return e;
      if (SP(e)) return kg;
      if (Vg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Vg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = xP(e);
      var r = CP.test(e);
      return r || NP.test(e) ? LP(e.slice(2), r ? 2 : 8) : RP.test(e) ? kg : +e;
    }
    Hg.exports = PP;
  });
  var Bg = c((W5, Wg) => {
    var qP = zn(),
      Xg = 1 / 0,
      MP = 17976931348623157e292;
    function DP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = qP(e)), e === Xg || e === -Xg)) {
        var t = e < 0 ? -1 : 1;
        return t * MP;
      }
      return e === e ? e : 0;
    }
    Wg.exports = DP;
  });
  var ma = c((B5, jg) => {
    var FP = Bg();
    function GP(e) {
      var t = FP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    jg.exports = GP;
  });
  var Kg = c((j5, zg) => {
    var UP = ya(),
      VP = It(),
      kP = ma(),
      HP = Math.max;
    function XP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : kP(r);
      return i < 0 && (i = HP(n + i, 0)), UP(e, VP(t, 3), i);
    }
    zg.exports = XP;
  });
  var _a = c((z5, Yg) => {
    var WP = Ea(),
      BP = Kg(),
      jP = WP(BP);
    Yg.exports = jP;
  });
  var Zg = {};
  De(Zg, {
    ELEMENT_MATCHES: () => zP,
    FLEX_PREFIXED: () => ba,
    IS_BROWSER_ENV: () => Qe,
    TRANSFORM_PREFIXED: () => Ot,
    TRANSFORM_STYLE_PREFIXED: () => Yn,
    withBrowser: () => Kn,
  });
  var Qg,
    Qe,
    Kn,
    zP,
    ba,
    Ot,
    $g,
    Yn,
    $n = he(() => {
      "use strict";
      (Qg = le(_a())),
        (Qe = typeof window < "u"),
        (Kn = (e, t) => (Qe ? e() : t)),
        (zP = Kn(() =>
          (0, Qg.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (ba = Kn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (Ot = Kn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        ($g = Ot.split("transform")[0]),
        (Yn = $g ? $g + "TransformStyle" : "transformStyle");
    });
  var Ta = c((K5, nh) => {
    var KP = 4,
      YP = 0.001,
      $P = 1e-7,
      QP = 10,
      Xr = 11,
      Qn = 1 / (Xr - 1),
      ZP = typeof Float32Array == "function";
    function Jg(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function eh(e, t) {
      return 3 * t - 6 * e;
    }
    function th(e) {
      return 3 * e;
    }
    function Zn(e, t, r) {
      return ((Jg(t, r) * e + eh(t, r)) * e + th(t)) * e;
    }
    function rh(e, t, r) {
      return 3 * Jg(t, r) * e * e + 2 * eh(t, r) * e + th(t);
    }
    function JP(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = Zn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > $P && ++s < QP);
      return a;
    }
    function eq(e, t, r, n) {
      for (var i = 0; i < KP; ++i) {
        var o = rh(t, r, n);
        if (o === 0) return t;
        var a = Zn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    nh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = ZP ? new Float32Array(Xr) : new Array(Xr);
      if (t !== r || n !== i)
        for (var a = 0; a < Xr; ++a) o[a] = Zn(a * Qn, t, n);
      function s(u) {
        for (var f = 0, g = 1, p = Xr - 1; g !== p && o[g] <= u; ++g) f += Qn;
        --g;
        var E = (u - o[g]) / (o[g + 1] - o[g]),
          y = f + E * Qn,
          _ = rh(y, t, n);
        return _ >= YP ? eq(u, y, t, n) : _ === 0 ? y : JP(u, f, f + Qn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : Zn(s(f), r, i);
      };
    };
  });
  var Br = {};
  De(Br, {
    bounce: () => Dq,
    bouncePast: () => Fq,
    ease: () => tq,
    easeIn: () => rq,
    easeInOut: () => iq,
    easeOut: () => nq,
    inBack: () => xq,
    inCirc: () => Iq,
    inCubic: () => uq,
    inElastic: () => Cq,
    inExpo: () => _q,
    inOutBack: () => Rq,
    inOutCirc: () => Aq,
    inOutCubic: () => lq,
    inOutElastic: () => Lq,
    inOutExpo: () => Tq,
    inOutQuad: () => sq,
    inOutQuart: () => pq,
    inOutQuint: () => hq,
    inOutSine: () => mq,
    inQuad: () => oq,
    inQuart: () => fq,
    inQuint: () => vq,
    inSine: () => Eq,
    outBack: () => Sq,
    outBounce: () => wq,
    outCirc: () => Oq,
    outCubic: () => cq,
    outElastic: () => Nq,
    outExpo: () => bq,
    outQuad: () => aq,
    outQuart: () => dq,
    outQuint: () => gq,
    outSine: () => yq,
    swingFrom: () => qq,
    swingFromTo: () => Pq,
    swingTo: () => Mq,
  });
  function oq(e) {
    return Math.pow(e, 2);
  }
  function aq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function sq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function uq(e) {
    return Math.pow(e, 3);
  }
  function cq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function lq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function fq(e) {
    return Math.pow(e, 4);
  }
  function dq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function pq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function vq(e) {
    return Math.pow(e, 5);
  }
  function gq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function hq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Eq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function yq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function mq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function _q(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function bq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Tq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Iq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Oq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Aq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function wq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function xq(e) {
    let t = pt;
    return e * e * ((t + 1) * e - t);
  }
  function Sq(e) {
    let t = pt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Rq(e) {
    let t = pt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Cq(e) {
    let t = pt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Nq(e) {
    let t = pt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Lq(e) {
    let t = pt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Pq(e) {
    let t = pt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function qq(e) {
    let t = pt;
    return e * e * ((t + 1) * e - t);
  }
  function Mq(e) {
    let t = pt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Dq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Fq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Wr,
    pt,
    tq,
    rq,
    nq,
    iq,
    Ia = he(() => {
      "use strict";
      (Wr = le(Ta())),
        (pt = 1.70158),
        (tq = (0, Wr.default)(0.25, 0.1, 0.25, 1)),
        (rq = (0, Wr.default)(0.42, 0, 1, 1)),
        (nq = (0, Wr.default)(0, 0, 0.58, 1)),
        (iq = (0, Wr.default)(0.42, 0, 0.58, 1));
    });
  var oh = {};
  De(oh, {
    applyEasing: () => Uq,
    createBezierEasing: () => Gq,
    optimizeFloat: () => jr,
  });
  function jr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Gq(e) {
    return (0, ih.default)(...e);
  }
  function Uq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : jr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Br[e] ? Br[e](t) : t);
  }
  var ih,
    Oa = he(() => {
      "use strict";
      Ia();
      ih = le(Ta());
    });
  var uh = {};
  De(uh, {
    createElementState: () => sh,
    ixElements: () => Jq,
    mergeActionState: () => Aa,
  });
  function sh(e, t, r, n, i) {
    let o =
      r === Vq ? (0, ir.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, ir.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Aa(e, t, r, n, i) {
    let o = tM(i);
    return (0, ir.mergeIn)(e, [t, Zq, r], n, o);
  }
  function tM(e) {
    let { config: t } = e;
    return eM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var ir,
    $5,
    Vq,
    Q5,
    kq,
    Hq,
    Xq,
    Wq,
    Bq,
    jq,
    zq,
    Kq,
    Yq,
    $q,
    Qq,
    ah,
    Zq,
    Jq,
    eM,
    ch = he(() => {
      "use strict";
      ir = le(Yt());
      Fe();
      ({
        HTML_ELEMENT: $5,
        PLAIN_OBJECT: Vq,
        ABSTRACT_NODE: Q5,
        CONFIG_X_VALUE: kq,
        CONFIG_Y_VALUE: Hq,
        CONFIG_Z_VALUE: Xq,
        CONFIG_VALUE: Wq,
        CONFIG_X_UNIT: Bq,
        CONFIG_Y_UNIT: jq,
        CONFIG_Z_UNIT: zq,
        CONFIG_UNIT: Kq,
      } = Re),
        ({
          IX2_SESSION_STOPPED: Yq,
          IX2_INSTANCE_ADDED: $q,
          IX2_ELEMENT_STATE_CHANGED: Qq,
        } = Ie),
        (ah = {}),
        (Zq = "refState"),
        (Jq = (e = ah, t = {}) => {
          switch (t.type) {
            case Yq:
              return ah;
            case $q: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, ir.getIn)(u, [r, n]) !== n && (u = sh(u, n, a, r, o)),
                Aa(u, r, s, i, o)
              );
            }
            case Qq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Aa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      eM = [
        [kq, Bq],
        [Hq, jq],
        [Xq, zq],
        [Wq, Kq],
      ];
    });
  var lh = c((we) => {
    "use strict";
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.renderPlugin =
      we.getPluginOrigin =
      we.getPluginDuration =
      we.getPluginDestination =
      we.getPluginConfig =
      we.createPluginInstance =
      we.clearPlugin =
        void 0;
    var rM = (e) => e.value;
    we.getPluginConfig = rM;
    var nM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    we.getPluginDuration = nM;
    var iM = (e) => e || { value: 0 };
    we.getPluginOrigin = iM;
    var oM = (e) => ({ value: e.value });
    we.getPluginDestination = oM;
    var aM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    we.createPluginInstance = aM;
    var sM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    we.renderPlugin = sM;
    var uM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    we.clearPlugin = uM;
  });
  var dh = c((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
        void 0;
    var cM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      lM = () => window.Webflow.require("spline"),
      fM = (e, t) => e.filter((r) => !t.includes(r)),
      dM = (e, t) => e.value[t];
    xe.getPluginConfig = dM;
    var pM = () => null;
    xe.getPluginDuration = pM;
    var fh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      vM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = fM(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = fh[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = fh[a]), o), {});
      };
    xe.getPluginOrigin = vM;
    var gM = (e) => e.value;
    xe.getPluginDestination = gM;
    var hM = (e, t) => {
      var r, n;
      let i =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return i ? cM(i) : null;
    };
    xe.createPluginInstance = hM;
    var EM = (e, t, r) => {
      let n = lM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    xe.renderPlugin = EM;
    var yM = () => null;
    xe.clearPlugin = yM;
  });
  var vh = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    Oe.normalizeColor = ph;
    Oe.renderPlugin = void 0;
    function ph(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let g = (1 - Math.abs(2 * f - 1)) * u,
          p = g * (1 - Math.abs(((s / 60) % 2) - 1)),
          E = f - g / 2,
          y,
          _,
          T;
        s >= 0 && s < 60
          ? ((y = g), (_ = p), (T = 0))
          : s >= 60 && s < 120
          ? ((y = p), (_ = g), (T = 0))
          : s >= 120 && s < 180
          ? ((y = 0), (_ = g), (T = p))
          : s >= 180 && s < 240
          ? ((y = 0), (_ = p), (T = g))
          : s >= 240 && s < 300
          ? ((y = p), (_ = 0), (T = g))
          : ((y = g), (_ = 0), (T = p)),
          (t = Math.round((y + E) * 255)),
          (r = Math.round((_ + E) * 255)),
          (n = Math.round((T + E) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * f - 1)) * u,
          p = g * (1 - Math.abs(((s / 60) % 2) - 1)),
          E = f - g / 2,
          y,
          _,
          T;
        s >= 0 && s < 60
          ? ((y = g), (_ = p), (T = 0))
          : s >= 60 && s < 120
          ? ((y = p), (_ = g), (T = 0))
          : s >= 120 && s < 180
          ? ((y = 0), (_ = g), (T = p))
          : s >= 180 && s < 240
          ? ((y = 0), (_ = p), (T = g))
          : s >= 240 && s < 300
          ? ((y = p), (_ = 0), (T = g))
          : ((y = g), (_ = 0), (T = p)),
          (t = Math.round((y + E) * 255)),
          (r = Math.round((_ + E) * 255)),
          (n = Math.round((T + E) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var mM = (e, t) => e.value[t];
    Oe.getPluginConfig = mM;
    var _M = () => null;
    Oe.getPluginDuration = _M;
    var bM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return ph(i);
    };
    Oe.getPluginOrigin = bM;
    var TM = (e) => e.value;
    Oe.getPluginDestination = TM;
    var IM = () => null;
    Oe.createPluginInstance = IM;
    var OM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: g } = o,
        p;
      a != null && (p = a + i),
        s != null &&
          f != null &&
          u != null &&
          g != null &&
          (p = `rgba(${s}, ${u}, ${f}, ${g})`),
        p != null && document.documentElement.style.setProperty(n, p);
    };
    Oe.renderPlugin = OM;
    var AM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Oe.clearPlugin = AM;
  });
  var gh = c((Jn) => {
    "use strict";
    var xa = dn().default;
    Object.defineProperty(Jn, "__esModule", { value: !0 });
    Jn.pluginMethodMap = void 0;
    var wa = (Fe(), tt(bf)),
      wM = xa(lh()),
      xM = xa(dh()),
      SM = xa(vh()),
      RM = new Map([
        [wa.ActionTypeConsts.PLUGIN_LOTTIE, { ...wM }],
        [wa.ActionTypeConsts.PLUGIN_SPLINE, { ...xM }],
        [wa.ActionTypeConsts.PLUGIN_VARIABLE, { ...SM }],
      ]);
    Jn.pluginMethodMap = RM;
  });
  var hh = {};
  De(hh, {
    clearPlugin: () => Pa,
    createPluginInstance: () => NM,
    getPluginConfig: () => Ra,
    getPluginDestination: () => Na,
    getPluginDuration: () => CM,
    getPluginOrigin: () => Ca,
    isPluginType: () => Mt,
    renderPlugin: () => La,
  });
  function Mt(e) {
    return Sa.pluginMethodMap.has(e);
  }
  var Sa,
    Dt,
    Ra,
    Ca,
    CM,
    Na,
    NM,
    La,
    Pa,
    qa = he(() => {
      "use strict";
      $n();
      Sa = le(gh());
      (Dt = (e) => (t) => {
        if (!Qe) return () => null;
        let r = Sa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ra = Dt("getPluginConfig")),
        (Ca = Dt("getPluginOrigin")),
        (CM = Dt("getPluginDuration")),
        (Na = Dt("getPluginDestination")),
        (NM = Dt("createPluginInstance")),
        (La = Dt("renderPlugin")),
        (Pa = Dt("clearPlugin"));
    });
  var yh = c((nB, Eh) => {
    function LM(e, t) {
      return e == null || e !== e ? t : e;
    }
    Eh.exports = LM;
  });
  var _h = c((iB, mh) => {
    function PM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    mh.exports = PM;
  });
  var Th = c((oB, bh) => {
    function qM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    bh.exports = qM;
  });
  var Oh = c((aB, Ih) => {
    var MM = Th(),
      DM = MM();
    Ih.exports = DM;
  });
  var Ma = c((sB, Ah) => {
    var FM = Oh(),
      GM = Vr();
    function UM(e, t) {
      return e && FM(e, t, GM);
    }
    Ah.exports = UM;
  });
  var xh = c((uB, wh) => {
    var VM = Pt();
    function kM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!VM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    wh.exports = kM;
  });
  var Da = c((cB, Sh) => {
    var HM = Ma(),
      XM = xh(),
      WM = XM(HM);
    Sh.exports = WM;
  });
  var Ch = c((lB, Rh) => {
    function BM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Rh.exports = BM;
  });
  var Lh = c((fB, Nh) => {
    var jM = _h(),
      zM = Da(),
      KM = It(),
      YM = Ch(),
      $M = Ae();
    function QM(e, t, r) {
      var n = $M(e) ? jM : YM,
        i = arguments.length < 3;
      return n(e, KM(t, 4), r, i, zM);
    }
    Nh.exports = QM;
  });
  var qh = c((dB, Ph) => {
    var ZM = ya(),
      JM = It(),
      e1 = ma(),
      t1 = Math.max,
      r1 = Math.min;
    function n1(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = e1(r)), (i = r < 0 ? t1(n + i, 0) : r1(i, n - 1))),
        ZM(e, JM(t, 3), i, !0)
      );
    }
    Ph.exports = n1;
  });
  var Dh = c((pB, Mh) => {
    var i1 = Ea(),
      o1 = qh(),
      a1 = i1(o1);
    Mh.exports = a1;
  });
  function Fh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function u1(e, t) {
    if (Fh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!s1.call(t, r[i]) || !Fh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var s1,
    Fa,
    Gh = he(() => {
      "use strict";
      s1 = Object.prototype.hasOwnProperty;
      Fa = u1;
    });
  var tE = {};
  De(tE, {
    cleanupHTMLElement: () => oD,
    clearAllStyles: () => iD,
    clearObjectCache: () => A1,
    getActionListProgress: () => sD,
    getAffectedElements: () => Ha,
    getComputedStyle: () => P1,
    getDestinationValues: () => V1,
    getElementId: () => R1,
    getInstanceId: () => x1,
    getInstanceOrigin: () => D1,
    getItemConfigByKey: () => U1,
    getMaxDurationItemIndex: () => eE,
    getNamespacedParameterId: () => lD,
    getRenderType: () => Qh,
    getStyleProp: () => k1,
    mediaQueriesEqual: () => dD,
    observeStore: () => L1,
    reduceListToGroup: () => uD,
    reifyState: () => C1,
    renderHTMLElement: () => H1,
    shallowEqual: () => Fa,
    shouldAllowMediaQuery: () => fD,
    shouldNamespaceEventParameter: () => cD,
    stringifyTarget: () => pD,
  });
  function A1() {
    ei.clear();
  }
  function x1() {
    return "i" + w1++;
  }
  function R1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + S1++;
  }
  function C1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ii.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function L1({ store: e, select: t, onChange: r, comparator: n = N1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function kh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ha({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (O, v) =>
          O.concat(
            Ha({
              config: { target: v },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: g,
        matchSelector: p,
        elementContains: E,
        isSiblingNode: y,
      } = i,
      { target: _ } = e;
    if (!_) return [];
    let {
      id: T,
      objectId: P,
      selector: w,
      selectorGuids: N,
      appliesTo: x,
      useEventTarget: M,
    } = kh(_);
    if (P) return [ei.has(P) ? ei.get(P) : ei.set(P, {}).get(P)];
    if (x === Ho.PAGE) {
      let O = a(T);
      return O ? [O] : [];
    }
    let L = (t?.action?.config?.affectedElements ?? {})[T || w] || {},
      z = !!(L.id || L.selector),
      K,
      $,
      ee,
      U = t && s(kh(t.target));
    if (
      (z
        ? ((K = L.limitAffectedElements), ($ = U), (ee = s(L)))
        : ($ = ee = s({ id: T, selector: w, selectorGuids: N })),
      t && M)
    ) {
      let O = r && (ee || M === !0) ? [r] : u(U);
      if (ee) {
        if (M === T1) return u(ee).filter((v) => O.some((R) => E(v, R)));
        if (M === Uh) return u(ee).filter((v) => O.some((R) => E(R, v)));
        if (M === Vh) return u(ee).filter((v) => O.some((R) => y(R, v)));
      }
      return O;
    }
    return $ == null || ee == null
      ? []
      : Qe && n
      ? u(ee).filter((O) => n.contains(O))
      : K === Uh
      ? u($, ee)
      : K === b1
      ? f(u($)).filter(p(ee))
      : K === Vh
      ? g(u($)).filter(p(ee))
      : u(ee);
  }
  function P1({ element: e, actionItem: t }) {
    if (!Qe) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case cr:
      case lr:
      case fr:
      case dr:
      case ai:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function D1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Mt(a)) return Ca(a)(t[a], n);
    switch (n.actionTypeId) {
      case ar:
      case sr:
      case ur:
      case $r:
        return t[n.actionTypeId] || Xa[n.actionTypeId];
      case Qr:
        return q1(t[n.actionTypeId], n.config.filters);
      case Zr:
        return M1(t[n.actionTypeId], n.config.fontVariations);
      case Kh:
        return { value: (0, vt.default)(parseFloat(o(e, ri)), 1) };
      case cr: {
        let s = o(e, st),
          u = o(e, ut),
          f,
          g;
        return (
          n.config.widthUnit === At
            ? (f = Hh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, vt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === At
            ? (g = Hh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (g = (0, vt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: g }
        );
      }
      case lr:
      case fr:
      case dr:
        return tD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ai:
        return { value: (0, vt.default)(o(e, ni), r.display) };
      case O1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function V1({ element: e, actionItem: t, elementApi: r }) {
    if (Mt(t.actionTypeId)) return Na(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case ar:
      case sr:
      case ur:
      case $r: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case cr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!Qe) return { widthValue: u, heightValue: f };
        if (a === At) {
          let g = n(e, st);
          i(e, st, ""), (u = o(e, "offsetWidth")), i(e, st, g);
        }
        if (s === At) {
          let g = n(e, ut);
          i(e, ut, ""), (f = o(e, "offsetHeight")), i(e, ut, g);
        }
        return { widthValue: u, heightValue: f };
      }
      case lr:
      case fr:
      case dr: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Qr:
        return t.config.filters.reduce(F1, {});
      case Zr:
        return t.config.fontVariations.reduce(G1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function Qh(e) {
    if (/^TRANSFORM_/.test(e)) return jh;
    if (/^STYLE_/.test(e)) return Va;
    if (/^GENERAL_/.test(e)) return Ua;
    if (/^PLUGIN_/.test(e)) return zh;
  }
  function k1(e, t) {
    return e === Va ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function H1(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case jh:
        return z1(e, t, r, i, a);
      case Va:
        return rD(e, t, r, i, o, a);
      case Ua:
        return nD(e, i, a);
      case zh: {
        let { actionTypeId: f } = i;
        if (Mt(f)) return La(f)(u, t, i);
      }
    }
  }
  function z1(e, t, r, n, i) {
    let o = j1
        .map((s) => {
          let u = Xa[s],
            {
              xValue: f = u.xValue,
              yValue: g = u.yValue,
              zValue: p = u.zValue,
              xUnit: E = "",
              yUnit: y = "",
              zUnit: _ = "",
            } = t[s] || {};
          switch (s) {
            case ar:
              return `${f1}(${f}${E}, ${g}${y}, ${p}${_})`;
            case sr:
              return `${d1}(${f}${E}, ${g}${y}, ${p}${_})`;
            case ur:
              return `${p1}(${f}${E}) ${v1}(${g}${y}) ${g1}(${p}${_})`;
            case $r:
              return `${h1}(${f}${E}, ${g}${y})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    Ft(e, Ot, i), a(e, Ot, o), $1(n, r) && a(e, Yn, E1);
  }
  function K1(e, t, r, n) {
    let i = (0, ii.default)(t, (a, s, u) => `${a} ${u}(${s}${B1(u, r)})`, ""),
      { setStyle: o } = n;
    Ft(e, zr, n), o(e, zr, i);
  }
  function Y1(e, t, r, n) {
    let i = (0, ii.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Ft(e, Kr, n), o(e, Kr, i);
  }
  function $1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === ar && n !== void 0) ||
      (e === sr && n !== void 0) ||
      (e === ur && (t !== void 0 || r !== void 0))
    );
  }
  function eD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function tD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = ka[t],
      o = n(e, i),
      a = Z1.test(o) ? o : r[i],
      s = eD(J1, a).split(Yr);
    return {
      rValue: (0, vt.default)(parseInt(s[0], 10), 255),
      gValue: (0, vt.default)(parseInt(s[1], 10), 255),
      bValue: (0, vt.default)(parseInt(s[2], 10), 255),
      aValue: (0, vt.default)(parseFloat(s[3]), 1),
    };
  }
  function rD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case cr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: g } = r;
        f !== void 0 && (s === At && (s = "px"), Ft(e, st, o), a(e, st, f + s)),
          g !== void 0 &&
            (u === At && (u = "px"), Ft(e, ut, o), a(e, ut, g + u));
        break;
      }
      case Qr: {
        K1(e, r, n.config, o);
        break;
      }
      case Zr: {
        Y1(e, r, n.config, o);
        break;
      }
      case lr:
      case fr:
      case dr: {
        let s = ka[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          g = Math.round(r.bValue),
          p = r.aValue;
        Ft(e, s, o),
          a(e, s, p >= 1 ? `rgb(${u},${f},${g})` : `rgba(${u},${f},${g},${p})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Ft(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function nD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ai: {
        let { value: i } = t.config;
        i === y1 && Qe ? n(e, ni, ba) : n(e, ni, i);
        return;
      }
    }
  }
  function Ft(e, t, r) {
    if (!Qe) return;
    let n = $h[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, or);
    if (!a) {
      o(e, or, n);
      return;
    }
    let s = a.split(Yr).map(Yh);
    s.indexOf(n) === -1 && o(e, or, s.concat(n).join(Yr));
  }
  function Zh(e, t, r) {
    if (!Qe) return;
    let n = $h[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, or);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        or,
        a
          .split(Yr)
          .map(Yh)
          .filter((s) => s !== n)
          .join(Yr)
      );
  }
  function iD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && Xh({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Xh({ actionList: i[o], elementApi: t });
      });
  }
  function Xh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Wh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Wh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Wh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Mt(o)
        ? (s = (u) => Pa(o)(u, i))
        : (s = Jh({ effect: aD, actionTypeId: o, elementApi: r })),
        Ha({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function oD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === cr) {
      let { config: a } = t;
      a.widthUnit === At && n(e, st, ""), a.heightUnit === At && n(e, ut, "");
    }
    i(e, or) && Jh({ effect: Zh, actionTypeId: o, elementApi: r })(e);
  }
  function aD(e, t, r) {
    let { setStyle: n } = r;
    Zh(e, t, r), n(e, t, ""), t === Ot && n(e, Yn, "");
  }
  function eE(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function sD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: g } = u,
          p = g[eE(g)],
          { config: E, actionTypeId: y } = p;
        i.id === p.id && (s = a + o);
        let _ = Qh(y) === Ua ? 0 : E.duration;
        a += E.delay + _;
      }),
      a > 0 ? jr(s / a) : 0
    );
  }
  function uD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, oi.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, oi.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function cD(e, { basedOn: t }) {
    return (
      (e === $e.SCROLLING_IN_VIEW && (t === ot.ELEMENT || t == null)) ||
      (e === $e.MOUSE_MOVE && t === ot.ELEMENT)
    );
  }
  function lD(e, t) {
    return e + I1 + t;
  }
  function fD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function dD(e, t) {
    return Fa(e && e.sort(), t && t.sort());
  }
  function pD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ga + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ga + r + Ga + n;
  }
  var vt,
    ii,
    ti,
    oi,
    c1,
    l1,
    f1,
    d1,
    p1,
    v1,
    g1,
    h1,
    E1,
    y1,
    ri,
    zr,
    Kr,
    st,
    ut,
    Bh,
    m1,
    _1,
    Uh,
    b1,
    Vh,
    T1,
    ni,
    or,
    At,
    Yr,
    I1,
    Ga,
    jh,
    Ua,
    Va,
    zh,
    ar,
    sr,
    ur,
    $r,
    Kh,
    Qr,
    Zr,
    cr,
    lr,
    fr,
    dr,
    ai,
    O1,
    Yh,
    ka,
    $h,
    ei,
    w1,
    S1,
    N1,
    Hh,
    q1,
    M1,
    F1,
    G1,
    U1,
    Xa,
    X1,
    W1,
    B1,
    j1,
    Q1,
    Z1,
    J1,
    Jh,
    rE = he(() => {
      "use strict";
      (vt = le(yh())), (ii = le(Lh())), (ti = le(Dh())), (oi = le(Yt()));
      Fe();
      Gh();
      Oa();
      qa();
      $n();
      ({
        BACKGROUND: c1,
        TRANSFORM: l1,
        TRANSLATE_3D: f1,
        SCALE_3D: d1,
        ROTATE_X: p1,
        ROTATE_Y: v1,
        ROTATE_Z: g1,
        SKEW: h1,
        PRESERVE_3D: E1,
        FLEX: y1,
        OPACITY: ri,
        FILTER: zr,
        FONT_VARIATION_SETTINGS: Kr,
        WIDTH: st,
        HEIGHT: ut,
        BACKGROUND_COLOR: Bh,
        BORDER_COLOR: m1,
        COLOR: _1,
        CHILDREN: Uh,
        IMMEDIATE_CHILDREN: b1,
        SIBLINGS: Vh,
        PARENT: T1,
        DISPLAY: ni,
        WILL_CHANGE: or,
        AUTO: At,
        COMMA_DELIMITER: Yr,
        COLON_DELIMITER: I1,
        BAR_DELIMITER: Ga,
        RENDER_TRANSFORM: jh,
        RENDER_GENERAL: Ua,
        RENDER_STYLE: Va,
        RENDER_PLUGIN: zh,
      } = Re),
        ({
          TRANSFORM_MOVE: ar,
          TRANSFORM_SCALE: sr,
          TRANSFORM_ROTATE: ur,
          TRANSFORM_SKEW: $r,
          STYLE_OPACITY: Kh,
          STYLE_FILTER: Qr,
          STYLE_FONT_VARIATION: Zr,
          STYLE_SIZE: cr,
          STYLE_BACKGROUND_COLOR: lr,
          STYLE_BORDER: fr,
          STYLE_TEXT_COLOR: dr,
          GENERAL_DISPLAY: ai,
          OBJECT_VALUE: O1,
        } = He),
        (Yh = (e) => e.trim()),
        (ka = Object.freeze({ [lr]: Bh, [fr]: m1, [dr]: _1 })),
        ($h = Object.freeze({
          [Ot]: l1,
          [Bh]: c1,
          [ri]: ri,
          [zr]: zr,
          [st]: st,
          [ut]: ut,
          [Kr]: Kr,
        })),
        (ei = new Map());
      w1 = 1;
      S1 = 1;
      N1 = (e, t) => e === t;
      (Hh = /px/),
        (q1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = X1[n.type]), r),
            e || {}
          )),
        (M1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = W1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (F1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (G1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (U1 = (e, t, r) => {
          if (Mt(e)) return Ra(e)(r, t);
          switch (e) {
            case Qr: {
              let n = (0, ti.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Zr: {
              let n = (0, ti.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Xa = {
        [ar]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [sr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [ur]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [$r]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (X1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (W1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (B1 = (e, t) => {
          let r = (0, ti.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (j1 = Object.keys(Xa));
      (Q1 = "\\(([^)]+)\\)"), (Z1 = /^rgb/), (J1 = RegExp(`rgba?${Q1}`));
      Jh =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case ar:
            case sr:
            case ur:
            case $r:
              e(n, Ot, r);
              break;
            case Qr:
              e(n, zr, r);
              break;
            case Zr:
              e(n, Kr, r);
              break;
            case Kh:
              e(n, ri, r);
              break;
            case cr:
              e(n, st, r), e(n, ut, r);
              break;
            case lr:
            case fr:
            case dr:
              e(n, ka[t], r);
              break;
            case ai:
              e(n, ni, r);
              break;
          }
        };
    });
  var Gt = c((Pe) => {
    "use strict";
    var pr = dn().default;
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.IX2VanillaUtils =
      Pe.IX2VanillaPlugins =
      Pe.IX2ElementsReducer =
      Pe.IX2Easings =
      Pe.IX2EasingUtils =
      Pe.IX2BrowserSupport =
        void 0;
    var vD = pr(($n(), tt(Zg)));
    Pe.IX2BrowserSupport = vD;
    var gD = pr((Ia(), tt(Br)));
    Pe.IX2Easings = gD;
    var hD = pr((Oa(), tt(oh)));
    Pe.IX2EasingUtils = hD;
    var ED = pr((ch(), tt(uh)));
    Pe.IX2ElementsReducer = ED;
    var yD = pr((qa(), tt(hh)));
    Pe.IX2VanillaPlugins = yD;
    var mD = pr((rE(), tt(tE)));
    Pe.IX2VanillaUtils = mD;
  });
  var ui,
    gt,
    _D,
    bD,
    TD,
    ID,
    OD,
    AD,
    si,
    nE,
    wD,
    xD,
    Wa,
    SD,
    RD,
    CD,
    ND,
    iE,
    oE = he(() => {
      "use strict";
      Fe();
      (ui = le(Gt())),
        (gt = le(Yt())),
        ({
          IX2_RAW_DATA_IMPORTED: _D,
          IX2_SESSION_STOPPED: bD,
          IX2_INSTANCE_ADDED: TD,
          IX2_INSTANCE_STARTED: ID,
          IX2_INSTANCE_REMOVED: OD,
          IX2_ANIMATION_FRAME_CHANGED: AD,
        } = Ie),
        ({
          optimizeFloat: si,
          applyEasing: nE,
          createBezierEasing: wD,
        } = ui.IX2EasingUtils),
        ({ RENDER_GENERAL: xD } = Re),
        ({
          getItemConfigByKey: Wa,
          getRenderType: SD,
          getStyleProp: RD,
        } = ui.IX2VanillaUtils),
        (CD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: g,
              skipToValue: p,
            } = e,
            { parameters: E } = t.payload,
            y = Math.max(1 - a, 0.01),
            _ = E[n];
          _ == null && ((y = 1), (_ = s));
          let T = Math.max(_, 0) || 0,
            P = si(T - r),
            w = g ? p : si(r + P * y),
            N = w * 100;
          if (w === r && e.current) return e;
          let x, M, F, L;
          for (let K = 0, { length: $ } = i; K < $; K++) {
            let { keyframe: ee, actionItems: U } = i[K];
            if ((K === 0 && (x = U[0]), N >= ee)) {
              x = U[0];
              let O = i[K + 1],
                v = O && N !== ee;
              (M = v ? O.actionItems[0] : null),
                v && ((F = ee / 100), (L = (O.keyframe - ee) / 100));
            }
          }
          let z = {};
          if (x && !M)
            for (let K = 0, { length: $ } = o; K < $; K++) {
              let ee = o[K];
              z[ee] = Wa(u, ee, x.config);
            }
          else if (x && M && F !== void 0 && L !== void 0) {
            let K = (w - F) / L,
              $ = x.config.easing,
              ee = nE($, K, f);
            for (let U = 0, { length: O } = o; U < O; U++) {
              let v = o[U],
                R = Wa(u, v, x.config),
                te = (Wa(u, v, M.config) - R) * ee + R;
              z[v] = te;
            }
          }
          return (0, gt.merge)(e, { position: w, current: z });
        }),
        (ND = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: g,
              pluginDuration: p,
              instanceDelay: E,
              customEasingFn: y,
              skipMotion: _,
            } = e,
            T = u.config.easing,
            { duration: P, delay: w } = u.config;
          p != null && (P = p),
            (w = E ?? w),
            a === xD ? (P = 0) : (o || _) && (P = w = 0);
          let { now: N } = t.payload;
          if (r && n) {
            let x = N - (i + w);
            if (s) {
              let K = N - i,
                $ = P + w,
                ee = si(Math.min(Math.max(0, K / $), 1));
              e = (0, gt.set)(e, "verboseTimeElapsed", $ * ee);
            }
            if (x < 0) return e;
            let M = si(Math.min(Math.max(0, x / P), 1)),
              F = nE(T, M, y),
              L = {},
              z = null;
            return (
              g.length &&
                (z = g.reduce((K, $) => {
                  let ee = f[$],
                    U = parseFloat(n[$]) || 0,
                    v = (parseFloat(ee) - U) * F + U;
                  return (K[$] = v), K;
                }, {})),
              (L.current = z),
              (L.position = M),
              M === 1 && ((L.active = !1), (L.complete = !0)),
              (0, gt.merge)(e, L)
            );
          }
          return e;
        }),
        (iE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case _D:
              return t.payload.ixInstances || Object.freeze({});
            case bD:
              return Object.freeze({});
            case TD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: g,
                  origin: p,
                  destination: E,
                  immediate: y,
                  verbose: _,
                  continuous: T,
                  parameterId: P,
                  actionGroups: w,
                  smoothing: N,
                  restingValue: x,
                  pluginInstance: M,
                  pluginDuration: F,
                  instanceDelay: L,
                  skipMotion: z,
                  skipToValue: K,
                } = t.payload,
                { actionTypeId: $ } = i,
                ee = SD($),
                U = RD(ee, $),
                O = Object.keys(E).filter(
                  (R) => E[R] != null && typeof E[R] != "string"
                ),
                { easing: v } = i.config;
              return (0, gt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: E,
                destinationKeys: O,
                immediate: y,
                verbose: _,
                current: null,
                actionItem: i,
                actionTypeId: $,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: ee,
                isCarrier: g,
                styleProp: U,
                continuous: T,
                parameterId: P,
                actionGroups: w,
                smoothing: N,
                restingValue: x,
                pluginInstance: M,
                pluginDuration: F,
                instanceDelay: L,
                skipMotion: z,
                skipToValue: K,
                customEasingFn:
                  Array.isArray(v) && v.length === 4 ? wD(v) : void 0,
              });
            }
            case ID: {
              let { instanceId: r, time: n } = t.payload;
              return (0, gt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case OD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case AD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? CD : ND;
                r = (0, gt.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var LD,
    PD,
    qD,
    aE,
    sE = he(() => {
      "use strict";
      Fe();
      ({
        IX2_RAW_DATA_IMPORTED: LD,
        IX2_SESSION_STOPPED: PD,
        IX2_PARAMETER_CHANGED: qD,
      } = Ie),
        (aE = (e = {}, t) => {
          switch (t.type) {
            case LD:
              return t.payload.ixParameters || {};
            case PD:
              return {};
            case qD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var lE = {};
  De(lE, { default: () => DD });
  var uE,
    cE,
    MD,
    DD,
    fE = he(() => {
      "use strict";
      uE = le(ko());
      If();
      Wf();
      zf();
      cE = le(Gt());
      oE();
      sE();
      ({ ixElements: MD } = cE.IX2ElementsReducer),
        (DD = (0, uE.combineReducers)({
          ixData: Tf,
          ixRequest: Xf,
          ixSession: jf,
          ixElements: MD,
          ixInstances: iE,
          ixParameters: aE,
        }));
    });
  var pE = c((CB, dE) => {
    var FD = bt(),
      GD = Ae(),
      UD = dt(),
      VD = "[object String]";
    function kD(e) {
      return typeof e == "string" || (!GD(e) && UD(e) && FD(e) == VD);
    }
    dE.exports = kD;
  });
  var gE = c((NB, vE) => {
    var HD = ha(),
      XD = HD("length");
    vE.exports = XD;
  });
  var EE = c((LB, hE) => {
    var WD = "\\ud800-\\udfff",
      BD = "\\u0300-\\u036f",
      jD = "\\ufe20-\\ufe2f",
      zD = "\\u20d0-\\u20ff",
      KD = BD + jD + zD,
      YD = "\\ufe0e\\ufe0f",
      $D = "\\u200d",
      QD = RegExp("[" + $D + WD + KD + YD + "]");
    function ZD(e) {
      return QD.test(e);
    }
    hE.exports = ZD;
  });
  var wE = c((PB, AE) => {
    var mE = "\\ud800-\\udfff",
      JD = "\\u0300-\\u036f",
      eF = "\\ufe20-\\ufe2f",
      tF = "\\u20d0-\\u20ff",
      rF = JD + eF + tF,
      nF = "\\ufe0e\\ufe0f",
      iF = "[" + mE + "]",
      Ba = "[" + rF + "]",
      ja = "\\ud83c[\\udffb-\\udfff]",
      oF = "(?:" + Ba + "|" + ja + ")",
      _E = "[^" + mE + "]",
      bE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      TE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      aF = "\\u200d",
      IE = oF + "?",
      OE = "[" + nF + "]?",
      sF = "(?:" + aF + "(?:" + [_E, bE, TE].join("|") + ")" + OE + IE + ")*",
      uF = OE + IE + sF,
      cF = "(?:" + [_E + Ba + "?", Ba, bE, TE, iF].join("|") + ")",
      yE = RegExp(ja + "(?=" + ja + ")|" + cF + uF, "g");
    function lF(e) {
      for (var t = (yE.lastIndex = 0); yE.test(e); ) ++t;
      return t;
    }
    AE.exports = lF;
  });
  var SE = c((qB, xE) => {
    var fF = gE(),
      dF = EE(),
      pF = wE();
    function vF(e) {
      return dF(e) ? pF(e) : fF(e);
    }
    xE.exports = vF;
  });
  var CE = c((MB, RE) => {
    var gF = Vn(),
      hF = kn(),
      EF = Pt(),
      yF = pE(),
      mF = SE(),
      _F = "[object Map]",
      bF = "[object Set]";
    function TF(e) {
      if (e == null) return 0;
      if (EF(e)) return yF(e) ? mF(e) : e.length;
      var t = hF(e);
      return t == _F || t == bF ? e.size : gF(e).length;
    }
    RE.exports = TF;
  });
  var LE = c((DB, NE) => {
    var IF = "Expected a function";
    function OF(e) {
      if (typeof e != "function") throw new TypeError(IF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    NE.exports = OF;
  });
  var za = c((FB, PE) => {
    var AF = Tt(),
      wF = (function () {
        try {
          var e = AF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    PE.exports = wF;
  });
  var Ka = c((GB, ME) => {
    var qE = za();
    function xF(e, t, r) {
      t == "__proto__" && qE
        ? qE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    ME.exports = xF;
  });
  var FE = c((UB, DE) => {
    var SF = Ka(),
      RF = Cn(),
      CF = Object.prototype,
      NF = CF.hasOwnProperty;
    function LF(e, t, r) {
      var n = e[t];
      (!(NF.call(e, t) && RF(n, r)) || (r === void 0 && !(t in e))) &&
        SF(e, t, r);
    }
    DE.exports = LF;
  });
  var VE = c((VB, UE) => {
    var PF = FE(),
      qF = Hr(),
      MF = Dn(),
      GE = at(),
      DF = nr();
    function FF(e, t, r, n) {
      if (!GE(e)) return e;
      t = qF(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = DF(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var g = s[u];
          (f = n ? n(g, u, s) : void 0),
            f === void 0 && (f = GE(g) ? g : MF(t[i + 1]) ? [] : {});
        }
        PF(s, u, f), (s = s[u]);
      }
      return e;
    }
    UE.exports = FF;
  });
  var HE = c((kB, kE) => {
    var GF = Wn(),
      UF = VE(),
      VF = Hr();
    function kF(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = GF(e, a);
        r(s, a) && UF(o, VF(a, e), s);
      }
      return o;
    }
    kE.exports = kF;
  });
  var WE = c((HB, XE) => {
    var HF = qn(),
      XF = So(),
      WF = ta(),
      BF = ea(),
      jF = Object.getOwnPropertySymbols,
      zF = jF
        ? function (e) {
            for (var t = []; e; ) HF(t, WF(e)), (e = XF(e));
            return t;
          }
        : BF;
    XE.exports = zF;
  });
  var jE = c((XB, BE) => {
    function KF(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    BE.exports = KF;
  });
  var KE = c((WB, zE) => {
    var YF = at(),
      $F = Un(),
      QF = jE(),
      ZF = Object.prototype,
      JF = ZF.hasOwnProperty;
    function e2(e) {
      if (!YF(e)) return QF(e);
      var t = $F(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !JF.call(e, n))) || r.push(n);
      return r;
    }
    zE.exports = e2;
  });
  var $E = c((BB, YE) => {
    var t2 = na(),
      r2 = KE(),
      n2 = Pt();
    function i2(e) {
      return n2(e) ? t2(e, !0) : r2(e);
    }
    YE.exports = i2;
  });
  var ZE = c((jB, QE) => {
    var o2 = Jo(),
      a2 = WE(),
      s2 = $E();
    function u2(e) {
      return o2(e, s2, a2);
    }
    QE.exports = u2;
  });
  var ey = c((zB, JE) => {
    var c2 = ga(),
      l2 = It(),
      f2 = HE(),
      d2 = ZE();
    function p2(e, t) {
      if (e == null) return {};
      var r = c2(d2(e), function (n) {
        return [n];
      });
      return (
        (t = l2(t)),
        f2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    JE.exports = p2;
  });
  var ry = c((KB, ty) => {
    var v2 = It(),
      g2 = LE(),
      h2 = ey();
    function E2(e, t) {
      return h2(e, g2(v2(t)));
    }
    ty.exports = E2;
  });
  var iy = c((YB, ny) => {
    var y2 = Vn(),
      m2 = kn(),
      _2 = Dr(),
      b2 = Ae(),
      T2 = Pt(),
      I2 = Mn(),
      O2 = Un(),
      A2 = Gn(),
      w2 = "[object Map]",
      x2 = "[object Set]",
      S2 = Object.prototype,
      R2 = S2.hasOwnProperty;
    function C2(e) {
      if (e == null) return !0;
      if (
        T2(e) &&
        (b2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          I2(e) ||
          A2(e) ||
          _2(e))
      )
        return !e.length;
      var t = m2(e);
      if (t == w2 || t == x2) return !e.size;
      if (O2(e)) return !y2(e).length;
      for (var r in e) if (R2.call(e, r)) return !1;
      return !0;
    }
    ny.exports = C2;
  });
  var ay = c(($B, oy) => {
    var N2 = Ka(),
      L2 = Ma(),
      P2 = It();
    function q2(e, t) {
      var r = {};
      return (
        (t = P2(t, 3)),
        L2(e, function (n, i, o) {
          N2(r, i, t(n, i, o));
        }),
        r
      );
    }
    oy.exports = q2;
  });
  var uy = c((QB, sy) => {
    function M2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    sy.exports = M2;
  });
  var ly = c((ZB, cy) => {
    var D2 = jn();
    function F2(e) {
      return typeof e == "function" ? e : D2;
    }
    cy.exports = F2;
  });
  var dy = c((JB, fy) => {
    var G2 = uy(),
      U2 = Da(),
      V2 = ly(),
      k2 = Ae();
    function H2(e, t) {
      var r = k2(e) ? G2 : U2;
      return r(e, V2(t));
    }
    fy.exports = H2;
  });
  var vy = c((ej, py) => {
    var X2 = Ye(),
      W2 = function () {
        return X2.Date.now();
      };
    py.exports = W2;
  });
  var Ey = c((tj, hy) => {
    var B2 = at(),
      Ya = vy(),
      gy = zn(),
      j2 = "Expected a function",
      z2 = Math.max,
      K2 = Math.min;
    function Y2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        g = !1,
        p = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(j2);
      (t = gy(t) || 0),
        B2(r) &&
          ((g = !!r.leading),
          (p = "maxWait" in r),
          (o = p ? z2(gy(r.maxWait) || 0, t) : o),
          (E = "trailing" in r ? !!r.trailing : E));
      function y(L) {
        var z = n,
          K = i;
        return (n = i = void 0), (f = L), (a = e.apply(K, z)), a;
      }
      function _(L) {
        return (f = L), (s = setTimeout(w, t)), g ? y(L) : a;
      }
      function T(L) {
        var z = L - u,
          K = L - f,
          $ = t - z;
        return p ? K2($, o - K) : $;
      }
      function P(L) {
        var z = L - u,
          K = L - f;
        return u === void 0 || z >= t || z < 0 || (p && K >= o);
      }
      function w() {
        var L = Ya();
        if (P(L)) return N(L);
        s = setTimeout(w, T(L));
      }
      function N(L) {
        return (s = void 0), E && n ? y(L) : ((n = i = void 0), a);
      }
      function x() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function M() {
        return s === void 0 ? a : N(Ya());
      }
      function F() {
        var L = Ya(),
          z = P(L);
        if (((n = arguments), (i = this), (u = L), z)) {
          if (s === void 0) return _(u);
          if (p) return clearTimeout(s), (s = setTimeout(w, t)), y(u);
        }
        return s === void 0 && (s = setTimeout(w, t)), a;
      }
      return (F.cancel = x), (F.flush = M), F;
    }
    hy.exports = Y2;
  });
  var my = c((rj, yy) => {
    var $2 = Ey(),
      Q2 = at(),
      Z2 = "Expected a function";
    function J2(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(Z2);
      return (
        Q2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        $2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    yy.exports = J2;
  });
  var by = {};
  De(by, {
    actionListPlaybackChanged: () => gr,
    animationFrameChanged: () => li,
    clearRequested: () => OG,
    elementStateChanged: () => ns,
    eventListenerAdded: () => ci,
    eventStateChanged: () => es,
    instanceAdded: () => ts,
    instanceRemoved: () => rs,
    instanceStarted: () => fi,
    mediaQueriesDefined: () => os,
    parameterChanged: () => vr,
    playbackRequested: () => TG,
    previewRequested: () => bG,
    rawDataImported: () => $a,
    sessionInitialized: () => Qa,
    sessionStarted: () => Za,
    sessionStopped: () => Ja,
    stopRequested: () => IG,
    testFrameRendered: () => AG,
    viewportWidthChanged: () => is,
  });
  var _y,
    eG,
    tG,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    vG,
    gG,
    hG,
    EG,
    yG,
    mG,
    _G,
    $a,
    Qa,
    Za,
    Ja,
    bG,
    TG,
    IG,
    OG,
    ci,
    AG,
    es,
    li,
    vr,
    ts,
    fi,
    rs,
    ns,
    gr,
    is,
    os,
    di = he(() => {
      "use strict";
      Fe();
      (_y = le(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: eG,
          IX2_SESSION_INITIALIZED: tG,
          IX2_SESSION_STARTED: rG,
          IX2_SESSION_STOPPED: nG,
          IX2_PREVIEW_REQUESTED: iG,
          IX2_PLAYBACK_REQUESTED: oG,
          IX2_STOP_REQUESTED: aG,
          IX2_CLEAR_REQUESTED: sG,
          IX2_EVENT_LISTENER_ADDED: uG,
          IX2_TEST_FRAME_RENDERED: cG,
          IX2_EVENT_STATE_CHANGED: lG,
          IX2_ANIMATION_FRAME_CHANGED: fG,
          IX2_PARAMETER_CHANGED: dG,
          IX2_INSTANCE_ADDED: pG,
          IX2_INSTANCE_STARTED: vG,
          IX2_INSTANCE_REMOVED: gG,
          IX2_ELEMENT_STATE_CHANGED: hG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: EG,
          IX2_VIEWPORT_WIDTH_CHANGED: yG,
          IX2_MEDIA_QUERIES_DEFINED: mG,
        } = Ie),
        ({ reifyState: _G } = _y.IX2VanillaUtils),
        ($a = (e) => ({ type: eG, payload: { ..._G(e) } })),
        (Qa = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: tG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Za = () => ({ type: rG })),
        (Ja = () => ({ type: nG })),
        (bG = ({ rawData: e, defer: t }) => ({
          type: iG,
          payload: { defer: t, rawData: e },
        })),
        (TG = ({
          actionTypeId: e = He.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: oG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (IG = (e) => ({ type: aG, payload: { actionListId: e } })),
        (OG = () => ({ type: sG })),
        (ci = (e, t) => ({
          type: uG,
          payload: { target: e, listenerParams: t },
        })),
        (AG = (e = 1) => ({ type: cG, payload: { step: e } })),
        (es = (e, t) => ({ type: lG, payload: { stateKey: e, newState: t } })),
        (li = (e, t) => ({ type: fG, payload: { now: e, parameters: t } })),
        (vr = (e, t) => ({ type: dG, payload: { key: e, value: t } })),
        (ts = (e) => ({ type: pG, payload: { ...e } })),
        (fi = (e, t) => ({ type: vG, payload: { instanceId: e, time: t } })),
        (rs = (e) => ({ type: gG, payload: { instanceId: e } })),
        (ns = (e, t, r, n) => ({
          type: hG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (gr = ({ actionListId: e, isPlaying: t }) => ({
          type: EG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (is = ({ width: e, mediaQueries: t }) => ({
          type: yG,
          payload: { width: e, mediaQueries: t },
        })),
        (os = () => ({ type: mG }));
    });
  var qe = {};
  De(qe, {
    elementContains: () => us,
    getChildElements: () => MG,
    getClosestElement: () => Jr,
    getProperty: () => CG,
    getQuerySelector: () => ss,
    getRefType: () => cs,
    getSiblingElements: () => DG,
    getStyle: () => RG,
    getValidDocument: () => LG,
    isSiblingNode: () => qG,
    matchSelector: () => NG,
    queryDocument: () => PG,
    setStyle: () => SG,
  });
  function SG(e, t, r) {
    e.style[t] = r;
  }
  function RG(e, t) {
    return e.style[t];
  }
  function CG(e, t) {
    return e[t];
  }
  function NG(e) {
    return (t) => t[as](e);
  }
  function ss({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Ty) !== -1) {
        let n = e.split(Ty),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Oy)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function LG(e) {
    return e == null || e === document.documentElement.getAttribute(Oy)
      ? document
      : null;
  }
  function PG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function us(e, t) {
    return e.contains(t);
  }
  function qG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function MG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function DG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function cs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? wG
        : xG
      : null;
  }
  var Iy,
    as,
    Ty,
    wG,
    xG,
    Oy,
    Jr,
    Ay = he(() => {
      "use strict";
      Iy = le(Gt());
      Fe();
      ({ ELEMENT_MATCHES: as } = Iy.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Ty,
          HTML_ELEMENT: wG,
          PLAIN_OBJECT: xG,
          WF_PAGE: Oy,
        } = Re);
      Jr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[as] && r[as](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ls = c((oj, xy) => {
    var FG = at(),
      wy = Object.create,
      GG = (function () {
        function e() {}
        return function (t) {
          if (!FG(t)) return {};
          if (wy) return wy(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    xy.exports = GG;
  });
  var pi = c((aj, Sy) => {
    function UG() {}
    Sy.exports = UG;
  });
  var gi = c((sj, Ry) => {
    var VG = ls(),
      kG = pi();
    function vi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    vi.prototype = VG(kG.prototype);
    vi.prototype.constructor = vi;
    Ry.exports = vi;
  });
  var Py = c((uj, Ly) => {
    var Cy = jt(),
      HG = Dr(),
      XG = Ae(),
      Ny = Cy ? Cy.isConcatSpreadable : void 0;
    function WG(e) {
      return XG(e) || HG(e) || !!(Ny && e && e[Ny]);
    }
    Ly.exports = WG;
  });
  var Dy = c((cj, My) => {
    var BG = qn(),
      jG = Py();
    function qy(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = jG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? qy(s, t - 1, r, n, i)
            : BG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    My.exports = qy;
  });
  var Gy = c((lj, Fy) => {
    var zG = Dy();
    function KG(e) {
      var t = e == null ? 0 : e.length;
      return t ? zG(e, 1) : [];
    }
    Fy.exports = KG;
  });
  var Vy = c((fj, Uy) => {
    function YG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Uy.exports = YG;
  });
  var Xy = c((dj, Hy) => {
    var $G = Vy(),
      ky = Math.max;
    function QG(e, t, r) {
      return (
        (t = ky(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = ky(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), $G(e, this, s);
        }
      );
    }
    Hy.exports = QG;
  });
  var By = c((pj, Wy) => {
    function ZG(e) {
      return function () {
        return e;
      };
    }
    Wy.exports = ZG;
  });
  var Ky = c((vj, zy) => {
    var JG = By(),
      jy = za(),
      eU = jn(),
      tU = jy
        ? function (e, t) {
            return jy(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: JG(t),
              writable: !0,
            });
          }
        : eU;
    zy.exports = tU;
  });
  var $y = c((gj, Yy) => {
    var rU = 800,
      nU = 16,
      iU = Date.now;
    function oU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = iU(),
          i = nU - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= rU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Yy.exports = oU;
  });
  var Zy = c((hj, Qy) => {
    var aU = Ky(),
      sU = $y(),
      uU = sU(aU);
    Qy.exports = uU;
  });
  var em = c((Ej, Jy) => {
    var cU = Gy(),
      lU = Xy(),
      fU = Zy();
    function dU(e) {
      return fU(lU(e, void 0, cU), e + "");
    }
    Jy.exports = dU;
  });
  var nm = c((yj, rm) => {
    var tm = ia(),
      pU = tm && new tm();
    rm.exports = pU;
  });
  var om = c((mj, im) => {
    function vU() {}
    im.exports = vU;
  });
  var fs = c((_j, sm) => {
    var am = nm(),
      gU = om(),
      hU = am
        ? function (e) {
            return am.get(e);
          }
        : gU;
    sm.exports = hU;
  });
  var cm = c((bj, um) => {
    var EU = {};
    um.exports = EU;
  });
  var ds = c((Tj, fm) => {
    var lm = cm(),
      yU = Object.prototype,
      mU = yU.hasOwnProperty;
    function _U(e) {
      for (
        var t = e.name + "", r = lm[t], n = mU.call(lm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    fm.exports = _U;
  });
  var Ei = c((Ij, dm) => {
    var bU = ls(),
      TU = pi(),
      IU = 4294967295;
    function hi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = IU),
        (this.__views__ = []);
    }
    hi.prototype = bU(TU.prototype);
    hi.prototype.constructor = hi;
    dm.exports = hi;
  });
  var vm = c((Oj, pm) => {
    function OU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    pm.exports = OU;
  });
  var hm = c((Aj, gm) => {
    var AU = Ei(),
      wU = gi(),
      xU = vm();
    function SU(e) {
      if (e instanceof AU) return e.clone();
      var t = new wU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = xU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    gm.exports = SU;
  });
  var mm = c((wj, ym) => {
    var RU = Ei(),
      Em = gi(),
      CU = pi(),
      NU = Ae(),
      LU = dt(),
      PU = hm(),
      qU = Object.prototype,
      MU = qU.hasOwnProperty;
    function yi(e) {
      if (LU(e) && !NU(e) && !(e instanceof RU)) {
        if (e instanceof Em) return e;
        if (MU.call(e, "__wrapped__")) return PU(e);
      }
      return new Em(e);
    }
    yi.prototype = CU.prototype;
    yi.prototype.constructor = yi;
    ym.exports = yi;
  });
  var bm = c((xj, _m) => {
    var DU = Ei(),
      FU = fs(),
      GU = ds(),
      UU = mm();
    function VU(e) {
      var t = GU(e),
        r = UU[t];
      if (typeof r != "function" || !(t in DU.prototype)) return !1;
      if (e === r) return !0;
      var n = FU(r);
      return !!n && e === n[0];
    }
    _m.exports = VU;
  });
  var Am = c((Sj, Om) => {
    var Tm = gi(),
      kU = em(),
      HU = fs(),
      ps = ds(),
      XU = Ae(),
      Im = bm(),
      WU = "Expected a function",
      BU = 8,
      jU = 32,
      zU = 128,
      KU = 256;
    function YU(e) {
      return kU(function (t) {
        var r = t.length,
          n = r,
          i = Tm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(WU);
          if (i && !a && ps(o) == "wrapper") var a = new Tm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ps(o),
            u = s == "wrapper" ? HU(o) : void 0;
          u &&
          Im(u[0]) &&
          u[1] == (zU | BU | jU | KU) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[ps(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && Im(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            g = f[0];
          if (a && f.length == 1 && XU(g)) return a.plant(g).value();
          for (var p = 0, E = r ? t[p].apply(this, f) : g; ++p < r; )
            E = t[p].call(this, E);
          return E;
        };
      });
    }
    Om.exports = YU;
  });
  var xm = c((Rj, wm) => {
    var $U = Am(),
      QU = $U();
    wm.exports = QU;
  });
  var Rm = c((Cj, Sm) => {
    function ZU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Sm.exports = ZU;
  });
  var Nm = c((Nj, Cm) => {
    var JU = Rm(),
      vs = zn();
    function eV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = vs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = vs(t)), (t = t === t ? t : 0)),
        JU(vs(e), t, r)
      );
    }
    Cm.exports = eV;
  });
  var Vm,
    km,
    Hm,
    Xm,
    tV,
    rV,
    nV,
    iV,
    oV,
    aV,
    sV,
    uV,
    cV,
    lV,
    fV,
    dV,
    pV,
    vV,
    gV,
    Wm,
    Bm,
    hV,
    EV,
    yV,
    jm,
    mV,
    _V,
    zm,
    bV,
    gs,
    Km,
    Lm,
    Pm,
    Ym,
    tn,
    TV,
    ct,
    $m,
    IV,
    Ue,
    Ze,
    rn,
    Qm,
    hs,
    qm,
    Es,
    OV,
    en,
    AV,
    wV,
    xV,
    Zm,
    Mm,
    SV,
    Dm,
    RV,
    CV,
    NV,
    Fm,
    mi,
    _i,
    Gm,
    Um,
    Jm,
    e_ = he(() => {
      "use strict";
      (Vm = le(xm())), (km = le(Bn())), (Hm = le(Nm()));
      Fe();
      ys();
      di();
      (Xm = le(Gt())),
        ({
          MOUSE_CLICK: tV,
          MOUSE_SECOND_CLICK: rV,
          MOUSE_DOWN: nV,
          MOUSE_UP: iV,
          MOUSE_OVER: oV,
          MOUSE_OUT: aV,
          DROPDOWN_CLOSE: sV,
          DROPDOWN_OPEN: uV,
          SLIDER_ACTIVE: cV,
          SLIDER_INACTIVE: lV,
          TAB_ACTIVE: fV,
          TAB_INACTIVE: dV,
          NAVBAR_CLOSE: pV,
          NAVBAR_OPEN: vV,
          MOUSE_MOVE: gV,
          PAGE_SCROLL_DOWN: Wm,
          SCROLL_INTO_VIEW: Bm,
          SCROLL_OUT_OF_VIEW: hV,
          PAGE_SCROLL_UP: EV,
          SCROLLING_IN_VIEW: yV,
          PAGE_FINISH: jm,
          ECOMMERCE_CART_CLOSE: mV,
          ECOMMERCE_CART_OPEN: _V,
          PAGE_START: zm,
          PAGE_SCROLL: bV,
        } = $e),
        (gs = "COMPONENT_ACTIVE"),
        (Km = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Lm } = Re),
        ({ getNamespacedParameterId: Pm } = Xm.IX2VanillaUtils),
        (Ym = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (tn = Ym(({ element: e, nativeEvent: t }) => e === t.target)),
        (TV = Ym(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ct = (0, Vm.default)([tn, TV])),
        ($m = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !OV[i.eventTypeId]) return i;
          }
          return null;
        }),
        (IV = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!$m(e, n);
        }),
        (Ue = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = $m(e, u);
          return (
            f &&
              hr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Lm + n.split(Lm)[1],
                actionListId: (0, km.default)(f, "action.config.actionListId"),
              }),
            hr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            nn({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (Ze = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (rn = { handler: Ze(ct, Ue) }),
        (Qm = { ...rn, types: [gs, Km].join(" ") }),
        (hs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (qm = "mouseover mouseout"),
        (Es = { types: hs }),
        (OV = { PAGE_START: zm, PAGE_FINISH: jm }),
        (en = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Hm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (AV = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (wV = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (xV = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = en(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return AV(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (Zm = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [gs, Km].indexOf(n) !== -1 ? n === gs : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Mm = (e) => (t, r) => {
          let n = { elementHovered: wV(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (SV = (e) => (t, r) => {
          let n = { ...r, elementVisible: xV(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Dm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = en(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
              g = f === "PX",
              p = i - o,
              E = Number((n / p).toFixed(2));
            if (r && r.percentTop === E) return r;
            let y = (g ? u : (o * (u || 0)) / 100) / p,
              _,
              T,
              P = 0;
            r &&
              ((_ = E > r.percentTop),
              (T = r.scrollingDown !== _),
              (P = T ? E : r.anchorTop));
            let w = s === Wm ? E >= P + y : E <= P - y,
              N = {
                ...r,
                percentTop: E,
                inBounds: w,
                anchorTop: P,
                scrollingDown: _,
              };
            return (r && w && (T || N.inBounds !== r.inBounds) && e(t, N)) || N;
          }),
        (RV = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (CV = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (NV = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Fm =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (mi = (e = !0) => ({
          ...Qm,
          handler: Ze(
            e ? ct : tn,
            Zm((t, r) => (r.isActive ? rn.handler(t, r) : r))
          ),
        })),
        (_i = (e = !0) => ({
          ...Qm,
          handler: Ze(
            e ? ct : tn,
            Zm((t, r) => (r.isActive ? r : rn.handler(t, r)))
          ),
        })),
        (Gm = {
          ...Es,
          handler: SV((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Bm) === r
              ? (Ue(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Um = 0.05),
        (Jm = {
          [cV]: mi(),
          [lV]: _i(),
          [uV]: mi(),
          [sV]: _i(),
          [vV]: mi(!1),
          [pV]: _i(!1),
          [fV]: mi(),
          [dV]: _i(),
          [_V]: { types: "ecommerce-cart-open", handler: Ze(ct, Ue) },
          [mV]: { types: "ecommerce-cart-close", handler: Ze(ct, Ue) },
          [tV]: {
            types: "click",
            handler: Ze(
              ct,
              Fm((e, { clickCount: t }) => {
                IV(e) ? t === 1 && Ue(e) : Ue(e);
              })
            ),
          },
          [rV]: {
            types: "click",
            handler: Ze(
              ct,
              Fm((e, { clickCount: t }) => {
                t === 2 && Ue(e);
              })
            ),
          },
          [nV]: { ...rn, types: "mousedown" },
          [iV]: { ...rn, types: "mouseup" },
          [oV]: {
            types: qm,
            handler: Ze(
              ct,
              Mm((e, t) => {
                t.elementHovered && Ue(e);
              })
            ),
          },
          [aV]: {
            types: qm,
            handler: Ze(
              ct,
              Mm((e, t) => {
                t.elementHovered || Ue(e);
              })
            ),
          },
          [gV]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: g = 0,
                } = r,
                {
                  clientX: p = o.clientX,
                  clientY: E = o.clientY,
                  pageX: y = o.pageX,
                  pageY: _ = o.pageY,
                } = n,
                T = s === "X_AXIS",
                P = n.type === "mouseout",
                w = g / 100,
                N = u,
                x = !1;
              switch (a) {
                case ot.VIEWPORT: {
                  w = T
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                }
                case ot.PAGE: {
                  let {
                    scrollLeft: M,
                    scrollTop: F,
                    scrollWidth: L,
                    scrollHeight: z,
                  } = en();
                  w = T ? Math.min(M + y, L) / L : Math.min(F + _, z) / z;
                  break;
                }
                case ot.ELEMENT:
                default: {
                  N = Pm(i, u);
                  let M = n.type.indexOf("mouse") === 0;
                  if (M && ct({ element: t, nativeEvent: n }) !== !0) break;
                  let F = t.getBoundingClientRect(),
                    { left: L, top: z, width: K, height: $ } = F;
                  if (!M && !RV({ left: p, top: E }, F)) break;
                  (x = !0), (w = T ? (p - L) / K : (E - z) / $);
                  break;
                }
              }
              return (
                P && (w > 1 - Um || w < Um) && (w = Math.round(w)),
                (a !== ot.ELEMENT || x || x !== o.elementHovered) &&
                  ((w = f ? 1 - w : w), e.dispatch(vr(N, w))),
                {
                  elementHovered: x,
                  clientX: p,
                  clientY: E,
                  pageX: y,
                  pageY: _,
                }
              );
            },
          },
          [bV]: {
            types: hs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = en(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(vr(r, s));
            },
          },
          [yV]: {
            types: hs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = en(),
                {
                  basedOn: g,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: y,
                  startsExiting: _,
                  addEndOffset: T,
                  addStartOffset: P,
                  addOffsetValue: w = 0,
                  endOffsetValue: N = 0,
                } = r,
                x = p === "X_AXIS";
              if (g === ot.VIEWPORT) {
                let M = x ? o / s : a / u;
                return (
                  M !== i.scrollPercent && t.dispatch(vr(E, M)),
                  { scrollPercent: M }
                );
              } else {
                let M = Pm(n, E),
                  F = e.getBoundingClientRect(),
                  L = (P ? w : 0) / 100,
                  z = (T ? N : 0) / 100;
                (L = y ? L : 1 - L), (z = _ ? z : 1 - z);
                let K = F.top + Math.min(F.height * L, f),
                  ee = F.top + F.height * z - K,
                  U = Math.min(f + ee, u),
                  v = Math.min(Math.max(0, f - K), U) / U;
                return (
                  v !== i.scrollPercent && t.dispatch(vr(M, v)),
                  { scrollPercent: v }
                );
              }
            },
          },
          [Bm]: Gm,
          [hV]: Gm,
          [Wm]: {
            ...Es,
            handler: Dm((e, t) => {
              t.scrollingDown && Ue(e);
            }),
          },
          [EV]: {
            ...Es,
            handler: Dm((e, t) => {
              t.scrollingDown || Ue(e);
            }),
          },
          [jm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ze(tn, CV(Ue)),
          },
          [zm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ze(tn, NV(Ue)),
          },
        });
    });
  var E_ = {};
  De(E_, {
    observeRequests: () => QV,
    startActionGroup: () => nn,
    startEngine: () => wi,
    stopActionGroup: () => hr,
    stopAllActionGroups: () => v_,
    stopEngine: () => xi,
  });
  function QV(e) {
    Ut({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: ek }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: tk }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: rk }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: nk });
  }
  function ZV(e) {
    Ut({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        xi(e),
          l_({ store: e, elementApi: qe }),
          wi({ store: e, allowEvents: !0 }),
          f_();
      },
    });
  }
  function JV(e, t) {
    let r = Ut({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function ek({ rawData: e, defer: t }, r) {
    let n = () => {
      wi({ store: r, rawData: e, allowEvents: !0 }), f_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function f_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function tk(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: g } = e;
    if (n && i && g && s) {
      let p = g.actionLists[n];
      p && (g = VV({ actionList: p, actionItemId: i, rawData: g }));
    }
    if (
      (wi({ store: t, rawData: g, allowEvents: a, testManual: u }),
      (n && r === He.GENERAL_START_ACTION) || ms(r))
    ) {
      hr({ store: t, actionListId: n }),
        p_({ store: t, actionListId: n, eventId: o });
      let p = nn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && p && t.dispatch(gr({ actionListId: n, isPlaying: !s }));
    }
  }
  function rk({ actionListId: e }, t) {
    e ? hr({ store: t, actionListId: e }) : v_({ store: t }), xi(t);
  }
  function nk(e, t) {
    xi(t), l_({ store: t, elementApi: qe });
  }
  function wi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch($a(t)),
      i.active ||
        (e.dispatch(
          Qa({
            hasBoundaryNodes: !!document.querySelector(Ti),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (ck(e), ik(), e.getState().ixSession.hasDefinedMediaQueries && ZV(e)),
        e.dispatch(Za()),
        ok(e, n));
  }
  function ik() {
    let { documentElement: e } = document;
    e.className.indexOf(t_) === -1 && (e.className += ` ${t_}`);
  }
  function ok(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(li(n, o)), t ? JV(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function xi(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(ak), WV(), e.dispatch(Ja());
    }
  }
  function ak({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function sk({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: g } = e.getState(),
      { events: p } = f,
      E = p[n],
      { eventTypeId: y } = E,
      _ = {},
      T = {},
      P = [],
      { continuousActionGroups: w } = a,
      { id: N } = a;
    kV(y, i) && (N = HV(t, N));
    let x = g.hasBoundaryNodes && r ? Jr(r, Ti) : null;
    w.forEach((M) => {
      let { keyframe: F, actionItems: L } = M;
      L.forEach((z) => {
        let { actionTypeId: K } = z,
          { target: $ } = z.config;
        if (!$) return;
        let ee = $.boundaryMode ? x : null,
          U = BV($) + _s + K;
        if (((T[U] = uk(T[U], F, z)), !_[U])) {
          _[U] = !0;
          let { config: O } = z;
          Ii({
            config: O,
            event: E,
            eventTarget: r,
            elementRoot: ee,
            elementApi: qe,
          }).forEach((v) => {
            P.push({ element: v, key: U });
          });
        }
      });
    }),
      P.forEach(({ element: M, key: F }) => {
        let L = T[F],
          z = (0, ht.default)(L, "[0].actionItems[0]", {}),
          { actionTypeId: K } = z,
          $ = Ai(K) ? Ts(K)(M, z) : null,
          ee = bs({ element: M, actionItem: z, elementApi: qe }, $);
        Is({
          store: e,
          element: M,
          eventId: n,
          actionListId: o,
          actionItem: z,
          destination: ee,
          continuous: !0,
          parameterId: N,
          actionGroups: L,
          smoothing: s,
          restingValue: u,
          pluginInstance: $,
        });
      });
  }
  function uk(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function ck(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    d_(e),
      (0, Er.default)(r, (i, o) => {
        let a = Jm[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        gk({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && fk(e);
  }
  function fk(e) {
    let t = () => {
      d_(e);
    };
    lk.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(ci(window, [r, t]));
    }),
      t();
  }
  function d_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(is({ width: n, mediaQueries: i }));
    }
  }
  function gk({ logic: e, store: t, events: r }) {
    hk(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = dk(r, vk);
    if (!(0, i_.default)(s)) return;
    (0, Er.default)(s, (p, E) => {
      let y = r[E],
        { action: _, id: T, mediaQueries: P = o.mediaQueryKeys } = y,
        { actionListId: w } = _.config;
      jV(P, o.mediaQueryKeys) || t.dispatch(os()),
        _.actionTypeId === He.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(y.config) ? y.config : [y.config]).forEach((x) => {
            let { continuousParameterGroupId: M } = x,
              F = (0, ht.default)(a, `${w}.continuousParameterGroups`, []),
              L = (0, n_.default)(F, ({ id: $ }) => $ === M),
              z = (x.smoothing || 0) / 100,
              K = (x.restingState || 0) / 100;
            L &&
              p.forEach(($, ee) => {
                let U = T + _s + ee;
                sk({
                  store: t,
                  eventStateKey: U,
                  eventTarget: $,
                  eventId: T,
                  eventConfig: x,
                  actionListId: w,
                  parameterGroup: L,
                  smoothing: z,
                  restingValue: K,
                });
              });
          }),
        (_.actionTypeId === He.GENERAL_START_ACTION || ms(_.actionTypeId)) &&
          p_({ store: t, actionListId: w, eventId: T });
    });
    let u = (p) => {
        let { ixSession: E } = t.getState();
        pk(s, (y, _, T) => {
          let P = r[_],
            w = E.eventState[T],
            { action: N, mediaQueries: x = o.mediaQueryKeys } = P;
          if (!Oi(x, E.mediaQueryKey)) return;
          let M = (F = {}) => {
            let L = i(
              {
                store: t,
                element: y,
                event: P,
                eventConfig: F,
                nativeEvent: p,
                eventStateKey: T,
              },
              w
            );
            zV(L, w) || t.dispatch(es(T, L));
          };
          N.actionTypeId === He.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(P.config) ? P.config : [P.config]).forEach(M)
            : M();
        });
      },
      f = (0, u_.default)(u, $V),
      g = ({ target: p = document, types: E, throttle: y }) => {
        E.split(" ")
          .filter(Boolean)
          .forEach((_) => {
            let T = y ? f : u;
            p.addEventListener(_, T), t.dispatch(ci(p, [_, T]));
          });
      };
    Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e);
  }
  function hk(e) {
    if (!YV) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ss(o);
      t[a] ||
        ((i === $e.MOUSE_CLICK || i === $e.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function p_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, ht.default)(u, "actionItemGroups[0].actionItems", []),
        g = (0, ht.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Oi(g, i.mediaQueryKey)) return;
      f.forEach((p) => {
        let { config: E, actionTypeId: y } = p,
          _ =
            E?.target?.useEventTarget === !0 && E?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : E,
          T = Ii({ config: _, event: s, elementApi: qe }),
          P = Ai(y);
        T.forEach((w) => {
          let N = P ? Ts(y)(w, p) : null;
          Is({
            destination: bs({ element: w, actionItem: p, elementApi: qe }, N),
            immediate: !0,
            store: e,
            element: w,
            eventId: r,
            actionItem: p,
            actionListId: t,
            pluginInstance: N,
          });
        });
      });
    }
  }
  function v_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, Er.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Os(r, e), i && e.dispatch(gr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function hr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Jr(r, Ti) : null;
    (0, Er.default)(o, (u) => {
      let f = (0, ht.default)(u, "actionItem.config.target.boundaryMode"),
        g = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && g) {
        if (s && f && !us(s, u.element)) return;
        Os(u, e),
          u.verbose && e.dispatch(gr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function nn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: g } = u,
      p = g[t] || {},
      { mediaQueries: E = u.mediaQueryKeys } = p,
      y = (0, ht.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: _, useFirstGroupAsInitialState: T } = y;
    if (!_ || !_.length) return !1;
    o >= _.length && (0, ht.default)(p, "config.loop") && (o = 0),
      o === 0 && T && o++;
    let w =
        (o === 0 || (o === 1 && T)) && ms(p.action?.actionTypeId)
          ? p.config.delay
          : void 0,
      N = (0, ht.default)(_, [o, "actionItems"], []);
    if (!N.length || !Oi(E, f.mediaQueryKey)) return !1;
    let x = f.hasBoundaryNodes && r ? Jr(r, Ti) : null,
      M = FV(N),
      F = !1;
    return (
      N.forEach((L, z) => {
        let { config: K, actionTypeId: $ } = L,
          ee = Ai($),
          { target: U } = K;
        if (!U) return;
        let O = U.boundaryMode ? x : null;
        Ii({
          config: K,
          event: p,
          eventTarget: r,
          elementRoot: O,
          elementApi: qe,
        }).forEach((R, D) => {
          let V = ee ? Ts($)(R, L) : null,
            te = ee ? KV($)(R, L) : null;
          F = !0;
          let re = M === z && D === 0,
            q = GV({ element: R, actionItem: L }),
            W = bs({ element: R, actionItem: L, elementApi: qe }, V);
          Is({
            store: e,
            element: R,
            actionItem: L,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: q,
            destination: W,
            immediate: a,
            verbose: s,
            pluginInstance: V,
            pluginDuration: te,
            instanceDelay: w,
          });
        });
      }),
      F
    );
  }
  function Is(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: g,
      } = n,
      p = !u,
      E = MV(),
      { ixElements: y, ixSession: _, ixData: T } = t.getState(),
      P = qV(y, i),
      { refState: w } = y[P] || {},
      N = cs(i),
      x = _.reducedMotion && Bo[o.actionTypeId],
      M;
    if (x && u)
      switch (T.events[g]?.eventTypeId) {
        case $e.MOUSE_MOVE:
        case $e.MOUSE_MOVE_IN_VIEWPORT:
          M = f;
          break;
        default:
          M = 0.5;
          break;
      }
    let F = UV(i, w, r, o, qe, s);
    if (
      (t.dispatch(
        ts({
          instanceId: E,
          elementId: P,
          origin: F,
          refType: N,
          skipMotion: x,
          skipToValue: M,
          ...n,
        })
      ),
      g_(document.body, "ix2-animation-started", E),
      a)
    ) {
      Ek(t, E);
      return;
    }
    Ut({ store: t, select: ({ ixInstances: L }) => L[E], onChange: h_ }),
      p && t.dispatch(fi(E, _.tick));
  }
  function Os(e, t) {
    g_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === c_ && XV(o, n, qe), t.dispatch(rs(e.id));
  }
  function g_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function Ek(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(fi(t, 0)), e.dispatch(li(performance.now(), r));
    let { ixInstances: n } = e.getState();
    h_(n[t], e);
  }
  function h_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: g,
        eventId: p,
        eventTarget: E,
        eventStateKey: y,
        actionListId: _,
        isCarrier: T,
        styleProp: P,
        verbose: w,
        pluginInstance: N,
      } = e,
      { ixData: x, ixSession: M } = t.getState(),
      { events: F } = x,
      L = F[p] || {},
      { mediaQueries: z = x.mediaQueryKeys } = L;
    if (Oi(z, M.mediaQueryKey) && (n || r || i)) {
      if (f || (u === PV && i)) {
        t.dispatch(ns(o, s, f, a));
        let { ixElements: K } = t.getState(),
          { ref: $, refType: ee, refState: U } = K[o] || {},
          O = U && U[s];
        (ee === c_ || Ai(s)) && DV($, U, O, p, a, P, qe, u, N);
      }
      if (i) {
        if (T) {
          let K = nn({
            store: t,
            eventId: p,
            eventTarget: E,
            eventStateKey: y,
            actionListId: _,
            groupIndex: g + 1,
            verbose: w,
          });
          w && !K && t.dispatch(gr({ actionListId: _, isPlaying: !1 }));
        }
        Os(e, t);
      }
    }
  }
  var n_,
    ht,
    i_,
    o_,
    a_,
    s_,
    Er,
    u_,
    bi,
    LV,
    ms,
    _s,
    Ti,
    c_,
    PV,
    t_,
    Ii,
    qV,
    bs,
    Ut,
    MV,
    DV,
    l_,
    FV,
    GV,
    UV,
    VV,
    kV,
    HV,
    Oi,
    XV,
    WV,
    BV,
    jV,
    zV,
    Ai,
    Ts,
    KV,
    r_,
    YV,
    $V,
    lk,
    dk,
    pk,
    vk,
    ys = he(() => {
      "use strict";
      (n_ = le(_a())),
        (ht = le(Bn())),
        (i_ = le(CE())),
        (o_ = le(ry())),
        (a_ = le(iy())),
        (s_ = le(ay())),
        (Er = le(dy())),
        (u_ = le(my()));
      Fe();
      bi = le(Gt());
      di();
      Ay();
      e_();
      (LV = Object.keys(Xo)),
        (ms = (e) => LV.includes(e)),
        ({
          COLON_DELIMITER: _s,
          BOUNDARY_SELECTOR: Ti,
          HTML_ELEMENT: c_,
          RENDER_GENERAL: PV,
          W_MOD_IX: t_,
        } = Re),
        ({
          getAffectedElements: Ii,
          getElementId: qV,
          getDestinationValues: bs,
          observeStore: Ut,
          getInstanceId: MV,
          renderHTMLElement: DV,
          clearAllStyles: l_,
          getMaxDurationItemIndex: FV,
          getComputedStyle: GV,
          getInstanceOrigin: UV,
          reduceListToGroup: VV,
          shouldNamespaceEventParameter: kV,
          getNamespacedParameterId: HV,
          shouldAllowMediaQuery: Oi,
          cleanupHTMLElement: XV,
          clearObjectCache: WV,
          stringifyTarget: BV,
          mediaQueriesEqual: jV,
          shallowEqual: zV,
        } = bi.IX2VanillaUtils),
        ({
          isPluginType: Ai,
          createPluginInstance: Ts,
          getPluginDuration: KV,
        } = bi.IX2VanillaPlugins),
        (r_ = navigator.userAgent),
        (YV = r_.match(/iPad/i) || r_.match(/iPhone/)),
        ($V = 12);
      lk = ["resize", "orientationchange"];
      (dk = (e, t) => (0, o_.default)((0, s_.default)(e, t), a_.default)),
        (pk = (e, t) => {
          (0, Er.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + _s + o;
              t(i, n, a);
            });
          });
        }),
        (vk = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ii({ config: t, elementApi: qe });
        });
    });
  var m_ = c((Et) => {
    "use strict";
    var yk = dn().default,
      mk = eu().default;
    Object.defineProperty(Et, "__esModule", { value: !0 });
    Et.actions = void 0;
    Et.destroy = y_;
    Et.init = Ok;
    Et.setEnv = Ik;
    Et.store = void 0;
    Ul();
    var _k = ko(),
      bk = mk((fE(), tt(lE))),
      As = (ys(), tt(E_)),
      Tk = yk((di(), tt(by)));
    Et.actions = Tk;
    var Si = (0, _k.createStore)(bk.default);
    Et.store = Si;
    function Ik(e) {
      e() && (0, As.observeRequests)(Si);
    }
    function Ok(e) {
      y_(), (0, As.startEngine)({ store: Si, rawData: e, allowEvents: !0 });
    }
    function y_() {
      (0, As.stopEngine)(Si);
    }
  });
  var I_ = c((Vj, T_) => {
    "use strict";
    var __ = Ve(),
      b_ = m_();
    b_.setEnv(__.env);
    __.define(
      "ix2",
      (T_.exports = function () {
        return b_;
      })
    );
  });
  var A_ = c((kj, O_) => {
    "use strict";
    var yr = Ve();
    yr.define(
      "links",
      (O_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = yr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          g = /\/$/,
          p,
          E;
        r.ready = r.design = r.preview = y;
        function y() {
          (i = o && yr.env("design")),
            (E = yr.env("slug") || a.pathname || ""),
            yr.scroll.off(T),
            (p = []);
          for (var w = document.links, N = 0; N < w.length; ++N) _(w[N]);
          p.length && (yr.scroll.on(T), T());
        }
        function _(w) {
          var N =
            (i && w.getAttribute("href-disabled")) || w.getAttribute("href");
          if (((s.href = N), !(N.indexOf(":") >= 0))) {
            var x = e(w);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var M = e(s.hash);
              M.length && p.push({ link: x, sec: M, active: !1 });
              return;
            }
            if (!(N === "#" || N === "")) {
              var F = s.href === a.href || N === E || (f.test(N) && g.test(E));
              P(x, u, F);
            }
          }
        }
        function T() {
          var w = n.scrollTop(),
            N = n.height();
          t.each(p, function (x) {
            var M = x.link,
              F = x.sec,
              L = F.offset().top,
              z = F.outerHeight(),
              K = N * 0.5,
              $ = F.is(":visible") && L + z - K >= w && L + K <= w + N;
            x.active !== $ && ((x.active = $), P(M, u, $));
          });
        }
        function P(w, N, x) {
          var M = w.hasClass(N);
          (x && M) || (!x && !M) || (x ? w.addClass(N) : w.removeClass(N));
        }
        return r;
      })
    );
  });
  var x_ = c((Hj, w_) => {
    "use strict";
    var Ri = Ve();
    Ri.define(
      "scroll",
      (w_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = _() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (O) {
              window.setTimeout(O, 15);
            },
          u = Ri.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          g = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          y = document.createElement("style");
        y.appendChild(document.createTextNode(E));
        function _() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var T = /^#[a-zA-Z0-9][\w:.-]*$/;
        function P(O) {
          return T.test(O.hash) && O.host + O.pathname === r.host + r.pathname;
        }
        let w =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function N() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            w.matches
          );
        }
        function x(O, v) {
          var R;
          switch (v) {
            case "add":
              (R = O.attr("tabindex")),
                R
                  ? O.attr("data-wf-tabindex-swap", R)
                  : O.attr("tabindex", "-1");
              break;
            case "remove":
              (R = O.attr("data-wf-tabindex-swap")),
                R
                  ? (O.attr("tabindex", R),
                    O.removeAttr("data-wf-tabindex-swap"))
                  : O.removeAttr("tabindex");
              break;
          }
          O.toggleClass("wf-force-outline-none", v === "add");
        }
        function M(O) {
          var v = O.currentTarget;
          if (
            !(
              Ri.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))
            )
          ) {
            var R = P(v) ? v.hash : "";
            if (R !== "") {
              var D = e(R);
              D.length &&
                (O && (O.preventDefault(), O.stopPropagation()),
                F(R, O),
                window.setTimeout(
                  function () {
                    L(D, function () {
                      x(D, "add"),
                        D.get(0).focus({ preventScroll: !0 }),
                        x(D, "remove");
                    });
                  },
                  O ? 0 : 300
                ));
            }
          }
        }
        function F(O) {
          if (
            r.hash !== O &&
            n &&
            n.pushState &&
            !(Ri.env.chrome && r.protocol === "file:")
          ) {
            var v = n.state && n.state.hash;
            v !== O && n.pushState({ hash: O }, "", O);
          }
        }
        function L(O, v) {
          var R = i.scrollTop(),
            D = z(O);
          if (R !== D) {
            var V = K(O, R, D),
              te = Date.now(),
              re = function () {
                var q = Date.now() - te;
                window.scroll(0, $(R, D, q, V)),
                  q <= V ? s(re) : typeof v == "function" && v();
              };
            s(re);
          }
        }
        function z(O) {
          var v = e(f),
            R = v.css("position") === "fixed" ? v.outerHeight() : 0,
            D = O.offset().top - R;
          if (O.data("scroll") === "mid") {
            var V = i.height() - R,
              te = O.outerHeight();
            te < V && (D -= Math.round((V - te) / 2));
          }
          return D;
        }
        function K(O, v, R) {
          if (N()) return 0;
          var D = 1;
          return (
            a.add(O).each(function (V, te) {
              var re = parseFloat(te.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (D = re);
            }),
            (472.143 * Math.log(Math.abs(v - R) + 125) - 2e3) * D
          );
        }
        function $(O, v, R, D) {
          return R > D ? v : O + (v - O) * ee(R / D);
        }
        function ee(O) {
          return O < 0.5
            ? 4 * O * O * O
            : (O - 1) * (2 * O - 2) * (2 * O - 2) + 1;
        }
        function U() {
          var { WF_CLICK_EMPTY: O, WF_CLICK_SCROLL: v } = t;
          o.on(v, p, M),
            o.on(O, g, function (R) {
              R.preventDefault();
            }),
            document.head.insertBefore(y, document.head.firstChild);
        }
        return { ready: U };
      })
    );
  });
  var R_ = c((Xj, S_) => {
    "use strict";
    var Ak = Ve();
    Ak.define(
      "touch",
      (S_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            g;
          o.addEventListener("touchstart", p, !1),
            o.addEventListener("touchmove", E, !1),
            o.addEventListener("touchend", y, !1),
            o.addEventListener("touchcancel", _, !1),
            o.addEventListener("mousedown", p, !1),
            o.addEventListener("mousemove", E, !1),
            o.addEventListener("mouseup", y, !1),
            o.addEventListener("mouseout", _, !1);
          function p(P) {
            var w = P.touches;
            (w && w.length > 1) ||
              ((a = !0),
              w ? ((s = !0), (f = w[0].clientX)) : (f = P.clientX),
              (g = f));
          }
          function E(P) {
            if (a) {
              if (s && P.type === "mousemove") {
                P.preventDefault(), P.stopPropagation();
                return;
              }
              var w = P.touches,
                N = w ? w[0].clientX : P.clientX,
                x = N - g;
              (g = N),
                Math.abs(x) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", P, { direction: x > 0 ? "right" : "left" }), _());
            }
          }
          function y(P) {
            if (a && ((a = !1), s && P.type === "mouseup")) {
              P.preventDefault(), P.stopPropagation(), (s = !1);
              return;
            }
          }
          function _() {
            a = !1;
          }
          function T() {
            o.removeEventListener("touchstart", p, !1),
              o.removeEventListener("touchmove", E, !1),
              o.removeEventListener("touchend", y, !1),
              o.removeEventListener("touchcancel", _, !1),
              o.removeEventListener("mousedown", p, !1),
              o.removeEventListener("mousemove", E, !1),
              o.removeEventListener("mouseup", y, !1),
              o.removeEventListener("mouseout", _, !1),
              (o = null);
          }
          this.destroy = T;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var L_ = c((Wj, N_) => {
    "use strict";
    var Vt = Ve(),
      wk = _r(),
      Je = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      C_ = !0,
      xk = /^#[a-zA-Z0-9\-_]+$/;
    Vt.define(
      "dropdown",
      (N_.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Vt.env(),
          o = !1,
          a,
          s = Vt.env.touch,
          u = ".w-dropdown",
          f = "w--open",
          g = wk.triggers,
          p = 900,
          E = "focusout" + u,
          y = "keydown" + u,
          _ = "mouseenter" + u,
          T = "mousemove" + u,
          P = "mouseleave" + u,
          w = (s ? "click" : "mouseup") + u,
          N = "w-close" + u,
          x = "setting" + u,
          M = e(document),
          F;
        (n.ready = L),
          (n.design = function () {
            o && v(), (o = !1), L();
          }),
          (n.preview = function () {
            (o = !0), L();
          });
        function L() {
          (a = i && Vt.env("design")), (F = M.find(u)), F.each(z);
        }
        function z(d, H) {
          var B = e(H),
            C = e.data(H, u);
          C ||
            (C = e.data(H, u, {
              open: !1,
              el: B,
              config: {},
              selectedIdx: -1,
            })),
            (C.toggle = C.el.children(".w-dropdown-toggle")),
            (C.list = C.el.children(".w-dropdown-list")),
            (C.links = C.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (C.complete = V(C)),
            (C.mouseLeave = re(C)),
            (C.mouseUpOutside = D(C)),
            (C.mouseMoveOutside = q(C)),
            K(C);
          var oe = C.toggle.attr("id"),
            _e = C.list.attr("id");
          oe || (oe = "w-dropdown-toggle-" + d),
            _e || (_e = "w-dropdown-list-" + d),
            C.toggle.attr("id", oe),
            C.toggle.attr("aria-controls", _e),
            C.toggle.attr("aria-haspopup", "menu"),
            C.toggle.attr("aria-expanded", "false"),
            C.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            C.toggle.prop("tagName") !== "BUTTON" &&
              (C.toggle.attr("role", "button"),
              C.toggle.attr("tabindex") || C.toggle.attr("tabindex", "0")),
            C.list.attr("id", _e),
            C.list.attr("aria-labelledby", oe),
            C.links.each(function (h, X) {
              X.hasAttribute("tabindex") || X.setAttribute("tabindex", "0"),
                xk.test(X.hash) && X.addEventListener("click", O.bind(null, C));
            }),
            C.el.off(u),
            C.toggle.off(u),
            C.nav && C.nav.off(u);
          var se = ee(C, C_);
          a && C.el.on(x, $(C)),
            a ||
              (i && ((C.hovering = !1), O(C)),
              C.config.hover && C.toggle.on(_, te(C)),
              C.el.on(N, se),
              C.el.on(y, W(C)),
              C.el.on(E, G(C)),
              C.toggle.on(w, se),
              C.toggle.on(y, k(C)),
              (C.nav = C.el.closest(".w-nav")),
              C.nav.on(N, se));
        }
        function K(d) {
          var H = Number(d.el.css("z-index"));
          (d.manageZ = H === p || H === p + 1),
            (d.config = {
              hover: d.el.attr("data-hover") === "true" && !s,
              delay: d.el.attr("data-delay"),
            });
        }
        function $(d) {
          return function (H, B) {
            (B = B || {}),
              K(d),
              B.open === !0 && U(d, !0),
              B.open === !1 && O(d, { immediate: !0 });
          };
        }
        function ee(d, H) {
          return r(function (B) {
            if (d.open || (B && B.type === "w-close"))
              return O(d, { forceClose: H });
            U(d);
          });
        }
        function U(d) {
          if (!d.open) {
            R(d),
              (d.open = !0),
              d.list.addClass(f),
              d.toggle.addClass(f),
              d.toggle.attr("aria-expanded", "true"),
              g.intro(0, d.el[0]),
              Vt.redraw.up(),
              d.manageZ && d.el.css("z-index", p + 1);
            var H = Vt.env("editor");
            a || M.on(w, d.mouseUpOutside),
              d.hovering && !H && d.el.on(P, d.mouseLeave),
              d.hovering && H && M.on(T, d.mouseMoveOutside),
              window.clearTimeout(d.delayId);
          }
        }
        function O(d, { immediate: H, forceClose: B } = {}) {
          if (d.open && !(d.config.hover && d.hovering && !B)) {
            d.toggle.attr("aria-expanded", "false"), (d.open = !1);
            var C = d.config;
            if (
              (g.outro(0, d.el[0]),
              M.off(w, d.mouseUpOutside),
              M.off(T, d.mouseMoveOutside),
              d.el.off(P, d.mouseLeave),
              window.clearTimeout(d.delayId),
              !C.delay || H)
            )
              return d.complete();
            d.delayId = window.setTimeout(d.complete, C.delay);
          }
        }
        function v() {
          M.find(u).each(function (d, H) {
            e(H).triggerHandler(N);
          });
        }
        function R(d) {
          var H = d.el[0];
          F.each(function (B, C) {
            var oe = e(C);
            oe.is(H) || oe.has(H).length || oe.triggerHandler(N);
          });
        }
        function D(d) {
          return (
            d.mouseUpOutside && M.off(w, d.mouseUpOutside),
            r(function (H) {
              if (d.open) {
                var B = e(H.target);
                if (!B.closest(".w-dropdown-toggle").length) {
                  var C = e.inArray(d.el[0], B.parents(u)) === -1,
                    oe = Vt.env("editor");
                  if (C) {
                    if (oe) {
                      var _e =
                          B.parents().length === 1 &&
                          B.parents("svg").length === 1,
                        se = B.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (_e || se) return;
                    }
                    O(d);
                  }
                }
              }
            })
          );
        }
        function V(d) {
          return function () {
            d.list.removeClass(f),
              d.toggle.removeClass(f),
              d.manageZ && d.el.css("z-index", "");
          };
        }
        function te(d) {
          return function () {
            (d.hovering = !0), U(d);
          };
        }
        function re(d) {
          return function () {
            (d.hovering = !1), d.links.is(":focus") || O(d);
          };
        }
        function q(d) {
          return r(function (H) {
            if (d.open) {
              var B = e(H.target),
                C = e.inArray(d.el[0], B.parents(u)) === -1;
              if (C) {
                var oe = B.parents(".w-editor-bem-EditorHoverControls").length,
                  _e = B.parents(".w-editor-bem-RTToolbar").length,
                  se = e(".w-editor-bem-EditorOverlay"),
                  h =
                    se.find(".w-editor-edit-outline").length ||
                    se.find(".w-editor-bem-RTToolbar").length;
                if (oe || _e || h) return;
                (d.hovering = !1), O(d);
              }
            }
          });
        }
        function W(d) {
          return function (H) {
            if (!(a || !d.open))
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                H.keyCode)
              ) {
                case Je.HOME:
                  return d.open
                    ? ((d.selectedIdx = 0), Q(d), H.preventDefault())
                    : void 0;
                case Je.END:
                  return d.open
                    ? ((d.selectedIdx = d.links.length - 1),
                      Q(d),
                      H.preventDefault())
                    : void 0;
                case Je.ESCAPE:
                  return O(d), d.toggle.focus(), H.stopPropagation();
                case Je.ARROW_RIGHT:
                case Je.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    Q(d),
                    H.preventDefault()
                  );
                case Je.ARROW_LEFT:
                case Je.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    Q(d),
                    H.preventDefault()
                  );
              }
          };
        }
        function Q(d) {
          d.links[d.selectedIdx] && d.links[d.selectedIdx].focus();
        }
        function k(d) {
          var H = ee(d, C_);
          return function (B) {
            if (!a) {
              if (!d.open)
                switch (B.keyCode) {
                  case Je.ARROW_UP:
                  case Je.ARROW_DOWN:
                    return B.stopPropagation();
                }
              switch (B.keyCode) {
                case Je.SPACE:
                case Je.ENTER:
                  return H(), B.stopPropagation(), B.preventDefault();
              }
            }
          };
        }
        function G(d) {
          return r(function (H) {
            var { relatedTarget: B, target: C } = H,
              oe = d.el[0],
              _e = oe.contains(B) || oe.contains(C);
            return _e || O(d), H.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var q_ = c((Bj, P_) => {
    "use strict";
    var ws = Ve();
    ws.define(
      "forms",
      (P_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          f = /e(-)?mail/i,
          g = /^\S+@\S+$/,
          p = window.alert,
          E = ws.env(),
          y,
          _,
          T,
          P = /list-manage[1-9]?.com/i,
          w = t.debounce(function () {
            p(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              N(), !E && !y && M();
            };
        function N() {
          (u = e("html").attr("data-wf-site")),
            (_ = "https://webflow.com/api/v1/form/" + u),
            a &&
              _.indexOf("https://webflow.com") >= 0 &&
              (_ = _.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (T = `${_}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(x);
        }
        function x(q, W) {
          var Q = e(W),
            k = e.data(W, s);
          k || (k = e.data(W, s, { form: Q })), F(k);
          var G = Q.closest("div.w-form");
          (k.done = G.find("> .w-form-done")),
            (k.fail = G.find("> .w-form-fail")),
            (k.fileUploads = G.find(".w-file-upload")),
            k.fileUploads.each(function (B) {
              V(B, k);
            });
          var d =
            k.form.attr("aria-label") || k.form.attr("data-name") || "Form";
          k.done.attr("aria-label") || k.form.attr("aria-label", d),
            k.done.attr("tabindex", "-1"),
            k.done.attr("role", "region"),
            k.done.attr("aria-label") ||
              k.done.attr("aria-label", d + " success"),
            k.fail.attr("tabindex", "-1"),
            k.fail.attr("role", "region"),
            k.fail.attr("aria-label") ||
              k.fail.attr("aria-label", d + " failure");
          var H = (k.action = Q.attr("action"));
          if (
            ((k.handler = null),
            (k.redirect = Q.attr("data-redirect")),
            P.test(H))
          ) {
            k.handler = v;
            return;
          }
          if (!H) {
            if (u) {
              k.handler = O;
              return;
            }
            w();
          }
        }
        function M() {
          (y = !0),
            n.on("submit", s + " form", function (B) {
              var C = e.data(this, s);
              C.handler && ((C.evt = B), C.handler(C));
            });
          let q = ".w-checkbox-input",
            W = ".w-radio-input",
            Q = "w--redirected-checked",
            k = "w--redirected-focus",
            G = "w--redirected-focus-visible",
            d = ":focus-visible, [data-wf-focus-visible]",
            H = [
              ["checkbox", q],
              ["radio", W],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + q + ")",
            (B) => {
              e(B.target).siblings(q).toggleClass(Q);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (B) => {
              e(`input[name="${B.target.name}"]:not(${q})`).map((oe, _e) =>
                e(_e).siblings(W).removeClass(Q)
              );
              let C = e(B.target);
              C.hasClass("w-radio-input") || C.siblings(W).addClass(Q);
            }),
            H.forEach(([B, C]) => {
              n.on(
                "focus",
                s + ` form input[type="${B}"]:not(` + C + ")",
                (oe) => {
                  e(oe.target).siblings(C).addClass(k),
                    e(oe.target).filter(d).siblings(C).addClass(G);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${B}"]:not(` + C + ")",
                  (oe) => {
                    e(oe.target).siblings(C).removeClass(`${k} ${G}`);
                  }
                );
            });
        }
        function F(q) {
          var W = (q.btn = q.form.find(':input[type="submit"]'));
          (q.wait = q.btn.attr("data-wait") || null),
            (q.success = !1),
            W.prop("disabled", !1),
            q.label && W.val(q.label);
        }
        function L(q) {
          var W = q.btn,
            Q = q.wait;
          W.prop("disabled", !0), Q && ((q.label = W.val()), W.val(Q));
        }
        function z(q, W) {
          var Q = null;
          return (
            (W = W || {}),
            q
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (k, G) {
                var d = e(G),
                  H = d.attr("type"),
                  B =
                    d.attr("data-name") || d.attr("name") || "Field " + (k + 1),
                  C = d.val();
                if (H === "checkbox") C = d.is(":checked");
                else if (H === "radio") {
                  if (W[B] === null || typeof W[B] == "string") return;
                  C =
                    q
                      .find('input[name="' + d.attr("name") + '"]:checked')
                      .val() || null;
                }
                typeof C == "string" && (C = e.trim(C)),
                  (W[B] = C),
                  (Q = Q || U(d, H, B, C));
              }),
            Q
          );
        }
        function K(q) {
          var W = {};
          return (
            q.find(':input[type="file"]').each(function (Q, k) {
              var G = e(k),
                d = G.attr("data-name") || G.attr("name") || "File " + (Q + 1),
                H = G.attr("data-value");
              typeof H == "string" && (H = e.trim(H)), (W[d] = H);
            }),
            W
          );
        }
        let $ = { _mkto_trk: "marketo" };
        function ee() {
          return document.cookie.split("; ").reduce(function (W, Q) {
            let k = Q.split("="),
              G = k[0];
            if (G in $) {
              let d = $[G],
                H = k.slice(1).join("=");
              W[d] = H;
            }
            return W;
          }, {});
        }
        function U(q, W, Q, k) {
          var G = null;
          return (
            W === "password"
              ? (G = "Passwords cannot be submitted.")
              : q.attr("required")
              ? k
                ? f.test(q.attr("type")) &&
                  (g.test(k) ||
                    (G = "Please enter a valid email address for: " + Q))
                : (G = "Please fill out the required field: " + Q)
              : Q === "g-recaptcha-response" &&
                !k &&
                (G = "Please confirm you\u2019re not a robot."),
            G
          );
        }
        function O(q) {
          D(q), R(q);
        }
        function v(q) {
          F(q);
          var W = q.form,
            Q = {};
          if (/^https/.test(o.href) && !/^https/.test(q.action)) {
            W.attr("method", "post");
            return;
          }
          D(q);
          var k = z(W, Q);
          if (k) return p(k);
          L(q);
          var G;
          t.each(Q, function (C, oe) {
            f.test(oe) && (Q.EMAIL = C),
              /^((full[ _-]?)?name)$/i.test(oe) && (G = C),
              /^(first[ _-]?name)$/i.test(oe) && (Q.FNAME = C),
              /^(last[ _-]?name)$/i.test(oe) && (Q.LNAME = C);
          }),
            G &&
              !Q.FNAME &&
              ((G = G.split(" ")),
              (Q.FNAME = G[0]),
              (Q.LNAME = Q.LNAME || G[1]));
          var d = q.action.replace("/post?", "/post-json?") + "&c=?",
            H = d.indexOf("u=") + 2;
          H = d.substring(H, d.indexOf("&", H));
          var B = d.indexOf("id=") + 3;
          (B = d.substring(B, d.indexOf("&", B))),
            (Q["b_" + H + "_" + B] = ""),
            e
              .ajax({ url: d, data: Q, dataType: "jsonp" })
              .done(function (C) {
                (q.success = C.result === "success" || /already/.test(C.msg)),
                  q.success || console.info("MailChimp error: " + C.msg),
                  R(q);
              })
              .fail(function () {
                R(q);
              });
        }
        function R(q) {
          var W = q.form,
            Q = q.redirect,
            k = q.success;
          if (k && Q) {
            ws.location(Q);
            return;
          }
          q.done.toggle(k),
            q.fail.toggle(!k),
            k ? q.done.focus() : q.fail.focus(),
            W.toggle(!k),
            F(q);
        }
        function D(q) {
          q.evt && q.evt.preventDefault(), (q.evt = null);
        }
        function V(q, W) {
          if (!W.fileUploads || !W.fileUploads[q]) return;
          var Q,
            k = e(W.fileUploads[q]),
            G = k.find("> .w-file-upload-default"),
            d = k.find("> .w-file-upload-uploading"),
            H = k.find("> .w-file-upload-success"),
            B = k.find("> .w-file-upload-error"),
            C = G.find(".w-file-upload-input"),
            oe = G.find(".w-file-upload-label"),
            _e = oe.children(),
            se = B.find(".w-file-upload-error-msg"),
            h = H.find(".w-file-upload-file"),
            X = H.find(".w-file-remove-link"),
            Z = h.find(".w-file-upload-file-name"),
            Y = se.attr("data-w-size-error"),
            ve = se.attr("data-w-type-error"),
            St = se.attr("data-w-generic-error");
          if (
            (E ||
              oe.on("click keydown", function (b) {
                (b.type === "keydown" && b.which !== 13 && b.which !== 32) ||
                  (b.preventDefault(), C.click());
              }),
            oe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            X.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            E)
          )
            C.on("click", function (b) {
              b.preventDefault();
            }),
              oe.on("click", function (b) {
                b.preventDefault();
              }),
              _e.on("click", function (b) {
                b.preventDefault();
              });
          else {
            X.on("click keydown", function (b) {
              if (b.type === "keydown") {
                if (b.which !== 13 && b.which !== 32) return;
                b.preventDefault();
              }
              C.removeAttr("data-value"),
                C.val(""),
                Z.html(""),
                G.toggle(!0),
                H.toggle(!1),
                oe.focus();
            }),
              C.on("change", function (b) {
                (Q = b.target && b.target.files && b.target.files[0]),
                  Q &&
                    (G.toggle(!1),
                    B.toggle(!1),
                    d.toggle(!0),
                    d.focus(),
                    Z.text(Q.name),
                    A() || L(W),
                    (W.fileUploads[q].uploading = !0),
                    te(Q, m));
              });
            var lt = oe.outerHeight();
            C.height(lt), C.width(1);
          }
          function l(b) {
            var S = b.responseJSON && b.responseJSON.msg,
              J = St;
            typeof S == "string" && S.indexOf("InvalidFileTypeError") === 0
              ? (J = ve)
              : typeof S == "string" &&
                S.indexOf("MaxFileSizeError") === 0 &&
                (J = Y),
              se.text(J),
              C.removeAttr("data-value"),
              C.val(""),
              d.toggle(!1),
              G.toggle(!0),
              B.toggle(!0),
              B.focus(),
              (W.fileUploads[q].uploading = !1),
              A() || F(W);
          }
          function m(b, S) {
            if (b) return l(b);
            var J = S.fileName,
              ie = S.postData,
              pe = S.fileId,
              j = S.s3Url;
            C.attr("data-value", pe), re(j, ie, Q, J, I);
          }
          function I(b) {
            if (b) return l(b);
            d.toggle(!1),
              H.css("display", "inline-block"),
              H.focus(),
              (W.fileUploads[q].uploading = !1),
              A() || F(W);
          }
          function A() {
            var b = (W.fileUploads && W.fileUploads.toArray()) || [];
            return b.some(function (S) {
              return S.uploading;
            });
          }
        }
        function te(q, W) {
          var Q = new URLSearchParams({ name: q.name, size: q.size });
          e.ajax({ type: "GET", url: `${T}?${Q}`, crossDomain: !0 })
            .done(function (k) {
              W(null, k);
            })
            .fail(function (k) {
              W(k);
            });
        }
        function re(q, W, Q, k, G) {
          var d = new FormData();
          for (var H in W) d.append(H, W[H]);
          d.append("file", Q, k),
            e
              .ajax({
                type: "POST",
                url: q,
                data: d,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                G(null);
              })
              .fail(function (B) {
                G(B);
              });
        }
        return r;
      })
    );
  });
  var D_ = c((jj, M_) => {
    "use strict";
    var wt = Ve(),
      Sk = _r(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    wt.define(
      "navbar",
      (M_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          f,
          g,
          p = wt.env(),
          E = '<div class="w-nav-overlay" data-wf-ignore />',
          y = ".w-nav",
          _ = "w--open",
          T = "w--nav-dropdown-open",
          P = "w--nav-dropdown-toggle-open",
          w = "w--nav-dropdown-list-open",
          N = "w--nav-link-open",
          x = Sk.triggers,
          M = e();
        (r.ready = r.design = r.preview = F),
          (r.destroy = function () {
            (M = e()), L(), u && u.length && u.each(ee);
          });
        function F() {
          (f = p && wt.env("design")),
            (g = wt.env("editor")),
            (s = e(document.body)),
            (u = o.find(y)),
            u.length && (u.each($), L(), z());
        }
        function L() {
          wt.resize.off(K);
        }
        function z() {
          wt.resize.on(K);
        }
        function K() {
          u.each(G);
        }
        function $(h, X) {
          var Z = e(X),
            Y = e.data(X, y);
          Y ||
            (Y = e.data(X, y, {
              open: !1,
              el: Z,
              config: {},
              selectedIdx: -1,
            })),
            (Y.menu = Z.find(".w-nav-menu")),
            (Y.links = Y.menu.find(".w-nav-link")),
            (Y.dropdowns = Y.menu.find(".w-dropdown")),
            (Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle")),
            (Y.dropdownList = Y.menu.find(".w-dropdown-list")),
            (Y.button = Z.find(".w-nav-button")),
            (Y.container = Z.find(".w-container")),
            (Y.overlayContainerId = "w-nav-overlay-" + h),
            (Y.outside = Q(Y));
          var ve = Z.find(".w-nav-brand");
          ve &&
            ve.attr("href") === "/" &&
            ve.attr("aria-label") == null &&
            ve.attr("aria-label", "home"),
            Y.button.attr("style", "-webkit-user-select: text;"),
            Y.button.attr("aria-label") == null &&
              Y.button.attr("aria-label", "menu"),
            Y.button.attr("role", "button"),
            Y.button.attr("tabindex", "0"),
            Y.button.attr("aria-controls", Y.overlayContainerId),
            Y.button.attr("aria-haspopup", "menu"),
            Y.button.attr("aria-expanded", "false"),
            Y.el.off(y),
            Y.button.off(y),
            Y.menu.off(y),
            v(Y),
            f
              ? (U(Y), Y.el.on("setting" + y, R(Y)))
              : (O(Y),
                Y.button.on("click" + y, q(Y)),
                Y.menu.on("click" + y, "a", W(Y)),
                Y.button.on("keydown" + y, D(Y)),
                Y.el.on("keydown" + y, V(Y))),
            G(h, X);
        }
        function ee(h, X) {
          var Z = e.data(X, y);
          Z && (U(Z), e.removeData(X, y));
        }
        function U(h) {
          h.overlay && (se(h, !0), h.overlay.remove(), (h.overlay = null));
        }
        function O(h) {
          h.overlay ||
            ((h.overlay = e(E).appendTo(h.el)),
            h.overlay.attr("id", h.overlayContainerId),
            (h.parent = h.menu.parent()),
            se(h, !0));
        }
        function v(h) {
          var X = {},
            Z = h.config || {},
            Y = (X.animation = h.el.attr("data-animation") || "default");
          (X.animOver = /^over/.test(Y)),
            (X.animDirect = /left$/.test(Y) ? -1 : 1),
            Z.animation !== Y && h.open && t.defer(re, h),
            (X.easing = h.el.attr("data-easing") || "ease"),
            (X.easing2 = h.el.attr("data-easing2") || "ease");
          var ve = h.el.attr("data-duration");
          (X.duration = ve != null ? Number(ve) : 400),
            (X.docHeight = h.el.attr("data-doc-height")),
            (h.config = X);
        }
        function R(h) {
          return function (X, Z) {
            Z = Z || {};
            var Y = i.width();
            v(h),
              Z.open === !0 && oe(h, !0),
              Z.open === !1 && se(h, !0),
              h.open &&
                t.defer(function () {
                  Y !== i.width() && re(h);
                });
          };
        }
        function D(h) {
          return function (X) {
            switch (X.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return q(h)(), X.preventDefault(), X.stopPropagation();
              case Se.ESCAPE:
                return se(h), X.preventDefault(), X.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return h.open
                  ? (X.keyCode === Se.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    te(h),
                    X.preventDefault(),
                    X.stopPropagation())
                  : (X.preventDefault(), X.stopPropagation());
            }
          };
        }
        function V(h) {
          return function (X) {
            if (h.open)
              switch (
                ((h.selectedIdx = h.links.index(document.activeElement)),
                X.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    X.keyCode === Se.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    te(h),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    se(h),
                    h.button.focus(),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (h.selectedIdx = Math.max(-1, h.selectedIdx - 1)),
                    te(h),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (h.selectedIdx = Math.min(
                      h.links.length - 1,
                      h.selectedIdx + 1
                    )),
                    te(h),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
              }
          };
        }
        function te(h) {
          if (h.links[h.selectedIdx]) {
            var X = h.links[h.selectedIdx];
            X.focus(), W(X);
          }
        }
        function re(h) {
          h.open && (se(h, !0), oe(h, !0));
        }
        function q(h) {
          return a(function () {
            h.open ? se(h) : oe(h);
          });
        }
        function W(h) {
          return function (X) {
            var Z = e(this),
              Y = Z.attr("href");
            if (!wt.validClick(X.currentTarget)) {
              X.preventDefault();
              return;
            }
            Y && Y.indexOf("#") === 0 && h.open && se(h);
          };
        }
        function Q(h) {
          return (
            h.outside && o.off("click" + y, h.outside),
            function (X) {
              var Z = e(X.target);
              (g && Z.closest(".w-editor-bem-EditorOverlay").length) || k(h, Z);
            }
          );
        }
        var k = a(function (h, X) {
          if (h.open) {
            var Z = X.closest(".w-nav-menu");
            h.menu.is(Z) || se(h);
          }
        });
        function G(h, X) {
          var Z = e.data(X, y),
            Y = (Z.collapsed = Z.button.css("display") !== "none");
          if ((Z.open && !Y && !f && se(Z, !0), Z.container.length)) {
            var ve = H(Z);
            Z.links.each(ve), Z.dropdowns.each(ve);
          }
          Z.open && _e(Z);
        }
        var d = "max-width";
        function H(h) {
          var X = h.container.css(d);
          return (
            X === "none" && (X = ""),
            function (Z, Y) {
              (Y = e(Y)), Y.css(d, ""), Y.css(d) === "none" && Y.css(d, X);
            }
          );
        }
        function B(h, X) {
          X.setAttribute("data-nav-menu-open", "");
        }
        function C(h, X) {
          X.removeAttribute("data-nav-menu-open");
        }
        function oe(h, X) {
          if (h.open) return;
          (h.open = !0),
            h.menu.each(B),
            h.links.addClass(N),
            h.dropdowns.addClass(T),
            h.dropdownToggle.addClass(P),
            h.dropdownList.addClass(w),
            h.button.addClass(_);
          var Z = h.config,
            Y = Z.animation;
          (Y === "none" || !n.support.transform || Z.duration <= 0) && (X = !0);
          var ve = _e(h),
            St = h.menu.outerHeight(!0),
            lt = h.menu.outerWidth(!0),
            l = h.el.height(),
            m = h.el[0];
          if (
            (G(0, m),
            x.intro(0, m),
            wt.redraw.up(),
            f || o.on("click" + y, h.outside),
            X)
          ) {
            b();
            return;
          }
          var I = "transform " + Z.duration + "ms " + Z.easing;
          if (
            (h.overlay &&
              ((M = h.menu.prev()), h.overlay.show().append(h.menu)),
            Z.animOver)
          ) {
            n(h.menu)
              .add(I)
              .set({ x: Z.animDirect * lt, height: ve })
              .start({ x: 0 })
              .then(b),
              h.overlay && h.overlay.width(lt);
            return;
          }
          var A = l + St;
          n(h.menu).add(I).set({ y: -A }).start({ y: 0 }).then(b);
          function b() {
            h.button.attr("aria-expanded", "true");
          }
        }
        function _e(h) {
          var X = h.config,
            Z = X.docHeight ? o.height() : s.height();
          return (
            X.animOver
              ? h.menu.height(Z)
              : h.el.css("position") !== "fixed" && (Z -= h.el.outerHeight(!0)),
            h.overlay && h.overlay.height(Z),
            Z
          );
        }
        function se(h, X) {
          if (!h.open) return;
          (h.open = !1), h.button.removeClass(_);
          var Z = h.config;
          if (
            ((Z.animation === "none" ||
              !n.support.transform ||
              Z.duration <= 0) &&
              (X = !0),
            x.outro(0, h.el[0]),
            o.off("click" + y, h.outside),
            X)
          ) {
            n(h.menu).stop(), m();
            return;
          }
          var Y = "transform " + Z.duration + "ms " + Z.easing2,
            ve = h.menu.outerHeight(!0),
            St = h.menu.outerWidth(!0),
            lt = h.el.height();
          if (Z.animOver) {
            n(h.menu)
              .add(Y)
              .start({ x: St * Z.animDirect })
              .then(m);
            return;
          }
          var l = lt + ve;
          n(h.menu).add(Y).start({ y: -l }).then(m);
          function m() {
            h.menu.height(""),
              n(h.menu).set({ x: 0, y: 0 }),
              h.menu.each(C),
              h.links.removeClass(N),
              h.dropdowns.removeClass(T),
              h.dropdownToggle.removeClass(P),
              h.dropdownList.removeClass(w),
              h.overlay &&
                h.overlay.children().length &&
                (M.length ? h.menu.insertAfter(M) : h.menu.prependTo(h.parent),
                h.overlay.attr("style", "").hide()),
              h.el.triggerHandler("w-close"),
              h.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var G_ = c((zj, F_) => {
    "use strict";
    var xt = Ve(),
      Rk = _r();
    xt.define(
      "tabs",
      (F_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = xt.env,
          s = a.safari,
          u = a(),
          f = "data-w-tab",
          g = "data-w-pane",
          p = ".w-tabs",
          E = "w--current",
          y = "w--tab-active",
          _ = Rk.triggers,
          T = !1;
        (t.ready = t.design = t.preview = P),
          (t.redraw = function () {
            (T = !0), P(), (T = !1);
          }),
          (t.destroy = function () {
            (i = n.find(p)), i.length && (i.each(x), w());
          });
        function P() {
          (o = u && xt.env("design")),
            (i = n.find(p)),
            i.length &&
              (i.each(M), xt.env("preview") && !T && i.each(x), w(), N());
        }
        function w() {
          xt.redraw.off(t.redraw);
        }
        function N() {
          xt.redraw.on(t.redraw);
        }
        function x(U, O) {
          var v = e.data(O, p);
          v &&
            (v.links && v.links.each(_.reset),
            v.panes && v.panes.each(_.reset));
        }
        function M(U, O) {
          var v = p.substr(1) + "-" + U,
            R = e(O),
            D = e.data(O, p);
          if (
            (D || (D = e.data(O, p, { el: R, config: {} })),
            (D.current = null),
            (D.tabIdentifier = v + "-" + f),
            (D.paneIdentifier = v + "-" + g),
            (D.menu = R.children(".w-tab-menu")),
            (D.links = D.menu.children(".w-tab-link")),
            (D.content = R.children(".w-tab-content")),
            (D.panes = D.content.children(".w-tab-pane")),
            D.el.off(p),
            D.links.off(p),
            D.menu.attr("role", "tablist"),
            D.links.attr("tabindex", "-1"),
            F(D),
            !o)
          ) {
            D.links.on("click" + p, z(D)), D.links.on("keydown" + p, K(D));
            var V = D.links.filter("." + E),
              te = V.attr(f);
            te && $(D, { tab: te, immediate: !0 });
          }
        }
        function F(U) {
          var O = {};
          O.easing = U.el.attr("data-easing") || "ease";
          var v = parseInt(U.el.attr("data-duration-in"), 10);
          v = O.intro = v === v ? v : 0;
          var R = parseInt(U.el.attr("data-duration-out"), 10);
          (R = O.outro = R === R ? R : 0),
            (O.immediate = !v && !R),
            (U.config = O);
        }
        function L(U) {
          var O = U.current;
          return Array.prototype.findIndex.call(
            U.links,
            (v) => v.getAttribute(f) === O,
            null
          );
        }
        function z(U) {
          return function (O) {
            O.preventDefault();
            var v = O.currentTarget.getAttribute(f);
            v && $(U, { tab: v });
          };
        }
        function K(U) {
          return function (O) {
            var v = L(U),
              R = O.key,
              D = {
                ArrowLeft: v - 1,
                ArrowUp: v - 1,
                ArrowRight: v + 1,
                ArrowDown: v + 1,
                End: U.links.length - 1,
                Home: 0,
              };
            if (R in D) {
              O.preventDefault();
              var V = D[R];
              V === -1 && (V = U.links.length - 1),
                V === U.links.length && (V = 0);
              var te = U.links[V],
                re = te.getAttribute(f);
              re && $(U, { tab: re });
            }
          };
        }
        function $(U, O) {
          O = O || {};
          var v = U.config,
            R = v.easing,
            D = O.tab;
          if (D !== U.current) {
            U.current = D;
            var V;
            U.links.each(function (G, d) {
              var H = e(d);
              if (O.immediate || v.immediate) {
                var B = U.panes[G];
                d.id || (d.id = U.tabIdentifier + "-" + G),
                  B.id || (B.id = U.paneIdentifier + "-" + G),
                  (d.href = "#" + B.id),
                  d.setAttribute("role", "tab"),
                  d.setAttribute("aria-controls", B.id),
                  d.setAttribute("aria-selected", "false"),
                  B.setAttribute("role", "tabpanel"),
                  B.setAttribute("aria-labelledby", d.id);
              }
              d.getAttribute(f) === D
                ? ((V = d),
                  H.addClass(E)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(_.intro))
                : H.hasClass(E) &&
                  H.removeClass(E)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(_.outro);
            });
            var te = [],
              re = [];
            U.panes.each(function (G, d) {
              var H = e(d);
              d.getAttribute(f) === D
                ? te.push(d)
                : H.hasClass(y) && re.push(d);
            });
            var q = e(te),
              W = e(re);
            if (O.immediate || v.immediate) {
              q.addClass(y).each(_.intro),
                W.removeClass(y),
                T || xt.redraw.up();
              return;
            } else {
              var Q = window.scrollX,
                k = window.scrollY;
              V.focus(), window.scrollTo(Q, k);
            }
            W.length && v.outro
              ? (W.each(_.outro),
                r(W)
                  .add("opacity " + v.outro + "ms " + R, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => ee(v, W, q)))
              : ee(v, W, q);
          }
        }
        function ee(U, O, v) {
          if (
            (O.removeClass(y).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            v.addClass(y).each(_.intro),
            xt.redraw.up(),
            !U.intro)
          )
            return r(v).set({ opacity: 1 });
          r(v)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + U.intro + "ms " + U.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Vs();
  Hs();
  Bs();
  _r();
  I_();
  A_();
  x_();
  R_();
  L_();
  q_();
  D_();
  G_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-168" },
      },
      mediaQueries: ["main"],
      target: {
        id: "651e7c91bff21d27db96660b|c2a17002-b630-6173-2104-73bbe1ab1816",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "651e7c91bff21d27db96660b|c2a17002-b630-6173-2104-73bbe1ab1816",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1645067301849,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-8" },
      },
      mediaQueries: ["main"],
      target: {
        id: "651e7c91bff21d27db96660b|ef5b4191-b653-046e-7802-d6418a53f40a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "651e7c91bff21d27db96660b|ef5b4191-b653-046e-7802-d6418a53f40a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: null,
        effectIn: true,
      },
      createdOn: 1644856294056,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".walsh-link-wrapper",
        originalId:
          "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".walsh-link-wrapper",
          originalId:
            "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1625015493372,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".walsh-link-wrapper",
        originalId:
          "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".walsh-link-wrapper",
          originalId:
            "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1625015493377,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".walsh-link-block-orange",
        originalId:
          "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".walsh-link-block-orange",
          originalId:
            "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666312770566,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".walsh-link-block-orange",
        originalId:
          "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".walsh-link-block-orange",
          originalId:
            "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666312770566,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-14" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-different-section",
        originalId: "afb5f963-2e0d-06f4-6a5d-d2b5acb65760",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-different-section",
          originalId: "afb5f963-2e0d-06f4-6a5d-d2b5acb65760",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 5,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1649954658296,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-tab-link-2",
        originalId:
          "632ca34770d8c2611cef72e0|ea4eb735-83e4-7bd3-c079-785cf23d8093",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-tab-link-2",
          originalId:
            "632ca34770d8c2611cef72e0|ea4eb735-83e4-7bd3-c079-785cf23d8093",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1656375208353,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-tab-link-2",
        originalId:
          "632ca34770d8c2611cef72e0|ea4eb735-83e4-7bd3-c079-785cf23d8093",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-tab-link-2",
          originalId:
            "632ca34770d8c2611cef72e0|ea4eb735-83e4-7bd3-c079-785cf23d8093",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1656375208353,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-256" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "651e7c91bff21d27db96660b|d9d64bb8-6492-2c40-9dd3-16dac468ad18",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "651e7c91bff21d27db96660b|d9d64bb8-6492-2c40-9dd3-16dac468ad18",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1657011187487,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".prendre-rdv-button",
        originalId:
          "651e7c91bff21d27db96660b|4090bb0e-2d97-1b22-5931-66578a3f5eb7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".prendre-rdv-button",
          originalId:
            "651e7c91bff21d27db96660b|4090bb0e-2d97-1b22-5931-66578a3f5eb7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1697037359333,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".prendre-rdv-button",
        originalId:
          "651e7c91bff21d27db96660b|4090bb0e-2d97-1b22-5931-66578a3f5eb7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".prendre-rdv-button",
          originalId:
            "651e7c91bff21d27db96660b|4090bb0e-2d97-1b22-5931-66578a3f5eb7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1697037359333,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "651e7c91bff21d27db96660b|7b1d3c5c-86a4-c50f-d189-bf612f0601ca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "651e7c91bff21d27db96660b|7b1d3c5c-86a4-c50f-d189-bf612f0601ca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637289552467,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "651e7c91bff21d27db96660b|7b1d3c5c-86a4-c50f-d189-bf612f0601cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "651e7c91bff21d27db96660b|7b1d3c5c-86a4-c50f-d189-bf612f0601cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1664297295946,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "651e7c91bff21d27db96660b|7b1d3c5c-86a4-c50f-d189-bf612f0601e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "651e7c91bff21d27db96660b|7b1d3c5c-86a4-c50f-d189-bf612f0601e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637288064003,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "651e7c91bff21d27db96660b|7b1d3c5c-86a4-c50f-d189-bf612f0601ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "651e7c91bff21d27db96660b|7b1d3c5c-86a4-c50f-d189-bf612f0601ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637287475108,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "651e7c91bff21d27db96660b|7b1d3c5c-86a4-c50f-d189-bf612f0601eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "651e7c91bff21d27db96660b|7b1d3c5c-86a4-c50f-d189-bf612f0601eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637287475108,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_BIG_EFFECT",
        instant: false,
        config: { actionListId: "growBigIn", autoStopEventId: "e-41" },
      },
      mediaQueries: ["main"],
      target: {
        id: "651e7c91bff21d27db96660b|a6b030d1-26b6-4123-37ec-86c911ca18e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "651e7c91bff21d27db96660b|a6b030d1-26b6-4123-37ec-86c911ca18e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: null,
        effectIn: true,
      },
      createdOn: 1697313135014,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "651e7c91bff21d27db96660b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "651e7c91bff21d27db96660b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1697470947436,
    },
  },
  actionLists: {
    "a-6": {
      id: "a-6",
      title: "Button CTA Arrow - Hover On",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".walsh-icon-arrow",
                  selectorGuids: ["77eba88a-30a1-0f06-e451-4809f796714c"],
                },
                xValue: 6,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1625015496555,
    },
    "a-7": {
      id: "a-7",
      title: "Button CTA Arrow - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".walsh-icon-arrow",
                  selectorGuids: ["77eba88a-30a1-0f06-e451-4809f796714c"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1625015496555,
    },
    "a-4": {
      id: "a-4",
      title: "Button Default - Hover On",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 1250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".walsh-button-hover-fill",
                  selectorGuids: ["77eba88a-30a1-0f06-e451-4809f796714e"],
                },
                xValue: 3.8,
                yValue: 3.8,
                locked: true,
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 1250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".walsh-button-hover-fill",
                  selectorGuids: ["77eba88a-30a1-0f06-e451-4809f796714e"],
                },
                xValue: 315,
                yValue: 80,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "inOutExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".walsh-icon-arrow-flip",
                  selectorGuids: ["77eba88a-30a1-0f06-e451-4809f796714f"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 300,
                easing: "",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".walsh-label-button",
                  selectorGuids: ["77eba88a-30a1-0f06-e451-4809f7967151"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1661474026364,
    },
    "a-5": {
      id: "a-5",
      title: "Button Default - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".walsh-button-hover-fill",
                  selectorGuids: ["77eba88a-30a1-0f06-e451-4809f796714e"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".walsh-button-hover-fill",
                  selectorGuids: ["77eba88a-30a1-0f06-e451-4809f796714e"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 250,
                easing: "outQuart",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".walsh-label-button",
                  selectorGuids: ["77eba88a-30a1-0f06-e451-4809f7967151"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outQuart",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".walsh-icon-arrow-flip",
                  selectorGuids: ["77eba88a-30a1-0f06-e451-4809f796714f"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1661474026364,
    },
    "a-8": {
      id: "a-8",
      title: "Active Tab",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-tab-paragraph-contain-2",
                  selectorGuids: ["0c78e73a-472e-680d-737c-5ba032a632db"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-tab-heading-2",
                  selectorGuids: ["0c78e73a-472e-680d-737c-5ba032a632dc"],
                },
                globalSwatchId: "9a96f847",
                rValue: 71,
                bValue: 197,
                gValue: 75,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-tab-paragraph-contain-2",
                  selectorGuids: ["0c78e73a-472e-680d-737c-5ba032a632db"],
                },
                value: "block",
              },
            },
            {
              id: "a-8-n-4",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-tab-icon-2",
                  selectorGuids: ["0c78e73a-472e-680d-737c-5ba032a632dd"],
                },
                filters: [
                  { type: "grayscale", filterId: "a05a", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1656375212527,
    },
    "a-9": {
      id: "a-9",
      title: "Inactive Tab",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-tab-icon-2",
                  selectorGuids: ["0c78e73a-472e-680d-737c-5ba032a632dd"],
                },
                filters: [
                  {
                    type: "grayscale",
                    filterId: "aa29",
                    value: 100,
                    unit: "%",
                  },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-tab-heading-2",
                  selectorGuids: ["0c78e73a-472e-680d-737c-5ba032a632dc"],
                },
                globalSwatchId: "09eb77cf",
                rValue: 29,
                bValue: 29,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-3",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-tab-icon-2",
                  selectorGuids: ["0c78e73a-472e-680d-737c-5ba032a632dd"],
                },
                filters: [
                  {
                    type: "grayscale",
                    filterId: "aa29",
                    value: 100,
                    unit: "%",
                  },
                ],
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-tab-paragraph-contain-2",
                  selectorGuids: ["0c78e73a-472e-680d-737c-5ba032a632db"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1656375212527,
    },
    "a-11": {
      id: "a-11",
      title: "☝️ BRIX - Slide To Top - 0.3s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637117977426,
    },
    "a-12": {
      id: "a-12",
      title: "☝️ BRIX - Slide To Top - 0.2s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637117977426,
    },
    "a-13": {
      id: "a-13",
      title: "👻 BRIX - Fade In - 0.6s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    "a-14": {
      id: "a-14",
      title: "👻 BRIX - Fade In - 0.3s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    "a-15": {
      id: "a-15",
      title: "👻 BRIX - Fade In - 0.4s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    a: {
      id: "a",
      title: "Floating Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 700,
                target: {
                  id: "651e7c91bff21d27db96660b|9e63427c-1c9a-8e5b-1fd3-05013ffeae8b",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "651e7c91bff21d27db96660b|a7e4d61f-5a74-8cc3-0ce8-117623e43dbc",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "651e7c91bff21d27db96660b|44bf0e6d-fec0-6d92-eba1-cc3b74e4bb7e",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "651e7c91bff21d27db96660b|10b162d3-3355-c415-79a5-1691d463b1b5",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "651e7c91bff21d27db96660b|2b83ef75-ec28-dfc4-7b2b-98705df65ccb",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "651e7c91bff21d27db96660b|93734a3e-dbdb-4bbc-dec5-96263f646514",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|9e63427c-1c9a-8e5b-1fd3-05013ffeae8b",
                },
                yValue: 5,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|44bf0e6d-fec0-6d92-eba1-cc3b74e4bb7e",
                },
                xValue: 0,
                yValue: 5,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|a7e4d61f-5a74-8cc3-0ce8-117623e43dbc",
                },
                xValue: 0,
                yValue: 5,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|10b162d3-3355-c415-79a5-1691d463b1b5",
                },
                xValue: 0,
                yValue: 5,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|2b83ef75-ec28-dfc4-7b2b-98705df65ccb",
                },
                xValue: 7,
                yValue: 5,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|93734a3e-dbdb-4bbc-dec5-96263f646514",
                },
                xValue: 7,
                yValue: 5,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 800,
                target: {
                  id: "651e7c91bff21d27db96660b|9e63427c-1c9a-8e5b-1fd3-05013ffeae8b",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|44bf0e6d-fec0-6d92-eba1-cc3b74e4bb7e",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|a7e4d61f-5a74-8cc3-0ce8-117623e43dbc",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|10b162d3-3355-c415-79a5-1691d463b1b5",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|2b83ef75-ec28-dfc4-7b2b-98705df65ccb",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 1500,
                target: {
                  id: "651e7c91bff21d27db96660b|93734a3e-dbdb-4bbc-dec5-96263f646514",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1696841080155,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    growBigIn: {
      id: "growBigIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
