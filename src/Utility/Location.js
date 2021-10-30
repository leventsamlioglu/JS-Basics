const API_KEY =
  "pk.eyJ1IjoibGVvbmluIiwiYSI6ImNrdmF4ZWxjZTAzYmsyd242c2R1cjMycHQifQ.7mHrlaWgvgcmx2oV-YvX-w5NTF6HwpjtY";

export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGVvbmluIiwiYSI6ImNrdmNmb3NzNDBsdzAyd3FubnNucTAxeGEifQ.0V3cquu_EzKgw8Oqb6UV5A"
  );
  console.log("response", response);

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates. Please try again!");
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  const coordinates = data.results[0].geometry.location;
  return coordinates;
}
