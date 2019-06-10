window.initMap = function() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: slideList[0].coords
  });
  const markers = [];
  const infoDiv = document.querySelector('#info');

  //   Zmienna abort posluzy do blokowania centrowania po kliknieciu w marker
  let abort = false;

  slideList.forEach((x, id) => {
    markers[id] = new google.maps.Marker({ position: x.coords, map: map });
    markers[id].addListener('click', function() {
      abort = true;
      infoDiv.style.visibility = 'visible';
      infoDiv.innerHTML = `You clicked on marker ${id + 1}`;
      flkty.selectCell(id);
      setTimeout(function() {
        infoDiv.style.visibility = 'hidden';
      }, 2000);
    });
  });

  flkty.on('change', function(index) {
    if (!abort) {
      map.panTo(slideList[index].coords);
      map.setZoom(4);
    }
    abort = false;
  });
};
