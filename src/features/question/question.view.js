class QuestionView {
  constructor(question) {
    this.question = question;
  }

  render(userAnswer) {
    const questionElement = document.createElement("div");
    questionElement.className = "container";
    questionElement.innerHTML = `
      <h2>${this.question.question}</h2>
      ${this.question.options
        .map(
          (option, index) =>
            `<div class="option">
          <input type="radio" name="option" id="option${index}" value="${option}" ${
              userAnswer === option ? "checked" : ""
            }>
          <label for="option${index}">${option}</label>
        </div>`
        )
        .join("")}
    `;
    return questionElement;
  }

  isQuestionAnswered() {
    const selectedOption = document.querySelector(
      'input[name="option"]:checked'
    );
    return selectedOption !== null;
  }
}
export { QuestionView };
