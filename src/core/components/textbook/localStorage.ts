export function setUserInfo(parametr: object) {
  const keyToStorage = Object.keys(parametr).join('');
  const valueOfKeyToStorage = Object.values(parametr).join('');

  if (keyToStorage === 'page') {
    localStorage.setItem('textbookPage', valueOfKeyToStorage);
  }
  if (keyToStorage === 'level') {
    localStorage.setItem('textbookLevel', valueOfKeyToStorage);

  }
  if (keyToStorage === 'isAuthorized' && valueOfKeyToStorage !== 'none') {
    localStorage.setItem('isAuthorized', valueOfKeyToStorage);
  }
  
}

export function getUserInfo() {
  if (!localStorage.pageTextbook) {
    localStorage.setItem('textbookPage', '1');
  }
  if (!localStorage.levelTextbook) {
    localStorage.setItem('textbookLevel', '1');
  }
  if (!localStorage.isAuthorized) {
    localStorage.setItem('isAuthorized', 'none');
  }

  const page: number = Number(localStorage.getItem('textbookPage'));
  const level: number = Number(localStorage.getItem('textbookLevel'));
  const isAuthorized: string = localStorage.getItem('textbookLevel') as string;

  return {
    textbookPage: page,
    textbookLevel: level,
    isAuthorized: isAuthorized,
  };
}
