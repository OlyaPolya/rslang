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
  if (keyToStorage === 'isAuthorized' && valueOfKeyToStorage !== 'none') {
    localStorage.setItem('isAuthorized', valueOfKeyToStorage);
  }
  
}

export function setBasicUserInfo() {
  if (!('pageTextbook' in localStorage)) {
    localStorage.setItem('textbookPage', '0');

  if (!('textbookLevel' in localStorage)) {
    localStorage.setItem('textbookLevel', '0');
  }
  if (!('isAuthorized' in localStorage)) {
    localStorage.setItem('isAuthorized', 'none');
  }
 }
}

export function getUserInfo() {
  const page: number = Number(localStorage.getItem('textbookPage'));
  const level: number = Number(localStorage.getItem('textbookLevel'));
  const isAuthorized: string = localStorage.getItem('textbookLevel') as string;

  return {
    textbookPage: page,
    textbookLevel: level,
    isAuthorized: isAuthorized,
  };
}
