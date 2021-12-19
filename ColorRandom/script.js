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

/* rgba generator */
let outputBox = document.querySelector('.output');
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
}