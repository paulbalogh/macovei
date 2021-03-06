'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var $ = require('../shims/jquery');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.body,
  events: {
    'click a[href]:not([rel="download"])': 'handleLinkClick'
  },
  render: function () {
    var self = this;
    this.$el.html(this.template());

    // Init and configure the page switcher.
    this.pageSwitcher = new ViewSwitcher(this.$('[role="page-container"]')[0], {
      show: function (newView) {
        document.title = newView.pageTitle || 'Monica Macovei Presedinte';
        var description = newView.pageDescription || 'Candidez independent, pentru că sunt convinsă că românii merită un Președinte al lor, nu al partidelor.'
        var keywords = newView.pageKeywords || 'alegeri, prezidentiale, candidat, independent, romania, romani, anti-coruptie';
        var image = (window.location.origin + newView.pageImage) || (window.location.origin+'/assets/img/macovei-presedinte-fb.jpg');
        var type = newView.pageType || 'website';
        if (document.location.hostname == "localhost") {
          // check if localhost, output another url
          var url = newView.pageUrl || window.location.origin+"/"+window.location.hash;window.location.origin+"/"+window.location.hash;
        } else {
          // if live, output real url
          var url = newView.pageUrl || window.location.origin+window.location.pathname;
        }
        // point url to html rendered version
        url += '?_escaped_fragment_=""';

        $("meta[property='og:type']").attr('content', type);
        $("meta[property='og:image'], meta[name='twitter:image']").attr('content', image);
        $("meta[property='og:title'], meta[name='twitter:title']").attr('content', document.title);
        $("meta[property='og:description'], meta[name='twitter:description'], meta[name='description']").attr('content', description);
        $("meta[property='og:url'], meta[name='twitter:url']").attr('content', url);
        $("link[rel='canonical']").attr('href', url);
        window.scrollTo(0, 0);
        app.currentPage = newView;
      }
    });

    this.$('.nav a').on('click', function () {
      if ($(window).width() < 768){
        return self.$('.navbar-toggle').click();
      }
    });

    return this;
  },
  setPage: function (view) {
    this.pageSwitcher.set(view);
  },
  handleLinkClick: function (e) {

      var t = $(e.target);
      var aEl = t.is('a') ? t[0] : t.closest('a')[0];
      var local = window.location.host === aEl.host;
      var path = aEl.pathname.slice(1);
      if (!path) {
        return;
      }

      // If the window location host and target host are the
      // same it's local, else, leave it alone.
      if (local) {
        e.preventDefault();
        app.navigate(path);
      }
  }
});
