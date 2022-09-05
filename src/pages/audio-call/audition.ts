import "./../../assets/styles/audition.scss"

interface Word {
    "id": "string",
    "group": "number",
    "page": "number",
    "word": "string",
    "image": "string",
    "audio": "string",
    "audioMeaning": "string",
    "audioExample": "string",
    "textMeaning": "string",
    "textExample": "string",
    "transcription": "string",
    "wordTranslate": "string",
    "textMeaningTranslate": "string",
    "textExampleTranslate": "string"
  } 
  
  
  let divDiff : HTMLElement ;
  let diffGroup : number;
  let wordList : Word[] = [];
  let wordIndex : number = 0;
  let wrongAnswersArray : string[] =[];
  let rightAnswerIndex : number = 0;
  let wrongAnswersCount : number = 0;
  
  start();
  function start () {
   wordIndex = 0;
   wrongAnswersArray = [];
   rightAnswerIndex = 0;
   wrongAnswersCount = 0;
   divDiff  = <HTMLElement>document.createElement('div');              /* Создаем модалку с выбором уровня */
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
      <button class="diff-back"><a href="./index.html">Выбрать другую игру</a></button>
    </div>
  `;
  
  const main = <HTMLElement>document.querySelector('.main');
  main.append(divDiff);                                         /* Вставляем в main(или куда надо) */     
  
  const diffLevels = document.querySelectorAll('.diff-level');
  diffLevels.forEach((item) => item.addEventListener('click', startSprint));    /* навешиваем листнеры с функцией запуска игры на кнопки сложности */
  }
  
  function startSprint(event : Event ) {                                     /* запуск игры */
    diffGroup = +(event.target as HTMLElement).innerHTML;                            /* берем значение кнопок */                                                        
    divDiff.remove();                                           /* удаляем модалку с выборм сложности */
    getWords().then(startGame);                              /* запрашиваем список слов и запускаем игру*/  
    }
  
  function getRandomNum (n : number) { 
    let randomNum : number;                                   /* получение рандомного числа */
    return randomNum = Math.floor((Math.random() * n) + 1);
  };
  
  async function getWords() {                                   /* функция запроса слов */
    const firstResponse = await fetch(`https://easy-english-rss.herokuapp.com/words?group=${diffGroup - 1}&page=${getRandomNum(30)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object)
    });
    const firstContent = await firstResponse.json();
   
      
    const secondResponse = await fetch(`https://easy-english-rss.herokuapp.com/words?group=${diffGroup - 1}&page=${getRandomNum(30)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object)
    });
    const secondContent = await secondResponse.json();
    wordList = firstContent.concat(secondContent);
    console.log(wordList);
    return wordList;
    }
  
  function startGame () {
    makeWrongAnswers();
    nextWord();
  }
  
  function makeWrongAnswers(){                                     /* получаем массив неверных слов*/
  for (let i=0; i < wordList.length; i++){
    wrongAnswersArray.push(wordList[i].wordTranslate);
  }
  console.log('wrongAnswersArray: ');
  console.log(wrongAnswersArray);
  }
  
  function onNext () {                                                       /* нажатие кнопки check*/
    let selectedIndex = 0;
    for (let i=1; i <= 4; i++){ 
      const input = document.getElementById('word' + i + 'Selected') as HTMLInputElement;  
     if (input.checked == true){    
      selectedIndex = i;
     }    
    }
    if (selectedIndex == 0 ){
      return;
    }
    if (selectedIndex == rightAnswerIndex){
      clearSelection();
      nextWord();
      }
      else {
       markWrongAnswer (selectedIndex);
       wrongAnswersCount++; 
      }    
  }
  
  function nextWord () {
    if (wordIndex < wordList.length-20){
      rightAnswerIndex = getRandomNum(4);
      let word = wordList[wordIndex];
      for (let i=1; i <= 4; i++){
        document.getElementById('word' + i)!.innerHTML = i == rightAnswerIndex ? word.wordTranslate : getWrongWord ();
        
      }
  
      document.getElementById('wordOriginal')!.innerHTML = word.word;
      // document.getElementById('word1').innerHTML = word.wordTranslate;
      // document.getElementById('word2').innerHTML = getWrongWord ();
      // document.getElementById('word3').innerHTML = getWrongWord ();
      // document.getElementById('word4').innerHTML = getWrongWord ();
      // console.log('word audio: ' + word.audio);
      // console.log('word: ' + word.word);
      // console.log('right: ' + word.wordTranslate);
      // console.log('wrong1: ' + wrongAnswersArray[getRandomNum(wordList.length) - 1]);
      // console.log('wrong2: ' + wrongAnswersArray[getRandomNum(wordList.length) - 1]);
      // console.log('wrong3: ' + wrongAnswersArray[getRandomNum(wordList.length) - 1]);
      wordIndex++;
    }
    else {
      endGame();
    } 
  }
  
  function getWrongWord () {
    let word = wordList[wordIndex];
    let wrongWord = wrongAnswersArray[getRandomNum(wordList.length) - 1];
    while (word.wordTranslate == wrongWord) {
      wrongWord = wrongAnswersArray[getRandomNum(wordList.length) - 1]; 
    }
  return wrongWord;
  }
  
  
  function playAudio(){
    let word = wordList[wordIndex-1];
    let myAudio = new Audio;
    // myAudio.src = 'file:///d:/file.mp3';
    myAudio.src = 'https://easy-english-rss.herokuapp.com/'+ word.audio;
    myAudio.play();
    console.log(word.audio);
  }
  
  function clearSelection () {
    const input1 = document.getElementById('word1Selected') as HTMLInputElement;
    const input2 = document.getElementById('word2Selected') as HTMLInputElement;
    const input3 = document.getElementById('word3Selected') as HTMLInputElement;
    const input4 = document.getElementById('word4Selected') as HTMLInputElement;
    input1.checked = false;
    input2.checked = false;
    input3.checked = false;
    input4.checked = false;
  }
  
  function markWrongAnswer (i : number) {
    let element = document.getElementById('word' + i);
    // console.log (element);
    // console.log (i);
    let text = element!.innerHTML;
   element!.innerHTML = text.strike();
  }
  
  function endGame () {
    alert('The end!\nКоличество неправильных ответов: ' + wrongAnswersCount);
    start();    
  }
  
  