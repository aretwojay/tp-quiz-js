class AnswerView {
  constructor({ quiz, question, answer }) {
    this.quiz = quiz;
    this.question = question;
    this.answer = answer;
    this.quizContainer = document.getElementById("quiz-container");
  }

  renderAnswer() {
    const answerContainer = document.createElement("div");
    answerContainer.innerHTML = `
      <h2>Question ${this.question.title + 1}</h2>
      <p>Your answer: ${this.answer}</p>
    `;
    this.quizContainer.appendChild(answerContainer);
  }
}

export { AnswerView };
