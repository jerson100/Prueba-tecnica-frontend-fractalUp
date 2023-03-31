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
      <i className="fa-sharp fa-solid fa-volume-off"></i>
    </MusicPlayerRightStyle>
  );
};

export default React.memo(VolumeControl);
