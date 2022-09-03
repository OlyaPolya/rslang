import { playAudio } from '../../core/components/textbook/handleAudio';
import '../../assets/styles/wordCard.scss';
//import '../../assets/styles/textbookMenu.scss';
import { renderCardLayout, CardBody } from '../../core/components/textbook/wordCard';
import '../../core/components/textbook/textbookPage'
import { getWordsList, createUserWord, getUserWords, getUserWord, getWord } from '../../core/components/serverMethods/serverMethods';
import {getTextbookPageLayout} from '../../core/components/textbook/textbookPage'
import '../../assets/styles/textbookPage.scss';
import { setBasicUserInfo, setUserInfo, getUserInfo } from '../../core/components/textbook/localStorage';
import { handlerBtnHardWord, handlerBtnDelete, handlerBtnLearned } from '../../core/components/textbook/handlerBtns';


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


export function renderTextbookPage(level: number, page: number, userId: string) {
  document.body.innerHTML = getTextbookPageLayout(level);
  const wordListLayout = <HTMLElement>document.querySelector('.body-words-list');

  if (level === 6) {
    const wordsList: Promise<Array<object>> = getUserWords(userId);
    
    
    wordsList.then((arrayWords) => {
      arrayWords.forEach((item) => {
        const wordObject: { [index: string]: any } = item;
        const wordDifficalty: string = wordObject['difficulty'];
        if (wordDifficalty === 'hard') {
          const wordId: string = wordObject['wordId'];
          const word = getWord(wordId) as Promise<CardBody>;
          word.then((item) => {
            wordListLayout.insertAdjacentHTML('beforeend', renderCardLayout(item, userId, markWord, level));
          });
        } 
      });

      function delay() {
        return new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      }
      delay().then(() => {
        handlerListenets();
        handlerBtnDelete();
        handlerBtnLearned();
      });
    }) 

  } else {
    const wordsList = getWordsList(level, page);
    wordsList.then((list) => {
      list.forEach((word) => {
        wordListLayout.insertAdjacentHTML('beforeend', renderCardLayout(word, userId, markWord));
      });

      handlerListenets();
      handlerBtnHardWord();
      handlerBtnLearned();
    });
    
  }
  
  
}


function startApp() {
  localStorage.setItem('name', 'ol');
  localStorage.setItem('userId', '630f10e5806453001606499c');
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGYxMGU1ODA2NDUzMDAxNjA2NDk5YyIsImlhdCI6MTY2MjE5NjAzNCwiZXhwIjoxNjYyMjEwNDM0fQ.Ch6BCK0UNmufnbgbl_dzxxVRhZcp6VKoON-KjtHbkHM');
  localStorage.setItem(
    'refreshToken',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGYxMGU1ODA2NDUzMDAxNjA2NDk5YyIsInRva2VuSWQiOiIyMjMwNWY4MC1kZGNkLTQyNzEtYWJhOC00YmM5YWEzZWE0OTkiLCJpYXQiOjE2NjE5MzIwNzgsImV4cCI6MTY2MTk0ODI3OH0.G38waZSUm_ynQJIEZ9psJsn9_k2GfTN1XOiSRmtJ8Ro'
  );
  setBasicUserInfo();
  const { textbookPage, textbookLevel, userId } = getUserInfo();
  renderTextbookPage(textbookLevel, textbookPage, userId);
}

startApp();
