var alertBox = document.querySelector('.alertBox');

function getPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLenght = 10;
    var password = "";

    for(var i = 0; i<passwordLenght; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById('password').value = password;
    alertBox.innerHTML = 'Código copiado: ' + password;
}

function copyPassword(){
    var copyPassText = document.getElementById('password');
    copyPassText.select();
    copyPassText.setSelectionRange(0,9999);
    document.execCommand('copy');
  
    alertBox.classList.toggle('active');
    setTimeout(function () {
        alertBox.classList.toggle('active');
    }, 4000);
}