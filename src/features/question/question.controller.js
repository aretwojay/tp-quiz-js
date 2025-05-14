import { AnswerController } from "../answer/answer.controller.js";
import { QuestionModel } from "./question.model.js";
import { QuestionView } from "./question.view.js";

class QuestionController {
  constructor(questionId) {
    this.questionModel = new QuestionModel();
    this.question = this.questionModel.getQuestionById(questionId);
    this.questionView = new QuestionView(this.question);
    this.answers = this.question.options.map(
      (answer) => new AnswerController({ quiz: this.question.quiz, answer })
    );
    this.userAnswer = null;
  }

  isQuestionAnswered() {
    return this.questionView.isQuestionAnswered();
  }

  setUserAnswer(answer) {
    this.userAnswer = answer;
  }

  getUserAnswer() {
    return this.userAnswer;
  }

  render() {
    const questionElement = this.questionView.render();
    const container = document.getElementById("question-container");
    container.innerHTML = ""; // Clear previous content
    container.appendChild(questionElement);
  }
}

export { QuestionController };
