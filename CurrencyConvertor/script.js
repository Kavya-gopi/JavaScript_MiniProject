let currency=document.querySelectorAll(".dropdown");
let button=document.getElementById("btn1");
let input=document.getElementById("inp-val");
let result=document.getElementById("result");

let curr=fetch("https://api.frankfurter.app/currencies")
curr.then((res)=>res.json())
.then((res)=>displayDropDown(res))
.catch((msg)=>console.log(msg))

function displayDropDown(res){
    let curr1=Object.entries(res);
    console.log(curr1);
    for(let i=0;i<curr1.length;i++){
        console.log(curr1[i][0]);
        currency[0].innerHTML+=`<option value=${curr1[i][0]}>${curr1[i][0]}</option>`
        currency[1].innerHTML+=`<option value=${curr1[i][0]}>${curr1[i][0]}</option>`
        
    }
}

button.addEventListener('click',()=>{
    let currency1=currency[0].value;
    let currency2=currency[1].value;
    let inputVal=input.value;
    if(currency1===currency2){
        alert("currency should be different");
    }
    else{
        convert(currency1,currency2,inputVal);
    }
});

function convert(currency1,currency2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${currency1}&to=${currency2}`)
    .then(resp => (resp.json()))
    .then((data) => {
      document.getElementById('result').value = Object.values(data.rates)[0]
    });
}
