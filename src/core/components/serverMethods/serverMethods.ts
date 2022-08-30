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