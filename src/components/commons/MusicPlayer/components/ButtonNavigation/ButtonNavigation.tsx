import React from "react";
import {
  MusicPlayerCentertStyle,
  MusicPlayerStartActionStyle,
} from "../../musicPlayer.style";

interface ButtonNavigationProps {
  changePlaying: () => void;
  nextSong: () => void;
  prevSong: () => void;
  playing: boolean;
}

const ButtonNavigation = ({
  changePlaying = () => {},
  nextSong = () => {},
  prevSong = () => {},
  playing = false,
}: ButtonNavigationProps) => {
  const iconPlaying = (
    <i className={`fa-solid ${playing ? "fa-pause" : "fa-play"}`}></i>
  );
  return (
    <MusicPlayerCentertStyle>
      <i className="fa-solid fa-step-backward" onClick={prevSong}></i>
      <MusicPlayerStartActionStyle onClick={changePlaying}>
        {iconPlaying}
      </MusicPlayerStartActionStyle>
      <i className="fa-solid fa-step-forward" onClick={nextSong}></i>
    </MusicPlayerCentertStyle>
  );
};

export default React.memo(ButtonNavigation);
