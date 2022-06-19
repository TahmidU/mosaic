import { Container, Option } from "./styles";
import { ReactElement, useState } from "react";

interface ISelectTitleListProps<T> {
  options: T[];
  onChange?: (selected: T) => void;
}

export default function SelectTitleList<T>({
  options,
  onChange = () => {},
}: ISelectTitleListProps<T>): ReactElement {
  const [currIndex, setIndex] = useState(0);

  const onSelect = (selected: T, index: number) => {
    onChange(selected), setIndex(index);
  };

  return (
    <Container>
      {options.map((_option, _index) => {
        return (
          <Option
            key={_index}
            highlight={_index === currIndex}
            onClick={() => onSelect(_option, _index)}
          >
            {_option}
          </Option>
        );
      })}
    </Container>
  );
}
