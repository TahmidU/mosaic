import { Dispatch, KeyboardEvent, ReactElement, SetStateAction } from "react";

import Input from "components/atoms/Input";
import { SearchIconStyling } from "./styles";

interface ISearchBtnProp {
  onTextChange?: (text: string) => void;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  onHandleClickSearch: () => void;
  onHandleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchIcon = (props: any) => (
  <SearchIconStyling onClick={props.onClick} />
);
export default function SearchInput({
  text,
  setText,
  onHandleClickSearch,
  onHandleKeyDown,
  className,
}: ISearchBtnProp): ReactElement {
  return (
    <Input
      variant="stateful"
      value={text}
      className={className}
      onTextChange={setText}
      onKeyDown={onHandleKeyDown}
      postfix={<SearchIcon onClick={onHandleClickSearch} />}
    />
  );
}
