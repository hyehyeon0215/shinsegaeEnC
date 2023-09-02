// 366f1f7d5e4c7066f6cba435dbf948b5

var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.5585441, 126.9754628),
        level: 3
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = '../img/logo/marker.svg', 
    imageSize = new kakao.maps.Size(64, 69),
    imageOption = {offset: new kakao.maps.Point(27, 69)};
      

var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.5585441, 126.9754628);

var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage 
});


marker.setMap(map);  