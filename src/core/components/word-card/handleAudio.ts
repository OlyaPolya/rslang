export function playAudio(audioBlock: NodeListOf<Element>) {
  audioBlock.forEach((item) => {
    item.addEventListener('click', (elem) => {
      const targetClick = <HTMLElement>elem.currentTarget;
      const parent = <HTMLElement>targetClick.closest('.audio-block');
      const allAudio = document.querySelectorAll(`.${parent.classList[0]} > .audio-music`);
      const audio = <HTMLMediaElement>allAudio[0];
      audio.play();
      for (let i = 0; i < allAudio.length - 1; i += 1) {
        allAudio[i].addEventListener('ended', () => {
          let audi = <HTMLMediaElement>allAudio[i + 1];
          audi.play();
          if (i === allAudio.length - 1) {
            audi.pause();
          }
        });
      }
    });
  });
}
