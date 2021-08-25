/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/class/photographer.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Photographer = function Photographer(name, city, country, tags, tagline, price, portrait) {
  var _this = this;

  _classCallCheck(this, Photographer);

  _defineProperty(this, "dom", {
    photographers: document.querySelector('.photographers')
  });

  _defineProperty(this, "displayTags", function () {
    var spanTags = '';

    for (var i = 0; i < _this.tags.length; i++) {
      spanTags += "<span class=\"photographer__tag\"><a href=\"\">#".concat(_this.tags[i], "</a></span>");
    }

    return spanTags;
  });

  _defineProperty(this, "constructCardPhotographer", function () {
    return _this.dom.photographers.insertAdjacentHTML('beforeend', "\n\t\t<acticle class=\"photographer\">\n\t\t<a href=\"#\" class=\"photographer__header\">\n\t\t<img class=\"photographer__img\" src=\"public/images/photographers/id_photos/".concat(_this.portrait, "\" alt=\"\">\n\t\t<h2 class=\"photographer__name\">").concat(_this.name, "</h2>\n\t\t</a>\n\t\t<div class=\"photographer__content\">\n\t\t<p class=\"photographer__location\">").concat(_this.city, ", ").concat(_this.country, "</p>\n\t\t<p class=\"photographer__tagline\">").concat(_this.tagline, "</p>\n\t\t<p class=\"photographer__price\">").concat(_this.price, "\u20AC/jour</p>\n\t\t</div>\n\t\t<div class=\"photographer__tags\">") + _this.displayTags() + "</div>\n\t\t</acticle>\n\t\t");
  });

  this.name = name;
  this.city = city;
  this.country = country;
  this.tags = tags;
  this.tagline = tagline;
  this.price = price;
  this.portrait = portrait;
};


;// CONCATENATED MODULE: ./src/index.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // http://localhost:8080

fetch('../fisheyeData.json').then(function (response) {
  if (!response.ok) {
    throw new Error('HTTP error ' + response.status);
  }

  return response.json();
}).then(function (json) {
  var i = 0;
  var photographerCard = {};

  var _iterator = _createForOfIteratorHelper(json.photographers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var photographer = _step.value;
      photographerCard[i] = new Photographer(photographer.name, photographer.city, photographer.country, photographer.tags, photographer.tagline, photographer.price, photographer.portrait);
      photographerCard[i].constructCardPhotographer();
      i++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
})["catch"](function () {
  this.dataError = true;
});
/******/ })()
;