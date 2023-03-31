import styled from "styled-components";

const NavigatorListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const NavigatorListItemStyle = styled.li`
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.palette.common.white};
  > .title {
    font-weight: 700;
    font-size: 22px;
  }
  > a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.palette.common.lightRed};
    }
  }
  p {
    margin: 0;
  }
`;

export { NavigatorListStyle, NavigatorListItemStyle };
