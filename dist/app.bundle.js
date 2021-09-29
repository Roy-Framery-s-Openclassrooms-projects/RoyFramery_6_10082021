/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/class/Photographer.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Class to create a photographer
 */
var Photographer_Photographer = /*#__PURE__*/function () {
  /**
   * 
   * @param {string} name name of the photographer
   * @param {string} city City where the photographer live
   * @param {string} country Country where the photographer live
   * @param {string[]} tags An array an array of tags 
   * @param {string} tagline The tagline of the photographer
   * @param {number} price The price dayliprice of the photographer
   * @param {string} portrait The file name with the extension of his portrait
   * @param {number} id The id of the photographer
   */
  function Photographer(name, city, country, tags, tagline, price, portrait, id) {
    var _this = this;

    _classCallCheck(this, Photographer);

    _defineProperty(this, "dom", {
      photographers: document.querySelector('.photographers'),
      photographer: document.querySelector('.photographer'),
      nameInForm: document.querySelector('.modal__head')
    });

    _defineProperty(this, "getPrice", function () {
      return "\n\t\t<p class=\"infos__price\">".concat(_this.price, "\u20AC / jour</p>\n\t\t");
    });

    _defineProperty(this, "tagsForPhotographersCards", function () {
      var spanTags = '';

      for (var i = 0; i < _this.tags.length; i++) {
        spanTags += "<span class=\"photographer__tag\"><a href=\"./index.html?tag=".concat(_this.tags[i], "\">#").concat(_this.tags[i], "</a></span>");
      }

      return spanTags;
    });

    _defineProperty(this, "tagsForPhotographerHeader", function () {
      var spanTags = '';

      for (var i = 0; i < _this.tags.length; i++) {
        spanTags += "<span class=\"photographer__tag\"><a href=\"../index.html?tag=".concat(_this.tags[i], "\">#").concat(_this.tags[i], "</a></span>");
      }

      return spanTags;
    });

    this.name = name;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
    this.id = id;
  }

  _createClass(Photographer, [{
    key: "photographerCard",
    get:
    /**
     * To construct a photographer's card on home page
     * @returns A string that correspond to the DOM elements for a photographer's card on home page
     */
    function get() {
      return "\n\t\t<article class=\"photographer\">\n\t\t\t<a href=\"./photographers/index.html?id=".concat(this.id, "\" class=\"photographer__header\">\n\t\t\t\t<img class=\"photographer__img\" src=\"public/images/photographers/id_photos/").concat(this.portrait, "\" alt=\"").concat(this.name, "\">\n\t\t\t\t<h2 class=\"photographer__name\">").concat(this.name, "</h2>\n\t\t\t</a>\n\t\t\t<div class=\"photographer__content\">\n\t\t\t\t<p class=\"photographer__location\">").concat(this.city, ", ").concat(this.country, "</p>\n\t\t\t\t<p class=\"photographer__tagline\">").concat(this.tagline, "</p>\n\t\t\t\t<p class=\"photographer__price\">").concat(this.price, "\u20AC/jour</p>\n\t\t\t</div>\n\t\t\t<div class=\"photographer__tags\">") + this.tagsForPhotographersCards() + "</div>\n\t\t</article>\n\t\t";
    }
    /**
     * Construct all tags in the photographer's card on photographer's profil page
     * @returns A string that contain all Dom Elements for each tag
     */

  }, {
    key: "photographerHeader",
    get:
    /**
     * To construct a photographer's card on photographer's profil page
     * @returns A string that correspond to the DOM elements for a photographer's card on photographer's profil page
     */
    function get() {
      return "\n\t\t<article class=\"photographer__profil\">\n\t\t\t<div class=\"photographer__body\">\n\t\t\t\t<div class=\"photographer__content\">\n\t\t\t\t\t<h1 class=\"photographer__name\">".concat(this.name, "</h1>\n\t\t\t\t\t<p class=\"photographer__location\">").concat(this.city, ", ").concat(this.country, "</p>\n\t\t\t\t\t<p class=\"photographer__tagline\">").concat(this.tagline, "</p>\n\t\t\t\t\t<div class=\"photographer__tags\">") + this.tagsForPhotographerHeader() + "</div>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"photographer__contactButton\">Contactez-moi</button>\n\t\t\t</div>\n\t\t\t<img class=\"photographer__img\" src=\"../public/images/photographers/id_photos/".concat(this.portrait, "\" alt=\"").concat(this.name, "\">\n\t\t</article>\n\t\t");
    }
    /**
     *  Construct the Dom Element withe the photographer's name for the contact form on photographer's profil page
     * @returns A string that contain the DOM element with the photographer's name
     */

  }, {
    key: "photographerNameInForm",
    get: function get() {
      return "\n\t\t\t<h1 class=\"modal__head\" id=\"contact\">Contactez-moi </br> ".concat(this.name, "</h1>\n\t\t");
    }
  }]);

  return Photographer;
}();


;// CONCATENATED MODULE: ./src/class/Filter.js
function Filter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Filter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Filter_createClass(Constructor, protoProps, staticProps) { if (protoProps) Filter_defineProperties(Constructor.prototype, protoProps); if (staticProps) Filter_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class to create a filter
 */
var Filter = /*#__PURE__*/function () {
  /**
   * 
   * @param {string} filter 
   */
  function Filter(filter) {
    Filter_classCallCheck(this, Filter);

    this.filter = filter;
  }
  /**
   * To construct the Dom Element of a tag in the header of the Home page
   * @return A string that correspond to a Dom Element that contain the filter
   */


  Filter_createClass(Filter, [{
    key: "displayFilter",
    get: function get() {
      return "\n\t\t<li class=\"header__filter-list-item\">\n\t\t\t<a href=\"./index.html?tag=".concat(this.filter, "\" class=\"header__filter-tag\">#").concat(this.filter, "</a>\n\t\t</li>\n\t\t");
    }
  }]);

  return Filter;
}();


;// CONCATENATED MODULE: ./src/service/api.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/**
 * Function that get Data of an URL and parsed as Json format
 * @returns parsed data as json format
 */

var parseDataToJson = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = 'https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json';
            _context.next = 3;
            return fetch(url);

          case 3:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", response.json());

          case 8:
            console.error(response.status);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function parseDataToJson() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Function that waiting parsed Data as Json format 
 * and uses a loop to instantiate a new Photographer class for each photographer
 * @param {object} jsonData parsed data as json format
 * @returns an array of instantiations of the Photographer class
 */


var getPhotographers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(jsonData) {
    var data, photographers, photographersArray;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return jsonData;

          case 2:
            data = _context2.sent;
            photographers = data.photographers;
            photographersArray = [];
            photographers.map(function (data) {
              photographersArray.push(new Photographer_Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id));
            });
            return _context2.abrupt("return", photographersArray);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPhotographers(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Function that waiting parsed Data as Json format 
 * and uses a loop to instantiate a new Photographer class according to the photographer's id
 * @param {object} jsonData parsed data as json format
 * @param {number} id The id of the photographer get in URL's parameter
 * @returns An instantiations of the Photographer class
 */


var getPhotographersById = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(jsonData, id) {
    var data, photographers, photographerArray;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return jsonData;

          case 2:
            data = _context3.sent;
            photographers = data.photographers;
            photographerArray = [];
            photographers.map(function (data) {
              // if the Id in URL's parameter is the same as the photographer's id, then create an instance of Photographer
              if (id == data.id) {
                photographerArray.push(new Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id));
              }
            });
            return _context3.abrupt("return", photographerArray);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPhotographersById(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}()));
/**
 * Function that waiting parsed Data as Json format
 * and instantiates new filter class for each tags
 * @param {object} jsonData parsed data as json format
 * @returns An array of instantiations of the filter class
 */


var getTagsFromPhotographers = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(jsonData) {
    var data, photographers, filters, _iterator, _step, photographer, _iterator2, _step2, tag, tags;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return jsonData;

          case 2:
            data = _context4.sent;
            photographers = data.photographers;
            filters = []; // Loop to remove duplicate tags

            _iterator = _createForOfIteratorHelper(photographers);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                photographer = _step.value;
                _iterator2 = _createForOfIteratorHelper(photographer.tags);

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    tag = _step2.value;

                    if (!filters.includes(tag)) {
                      filters.push(tag);
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            tags = []; // Loop to create instanciation of filter for each tags

            filters.map(function (filter) {
              return tags.push(new Filter(filter));
            });
            return _context4.abrupt("return", tags);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getTagsFromPhotographers(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Function that waiting parsed Data as Json format 
 * and uses a loop to instantiate a new media class according to the media's id
 * @param {object} jsonData parsed data as json format
 * @param {number} id The id of the photographer get in URL's parameter
 * @param {string} filter option in the select element on photographer's profil page
 * @returns An array of instantiations of Media for each media
 */


var getMediaByPhotographerId = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(jsonData, id, filter) {
    var data, media, mediaArray;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return jsonData;

          case 2:
            data = _context5.sent;
            media = data.media;
            mediaArray = [];
            media.map(function (media) {
              // if the Id in URL's parameter is the same as the media's id, then create an instance of Photographer
              if (id == media.photographerId) {
                mediaArray.push(new Media(media.title, media['image'] ? media.image : media.video, media.likes, media.altTxt, media['image'] ? 'image' : 'video', media.date));
              }
            });
            sortMediaByFilter(mediaArray, filter);
            return _context5.abrupt("return", mediaArray);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getMediaByPhotographerId(_x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}()));
/**
 * Sorts an array according to the filter passed in parameter
 * @param {object[]} media Array of instantiations of the media class
 * @param {string} filter option in the select element on photographer's profil page
 * @returns An array of objects sorted by a filter 
 */


var sortMediaByFilter = function sortMediaByFilter(media, filter) {
  switch (filter) {
    case 'likes':
      return media.sort(function (a, b) {
        return b[filter] - a[filter];
      });

    case 'title':
      return media.sort(function (a, b) {
        if (a[filter] < b[filter]) {
          return -1;
        }

        if (a[filter] > b[filter]) {
          return 1;
        }

        return 0;
      });

    case 'date':
      return media.sort(function (a, b) {
        return new Date(b[filter]) - new Date(a[filter]);
      });

    default:
      break;
  }
};


;// CONCATENATED MODULE: ./src/index.js
function src_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = src_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }

function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var dom = {
  photographersContainer: document.querySelector('.photographers'),
  filtersList: document.querySelector('.header__filter-list')
}; // to display tags in the header

var tags = getTagsFromPhotographers(parseDataToJson());
tags.then(function (tags) {
  return tags.map(function (tag) {
    // displatFilter is a getter of Filter Class
    dom.filtersList.insertAdjacentHTML('beforeend', tag.displayFilter);
  });
}); // get tag param to filter

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var paramTag = urlParams.get('tag'); // to display photographers cards

var photographers = getPhotographers(parseDataToJson());
photographers.then(function (photographers) {
  photographers.map(function (photographer) {
    // if there are not a tag in URL's parameter, then it insert the photographers' cards
    if (paramTag == null) {
      dom.photographersContainer.insertAdjacentHTML('beforeend', photographer.photographerCard);
    } // else if there are a tag in URL's parameter, then create a loop to browse the tags of each photographer
    else {
      var _iterator = src_createForOfIteratorHelper(photographer.tags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;

          // if the paramter tag in the URL matches with on of the photographer's tag, 
          // then insert the photographers' cards
          if (paramTag == tag) {
            // phototographerCard is a getter of the Photographer Class
            dom.photographersContainer.insertAdjacentHTML('beforeend', photographer.photographerCard);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  });
}); // display "go to content" link on scroll

var contentLink = document.querySelector('.anchor');
window.addEventListener('scroll', function () {
  // Displays the link only if the user's screen width is greater than 1023
  if (document.documentElement.clientWidth > 1023) {
    contentLink.style.display = 'block';
  }
});
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map