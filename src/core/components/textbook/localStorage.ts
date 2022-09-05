export function setUserInfo(parametr: object) {
  const keyToStorage = Object.keys(parametr).join('');
  const valueOfKeyToStorage = Object.values(parametr).join('');

  if (keyToStorage === 'page') {
    localStorage.setItem('textbookPage', valueOfKeyToStorage);
  }
  if (keyToStorage === 'level') {
    localStorage.setItem('textbookLevel', valueOfKeyToStorage);
    localStorage.setItem('textbookPage', '0');

  }
  if (keyToStorage === 'userId' && valueOfKeyToStorage !== 'none') {
    localStorage.setItem('userId', valueOfKeyToStorage);
  }
  
}

export function setBasicUserInfo() {
  if (!('textbookPage' in localStorage)) {
    localStorage.setItem('textbookPage', '0');
  }
  if (!('textbookLevel' in localStorage)) {
    localStorage.setItem('textbookLevel', '0');
  }
  if (!('userId' in localStorage)) {
    localStorage.setItem('userId', 'none');
  }
  if (!('learnedWords' in localStorage)) {
    localStorage.setItem('learnedWords', 'none');
  }
  if (!('flag' in localStorage)) {
    localStorage.setItem('flag', 'none');
  }
  if (!('learnedPages' in localStorage)) {
    localStorage.setItem('learnedPages', '0');
  }
}

export function getUserInfo() {
  const page: number = Number(localStorage.getItem('textbookPage'));
  const level: number = Number(localStorage.getItem('textbookLevel'));
  const userId: string = localStorage.getItem('userId') as string;

  return {
    textbookPage: page,
    textbookLevel: level,
    userId: userId,
  };
}

export function handleWordAsLearned(wordId: string) {
  const wordsInStorage: string = localStorage.getItem('learnedWords') as string;
  let learnedWords = wordsInStorage.split(',');
  let isWasInLearnedWord = 0;

  for (let i = 0; i < learnedWords.length; i += 1) {
    if (learnedWords[i] === wordId) {
      learnedWords.splice(i, 1);
      const stringFromlearnedWords = learnedWords.join(',');
      localStorage.setItem('learnedWords', `${stringFromlearnedWords}`);
      isWasInLearnedWord = 1;
      break;
    }
  }
  
  if (isWasInLearnedWord === 0) {
    learnedWords.push(wordId);
    const stringFromlearnedWords = learnedWords.join(',');
    localStorage.setItem('learnedWords', `${stringFromlearnedWords}`);
  }
}