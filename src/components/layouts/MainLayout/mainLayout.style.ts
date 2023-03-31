import styled from "styled-components";
import { motion } from "framer-motion";

const MainLayoutContainerStyle = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ContentStyle = styled(motion.div)`
  margin-left: 0;
  min-height: 100vh;
  padding: 1rem;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    padding: 30px 40px;
    margin-left: 330px;
  }
  display: flex;
  flex-direction: column;
`;

export { MainLayoutContainerStyle, ContentStyle };
