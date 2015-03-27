(function() {

  'use strict';

  var re = new RegExp('(.+-)(s|m|l)\\.(jpg|jpeg|png|gif)');

  var resizeImage = function(image, toSize) {
    var tokens = image.src.split('/');
    var fileName = tokens[tokens.length - 1];
    var match = re.exec(fileName);
    if (match !== null && match[2] !== toSize) {
      image.src = image.src.replace(re, function(match, p1, p2, p3) {
        return p1 + toSize + '.' + p3;
      });
    }
  };

  var resizeImages = function(toSize) {
    var items = document.getElementsByTagName('img');
    for (var i = items.length; i--;) {
      if (items[i].className && items[i].className.indexOf('resize') !== -1) {
        resizeImage(items[i], toSize);
      }
    }
  };

  var checkResize = function() {
    var clientWidth = document.body.clientWidth; 
    if (clientWidth < 500) {
      resizeImages('s');
    } else if (clientWidth >= 500 && clientWidth < 769) {
      resizeImages('m');
    } else {
      resizeImages('l');
    }
  };

  var resizer = function() {
    window.addEventListener('load', checkResize);
    window.addEventListener('resize', checkResize);
  };

  window.addEventListener('load', resizer);

})(window);
