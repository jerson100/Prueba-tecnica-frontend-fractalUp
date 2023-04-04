import React from "react";
import { Track } from "../../../../../styled";
import {
  MusicPlayerAuthorStyle,
  MusicPlayerImageContainerStyle,
  MusicPlayerImageStyle,
  MusicPlayerleftStyle,
  MusicPlayerSongContainerStyle,
  MusicPlayerSongStyle,
} from "../../musicPlayer.style";

const InfoMusic = ({ track }: { track: Partial<Track> | null | undefined }) => {
  return (
    <MusicPlayerleftStyle>
      <MusicPlayerImageContainerStyle>
        <MusicPlayerImageStyle
          src={track?.album?.cover_medium}
          alt={track?.album?.title}
        />
      </MusicPlayerImageContainerStyle>
      <MusicPlayerSongContainerStyle>
        <MusicPlayerSongStyle>{track?.title}</MusicPlayerSongStyle>
        <MusicPlayerAuthorStyle>
          {track?.artist?.name} - {track?.album?.title}
        </MusicPlayerAuthorStyle>
      </MusicPlayerSongContainerStyle>
    </MusicPlayerleftStyle>
  );
};

export default React.memo(InfoMusic);
