const monthName1= document.getElementById("month_name");
const dayName1=document.getElementById("day_name");
const date1=document.getElementById("date");
const year1=document.getElementById("year");
const time1=document.getElementById("time");

const date = new Date();
const month= date.getMonth();
// const day=date.getDay();
monthName1.innerText=date.toLocaleString("english",{month:"long"}
);

dayName1.innerText=date.toLocaleString("english",{weekday:"long"});

date1.innerText=date.getDate();

year1.innerText=date.getFullYear();

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    time1.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();