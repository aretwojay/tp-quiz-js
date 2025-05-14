class QuizView {
  constructor() {}

  render(title, question, userAnswer) {
    const quizTitle = document.getElementById("quiz-title");
    quizTitle.innerHTML = title;
    question.render();
  }
}

export { QuizView };
