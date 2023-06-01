var contraste = false;
const btnFonte1 = document.getElementById("btnFonte1");
const btnFonte2 = document.getElementById("btnFonte2");
const btnFonte3 = document.getElementById("btnFonte3");
const imgLogo = document.getElementById("imgLogo");
const buscar = document.getElementById("buscar");

var fonteSession = sessionStorage.getItem("fonte");
if (fonteSession != "") {
  switch (fonteSession) {
    case "normal":
      selecionarFonte("normal", btnFonte1);
      break;
    case "grande":
      selecionarFonte("grande", btnFonte2);
      break;
    default:
      selecionarFonte("enorme", btnFonte3);
      break;
  }
}

var contrasteSession = sessionStorage.getItem("contraste");
if (contrasteSession != "") {
  if (contrasteSession == "true") {
    document.documentElement.style.setProperty("--fundo", "black");
    document.documentElement.style.setProperty("--txtColor", "white");
    document.documentElement.style.setProperty("--txtColorHover", "white");
    document.documentElement.style.setProperty("--sombra", "transparent");
    document.documentElement.style.setProperty("--kmColor", "black");
    document.documentElement.style.setProperty("--bordaContraste", "white");
    document.documentElement.style.setProperty("--inputBorda", "white");
    document.documentElement.style.setProperty("--txtSecundario", "yellow");
    document.documentElement.style.setProperty("--btnColor", "black");
    document.documentElement.style.setProperty("--nameColor", "white");
    document.documentElement.style.setProperty("--descColor", "white");
    document.documentElement.style.setProperty(
      "--tabelaFundoVermelho",
      "black"
    );
    document.documentElement.style.setProperty(
      "--tabelaFundoVermelhoEscuro",
      "black"
    );
    document.documentElement.style.setProperty("--tabelaFundoAmarelo", "black");
    document.documentElement.style.setProperty("--tabelaFundoCinza", "black");
    document.documentElement.style.setProperty("--tabelaBorda", "yellow");
    buscar.style.background = 'url("./img/lupa.png") no-repeat right';
    buscar.style.backgroundSize = "20px";
    imgLogo.src = "img/sptrans-branco.png";
    contraste = true;
  } else {
    document.documentElement.style.setProperty("--fundo", "white");
    document.documentElement.style.setProperty("--txtColor", "black");
    document.documentElement.style.setProperty("--txtColorHover", "red");
    document.documentElement.style.setProperty(
      "--sombra",
      "rgb(201, 201, 201)"
    );
    document.documentElement.style.setProperty("--kmColor", "rgb(130, 0, 0)");
    document.documentElement.style.setProperty(
      "--bordaContraste",
      "transparent"
    );
    document.documentElement.style.setProperty(
      "--inputBorda",
      "rgb(245, 83, 83)"
    );
    document.documentElement.style.setProperty("--txtSecundario", "red");
    document.documentElement.style.setProperty(
      "--tabelaFundoVermelho",
      "rgb(252, 36, 36)"
    );
    document.documentElement.style.setProperty(
      "--tabelaFundoVermelhoEscuro",
      "rgb(150, 24, 24)"
    );
    document.documentElement.style.setProperty(
      "--tabelaFundoAmarelo",
      "yellow"
    );
    document.documentElement.style.setProperty(
      "--tabelaFundoCinza",
      "lightgray"
    );
    document.documentElement.style.setProperty(
      "--tabelaBorda",
      "rgb(252, 143, 143)"
    );
    buscar.style.background =
      'url("https://static.thenounproject.com/png/101791-200.png") no-repeat right';
    buscar.style.backgroundSize = "20px";
    imgLogo.src = "img/sptrans.png";
    contraste = false;
  }
}

function selecionarFonte(valor, botao) {
  btnFonte1.style.backgroundColor = "transparent";
  btnFonte1.style.color = "white";
  btnFonte2.style.backgroundColor = "transparent";
  btnFonte2.style.color = "white";
  btnFonte3.style.backgroundColor = "transparent";
  btnFonte3.style.color = "white";

  botao.style.backgroundColor = "white";
  botao.style.color = "black";

  switch (valor) {
    case "normal":
      document.documentElement.style.setProperty("--fonteHeading", "110%");
      document.documentElement.style.setProperty("--fonteParagrafo", "100%");
      document.documentElement.style.setProperty("--fonteName", "18px");
      document.documentElement.style.setProperty("--fonteDescricao", "14px");
      document.documentElement.style.setProperty("--fonteBtn", "16px");
      document.documentElement.style.setProperty("--titulo", "200%");
      document.documentElement.style.setProperty("--subtitulo", "120%");
      sessionStorage.setItem("fonte", "normal");
      break;
    case "grande":
      document.documentElement.style.setProperty("--fonteHeading", "130%");
      document.documentElement.style.setProperty("--fonteParagrafo", "120%");
      document.documentElement.style.setProperty("--fonteName", "22px");
      document.documentElement.style.setProperty("--fonteDescricao", "18px");
      document.documentElement.style.setProperty("--fonteBtn", "20px");
      document.documentElement.style.setProperty("--titulo", "250%");
      document.documentElement.style.setProperty("--subtitulo", "150%");
      sessionStorage.setItem("fonte", "grande");
      break;
    default:
      document.documentElement.style.setProperty("--fonteHeading", "150%");
      document.documentElement.style.setProperty("--fonteParagrafo", "140%");
      document.documentElement.style.setProperty("--fonteName", "26px");
      document.documentElement.style.setProperty("--fonteDescricao", "22px");
      document.documentElement.style.setProperty("--fonteBtn", "24px");
      document.documentElement.style.setProperty("--titulo", "300%");
      document.documentElement.style.setProperty("--subtitulo", "200%");
      sessionStorage.setItem("fonte", "enorme");
      break;
  }
}

function switchContraste() {
  if (!contraste) {
    document.documentElement.style.setProperty("--fundo", "black");
    document.documentElement.style.setProperty("--txtColor", "white");
    document.documentElement.style.setProperty("--txtColorHover", "white");
    document.documentElement.style.setProperty("--sombra", "transparent");
    document.documentElement.style.setProperty("--kmColor", "black");
    document.documentElement.style.setProperty("--bordaContraste", "white");
    document.documentElement.style.setProperty("--inputBorda", "white");
    document.documentElement.style.setProperty("--txtSecundario", "yellow");
    buscar.style.background = 'url("./img/lupa.png") no-repeat right';
    buscar.style.backgroundSize = "20px";
    imgLogo.src = "img/sptrans-branco.png";
    contraste = true;
    sessionStorage.setItem("contraste", "true");
  } else {
    document.documentElement.style.setProperty("--fundo", "white");
    document.documentElement.style.setProperty("--txtColor", "black");
    document.documentElement.style.setProperty("--txtColorHover", "red");
    document.documentElement.style.setProperty(
      "--sombra",
      "rgb(201, 201, 201)"
    );
    document.documentElement.style.setProperty("--kmColor", "rgb(130, 0, 0)");
    document.documentElement.style.setProperty(
      "--bordaContraste",
      "transparent"
    );
    document.documentElement.style.setProperty(
      "--inputBorda",
      "rgb(245, 83, 83)"
    );
    document.documentElement.style.setProperty("--txtSecundario", "red");
    buscar.style.background =
      'url("https://static.thenounproject.com/png/101791-200.png") no-repeat right';
    buscar.style.backgroundSize = "20px";
    imgLogo.src = "img/sptrans.png";
    contraste = false;
    sessionStorage.setItem("contraste", "false");
  }
}

function switchContrasteSobreNos() {
  if (!contraste) {
    document.documentElement.style.setProperty("--fundo", "black");
    document.documentElement.style.setProperty("--txtColor", "white");
    document.documentElement.style.setProperty("--txtColorHover", "white");
    document.documentElement.style.setProperty("--sombra", "transparent");
    document.documentElement.style.setProperty("--kmColor", "black");
    document.documentElement.style.setProperty("--bordaContraste", "white");
    document.documentElement.style.setProperty("--inputBorda", "white");
    document.documentElement.style.setProperty("--txtSecundario", "yellow");
    document.documentElement.style.setProperty("--btnColor", "black");
    document.documentElement.style.setProperty("--nameColor", "white");
    document.documentElement.style.setProperty("--descColor", "white");
    buscar.style.background = 'url("./img/lupa.png") no-repeat right';
    buscar.style.backgroundSize = "20px";
    imgLogo.src = "img/sptrans-branco.png";
    contraste = true;
    sessionStorage.setItem("contraste", "true");
  } else {
    document.documentElement.style.setProperty("--fundo", "white");
    document.documentElement.style.setProperty("--txtColor", "black");
    document.documentElement.style.setProperty("--txtColorHover", "red");
    document.documentElement.style.setProperty(
      "--sombra",
      "rgb(201, 201, 201)"
    );
    document.documentElement.style.setProperty("--kmColor", "rgb(130, 0, 0)");
    document.documentElement.style.setProperty(
      "--bordaContraste",
      "transparent"
    );
    document.documentElement.style.setProperty(
      "--inputBorda",
      "rgb(245, 83, 83)"
    );
    document.documentElement.style.setProperty("--txtSecundario", "red");
    document.documentElement.style.setProperty("--btnColor", "red");
    document.documentElement.style.setProperty("--nameColor", "#333");
    document.documentElement.style.setProperty("--descColor", "#707070");
    buscar.style.background =
      'url("https://static.thenounproject.com/png/101791-200.png") no-repeat right';
    buscar.style.backgroundSize = "20px";
    imgLogo.src = "img/sptrans.png";
    contraste = false;
    sessionStorage.setItem("contraste", "false");
  }
}

function switchContrasteOnibus() {
  if (!contraste) {
    document.documentElement.style.setProperty("--fundo", "black");
    document.documentElement.style.setProperty("--txtColor", "white");
    document.documentElement.style.setProperty("--txtColorHover", "white");
    document.documentElement.style.setProperty("--sombra", "transparent");
    document.documentElement.style.setProperty("--kmColor", "black");
    document.documentElement.style.setProperty("--bordaContraste", "white");
    document.documentElement.style.setProperty("--inputBorda", "white");
    document.documentElement.style.setProperty("--txtSecundario", "yellow");
    document.documentElement.style.setProperty(
      "--tabelaFundoVermelho",
      "black"
    );
    document.documentElement.style.setProperty(
      "--tabelaFundoVermelhoEscuro",
      "black"
    );
    document.documentElement.style.setProperty("--tabelaFundoAmarelo", "black");
    document.documentElement.style.setProperty("--tabelaFundoCinza", "black");
    document.documentElement.style.setProperty("--tabelaBorda", "yellow");
    buscar.style.background = 'url("./img/lupa.png") no-repeat right';
    buscar.style.backgroundSize = "20px";
    imgLogo.src = "img/sptrans-branco.png";
    contraste = true;
    sessionStorage.setItem("contraste", "true");
  } else {
    document.documentElement.style.setProperty("--fundo", "white");
    document.documentElement.style.setProperty("--txtColor", "black");
    document.documentElement.style.setProperty("--txtColorHover", "red");
    document.documentElement.style.setProperty(
      "--sombra",
      "rgb(201, 201, 201)"
    );
    document.documentElement.style.setProperty("--kmColor", "rgb(130, 0, 0)");
    document.documentElement.style.setProperty(
      "--bordaContraste",
      "transparent"
    );
    document.documentElement.style.setProperty(
      "--inputBorda",
      "rgb(245, 83, 83)"
    );
    document.documentElement.style.setProperty("--txtSecundario", "red");
    document.documentElement.style.setProperty(
      "--tabelaFundoVermelho",
      "rgb(252, 36, 36)"
    );
    document.documentElement.style.setProperty(
      "--tabelaFundoVermelhoEscuro",
      "rgb(150, 24, 24)"
    );
    document.documentElement.style.setProperty(
      "--tabelaFundoAmarelo",
      "yellow"
    );
    document.documentElement.style.setProperty(
      "--tabelaFundoCinza",
      "lightgray"
    );
    document.documentElement.style.setProperty(
      "--tabelaBorda",
      "rgb(252, 143, 143)"
    );
    buscar.style.background =
      'url("https://static.thenounproject.com/png/101791-200.png") no-repeat right';
    buscar.style.backgroundSize = "20px";
    imgLogo.src = "img/sptrans.png";
    contraste = false;
    sessionStorage.setItem("contraste", "false");
  }
}
