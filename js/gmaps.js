window.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: slideList[0].coords
  });
  const markers = [];
  const infoDiv = document.querySelector('#info');
  slideList.forEach((x, id) => {
    markers[id] = new google.maps.Marker({ position: x.coords, map: map });
    markers[id].addListener('click', function() {
      infoDiv.style.visibility = 'visible';
      infoDiv.innerHTML = `You clicked on marker ${id + 1}`;
      setTimeout(function() {
        infoDiv.style.visibility = 'hidden';
      }, 2000);
    });
  });
};
