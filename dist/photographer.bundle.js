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


;// CONCATENATED MODULE: ./photographers/src/class/Media.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function Media_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Media_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Media_createClass(Constructor, protoProps, staticProps) { if (protoProps) Media_defineProperties(Constructor.prototype, protoProps); if (staticProps) Media_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class to create a media
 */
var Media = /*#__PURE__*/function () {
  /**
   * 
   * @param {string} title The title of the media
   * @param {string} filename The filnename with the extension of the media
   * @param {number} likes The number of like of the media
   * @param {string} typeMedia The type the media (image/video)
   * @param {Date} date The date of the media 
   * @param {string} altTxt Alternatif Text for media
   */
  function Media(title, filename, likes, altTxt, typeMedia, date) {
    Media_classCallCheck(this, Media);

    this.title = title;
    this.filename = filename;
    this.likes = likes;
    this.typeMedia = typeMedia;
    this.date = date;
    this.altTxt = altTxt;
  }
  /**
   * Create a media according to its type (image or video)
   * @returns an instance of a video or image 
   */


  Media_createClass(Media, [{
    key: "createMedia",
    value: function createMedia() {
      switch (this.typeMedia) {
        case 'image':
          return new Media_Image(this.title, this.filename, this.likes, this.altTxt).createImage;

        case 'video':
          return new Video(this.title, this.filename, this.likes, this.altTxt).createVideo;

        default:
          break;
      }
    }
  }]);

  return Media;
}();
/**
 * Create a class image
 */




var Media_Image = /*#__PURE__*/function (_Media) {
  _inherits(Image, _Media);

  var _super = _createSuper(Image);

  /**
   * 
   * @param {String} title The title of the image given by the instantiation of the media class
   * @param {string} filename The filname of the image given by the instantiation of the media class
   * @param {number} likes The number of like of the image given by the instantiation of the media class
   */
  function Image(title, filename, likes, altTxt) {
    Media_classCallCheck(this, Image);

    return _super.call(this, title, filename, likes, altTxt);
  }
  /**
   * Construct the Dom Element of an image
   * @returns A string that contain the Dom Elements of the image
   */


  Media_createClass(Image, [{
    key: "createImage",
    get: function get() {
      console.log(this.altTxt);
      return "\n\t\t\t<article class=\"media__card\">\n\t\t\t\t<a href=\"../public/images/photographers/photos/".concat(this.filename, "\">\n\t\t\t\t\t<img src=\"../public/images/photographers/photos/").concat(this.filename, "\" alt=\"").concat(this.altTxt, "\" class=\"media__thumb\">\n\t\t\t\t</a>\n\t\t\t\t<div class=\"media__content\">\n\t\t\t\t\t<h2 class=\"media__title\">").concat(this.title, "</h2>\n\t\t\t\t\t<div class=\"media__likes\" tabindex=\"0\">\n\t\t\t\t\t\t<p class=\"media__number\">").concat(this.likes, "</p>\n\t\t\t\t\t\t<svg role=\"img\" class=\"media__heart\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"likes\" aria-describedby=\"title-").concat(this.title.substring(0, 3), " description-").concat(this.title.substring(0, 3), "\">\n\t\t\t\t\t\t\t<title id=\"title-").concat(this.title.substring(0, 3), "\">Likes</title>\n\t\t\t\t\t\t\t<desc id=\"description-").concat(this.title.substring(0, 3), "\">Icone en forme de c\u0153ur</desc>\n\t\t\t\t\t\t\t<path d=\"M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z\" fill=\"#911C1C\"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</article>");
    }
  }]);

  return Image;
}(Media);

var Video = /*#__PURE__*/function (_Media2) {
  _inherits(Video, _Media2);

  var _super2 = _createSuper(Video);

  /**
   * 
   * @param {String} title The title of the video given by the instantiation of the media class
   * @param {string} filename The filname of the video given by the instantiation of the media class
   * @param {number} likes The number of like of the video given by the instantiation of the media class
   */
  function Video(title, filename, likes, altTxt) {
    Media_classCallCheck(this, Video);

    return _super2.call(this, title, filename, likes, altTxt);
  }
  /**
   * Construct the Dom Element of a video
   * @returns A string that contain the Dom Elements of the video
   */


  Media_createClass(Video, [{
    key: "createVideo",
    get: function get() {
      return "\n\t\t\t<article class=\"media__card\">\n\t\t\t\t<a href=\"../public/images/photographers/videos/".concat(this.filename, "\" >\n\t\t\t\t\t<div class=\"media__playIcon\"></div>\n\t\t\t\t\t<video class=\"media__thumb\" aria-labelledby=\"summary\">\n\t\t\t\t\t\t<source src=\"../public/images/photographers/videos/").concat(this.filename, "\"\n\t\t\t\t\t\ttype=\"video/mp4\">\n\t\t\t\t\t\t<div id=\"summary\">").concat(this.altTxt, "</div>\n\t\t\t\t\t</video>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"media__content\">\n\t\t\t\t\t<h2 class=\"media__title\">").concat(this.title, "</h2>\n\t\t\t\t\t<div class=\"media__likes\" tabindex=\"0\">\n\t\t\t\t\t\t<p class=\"media__number\">").concat(this.likes, "</p>\n\t\t\t\t\t\t<svg role=\"img\" class=\"media__heart\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"likes\" aria-describedby=\"title-").concat(this.title.substring(0, 3), " description-").concat(this.title.substring(0, 3), "\">\n\t\t\t\t\t\t\t<title id=\"title-").concat(this.title.substring(0, 3), "\">Likes</title>\n\t\t\t\t\t\t\t<desc id=\"description-").concat(this.title.substring(0, 3), "\">Icone en forme de c\u0153ur</desc>\n\t\t\t\t\t\t\t<path d=\"M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z\" fill=\"#911C1C\"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</article>");
    }
  }]);

  return Video;
}(Media);
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


var getPhotographers = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
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
              photographersArray.push(new Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id));
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
}()));
/**
 * Function that waiting parsed Data as Json format 
 * and uses a loop to instantiate a new Photographer class according to the photographer's id
 * @param {object} jsonData parsed data as json format
 * @param {number} id The id of the photographer get in URL's parameter
 * @returns An instantiations of the Photographer class
 */


var getPhotographersById = /*#__PURE__*/function () {
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
                photographerArray.push(new Photographer_Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id));
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
}();
/**
 * Function that waiting parsed Data as Json format
 * and instantiates new filter class for each tags
 * @param {object} jsonData parsed data as json format
 * @returns An array of instantiations of the filter class
 */


var getTagsFromPhotographers = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
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
}()));
/**
 * Function that waiting parsed Data as Json format 
 * and uses a loop to instantiate a new media class according to the media's id
 * @param {object} jsonData parsed data as json format
 * @param {number} id The id of the photographer get in URL's parameter
 * @param {string} filter option in the select element on photographer's profil page
 * @returns An array of instantiations of Media for each media
 */


var getMediaByPhotographerId = /*#__PURE__*/function () {
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
}();
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


;// CONCATENATED MODULE: ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

var setPositionFixed = function setPositionFixed() {
  return window.requestAnimationFrame(function () {
    // If previousBodyPosition is already set, don't set it again.
    if (previousBodyPosition === undefined) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };

      // Update the dom inside an animation frame 
      var _window = window,
          scrollY = _window.scrollY,
          scrollX = _window.scrollX,
          innerHeight = _window.innerHeight;

      document.body.style.position = 'fixed';
      document.body.style.top = -scrollY;
      document.body.style.left = -scrollX;

      setTimeout(function () {
        return window.requestAnimationFrame(function () {
          // Attempt to check if the bottom bar appeared due to the position change
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            // Move the content further up so that the bottom bar doesn't hide it
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};

var restorePositionSetting = function restorePositionSetting() {
  if (previousBodyPosition !== undefined) {
    // Convert the position from "px" to Int
    var y = -parseInt(document.body.style.top, 10);
    var x = -parseInt(document.body.style.left, 10);

    // Restore styles
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;

    // Restore scroll
    window.scrollTo(x, y);

    previousBodyPosition = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  }

  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  }

  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
};


;// CONCATENATED MODULE: ./photographers/src/class/Lightbox.js
function Lightbox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Lightbox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Lightbox_createClass(Constructor, protoProps, staticProps) { if (protoProps) Lightbox_defineProperties(Constructor.prototype, protoProps); if (staticProps) Lightbox_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @property {HTMLElement} element
 * @property {string[]} images lightbox image paths
 * @property {string} url image currently displayed
 */

var Lightbox = /*#__PURE__*/function () {
  /**
   * 
   * @param {string} url Image's URL
   * @param {string[]} media lightbox media paths
   */
  function Lightbox(url, media, titles, index) {
    Lightbox_classCallCheck(this, Lightbox);

    this.element = this.buildDOM();
    this.media = media;
    this.titles = titles;
    this.index = index;
    this.loadMedia(url, this.titles, this.index);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    disableBodyScroll(this.element);
    document.addEventListener('keyup', this.onKeyUp);
  }
  /**
   * 
   * @param {string} url Image's URL
   */


  Lightbox_createClass(Lightbox, [{
    key: "loadMedia",
    value: function loadMedia(url, titles, index) {
      this.url = null;
      var imageContainer = this.element.querySelector('.lightbox__image'); // to display a loader

      var loader = document.createElement('div');
      loader.classList.add('lightbox__loader'); // const imageContainer = document.createElement('div')
      // to display the close button

      imageContainer.innerHTML = '<button class="lightbox__close lightbox__button">Close dialog</button>';
      imageContainer.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this));
      imageContainer.appendChild(loader); // container.appendChild(imageContainer)

      this.url = url; // for images

      if (url.includes('.jpg')) {
        var image = new Image();

        image.onload = function () {
          imageContainer.removeChild(loader);
          imageContainer.appendChild(image);
        };

        image.classList.add('lightbox__media');
        image.src = url;
      } // for videos


      if (url.includes('.mp4')) {
        var video = document.createElement('VIDEO');

        video.onloadeddata = function () {
          imageContainer.removeChild(loader);
          imageContainer.appendChild(video);
        };

        video.setAttribute('src', url);
        video.setAttribute('controls', 'controls');
        video.classList.add('lightbox__media');
      } // // display title


      var titleArray = [];
      titles.forEach(function (title) {
        titleArray.push(title.innerHTML);
      });
      var lightboxContainer = this.element.querySelector('.lightbox__container');
      var title = document.querySelector('.lightbox__title');

      if (title) {
        lightboxContainer.removeChild(title);
      }

      var titleElement = document.createElement('h2');
      titleElement.classList.add('lightbox__title');
      titleElement.innerHTML = titleArray[index];
      lightboxContainer.appendChild(titleElement);
    }
    /**
     * 
     * @param {KeyboardEvent} e 
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      if (e.key === 'Escape') {
        this.close(e);
      } else if (e.key === 'ArrowLeft') {
        this.previous(e);
      } else if (e.key === 'ArrowRight') {
        this.next(e);
      }
    }
    /**
     * Close the lightbox
     * @param {MouseEvent|KeyboardEvent} e 
     */

  }, {
    key: "close",
    value: function close(e) {
      var _this = this;

      e.preventDefault();
      this.element.classList.add('fadeout');
      enableBodyScroll(this.element);
      window.setTimeout(function () {
        _this.element.parentElement.removeChild(_this.element);
      }, 500);
      document.removeEventListener('keyup', this.onKeyUp);
    }
    /**
     * Close the lightbox
     * @param {MouseEvent|KeyboardEvent} e 
     */

  }, {
    key: "next",
    value: function next(e) {
      var _this2 = this;

      e.preventDefault();
      var position = this.media.findIndex(function (media) {
        return media === _this2.url;
      });

      if (position === this.media.length - 1) {
        position = -1;
      }

      this.index = this.index + 1;

      if (this.index == 10) {
        this.index = 0;
      }

      this.loadMedia(this.media[position + 1], this.titles, this.index);
    }
    /**
     * Close the lightbox
     * @param {MouseEvent|KeyboardEvent} e 
     */

  }, {
    key: "previous",
    value: function previous(e) {
      var _this3 = this;

      e.preventDefault();
      var position = this.media.findIndex(function (media) {
        return media === _this3.url;
      });

      if (position === 0) {
        position = this.media.length;
      }

      this.index = this.index - 1;

      if (this.index == -1) {
        this.index = this.media.length - 1;
      }

      this.loadMedia(this.media[position - 1], this.titles, this.index);
    }
    /**
     * 
     * @param {string} url Image's URL
     * @return {HTMLElement}
     */

  }, {
    key: "buildDOM",
    value: function buildDOM() {
      var dom = document.createElement('div');
      dom.classList.add('lightbox');
      dom.setAttribute('aria-label', 'image closeup view');
      dom.innerHTML = "<button class=\"lightbox__next lightbox__button\">Next image</button>\n\t\t\t<button class=\"lightbox__previous lightbox__button\">Previous image</button>\n\t\t\t<div class=\"lightbox__container\" aria-label=\"image closeup view\">\n\t\t\t\t<div class=\"lightbox__image\"></div>\n\t\t\t</div>";
      dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this));
      dom.querySelector('.lightbox__previous').addEventListener('click', this.previous.bind(this));
      return dom;
    }
  }], [{
    key: "init",
    value: function init() {
      var links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'));
      var gallery = links.map(function (link) {
        return link.getAttribute('href');
      });
      links.forEach(function (link) {
        return link.addEventListener('click', function (e) {
          e.preventDefault();
          var titles = document.querySelectorAll('.media__title');
          var index = gallery.indexOf(e.currentTarget.getAttribute('href'));
          new Lightbox(e.currentTarget.getAttribute('href'), gallery, titles, index);
        });
      });
    }
  }]);

  return Lightbox;
}();


;// CONCATENATED MODULE: ./photographers/src/class/Modal.js
function Modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) Modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) Modal_defineProperties(Constructor, staticProps); return Constructor; }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Modal = /*#__PURE__*/function () {
  function Modal() {
    Modal_classCallCheck(this, Modal);
  }

  Modal_createClass(Modal, null, [{
    key: "onKeyUp",
    value: // DOM    

    /**
     * Method to init modal's event
     */

    /**
     * 
     * @param {KeyboardEvent} e 
     */
    function onKeyUp(e) {
      if (e.key === 'Escape') this.closeModal();
    }
    /**
     * launch modal form and add focus on first
     */

  }]);

  return Modal;
}();

Modal_defineProperty(Modal, "element", {
  contact: document.querySelector('.photographer__contactButton'),
  modal: document.querySelector('.modal'),
  close: document.querySelector('.modal__close')
});

Modal_defineProperty(Modal, "modalEvents", function () {
  document.querySelector('.photographer__contactButton').addEventListener('click', function () {
    Modal.launchModal();
  });
  document.querySelector('.modal__close').addEventListener('click', function () {
    Modal.closeModal();
  });
  document.addEventListener('keyup', Modal.onKeyUp.bind(Modal));
});

Modal_defineProperty(Modal, "launchModal", function () {
  disableBodyScroll(document.body);
  document.querySelector('.modal').style.display = 'flex';
  document.querySelectorAll('.form__text')[0].focus();
});

Modal_defineProperty(Modal, "closeModal", function () {
  enableBodyScroll(document.body);
  Modal.element.modal.style.display = 'none';
  document.removeEventListener('keyup', Modal.onKeyUp);
  document.querySelector('.photographer__contactButton').focus();
});


;// CONCATENATED MODULE: ./photographers/src/class/Validator.js
function Validator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Validator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Create a Validator
 */
var Validator =
/**
 * 
 * @param {object} inputs Inputs in the form
 * @param {HTMLElement[]} containerInput Container for each labels/inputs
 */
function Validator(inputs, containerInput) {
  var _this = this;

  Validator_classCallCheck(this, Validator);

  Validator_defineProperty(this, "valid", true);

  Validator_defineProperty(this, "nameValidation", function (element, regex) {
    return element.value == '' || element.value.length < 2 || !regex.test(element.value) ? false : true;
  });

  Validator_defineProperty(this, "emailValidation", function (element, regex) {
    return !regex.test(element.value) ? false : true;
  });

  Validator_defineProperty(this, "textareaValidation", function (element, regex) {
    return !regex.test(element.value) ? false : true;
  });

  Validator_defineProperty(this, "removeErrorMessage", function () {
    _this.valid = true;
    Array.from(_this.containerInput).map(function (field) {
      field.removeAttribute('data-error-visible');
    });
  });

  Validator_defineProperty(this, "launchValidation", function () {
    _this.removeErrorMessage(); // a loop that will go through all the inputs 


    for (var input in _this.inputs) {
      switch (input) {
        case 'firstname':
          if (!_this.nameValidation(_this.inputs[input].element, _this.inputs[input].regex)) {
            _this.inputs[input].element.parentNode.setAttribute('data-error-visible', true);

            _this.valid = false;
          }

          break;

        case 'lastname':
          if (!_this.nameValidation(_this.inputs[input].element, _this.inputs[input].regex)) {
            _this.inputs[input].element.parentNode.setAttribute('data-error-visible', true);

            _this.valid = false;
          }

          break;

        case 'email':
          if (!_this.emailValidation(_this.inputs[input].element, _this.inputs[input].regex)) {
            _this.inputs[input].element.parentNode.setAttribute('data-error-visible', true);

            _this.valid = false;
          }

          break;

        case 'message':
          if (!_this.textareaValidation(_this.inputs[input].element, _this.inputs[input].regex)) {
            _this.inputs[input].element.parentNode.setAttribute('data-error-visible', true);

            _this.valid = false;
          }

          break;

        default:
          break;
      }
    }

    return _this.valid;
  });

  this.inputs = inputs;
  this.containerInput = containerInput;
};


;// CONCATENATED MODULE: ./photographers/src/configValidator.js
// @ts-check

/**
 * to reach all the inputs and configure the validation
 * @type {object} inputs
 * @property {HTMLElement} element
 * @property {object} regex
 */
var inputs = {
  firstname: {
    element: document.querySelector('#firstname'),
    regex: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
  },
  lastname: {
    element: document.querySelector('#lastname'),
    regex: /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ\s]{2,}$/
  },
  email: {
    element: document.querySelector('#email'),
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  message: {
    element: document.querySelector('#textArea'),
    regex: /^[a-zA-Z\-,.?!;*'")(_<>\séëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{1,}$/
  }
};
/**
 * to reach all containers of labels/inputs that display error messages for the form validation
 * @type {NodeListOf<Element>}
 */

var containerInput = document.querySelectorAll('.form__data');

;// CONCATENATED MODULE: ./photographers/src/displayTotalLikes.js
// to display the total number of media likes
var DomInfos = document.querySelector('.infos');
/**
 * 
 * @param {object} medias
 * @returns Insert HTML Element on photographer's Profil Page 
 */

var displayTotalLikesOfPhotographer = function displayTotalLikesOfPhotographer(medias) {
  medias.then(function (medias) {
    var totalLikes = 0;
    medias.map(function (media) {
      totalLikes += media.likes;
    });
    return DomInfos.insertAdjacentHTML('beforeend', "\n\t\t<div class=\"infos__likes\">\n\t\t\t<p class=\"infos__totalLikes\">".concat(totalLikes, "</p>\n\t\t\t<svg role=\"img\" class=\"infos__heart\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-describedby=\"title-").concat(totalLikes, " description-").concat(totalLikes, "\">\n\t\t\t\t<title id=\"title-").concat(totalLikes, "\">Likes</title>\n\t\t\t\t<desc id=\"description-").concat(totalLikes, "\">Icone en forme de c\u0153ur</desc>\n\t\t\t\t<path d=\"M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z\" fill=\"#000\"/>\n\t\t\t\t</svg>\n\t\t</div>\n\t\t"));
  });
};

/* harmony default export */ const displayTotalLikes = (displayTotalLikesOfPhotographer);
;// CONCATENATED MODULE: ./photographers/src/displayDailyPrice.js
// to display the price per day
var displayDailyPrice_DomInfos = document.querySelector('.infos');
/**
 * 
 * @param {array} photographer 
 */

var displayDailyPriceOfPhotographer = function displayDailyPriceOfPhotographer(photographer) {
  photographer.then(function (photographer) {
    // getPrice() is a method in Photographer Class
    displayDailyPrice_DomInfos.insertAdjacentHTML('beforeend', photographer[0].getPrice());
  });
};

/* harmony default export */ const displayDailyPrice = (displayDailyPriceOfPhotographer);
;// CONCATENATED MODULE: ./photographers/src/likes.js
/**
 * to increase or decrease the likes of a media and the total of likes
 */
var increaseOrDecreaseLikesAndTotalLikes = function increaseOrDecreaseLikesAndTotalLikes() {
  var likesElements = document.querySelectorAll('.media__likes');
  likesElements.forEach(function (like) {
    ['click', 'keyup'].forEach(function (event) {
      return like.addEventListener(event, function (e) {
        var totalLikes = document.querySelector('.infos__totalLikes');

        if (e.key == 'Enter') {
          if (!like.classList.contains('media__liked')) {
            increaseLikesAndTotalLikes(totalLikes, like);
          } else {
            decreaseLikesAndTotalLikes(totalLikes, like);
          }
        } else if (e.type == 'click') {
          if (!like.classList.contains('media__liked')) {
            increaseLikesAndTotalLikes(totalLikes, like);
          } else {
            decreaseLikesAndTotalLikes(totalLikes, like);
          }
        }
      });
    });
  });
};
/**
 * To increase the likes on a Media and the total of likes
 * @param {HTMLElement} totalLikes Reach the total of likes
 * @param {HTMLElement} like Reach the number of likes on a Media
 */


var increaseLikesAndTotalLikes = function increaseLikesAndTotalLikes(totalLikes, like) {
  ++totalLikes.innerText;
  ++like.children[0].innerText;
  like.classList.add('media__liked');
};
/**
 * To decrease the likes on a Media and the total of likes
 * @param {HTMLElement} totalLikes Reach the total of likes
 * @param {HTMLElement} like Reach the number of likes on a Media
 */


var decreaseLikesAndTotalLikes = function decreaseLikesAndTotalLikes(totalLikes, like) {
  --totalLikes.innerText;
  --like.children[0].innerText;
  like.classList.remove('media__liked');
};

/* harmony default export */ const likes = (increaseOrDecreaseLikesAndTotalLikes);
;// CONCATENATED MODULE: ./photographers/src/select.js
/**
 * 
 */
var displaySelectOptions = function displaySelectOptions() {
  var select = document.querySelector('.filter__custom-select');
  select.addEventListener('click', function () {
    var option = document.querySelector('.filter__custom-menu');
    var arrow = document.querySelector('.filter__custom-arrow', 'before'); // if the class is not present in the HTML Element then we add it

    if (!option.classList.contains('filter__show')) {
      option.classList.add('filter__show');
      arrow.style.transform = 'rotate(180deg)';
    } // else we remove it 
    else {
      arrow.style.transform = 'rotate(0deg)';
      option.classList.remove('filter__show');
    }
  });
};
/**
 * Hide the duplicated option that is selected in the select
 * @param {string} filter 
 * @param {NodeListOf<Element>} dom reach options of select
 */


var hideSelectedOptionInSelect = function hideSelectedOptionInSelect(filter, dom) {
  dom.forEach(function (option) {
    if (option.getAttribute('data-value') == filter) {
      option.classList.add('filter__selected');
    }
  });
};
/**
 * Remove the class from a duplicate option hidden in a select
 * @param {string} filter 
 * @param {NodeListOf<Element>} dom reach options of select
 */


var removeClassToHideDuplicateOptionInSelect = function removeClassToHideDuplicateOptionInSelect(filter, dom) {
  dom.forEach(function (option) {
    if (option.getAttribute('data-value') != filter) {
      option.classList.remove('filter__selected');
    }
  });
};


;// CONCATENATED MODULE: ./photographers/index.js









var dom = {
  inputSelect: document.querySelector('.filter__select'),
  photographerHeader: document.querySelector('.photographer'),
  nameInForm: document.querySelector('.modal__head'),
  media: document.querySelector('.media'),
  form: document.querySelector('.form'),
  modalForm: document.querySelector('.modal'),
  selectMenu: document.querySelector('.filter__custom-menu'),
  selectOption: document.querySelectorAll('.filter__custom-option')
}; // To get Id in Url's params

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var paramId = urlParams.get('id'); // To display photographer header

var photographers = getPhotographersById(parseDataToJson(), paramId);
photographers.then(function (photographers) {
  return photographers.map(function (photographer) {
    dom.photographerHeader.innerHTML = photographer.photographerHeader;
    dom.form.insertAdjacentHTML('beforebegin', photographer.photographerNameInForm);
  });
}); // To display media by Id and Filter

var filter = dom.selectOption[0].getAttribute('data-value');
/**
 * 
 * @param {number} id Id in the Url's params
 * @param {string} filter option in the select element
 */

var displayMediaByPhotographerById = function displayMediaByPhotographerById(id, filter) {
  var media = getMediaByPhotographerId(parseDataToJson(), id, filter);
  dom.media.innerHTML = '';
  media.then(function (media) {
    return media.map(function (media) {
      dom.media.innerHTML += media.createMedia();
    });
  });
  hideSelectedOptionInSelect(filter, dom.selectOption);
};

displayMediaByPhotographerById(paramId, filter); // Change the order of Media by creating a click listener on select's options
// And by changing value of the select 

dom.selectOption.forEach(function (option) {
  return option.addEventListener('click', function () {
    filter = option.getAttribute('data-value');
    displayMediaByPhotographerById(paramId, filter);
    removeClassToHideDuplicateOptionInSelect(filter, dom.selectOption);
    dom.inputSelect.setAttribute('data-value', option.innerText); // need to initialize the lightboxand likes after the order of the media

    setTimeout(function () {
      Lightbox.init();
      likes();
    }, 1000);
  });
}); // Change the order of Media by creating a keyup listener on select's options
// And by changing value of the select 

dom.selectOption.forEach(function (option) {
  return option.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
      filter = option.getAttribute('data-value');
      displayMediaByPhotographerById(paramId, filter);
      removeClassToHideDuplicateOptionInSelect(filter, dom.selectOption);
      dom.inputSelect.setAttribute('data-value', option.innerText);
      dom.inputSelect.focus();
      dom.selectMenu.classList.remove('filter__show');
    } // need to initialize the lightbox and likes after the order of the media


    setTimeout(function () {
      Lightbox.init();
      likes();
    }, 1500);
  });
}); // To validate the form

var validator = new Validator(inputs, containerInput);
dom.form.addEventListener('click', function (e) {
  e.preventDefault(); // if the condition return true, then reset the form and close the modal

  if (validator.launchValidation()) {
    dom.form.reset();
    dom.modalForm.style.display = 'none';
  }
}); // To fill the card about total of likes and daily price

displayTotalLikes(getMediaByPhotographerId(parseDataToJson(), paramId));
displayDailyPrice(photographers); // to init modal, lightbox, select event and init event listener on likes elements

setTimeout(function () {
  Modal.modalEvents();
  Lightbox.init();
  likes();
  displaySelectOptions();
}, 1000);
/******/ })()
;
//# sourceMappingURL=photographer.bundle.js.map