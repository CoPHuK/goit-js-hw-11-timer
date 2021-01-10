// Получение ссылок 
const daysRef = document.querySelector(' [data-value=days]')
const hoursRef = document.querySelector(' [data-value=hours]')
const minsRef = document.querySelector(' [data-value=mins]')
const secsRef=document.querySelector(' [data-value=secs]')
//заполнение нулями
function pad(value) { 
    return String(value).padStart(2,'0')
}

const targetDate = new Date('Jul 17, 2021')


function timeCounter()
{ 
let dateNow = new Date()
let time = targetDate - dateNow  
const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

return { days, hours, mins, secs }
}

function setTime() {     
daysRef.textContent = timeCounter().days;
hoursRef.textContent = timeCounter().hours;
minsRef.textContent =timeCounter().mins;
secsRef.textContent = timeCounter().secs;
}
setTime()

setInterval(setTime, 1000)
