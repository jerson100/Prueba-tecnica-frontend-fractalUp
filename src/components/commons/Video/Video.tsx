import React from "react";
import { Track } from "../../../styled";
import Skeleton from "react-loading-skeleton";
import {
  VideoArticleStyle,
  VideoImageContainerStyle,
  VideoImageStyle,
  VideoListContainerStyle,
  VideoAuthorStyle,
  VideoSongNameStyle,
  VideoImageLoadingStyle,
} from "./video.style";

import "react-loading-skeleton/dist/skeleton.css";

type VideoPropsLoading =
  | (
      | (Track & { loading: false; selected?: false })
      | ({ loading?: true; selected?: boolean } & Partial<Track>)
    ) & {
      selectSong?: (index: number) => void;
    };

const Video = ({
  selectSong = () => {},
  loading = false,
  selected = false,
  ...track
}: VideoPropsLoading) => {
  return (
    <VideoListContainerStyle isSelected={selected}>
      {loading ? (
        <>
          <VideoImageLoadingStyle />
          <Skeleton count={1} className="txt" />
          <Skeleton count={1} className="txt2" />
        </>
      ) : (
        <VideoArticleStyle>
          <VideoImageContainerStyle
            onClick={() => {
              !loading ? selectSong(track.id as number) : null;
            }}
          >
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
            <VideoImageStyle
              src={track.album?.cover_medium}
              alt={track.album?.title}
            />
          </VideoImageContainerStyle>
          <VideoSongNameStyle>{track.title}</VideoSongNameStyle>
          <VideoAuthorStyle>{track.artist?.name}</VideoAuthorStyle>
        </VideoArticleStyle>
      )}
    </VideoListContainerStyle>
  );
};

export default React.memo(Video);
