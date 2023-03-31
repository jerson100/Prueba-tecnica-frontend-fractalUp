import styled from "styled-components";

const ListStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-bottom: 100px;
`;

export { ListStyle };
