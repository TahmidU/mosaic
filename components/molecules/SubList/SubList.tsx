import { ReactElement, useState } from "react";

import DropdownList from "components/atoms/DropdownList";
import { default as LoadingDropdownList } from "components/atoms/DropdownList/SkeletonLoading";
import { default as LoadingSelectTitleList } from "components/atoms/SelectTitleList/SkeletonLoading";
import SelectTitleList from "components/atoms/SelectTitleList";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

interface ISubListProps {
  options?: string[];
  onChange?: (selected: string) => void;
  className?: string;
}

export default function SubList({
  options,
  onChange = () => {},
  className,
}: ISubListProps): ReactElement {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  if (!options) return <></>;

  return (
    <>
      {isMobile ? (
        <DropdownList
          options={options}
          className={className}
          onChange={onChange}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      ) : (
        <SelectTitleList
          options={options}
          className={className}
          onChange={onChange}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      )}
    </>
  );
}
