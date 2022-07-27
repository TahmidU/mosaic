import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  useState,
} from "react";
import { Container, SearchIcon, SearchInput } from "./styles";

import { searchContainerAnimVariant } from "./animation-variants";
import useOuterClick from "hooks/useOuterClick";

interface ISearchBtnProp {
  onTextChange: (text: string) => void;
  onEnter: (text: string) => void;
}

export default function SearchBtn({
  onTextChange,
  onEnter,
}: ISearchBtnProp): ReactElement {
  const [isOpen, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { reference: containerRef } = useOuterClick(setOpen);

  const onHandleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setText(text), onTextChange(text);
  };

  const onHandleKeydownSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter(text);
    }
  };

  const onHandleClickSearch = () => {
    onEnter(text);
  };

  return (
    <Container
      onClick={() => setOpen(true)}
      variants={searchContainerAnimVariant}
      animate={isOpen ? "open" : "close"}
      show={isOpen}
      transition={{ type: "just" }}
      ref={containerRef}
    >
      <div>
        <SearchInput
          show={isOpen}
          value={text}
          onChange={onHandleTextChange}
          onKeyDown={onHandleKeydownSearch}
        />
      </div>
      <SearchIcon onClick={() => isOpen && onHandleClickSearch()} />
    </Container>
  );
}
