import { KeyboardEvent, ReactElement, useState } from "react";

import { default as DesktopSearchInput } from "./SearchInput";
import MobileSearchInput from "./MobileSearchInput";
import { useMediaQuery } from "react-responsive";
import useRoutes from "hooks/useRoutes";

interface ISearchBtnProp {
  onTextChange?: (text: string) => void;
  className?: string;
}

export default function SearchInput({
  onTextChange,
  className,
}: ISearchBtnProp): ReactElement {
  const [text, setText] = useState("");
  const { goToSearchPage } = useRoutes();

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const onEnter = (text: string) =>
    goToSearchPage(text.length > 0 ? text : undefined);

  const onHandleClickSearch = () => onEnter(text);

  const onHandleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter(text);
    }
  };

  if (isMobile) {
    return (
      <MobileSearchInput
        {...{
          className,
          text,
          setText,
          onEnter,
          onHandleClickSearch,
          onHandleKeyDown,
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
        onEnter,
        onHandleClickSearch,
        onHandleKeyDown,
      }}
    />
  );
}
