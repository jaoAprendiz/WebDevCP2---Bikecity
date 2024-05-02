// ALTERNANDO AS CORES DO BACKGROUND DA PÁGINA

// Declarando as variáveis
let body = document.querySelector('body');
let classCores = ['cor1', 'cor2', 'cor3'];
let indexCor = 0;
let timeCor = 3000;

function alternarCores() {
    body.setAttribute('class', `${classCores[indexCor]}`);
    indexCor++;

    if (indexCor == classCores.length) {
        indexCor = 0;
    }
    setTimeout('alternarCores()', timeCor);
}
alternarCores();

// CRIANDO UM SLIDESHOW AUTOMÁTICO

// Declarando as variáveis
let imagens = ['./img/bicicleta1.jpg', './img/bicicleta2.jpg', './img/bicicleta3.jpg', './img/bicicleta4.jpg'];
let index = 0;
let time = 3000;

// Criando a função do slideshow
function slideShow() {
    document.getElementById('imgbanner').src=imagens[index];
    index++;

    if (index == imagens.length) {
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();

// REDIRECIONANDO OS BOTÕES
function redirect1() {
    window.location.href = 'https://duosbikes.com.br/about.html';
}

function redirect2() {
    window.location.href = 'https://www.sensebike.com.br/products/impact-race-2023';
}

function redirect3() {
    window.location.href = 'https://www.sensebike.com.br/products/activ';
}