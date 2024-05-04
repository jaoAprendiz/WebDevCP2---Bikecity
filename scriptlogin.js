function validar(){
    //declarando a variavel
    let usuario =document.getElementById("usuario").value;
    let senha =document.getElementById("senha").value;
    if(usuario == "Admin" && senha === "12345"){
        window.open("quiz.html")
    }else{
        alert("usuario e senha inválidos")
    }
}