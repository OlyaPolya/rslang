let diffGroup;
let wordList = [];
let sprintPoints = 0;
let audioAutoplay = true;
let learnedWords = [];
let unlearnedWords = [];
let countCorrectAnswers = 0;
let addedPoints = 10;

const divDiff = document.createElement('div');
divDiff.innerHTML = `
  <div class="overlay"></div>
  <div class="diff-wrapper">
    <h2>Выберите сложность:</h2>
    <div class="diff-change">
      <div class="diff-level">1</div>
      <div class="diff-level">2</div>
      <div class="diff-level">3</div>
      <div class="diff-level">4</div>
      <div class="diff-level">5</div>
      <div class="diff-level">6</div>
    </div>
    <a href="./index.html"><div class="result-button">Закрыть игру</div></a>
  </div>
`;

const divTimer = document.createElement('div');
divTimer.classList.add('timer');
divTimer.innerHTML = `
  <div class="overlay"></div>
  <h2 class="value-timer">0</h2>
  <svg class="svg-timer" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
    <circle id="circle" class="circle-animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#6fdb6f" fill="none"/>
  </svg>
`;
