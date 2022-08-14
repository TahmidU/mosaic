import { AnimationControls } from "framer-motion";
import { ReactElement } from "react";
import { TextStyle } from "./styles";
import { TextUtils } from "utils";
import { textAnimVariant } from "./animationVariants";

interface IMovieInfoProps {
  title: string;
  desc: string;
  releaseDate: string;
  animationControls?: AnimationControls;
  className?: string;
}

export default function MovieInfo({
  title,
  desc,
  releaseDate,
  animationControls,
  className,
}: IMovieInfoProps): ReactElement {
  return (
    <TextStyle
      className={className}
      variants={textAnimVariant}
      animate={animationControls}
    >
      <span>{title}</span>
      <span>{desc}</span>
      <span>RELEASE DATE: {TextUtils.dateFormatter(releaseDate)}</span>
    </TextStyle>
  );
}
