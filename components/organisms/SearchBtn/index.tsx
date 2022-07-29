import { default as DesktopSearchBtn } from "./SearchBtn";
import MobileSearchBtn from "./MobileSearchBtn";
import { ReactElement } from "react";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  if (isMobile) {
    return <MobileSearchBtn className={className} />;
  }

  return (
    <DesktopSearchBtn
      className={className}
      onTextChange={onTextChange}
      onEnter={onEnter}
    />
  );
}
