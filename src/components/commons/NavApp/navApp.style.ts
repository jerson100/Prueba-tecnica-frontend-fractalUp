import styled from "styled-components";
import { motion } from "framer-motion";

const NavAppContainer = styled(motion.div)`
  min-height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
    width: 330px;
    transform: translateX(0);
  }
  background-color: ${(props) => props.theme.palette.common.darkRed};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`;

const NavLogoStyle = styled.img`
  height: 40px;
  @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
    height: 60px;
  }
  width: 100%;
`;
const LogotContainerStyle = styled.div`
  padding: 1rem 1rem 30px 1rem;
  @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
    padding: 40px 40px 30px 40px;
  }
`;
const NavListContainerStyle = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
  /* padding: 0 1rem 1rem 1rem; */
  @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
    /* padding: 0 40px 40px 40px; */
  }
`;

const NavBgStyle = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  backdrop-filter: blur(2px);
`;

export {
  NavAppContainer,
  NavLogoStyle,
  LogotContainerStyle,
  NavListContainerStyle,
  NavBgStyle,
};
