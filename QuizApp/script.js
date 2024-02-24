const button = document.getElementById("submit");
const button1=document.getElementById("answer-view");
//question 1
let ans1 = document.getElementsByName("answer1");
let corrOpt = document.getElementById("correct-ans");
let crtAns = document.getElementById("opt1");
let inCorrAns1 = document.getElementById("opt2").value;
let inCorrAns2 = document.getElementById("opt3").value;
let inCorrAns3 = document.getElementById("opt4").value;
let incorrOpt1 = document.getElementById("incorr-opt1");
let incorrOpt2 = document.getElementById("incorr-opt2");
let incorrOpt3 = document.getElementById("incorr-opt3");
let val1 = crtAns.value;

//question 2
let ans2 = document.getElementsByName("answer2");
let crtAns2 = document.getElementById("optt4");
let corrOpt2 = document.getElementById("corr-opt");
let inCorrAns1_qn2 = document.getElementById("optt1").value;
let inCorrAns2_qn2 = document.getElementById("optt2").value;
let inCorrAns3_qn2 = document.getElementById("optt3").value;
let incorrOpt1_qn2 = document.getElementById("in-op");
let incorrOpt2_qn2 = document.getElementById("in-op1");
let incorrOpt3_qn2 = document.getElementById("in-op2");
let val2 = crtAns2.value;

//question 3
let ans3 = document.getElementsByName("answer3");
let crtAns3 = document.getElementById("opti1");
let corrOpt3 = document.getElementById("corr-opt1");
let inCorrAns1_qn3 = document.getElementById("opti2").value;
let inCorrAns2_qn3 = document.getElementById("opti3").value;
let inCorrAns3_qn3 = document.getElementById("opti4").value;
let incorrOpt1_qn3 = document.getElementById("in-opt1");
let incorrOpt2_qn3 = document.getElementById("in-opt2");
let incorrOpt3_qn3 = document.getElementById("in-opt3");
let val3 = crtAns3.value;

//question 4
let ans4 = document.getElementsByName("answer4");
let crtAns4 = document.getElementById("optii2");
let corrOpt4 = document.getElementById("optt-ans");
let inCorrAns1_qn4 = document.getElementById("optii1").value;
let inCorrAns2_qn4 = document.getElementById("optii3").value;
let inCorrAns3_qn4 = document.getElementById("optii4").value;
let incorrOpt1_qn4 = document.getElementById("in-optt1");
let incorrOpt2_qn4 = document.getElementById("in-optt2");
let incorrOpt3_qn4 = document.getElementById("in-optt3");
let val4 = crtAns4.value;

//question 5
let ans5 = document.getElementsByName("answer5");
let crtAns5 = document.getElementById("optio1");
let corrOpt5 = document.getElementById("crt-opt");
let inCorrAns1_qn5 = document.getElementById("optio2").value;
let inCorrAns2_qn5 = document.getElementById("optio3").value;
let inCorrAns3_qn5 = document.getElementById("optio4").value;
let incorrOpt1_qn5 = document.getElementById("in-opti1");
let incorrOpt2_qn5 = document.getElementById("in-opti2");
let incorrOpt3_qn5 = document.getElementById("in-opti3");
let val5 = crtAns5.value;
//result 
let res1=document.getElementById("res1");
let res2=document.getElementById("res2");
let res3=document.getElementById("res3");
let res4=document.getElementById("res4");
let res5=document.getElementById("res5");

//score
let score1=document.getElementById("score");
let score=0;
console.log(score);

button.addEventListener("click", (e) => {
  e.preventDefault();
  for (let ans of ans1) {
    //console.log(ans);
    if (ans.checked) {
      //console.log(ans);
      let selected = ans.value;
      console.log(selected);
      if (selected == val1) {
        console.log(ans);
        console.log(selected == val1);
        console.log("Correct Answer");
        score++;
        // corrOpt.style.borderColor="green";
        corrOpt.style.backgroundColor = "rgb(133,225,46)";
      } else {
        console.log("wrong Ans");
        if (ans.checked) {
          let selected = ans.value;
          console.log(selected);
          if (selected == inCorrAns1) {
            incorrOpt1.style.backgroundColor = "rgb(242, 162, 160)";
          } else if (selected == inCorrAns2) {
            incorrOpt2.style.backgroundColor = "rgb(242, 162, 160)";
          } else {
            incorrOpt3.style.backgroundColor = "rgb(242, 162, 160)";
          }
        }
      }
    }
  }
  for (let ans of ans2) {
    console.log(ans);
    if (ans.checked) {
      //console.log(ans);
      let selected = ans.value;
      console.log(selected);
      if (selected == val2) {
        console.log(ans);
        console.log(selected == val2);
        console.log("Correct Answer");
        score++;
        // corrOpt.style.borderColor="green";
        corrOpt2.style.backgroundColor = "rgb(133,225,46)";
      } else {
        console.log("wrong Ans");
        if (ans.checked) {
          let selected = ans.value;
          console.log(selected);
          if (selected == inCorrAns1_qn2) {
            incorrOpt1_qn2.style.backgroundColor = "rgb(242, 162, 160)";
          } else if (selected == inCorrAns2_qn2) {
            incorrOpt2_qn2.style.backgroundColor = "rgb(242, 162, 160)";
          } else {
            incorrOpt3_qn2.style.backgroundColor = "rgb(242, 162, 160)";
          }
        }
      }
    }
  }
  for (let ans of ans3) {
    //console.log(ans);
    if (ans.checked) {
      //console.log(ans);
      let selected = ans.value;
      console.log(selected);
      if (selected == val3) {
        console.log(ans);
        console.log(selected == val3);
        console.log("Correct Answer");
        score++;
        // corrOpt.style.borderColor="green";
        corrOpt3.style.backgroundColor = "rgb(133,225,46)";
      } else {
        console.log("wrong Ans");
        if (ans.checked) {
          let selected = ans.value;
          console.log(selected);
          if (selected == inCorrAns1_qn3) {
            incorrOpt1_qn3.style.backgroundColor = "rgb(242, 162, 160)";
          } else if (selected == inCorrAns2) {
            incorrOpt2_qn3.style.backgroundColor = "rgb(242, 162, 160)";
          } else {
            incorrOpt3_qn3.style.backgroundColor = "rgb(242, 162, 160)";
          }
        }
      }
    }
  }
  for (let ans of ans4) {
    //console.log(ans);
    if (ans.checked) {
      //console.log(ans);
      let selected = ans.value;
      console.log(selected);
      if (selected == val4) {
        console.log(ans);
        console.log(selected == val1);
        console.log("Correct Answer");
        score++;
        // corrOpt.style.borderColor="green";
        corrOpt4.style.backgroundColor = "rgb(133,225,46)";
      } else {
        console.log("wrong Ans");
        if (ans.checked) {
          let selected = ans.value;
          console.log(selected);
          if (selected == inCorrAns1_qn4) {
            incorrOpt1_qn4.style.backgroundColor = "rgb(242, 162, 160)";
          } else if (selected == inCorrAns2) {
            incorrOpt2_qn4.style.backgroundColor = "rgb(242, 162, 160)";
          } else {
            incorrOpt3_qn4.style.backgroundColor = "rgb(242, 162, 160)";
          }
        }
      }
    }
  }
  for (let ans of ans5) {
    //console.log(ans);
    if (ans.checked) {
      //console.log(ans);
      let selected = ans.value;
      console.log(selected);
      if (selected == val5) {
        console.log(ans);
        console.log(selected == val5);
        console.log("Correct Answer");
        score++;
        // corrOpt.style.borderColor="green";
        corrOpt5.style.backgroundColor = "rgb(133,225,46)";
      } else {
        console.log("wrong Ans");
        if (ans.checked) {
          let selected = ans.value;
          console.log(selected);
          if (selected == inCorrAns1_qn5) {
            incorrOpt1_qn5.style.backgroundColor = "rgb(242, 162, 160)";
          } else if (selected == inCorrAns2) {
            incorrOpt2_qn5.style.backgroundColor = "rgb(242, 162, 160)";
          } else {
            incorrOpt3_qn5.style.backgroundColor = "rgb(242, 162, 160)";
          }
        }
      }
    }
  }
  button1.addEventListener("click",()=>{
    res1.textContent=`Correct Answer:
                    ${val1}`;
    corrOpt.style.backgroundColor = "rgb(133,225,46)";

    res2.textContent=`Correct Answer:
                    ${val2}`;
    corrOpt2.style.backgroundColor = "rgb(133,225,46)";

    res3.textContent=`Correct Answer:
                    ${val3}`;
    corrOpt3.style.backgroundColor = "rgb(133,225,46)";

    res4.textContent=`Correct Answer:
                    ${val4}`;
    corrOpt4.style.backgroundColor = "rgb(133,225,46)";

    res5.textContent=`Correct Answer:
                    ${val5}`;
    corrOpt5.style.backgroundColor = "rgb(133,225,46)";

    
  
  })
  
  console.log(score);
  if(score<=5){
    score1.textContent=`Your Score is ${score}`;
  }
  

});
function submitForm(){
  document.getElementById("submit").disabled="true";
}




