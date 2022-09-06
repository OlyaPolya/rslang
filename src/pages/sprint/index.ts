import './index.html';
import './sprint.css';
import music from './assets/audio.svg';

interface Word {
  id: 'string';
  group: 'number';
  page: 'number';
  word: 'string';
  image: 'string';
  audio: 'string';
  audioMeaning: 'string';
  audioExample: 'string';
  textMeaning: 'string';
  textExample: 'string';
  transcription: 'string';
  wordTranslate: 'string';
  textMeaningTranslate: 'string';
  textExampleTranslate: 'string';
}

let diffGroup: number;
let wordList: Word[] = [];
let sprintPoints: number = 0;
let audioAutoplay: boolean = true;
let learnedWords: Word[] = [];
let unlearnedWords: Word[] = [];
let countCorrectAnswers: number = 0;
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
    <a href="https://olyapolya.github.io/rslang/main"><div class="result-button">Закрыть игру</div></a>
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

const divSet = document.createElement('div');
divSet.classList.add('set');
divSet.innerHTML = `
  <div class="set-item timer">
    <h2 class="value-timer">0</h2>
    <svg class="svg-timer" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
      <circle id="circle" class="circle-animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#6fdb6f" fill="none"/>
    </svg>
  </div>
  <div class="set-item sound">
    <svg class="svg-music" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 94 94" style="enable-background:new 0 0 94 94;" xml:space="preserve"><title>Звук</title>
      <g><g><path d="M55.992,0h-8.021v65.358c-4.435-1.706-10.174-1.73-15.835,0.328c-10.142,3.691-16.185,12.669-13.498,20.05c2.688,7.383,13.088,10.374,23.229,6.683c8.614-3.134,14.249-10.082,14.111-16.626l0.014-53.451c13.986,2.204,14.943,19.884,13.268,24.842c-0.636,1.879,0.484,3.286,2.598,0C86.938,23.726,55.992,13.376,55.992,0z"/>
      </g></g></svg>
  </div>
  <div class="set-item back">
    <a href="https://olyapolya.github.io/rslang/main">
    <svg class="svg-back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs><style>.cls-1{fill:#fff;opacity:0;}.cls-2{fill: #ffffff;}</style></defs><title>Закрыть игру</title>
      <g id="Layer_2" data-name="Layer 2"><g id="close"><g id="close-2" data-name="close"><rect class="cls-1" width="24" height="24" transform="translate(24 24) rotate(180)"/>
      <path class="cls-2" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/>
      </g></g></g></svg>
    </a>
  </div>
`;

const main = <HTMLElement>document.querySelector('.main');
main.append(divDiff);

const diffLevels = <NodeList>document.querySelectorAll('.diff-level');
diffLevels.forEach((item) => item.addEventListener('click', startSprint));

const divSprint = document.createElement('div');
divSprint.classList.add('sprint');

const divResult = document.createElement('div');
divResult.classList.add('result');

function startSprint(event: Event) {
  diffGroup = +(event.target as HTMLElement).innerHTML;
  console.log(`Сложность ${diffGroup}`);
  for (let i = 0; i < 7; i++) {
    getWords();
  }
  divDiff.remove();
  main.append(divTimer);
  runTimer(3);
  setTimeout(playSprint, 4000);
}

function playSprint() {
  divTimer.remove();
  main.append(divSet);
  main.append(divSprint);
  renderSprint();
  addSwitchSound();
  runTimer(60);
  setTimeout(endSprint, 61000);
}

function getRandomNum(n: number) {
  let randomNum: number = Math.floor(Math.random() * n + 1);
  return randomNum;
}

async function getWords() {
  const response = await fetch(`https://easy-english-rss.herokuapp.com/words?group=${diffGroup - 1}&page=${getRandomNum(30)}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const content = await response.json();
  wordList = wordList.concat(content);
}

// Timer

function runTimer(time: number) {
  let i: number = 0;
  let finalOffset: number = 440;
  let step: number = finalOffset / +time;
  let timeCaption = <HTMLElement>document.querySelector('.value-timer');
  let circle = (<SVGGeometryElement>document.querySelector('.circle-animation')).style;

  circle.strokeDashoffset = '0';
  timeCaption.innerText = time.toString();

  let interval = setInterval(() => {
    timeCaption.innerText = (time - i).toString();
    if (i++ == time) {
      clearInterval(interval);
    } else {
      circle.strokeDashoffset = (step * i).toString();
    }
  }, 1000);
}

function renderSprint() {
  console.log(`Количество слов ${wordList.length}`);
  let word = wordList[getRandomNum(120)];
  let wordTranslate: string;
  let isRightAnswer = getRandomNum(2);
  if (isRightAnswer === 1) wordTranslate = word.wordTranslate;
  else wordTranslate = wordList[getRandomNum(120)].wordTranslate;

  divSprint.innerHTML = `
    <div class="sprint-points">
      <div class="added-points">+${addedPoints}</div>
      <div class="summ-points">${sprintPoints}</div>
    </div>
    <div class="sprint-card">
      <div class="sprint-card_item listen">
        <img class="svg-music" src="${music}" alt="Прослушать" onclick="new Audio('https://easy-english-rss.herokuapp.com/${word.audio}').play(); return false;">
      </div>
      <div class="sprint-card_item word">${word.word}</div>
      <div class="sprint-card_item translate">${wordTranslate}</div>
      <div class="sprint-card_item answer">
        <div class="button-answer incorrect">Неверно</div>
        <div class="button-answer correct">Верно</div>
      </div>
    </div>
  `;

  const point = document.querySelector('.sprint-points');
  const btnAnswer = document.querySelectorAll('.button-answer');

  btnAnswer[0].addEventListener('click', () => {
    if (isRightAnswer === 1) {
      unlearnedWords.push(word);
      playSound('./assets/false.mp3');
      countCorrectAnswers = 0;
      addedPoints = 10;
    } else {
      learnedWords.push(word);
      playSound('./assets/true.mp3');
      sprintPoints += addedPoints;
      countCorrectAnswers += 1;
      if (countCorrectAnswers === 3) {
        addedPoints = 20;
      } else if (countCorrectAnswers === 6) {
        addedPoints = 40;
      } else if (countCorrectAnswers === 9) {
        addedPoints = 80;
      }
    }
  });

  btnAnswer[1].addEventListener('click', () => {
    if (isRightAnswer === 2) {
      unlearnedWords.push(word);
      playSound('./assets/false.mp3');
      countCorrectAnswers = 0;
      addedPoints = 10;
    } else {
      learnedWords.push(word);
      playSound('./assets/true.mp3');
      sprintPoints += addedPoints;
      countCorrectAnswers += 1;
      if (countCorrectAnswers === 3) {
        addedPoints = 20;
      } else if (countCorrectAnswers === 6) {
        addedPoints = 30;
      } else if (countCorrectAnswers === 9) {
        addedPoints = 80;
      }
    }
  });

  btnAnswer.forEach((item) => item.addEventListener('click', renderSprint));
}

function endSprint() {
  playSound('./assets/timeOut.mp3');
  divSet.remove();
  divSprint.remove();
  renderResult();
}

function renderResult() {
  divResult.innerHTML = `
    <h2 class="result-title">Твой результат: ${sprintPoints} очков! </h2>
    <div class="result-wrapper">
      <div class="uncorrect-answer">
        <h3 class="uncorrect-title">Ошибок: ${unlearnedWords.length}</h3>      
      </div>
      <hr>
      <div class="correct-answer">
        <h3 class="correct-title">Правильно: ${learnedWords.length}</h3>
      </div>
    </div>
    <div class="sprint-card_item answer">
      <a href="https://olyapolya.github.io/rslang/sprint"><div class="result-button">Играть ещё</div></a>
      <a href="https://olyapolya.github.io/rslang/main"><div class="result-button">Закрыть игру</div></a>
    </div>
  `;
  main.append(divResult);
  const uncorrectAnswer = <HTMLElement>document.querySelector('.uncorrect-answer');
  const correctAnswer = <HTMLElement>document.querySelector('.correct-answer');
  let uncorrectResult = '';
  let correctResult = '';

  unlearnedWords.forEach((item) => {
    uncorrectResult += `<p class="result-item">
    <img class="svg-music" src="${music}" alt="Прослушать" onclick="new Audio('https://easy-english-rss.herokuapp.com/${item.audio}').play(); return false;">
    <span class="result-word">${item.word}</span>  &mdash;  <span class="result-translate">${item.wordTranslate}</span>
  </p>`;
  });

  learnedWords.forEach((item) => {
    correctResult += `<p class="result-item">
    <img class="svg-music" src="${music}" alt="Прослушать" onclick="new Audio('https://easy-english-rss.herokuapp.com/${item.audio}').play(); return false;">
    <span class="result-word">${item.word}  </span>&mdash;<span class="result-translate">  ${item.wordTranslate}</span>
  </p>`;
  });

  uncorrectAnswer.insertAdjacentHTML('beforeend', uncorrectResult);
  correctAnswer.insertAdjacentHTML('beforeend', correctResult);
}

function addSwitchSound() {
  const switchSound = <HTMLElement>document.querySelector('.svg-music');
  switchSound.addEventListener('click', () => (audioAutoplay ? (audioAutoplay = false) : (audioAutoplay = true)));
}

function playSound(path: string) {
  const audio = new Audio();
  audio.src = path;
  audio.autoplay = audioAutoplay;
}
