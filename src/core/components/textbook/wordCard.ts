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
export function renderCardLayout(card: CardBody, isAuthorized: string) {
  let style: string = '';
  if (isAuthorized === 'none') {
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
            <span class="header-complicate-mark">Сложное слово</span>
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
          <button class="button-mark" data-id="${card.id}>Сложное</button>
          <button class="button-delete" data-id="${card.id}>Изученное</button>
        </div>
        </div>
      </div>
  </div>
  `;
}
