import { createUserWord, deleteUserWord } from '../serverMethods/serverMethods';
import { getUserInfo, handleWordAsLearned } from './localStorage';
import { renderTextbookPage} from '../../../pages/textbook/index';

export function handlerBtnHardWord() {
  const userId: string = localStorage.getItem('userId') as string;
  if (userId !== 'none') {
    const allBtnsHard = document.querySelectorAll('.button-hard');
    allBtnsHard.forEach((btn) => {
      btn.addEventListener('click', (item) => {
        const clickedElement = <HTMLButtonElement>item.target;
        clickedElement.style.background = '#b3a27b';
        clickedElement.disabled = true;
        
        const parent = <HTMLElement>clickedElement.parentElement?.parentElement?.parentElement;
        const cardBody = parent.children;
        let cardTitleBlock: HTMLElement = clickedElement;
        let cardTitle: HTMLElement = clickedElement;
        let titleHardMark: HTMLElement = clickedElement;

        for (let i = 0; i < cardBody.length; i += 1) {
          if (cardBody[i].classList.contains('body-title')) {
            cardTitleBlock = cardBody[i] as HTMLElement;
          }
        }

        for (let i = 0; i < cardTitleBlock.children.length; i += 1) {
          if (cardTitleBlock.children[i].classList.contains('title-header')) {
            cardTitle = cardTitleBlock.children[i] as HTMLElement;
          }
        }

        for (let i = 0; i < cardTitle.children.length; i += 1) {
          if (cardTitle.children[i].classList.contains('header-complicate-mark')) {
            titleHardMark = cardTitle.children[i] as HTMLElement;
          }
        }
        titleHardMark.classList.toggle('header-complicate-mark__active');
        const idWord = clickedElement.dataset?.idword as string;
        createUserWord(userId, idWord, 'hard');
        //дисейбл
      })
    })
  }
}

export function handlerBtnDelete() {
  const userId: string = localStorage.getItem('userId') as string;
  if (userId !== 'none') {
    const allBtnsDelete = document.querySelectorAll('.button-delete');
    allBtnsDelete.forEach((btn) => {
      btn.addEventListener('click', (item) => {
        const clickedElement = <HTMLElement>item.target;
        console.log(clickedElement);
        
        const wordId = clickedElement.dataset?.idword as string;
        const deleteWord = deleteUserWord(userId, wordId);
        deleteWord.then(() => {
          const { textbookPage, textbookLevel, userId } = getUserInfo();
          renderTextbookPage(textbookLevel, textbookPage, userId);
        })
      });
    });
  }
}


export function checkIsAllWordsLearned(localStoragePage: number) {
  const allBtnslerned = document.querySelectorAll('.learned-mark__active');
  const flag = localStorage.getItem('flag');
  const learnedPages = localStorage.getItem('learnedPages') as string; 

  if (allBtnslerned.length === 20) {
    const page = <HTMLElement>document.querySelector(`.page-${localStoragePage + 1}`);
    const gameAudio = <HTMLElement>document.querySelector(`.game-audiocall`);
    const gameSprint = <HTMLElement>document.querySelector(`.game-sprint`);
    page.style.background = '#ebf5f4';
    gameSprint.style.background = '#ebf5f4';
    gameAudio.style.background = '#ebf5f4';
    gameSprint.style.pointerEvents = 'none';
    gameAudio.style.pointerEvents = 'none';

    const cards = <NodeListOf<HTMLElement>>document.querySelectorAll('.card');
    cards.forEach((item) => {
       item.style.background = '#ebf5f4';
    })
    localStorage.setItem('flag', 'prev');


  }

  if (allBtnslerned.length === 19 && flag === 'prev') {
    const pageToRemove = `${localStoragePage + 1}`;
    const { textbookPage, textbookLevel, userId } = getUserInfo();
    renderTextbookPage(textbookLevel, textbookPage, userId);
    localStorage.setItem('flag', 'none');
  }
}

export function handlerBtnLearned() {
  const userId: string = localStorage.getItem('userId') as string;
  const localStoragePage = Number(localStorage.getItem('textbookPage'));
  if (userId !== 'none') {
    const allBtnslerned = document.querySelectorAll('.button-learned');

    allBtnslerned.forEach((btn) => {
      btn.addEventListener('click', (item) => {
        const clickedElement = <HTMLElement>item.target;
        const parent = <HTMLElement>clickedElement.parentElement?.parentElement?.parentElement;
        const cardBody = parent.children;
        let cardTitleBlock: HTMLElement = clickedElement;
        let cardTitle: HTMLElement = clickedElement;
        let titleHardMark: HTMLElement = clickedElement;

        for (let i = 0; i < cardBody.length; i += 1) {
          if (cardBody[i].classList.contains('body-title')) {
            cardTitleBlock = cardBody[i] as HTMLElement;
          }
        }

        for (let i = 0; i < cardTitleBlock.children.length; i += 1) {
          if (cardTitleBlock.children[i].classList.contains('title-header')) {
            cardTitle = cardTitleBlock.children[i] as HTMLElement;
          }
        }

        for (let i = 0; i < cardTitle.children.length; i += 1) {
          if (cardTitle.children[i].classList.contains('learned-mark')) {
            titleHardMark = cardTitle.children[i] as HTMLElement;
          }
        }
        titleHardMark.classList.toggle('learned-mark__active');
        
        const idWord = clickedElement.dataset?.idword as string;
        handleWordAsLearned(idWord);
        checkIsAllWordsLearned(localStoragePage); 
      });
    });
  }
}