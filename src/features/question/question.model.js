import { QUIZS_DATA } from "../../shared/constants.js";

class QuestionModel {
  constructor() {
    this.questions = QUIZS_DATA.flatMap((quiz) => quiz.questions);
  }

  getQuestionById(id) {
    const question = this.questions.find((question) => question.id === id);
    if (!question) {
      throw new Error(`Question with id ${id} not found`);
    }
    return question;
  }
}

export { QuestionModel };
