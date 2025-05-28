// Importación de componentes y recursos
import { Container, Form, Texto, Boton, Asset } from "./js/components/elements";
import { CONTENT, HEADER } from "./js/common";
import "./styles/style.css";
import "./styles/index.css";
import Arrow from "./assets/icon-arrow.svg";
import Marker from "./assets/icon-location.svg";
import L, { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Geo } from "./js/api/geolocation";

async function establecerValores(ipSelect) {
  
let data;
if (!ipSelect) {
    data = await Geo('').then((data) => data);
} else {
    data = await Geo(ipSelect).then((data) => data);
}
  const { ip, location, timezone, isp, lat, lng} = data;

  document.getElementById("IP_ADDRESS").textContent = ip;
  document.getElementById("LOCATION").textContent = location;
  document.getElementById("TIMEZONE").textContent = `UTC ${timezone}`;
  document.getElementById("ISP").textContent = isp;

  let myIcon = L.icon({
    iconUrl: Marker,
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  })

  let map = L.map('map').setView([lat, lng], 13)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng], {icon: myIcon}).addTo(map)
    .bindPopup('Aqui estas tu')
    .openPopup();
}

window.addEventListener('load', () => {
    establecerValores()
} )

// =================== HEADER: Título ===================
const TITLE_HEADER = Texto({ type: "h1", text: "IP Address Tracker" });

// =================== HEADER: Formulario de búsqueda ===================
const CONFIG_INPUT = {
  type: "text",
  id: "IP",
  name: "ip",
  placeholder: "192.168.1.1",
};
const BUTTON_SEND = Boton({ type: "button", text: "h", buttonType: "submit" });
// Añade el icono de flecha al botón
BUTTON_SEND.append(Asset({ type: "img", src: Arrow }));
const INPUT_HEADER = Form({ input: CONFIG_INPUT, id: "formIP" });

// =================== HEADER: Resultados ===================
const DIV_ALL = Container({ type: "div", className: "div-all" });
const DIV_RESULTS = Container({ type: "div", className: "div-results" });
INPUT_HEADER.append(BUTTON_SEND);
DIV_ALL.append(TITLE_HEADER, INPUT_HEADER, DIV_RESULTS);
const RESULT_NAMES = [
  { text: "IP ADDRESS" },
  { text: "LOCATION" },
  { text: "TIMEZONE" },
  { text: "ISP" },
];


const MAP = Container({type: 'div',id: 'map' ,className: 'map'})
CONTENT.append(MAP)

// Crea los contenedores para cada resultado
RESULT_NAMES.forEach((texto) => {
  let textContent = texto.text;
  let id = textContent.replace(" ", "_");
  const INFO = Container({ type: "div", className: "info-div" });
  INFO.append(
    Texto({ type: "h3", text: textContent }),
    Texto({ type: "h1", text: "-", id: id }),
  );
  DIV_RESULTS.append(INFO);
});

// =================== CONSULTA ===================
INPUT_HEADER.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector('input[name="ip"]');
  establecerValores(name.value);
});

// =================== Ensamblado del HEADER ===================

HEADER.append(DIV_ALL);
