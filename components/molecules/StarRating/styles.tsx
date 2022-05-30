import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
Container.displayName = "Container";

export const Star = styled(AiFillStar)`
  width: 50px;
  height: 50px;
  fill: red;
`;
Star.displayName = "Star";
