import { default as DesktopSearchInput } from "./SearchInput";
import MobileSearchInput from "./MobileSearchInput";
import { ReactElement } from "react";
import { useMediaQuery } from "react-responsive";

interface ISearchBtnProp {
  onTextChange?: (text: string) => void;
  onEnter?: (text: string) => void;
  className?: string;
}

export default function SearchInput({
  onTextChange,
  onEnter,
  className,
}: ISearchBtnProp): ReactElement {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  if (isMobile) {
    return <MobileSearchInput className={className} />;
  }

  return (
    <DesktopSearchInput
      className={className}
      onTextChange={onTextChange}
      onEnter={onEnter}
    />
  );
}
