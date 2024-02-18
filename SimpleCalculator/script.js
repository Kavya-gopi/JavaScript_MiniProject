let output_box=document.getElementById('inp-box');
// console.log(output_box);

//percent value
let btn_percent=document.getElementById('per-val');
// console.log(btn_percent);
btn_percent.addEventListener('click',()=>{
    output_box.value+=btn_percent.value;
})
//button 7
let btn7=document.getElementById('sev-val');
// console.log(btn7);

btn7.addEventListener('click',function(){
    output_box.value+=btn7.value;
})

//button 8
let btn8=document.getElementById('eig-val');
// console.log(btn8);

btn8.addEventListener('click',function(){
    output_box.value+=btn8.value;
})
//button 4
let btn4=document.getElementById('four-val');
// console.log(btn4);
btn4.addEventListener('click',()=>{
    output_box.value+=btn4.value;
})
//button 5
let btn5=document.getElementById('five-val');
// console.log(btn5);
btn5.addEventListener('click',()=>{
    output_box.value+=btn5.value;
})
//button 6
let btn6=document.getElementById('six-val');
// console.log(btn6);
btn6.addEventListener('click',()=>{
    output_box.value+=btn6.value;
})
//button 1
let btn1=document.getElementById('one-val');
// console.log(btn1);
btn1.addEventListener('click',()=>{
    output_box.value+=btn1.value;
})
//button 2
let btn2=document.getElementById('two-val');
// console.log(btn2);
btn2.addEventListener('click',()=>{
    output_box.value+=btn2.value;
})
//button 3
let btn3=document.getElementById('three-val');
// console.log(btn3);
btn3.addEventListener('click',()=>{
    output_box.value+=btn3.value;
})
//button 9
let btn9=document.getElementById('nine-val');
// console.log(btn9);
btn9.addEventListener('click',()=>{
    output_box.value+=btn9.value;
})
//button 0
let btn0=document.getElementById('zero-val');
// console.log(btn0);
btn0.addEventListener('click',()=>{
    output_box.value+=btn0.value;
})
//button .
let btn_dot=document.getElementById('dot-val');
// console.log(btn_dot);
btn_dot.addEventListener('click',()=>{
    output_box.value+=btn_dot.value;
})

//AC clear button
let btn_cl=document.getElementById('ac-btn');
btn_cl.addEventListener('click',()=>{
    output_box.value="";
})

//del button
let del_btn=document.getElementById('del-btn');
del_btn.addEventListener('click',()=>{
    output_box.value=output_box.value.slice(0,-1);
})
//+ op btn
let add_op=document.getElementById('add-op');
add_op.addEventListener('click',()=>{
    output_box.value+=add_op.value;
})
//* op btn
let mul_op=document.getElementById('mul-op');
mul_op.addEventListener('click',()=>{
    output_box.value+=mul_op.value;
})
//- op btn
let sub_op=document.getElementById('sub-op');
sub_op.addEventListener('click',()=>{
    output_box.value+=sub_op.value;
})
// divop btn
let div_op=document.getElementById('div-op');
div_op.addEventListener('click',()=>{
    output_box.value+=div_op.value;
})

//Calculate function
let output;
let calci=document.getElementById('equ-val');
calci.addEventListener('click',()=>{
    try{
        output_box.value=eval(output_box.value);
    }
    catch(err){
        alert('Invalid');
    }
})

