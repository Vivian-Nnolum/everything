"use strict";
const questions = [
    {
        question: "eeffffg",
        options: ["h", "hh", "hhh"],
        correctAnswer: "j"
    },
    {
        question: "eessssg",
        options: ["hyy", "hy", "hhyh"],
        correctAnswer: "jg"
    },
    {
        question: "ekkkkkfffg",
        options: ["hll", "hllllh", "hhlllh"],
        correctAnswer: "nn"
    },
];
let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";
    nextButton.style.display = "none";
    showOptions(currentQuestion.options);
}
function showOptions(options) {
    answersElement.innerHTML = "";
    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "answer";
        button.onclick = () => selectAnswer(option);
        answersElement.appendChild(button);
    });
}
//     currentQuestion.options.forEach(Option => {
//         const button = document.createElement("button");
//         button.textContent=Option;
//         button.className="answer";
//         button.onclick =() => selectAnswer(Option);
//         answersElement.appendChild(button);
//     });
// }
function selectAnswer(selected) {
    const correct = questions[currentQuestionIndex].correctAnswer;
    if (selected === correct) {
        score++;
    }
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
nextButton.addEventListener("click", handleNextButton);
//     nextButton.addEventListener("click",() => {
//         currentQuestionIndex++;
//         if(currentQuestionIndex< questions.length){
//             showQuestion();
//             nextButton.style.display= "none";
//         }else{
//             showScore()
//         }
//     });
function showScore() {
    questionElement.textContent = "Quiz Completed!";
    answersElement.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `Your score: ${score}/${questions.length}`;
}
showQuestion();
