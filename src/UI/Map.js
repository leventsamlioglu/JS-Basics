export class Map {
  constructor(coords) {
    // this.coordinates = coords;
    this.render(coords);
  }

  render(coordinates) {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibGVvbmluIiwiYSI6ImNrdmNmb3NzNDBsdzAyd3FubnNucTAxeGEifQ.0V3cquu_EzKgw8Oqb6UV5A";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: coordinates, // starting position [lng, lat]
      zoom: 16, // starting zoom
    });
    //Set marker options.
    const marker = new mapboxgl.Marker({
      color: "#FF0000",
      draggable: true,
    })
      .setLngLat([coordinates.lng, coordinates.lat])
      .addTo(map);
  }
}
