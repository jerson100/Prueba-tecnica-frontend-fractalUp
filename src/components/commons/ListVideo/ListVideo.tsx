import React from "react";
import { Track } from "../../../styled";
import Video from "../Video";
import { ListStyle } from "./listVideo.style";

interface ListVideoProps {
  videos: Track[];
  loading?: boolean;
  changeListeningSong: (track: Partial<Track>) => void;
}

const ListVideo = ({
  videos,
  loading = false,
  changeListeningSong,
}: ListVideoProps) => {
  return (
    <ListStyle>
      {loading
        ? [0, 1, 2, 3, 4, 5].map((k) => <Video key={k} loading={true} />)
        : videos.map((video) => (
            <Video key={video.id} {...video} onClick={changeListeningSong} />
          ))}
    </ListStyle>
  );
};

export default React.memo(ListVideo);
