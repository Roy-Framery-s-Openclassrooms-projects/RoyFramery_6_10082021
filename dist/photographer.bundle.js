/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/class/Photographer.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Photographer_Photographer = /*#__PURE__*/function () {
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
        spanTags += "<span class=\"photographer__tag\"><a href=\"../../index.html?tag=".concat(_this.tags[i], "\">#").concat(_this.tags[i], "</a></span>");
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
    get: function get() {
      return "\n\t\t<acticle class=\"photographer\">\n\t\t\t<a href=\"./photographers/index.html?id=".concat(this.id, "\" class=\"photographer__header\">\n\t\t\t\t<img class=\"photographer__img\" src=\"public/images/photographers/id_photos/").concat(this.portrait, "\" alt=\"\">\n\t\t\t\t<h2 class=\"photographer__name\">").concat(this.name, "</h2>\n\t\t\t</a>\n\t\t\t<div class=\"photographer__content\">\n\t\t\t\t<p class=\"photographer__location\">").concat(this.city, ", ").concat(this.country, "</p>\n\t\t\t\t<p class=\"photographer__tagline\">").concat(this.tagline, "</p>\n\t\t\t\t<p class=\"photographer__price\">").concat(this.price, "\u20AC/jour</p>\n\t\t\t</div>\n\t\t\t<div class=\"photographer__tags\">") + this.tagsForPhotographersCards() + "</div>\n\t\t</acticle>\n\t\t";
    }
  }, {
    key: "photographerHeader",
    get: function get() {
      return "\n\t\t<acticle class=\"photographer__profil\">\n\t\t\t<div class=\"photographer__body\">\n\t\t\t\t<div class=\"photographer__content\">\n\t\t\t\t\t<h1 class=\"photographer__name\">".concat(this.name, "</h1>\n\t\t\t\t\t<p class=\"photographer__location\">").concat(this.city, ", ").concat(this.country, "</p>\n\t\t\t\t\t<p class=\"photographer__tagline\">").concat(this.tagline, "</p>\n\t\t\t\t\t<div class=\"photographer__tags\">") + this.tagsForPhotographerHeader() + "</div>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"photographer__contactButton\">Contactez-moi</button>\n\t\t\t</div>\n\t\t\t<img class=\"photographer__img\" src=\"../../public/images/photographers/id_photos/".concat(this.portrait, "\" alt=\"\">\n\t\t</acticle>\n\t\t");
    }
  }, {
    key: "photographerNameInForm",
    get: function get() {
      return "\n\t\t\t<p class=\"modal__photographer-name\">".concat(this.name, "</p>\n\t\t");
    }
  }]);

  return Photographer;
}();


;// CONCATENATED MODULE: ./src/class/Media.js
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

var Media = /*#__PURE__*/function () {
  function Media(title, filename, likes, typeMedia, date) {
    Media_classCallCheck(this, Media);

    this.title = title;
    this.filename = filename;
    this.likes = likes;
    this.typeMedia = typeMedia;
    this.date = date;
  }

  Media_createClass(Media, [{
    key: "createMedia",
    value: function createMedia() {
      switch (this.typeMedia) {
        case 'image':
          return new Media_Image(this.title, this.filename, this.likes).createImage;

        case 'video':
          return new Video(this.title, this.filename, this.likes).createVideo;

        default:
          break;
      }
    }
  }]);

  return Media;
}();



var Media_Image = /*#__PURE__*/function (_Media) {
  _inherits(Image, _Media);

  var _super = _createSuper(Image);

  function Image(title, filename, likes) {
    Media_classCallCheck(this, Image);

    return _super.call(this, title, filename, likes);
  }

  Media_createClass(Image, [{
    key: "createImage",
    get: function get() {
      return "\n\t\t\t<artcle class=\"media__card\">\n\t\t\t\t<a href=\"../public/images/photographers/photos/".concat(this.filename, "\">\n\t\t\t\t\t<img src=\"../public/images/photographers/photos/").concat(this.filename, "\" class=\"media__thumb\">\n\t\t\t\t</a>\n\t\t\t\t<div class=\"media__content\">\n\t\t\t\t\t<h2 class=\"media__title\">").concat(this.title, "</h2>\n\t\t\t\t\t<div class=\"media__likes\">\n\t\t\t\t\t\t<p class=\"media__number\">").concat(this.likes, "</p>\n\t\t\t\t\t\t<svg role=\"image\" class=\"media__heart\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<title id=\"title\">Likes</title>\n\t\t\t\t\t\t\t<desc id=\"description\">Icone en forme de c\u0153ur</desc>\n\t\t\t\t\t\t\t<path d=\"M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z\" fill=\"#911C1C\"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</artcle>");
    }
  }]);

  return Image;
}(Media);

var Video = /*#__PURE__*/function (_Media2) {
  _inherits(Video, _Media2);

  var _super2 = _createSuper(Video);

  function Video(title, filename, likes) {
    Media_classCallCheck(this, Video);

    return _super2.call(this, title, filename, likes);
  }

  Media_createClass(Video, [{
    key: "createVideo",
    get: function get() {
      return "\n\t\t\t<artcle class=\"media__card\">\n\t\t\t\t<a href=\"../public/images/photographers/videos/".concat(this.filename, "\" >\n\t\t\t\t<div class=\"media__playIcon\"></div>\n\t\t\t\t\t<video class=\"media__thumb\">\n\t\t\t\t\t\t<source src=\"../public/images/photographers/videos/").concat(this.filename, "\"\n\t\t\t\t\t\ttype=\"video/mp4\">\n\t\t\t\t\t</video>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"media__content\">\n\t\t\t\t\t<h2 class=\"media__title\">").concat(this.title, "</h2>\n\t\t\t\t\t<div class=\"media__likes\">\n\t\t\t\t\t\t<p class=\"media__number\">").concat(this.likes, "</p>\n\t\t\t\t\t\t<svg role=\"image\" class=\"media__heart\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<title id=\"title\">Likes</title>\n\t\t\t\t\t\t\t<desc id=\"description\">Icone en forme de c\u0153ur</desc>\n\t\t\t\t\t\t\t<path d=\"M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z\" fill=\"#911C1C\"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</artcle>");
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

var getMedias = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    var datas, medias;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return data;

          case 2:
            datas = _context2.sent;
            medias = datas.media;
            medias.map(function (data) {
              return data;
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMedias(_x) {
    return _ref2.apply(this, arguments);
  };
}()));

var getPhotographers = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(jsonData) {
    var data, photographers, photographersArray;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return jsonData;

          case 2:
            data = _context3.sent;
            photographers = data.photographers;
            photographersArray = [];
            photographers.map(function (data) {
              photographersArray.push(new Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id));
            });
            return _context3.abrupt("return", photographersArray);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPhotographers(_x2) {
    return _ref3.apply(this, arguments);
  };
}()));

var getPhotographersById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(jsonData, id) {
    var data, photographers, photographerArray;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return jsonData;

          case 2:
            data = _context4.sent;
            photographers = data.photographers;
            photographerArray = [];
            photographers.map(function (data) {
              if (id == data.id) {
                photographerArray.push(new Photographer_Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id));
              }
            });
            return _context4.abrupt("return", photographerArray);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getPhotographersById(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var getTagsFromPhotographers = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(photographersData) {
    var data, photographers, filters, _iterator, _step, photographer, _iterator2, _step2, tag, tags;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return photographersData;

          case 2:
            data = _context5.sent;
            photographers = data.photographers;
            filters = [];
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

            tags = [];
            filters.map(function (filter) {
              return tags.push(new Filter(filter));
            });
            return _context5.abrupt("return", tags);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getTagsFromPhotographers(_x5) {
    return _ref5.apply(this, arguments);
  };
}()));

var getMediaByPhotographerId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(jsonData, id, filter) {
    var data, media, mediaArray;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return jsonData;

          case 2:
            data = _context6.sent;
            media = data.media;
            mediaArray = [];
            media.map(function (media) {
              if (id == media.photographerId) {
                mediaArray.push(new Media(media.title, media['image'] ? media.image : media.video, media.likes, media['image'] ? 'image' : 'video', media.date));
              }
            });
            sortMediaByFilter(mediaArray, filter);
            return _context6.abrupt("return", mediaArray);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getMediaByPhotographerId(_x6, _x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();

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

      imageContainer.innerHTML = '<button class="lightbox__close lightbox__button">Fermer</button>';
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
      if (position === this.media.length - 1) position = -1;
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
      if (position === 0) position = this.media.length;
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
      dom.innerHTML = "<button class=\"lightbox__next lightbox__button\">Suivant</button>\n\t\t\t<button class=\"lightbox__previous lightbox__button\">Pr\xE9c\xE9dent</button>\n\t\t\t<div class=\"lightbox__container\" aria-label=\"image closeup view\">\n\t\t\t\t<div class=\"lightbox__image\"></div>\n\t\t\t</div>";
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
     * 
     * @param {KeyboardEvent} e 
     */
    function onKeyUp(e) {
      if (e.key === 'Escape') this.closeModal();
    } // launch modal form

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
  document.querySelector('.modal').style.display = 'flex';
});

Modal_defineProperty(Modal, "closeModal", function () {
  Modal.element.modal.style.display = 'none';
  document.removeEventListener('keyup', Modal.onKeyUp);
});


;// CONCATENATED MODULE: ./photographers/src/class/Validator.js
function Validator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Validator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Validator = function Validator(inputs, containerInput) {
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
    _this.removeErrorMessage();

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
// to reach all the inputs and configure the validation
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
}; // to reach all elements that display error messages for the form validation

var containerInput = document.querySelectorAll('.form__data');

;// CONCATENATED MODULE: ./photographers/src/displayTotalLikes.js
// to display the total number of media likes
var DomInfos = document.querySelector('.infos');

var displayTotalLikesOfPhotographer = function displayTotalLikesOfPhotographer(medias) {
  medias.then(function (medias) {
    var totalLikes = 0;
    medias.map(function (media) {
      totalLikes += media.likes;
    });
    return DomInfos.insertAdjacentHTML('beforeend', "\n\t\t<div class=\"infos__likes\">\n\t\t\t<p class=\"infos__totalLikes\">".concat(totalLikes, "</p>\n\t\t\t<svg role=\"image\" class=\"infos__heart\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<title id=\"title\">Likes</title>\n\t\t\t\t<desc id=\"description\">Icone en forme de c\u0153ur</desc>\n\t\t\t\t<path d=\"M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z\" fill=\"#000\"/>\n\t\t\t\t</svg>\n\t\t</div>\n\t\t"));
  });
};

/* harmony default export */ const displayTotalLikes = (displayTotalLikesOfPhotographer);
;// CONCATENATED MODULE: ./photographers/src/displayDailyPrice.js
// to display the price per day
var displayDailyPrice_DomInfos = document.querySelector('.infos');

var displayDailyPriceOfPhotographer = function displayDailyPriceOfPhotographer(photographer) {
  photographer.then(function (photographer) {
    return displayDailyPrice_DomInfos.insertAdjacentHTML('beforeend', photographer[0].getPrice());
  });
};

/* harmony default export */ const displayDailyPrice = (displayDailyPriceOfPhotographer);
;// CONCATENATED MODULE: ./photographers/src/likes.js
// to increase or decrease the likes of a media and the total of likes
var increaseOrDecreaseLikesAndTotalLikes = function increaseOrDecreaseLikesAndTotalLikes() {
  var likesElements = document.querySelectorAll('.media__likes');
  likesElements.forEach(function (like) {
    return like.onclick = function () {
      var totalLikes = document.querySelector('.infos__totalLikes');

      if (!like.classList.contains('media__liked')) {
        ++totalLikes.innerText;
        ++like.children[0].innerText;
        like.classList.add('media__liked');
      } else {
        --totalLikes.innerText;
        --like.children[0].innerText;
        like.classList.remove('media__liked');
      }
    };
  });
};

/* harmony default export */ const likes = (increaseOrDecreaseLikesAndTotalLikes);
;// CONCATENATED MODULE: ./photographers/src/select.js
var displaySelectOptions = function displaySelectOptions() {
  var select = document.querySelector('.filter__custom-select');
  select.addEventListener('click', function () {
    var select = document.querySelector('.filter__custom-menu');
    var arrow = document.querySelector('.filter__custom-arrow', 'before');

    if (!select.classList.contains('filter__show')) {
      select.classList.add('filter__show');
      arrow.style.transform = 'rotate(180deg)';
    } else {
      arrow.style.transform = 'rotate(0deg)';
      select.classList.remove('filter__show');
    }
  });
};

var hideSelectedOptionInSelect = function hideSelectedOptionInSelect(filter, dom) {
  dom.forEach(function (option) {
    // console.log(option.classList.add('hello'))
    if (option.getAttribute('value') == filter) {
      option.classList.add('filter__selected');
      console.log(option.classList);
    }
  });
};


;// CONCATENATED MODULE: ./photographers/index.js









var dom = {
  photographerHeader: document.querySelector('.photographer'),
  nameInForm: document.querySelector('.modal__head'),
  media: document.querySelector('.media'),
  form: document.querySelector('.form'),
  modalForm: document.querySelector('.modal'),
  selectOption: document.querySelectorAll('.filter__custom-option'),
  filterOption: document.querySelectorAll('.filter__custom-option')
}; // To get Id in Url's params

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var paramId = urlParams.get('id'); // To display photographer header

var photographers = getPhotographersById(parseDataToJson(), paramId);
photographers.then(function (photographers) {
  return photographers.map(function (photographer) {
    return dom.photographerHeader.innerHTML = photographer.photographerHeader;
  });
}); // To display media by Id and Filter

var filter = dom.selectOption[0].getAttribute('value');
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
  hideSelectedOptionInSelect(filter, dom.filterOption);
};

displayMediaByPhotographerById(paramId, filter); // let removeClassToHideDuplicateOptionInSelect = (filter) => {
// 	dom.filterOption.forEach(option => {
// 		if (option.value != filter) {
// 			option.classList.remove('filter__selected')
// 		}
// 	})
// }
// TODO: faire une boucle dans les option-custom pour créer des eventListener au click pour chaque élément !
// // dom.select.addEventListener('change', () => {
// // 	filter = dom.select.value
// // 	hideSelectedOptionInSelect(filter)
// // 	displayMediaByPhotographerById(paramId, filter)
// // })
// removeClassToHideDuplicateOptionInSelect(filter)
// To validate the form

var validator = new Validator(inputs, containerInput);
dom.form.addEventListener('click', function (e) {
  e.preventDefault();

  if (validator.launchValidation()) {
    dom.form.reset();
    dom.modalForm.style.display = 'none';
  }
}); // To fill the card about total of likes and daily price

displayTotalLikes(getMediaByPhotographerId(parseDataToJson(), paramId));
displayDailyPrice(photographers); // to init modal, lightbox and init event listener on likes elements

setTimeout(function () {
  Modal.modalEvents();
  Lightbox.init();
  likes();
}, 1000);
displaySelectOptions();
/******/ })()
;
//# sourceMappingURL=photographer.bundle.js.map