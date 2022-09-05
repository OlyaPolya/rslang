import { playAudio } from '../../core/components/textbook/handleAudio';
import '../../assets/styles/wordCard.scss';
import { renderCardLayout, CardBody } from '../../core/components/textbook/wordCard';
import '../../core/components/textbook/textbookPage';
import { getWordsList, createUserWord, getUserWords, getUserWord, getWord } from '../../core/components/serverMethods/serverMethods';
import { getTextbookPageLayout } from '../../core/components/textbook/textbookPage';
import '../../assets/styles/textbookPage.scss';
import '../../assets/styles/header.scss';
import { setBasicUserInfo, setUserInfo, getUserInfo, handleWordAsLearned } from '../../core/components/textbook/localStorage';
import { handlerBtnHardWord, handlerBtnDelete, handlerBtnLearned, checkIsAllWordsLearned } from '../../core/components/textbook/handlerBtns';

function handlerListenets() {
  const levelBtns = document.querySelectorAll('.part');
  levelBtns.forEach((btn) => {
    btn.addEventListener('click', (item) => {
      const clickedElement = <HTMLElement>item.target;
      const level = clickedElement.dataset;

      setUserInfo(level);
      const { textbookPage, textbookLevel, userId } = getUserInfo();
      renderTextbookPage(textbookLevel, textbookPage, userId);
    });
  });

  const pageBtns = document.querySelectorAll('.page');
  pageBtns.forEach((btn) => {
    btn.addEventListener('click', (item) => {
      const clickedElement = <HTMLElement>item.target;
      const page = clickedElement.dataset;

      setUserInfo(page);
      const { textbookPage, textbookLevel, userId } = getUserInfo();
      renderTextbookPage(textbookLevel, textbookPage, userId);
    });
  });

  const btnUp = <HTMLElement>document.querySelector('.body-btn-up');
  btnUp.addEventListener('click', () => {
    const scrollTop = window.pageYOffset;
    window.scrollBy(0, -scrollTop);
  });

  const btnPlay = document.querySelectorAll('.audio-image');
  playAudio(btnPlay);
}

async function getUserWordsAsArray(userId: string) {
  if (userId === 'none') {
    return [];
  }
  const wordsList: Array<string> = [];
  const userWordsList: Array<object> = await getUserWords(userId);

  userWordsList.forEach((wordObject) => {
    const word: { [index: string]: any } = wordObject;
    const wordId: string = word['wordId'];
    wordsList.push(wordId);
  });
  return wordsList;
}

export async function renderTextbookPage(level: number, page: number, userId: string) {
  const learnedWordsInStorage: string = localStorage.getItem('learnedWords') as string;
  const learnedWords = learnedWordsInStorage.split(',');
  const difficultWords = await getUserWordsAsArray(userId);
  document.body.innerHTML = getTextbookPageLayout(level);
  const wordListLayout = <HTMLElement>document.querySelector('.body-words-list');
  showLoadingMessage();

  if (level === 6) {
    if (userId === 'none') {
      handlerListenets();
      showLoadingMessage();
      return;
    }
    const wordsList: Promise<Array<object>> = getUserWords(userId);
    wordsList.then((arrayWords) => {
      arrayWords.forEach((item) => {
        let markWord: string = '';
        const wordObject: { [index: string]: any } = item;
        const wordId: string = wordObject['wordId'];
        if (learnedWords.includes(wordId, 0)) {
          markWord = 'learned';
        }
        const word = getWord(wordId) as Promise<CardBody>;
        word.then((item) => {
          wordListLayout.insertAdjacentHTML('beforeend', renderCardLayout(item, userId, markWord, level));
        });
      });

      function delay() {
        return new Promise((resolve) => {
          setTimeout(resolve, 4000);
        });
      }
      delay().then(() => {
        handlerListenets();
        handlerBtnDelete();
        handlerBtnLearned();
        showLoadingMessage();
      });
    });
  } else {
    const wordsList = getWordsList(level, page);

    wordsList.then((list) => {
      list.forEach((word) => {
        const wordId: string = word.id;
        let markWord: string = '';

        if (learnedWords.includes(wordId)) {
          markWord = 'learned';
        }
        if (difficultWords.includes(wordId)) {
          markWord = 'hard';
        }
        if (learnedWords.includes(wordId) && difficultWords.includes(wordId)) {
          markWord = 'learnedHard';
        }

        wordListLayout.insertAdjacentHTML('beforeend', renderCardLayout(word, userId, markWord, level));
      });

      handlerListenets();
      handlerBtnHardWord();
      handlerBtnLearned();
      checkIsAllWordsLearned(page);
      showLoadingMessage();
    });
  }
}

function showLoadingMessage() {
  const loadingmessage = <HTMLElement>document.querySelector('.body-loading');
  loadingmessage.classList.toggle('body-loading__active');
}

function startApp() {
  localStorage.setItem('name', 'ol');
  localStorage.setItem('userId', '630f10e5806453001606499c');
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGYxMGU1ODA2NDUzMDAxNjA2NDk5YyIsImlhdCI6MTY2MjM1ODY4MiwiZXhwIjoxNjYyMzczMDgyfQ.raWgzP-x_zx0azyUbTVeeDws_ggD16NInOi391kozTw');
  localStorage.setItem(
    'refreshToken',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGYxMGU1ODA2NDUzMDAxNjA2NDk5YyIsInRva2VuSWQiOiIyMjMwNWY4MC1kZGNkLTQyNzEtYWJhOC00YmM5YWEzZWE0OTkiLCJpYXQiOjE2NjE5MzIwNzgsImV4cCI6MTY2MTk0ODI3OH0.G38waZSUm_ynQJIEZ9psJsn9_k2GfTN1XOiSRmtJ8Ro'
  );
  setBasicUserInfo();
  const { textbookPage, textbookLevel, userId } = getUserInfo();
  renderTextbookPage(textbookLevel, textbookPage, userId);
}

startApp();
