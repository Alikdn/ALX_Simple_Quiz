// quiz.js
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";
    
    selected = document.querySelector("input[name='quiz']:checked");
    const userAnswer = selected.value;
    
    // Check if an answer was selected
    if (!userAnswer) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }
    
    // Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);