function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.863774114974476, lng: 174.75059289958548 },
    zoom: 14,
    mapId: "95ddf39bad607f2f",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  const markers = [
    [
      "Bryden's House",
      -36.863774114974476,
      174.75059289958548,
      "yoshi_house.svg",
      38,
      31,
    ],
    [
      "Castle of the Fallen",
      -36.86064665429307,
      174.77790407620085,
      "castle.svg",
      45,
      40,
    ],
    [
      "Spooky House",
      -36.86474020496426,
      174.72832738174029,
      "ghosthouse.svg",
      45,
      40,
    ],
    [
      "Magic Hill",
      -36.87730180223721,
      174.7644072181483,
      "hill_with_eyes.svg",
      45,
      40,
    ],
    [
      "Undergournd Portal",
      -36.8561293781409,
      174.75196893713007,
      "pipe.svg",
      45,
      40,
    ],
    [
      "You are here!",
      -36.86258467150163,
      174.7577628714728,
      "pointer.svg",
      45,
      40,
    ],
    ["Star World", -36.851009428465424, 174.72878319435307, "star.svg", 45, 40],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });
    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}
