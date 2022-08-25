export function playPauseAudio(audio: HTMLMediaElement, isPlay: boolean) {
  if (!isPlay) {
    isPlay = true;
    audio.currentTime = 0;
    audio.play();
  } else {
    isPlay = false;
    audio.pause();
  }
}
