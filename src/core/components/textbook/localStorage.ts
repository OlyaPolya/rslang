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

    if (!('textbookLevel' in localStorage)) {
      localStorage.setItem('textbookLevel', '0');
    }
    if (!('userId' in localStorage)) {
      localStorage.setItem('userId', 'none');
    }
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
