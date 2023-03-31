import styled from "styled-components";
import { VolumeActionProps } from "../../../styled";

export const MusicPlayerContainerStyle = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.palette.common.lightRed};
  height: 100px;
  position: fixed;
  transition: bottom 0.3s ease-in-out;
  bottom: ${({ active }) => (active ? "0" : "-100px")};
  width: 100%;
  z-index: 10000;
  i {
    font-size: 20px;
    color: ${({ theme }) => theme.palette.common.white};
    cursor: pointer;
  }
  /* align-items: center; */
`;

export const MusicPlayerleftStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const MusicPlayerCentertStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
export const MusicPlayerRightStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  i {
    margin-right: 40px;
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
  width: 100px;
  height: 100px;
  position: relative;
  flex: 0 0 100px;
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
  width: 150px;
`;

export const MusicPlayerSongStyle = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.common.white};
`;
export const MusicPlayerAuthorStyle = styled.p`
  margin: 0 0 0 0;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.common.white};
`;
export const MusicPlayerStartActionStyle = styled.p`
  cursor: pointer;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 0, 0, 0.1);
`;

export const MusicPlayerRangeStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export const MusicPlayerRangeInputStyle = styled.input`
  width: 100px;
  height: 6px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 50px;
  -webkit-appearance: none;
  cursor: pointer;
  &::-webkit-slider-thumb {
    background-color: ${({ theme }) => theme.palette.common.white};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    -webkit-appearance: none;
  }
`;
