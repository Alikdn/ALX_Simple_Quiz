// quiz.js
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4"; 
    
    selected = document.querySelector("input[name='quiz']:checked");
    const userAnswer = selected.value;
    
    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } 
    else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);