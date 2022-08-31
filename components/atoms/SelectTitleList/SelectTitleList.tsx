import { Container, Option } from "./styles";
import { Dispatch, ReactElement, SetStateAction } from "react";

interface ISelectTitleListProps {
  options: string[];
  onChange?: (selected: string) => void;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  className?: string;
}

export default function SelectTitleList({
  options,
  onChange = () => {},
  selectedIndex,
  setSelectedIndex,
  className,
}: ISelectTitleListProps): ReactElement {
  const onSelect = (selected: string, index: number) => {
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
