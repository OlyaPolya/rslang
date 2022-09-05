var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var diffGroup;
var wordList = [];
var sprintPoints = 0;
var audioAutoplay = true;
var learnedWords = [];
var unlearnedWords = [];
var countCorrectAnswers = 0;
var addedPoints = 10;
var divDiff = document.createElement('div');
divDiff.innerHTML = "\n  <div class=\"overlay\"></div>\n  <div class=\"diff-wrapper\">\n    <h2>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C:</h2>\n    <div class=\"diff-change\">\n      <div class=\"diff-level\">1</div>\n      <div class=\"diff-level\">2</div>\n      <div class=\"diff-level\">3</div>\n      <div class=\"diff-level\">4</div>\n      <div class=\"diff-level\">5</div>\n      <div class=\"diff-level\">6</div>\n    </div>\n    <a href=\"./index.html\"><div class=\"result-button\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u0433\u0440\u0443</div></a>\n  </div>\n";
var divTimer = document.createElement('div');
divTimer.classList.add('timer');
divTimer.innerHTML = "\n  <div class=\"overlay\"></div>\n  <h2 class=\"value-timer\">0</h2>\n  <svg class=\"svg-timer\" width=\"160\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle id=\"circle\" class=\"circle-animation\" r=\"69.85699\" cy=\"81\" cx=\"81\" stroke-width=\"8\" stroke=\"#6fdb6f\" fill=\"none\"/>\n  </svg>\n";
var divSet = document.createElement('div');
divSet.classList.add('set');
divSet.innerHTML = "\n  <div class=\"set-item timer\">\n    <h2 class=\"value-timer\">0</h2>\n    <svg class=\"svg-timer\" width=\"160\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle id=\"circle\" class=\"circle-animation\" r=\"69.85699\" cy=\"81\" cx=\"81\" stroke-width=\"8\" stroke=\"#6fdb6f\" fill=\"none\"/>\n    </svg>\n  </div>\n  <div class=\"set-item sound\">\n    <svg class=\"svg-music\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 94 94\" style=\"enable-background:new 0 0 94 94;\" xml:space=\"preserve\"><title>\u0417\u0432\u0443\u043A</title>\n      <g><g><path d=\"M55.992,0h-8.021v65.358c-4.435-1.706-10.174-1.73-15.835,0.328c-10.142,3.691-16.185,12.669-13.498,20.05c2.688,7.383,13.088,10.374,23.229,6.683c8.614-3.134,14.249-10.082,14.111-16.626l0.014-53.451c13.986,2.204,14.943,19.884,13.268,24.842c-0.636,1.879,0.484,3.286,2.598,0C86.938,23.726,55.992,13.376,55.992,0z\"/>\n      </g></g></svg>\n  </div>\n  <div class=\"set-item back\">\n    <a href=\"./index.html\">\n    <svg class=\"svg-back\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <defs><style>.cls-1{fill:#fff;opacity:0;}.cls-2{fill: #ffffff;}</style></defs><title>\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u0433\u0440\u0443</title>\n      <g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"close\"><g id=\"close-2\" data-name=\"close\"><rect class=\"cls-1\" width=\"24\" height=\"24\" transform=\"translate(24 24) rotate(180)\"/>\n      <path class=\"cls-2\" d=\"M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z\"/>\n      </g></g></g></svg>\n    </a>\n  </div>\n";
var main = document.querySelector('.main');
main.append(divDiff);
var diffLevels = document.querySelectorAll('.diff-level');
diffLevels.forEach(function (item) { return item.addEventListener('click', startSprint); });
var divSprint = document.createElement('div');
divSprint.classList.add('sprint');
var divResult = document.createElement('div');
divResult.classList.add('result');
function startSprint(event) {
    diffGroup = +event.target.innerHTML;
    console.log("\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C ".concat(diffGroup));
    for (var i = 0; i < 7; i++) {
        getWords();
    }
    ;
    divDiff.remove();
    main.append(divTimer);
    runTimer(3);
    setTimeout(playSprint, 4000);
}
;
function playSprint() {
    divTimer.remove();
    main.append(divSet);
    main.append(divSprint);
    renderSprint();
    addSwitchSound();
    runTimer(60);
    setTimeout(endSprint, 61000);
}
;
function getRandomNum(n) {
    var randomNum = Math.floor((Math.random() * n) + 1);
    return randomNum;
}
;
function getWords() {
    return __awaiter(this, void 0, void 0, function () {
        var response, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://easy-english-rss.herokuapp.com/words?group=".concat(diffGroup - 1, "&page=").concat(getRandomNum(30)), {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    content = _a.sent();
                    wordList = wordList.concat(content);
                    return [2 /*return*/];
            }
        });
    });
}
// Timer
function runTimer(time) {
    var i = 0;
    var finalOffset = 440;
    var step = finalOffset / +time;
    var timeCaption = document.querySelector('.value-timer');
    var circle = document.querySelector('.circle-animation').style;
    circle.strokeDashoffset = "0";
    timeCaption.innerText = time.toString();
    var interval = setInterval(function () {
        timeCaption.innerText = (time - i).toString();
        if (i++ == time) {
            clearInterval(interval);
        }
        else {
            circle.strokeDashoffset = (step * i).toString();
        }
        ;
    }, 1000);
}
;
function renderSprint() {
    console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043B\u043E\u0432 ".concat(wordList.length));
    var word = wordList[getRandomNum(120)];
    var wordTranslate;
    var isRightAnswer = getRandomNum(2);
    if (isRightAnswer === 1)
        wordTranslate = word.wordTranslate;
    else
        wordTranslate = wordList[getRandomNum(120)].wordTranslate;
    divSprint.innerHTML = "\n    <div class=\"sprint-points\">\n      <div class=\"added-points\">+".concat(addedPoints, "</div>\n      <div class=\"summ-points\">").concat(sprintPoints, "</div>\n    </div>\n    <div class=\"sprint-card\">\n      <div class=\"sprint-card_item listen\">\n        <img class=\"svg-music\" src=\"./assets/audio.svg\" alt=\"\u041F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C\" onclick=\"new Audio('https://easy-english-rss.herokuapp.com/").concat(word.audio, "').play(); return false;\">\n      </div>\n      <div class=\"sprint-card_item word\">").concat(word.word, "</div>\n      <div class=\"sprint-card_item translate\">").concat(wordTranslate, "</div>\n      <div class=\"sprint-card_item answer\">\n        <div class=\"button-answer incorrect\">\u041D\u0435\u0432\u0435\u0440\u043D\u043E</div>\n        <div class=\"button-answer correct\">\u0412\u0435\u0440\u043D\u043E</div>\n      </div>\n    </div>\n  ");
    var point = document.querySelector('.sprint-points');
    var btnAnswer = document.querySelectorAll('.button-answer');
    btnAnswer[0].addEventListener('click', function () {
        if (isRightAnswer === 1) {
            unlearnedWords.push(word);
            playSound('./assets/false.mp3');
            countCorrectAnswers = 0;
            addedPoints = 10;
        }
        else {
            learnedWords.push(word);
            playSound('./assets/true.mp3');
            sprintPoints += addedPoints;
            countCorrectAnswers += 1;
            if (countCorrectAnswers === 3) {
                addedPoints = 20;
            }
            else if (countCorrectAnswers === 6) {
                addedPoints = 40;
            }
            else if (countCorrectAnswers === 9) {
                addedPoints = 80;
            }
        }
    });
    btnAnswer[1].addEventListener('click', function () {
        if (isRightAnswer === 2) {
            unlearnedWords.push(word);
            playSound('./assets/false.mp3');
            countCorrectAnswers = 0;
            addedPoints = 10;
        }
        else {
            learnedWords.push(word);
            playSound('./assets/true.mp3');
            sprintPoints += addedPoints;
            countCorrectAnswers += 1;
            if (countCorrectAnswers === 3) {
                addedPoints = 20;
            }
            else if (countCorrectAnswers === 6) {
                addedPoints = 30;
            }
            else if (countCorrectAnswers === 9) {
                addedPoints = 80;
            }
        }
    });
    btnAnswer.forEach(function (item) { return item.addEventListener('click', renderSprint); });
}
;
function endSprint() {
    playSound('./assets/timeOut.mp3');
    divSet.remove();
    divSprint.remove();
    renderResult();
}
;
function renderResult() {
    divResult.innerHTML = "\n    <h2 class=\"result-title\">\u0422\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(sprintPoints, " \u043E\u0447\u043A\u043E\u0432! </h2>\n    <div class=\"result-wrapper\">\n      <div class=\"uncorrect-answer\">\n        <h3 class=\"uncorrect-title\">\u041E\u0448\u0438\u0431\u043E\u043A: ").concat(unlearnedWords.length, "</h3>      \n      </div>\n      <hr>\n      <div class=\"correct-answer\">\n        <h3 class=\"correct-title\">\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E: ").concat(learnedWords.length, "</h3>\n      </div>\n    </div>\n    <div class=\"sprint-card_item answer\">\n      <a href=\"./index.html\"><div class=\"result-button\">\u0418\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451</div></a>\n      <a href=\"./index.html\"><div class=\"result-button\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u0433\u0440\u0443</div></a>\n    </div>\n  ");
    main.append(divResult);
    var uncorrectAnswer = document.querySelector('.uncorrect-answer');
    var correctAnswer = document.querySelector('.correct-answer');
    var uncorrectResult = '';
    var correctResult = '';
    unlearnedWords.forEach(function (item) {
        uncorrectResult += "<p class=\"result-item\">\n    <img class=\"svg-music\" src=\"./assets/audio.svg\" alt=\"\u041F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C\" onclick=\"new Audio('https://easy-english-rss.herokuapp.com/".concat(item.audio, "').play(); return false;\">\n    <span class=\"result-word\">").concat(item.word, "</span>  &mdash;  <span class=\"result-translate\">").concat(item.wordTranslate, "</span>\n  </p>");
    });
    learnedWords.forEach(function (item) {
        correctResult += "<p class=\"result-item\">\n    <img class=\"svg-music\" src=\"./assets/audio.svg\" alt=\"\u041F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C\" onclick=\"new Audio('https://easy-english-rss.herokuapp.com/".concat(item.audio, "').play(); return false;\">\n    <span class=\"result-word\">").concat(item.word, "  </span>&mdash;<span class=\"result-translate\">  ").concat(item.wordTranslate, "</span>\n  </p>");
    });
    uncorrectAnswer.insertAdjacentHTML('beforeend', uncorrectResult);
    correctAnswer.insertAdjacentHTML('beforeend', correctResult);
}
;
function addSwitchSound() {
    var switchSound = document.querySelector('.svg-music');
    switchSound.addEventListener('click', function () { return (audioAutoplay) ? audioAutoplay = false : audioAutoplay = true; });
}
;
function playSound(path) {
    var audio = new Audio();
    audio.src = path;
    audio.autoplay = audioAutoplay;
}
