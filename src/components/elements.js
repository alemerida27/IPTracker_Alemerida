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

//Forms and inputs
function Form(config) {
  let setForm = document.createElement("form");
  if (typeof config.className === "object") {
    config.className.forEach((clase) => {
      setForm.classList.add(clase);
    });
  } else {
    setForm.classList.add(config.className);
  }
  config.id ? (setForm.id = config.id) : null;

  if(typeof config.input === 'object'){
    config.input.forEach(input => {
    let setInput = document.createElement(input.type)
    setInput.setAttribute('name', input.name)
    input.id ? setInput.id = input.id : setInput.id = input.name
  })
  }else{
    let setInput = document.createElement(input.type)
     setInput.setAttribute('name', input.name)
    input.id ? setInput.id = input.id : setInput.id = input.name
  }

  return setForm;
}

export { Container, Texto, Asset, Form };
