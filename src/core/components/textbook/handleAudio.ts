export function playAudio(audioBlock: NodeListOf<Element>) {
  audioBlock.forEach((item) => {
    item.addEventListener('click', (elem) => {
      const targetClick = <HTMLElement>elem.currentTarget;
      const parentBlock = <HTMLElement>targetClick.closest('.audio-block');
      const allChildren = parentBlock.children;
      let audioChildren: Array<HTMLMediaElement> = [];
      
      for (let i = 0; i < allChildren.length; i += 1) {
        if (allChildren[i].classList.contains('audio-music')) {
          audioChildren.push(allChildren[i] as HTMLMediaElement);
        }
      }

      const firstMusic = <HTMLMediaElement>audioChildren[0];

      firstMusic.play();
      for (let i = 0; i < audioChildren.length - 1; i += 1) {
        audioChildren[i].addEventListener('ended', () => {
          let audi = <HTMLMediaElement>audioChildren[i + 1];
          audi.play();
          if (i === audioChildren.length - 1) {
            audi.pause();
          }
        });
      }
    });
  });
}
