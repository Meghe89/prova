const mod = document.querySelector('.mode');
const mainBox = document.querySelector('.mainBox');

mod.addEventListener('click',()=>{
    mainBox.classList.toggle('dark');
    document.querySelector('.fa-sun-o').classList.toggle('fa-moon-o');
});
setInterval(()=>{
    navigator.getBattery().then(function (battery) {
        let level = battery.level;
        document.querySelector('.percentage').innerHTML = (level*100) + '%';
    });
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = 30*hours +minutes/2;
    const minute = 6 * minutes;
    const second = 6 *seconds;
    

    if (hours >= 12) {
        var period = 'pm';
    }else{
        var period = 'am'
    }
    document.querySelector('.med').innerHTML = period;
    document.querySelector('.hr').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.min').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.sec').style.transform= `rotate(${second}deg)`;
},1000);

let date = new Date();
let month = date.getMonth();
let day = date.getDate();
let weekDay = date.getDay()

function settDay(day) {
    switch (day) {
        case 1:
            return 'Lunedì';
            break;
        case 2:
            return 'Martedì';
            break;
        case 3:
            return 'Mercoledì';
            break;
        case 4:
            return 'Giovedì';
            break;
        case 5:
            return 'Venerdì';
            break;
        case 6:
            return 'Sabato';
            break;
        case 7:
            return 'Domenica';
            break;
             
    }
}


function nameMonth(mese) {
    switch (mese) {
        case 0:
            return 'Gennaio';
            break;
        case 1:
            return 'Febbraio';
            break;
        case 2:
            return 'Marzo';
            break;
        case 3:
            return 'Aprile';
            break;
        case 4:
            return 'Maggio';
            break;
        case 5:
            return 'Giugno';
            break;
        case 6:
            return 'Luglio';
            break;
        case 7:
            return 'Agosto';
            break;
        case 8:
            return 'Settembre';
            break;
        case 9:
            return 'Ottobre';
            break;
        case 10:
            return 'Novembre';
            break;
        case 11:
            return 'Dicembre';
            break;
             
    }
}
/* const ri = document.querySelector('.date');
ri.innerHTML = `${nameMonth(mese)}${day}${settDay}`; */