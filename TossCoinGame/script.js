let toss=document.getElementById("toss");
let restart=document.getElementById("restart");
let heads=document.getElementById("heads");
let tails=document.getElementById("tails");
let coin=document.querySelector(".image-div")
let headsVal=0;
let tailsVal=0;

toss.addEventListener("click",()=>{
    let i=Math.floor(Math.random()*2);
    coin.style.animation="none";
    if(i==0){
        setTimeout(function(){
            coin.style.animation="spin-heads 3s forwards";
        },100);
        headsVal++;
    }
    else{
        setTimeout(function(){
            coin.style.animation="spin-tails 3s forwards";
        },100);
        tailsVal++;
    }
    setTimeout(updateStats,3000);
    disableButton();
})
function updateStats(){
    heads.textContent=headsVal;
    tails.textContent=tailsVal;
}

function disableButton(){
    toss.disabled=true;
    setTimeout(function(){
        toss.disabled=false;
    },3000);
}
restart.addEventListener('click',()=>{
    coin.style.transform="rotateX(0)";
    headsVal=0;
    tailsVal=0;
    updateStats();
})
/*function tossCoin(){
    return new Promise((resolve,reject)=>{
        let rand=Math.floor(Math.random()*2);
        if(rand==0){
            resolve();
        }
        else{
            reject();
        }
    })
}

toss.addEventListener('click',()=>{
    tossCoin().then(()=>heads.innerHTML=headsVal++)
    .catch(()=>tails.innerHTML=tailsVal++)
})

restart.addEventListener('click',()=>{
    heads.innerHTML=0;
    headsVal=0;
    tails.innerHTML=0;
    tailsVal=0;
})*/







