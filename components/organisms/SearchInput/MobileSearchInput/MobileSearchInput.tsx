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
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  className?: string;
}

export default function MobileSearchInput({
  text,
  setText,
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
        }}
        setSearchText={setText}
        searchText={text}
      />
    </>
  );
}
