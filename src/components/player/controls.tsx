export const handlePlayPauseOnClick = (video: HTMLVideoElement) => () => {
  console.log({ video });
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
};

export const handleStopOnClick = (
  video: HTMLVideoElement,
  progress: HTMLProgressElement
) => () => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
};
