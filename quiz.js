const quizData = [
    {
        question: "Which type of a language is JavaScript?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        correct: "b",
    },
    {
        question: "The \"function\" and \" var\" are known as:",
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        correct: "c",
    },
    {
        question: "In the JavaScript, which one of the following is not considered as an error?",
        a: 'Syntax error' ,
        b: 'Missing of semicolons',
        c: 'Division by zero',
        d: 'Missing of Bracket',
        correct: "c",
    },
    {
        question: "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        a: "slice()",
        b: "split()",
        c: "substr()",
        d: "search()",
        correct: "c",
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        a: "interface",
        b: "throws",
        c: "program",
        d: "short",
        correct: "c",
    },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("option_a");
const b_text = document.getElementById("option_b");
const c_text = document.getElementById("option_c");
const d_text = document.getElementById("option_d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let display='';

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } 
        else 
        {
            if(score===5)
            {
                display='Congratulations, You are a JavaScript Master!';
            }
            else if(score===4)
            {
                display='Result: Yes, you can proceed';
            }
            else if(score===3)
            {
                display='Result: Maybe. Try again if you want for a better score';
            }
            else if(score===2)
            {
                display='Result: Maybe. Please try again for a better score';
            }
            else
            {
                display='Result: Sorry, you need to improve your score. Please try again';
            }
            quiz.innerHTML = `<h2 style="text-align:center">You answered ${score} questions correctly out of ${quizData.length} questions.</h2>
            <h2 style="text-align:center">Your score is ${score}/${quizData.length}.</h2>
            <h2 style="color:red" style="text-align:center">${display}</h2>
            <h2 style="text-align:center">Thank you for taking the quiz!</h2>              
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});