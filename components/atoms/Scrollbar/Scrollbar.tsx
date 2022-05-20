import {
  CustomHorizontalThumb,
  CustomHorizontalTrack,
  CustomThumb,
  CustomTrack,
} from "./styles";

import { ReactElement } from "react";
import Scrollbars from "react-custom-scrollbars";

export default function Scrollbar({ ...props }): ReactElement {
  function renderThumb({ style, ...props }: { style: any }) {
    return <CustomThumb {...props} />;
  }

  function renderTrackVertical({ style, ...props }: { style: any }) {
    return <CustomTrack {...props} />;
  }

  function renderThumbHorizontal({ style, ...props }: { style: any }) {
    return <CustomHorizontalThumb {...props} />;
  }

  function renderTrackHorizontal({ style, ...props }: { style: any }) {
    return <CustomHorizontalTrack {...props} />;
  }

  if (props.variant === "horizontal") {
    return (
      <Scrollbars
        renderThumbHorizontal={renderThumbHorizontal}
        renderTrackHorizontal={renderTrackHorizontal}
        {...props}
      />
    );
  }

  return (
    <Scrollbars
      renderThumbVertical={renderThumb}
      renderTrackVertical={renderTrackVertical}
      {...props}
    />
  );
}
