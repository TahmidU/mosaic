import { ReactElement, useState } from "react";

import SelectTitleList from "components/atoms/SelectTitleList";
import SelectorComponent from "components/atoms/SelectorComponent";
import { useMediaQuery } from "react-responsive";

interface ISubListProps<T> {
  options: T[];
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

  return (
    <>
      {isMobile ? (
        <SelectorComponent
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
