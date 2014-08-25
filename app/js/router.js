'use strict';

var Router = require('ampersand-router');
var smoothScroll = require('./lib/smooth-scroll');

var HomePage = require('./pages/home');
var DesprePage = require('./pages/despre');
var ViziunePage = require('./pages/viziune');
var CandidaturaPage = require('./pages/candidatura');
var SustinatoriPage = require('./pages/sustinatori');
var ImplicarePage = require('./pages/implicare');
var MediaPage = require('./pages/media');
var ContactPage = require('./pages/contact');
var SemnaturiPage = require('./pages/semnaturi');
var DonatiiPage = require('./pages/donatii');
var VoluntariatPage = require('./pages/voluntariat');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'despre/': 'despre',
    'viziune/': 'viziune',
    'candidatura/': 'candidatura',
    'sustinatori/': 'sustinatori',
    'implicare/': 'implicare',
    'media/': 'media',
    'contact/': 'contact',
    'fii-alaturi-de-mine/': 'semnaturi',
    'donatii/': 'donatii',
    'voluntariat/': 'voluntariat'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    this.trigger('newPage', new HomePage({}));
  },

  despre: function () {
    this.trigger('newPage', new DesprePage({}));
  },

  viziune: function () {
    this.trigger('newPage', new ViziunePage({}));
  },

  candidatura: function () {
    this.trigger('newPage', new CandidaturaPage({}));
  },

  sustinatori: function () {
    this.trigger('newPage', new SustinatoriPage({}));
  },

  implicare: function () {
    this.trigger('newPage', new ImplicarePage({}));
  },

  media: function () {
    this.trigger('newPage', new MediaPage({}));
  },

  contact: function () {
    this.trigger('newPage', new ContactPage({}));
  },

  semnaturi: function () {
    this.trigger('newPage', new SemnaturiPage({}));
  },

  donatii: function () {
    this.trigger('newPage', new DonatiiPage({}));
  },

  voluntariat: function () {
    this.trigger('newPage', new VoluntariatPage({}));
  }
});
