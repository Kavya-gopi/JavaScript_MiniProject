let hours=document.getElementById("hours");
let mins=document.getElementById("minutes");
let secs=document.getElementById("seconds");
let ampm=document.getElementById("ampm");

function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    if(hr>12){
        hr=hr-12;
        ampm.innerHTML='PM';
    }
    hours.innerHTML=padZero(hr);
    mins.innerHTML=padZero(min);
    secs.innerHTML=padZero(sec) ; 

}
function padZero(num){
    return num<10?"0"+num:num;
}
setInterval(displayTime,1000)



