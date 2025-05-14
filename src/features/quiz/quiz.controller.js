import { QuestionController } from "../question/question.controller.js";
import { QuizModel } from "./quiz.model.js";
import { QuizView } from "./quiz.view.js";

class QuizController {
  constructor() {
    this.quizModel = new QuizModel();
    this.quiz = this.quizModel.getRandomQuiz();
    this.quizView = new QuizView(this.quiz);

    this.currentQuestionIndex = 0;
    this.questions = this.quiz.questions.map(
      (question) => new QuestionController(this.quiz.id, question.id)
    );

    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", () => {
      startButton.classList.add("d-none");
      this.renderQuiz();
      this.bindEvents();
      this.bindEventsOptions();
    });
  }

  isQuizComplete() {
    return this.currentQuestionIndex >= this.quiz.questions.length;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  renderQuiz() {
    this.quizView.render(this.quiz.title, this.getCurrentQuestion());
  }

  bindEventsOptions() {
    const options = document.querySelectorAll("input[name='option']");

    options.forEach((option) => {
      option.removeEventListener("change", () => {});
      option.addEventListener("change", (event) => {
        const currentQuestion = this.getCurrentQuestion();
        const selectedAnswer = event.target.value;
        currentQuestion.setUserAnswer(selectedAnswer);
      });
    });
  }

  bindEvents() {
    const previousButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const submitButton = document.getElementById("submit-button");
    // Remove previous event listeners to avoid duplicates
    nextButton.removeEventListener("click", () => {});
    previousButton.removeEventListener("click", () => {});
    submitButton.removeEventListener("click", () => {});

    previousButton.classList.remove("d-none");
    nextButton.classList.remove("d-none");

    previousButton.disabled = this.currentQuestionIndex === 0;
    nextButton.innerHTML = "Suivant";

    previousButton.addEventListener("click", () => {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.renderQuiz();
      }
      if (this.currentQuestionIndex === 0) {
        previousButton.disabled = true;
      }
    });

    nextButton.addEventListener("click", () => {
      const currentQuestion = this.getCurrentQuestion();
      const userAnswer = currentQuestion.getUserAnswer();

      if (!userAnswer) {
        alert("Veuillez répondre à la question avant de continuer.");
        return;
      }

      if (this.currentQuestionIndex < this.quiz.questions.length - 1) {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex === this.quiz.questions.length - 1) {
          submitButton.classList.remove("d-none");
          nextButton.classList.add("d-none");
        }

        previousButton.disabled = false;
        this.renderQuiz();
      }
      this.bindEventsOptions();
    });

    submitButton.addEventListener("click", () => {
      const currentQuestion = this.getCurrentQuestion();
      const userAnswer = currentQuestion.getUserAnswer();
      if (!userAnswer) {
        alert("Veuillez répondre à la question avant de soumettre.");
        return;
      }

      this.currentQuestionIndex++;
      if (this.isQuizComplete()) {
        this.quizView.renderResults(this.questions);
        currentQuestion.emptyQuestionContainer();
        previousButton.classList.add("d-none");
        nextButton.classList.add("d-none");
        submitButton.classList.add("d-none");
      } else {
        this.renderQuiz();
      }
    });
  }
}

export { QuizController };
