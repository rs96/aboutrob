import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import icons from "./icons";
import content from "./deadclever.mp4";
import "./player.css";
import { clear } from "console";

export const Player = () => {
  let video = document.getElementById("video") as HTMLVideoElement;
  let progress = document.getElementById("progress") as HTMLProgressElement;
  let controls = document.getElementById("controls") as HTMLElement;
  let player = document.getElementById("player") as HTMLElement;
  let volumeControls = document.getElementById(
    "volume-controls"
  ) as HTMLProgressElement;
  const timerRef = useRef(setTimeout(() => {}, 0));

  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowVolumeControls, setIsShowVolumeControls] = useState(false);

  useEffect(() => {
    video = document.getElementById("video") as HTMLVideoElement;
    progress = document.getElementById("progress") as HTMLProgressElement;
    controls = document.getElementById("controls") as HTMLElement;
    player = document.getElementById("player") as HTMLElement;
    volumeControls = document.getElementById(
      "volume-controls"
    ) as HTMLProgressElement;
  });

  const handleMouseMoveVideo = () => {
    controls.setAttribute("data-state", "visible");
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!isShowVolumeControls) {
        controls.setAttribute("data-state", "hidden");
      }
    }, 1000);
  };

  const handleMouseEnterControls = () => {
    clearTimeout(timerRef.current);
    controls.setAttribute("data-state", "visible");
  };

  const handleMouseLeaveControls = () => {
    timerRef.current = setTimeout(() => {
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

  const handleVolumeChange: MouseEventHandler<HTMLElement> = (event) => {
    const rect = volumeControls.getBoundingClientRect();
    const pos = (rect.bottom - event.pageY) / rect.height;
    video.volume = pos;
    volumeControls.value = video.volume;
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
    <div id="player" className="player" data-fullscreen="false">
      <video
        id="video"
        controls={false}
        onLoadedMetadata={handleOnLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onMouseMove={handleMouseMoveVideo}
      >
        <source src={content} type="video/mp4" />
        Your browser doesn't support HTML video.
      </video>
      <div
        id="controls"
        className="controls"
        data-state="visible"
        onMouseEnter={handleMouseEnterControls}
        onMouseLeave={() => {
          if (!isShowVolumeControls) {
            handleMouseLeaveControls();
          }
        }}
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
          onMouseEnter={() => setIsShowVolumeControls(true)}
          onMouseLeave={() => setIsShowVolumeControls(false)} // set timeout for this
        >
          <img src={icons.mute} />
          {isShowVolumeControls && (
            <progress
              id="volume-controls"
              value="0"
              max="1"
              onClick={handleVolumeChange}
            />
          )}
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
    </div>
  );
};
