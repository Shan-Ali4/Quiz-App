const questions = [
    {
      'question': "Which of the following is a markup language?",
      'a': "HTML",
      'b': "CSS",
      'c': "JavaScript",
      'd': "PHP",
      'correct': "a"
    },
    {
      'question': "What is the capital of Australia?",
      'a': "Sydney",
      'b': "Melbourne",
      'c': "Canberra",
      'd': "Perth",
      'correct': "c"
    },
    {
      'question': "Which programming language is known as the 'mother of all languages'?",
      'a': "C",
      'b': "Python",
      'c': "Fortran",
      'd': "Assembly",
      'correct': "c"
    },
    {
      'question': "What is the largest organ in the human body?",
      'a': "Liver",
      'b': "Brain",
      'c': "Heart",
      'd': "Skin",
      'correct': "d"
    }
  ];

let index = 0
let total = questions.length
let right = 0
    wrong = 0
const quesBox = document.getElementById('queBox')
const optionInput = document.querySelectorAll('.options')
const loadQuestion = () =>{
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = `${index+1} ${data.question}`
    optionInput[0].nextElementSibling.innerText = data.a
    optionInput[1].nextElementSibling.innerText = data.b
    optionInput[2].nextElementSibling.innerText = data.c
    optionInput[3].nextElementSibling.innerText = data.d
    console.log(data)
}
const submitQuiz = () =>{
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct){
        right++
    }else {
        wrong++
    }
    index++
    loadQuestion()
    return
}

const getAnswer = ()=>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value
            }
        }
    )
    return answer
}

const reset = () =>{
    optionInput.forEach(
        (input)=>{
            input.checked = false
    })

}
const endQuiz = () =>{
    document.getElementById('box').innerHTML = `
    <h3> Thank You For Playing The Quiz </h3>
    <h2> ${right} / ${total} Are Correct </h2>
    `
}
loadQuestion()