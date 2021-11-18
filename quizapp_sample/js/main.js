'use strict';

{
  const startBtn = document.getElementById('start');
  const caption = document.getElementById('caption');
  const content = document.getElementById('content');

  let quiz;
  let quizIndex = 0;

  class Quiz {
    constructor(quizzes) {
      this._quizzes = quizzes;
    }

    displayQuiz(index) {

      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }

      caption.textContent = `問題${index + 1}`;

      const quizType = document.createElement('h3');
      quizType.style.margin = '0px';
      quizType.textContent = `[ジャンル] ${unescape(this._quizzes[index].category)}`
      content.appendChild(quizType);

      const difficulty = document.createElement('h3');
      difficulty.style.margin = '0px';
      difficulty.textContent = `[難易度] ${unescape(this._quizzes[index].difficulty)}`
      content.appendChild(difficulty);

      const hrElement1 = document.createElement('hr');
      content.appendChild(hrElement1);

      const question = document.createElement('p');
      question.textContent = unescape(this._quizzes[index].question);
      content.appendChild(question);

      const hrElement2 = document.createElement('hr');
      content.appendChild(hrElement2);

      const answerButtonArray = [];
      // 正解
      const correctAnswerButton = document.createElement('button');
      correctAnswerButton.textContent = unescape(this._quizzes[index].correct_answer);
      correctAnswerButton.addEventListener('click', () => {
        quizIndex++;
        this.displayQuiz(quizIndex);
      });
      answerButtonArray.push(correctAnswerButton);

      // 不正解
      this._quizzes[index].incorrect_answers.forEach((incorrectAnswer) => {
        const incorrectAnswerButton = document.createElement('button');
        incorrectAnswerButton.textContent = unescape(incorrectAnswer);
        incorrectAnswerButton.addEventListener('click', () => {
          quizIndex++;
          this.displayQuiz(quizIndex);
        });
        answerButtonArray.push(incorrectAnswerButton);
      });

      //ボタンの配置
      answerButtonArray.forEach(answerButton => {
        content.appendChild(answerButton);
        const brElement = document.createElement('br');
        content.appendChild(brElement);
      });

    }
  }

  async function callApi() {
    caption.textContent = '取得中';
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const json = await response.json();
    const quizArray = await json.results;
    quiz = new Quiz(quizArray);
    quiz.displayQuiz(quizIndex);
  }

  startBtn.addEventListener('click', async () => {
    await callApi();
  });
}