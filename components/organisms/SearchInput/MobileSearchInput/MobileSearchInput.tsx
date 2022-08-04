import {
  Dispatch,
  KeyboardEvent,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

import FullScreenSearchMenu from "./FullScreenSearchMenu";
import { SearchIcon } from "./styles";

interface IMobileSearchInputProps {
  onEnter?: (text: string) => void;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  onHandleClickSearch: () => void;
  onHandleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function MobileSearchInput({
  onEnter,
  text,
  setText,
  onHandleClickSearch,
  onHandleKeyDown,
  className,
}: IMobileSearchInputProps): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SearchIcon onClick={() => setMenuOpen(true)} className={className} />
      <FullScreenSearchMenu
        {...{
          isMenuOpen,
          setMenuOpen,
          onEnter,
          onHandleClickSearch,
          onHandleKeyDown,
        }}
        setSearchText={setText}
        searchText={text}
      />
    </>
  );
}
