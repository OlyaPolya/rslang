const path = 'https://easy-english-rss.herokuapp.com/';
import {CardBody} from '../textbook/wordCard'

export async function getWordsList(level: number, page: number) {
  try {
    const response = await fetch(`${path}words?group=${level}&page=${page}`);    
    const words: CardBody[] = await response.json();
    return words;
  } catch (error) {
    throw new Error('Не удалось получить данные от сервера');
  }
}
interface requestBody {
  difficulty: string;
  optional: object;
}

export async function createUserWord(userID: string, wordID: string, wordGroup: string) {
  const token = localStorage.getItem('token') as string;
  const bodyResponse: requestBody = { difficulty: `${wordGroup}`, optional: { testFieldString: 'test', testFieldBoolean: true } };

  try {
    const response = await fetch(`${path}users/${userID}/words/${wordID}`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyResponse),
    });
    const responceBody = await response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserWords(userId: string) {
  const token = localStorage.getItem('token') as string;
  try{
    const rawResponse = await fetch(`${path}users/${userId}/words`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": 'application/json',
      },
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    throw new Error(error);
  }
  
};

export async function getUserWord(userId: string, wordId: string) {
  const token = localStorage.getItem('token') as string;
  try {
    const rawResponse = await fetch(`${path}users/${userId}/words/${wordId}`, {
      method: 'GET',
      headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      }
    });
    if (rawResponse.status === 401) {
      //залогиниться signIn и получить/записать новый токен getToken
    }
    
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getWord(wordId: string) {
  try {
    const response = await fetch(`${path}words/${wordId}`);
    const word: CardBody = await response.json();

    return word;
    
  } catch (error) {
    throw new Error(error);
  }
}


export async function deleteUserWord(userId: string, wordId: string) {
  const token = localStorage.getItem('token') as string;
  try {
    const rawResponse = await fetch(`${path}users/${userId}/words/${wordId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'accept: */*',
      },
    });
    if (rawResponse.status === 204) {
      console.log('Word has been deleted'); 
    }
    return rawResponse.status;
  } catch (error) {
    throw new Error(error);
  }
}