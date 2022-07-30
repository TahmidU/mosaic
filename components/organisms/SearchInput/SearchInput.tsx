import { KeyboardEvent, ReactElement, useState } from "react";

import Input from "components/atoms/Input";
import { SearchIconStyling } from "./styles";

interface ISearchBtnProp {
  onTextChange?: (text: string) => void;
  onEnter?: (text: string) => void;
  className?: string;
}

const SearchIcon = (props: any) => (
  <SearchIconStyling onClick={props.onClick} />
);
export default function SearchInput({
  onEnter,
  className,
}: ISearchBtnProp): ReactElement {
  const [text, setText] = useState("");

  const onHandleKeydownSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter?.(text);
    }
  };

  const onHandleClickSearch = () => {
    onEnter?.(text);
  };

  return (
    <Input
      className={className}
      onTextChange={(text) => setText(text)}
      onKeyDown={onHandleKeydownSearch}
      postfix={<SearchIcon onClick={onHandleClickSearch} />}
    />
  );
}
