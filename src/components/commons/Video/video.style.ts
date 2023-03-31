import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

export const VideoListContainerStyle = styled.li`
  & .txt2 {
    display: inline-block;
    width: 70px;
  }
  & .txt {
    margin-bottom: 2px;
    display: inline-block;
    width: 100px;
  }
`;

export const VideoArticleStyle = styled.article``;

export const VideoImageContainerStyle = styled.div`
  margin-bottom: 8px;
  position: relative;
  height: 160px;
  cursor: pointer;
  &:hover i:nth-child(1) {
    color: ${({ theme }) => theme.palette.common.lightRed};
  }

  i {
    position: absolute;
    color: ${({ theme }) => theme.palette.common.white};
    transition: color ease 0.3s;
    z-index: 1;
  }

  i:nth-child(1) {
    font-size: 38px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  i:nth-child(2) {
    font-size: 20px;
    right: 0.5rem;
    top: 0.5rem;
    &:hover {
      color: ${({ theme }) => theme.palette.common.lightRed};
    }
  }
`;

export const VideoImageStyle = styled.img`
  position: absolute;
  object-fit: cover;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const VideoSongNameStyle = styled.h1`
  color: ${({ theme }) => theme.palette.text.primary};
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.common.lightRed};
  }
`;

export const VideoAuthorStyle = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.common.lightRed};
  }
`;

export const VideoImageLoadingStyle = styled(Skeleton)`
  height: 160px;
  margin-bottom: 8px;
`;
