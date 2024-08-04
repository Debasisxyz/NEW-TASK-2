const quizData = [
    {
        question:"Which of these layers of the atmosphere consists of the ozone layer that is responsible for absorbing the Ultra-Violet (UV) light??",
        a:"Troposphere",
        b:"Mesosphere",
        c:"Stratosphere",
        d:"None of these",
        correct:"a"
    },
    {
        question:"Which of these are essential non-metallic minerals?",
        a:"Coal, silica, clay, cement",
        b:"Iron, copper, aluminium, zinc",
        c:"Gold, platinum, silver",
        d:"Granite, limestone, marble",
        correct:"a"

    },
    {
        question:"What is the estimated percentage of forest land that India should ideally have?",
        a:"15%",
        b:"50%",
        c:"44%",
        d:"33%",
        correct:"d"
    },
    {
        question:"Which of these elements is considered to be the largest source of commercial energy consumption in the world?",
        a:"Nuclear",
        b:"Natural gas",
        c:"Oil",
        d:" Coal",
        correct:"c"
    },
    {
        question:"Which of these does not constitute to be a reason for the loss of forests?",
        a:"Extinction of species",
        b:"Increasing use of sood",
        c:"Building dams and mining",
        d:"Extensive usage of fuel woods",
        correct:"d"
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer ===quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button oneclick="location.reload()">Reload</button>
            `
        }
    }

})