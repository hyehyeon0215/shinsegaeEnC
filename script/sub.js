const nav_1depth = document.querySelector(".sub-nav-1depth");
const nav_2depth = nav_1depth.querySelector("ul");

// 366f1f7d5e4c7066f6cba435dbf948b5


nav_1depth.addEventListener("mouseenter", ()=>{
    nav_2depth.classList.add("on");
})

nav_2depth.addEventListener("mouseleave", ()=>{
    nav_2depth.classList.remove("on");

    nav_1depth.addEventListener("mouseleave", ()=>{
        nav_2depth.classList.remove("on");
    })

})

var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.5585441, 126.9754628),
        level: 3
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = '../img/logo/marker.svg', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69),
    imageOption = {offset: new kakao.maps.Point(27, 69)};
      

var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.5585441, 126.9754628);

var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage 
});


marker.setMap(map);  