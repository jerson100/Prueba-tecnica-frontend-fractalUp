import styled from "styled-components";

const NavAppContainer = styled.div`
  min-height: 100vh;
  width: 330px;
  background-color: ${(props) => props.theme.palette.common.darkRed};
  padding: 40px;
  margin-bottom: 30px;
  position: fixed;
  left: 0;
  top: 0;
`;

const NavLogoStyle = styled.img`
  margin-bottom: 30px;
`;

export { NavAppContainer, NavLogoStyle };
