import React from "react";
import Button from "../Button";
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

interface VideoDetailProps extends React.HTMLAttributes<HTMLDivElement> {
  img?: string;
  description?: string;
  artistname: string;
  songname: string;
  followers: number;
  id: string;
  wallpaper: string;
}

const VideoDetail = ({
  img,
  description,
  artistname,
  songname,
  followers,
  id,
  wallpaper,
  ...props
}: VideoDetailProps) => {
  return (
    <VideoDetailContainerStyle {...props}>
      <VideoDetailImageContainerStyle>
        <i className="fa-solid fa-play"></i>
        <VideoDetailImageStyle src={img} alt={description} />
      </VideoDetailImageContainerStyle>
      <VideoDetailContentStyle wallpaper={wallpaper}>
        <VideoTitleStyle>{artistname}</VideoTitleStyle>
        <VideoSubHeaderStyle>
          <VideoSongNameStyle>{songname}</VideoSongNameStyle>
          <VideoFollowersStyle>{followers} seguidores</VideoFollowersStyle>
        </VideoSubHeaderStyle>
        <VideoTextContentStyle>{description}</VideoTextContentStyle>
        <VideoDetailButtonsStyle>
          <Button variant="contained">Reproducir</Button>
          <Button variant="outlined">Seguir</Button>
        </VideoDetailButtonsStyle>
      </VideoDetailContentStyle>
    </VideoDetailContainerStyle>
  );
};

export default React.memo(VideoDetail);
