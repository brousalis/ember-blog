/**
This plugin works without an AddThis account. However, for access
to analytics and some features, you will need to sign up for a
free account here: http://www.addthis.com/

A list of available services can be found here:
http://www.addthis.com/services/list
*/

App.AddThisOptions = Em.Object.create({
  pubId: 'XX-XXXXXXXXXXXXXXXX', // Set to your publisher id
});

App.ApplicationView.reopen({

  loadAddThisApi: function() {
    var url = '//s7.addthis.com/js/300/addthis_widget.js#async=1';

    if (!window.addthis) {
      $.getScript(url);
    }
  }.on('willInsertElement'),
});

/**
This is the component called for each individual share button.
Use in your templates like so:

{{share-post on='facebook'}}
*/

App.SharePostComponent = Em.Component.extend({
  attributeBindings: ['rel', 'title', 'href', 'target'],
  classNameBindings: ['socialClass'],
  on: null, // Brand
  rel: 'nofollow',
  tagName: 'a',
  target: '_blank',
  layout: Em.Handlebars.compile('<span class="hidden">{{capitalize on}}</span>'),

  href: function() {
    var post = this.get('post');
    var url = 'url=' + window.location.href;
    var title = 'title=' + post.get('title');
    var description = 'description=' + post.get('description');
    var pubId = App.AddThisOptions.get('pubId');
    var endpoint = 'http://api.addthis.com/oexchange/0.8/forward/' + this.get('on') + '/offer?';

    if (pubId) {
      pubId = 'pubid=' + pubId;
    }

    return endpoint + pubId + '&' + url + '&' + title + '&' + description;
  }.property('post.title', 'post.description', 'on'),

    post: function() {
    return this.get('parentView.controller');
  }.property(),

  socialClass: function() {
    var brand = this.get('on');
    return 'icon-' + brand;
  }.property('on'),

  title: function() {
    var brand = this.get('on');
    return 'Share this on ' + brand.capitalize();
  }.property('on'),
});
