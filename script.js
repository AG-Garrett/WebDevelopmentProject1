// Function to grade the quiz
function gradeQuiz() {
  let score = 0;
  const totalQuestions = 5;
  let output = "";

  // Correct answers
  const correctAnswers = {
    q1: "https",
    q2: "B",
    q3: "C",
    q4: "C",
    q5: ["A", "B", "D"]
  };

  // Get user answers
  const q1 = document.getElementById("q1").value.trim().toLowerCase();
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');
  const q5Checked = document.querySelectorAll('input[name="q5"]:checked');

  const q5Answers = [];
  q5Checked.forEach(item => q5Answers.push(item.value));

  // Question 1
  if (q1 === correctAnswers.q1) {
    score++;
    output += `<p class="correct">Question 1: Correct. Correct answer: HTTPS</p>`;
  } else {
    output += `<p class="incorrect">Question 1: Incorrect. Correct answer: HTTPS</p>`;
  }

  // Question 2
  if (q2 && q2.value === correctAnswers.q2) {
    score++;
    output += `<p class="correct">Question 2: Correct. Correct answer: Chrome</p>`;
  } else {
    output += `<p class="incorrect">Question 2: Incorrect. Correct answer: Chrome</p>`;
  }

  // Question 3
  if (q3 && q3.value === correctAnswers.q3) {
    score++;
    output += `<p class="correct">Question 3: Correct. Correct answer: Appearance and layout</p>`;
  } else {
    output += `<p class="incorrect">Question 3: Incorrect. Correct answer: Appearance and layout</p>`;
  }

  // Question 4
  if (q4 && q4.value === correctAnswers.q4) {
    score++;
    output += `<p class="correct">Question 4: Correct. Correct answer: JavaScript</p>`;
  } else {
    output += `<p class="incorrect">Question 4: Incorrect. Correct answer: JavaScript</p>`;
  }

  // Question 5
  const sortedUser = q5Answers.slice().sort().join(",");
  const sortedCorrect = correctAnswers.q5.slice().sort().join(",");

  if (sortedUser === sortedCorrect) {
    score++;
    output += `<p class="correct">Question 5: Correct. Correct answers: Tabbed browsing, Built-in developer tools, Password management</p>`;
  } else {
    output += `<p class="incorrect">Question 5: Incorrect. Correct answers: Tabbed browsing, Built-in developer tools, Password management</p>`;
  }

  // Pass/fail
  const passFail = score >= 4
    ? `<p class="correct"><strong>Result: PASS</strong></p>`
    : `<p class="incorrect"><strong>Result: FAIL</strong></p>`;

  // Total score
  const totalScore = `<p><strong>Total Score: ${score} / ${totalQuestions}</strong></p>`;

  // Show results
  document.getElementById("results").innerHTML = `
    <h2>Quiz Results</h2>
    ${passFail}
    ${totalScore}
    ${output}
  `;
}

// Function to reset the quiz
function resetQuiz() {
  document.getElementById("results").innerHTML = `
    <h2>Quiz Results</h2>
    <p>Your results will appear here after submission.</p>
  `;
}