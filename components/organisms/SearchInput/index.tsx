import { ReactElement, useState } from "react";

import { default as DesktopSearchInput } from "./SearchInput";
import MobileSearchInput from "./MobileSearchInput";
import { useMediaQuery } from "react-responsive";

interface ISearchBtnProp {
  onTextChange?: (text: string) => void;
  className?: string;
}

export default function SearchInput({
  onTextChange,
  className,
}: ISearchBtnProp): ReactElement {
  const [text, setText] = useState("");

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  console.log(isMobile);

  if (isMobile) {
    return (
      <MobileSearchInput
        {...{
          className,
          text,
          setText,
        }}
      />
    );
  }

  return (
    <DesktopSearchInput
      {...{
        className,
        text,
        setText,
        onTextChange,
      }}
    />
  );
}
