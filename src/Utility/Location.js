const API_KEY =
  "pk.eyJ1IjoibGVvbmluIiwiYSI6ImNrdmNmb3NzNDBsdzAyd3FubnNucTAxeGEifQ.0V3cquu_EzKgw8Oqb6UV5A";

export async function getAddressFromCoords(coords) {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/5.895513,51.952384.json?access_token=${API_KEY}` //${coords.lat},${coords.lng}
  );
  if (!response.ok) {
    throw new Error("Failed to fetch address. Please try again!");
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
  // const address = data.features[0].place_name;
  // return address;
}

export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${urlAddress}.json?access_token=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates. Please try again!");
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  const coordinates = Object.assign({
    // convert array to object
    lng: data.features[0].geometry.coordinates[0],
    lat: data.features[0].geometry.coordinates[1],
  });

  return coordinates;
}
