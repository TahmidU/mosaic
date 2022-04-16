import { CustomThumb } from "./styled";
import { ReactElement } from "react";
import Scrollbars from "react-custom-scrollbars";

export default function Scrollbar({ ...props }): ReactElement {
  function renderThumb({ style, ...props }: { style: any }) {
    return <CustomThumb {...props} />;
  }

  return <Scrollbars renderThumbVertical={renderThumb} {...props} />;
}
