import { QUIZS_DATA } from "../../shared/constants.js";

class QuizModel {
  constructor() {
    this.quizzes = QUIZS_DATA;
  }

  getRandomQuiz() {
    if (this.quizzes.length === 0) {
      throw new Error("No quizzes available");
    }
    const randomIndex = Math.floor(Math.random() * this.quizzes.length);
    return this.quizzes[randomIndex];
  }

  getQuizById(id) {
    const quiz = this.quizzes.find((quiz) => quiz.id === id);
    if (!quiz) {
      throw new Error(`Quiz with id ${id} not found`);
    }
    return quiz;
  }

  getAllQuizzes() {
    return this.quizzes;
  }
}

export { QuizModel };
