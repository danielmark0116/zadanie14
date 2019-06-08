'use strict';
(function() {
  // var templateHello = document.getElementById('template-hello').innerHTML;
  var carouselItem = document.getElementById('carousel-item').innerHTML;

  // Mustache.parse(templateHello);
  Mustache.parse(carouselItem);

  var dataHello = { firstname: 'John', lastname: 'Smith' };

  // var generatedHello = Mustache.render(templateHello, dataHello);
  // var generatedSlide = Mustache.render(carouselItem, slideList[0]);

  // var results = document.getElementById('results');
  var results2 = document.getElementById('results2');

  slideList.forEach(x => {
    var generatedSlide = Mustache.render(carouselItem, x);
    results2.insertAdjacentHTML('beforeend', generatedSlide);
  });

  // results.insertAdjacentHTML('beforeend', generatedHello);
  // results2.insertAdjacentHTML('beforeend', generatedSlide);
  // results2.insertAdjacentHTML('beforeend', slides);
})();
