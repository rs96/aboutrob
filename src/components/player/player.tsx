import React, { MouseEventHandler, useEffect, useState } from "react";
import icons from "./icons";
import content from "./deadclever.mp4";
import "./player.css";

export const Player = () => {
  let video = document.getElementById("video") as HTMLVideoElement;
  let progress = document.getElementById("progress") as HTMLProgressElement;
  let controls = document.getElementById("controls") as HTMLElement;
  let player = document.getElementById("player") as HTMLElement;
  let mouseMoveTimer: NodeJS.Timeout;

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    video = document.getElementById("video") as HTMLVideoElement;
    progress = document.getElementById("progress") as HTMLProgressElement;
    controls = document.getElementById("controls") as HTMLElement;
    player = document.getElementById("player") as HTMLElement;
  });

  const handleMouseMove = () => {
    if (controls.getAttribute("data-state") === "visible") {
      clearTimeout(mouseMoveTimer);
      mouseMoveTimer = setTimeout(() => {
        controls.setAttribute("data-state", "hidden");
      }, 1000);
      return;
    }
    controls.setAttribute("data-state", "visible");
  };

  const handleMouseEnterControls = () => {
    clearTimeout(mouseMoveTimer);
    controls.setAttribute("data-state", "visible");
  };

  const handleMouseLeaveControls = () => {
    mouseMoveTimer = setTimeout(() => {
      controls.setAttribute("data-state", "hidden");
    }, 1000);
  };

  const handlePlayPauseOnClick = () => {
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleStopOnClick = () => {
    video.pause();
    video.currentTime = 0;
    progress.value = 0;
    setIsPlaying(false);
  };

  const volumeChange = (direction: "+" | "-") => () => {
    const currentVolume = Math.floor(video.volume * 10) / 10;
    if (direction === "+" && currentVolume < 1) {
      video.volume += 0.1;
    } else if (direction === "-" && currentVolume > 0) {
      video.volume -= 0.1;
    }
  };

  const handleMuteOnClick = () => {
    video.muted = !video.muted;
  };

  const handleFullscreenToggle = () => {
    if (document.fullscreenElement === null) {
      player.setAttribute("data-fullscreen", "true");
      player.requestFullscreen();
    } else {
      player.setAttribute("data-fullscreen", "false");
      document.exitFullscreen();
    }
  };

  const handleOnLoadedMetadata = () => {
    progress.setAttribute("max", video.duration.toString());
  };

  const handleTimeUpdate = () => {
    progress.value = video.currentTime;
  };

  const handleSkipAhead: MouseEventHandler<HTMLElement> = (event) => {
    const rect = progress.getBoundingClientRect();
    const pos = (event.pageX - rect.left) / progress.offsetWidth;
    video.currentTime = pos * video.duration;
  };

  return (
    <figure
      id="player"
      className="player"
      data-fullscreen="false"
      onMouseMove={handleMouseMove}
    >
      <video
        id="video"
        controls={false}
        onLoadedMetadata={handleOnLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={content} type="video/mp4" />
        Your browser doesn't support HTML video.
      </video>
      <div
        id="controls"
        className="controls"
        data-state="hidden"
        onMouseEnter={handleMouseEnterControls}
        onMouseLeave={handleMouseLeaveControls}
      >
        <button
          id="playpause"
          type="button"
          data-state="play"
          onClick={handlePlayPauseOnClick}
        >
          {isPlaying ? <img src={icons.pause} /> : <img src={icons.play} />}
        </button>
        <button
          id="stop"
          type="button"
          data-state="stop"
          onClick={handleStopOnClick}
        >
          <img src={icons.stop} />
        </button>
        <div className="progress" onClick={handleSkipAhead}>
          <progress id="progress" value="0" />
        </div>
        <button
          id="mute"
          type="button"
          data-state="mute"
          onClick={handleMuteOnClick}
        >
          <img src={icons.mute} />
        </button>
        <button
          id="volinc"
          type="button"
          data-state="volup"
          onClick={volumeChange("+")}
        >
          <img src={icons.volume} />+
        </button>
        <button
          id="voldec"
          type="button"
          data-state="voldown"
          onClick={volumeChange("-")}
        >
          <img src={icons.volume} />-
        </button>
        <button
          id="fs"
          type="button"
          data-state="go-fullscreen"
          onClick={handleFullscreenToggle}
        >
          <img src={icons.fullscreen} />
        </button>
      </div>
    </figure>
  );
};
