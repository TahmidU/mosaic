import { ReactElement, useState } from "react";

import FullScreenSearchMenu from "./FullScreenSearchMenu";
import { SearchIcon } from "./styles";

interface IMobileSearchInputProps {
  className?: string;
}

export default function MobileSearchInput({
  className,
}: IMobileSearchInputProps): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SearchIcon onClick={() => setMenuOpen(true)} className={className} />
      <FullScreenSearchMenu {...{ isMenuOpen, setMenuOpen }} />
    </>
  );
}
