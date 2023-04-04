import React from "react";
import { Track } from "../../../styled";
import Video from "../Video";
import { ListStyle } from "./listVideo.style";

interface ListVideoProps {
  videos: Track[];
  loading?: boolean;
  selectSong: (index: number) => void;
  selected?: number;
}

const ListVideo = ({
  videos,
  loading = false,
  selectSong,
  selected = -1,
}: ListVideoProps) => {
  return (
    <ListStyle>
      {loading
        ? [0, 1, 2, 3, 4, 5].map((k) => <Video key={k} loading={true} />)
        : videos.map((video) => (
            <Video
              key={video.id}
              {...video}
              selectSong={selectSong}
              selected={selected === video.id}
              //   onClick={() => selectSong(index + 1)}
            />
          ))}
    </ListStyle>
  );
};

export default React.memo(ListVideo);
