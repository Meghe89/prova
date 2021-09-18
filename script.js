
//START PASSWORD VALIDATOR
/* let state = false;

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
} */

//END PASSWORD VALIDATOR

//RANDOM COLOR GENERATOR START
/* let letters = "0123456789ABCDEF"
const body = document.querySelector("body")
const colorelement = document.querySelector("#color")
function getColor(){
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() *
            letters.length)];        
    }
    body.style.backgroundColor = color;
    colorelement.innerHTML = color;
} */
//RANDOM COLOR GENERATOR END

//STATUS WIFI START
/* window.addEventListener('load',
function detection(){
    var x = navigator.online ? "online" : "offline";
    document.getElementById("status").innerHTML = x;
});
window.addEventListener('mousemove',
function detection(){
    var x = navigator.online ? "online" : "offline";
    document.getElementById("status").innerHTML = x;
}); */
//STATUS WIFI END

//js counter start
/* let count = 0;
let counter = document.querySelector('.counter');

counter.innerHTML = count;

document.getElementById('plus').addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
});

document.getElementById('minus').addEventListener('click', () => {
    count--;
    counter = (count < 0) ? 0 : count;
    counter.innerHTML = count;
}); */


//js counter end

/* checkbox start */
/* 'use strict';

let searchBox = document.querySelectorAll('.search-box input[type="text] + span');

searchBox.forEach(elm =>{
    elm.addEventListener('click'), () => {
        elm.previousElementSibling.value = '';
    };
}); */

/* TIC TAC TOE */

/* function myfunc(){
    let b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    b3 = document.getElementById('b3').value;
    b4 = document.getElementById('b4').value;
    b5 = document.getElementById('b5').value;
    b6 = document.getElementById('b6').value;
    b7 = document.getElementById('b7').value;
    b8 = document.getElementById('b8').value;
    b9 = document.getElementById('b9').value;

    if((b1=='x' || b1 == 'X') && (b2=='x' || b2 == 'X') && (b3=='x' || b3 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player X won');
    } else if((b1=='x' || b1 == 'X') && (b4=='x' || b4 == 'X') && (b7=='x' || b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player X won');
    } else if((b7=='x' || b7 == 'X') && (b7=='x' || b7 == 'X') && (b9=='x' || b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        window.alert('Player X won');
    }else if((b3=='x' || b3 == 'X') && (b6=='x' || b6 == 'X') && (b9=='x' || b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        window.alert('Player X won');
    }else if((b1=='x' || b1 == 'X') && (b5=='x' || b5 == 'X') && (b9=='x' || b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        window.alert('Player X won');
    }else if((b3=='x' || b3 == 'X') && (b5=='x' || b5 == 'X') && (b7=='x' || b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b6').disabled = true;
        window.alert('Player X won');
    }else if((b2=='x' || b2 == 'X') && (b5=='x' || b5 == 'X') && (b8=='x' || b8 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        document.getElementById('b1').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player X won');
    }else if((b4=='x' || b4 == 'X') && (b5=='x' || b5 == 'X') && (b6=='x' || b6 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player X won');
    }else if((b1=='0' || b1 == '0') && (b2=='0' || b2 == '0') && (b3=='0' || b3 == '0')){
        document.getElementById('print').innerHTML = "Player y won";

        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player y won');
    }else if((b1=='0' || b1 == '0') && (b4=='0' || b4 == '0') && (b7=='0' || b7 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player 0 won');
    } else if((b7=='0' || b7 == '0') && (b7=='0' || b7 == '0') && (b9=='0' || b9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        window.alert('Player 0 won');
    }else if((b3=='0' || b3 == '0') && (b6=='0' || b6 == '0') && (b9=='0' || b9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        window.alert('Player 0 won');
    }else if((b1=='0' || b1 == '0') && (b5=='0' || b5 == '0') && (b9=='0' || b9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        window.alert('Player 0 won');
    }else if((b3=='0' || b3 == '0') && (b5=='0' || b5 == '0') && (b7=='0' || b7 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b6').disabled = true;
        window.alert('Player 0 won');
    }else if((b2=='0' || b2 == '0') && (b5=='0' || b5 == '0') && (b8=='0' || b8 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        document.getElementById('b1').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player 0 won');
    }else if((b4=='0' || b4 == '0') && (b5=='0' || b5 == '0') && (b6=='0' || b6 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player 0 won');
    }else if((b1=='X' || b1 =='0') && (b2 =='X' || b2 =='0')&& (b3 =='X' || b3 =='0')&& (b4 =='X' || b4 =='0')&& (b5 =='X' || b5 =='0')&& (b6 =='X' || b6 =='0')&& (b7 =='X' || b7 =='0')&& (b8 =='X' || b8 =='0')&& (b9 =='X' || b9 =='0')){
        document.getElementById('print').innerHTML="Match Tie"
        window.alert('Match Tie')
    }else{
        if (flag == 1){
            document.getElementById('print').innerHTML = "Player X Turn"
        }else{
            document.getElementById('print').innerHTML= "Player 0 Turn"
        }
    } 
}

function myfunc_2(){
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('b3').value = '';
    document.getElementById('b4').value = '';
    document.getElementById('b5').value = '';
    document.getElementById('b6').value = '';
    document.getElementById('b7').value = '';
    document.getElementById('b8').value = '';
    document.getElementById('b9').value = '';
}
flag = 1;
function myfunc_3(){
    if (flag ==1){
        document.getElementById('b1').value = "X";
        document.getElementById('b1').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b1').value = "0";
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}
function myfunc_4(){
    if (flag ==1){
        document.getElementById('b2').value = "X";
        document.getElementById('b2').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b2').value = "0";
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}
function myfunc_5(){
    if (flag ==1){
        document.getElementById('b3').value = "X";
        document.getElementById('b3').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b3').value = "0";
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}
function myfunc_6(){
    if (flag ==1){
        document.getElementById('b4').value = "X";
        document.getElementById('b4').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b4').value = "0";
        document.getElementById('b4').disabled = true;
        flag = 1;
    }
}
function myfunc_7(){
    if (flag ==1){
        document.getElementById('b5').value = "X";
        document.getElementById('b5').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b5').value = "0";
        document.getElementById('b5').disabled = true;
        flag = 1;
    }
}
function myfunc_8(){
    if (flag ==1){
        document.getElementById('b6').value = "X";
        document.getElementById('b6').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b6').value = "0";
        document.getElementById('b6').disabled = true;
        flag = 1;
    }
}
function myfunc_9(){
    if (flag ==1){
        document.getElementById('b7').value = "X";
        document.getElementById('b7').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b7').value = "0";
        document.getElementById('b7').disabled = true;
        flag = 1;
    }
}
function myfunc_10(){
    if (flag ==1){
        document.getElementById('b8').value = "X";
        document.getElementById('b8').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b8').value = "0";
        document.getElementById('b8').disabled = true;
        flag = 1;
    }
}
function myfunc_11(){
    if (flag ==1){
        document.getElementById('b9').value = "X";
        document.getElementById('b9').disabled = true;
        flag = 0;
    } else {
        document.getElementById('b9').value = "0";
        document.getElementById('b9').disabled = true;
        flag = 1;
    }
} */

/* rgba generator */
/* let outputBox = document.querySelector('.output');
let getBody = document.body;
function getValue(){
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    let alpha = document.getElementById('alpha').value;
    getBody.style.background=`rgba(${red},${green},${blue},${alpha})`;
    outputBox.innerHTML = `rgba(${red},${green},${blue},${alpha})`;
}
function copy() {
    let element = document.createElement('textarea');
    element.value = outputBox.textContent;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    alert('Copied!')
} */

/* auto shuffle text animation */

/* let words = document.querySelectorAll('.word');
words.forEach(word =>{
    let letters = word.textContent.split('');
    word.textContent = '';
    letters.forEach(letter =>{
        let span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = '1';
let rotateText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex ===
        maxWordIndex ? words[0] : words[currentWordIndex +1];
    Array.from(currentWord.children).forEach((letter,i) =>{
        setTimeout(() =>{
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = '1';
    Array.from(nextWord.children).forEach((letter,i) => {
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        }, 340+i*80);
    });
    currentWordIndex = 
    currentWordIndex===maxWordIndex ? 0 :currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000); */