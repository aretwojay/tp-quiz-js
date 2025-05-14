class AnswersModel {
  constructor(question) {
    this.answers = question.options;
    this.question = question;
    this.userAnswer = null;
  }

  getAnswers() {
    return this.answers;
  }

  getQuestion() {
    return this.question;
  }

  setUserAnswer(userAnswer) {
    this.userAnswer = userAnswer;
  }

  getUserAnswer() {
    return this.userAnswer;
  }

  getCorrectAnswer() {
    return this.question.answer;
  }

  isUserAnswerCorrect() {
    return this.getCorrectAnswer() === this.userAnswer;
  }
}

export { AnswersModel };
