(function() {

  require.config({
    baseUrl: '/javascripts',
    paths: {
      jquery: 'libs/jquery.min',
      backbone: 'libs/backbone-min',
      underscore: 'libs/underscore-min',
      order: 'libs/rjs-plugins/order',
      text: 'libs/rjs-plugins/text',
      json: 'libs/rjs-plugins/json'
    },
    priority: ['underscore', 'jquery', 'backbone', 'text', 'order']
  });

  require(['reveal', 'orbit', 'customforms', 'placeholder', 'tooltips', 'app'], function() {
    return console.log("Dependencies are loaded");
  });

}).call(this);
