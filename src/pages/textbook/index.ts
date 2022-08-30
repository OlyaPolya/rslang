import { playAudio } from '../../core/components/textbook/handleAudio';
import '../../assets/styles/wordCard.scss';
//import '../../assets/styles/textbookMenu.scss';
import { renderCardLayout, CardBody } from '../../core/components/textbook/wordCard';
import '../../core/components/textbook/textbookPage'
import {getWordsList} from '../../core/components/serverMethods/serverMethods'
import {getTextbookPageLayout} from '../../core/components/textbook/textbookPage'
import '../../assets/styles/textbookPage.scss';
import { setUserInfo, getUserInfo } from '../../core/components/textbook/localStorage';

function renderTextbookPage(level: number, page: number, isAuthorized: string) {
  document.body.innerHTML = getTextbookPageLayout(level);

  const wordListLayout = <HTMLElement>document.querySelector('.body-words-list');

  const wordsList = getWordsList(level, page);
  wordsList.then((list) => {
    list.forEach((word) => {
      wordListLayout.insertAdjacentHTML("beforeend", renderCardLayout(word, isAuthorized));
    })

    const levelBtns = document.querySelectorAll('.part');
    levelBtns.forEach((btn) => {
      btn.addEventListener('click', (item) => {
        const clickedElement = <HTMLElement>item.target;
        const level = clickedElement.dataset;       
        setUserInfo(level);
        const { textbookPage, textbookLevel, isAuthorized } = getUserInfo();
        console.log('textbookLevel', textbookLevel);
        // renderTextbookPage(textbookLevel, textbookPage, isAuthorized);
        
      })
    })

  });

}


function startApp() {
  //localStorage.clear
  const { textbookPage, textbookLevel, isAuthorized } = getUserInfo();
  renderTextbookPage(textbookLevel, textbookPage, isAuthorized);
}

 startApp();
