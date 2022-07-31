import { ReactElement } from "react";
import { SearchIcon } from "./styles";

interface IMobileSearchInputProps {
  className?: string;
}

export default function MobileSearchInput({
  className,
}: IMobileSearchInputProps): ReactElement {
  return <SearchIcon onClick={() => {}} className={className} />;
}
