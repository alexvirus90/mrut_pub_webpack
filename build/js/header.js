var header =
webpackJsonp_name_([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {function injectAsidebar(jQuery) {
  jQuery.fn.asidebar = function asidebar(status) {
    switch (status) {
      case "open":
        var that = this;

        if ($(".aside-backdrop").length === 0) {
          $("body").append("<div class='aside-backdrop'></div>");
        }

        $(".aside-backdrop").addClass("in");

        var close = function close() {
          $(that).asidebar.apply(that, ["close"]);
        };

        $(this).addClass("in");
        $(this).find("[data-dismiss=aside], [data-dismiss=asidebar]").on('click', close);
        $(".aside-backdrop").on('click', close);
        break;

      case "close":
        if ($(".aside-backdrop.in").length > 0) {
          $(".aside-backdrop").removeClass("in");
        }

        $(this).removeClass("in");
        break;

      case "toggle":
        if ($(this).attr("class").split(' ').indexOf('in') > -1) {
          $(this).asidebar("close");
        } else {
          $(this).asidebar("open");
        }

        break;
    }
  };
}

if (typeof jQuery !== "undefined") {
  injectAsidebar(jQuery);
} else if (typeof module !== "undefined" && module.exports) {
  module.exports = injectAsidebar;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
  $.fn.FeedEk = function (opt) {
    var def = $.extend({
      MaxCount: 5,
      ShowDesc: true,
      ShowPubDate: true,
      DescCharacterLimit: 0,
      TitleLinkTarget: "_blank",
      DateFormat: "",
      DateFormatLang: "en"
    }, opt);
    var id = $(this).attr("id"),
        i,
        s = "",
        dt;
    $("#" + id).empty();
    if (def.FeedUrl == undefined) return;
    $("#" + id).append('<img src="./images/loader.gif" />');
    var YQLstr = 'SELECT channel.item FROM feednormalizer WHERE output="rss_2.0" AND url ="' + def.FeedUrl + '" LIMIT ' + def.MaxCount;
    $.ajax({
      url: "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(YQLstr) + "&format=json&diagnostics=false&callback=?",
      dataType: "json",
      success: function success(data) {
        $("#" + id).empty();

        if (!(data.query.results.rss instanceof Array)) {
          data.query.results.rss = [data.query.results.rss];
        }

        $.each(data.query.results.rss, function (e, itm) {
          s += '<li><div class="itemTitle"><a href="' + itm.channel.item.link + '" target="' + def.TitleLinkTarget + '" >' + itm.channel.item.title + '</a></div>';

          if (def.ShowPubDate) {
            dt = new Date(itm.channel.item.pubDate);
            s += '<div class="itemDate">';

            if ($.trim(def.DateFormat).length > 0) {
              try {
                moment.lang(def.DateFormatLang);
                s += moment(dt).format(def.DateFormat);
              } catch (e) {
                s += dt.toLocaleDateString();
              }
            } else {
              s += dt.toLocaleDateString();
            }

            s += '</div>';
          }

          if (def.ShowDesc) {
            s += '<div class="itemContent">';

            if (def.DescCharacterLimit > 0 && itm.channel.item.description.length > def.DescCharacterLimit) {
              s += itm.channel.item.description.substring(0, def.DescCharacterLimit) + '...';
            } else {
              s += itm.channel.item.description;
            }

            s += '</div>';
          }
        });
        $("#" + id).append('<ul class="feedEkList">' + s + '</ul>');
      }
    });
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nsScrl;

function nsScrl() {
  var info = $('.aside').innerHeight();
  var asideHeader = info - $('.aside-header').innerHeight();
  var navTab = asideHeader - $('.nav-tabs').innerHeight();
  var max_height = {
    "max-height": navTab - 15 + 'px'
  };
  $('.feedEkList').css(max_height);
  $('#contact').css(max_height);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _interopRequireDefault = __webpack_require__(2);

__webpack_require__(1);

__webpack_require__(7);

__webpack_require__(3);

__webpack_require__(4);

var _scroll = _interopRequireDefault(__webpack_require__(5));

$('.col-right').click(function () {
  (0, _scroll.default)();

  if ($(".aside").hasClass("in")) {
    $('.aside').asidebar('close');
  } else {
    $('.aside').asidebar('open');
  }
});
$('#news').FeedEk({
  FeedUrl: 'http://gov.spb.ru/gov/otrasl/blago/news/rss/',
  MaxCount: 10,
  ShowDesc: true,
  ShowPubDate: true,
  DescCharacterLimit: 100
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
],[9]);