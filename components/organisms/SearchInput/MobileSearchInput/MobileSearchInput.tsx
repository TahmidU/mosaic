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
  testId?: string;
}

export default function MobileSearchInput({
  text,
  setText,
  className,
  testId = "MobileSearchInput",
}: IMobileSearchInputProps): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SearchIcon
        data-testid={`${testId}-SearchIcon`}
        onClick={() => setMenuOpen(true)}
        className={className}
      />
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
