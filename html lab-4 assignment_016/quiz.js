
let quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which is the largest ocean on Earth?", answer: "pacific ocean" },
    { question: "What is 10 - 4?", answer: "6" },
    { question: "CSS is used for styling which type of document?", answer: "html" },
    { question: "Which gas do plants release during photosynthesis?", answer: "oxygen" }
    
];


function runQuiz() {


    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {

        let currentQ = quizQuestions[i];

        let userAns = prompt(currentQ.question);

        if (userAns === null) {
            alert("Quiz cancelled.");
            return;
        }

      
        userAns = userAns.toLowerCase().trim();

      
        if (userAns === currentQ.answer) {
            score++;
            alert("Correct! 👍");
        } else {
            alert("Incorrect! ❌\nCorrect Answer: " + currentQ.answer);
        }
    }

   
    alert("Quiz Finished!\nYour Score: " + score + " / " + quizQuestions.length);
}