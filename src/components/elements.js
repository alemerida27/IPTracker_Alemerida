import "..styles/style.css";

function Button(texto, clase) {
  let boton = document.createElement("button");
  boton.textContent = texto;
  if (clase !== "") {
    boton.classList.add(clase);
    return boton;
  } else {
    return boton;
  }
}

function Parrafo(texto, clase) {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  if (clase !== "") {
    parrafo.classList.add(clase);
    return parrafo;
  } else {
    return parrafo;
  }
}

function Titulo(texto, clase) {
  let title = document.createElement("h1");
  title.textContent = texto;
  if (clase !== "") {
    title.classList.add(clase);
    return title;
  } else {
    return title;
  }
}

function Div(clase) {
  let div = document.createElement("div");
  if (clase !== "") {
    div.classList.add(clase);
    return div;
  } else {
    return div;
  }
}

function Span(clase) {
  let span = document.createElement("span");
  if (clase !== "") {
    span.classList.add(clase);
    return span;
  } else {
    return span;
  }
}

function Section(clase) {
  let section = document.createElement("section");
  if (clase !== "") {
    section.classList.add(clase);
    return section;
  } else {
    return section;
  }
}

function Image(src, clase) {
  let image = document.createElement("img");
  image.src = src;
  if (clase !== "") {
    image.classList.add(clase);
    return image;
  } else {
    return image;
  }
}

export { Button, Parrafo, Titulo, Div, Section, Image, Span };
