interface CardBody {
  id: 'string';
  group: 0;
  page: 0;
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

let isPlay = false;

export function createCardWord(card: CardBody, isAuthorized: boolean){
  let style: string = '';
  if (!isAuthorized) {
    style = 'style="display:none"';
  }
  return `
  <div class="card" data-id="${card.id}">
    <div class="card-image">
      <div class="image-round">
        <img src="${card.image}" alt="${card.word}">
      </div>   
    </div>
    <div class="card-body">
      <div class="body-title">
          <p class="title-word">${card.word}</p>
          <div class="title-transcription">
            <p class="transcription-text">${card.transcription}</p>
            <img class="transcription-audio" src="./assets/icons/playaudio.png" alt="${card.word}" data-audio="${card.audio}">
          </div>
          <div class="title-translate">
            <p class="translate-text">${card.wordTranslate}</p>
          </div>
      </div>
      <div class="card-description">
        <div class="description-meaning">
          <div class="meaning-title">
              <p class="title-text">Значение слова:</p>
              <img class="title-audio title-audio__meaning" src="./assets/icons/playaudio.png" alt="${card.word}" data-audioMeaning="${card.audioMeaning}">
          </div>
          <p class="meaning-text">${card.textMeaning}</p>
          <p class="meaning-translate">${card.textMeaningTranslate}</p>
        </div>
        <div class="description-example">
          <div class="example-title">
              <p class="title-text">Пример использования:</p>
              <img class="title-audio title-audio-example" src="./assets/icons/playaudio.png" alt="${card.word}" data-audioExample="${card.audioExample}">
          </div>
          <p class="example-text">${card.textExample}</p>
          <p class="example-translate"> ${card.textExampleTranslate}</p>
        </div>
        <div class="card-button" ${style}>
          <button class="button-mark" >Сложное</button>
          <button class="button-delete">Удалить</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  `;
}