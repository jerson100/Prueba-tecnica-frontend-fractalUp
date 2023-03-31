import {
  MusicPlayerRangeInputStyle,
  MusicPlayerRangeStyle,
} from "../../musicPlayer.style";

interface RangeProps {
  volume: number;
  changeVolume: (value: number) => void;
}

const Range = ({ volume, changeVolume }: RangeProps) => {
  return (
    <MusicPlayerRangeStyle>
      <MusicPlayerRangeInputStyle
        type="range"
        min={0}
        max={100}
        step={1}
        value={volume}
        onChange={(event) => {
          changeVolume(event.target.valueAsNumber);
        }}
      />
    </MusicPlayerRangeStyle>
  );
};

export default Range;
