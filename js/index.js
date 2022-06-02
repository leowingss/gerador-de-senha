let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#btn-input");

let sizePassword = document.querySelector("#valueRange");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");


// Caracteres para criar a senha
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

// Esta função pega o valor do range escolhido
slider.oninput = function () {
    sizePassword.innerHTML = this.value
}

// Esta função é responsável por gerar uma senha de acordo com a variavel charset
const generatePassword = () => {
    let pass = '';
    for (let i = 0; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

// Esta função é responsável por copiar a senha gerada

const copyPassword = () => {
    navigator.clipboard.writeText(novaSenha);
}