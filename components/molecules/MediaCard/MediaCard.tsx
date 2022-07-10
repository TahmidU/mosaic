import { FatContainer, TitleText } from "./styles";

import Links from "utils/Links";
import { ReactElement } from "react";

type Variant = "Fat" | "Long";

interface IMediaCardProps {
  variant: Variant;
}

export default function MediaCard({}: IMediaCardProps): ReactElement {
  return (
    <FatContainer
      variant="vertical_image"
      src={`${Links.youtubeThumbnailURL}GfbNLLcrItI/hqdefault.jpg`}
      imageWidth={500}
    >
      <TitleText>Title</TitleText>
    </FatContainer>
  );
}
