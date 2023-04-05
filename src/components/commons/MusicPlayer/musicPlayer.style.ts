import styled from "styled-components";
import { VolumeActionProps } from "../../../styled";
import Color from "color";

export const MusicPlayerContainerStyle = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.palette.common.lightRed};
  height: 60px;
  position: fixed;
  transition: bottom 0.3s ease-in-out;
  bottom: ${({ active }) => (active ? "0" : "-100px")};
  width: 100%;
  z-index: 3;
  gap: 10px;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    height: 100px;
    z-index: 10000;
    gap: 20px;
  }
  i {
    font-size: 10px;
    color: ${({ theme }) => theme.palette.common.white};
    cursor: pointer;
    @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      font-size: 20px;
    }
  }
  /* align-items: center; */
`;

export const MusicPlayerleftStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    gap: 20px;
  }
`;
export const MusicPlayerCentertStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    gap: 25px;
  }
`;
export const MusicPlayerRightStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    gap: 40px;
  }
  i {
    margin-right: 1rem;
    width: 10px;
    @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      margin-right: 40px;
      width: 18px;
    }
  }
`;

export const MusicPlayerVolumeActionStyle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 6px;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const MusicPlayerVolumePountStyle = styled.div<VolumeActionProps>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  transform: translateX(${({ percentage }) => percentage}%);
  background-color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;
`;

export const MusicPlayerImageContainerStyle = styled.div`
  width: 60px;
  height: 100%;
  position: relative;
  flex: 0 0 60px;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    flex-basis: 80px;
    width: 80px;
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    flex-basis: 100px;
    width: 100px;
  }
`;

export const MusicPlayerImageStyle = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MusicPlayerSongContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 1 60px;
  overflow: hidden;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    flex-basis: 150px;
    width: 150px;
  }
`;

export const MusicPlayerSongStyle = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.palette.common.white};
`;
export const MusicPlayerAuthorStyle = styled.p`
  margin: 0 0 0 0;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.palette.common.white};
`;
export const MusicPlayerStartActionStyle = styled.p`
  cursor: pointer;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    width: 60px;
    height: 60px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    Color(theme.palette.common.lightRed).lighten(0.1).hex()};
`;

export const MusicPlayerRangeStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export const MusicPlayerRangeInputStyle = styled.input`
  width: 60px;
  height: 6px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 50px;
  -webkit-appearance: none;
  cursor: pointer;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    width: 100px;
  }
  &::-webkit-slider-thumb {
    background-color: ${({ theme }) => theme.palette.common.white};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    -webkit-appearance: none;
  }
`;
