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
  .active {
    color: ${(props) => props.theme.palette.common.lightRed};
    &::before {
      transform: translateX(0);
    }
  }
  color: ${(props) => props.theme.palette.common.white};
  > .title {
    font-weight: 700;
    font-size: 22px;
  }
  & > p {
    margin: 0 0 0.75rem 0;
    padding: 0 1rem;
    @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
      padding: 0 40px;
    }
  }
  > a {
    display: block;
    position: relative;
    padding: 0.375rem 1rem;
    color: inherit;
    text-decoration: none;
    &::before {
      content: "";
      position: absolute;
      transition: transform ease 0.2s;
      transform: translateX(-100%);
      left: 0;
      top: 0;
      height: 100%;
      width: 5px;
      background-color: ${(props) => props.theme.palette.common.lightRed};
    }
    @media (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
      padding: 0.375rem 40px;
    }
    &:hover {
      color: ${(props) => props.theme.palette.common.lightRed};
    }
  }
`;

export { NavigatorListStyle, NavigatorListItemStyle };
