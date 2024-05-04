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