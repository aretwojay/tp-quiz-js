class QuizView {
  constructor() {}

  render(title, question, userAnswer) {
    const quizTitle = document.getElementById("quiz-title");
    quizTitle.innerHTML = title;
    question.render(userAnswer);
  }

  renderResults(questions) {
    const finalScore = questions.reduce(
      (acc, question) => acc + (question.isUserAnswerCorrect() ? 1 : 0),
      0
    );
    for (const question of questions) {
      question.renderAnswer();
    }
    const finalScoreElement = document.getElementById("final-score");
    finalScoreElement.innerHTML = `Votre score final est de ${finalScore} sur ${questions.length}.`;
  }
}

export { QuizView };
