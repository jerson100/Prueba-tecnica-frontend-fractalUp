import React from "react";
import { MusicPlayerRightStyle } from "../../musicPlayer.style";
import Range from "../Range";

interface VolumeProps {
  changeVolume: (value: number) => void;
  volume: number;
}

const VolumeControl = ({ volume = 50, changeVolume }: VolumeProps) => {
  return (
    <MusicPlayerRightStyle>
      {/* <VolumeAction /> */}
      <Range volume={volume} changeVolume={changeVolume} />
      {volume === 0 ? (
        <i
          className="fa-sharp fa-solid fa-volume-mute"
          onClick={() => changeVolume(50)}
        ></i>
      ) : volume > 50 ? (
        <i
          className="fa-sharp fa-solid fa-volume-up"
          onClick={() => changeVolume(0)}
        ></i>
      ) : (
        <i
          className="fa-sharp fa-solid fa-volume-down"
          onClick={() => changeVolume(0)}
        ></i>
      )}
    </MusicPlayerRightStyle>
  );
};

export default React.memo(VolumeControl);
