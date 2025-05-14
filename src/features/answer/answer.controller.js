import { AnswerModel } from "./answer.model.js";
import { AnswerView } from "./answer.view.js";

class AnswerController {
  constructor({ quiz, question, answer }) {
    this.answerModel = new AnswerModel({
      quiz,
      question,
      answer,
    });
    this.answerView = new AnswerView({
      quiz,
      question,
      answer,
    });
  }

  setUserAnswer(answer) {
    this.answerModel.setUserAnswer(answer);
  }

  getUserAnswer() {
    return this.answerModel.getAnswer();
  }

  isUserAnswerCorrect() {
    return this.answerModel.isUserAnswerCorrect();
  }
}

export { AnswerController };
