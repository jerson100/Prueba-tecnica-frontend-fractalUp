import React from "react";
import { Track } from "../../../styled";
import Button from "../Button";
import Skeleton from "react-loading-skeleton";
import {
  VideoDetailButtonsStyle,
  VideoDetailContainerStyle,
  VideoDetailContentStyle,
  VideoDetailImageContainerStyle,
  VideoDetailImageStyle,
  VideoFollowersStyle,
  VideoSongNameStyle,
  VideoSubHeaderStyle,
  VideoTextContentStyle,
  VideoTitleStyle,
} from "./videoDetail.style";

type VideoDetailPropsLoading = (
  | { track: Track; loading: false }
  | { loading: true; track: Partial<Track> }
) & {
  selectSong: (index: number) => void;
  selected: boolean;
};

const VideoDetail = ({
  track,
  loading = false,
  selectSong,
  selected = false,
}: VideoDetailPropsLoading) => {
  if (loading) return <Loading />;
  return (
    <VideoDetailContainerStyle isSelected={selected}>
      <VideoDetailImageContainerStyle
        onClick={() => selectSong(track.id as number)}
      >
        <i className="fa-solid fa-play"></i>
        <VideoDetailImageStyle
          src={track?.album?.cover_medium}
          alt={track?.album?.title}
        />
      </VideoDetailImageContainerStyle>
      <VideoDetailContentStyle wallpaper={track?.album?.cover_medium}>
        <VideoTitleStyle>{track?.artist?.name}</VideoTitleStyle>
        <VideoSubHeaderStyle>
          <VideoSongNameStyle>{track?.title}</VideoSongNameStyle>
          <VideoFollowersStyle>1000 seguidores</VideoFollowersStyle>
        </VideoSubHeaderStyle>
        <VideoTextContentStyle>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
          adipisci iste cum hic voluptates ipsa labore quo laboriosam impedit.
          Cumque modi facere nulla id veniam rem autem quae esse ipsam.
        </VideoTextContentStyle>
        <VideoDetailButtonsStyle>
          <Button
            variant="contained"
            onClick={() => selectSong(track.id as number)}
          >
            Reproducir
          </Button>
          <Button variant="outlined">Seguir</Button>
        </VideoDetailButtonsStyle>
      </VideoDetailContentStyle>
    </VideoDetailContainerStyle>
  );
};

const Loading = () => {
  return (
    <VideoDetailContainerStyle isSelected={false}>
      <VideoDetailImageContainerStyle>
        <Skeleton width={"100%"} height={"100%"} />
      </VideoDetailImageContainerStyle>
      <VideoDetailContentStyle wallpaper={""}>
        <VideoTitleStyle>
          <Skeleton count={1} width={"100%"} />
        </VideoTitleStyle>
        <VideoSubHeaderStyle>
          <VideoSongNameStyle>
            <Skeleton count={1} width={"100px"} />
          </VideoSongNameStyle>
          <VideoFollowersStyle>
            <Skeleton count={1} width={"50px"} />
          </VideoFollowersStyle>
        </VideoSubHeaderStyle>
        <VideoTextContentStyle>
          <Skeleton count={1} width={"100%"} />
        </VideoTextContentStyle>
        <VideoDetailButtonsStyle>
          <Skeleton count={2} width={"100px"} />
          <Skeleton count={2} width={"100px"} />
        </VideoDetailButtonsStyle>
      </VideoDetailContentStyle>
    </VideoDetailContainerStyle>
  );
};

export default React.memo(VideoDetail);
