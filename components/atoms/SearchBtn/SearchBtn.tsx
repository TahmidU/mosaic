import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  useState,
} from "react";
import { Container, SearchIcon, SearchInput } from "./styles";
import {
  searchContainerAnimVariant,
  searchInputAnimVariant,
} from "./animation-variants";

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
  const [isOpen, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { reference: containerRef } = useOuterClick(setOpen);

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
    <Container
      onClick={() => setOpen(true)}
      variants={searchContainerAnimVariant}
      animate={isOpen ? "open" : "close"}
      transition={{ duration: 0.25, ease: "linear" }}
      show={isOpen}
      ref={containerRef}
      className={className}
    >
      <div>
        <SearchInput
          variants={searchInputAnimVariant}
          animate={isOpen ? "open" : "close"}
          value={text}
          onChange={onHandleTextChange}
          onKeyDown={onHandleKeydownSearch}
        />
      </div>

      <SearchIcon onClick={() => isOpen && onHandleClickSearch()} />
    </Container>
  );
}
