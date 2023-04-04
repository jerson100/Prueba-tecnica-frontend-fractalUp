import { useCallback, useEffect, useRef, useState } from "react";
import usePlayerMusicContext from "../../../hooks/usePlayerMusicContext";
import ButtonNavigation from "./components/ButtonNavigation";
import InfoMusic from "./components/InfoMusic";
import VolumeControl from "./components/VolumeControl";
import { MusicPlayerContainerStyle } from "./musicPlayer.style";

const MusicPlayer = () => {
  const { listeningSong, nextSong, prevSong } = usePlayerMusicContext();
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    let cb: (() => void) | null = null;
    if (listeningSong?.preview) {
      cb = () => {
        setPlaying(false);
        nextSong();
      };
      audioRef.current.src = listeningSong?.preview;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setPlaying(true);
      audioRef.current.addEventListener("ended", cb);
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlaying(false);
    }
    return () => {
      if (cb) audioRef.current.removeEventListener("ended", cb);
    };
  }, [listeningSong]);

  const changePlaying = useCallback(() => {
    setPlaying((prevPlaying) => {
      if (prevPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      return !prevPlaying;
    });
  }, []);

  const changeVolume = useCallback((volume: number) => {
    setVolume(volume);
    audioRef.current.volume = volume / 100;
  }, []);

  return (
    <MusicPlayerContainerStyle active={listeningSong != null}>
      <InfoMusic track={listeningSong} />
      <ButtonNavigation
        changePlaying={changePlaying}
        playing={playing}
        nextSong={nextSong}
        prevSong={prevSong}
      />
      <VolumeControl changeVolume={changeVolume} volume={volume} />
    </MusicPlayerContainerStyle>
  );
};

export default MusicPlayer;
