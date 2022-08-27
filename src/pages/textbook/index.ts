import { playAudio } from '../../core/components/word-card/handleAudio';
import '../../core/components/word-card/wordCard.scss';
import { createCardWord, CardBody } from '../../core/components/word-card/wordCard';

document.body.innerHTML = createCardWord(
    {
      id: '5e9f5ee35eb9e72bc21af70e',
      group: 1,
      page: 1,
      word: 'consist',
      image: 'files/02_0623.jpg',
      audio: 'files/02_0623.mp3',
      audioMeaning: 'files/02_0623_meaning.mp3',
      audioExample: 'files/02_0623_example.mp3',
      textMeaning: 'To <i>consist</i> of certain is to be made of parts or things them.',
      textExample: 'Today’s choices for lunch <b>consisted</b> of pizza, hamburgers, and hot dogs.',
      transcription: '[kənsíst]',
      textExampleTranslate: 'Сегодняшний выбор на обед состоял из пиццы, гамбургеров и хот-догов',
      textMeaningTranslate: 'Быть состоящим из определенного означает быть составленным из частей или вещей из них',
      wordTranslate: 'состоят',
    },
    true
  )

  const audioBlock: NodeListOf<Element> = document.querySelectorAll('.audio-image');
  playAudio(audioBlock);



  