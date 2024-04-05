const quiz =[
    {
        "que":"Which of the following is Markup Language?",
        "a":"HTML",
        "b":"CSS",
        "c":"JAVASCRIPT",
        "d":"PHP",
        "correct":"a"
    },
    {
        "que":"Which of the following is Cascadding StyleSheet?",
        "a":"BootStrap",
        "b":"CSS",
        "c":"React",
        "d":"js",
        "correct":"b"
    },
     {
        "que":"Which of the following is Scripting Language?",
        "a":"C",
        "b":"C++",
        "c":"JAVASCRIPT",
        "d":"Java",
        "correct":"c"
     }
];

let index = 0;
let total = quiz.length;
let right = 0;
const ques = document.getElementById('ques');
const optionInputs =document.querySelectorAll('.option');



const loadQuestion = () =>{
    if(index == total)
       return end();
    else
      reset();
const data = quiz[index];

ques.innerText = `${index+1}) ${data.que}`;

optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = ()=>{
    const data = quiz[index];
    const ans = getAnswer();
    console.log(ans,data.correct);
    if(ans == data.correct)
       right++;
    
    
    index++;
    loadQuestion()
    return ;
}

const getAnswer = ()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
             if(input.checked){
                answer = input.value ;
             }    
        }
    )
    return answer;
}

const reset = ()=>{
    optionInputs.forEach(
        (input)=>{
             input.checked = false;
               
        }
    )
}

const end = ()=>{
    document.querySelector('.box').innerHTML = `
    <h3> Thank you for Playing The Quiz </h3>
     <h2> ${right}/${total} are correct.</h2>
    `
}

loadQuestion();

  
