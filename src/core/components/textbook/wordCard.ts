import PlayImg from '../../../assets/icons/playaudio.png';
export interface CardBody {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}


export const path = 'https://easy-english-rss.herokuapp.com/';

export function renderCardLayout(card: CardBody, userId: string, markWord: string = '', level: number = 1) {
  let markHardWord: string = '';
  let btnHardDeleteSign: string = 'Сложное';
  let btnHardDeleteClass: string = 'button-hard';
  let markLearnedWord: string = '';
  let clickedHargBtn = '';
  let disabled = '';

  if (level === 6) {
    markHardWord = 'header-complicate-mark__active';
    btnHardDeleteSign = 'Удалить';
    btnHardDeleteClass = 'button-delete';
  }
  if (markWord === 'learnedHard') {
    markHardWord = 'header-complicate-mark__active';
    markLearnedWord = 'learned-mark__active';
    clickedHargBtn = 'style="background-color:#b3a27b"';
    disabled = 'disabled';
  }
  if (markWord === 'learned') {
    markLearnedWord = 'learned-mark__active';
  }
  if (markWord === 'hard') {
    markHardWord = 'header-complicate-mark__active';
    clickedHargBtn = 'style="background-color:#b3a27b"';
    disabled = 'disabled';
  }
  let style: string = '';
  if (userId === 'none') {
    style = 'style="display:none"';
  }

  return `
  <div class="card" data-id="${card.id}">
    <div class="card-image">
      <div class="image-round">
        <img src="${path}${card.image}" alt="${card.word}">
      </div>   
    </div>
    <div class="card-body">
      <div class="body-title">
          <div class="title-header">
            <p class="header-word">${card.word}</p>
            <span class="header-complicate-mark ${markHardWord}">Сложное слово</span>
            <span class="learned-mark ${markLearnedWord}">Изученное слово</span>
          </div>
          <div class="title-transcription">
            <p class="transcription-text">${card.transcription}</p>
            <div class="transcription-audio audio-block">
              <img class="audio-image" src="${PlayImg}" alt="play button">
              <audio class="audio-music" src="${path}${card.audio}"></audio>
              <audio class="audio-music" src="${path}${card.audioMeaning}"></audio>
              <audio class="audio-music" src="${path}${card.audioExample}"></audio>
            </div>
          </div>
          <div class="title-translate">
            <p class="translate-text">${card.wordTranslate}</p>
          </div>
      </div>
      <div class="card-description">
        <div class="description-meaning">
          <div class="meaning-title">
              <p class="title-text">Значение слова:</p>
          </div>
          <p class="meaning-text">${card.textMeaning}</p>
          <p class="meaning-translate">- ${card.textMeaningTranslate}</p>
        </div>
        <div class="description-example">
          <div class="example-title">
              <p class="title-text">Пример использования:</p>
          </div>
          <p class="example-text">${card.textExample}</p>
          <p class="example-translate">- ${card.textExampleTranslate}</p>
        </div>
        <div class="card-button" ${style}>
          <button class="button ${btnHardDeleteClass}" data-idword="${card.id}" ${clickedHargBtn} ${disabled}>${btnHardDeleteSign}</button>
          <button class="button button-learned" data-idword="${card.id}">Изученное</button>
        </div>
        </div>
      </div>
  </div>
  `;
}
