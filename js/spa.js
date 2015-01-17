'use strict';

/* exported spa */
var spa = (function(){
  var initModule = function ($container){
    spa.model.initModule();
    spa.shell.initModule($container);
  };

  return { initModule : initModule };
})();
