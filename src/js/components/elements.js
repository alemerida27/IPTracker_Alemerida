function Container(config) {
  let setContainer;
  let options = ["section", "div", "article", "header", "footer", "span"];
  if (!options.includes(config.type)) {
    console.error(
      `El contenedor ${config.type} no esta disponible en la funcion`,
    );
  }
  setContainer = document.createElement(config.type);

  if (typeof config.className === "object") {
    config.className.forEach((clase) => {
      setContainer.classList.add(clase);
    });
  } else {
    setContainer.classList.add(config.className);
  }
  config.id ? (setContainer.id = config.id) : null;
  return setContainer;
}

function Texto(config) {
  let options = ["h1", "h2", "h3", "p"];

  if (options.includes(config.type)) {
    let setTexto = document.createElement(config.type);
    setTexto.innerText = config.text;
    if (typeof config.className === "object") {
      config.className.forEach((clase) => {
        setTexto.classList.add(clase);
      });
    } else {
      setTexto.classList.add(config.className);
    }
    if (config.id) setTexto.id = config.id;
    return setTexto;
  } else {
    console.error(
      `El tipo de texto ${config.type} no esta disponible en la funcion`,
    );
  }
}

function Asset(config){
  let options = ["img", "video", "audio"];
  if (options.includes(config.type)) {
    let setAsset = document.createElement(config.type);
    setAsset.src = config.src;
    if (typeof config.className === "object") {
      config.className.forEach((clase) => {
        setAsset.classList.add(clase);
      });
    } else {
      setAsset.classList.add(config.className);
    }
    return setAsset;
  } else {
    console.error(
      `El tipo de asset ${config.type} no esta disponible en la funcion`,
    );
  }
}

function Boton(config) {
  let element;
  let options = ["button", "a"];
  if (!options.includes(config.type)) {
    console.error(
      `El tipo ${config.type} no está disponible en la función Boton`
    );
    return;
  }
  element = document.createElement(config.type);

  if (typeof config.className === "object") {
    config.className.forEach((clase) => {
      element.classList.add(clase);
    });
  } else if (config.className) {
    element.classList.add(config.className);
  }

  if (config.id) element.id = config.id;

  if (config.type === "a" && config.href) {
    element.href = config.href;
    if (config.target) element.target = config.target;
  }

  if (config.type === "button" && config.buttonType) {
    element.type = config.buttonType;
  }

  if (config.text) {
    element.innerText = config.text;
  }

  if (typeof config.onClick === "function") {
    element.addEventListener("click", config.onClick);
  }

  return element;
}

//Forms and inputs
function Form(config) {
  let setForm = document.createElement("form");
  if (typeof config.className === "object") {
    config.className.forEach((clase) => {
      setForm.classList.add(clase);
    });
  } else if (config.className) {
    setForm.classList.add(config.className);
  }
  if (config.id) setForm.id = config.id;

  // Manejar inputs
  if (Array.isArray(config.input)) {
    config.input.forEach((input) => {
      let setInput = document.createElement("input");
      setInput.type = input.type || "text";
      setInput.name = input.name || "";
      setInput.id = input.id || input.name || "";
      if (input.className) {
        if (Array.isArray(input.className)) {
          input.className.forEach((clase) => setInput.classList.add(clase));
        } else {
          setInput.classList.add(input.className);
        }
      }
      if (input.placeholder) setInput.placeholder = input.placeholder;
      if (input.value) setInput.value = input.value;
      setForm.appendChild(setInput);
    });
  } else if (config.input) {
    let input = config.input;
    let setInput = document.createElement("input");
    setInput.type = input.type || "text";
    setInput.name = input.name || "";
    setInput.id = input.id || input.name || "";
    if (input.className) {
      if (Array.isArray(input.className)) {
        input.className.forEach((clase) => setInput.classList.add(clase));
      } else {
        setInput.classList.add(input.className);
      }
    }
    if (input.placeholder) setInput.placeholder = input.placeholder;
    if (input.value) setInput.value = input.value;
    setForm.appendChild(setInput);
  }

  return setForm;
}

export { Container, Texto, Asset, Form, Boton };
