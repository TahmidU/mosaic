import { ReactElement } from "react";
import { SearchIcon } from "../styles";

interface IMobileSearchBtnProps {
  className?: string;
}

export default function MobileSearchBtn({
  className,
}: IMobileSearchBtnProps): ReactElement {
  return <SearchIcon onClick={() => {}} className={className} />;
}
