import { CustomThumb, CustomTrack } from "./styles";

import { ReactElement } from "react";
import Scrollbars from "react-custom-scrollbars";

export default function Scrollbar({ ...props }): ReactElement {
  function renderThumb({ style, ...props }: { style: any }) {
    return <CustomThumb {...props} />;
  }

  function renderTrackVertical({ style, ...props }: { style: any }) {
    return <CustomTrack {...props} />;
  }

  return (
    <Scrollbars
      renderThumbVertical={renderThumb}
      renderTrackVertical={renderTrackVertical}
      {...props}
    />
  );
}
