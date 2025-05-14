import { AnswersModel } from "./answers.model.js";
import { AnswersView } from "./answers.view.js";

class AnswersController {
  constructor(question) {
    this.answerModel = new AnswersModel(question);
    this.answerView = new AnswersView();
  }

  setUserAnswer(answer) {
    this.answerModel.setUserAnswer(answer);
  }

  getUserAnswer() {
    return this.answerModel.getUserAnswer();
  }

  isUserAnswerCorrect() {
    return this.answerModel.isUserAnswerCorrect();
  }

  render() {
    this.answerView.renderResult({
      questionTitle: this.answerModel.getQuestion().question,
      correctAnswer: this.answerModel.getCorrectAnswer(),
      userAnswer: this.getUserAnswer(),
    });
  }
}

export { AnswersController };
