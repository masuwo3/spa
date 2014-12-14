'use strict';

/* exported spa */
var spa = (function () {
  var initModule = function($container){
    $container.html(
      '<h1 stype="display:inline-block; margin:25px;">' +
      'hello world' +
      '</h1>'
    );
  };

  return { initModule: initModule};
})();
