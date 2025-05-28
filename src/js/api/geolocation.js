const API_KEY = "at_DggC98cjfWxnUECLfyjkPVcw2RCPq";
async function Geo(ip) {
  const consulta = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`,
  );
  const datos = await consulta.json();

  const datosIP = {
    ip: datos.ip,
    location: `${datos.location.country},${datos.location.city}`,
    timezone: datos.location.timezone,
    isp: datos.isp,
    lat: datos.location.lat,
    lng: datos.location.lng,
  };
  return datosIP;
}

export { Geo };
