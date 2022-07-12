import { ReactElement, useState } from "react";

import DropdownList from "components/atoms/DropdownList";
import SelectTitleList from "components/atoms/SelectTitleList";
import { useMediaQuery } from "react-responsive";

interface ISubListProps<T> {
  options?: T[];
  onChange?: (selected: T) => void;
  className?: string;
}

export default function SubList<T>({
  options,
  onChange = () => {},
  className,
}: ISubListProps<T>): ReactElement {
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
