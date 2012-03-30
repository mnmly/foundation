(function() {

  require.config({
    baseUrl: '/javascripts',
    paths: {
      jquery: 'libs/jquery.min',
      backbone: 'libs/backbone-min',
      underscore: 'libs/underscore-min',
      modernizr: "libs/modernizr.foundation",
      reveal: "libs/jquery.reveal",
      orbit: "libs/jquery.orbit-1.4.0",
      customforms: "libs/jquery.customforms",
      placeholder: "libs/jquery.placeholder.min",
      tooltips: "libs/jquery.tooltips",
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
