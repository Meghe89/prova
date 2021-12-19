//START PASSWORD VALIDATOR
let state = false;

function showtoggle(){
    if(state){
        document.getElementById("myPassword").setAttribute("type","password");
        document.getElementById("eye").setAttribute("class","far fa-eye");
        state = false;
    }
    else{
        document.getElementById("myPassword").setAttribute("type", "text");
        document.getElementById("eye").setAttribute("class", "far fa-eye-slash");
        state = true;
    }
}

myPassword.onfocus = function(){
    document.getElementById("message").style.opacity = "1";
}

myPassword.onblur = function(){
    document.getElementById("message").style.opacity = "0";
}

//FOR VALIDATION

let Password = document.getElementById("myPassword");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let specialCHAR = document.getElementById("specialCHAR");
let length = document.getElementById("length");

Password.onkeyup = function(){

    // For first validation

    if (Password.value.match(/[0-9]/)) {
        document.getElementById('numberIcon').setAttribute("class", "fas fa-check")
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        document.getElementById('numberIcon').setAttribute("class","fas fa-times")
        number.classList.add("invalid");
        number.classList.remove("valid");
    }

    // For Second validation

    if (Password.value.match(/[a-z^A-Z]/)) {
        document.getElementById('charIcon').setAttribute("class", "fas fa-check")
        specialCHAR.classList.remove("invalid");
        specialCHAR.classList.add("valid");
    } else {
        document.getElementById('charIcon').setAttribute("class","fas fa-times")
        specialCHAR.classList.add("invalid");
        specialCHAR.classList.remove("valid");
    }
    // For third validation

    if (Password.value.match(/[A-Z]/)) {
        document.getElementById('capitalIcon').setAttribute("class", "fas fa-check")
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        document.getElementById('capitalIcon').setAttribute("class","fas fa-times")
        capital.classList.add("invalid");
        capital.classList.remove("valid");
    }
    // For forth validation

    if (Password.value.length >=8 ) {
        document.getElementById('lengthIcon').setAttribute("class", "fas fa-check")
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {length
        document.getElementById('lengthIcon').setAttribute("class","fas fa-times")
        length.classList.add("invalid");
        length.classList.remove("valid");
    }
} 

//END PASSWORD VALIDATOR