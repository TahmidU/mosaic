import { Container, Option } from "./styles";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";

interface ISelectTitleListProps<T> {
  options: T[];
  onChange?: (selected: T) => void;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  className?: string;
}

export default function SelectTitleList<T>({
  options,
  onChange = () => {},
  selectedIndex,
  setSelectedIndex,
  className,
}: ISelectTitleListProps<T>): ReactElement {
  const onSelect = (selected: T, index: number) => {
    onChange(selected), setSelectedIndex(index);
  };

  return (
    <Container className={className}>
      {options.map((_option, _index) => {
        return (
          <Option
            key={_index}
            highlight={_index === selectedIndex}
            onClick={() => onSelect(_option, _index)}
          >
            {_option}
          </Option>
        );
      })}
    </Container>
  );
}
