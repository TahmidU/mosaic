import { ReactElement, useState } from "react";

import FullScreenSearchMenu from "./FullScreenSearchMenu";
import { SearchIcon } from "./styles";

interface IMobileSearchInputProps {
  onEnter?: (text: string) => void;
  className?: string;
}

export default function MobileSearchInput({
  onEnter,
  className,
}: IMobileSearchInputProps): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SearchIcon onClick={() => setMenuOpen(true)} className={className} />
      <FullScreenSearchMenu {...{ isMenuOpen, setMenuOpen, onEnter }} />
    </>
  );
}
