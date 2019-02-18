const clockTitle=document.getElementById("clock_time");
const dateTitle=document.getElementById("calender_date");

function getTime(){
  const date=new Date();

  const minutes=date.getMinutes();
  const hours=date.getHours();
  const seconds=date.getSeconds();
  clockTitle.innerText=`${hours<10 ? `0${hours}`:hours}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}` : seconds}`;

  const year=date.getFullYear();
  const month=date.getMonth();
  const day=date.getDate();
  const dayLabel=date.getDay();

  const weekday=new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  const months=new Array('January', 'February', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  dateTitle.innerText=`${weekday[dayLabel]}, ${months[month]} ${day<10 ? `0${day}` : day}, ${year}`;

  if(hours>6 && hours<18){
    document.getElementById("clock").style.backgroundColor="#1E90FF";
    document.getElementById("calender").style.backgroundColor="#1E90FF";
  }else if(hours>=5 && hours<=6){
    document.getElementById("clock").style.backgroundColor="#191970";
    document.getElementById("calender").style.backgroundColor="#191970";
  }else if(hours>=18 && hours<21){
    document.getElementById("clock").style.backgroundColor="#191970";
    document.getElementById("calender").style.backgroundColor="#191970";
  }else{
    document.getElementById("clock").style.backgroundColor="black";
    document.getElementById("calender").style.backgroundColor="black";
  }
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();