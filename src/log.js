const img = require("./images/praveen-cn.jpeg");

var e = {
    load: function (e) {
      var o =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = o.size,
        t = void 0 === n ? 320 : n,
        i = o.color,
        s = void 0 === i ? "transparent" : i,
        r = o.cb,
        a = new FileReader();
      a.addEventListener(
        "load",
        function () {
          var e =
            "background: url('" +
            a.result +
            "') left top no-repeat; font-size: " +
            t +
            "px; background-size: contain; background-color:" +
            s;
          console.log("%c     ", e), r && r();
        },
        !1
      ),
        fetch(e)
          .then(function (e) {
            return e.blob();
          })
          .then(function (e) {
            if (0 === e.type.indexOf("image")) {
              if (e.size > 8192 && navigator.userAgent.indexOf("Firefox") > 0)
                throw new Error(
                  "Image size too big to be displayed in Firefox."
                );
              return e;
            }
            throw new Error("Valid image not found.");
          })
          .then(function (e) {
            return a.readAsDataURL(e);
          })
          .catch(function (e) {
            return console.warn(e.message);
          });
    },
  },
  o = function () {
    console.clear();
    console.info("%c Glad You Are Here! 👋", "font-size: 2rem;");
    e.load(img, {
      size: 80,
      cb: function () {
        console.info(
          "Wanna chat about code? Work opportunities? Something else?"
        ),
          console.info("Ping me on Twitter! https://twitter.com/pkspyder007"),
          console.info("Mail me @ hello@praveeen.in"),
          console.info(
            "Check out fun stuff on Github! https://github.com/pkspyder007"
          );
      },
    });
  };

o();
