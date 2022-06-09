import { AnimationControls } from "framer-motion";
import { ReactElement } from "react";
import { TextStyle } from "./styles";
import { TextUtils } from "utils";
import { textAnimVariant } from "./animation-variants";

interface IMovieInfoProps {
  title: string;
  desc: string;
  releaseDate: string;
  animationControls?: AnimationControls;
}

export default function MovieInfo({
  title,
  desc,
  releaseDate,
  animationControls,
}: IMovieInfoProps): ReactElement {
  return (
    <TextStyle variants={textAnimVariant} animate={animationControls}>
      <p>{title}</p>
      <p>{desc}</p>
      <p>RELEASE DATE: {TextUtils.dateFormatter(releaseDate)}</p>
    </TextStyle>
  );
}
