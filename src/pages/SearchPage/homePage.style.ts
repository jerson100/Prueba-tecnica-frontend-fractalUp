import styled from "styled-components";

const HomeVideDetailStyle = styled.div`
  margin-bottom: 40px;
`;

const TitleHomePage = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.palette.common.lightRed};
`;

export { HomeVideDetailStyle, TitleHomePage };
