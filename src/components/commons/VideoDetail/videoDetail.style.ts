import styled from "styled-components";

const VideoDetailContainerStyle = styled.article`
  display: flex;
`;

const VideoDetailImageContainerStyle = styled.div`
  flex: 0 0 250px;
  position: relative;
  cursor: pointer;
  &:hover i {
    color: ${({ theme }) => theme.palette.common.lightRed};
  }
  i {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 72px;
    transition: color ease 0.3s;
    z-index: 1;
  }
`;

const VideoDetailContentStyle = styled.div<
  {
    wallpaper: string;
  } & React.HTMLAttributes<HTMLDivElement>
>`
  padding: 32px;
  /*padding: 40px 32px;*/
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        0deg,
        rgba(167, 0, 0, 0.7),
        rgba(167, 0, 0, 0.7)
      ),
      url(${({ wallpaper }) => wallpaper});
    mix-blend-mode: normal;
    opacity: 0.5;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: -1;
  }
`;

const VideoTitleStyle = styled.h1`
  margin: 0 0 0.7rem 0;
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: 700;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.common.lightRed};
  }
`;

const VideoSubHeaderStyle = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.3rem;
  align-items: center;
`;

const VideoSongNameStyle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.common.lightRed};
  }
`;

const VideoFollowersStyle = styled.p`
  margin: 0;
  color: #662323;
  font-size: 10px;
`;

const VideoTextContentStyle = styled.p`
  margin: 0 0 58px 0;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 12px;
`;

const VideoDetailImageStyle = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
`;

const VideoDetailButtonsStyle = styled.div`
  display: flex;
  gap: 1rem;
`;

export {
  VideoDetailContainerStyle,
  VideoDetailContentStyle,
  VideoDetailImageContainerStyle,
  VideoDetailImageStyle,
  VideoFollowersStyle,
  VideoSongNameStyle,
  VideoSubHeaderStyle,
  VideoTextContentStyle,
  VideoTitleStyle,
  VideoDetailButtonsStyle,
};
