import styled from "styled-components";

const NavAppContainer = styled.div<{ active: boolean }>`
  min-height: 100vh;
  padding: 1rem;
  width: 200px;
  transform: translateX(${(props) => (props.active ? "0" : "-100%")});
  @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
    width: 330px;
    padding: 40px;
  }
  background-color: ${(props) => props.theme.palette.common.darkRed};
  margin-bottom: 30px;
  position: fixed;
  left: 0;
  top: 0;
`;

const NavLogoStyle = styled.img`
  margin-bottom: 30px;
  width: 100%;
`;

export { NavAppContainer, NavLogoStyle };
