class AnswersView {
  constructor() {
    this.answersContainer = document.getElementById("answer-container");
  }

  renderResult({ questionTitle, correctAnswer, userAnswer }) {
    this.answersContainer.innerHTML += `
      <div>
        <h2>${questionTitle}</h2>
        <p>Réponse attendue : ${correctAnswer}</p>
        <p>Votre réponse: ${userAnswer}</p>
        <h4>Résultat : ${
          correctAnswer === userAnswer ? "Correct" : "Incorrect"
        }</h4>
      </div>
    `;
  }
}

export { AnswersView };
