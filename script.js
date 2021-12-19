
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



/* checkbox start */
/* 'use strict';

let searchBox = document.querySelectorAll('.search-box input[type="text] + span');

searchBox.forEach(elm =>{
    elm.addEventListener('click'), () => {
        elm.previousElementSibling.value = '';
    };
}); */





/* auto shuffle text animation */

let words = document.querySelectorAll('.word');
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
setInterval(rotateText, 4000);

/* progress download */
/* const formProgress = document.querySelector('.form__progress');
const formStatus = document.querySelector('.form__status');
const formBytes = document.querySelector('.form__bytes');

const onProgress = (event) =>{
    const {loaded,total} = event;
    const percentage = Math.round((loaded/ total) * 100);

    formProgress.value = percentage;

    formBytes.textContent = `${loaded} of ${total} bytes`;
    formStatus.textContent = `${percentage}% uploaded...`
}

const onComplete = () => {
    formStatus.textContent = 'Uploaded File successfully'
};

const onError = () => {
    formStatus.textContent = 'Error uploading File!'
};

const onAbort = ()=>{
    formStatus.textContent ='Uplad aborted'
};

const uploadFile = (input) => {
    const file = input.files[0];

    const formData = new FormData();
    formData.append('file1',file);

    const ajax = new XMLHttpRequest();
    ajax.upload.addEventListener('progress', onProgress);
    ajax.addEventListener('load',onComplete);
    ajax.addEventListener('error', onError);
    ajax.addEventListener('abort', onAbort);

    ajax.open('POST', '/your-back-end-url');
    ajax.send(formData);
};



let str = "Io mi chiamo mi io ",
    
    split = str.split(" "),
    obj = {};

for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  } else {
    obj[split[i]]++;
  }
}

console.log(obj)



let words = "Io mi chiamo";

function countRepeatedWords(sentence) {
  let words = sentence.split(" ");
  let wordMap = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }
  return wordMap;
}

console.log(countRepeatedWords(words)); */