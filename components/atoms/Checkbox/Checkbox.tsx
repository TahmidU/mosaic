import { ReactElement, useState } from "react";

import { Container } from "./styles";

interface ICheckboxProps {
  title: string;
  onToggle: (toggle: boolean) => void;
}

export default function Checkbox({
  title,
  onToggle,
}: ICheckboxProps): ReactElement {
  const [isSelected, setSelection] = useState(false);

  const onHandleClick = () => {
    setSelection((prev) => {
      const result = !prev;
      onToggle(!prev);
      return result;
    });
  };

  return (
    <Container isSelected={isSelected} onClick={onHandleClick}>
      <span>{title}</span>
    </Container>
  );
}
