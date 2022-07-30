import { ChangeEvent, KeyboardEvent, ReactElement, useState } from "react";
import { Container, SearchIcon, SearchInput } from "./styles";

import useOuterClick from "hooks/useOuterClick";

interface ISearchBtnProp {
  onTextChange?: (text: string) => void;
  onEnter?: (text: string) => void;
  className?: string;
}

export default function SearchBtn({
  onTextChange,
  onEnter,
  className,
}: ISearchBtnProp): ReactElement {
  const [text, setText] = useState("");
  const { reference: inputRef, isActive: isInputActive } = useOuterClick();

  const onHandleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setText(text), onTextChange?.(text);
  };

  const onHandleKeydownSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter?.(text);
    }
  };

  const onHandleClickSearch = () => {
    onEnter?.(text);
  };

  return (
    <Container className={className} isInputActive={isInputActive}>
      <div>
        <SearchInput
          value={text}
          onChange={onHandleTextChange}
          onKeyDown={onHandleKeydownSearch}
          ref={inputRef}
        />
      </div>
      <SearchIcon onClick={() => onHandleClickSearch()} />
    </Container>
  );
}
