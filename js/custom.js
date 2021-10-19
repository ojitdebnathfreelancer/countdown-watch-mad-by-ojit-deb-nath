// get elements from html document 
var years = document.getElementById("years");

var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
var days = document.getElementById("days");


// creat a function for coundown times 
function countDown()
{
    var crrentYear = new Date().getFullYear();
    var nextYear = new Date(`may 27 ${crrentYear + 1} 00:00:00`);
    var crrentTime = new Date();
    var deff = nextYear - crrentTime;
    var s =Math.floor(deff / 1000) % 60;
    var m =Math.floor(deff / 1000 / 60) % 60;
    var h =Math.floor(deff / 1000 / 60 / 60) % 24;
    var d =Math.floor(deff / 1000 / 60 / 60 / 24);
    years.innerHTML = nextYear.getFullYear();
    days.innerHTML = d;
    minutes.innerHTML = m;
    hours.innerHTML = h;
    seconds.innerHTML = s;
    setInterval(countDown,1000)
}

countDown();