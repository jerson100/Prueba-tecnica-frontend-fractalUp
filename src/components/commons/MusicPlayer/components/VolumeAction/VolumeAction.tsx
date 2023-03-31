import { VolumeActionProps } from "../../../../../styled";
import {
  MusicPlayerVolumeActionStyle,
  MusicPlayerVolumePountStyle,
} from "../../musicPlayer.style";

const VolumeAction = ({ percentage }: VolumeActionProps) => {
  return (
    <MusicPlayerVolumeActionStyle>
      <MusicPlayerVolumePountStyle percentage={50} />
    </MusicPlayerVolumeActionStyle>
  );
};

export default VolumeAction;
