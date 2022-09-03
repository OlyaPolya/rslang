import { createUserWord, deleteUserWord } from '../serverMethods/serverMethods';
import {getUserInfo} from './localStorage'
import {renderTextbookPage} from '../../../pages/textbook/index'

export function handlerBtnHardWord() {
  const userId: string = localStorage.getItem('userId') as string;
  if (userId !== 'none') {
    const allBtnsHard = document.querySelectorAll('.button-hard');
    allBtnsHard.forEach((btn) => {
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
          if (cardTitle.children[i].classList.contains('header-complicate-mark')) {
            titleHardMark = cardTitle.children[i] as HTMLElement;
          }
        }
        titleHardMark.classList.toggle('header-complicate-mark__active');
        const idWord = clickedElement.dataset?.idword as string;
        createUserWord(userId, idWord, 'hard');
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


function checkIsAllWordsLearned() {
  const allBtnslerned = document.querySelectorAll('.learned-mark__active');
  if (allBtnslerned.length === 20) {
    console.log(' все слова изучены');
    
  }
}

export function handlerBtnLearned() {
  const userId: string = localStorage.getItem('userId') as string;
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
        console.log(titleHardMark);
        
        const idWord = clickedElement.dataset?.idword as string;
        createUserWord(userId, idWord, 'learned');
      });
    });
  }
}