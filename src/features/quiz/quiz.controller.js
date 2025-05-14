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
      (question) => new QuestionController(question.id)
    );

    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", () => {
      startButton.classList.add("d-none");
      this.renderQuiz();
      this.bindEvents();
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

  bindEvents() {
    const previousButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const options = document.querySelectorAll("input[name='option']");
    const currentQuestion = this.getCurrentQuestion();

    options.forEach((option) => {
      option.addEventListener("change", (event) => {
        const selectedAnswer = event.target.value;
        currentQuestion.setUserAnswer(selectedAnswer);
        console.log(
          `Réponse sélectionnée : ${selectedAnswer} pour la question ${
            this.currentQuestionIndex + 1
          }`
        );
      });
    });

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
      const userAnswer = currentQuestion.getUserAnswer();
      if (!userAnswer) {
        alert("Veuillez répondre à la question avant de continuer.");
        return;
      }

      if (this.currentQuestionIndex < this.quiz.questions.length - 1) {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex === this.quiz.questions.length - 1) {
          nextButton.innerHTML = "Terminer";
        }

        previousButton.disabled = false;
        currentQuestion.setUserAnswer(userAnswer);
        this.renderQuiz();
      }

      if (this.currentQuestionIndex === this.quiz.questions.length - 1) {
        this.answerQuestion(
          this.getCurrentQuestion().getAnswer(),
          this.currentQuestionIndex
        );
      }
    });
  }
}

export { QuizController };
