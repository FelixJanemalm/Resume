var jq = jQuery.noConflict();

// ==========================================================
//             isMobile
// ==========================================================
! function(t) {
  var e = /iPhone/i,
      o = /iPod/i,
      i = /iPad/i,
      c = /\bAndroid(?:.+)Mobile\b/i,
      s = /Android/i,
      d = /\bAndroid(?:.+)SD4930UR\b/i,
      n = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
      a = /Windows Phone/i,
      l = /\bWindows(?:.+)ARM\b/i,
      r = /BlackBerry/i,
      m = /BB10/i,
      j = /Opera Mini/i,
      q = /\b(CriOS|Chrome)(?:.+)Mobile/i,
      y = /\Mobile(?:.+)Firefox\b/i;

  function h(t, e) {
      return t.test(e)
  }

  function p(t) {
      var p = t || ("undefined" != typeof navigator ? navigator.userAgent : ""),
          u = p.split("[FBAN");
      void 0 !== u[1] && (p = u[0]), void 0 !== (u = p.split("Twitter"))[1] && (p = u[0]);
      var g = {
          apple: {
              phone: h(e, p),
              ipod: h(o, p),
              tablet: !h(e, p) && h(i, p),
              device: h(e, p) || h(o, p) || h(i, p)
          },
          amazon: {
              phone: h(d, p),
              tablet: !h(d, p) && h(n, p),
              device: h(d, p) || h(n, p)
          },
          android: {
              phone: h(d, p) || h(c, p),
              tablet: !h(d, p) && !h(c, p) && (h(n, p) || h(s, p)),
              device: h(d, p) || h(n, p) || h(c, p) || h(s, p)
          },
          windows: {
              phone: h(a, p),
              tablet: h(l, p),
              device: h(a, p) || h(l, p)
          },
          other: {
              blackberry: h(r, p),
              blackberry10: h(m, p),
              opera: h(j, p),
              firefox: h(y, p),
              chrome: h(q, p),
              device: h(r, p) || h(m, p) || h(j, p) || h(y, p) || h(q, p)
          }
      };
      return g.any = g.apple.device || g.android.device || g.windows.device || g.other.device, g.phone = g.apple.phone || g.android.phone || g.windows.phone, g.tablet = g.apple.tablet || g.android.tablet || g.windows.tablet, g
  }
  "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = p : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = p() : "function" == typeof define && define.amd ? define([], t.isMobile = p()) : t.isMobile = p()
}(this);

// ==========================================================
//             SROLL NAVIGATION
// ==========================================================

// VARIABLE TO USE AS LENGTH MEASURE FOR SCROLL FUNCTIONS
var windowHeight = jq(window).height(),
  windowWidth = jq(window).width(); // value in pixels

// Renew Variable if window is resized
function mouseEnterPage() {
  windowHeight != jq(window).height() && setTimeout("location.reload(true);", 1500), windowWidth != jq(window).width() && setTimeout("location.reload(true);", 1500)
}
var body = jq("html, body");

function topFunction() {
  body.stop().animate({
      scrollTop: 0
  }, 1e3, "easeOutExpo")
}

// =====================================================================
//            SCROLL TO START
// =====================================================================
function scrollStart() {
  isMobile.any ? jq(this).stop().animate({
      scrollTop: 0
  }, 1e3, "easeOutExpo") : body.stop().animate({
      scrollTop: 0,
      scrollLeft: 0
  }, 1e3, "easeOutExpo")
}

// =====================================================================
//            SCROLL TO SECTION 1
// =====================================================================
function scrollAbout() {
  isMobile.any ? jq(this).stop().animate({
      scrollTop: jq("#felix1").offset().top - 100
  }, 1e3, "easeOutExpo") : body.stop().animate({
      scrollTop: 0,
      scrollLeft: windowWidth
  }, 1e3, "easeOutExpo")
}

// =====================================================================
//            SCROLL TO SECTION 2
// =====================================================================
function scrollWork() {
  isMobile.any ? jq(this).stop().animate({
      scrollTop: jq("#worktitle").offset().top - 100
  }, 1e3, "easeOutExpo") : body.stop().animate({
      scrollTop: 0,
      scrollLeft: 2 * windowWidth
  }, 1e3, "easeOutExpo")
}

// =====================================================================
//            SCROLL TO SECTION 3
// =====================================================================
function scrollPortfolio() {
  isMobile.any ? jq(this).stop().animate({
      scrollTop: jq("#eboardTitle").offset().top - 100
  }, 1e3, "easeOutExpo") : body.stop().animate({
      scrollTop: 0,
      scrollLeft: 3 * windowWidth
  }, 1e3, "easeOutExpo")
}

// =====================================================================
//            SCROLL TO SECTION 4
// =====================================================================
function scrollDoodles() {
  isMobile.any ? jq("body").stop().animate({
      scrollTop: jq("#doodleSectionTitle").offset().top - 100
  }, 1e3, "easeOutExpo") : body.stop().animate({
      scrollTop: 0,
      scrollLeft: 4 * windowWidth
  }, 1e3, "easeOutExpo")
}

// =====================================================================
//            SCROLL TO SECTION 6
// =====================================================================
function scrollContact() {
  if(isMobile.any){ jq(this).stop().animate({
      scrollTop: jq("#contactSectionHeading").offset().top - 100
    }, 1e3, "easeOutExpo")
  }
  else {
    body.stop().animate({
      scrollTop: 0,
      scrollLeft: 6 * windowWidth
    }, 1e3, "easeOutExpo")
  }
}

function leftArrowPressed() {
  jq("html, body").stop().animate({
      scrollTop: 0,
      scrollLeft: windowWidth * Math.round((jq("#topnav").offset().left - windowWidth) / windowWidth)
  }, 1e3, "easeOutExpo")
}

function rightArrowPressed() {
  jq("html, body").stop().animate({
      scrollTop: 0,
      scrollLeft: windowWidth * Math.round((jq("#topnav").offset().left + windowWidth) / windowWidth)
  }, 1e3, "easeOutExpo")
}

function upArrowPressed() {
  var t = document.body,
      e = document.documentElement;
  t.scrollTop -= 200, e.scrollTop -= 200
}

function downArrowPressed() {
  var t = document.body,
      e = document.documentElement;
  t.scrollTop += 200, e.scrollTop += 200
}
jQuery.extend(jQuery.easing, {
  easeOutExpo: function(t, e, o, i, c) {
      return e == c ? o + i : i * (1 - Math.pow(2, -10 * e / c)) + o
  }
}),
// =====================================================================
//             ON PAGE lOAD FUNCTIONS
// =====================================================================
 jq(document).ready(function() {
  // ==========================================================
  //             FOR MOBILE
  // ==========================================================
  isMobile.any ? (
    jq("body").css({ width: "100vw"  }),
    jq(".home").css({ height: "55em"  }),
    jq(".keyboard").css({ display: "none" }),
    jq(".doodleTitle").css({ "padding-top": "30px" }),
    jq(".contactText").css({ "margin-top": "0"  }),
    jq(".contactText").css({ "margin-bottom": "44vh"  }),
    jq(".rotate").css({ transform: "rotate(90deg)" }),

    window.addEventListener("load", function() {
      for (var t = document.getElementsByTagName("img"), e = 2; e < t.length; e++) t[e].getAttribute("data-src") && t[e].setAttribute("src", t[e].getAttribute("data-src"))
  }, !1),

    window.addEventListener("load", function() {
      for (var t = document.getElementsByTagName("video"), e = 0; e < t.length; e++) t[e].getAttribute("data-src") && t[e].setAttribute("poster", t[e].getAttribute("data-src"))
  }, !1),


    jq(this).scrollTop() <= jq("#felix1").offset().top - 250 ?
    (document.getElementById("homeNav").classList.add("activeSection"),
    jq("#dynamicSectionHeading").text("Home"))
    :
    document.getElementById("homeNav").classList.remove("activeSection"),

    jq(this).scrollTop() <= jq("#worktitle").offset().top - 250 && jq(this).scrollTop() > jq("#felix1").offset().top - 250 ?
    (document.getElementById("aboutNav").classList.add("activeSection"),
    jq("#dynamicSectionHeading").text("About"))
    :
    document.getElementById("aboutNav").classList.remove("activeSection"),

    jq(this).scrollTop() <= jq("#eboardTitle").offset().top - 250 && jq(this).scrollTop() > jq("#worktitle").offset().top - 250 ?
    (document.getElementById("resumeNav").classList.add("activeSection"),
    jq("#dynamicSectionHeading").text("Resume"))
    :
    document.getElementById("resumeNav").classList.remove("activeSection"),

    jq(this).scrollTop() <= jq("#doodleSectionTitle").offset().top - 250 && jq(this).scrollTop() > jq("#eboardTitle").offset().top - 250 ?
    (document.getElementById("portfolioNav").classList.add("activeSection"),
    jq("#dynamicSectionHeading").text("Portfolio"))
    :
    document.getElementById("portfolioNav").classList.remove("activeSection"),

    jq(this).scrollTop() <= jq("#contactSectionHeading").offset().top - 250 && jq(this).scrollTop() > jq("#doodleSectionTitle").offset().top - 250 ?
    (document.getElementById("doodleNav").classList.add("activeSection"),
    jq("#dynamicSectionHeading").text("Doodles"))
    :
    document.getElementById("doodleNav").classList.remove("activeSection"),

    jq(this).scrollTop() > jq("#contactSectionHeading").offset().top - 300 ?
    (document.getElementById("contactNav").classList.add("activeSection"),
    jq("#dynamicSectionHeading").text("Contact"))
    :
    document.getElementById("contactNav").classList.remove("activeSection"),

    jq(window).scroll(function() {

      jq(this).scrollTop() < windowHeight && jq(".welcome").css({
        opacity: jq(this).scrollTop() / (windowHeight / 2) - 1
      }),

      jq(this).scrollTop() <= jq("#felix1").offset().top - 250 ? (
      document.getElementById("homeNav").classList.add("activeSection"),
      jq("#dynamicSectionHeading").text("Home"))
      :
      document.getElementById("homeNav").classList.remove("activeSection"),

      jq(this).scrollTop() <= jq("#worktitle").offset().top - 250 && jq(this).scrollTop() > jq("#felix1").offset().top - 250 ? (
      document.getElementById("aboutNav").classList.add("activeSection"),
      jq("#dynamicSectionHeading").text("About"))
      :
      document.getElementById("aboutNav").classList.remove("activeSection"),

      jq(this).scrollTop() <= jq("#eboardTitle").offset().top - 250 && jq(this).scrollTop() > jq("#worktitle").offset().top - 250 ? (
      document.getElementById("resumeNav").classList.add("activeSection"),
      jq("#dynamicSectionHeading").text("Resume"))
      :
      document.getElementById("resumeNav").classList.remove("activeSection"),

      jq(this).scrollTop() <= jq("#doodleSectionTitle").offset().top - 250 && jq(this).scrollTop() > jq("#eboardTitle").offset().top - 250 ? (
      document.getElementById("portfolioNav").classList.add("activeSection"),
      jq("#dynamicSectionHeading").text("Portfolio"))
      :
      document.getElementById("portfolioNav").classList.remove("activeSection"),

      jq(this).scrollTop() <= jq("#contactSectionHeading").offset().top - 250 && jq(this).scrollTop() > jq("#doodleSectionTitle").offset().top - 250 ? (
      document.getElementById("doodleNav").classList.add("activeSection"),
      jq("#dynamicSectionHeading").text("Doodles"))
      :
      document.getElementById("doodleNav").classList.remove("activeSection"),

      jq(this).scrollTop() > jq("#contactSectionHeading").offset().top - 300 ? (
      document.getElementById("contactNav").classList.add("activeSection"),
      jq("#dynamicSectionHeading").text("Contact"))
      :
      document.getElementById("contactNav").classList.remove("activeSection")
  }))

// ==========================================================
//             FOR DESKTOP
// ==========================================================
  : (
    jq("body").css({ width: "600vw" }),
    jq("#arrowLink").css({ bottom: "0.5em" }),

    window.addEventListener("load", function() {
        for (var t = document.getElementsByTagName("img"), e = 0; e < t.length; e++) t[e].getAttribute("data-src") && t[e].setAttribute("src", t[e].getAttribute("data-src"))
    }, !1), window.addEventListener("load", function() {
        for (var t = document.getElementsByTagName("video"), e = 0; e < t.length; e++) t[e].getAttribute("data-src") && t[e].setAttribute("poster", t[e].getAttribute("data-src"))
    }, !1),

    // ==========================================================
    //             SCROLL TO NEAREST FULL SECTION ON PAGE LOAD
    // ==========================================================
    jq(this).scrollLeft() <= .5 * windowWidth &&
    scrollStart(),

    jq(this).scrollLeft() <= 1.5 * windowWidth && jq(this).scrollLeft() > .5 * windowWidth &&
    scrollAbout(),

    jq(this).scrollLeft() <= 2.5 * windowWidth && jq(this).scrollLeft() > 1.5 * windowWidth &&
    scrollWork(),

    jq(this).scrollLeft() <= 3.5 * windowWidth && jq(this).scrollLeft() > 2.5 * windowWidth &&
    scrollPortfolio(),

    jq(this).scrollLeft() <= 4.5 * windowWidth && jq(this).scrollLeft() > 3.5 * windowWidth &&
    scrollDoodles(),

    jq(this).scrollLeft() <= 5.5 * windowWidth && jq(this).scrollLeft() > 4.5 * windowWidth &&
    scrollContact(),

    // ==========================================================
    //            REDUCE HIGHT OF OUTOFVIEW SECTIONS
    // ==========================================================
    jq(this).scrollLeft() <= 2.9 * windowWidth && jq(this).scrollLeft() > 1.1 * windowWidth ?
      jq(".resume").css({ height: "auto" })
      :
      jq(".resume").css({ height: "90vh" }),

    jq(this).scrollLeft() <= 3.9 * windowWidth && jq(this).scrollLeft() > 2.1 * windowWidth ?
      jq(".portfolio").css({ height: "auto" })
      :
      jq(".portfolio").css({ height: "90vh" }),

    jq(this).scrollLeft() <= 4.9 * windowWidth && jq(this).scrollLeft() > 3.1 * windowWidth ?
      jq(".doodleSection").css({ height: "auto" })
      :
      jq(".doodleSection").css({ height: "90vh" }),


    // ==========================================================
    //             SHOWS ACTIVE SECTION ON NAVBAR
    // ==========================================================
    jq(this).scrollLeft() <= .5 * windowWidth ? (
    document.getElementById("logo").classList.remove("activeSectionLogo"),
    jq("#dynamicSectionHeading").text("Home"))
    :
    document.getElementById("logo").classList.add("activeSectionLogo"),

    jq(this).scrollLeft() <= 1.5 * windowWidth && jq(this).scrollLeft() > .5 * windowWidth ? (
      document.getElementById("aboutNav").classList.add("activeSection"),
      jq("#dynamicSectionHeading").text("About"))
      :
      document.getElementById("aboutNav").classList.remove("activeSection"),

    jq(this).scrollLeft() <= 2.5 * windowWidth && jq(this).scrollLeft() > 1.5 * windowWidth ? (
      document.getElementById("resumeNav").classList.add("activeSection"),
      jq("#dynamicSectionHeading").text("Resume"))
      :
      document.getElementById("resumeNav").classList.remove("activeSection"),

    jq(this).scrollLeft() <= 3.5 * windowWidth && jq(this).scrollLeft() > 2.5 * windowWidth ? (
      document.getElementById("portfolioNav").classList.add("activeSection"),
      jq("#dynamicSectionHeading").text("Portfolio"))
      :
      document.getElementById("portfolioNav").classList.remove("activeSection"),

      jq(this).scrollLeft() <= 4.5 * windowWidth && jq(this).scrollLeft() > 3.5 * windowWidth ? (
        document.getElementById("doodleNav").classList.add("activeSection"),
        jq("#dynamicSectionHeading").text("Doodles"))
        :
        document.getElementById("doodleNav").classList.remove("activeSection"),

      jq(this).scrollLeft() <= 5.5 * windowWidth && jq(this).scrollLeft() > 4.5 * windowWidth ? (
        document.getElementById("contactNav").classList.add("activeSection"),
        jq("#dynamicSectionHeading").text("Contact"))
        :
        document.getElementById("contactNav").classList.remove("activeSection"),

      // =====================================================================
      //             ON SCROLL FUNCTIONS
      // =====================================================================
      jq(window).scroll(function() {
        // ==========================================================
        //             FADE WELCOME BANNER
        // ==========================================================
      jq(this).scrollLeft() < windowWidth && jq(".welcome").css({
            opacity: jq(this).scrollLeft() / (windowWidth / 2.3) - 1
        }), jq(this).scrollLeft() < 2 * windowWidth && jq(this).scrollLeft() > windowWidth && jq(".welcome").css({
            opacity: 3.2 - jq(this).scrollLeft() / (windowWidth / 2)
        }),

        // ==========================================================
        //             SHOWS ACTIVE SECTION ON NAVBAR
        // ==========================================================
        jq(this).scrollLeft() <= .5 * windowWidth ? (
          document.getElementById("logo").classList.remove("activeSectionLogo"),
          jq("#dynamicSectionHeading").text("Home"))
          :
          document.getElementById("logo").classList.add("activeSectionLogo"),

          jq(this).scrollLeft() <= 1.5 * windowWidth && jq(this).scrollLeft() > .5 * windowWidth ? (
            document.getElementById("aboutNav").classList.add("activeSection"),
            jq("#dynamicSectionHeading").text("About"))
            :
            document.getElementById("aboutNav").classList.remove("activeSection"),

          jq(this).scrollLeft() <= 2.5 * windowWidth && jq(this).scrollLeft() > 1.5 * windowWidth ? (
            document.getElementById("resumeNav").classList.add("activeSection"),
            jq("#dynamicSectionHeading").text("Resume"))
            :
            document.getElementById("resumeNav").classList.remove("activeSection"),

          jq(this).scrollLeft() <= 3.5 * windowWidth && jq(this).scrollLeft() > 2.5 * windowWidth ? (
            document.getElementById("portfolioNav").classList.add("activeSection"),
            jq("#dynamicSectionHeading").text("Portfolio"))
            :
            document.getElementById("portfolioNav").classList.remove("activeSection"),

            jq(this).scrollLeft() <= 4.5 * windowWidth && jq(this).scrollLeft() > 3.5 * windowWidth ? (
              document.getElementById("doodleNav").classList.add("activeSection"),
              jq("#dynamicSectionHeading").text("Doodles"))
              :
              document.getElementById("doodleNav").classList.remove("activeSection"),

              jq(this).scrollLeft() <= 5.5 * windowWidth && jq(this).scrollLeft() > 4.5 * windowWidth ? (
                document.getElementById("contactNav").classList.add("activeSection"),
                jq("#dynamicSectionHeading").text("Contact"))
                :
                document.getElementById("contactNav").classList.remove("activeSection"),


            // ==========================================================
            //            REDUCE HIGHT OF OUTOFVIEW SECTIONS
            // ==========================================================
            jq(this).scrollLeft() <= 2.9 * windowWidth && jq(this).scrollLeft() > 1.1 * windowWidth ? jq(".resume").css({
            height: "auto"
        }) : jq(".resume").css({
            height: "90vh"
        }),

        jq(this).scrollLeft() <= 3.9 * windowWidth && jq(this).scrollLeft() > 2.1 * windowWidth ? jq(".portfolio").css({
            height: "auto"
        }) : setTimeout(function() {
            jq(".portfolio").css({
                height: "90vh"
            })
        }, 500),

        jq(this).scrollLeft() <= 4.9 * windowWidth && jq(this).scrollLeft() > 3.1 * windowWidth ? jq(".doodleSection").css({
            height: "auto"
        }) : jq(".doodleSection").css({
            height: "90vh"
        })
    }))
}),

// ==========================================================
//             NAVIGATE WITH ARROW KEYS
// ==========================================================
document.onkeydown = function(t) {
  switch ((t = t || window.event).keyCode) {
      case 37:
          leftArrowPressed();
          break;
      case 39:
          rightArrowPressed();
          break;
      case 38:
          upArrowPressed();
          break;
      case 40:
          jq(this).scrollLeft() >= .8 * windowWidth && downArrowPressed()
  }
};

// ==========================================================
//             PORTFOLIO CLICKABLE CONTENT
// ==========================================================
var aomwVisible = !0;

function clickPortfolioItem() {
  jq(".toggle2").attr("checked", !1),
  jq(".toggle3").attr("checked", !1),
  jq(".toggle4").attr("checked", !1),
  jq(".toggle5").attr("checked", !1),
  jq(".toggle6").attr("checked", !1),

  amnestyVisible = !0,
  myClosetVisible = !0,
  jq("#cont1").css({ opacity: "0" }),
  jq("#cont2").css({ opacity: "0" }),
  jq("#cont3").css({ opacity: "0" }),
  jq("#cont5").css({ opacity: "0" }),
  document.getElementById("eboardVideo3").pause(),
  document.getElementById("eboardVideo5").pause(),

  jq("#eboardTitle2").css({ opacity: "1" }),
  jq("#eboardTitle3").css({ opacity: "1" }),
  jq("#eboardTitle4").css({ opacity: "1" }),
  jq("#eboardTitle5").css({ opacity: "1" }),

  aomwVisible ? (
    jq("#eboardTitle").css({ opacity: "0" }),
    jq("#cont4").css({ opacity: "1" }),
    aomwVisible = !1)
  : (
    jq("#eboardTitle").css({ opacity: "1" }),
    jq("#cont4").css({ opacity: "0" }),
    aomwVisible = !0)
}
var amnestyVisible = !0;

function clickPortfolioItem2() {
  jq(".toggle").attr("checked", !1), jq(".toggle3").attr("checked", !1), jq(".toggle4").attr("checked", !1), jq(".toggle5").attr("checked", !1), jq(".toggle6").attr("checked", !1), aomwVisible = !0, myClosetVisible = !0, jq("#cont1").css({
      opacity: "0"
  }), jq("#cont2").css({
      opacity: "0"
  }), jq("#cont3").css({
      opacity: "0"
  }), jq("#cont4").css({
      opacity: "0"
  }), jq("#cont5").css({
      opacity: "0"
  }), document.getElementById("eboardVideo3").pause(), document.getElementById("eboardVideo5").pause(), jq("#eboardTitle").css({
      opacity: "1"
  }), jq("#eboardTitle3").css({
      opacity: "1"
  }), jq("#eboardTitle4").css({
      opacity: "1"
  }), jq("#eboardTitle5").css({
      opacity: "1"
  }), amnestyVisible ? (jq("#eboardTitle2").css({
      opacity: "0"
  }), jq("#cont2").css({
      opacity: "1"
  }), amnestyVisible = !1) : (jq("#eboardTitle2").css({
      opacity: "1"
  }), jq("#cont2").css({
      opacity: "0"
  }), amnestyVisible = !0)
}

function clickPortfolioItem3() {
  var t = document.getElementById("eboardVideo3");
  jq(".toggle").attr("checked", !1), jq(".toggle2").attr("checked", !1), jq(".toggle5").attr("checked", !1), jq(".toggle4").attr("checked", !1), jq(".toggle6").attr("checked", !1), aomwVisible = !0, amnestyVisible = !0, myClosetVisible = !0, jq("#cont2").css({
      opacity: "0"
  }), jq("#cont3").css({
      opacity: "0"
  }), jq("#cont4").css({
      opacity: "0"
  }), jq("#cont5").css({
      opacity: "0"
  }), document.getElementById("eboardVideo5").pause(), jq("#eboardTitle").css({
      opacity: "1"
  }), jq("#eboardTitle2").css({
      opacity: "1"
  }), jq("#eboardTitle5").css({
      opacity: "1"
  }), jq("#eboardTitle4").css({
      opacity: "1"
  }), t.paused ? (t.play(), jq("#eboardTitle3").css({
      opacity: "0"
  }), jq("#cont1").css({
      opacity: "1"
  })) : (t.pause(), jq("#eboardTitle3").css({
      opacity: "1"
  }), jq("#cont1").css({
      opacity: "0"
  }))
}
var myClosetVisible = !0;

function clickPortfolioItem4() {
  jq(".toggle").attr("checked", !1), jq(".toggle2").attr("checked", !1), jq(".toggle3").attr("checked", !1), jq(".toggle5").attr("checked", !1), jq(".toggle6").attr("checked", !1), aomwVisible = !0, amnestyVisible = !0, jq("#cont1").css({
      opacity: "0"
  }), jq("#cont2").css({
      opacity: "0"
  }), jq("#cont3").css({
      opacity: "0"
  }), jq("#cont4").css({
      opacity: "0"
  }), jq("#cont5").css({
      opacity: "0"
  }), document.getElementById("eboardVideo3").pause(), document.getElementById("eboardVideo5").pause(), jq("#eboardTitle").css({
      opacity: "1"
  }), jq("#eboardTitle2").css({
      opacity: "1"
  }), jq("#eboardTitle3").css({
      opacity: "1"
  }), jq("#eboardTitle5").css({
      opacity: "1"
  }), myClosetVisible ? (jq("#eboardTitle4").css({
      opacity: "0"
  }), jq("#cont3").css({
      opacity: "1"
  }), myClosetVisible = !1) : (jq("#eboardTitle4").css({
      opacity: "1"
  }), jq("#cont3").css({
      opacity: "0"
  }), myClosetVisible = !0)
}

function clickPortfolioItem5() {
  var t = document.getElementById("eboardVideo5");
  jq(".toggle").attr("checked", !1), jq(".toggle2").attr("checked", !1), jq(".toggle3").attr("checked", !1), jq(".toggle4").attr("checked", !1), jq(".toggle6").attr("checked", !1), aomwVisible = !0, amnestyVisible = !0, myClosetVisible = !0, jq("#cont1").css({
      opacity: "0"
  }), jq("#cont2").css({
      opacity: "0"
  }), jq("#cont3").css({
      opacity: "0"
  }), jq("#cont4").css({
      opacity: "0"
  }), document.getElementById("eboardVideo3").pause(), jq("#eboardTitle").css({
      opacity: "1"
  }), jq("#eboardTitle2").css({
      opacity: "1"
  }), jq("#eboardTitle3").css({
      opacity: "1"
  }), jq("#eboardTitle4").css({
      opacity: "1"
  }), t.paused ? (t.play(), jq("#eboardTitle5").css({
      opacity: "0"
  }), jq("#cont5").css({
      opacity: "1"
  })) : (t.pause(), jq("#eboardTitle5").css({
      opacity: "1"
  }), jq("#cont5").css({
      opacity: "0"
  }))
}

// ==========================================================
//            PORTFOLIO IMG GALLERY
// ==========================================================
function imgGallery1(t) {
  document.getElementById("amnesty").src = t.src
}

function imgGallery2(t) {
  document.getElementById("myCloset").src = t.src
}

// ==========================================================
//             DOODLES CLICKABLE CONTENT
// ==========================================================
function clickDoodleFairytale() {
  var t = document.getElementById("fairytale");
  t.paused ? (t.play(), jq("#fairytalePlayButton").css({
      opacity: "0"
  })) : (t.pause(), jq("#fairytalePlayButton").css({
      opacity: "1"
  }))
}

function clickDoodleSilhuettedrive() {
  var t = document.getElementById("Silhuettedrive");
  t.paused ? (t.play(), jq("#SilhuettedrivePlayButton").css({
      opacity: "0"
  })) : (t.pause(), jq("#SilhuettedrivePlayButton").css({
      opacity: "1"
  }))
}

function clickDoodleFlyHome() {
  var t = document.getElementById("FlyHome");
  t.paused ? (t.play(), jq("#FlyHomePlayButton").css({
      opacity: "0"
  })) : (t.pause(), jq("#FlyHomePlayButton").css({
      opacity: "1"
  }))
}

function clickDoodleSignature() {
  var t = document.getElementById("Signature");
  t.paused ? (t.play(), jq("#SignaturePlayButton").css({
      opacity: "0"
  })) : (t.pause(), jq("#SignaturePlayButton").css({
      opacity: "1"
  }))
}
