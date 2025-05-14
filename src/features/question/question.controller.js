import { AnswersController } from "../answers/answers.controller.js";
import { QuestionModel } from "./question.model.js";
import { QuestionView } from "./question.view.js";

class QuestionController {
  constructor(quizId, questionId) {
    this.questionModel = new QuestionModel(quizId);
    this.question = this.questionModel.getQuestionById(questionId);
    this.questionView = new QuestionView(this.question);
    this.answers = new AnswersController(this.question);
  }

  isQuestionAnswered() {
    return this.questionView.isQuestionAnswered();
  }

  setUserAnswer(answer) {
    this.answers.setUserAnswer(answer);
  }

  getUserAnswer() {
    return this.answers.getUserAnswer();
  }

  render(userAnswer) {
    const questionElement = this.questionView.render(userAnswer);
    const container = document.getElementById("question-container");
    this.emptyQuestionContainer();
    container.appendChild(questionElement);
  }

  emptyQuestionContainer() {
    const container = document.getElementById("question-container");
    container.innerHTML = ""; // Clear previous content
  }

  renderAnswer() {
    this.answers.render();
  }

  isUserAnswerCorrect() {
    return this.answers.isUserAnswerCorrect();
  }
}

export { QuestionController };
