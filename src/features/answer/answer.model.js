class AnswerModel {
  constructor({ question, answer }) {
    this.answer = answer;
    this.userAnswer = null;
  }

  getAnswer() {
    return this.answer;
  }

  setUserAnswer(userAnswer) {
    this.userAnswer = userAnswer;
  }

  isUserAnswerCorrect() {
    return this.userAnswer === this.answer;
  }
}

export { AnswerModel };
