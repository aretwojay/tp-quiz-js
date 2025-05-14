import { QUIZS_DATA } from "../../shared/constants.js";

class QuestionModel {
  constructor(quizId) {
    this.quizId = quizId;
    this.questions = QUIZS_DATA.map((quiz) => ({
      questions: quiz.questions.map((question) => ({
        ...question,
        quizId: quiz.id,
      })),
    })).flatMap((quiz) => quiz.questions);
  }

  getQuestionById(id) {
    const question = this.questions.find((question) => {
      return question.id === id && question.quizId === this.quizId;
    });
    if (!question) {
      throw new Error(`Question with id ${id} not found`);
    }
    return question;
  }
}

export { QuestionModel };
