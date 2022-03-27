import { motion } from "framer-motion";
import styled from "styled-components";

export const Bar = styled(motion.div)`
  border: 4px solid ${({ theme }) => theme.accent};
  border-radius: 2px;
`;
Bar.displayName = "Bar";
