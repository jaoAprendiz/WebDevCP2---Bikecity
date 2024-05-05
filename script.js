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

// VALIDANDO O USUÁRIO NA PÁGINA DE LOGIN
function validar(){
    //declarando a variavel
    let usuario =document.getElementById("usuario").value;
    let senha =document.getElementById("senha").value;
    if(usuario == "Admin" && senha === "12345"){
        window.open('quiz.html');
    }else{
        alert("usuario e senha inválidos");
    }
}

// Definindo as perguntas e respostas
var perguntas = [
    "Qual é o inventor da bicicleta?",
    "Em que ano a bicicleta foi inventada?",
    "Qual é o componente fundamental da bicicleta que foi inventado em 1888 por John Boyd Dunlop?",
    "O que é um quadro de bicicleta feito de?",
    "Qual é o tipo de bicicleta projetado para ser usado em terrenos acidentados?",
    "Qual é o nome do evento esportivo de ciclismo mais famoso do mundo?",
    "O que significa a sigla 'MTB'?",
    "O que é um 'pelotão' no ciclismo?",
    "Quantos estágios tem o Tour de France?",
    "Qual é a vantagem de usar uma bicicleta dobrável?"
];

var respostas = [
    "Karl Drais",
    "1817",
    "Pneu",
    "Alumínio, aço, carbono, etc.",
    "Mountain bike (MTB)",
    "Tour de France",
    "Mountain Bike",
    "Grupo de ciclistas competindo juntos",
    "21",
    "Facilidade de transporte e armazenamento"
];

// Função para iniciar o quiz
function iniciarQuiz() {
    var pontuacao = 0;

    // Loop para fazer as perguntas
    for (var i = 0; i < perguntas.length; i++) {
        var respostaUsuario = prompt(perguntas[i]);

        // Verifica se a resposta do usuário está correta
        if (respostaUsuario.toLowerCase() === respostas[i].toLowerCase()) {
            pontuacao++;
        }
    }
1
    // Mostra a pontuação na tela
    document.getElementById('resultado').innerHTML = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
}

// VALIDANDO OS CAMPOS DO CONTATO

// Declarando as variáveis
const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const telInput = document.querySelector("#telefone")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome esta vazio
    if(nameInput.value === ""){
        alert("Preencha seu nome")
        return;
    }

    //verifica se o email esta vazio
    if(emailInput.value === ""){
        alert("Preencha seu seu email")
        return;
    }

    //verifica se o telefone esta vazio
    if(telInput.value === ""){
        alert("Preencha seu seu telefone")
        return;
    }

  // se todos os capos estiverem preenchidos enviar form
  form.submit();
});

