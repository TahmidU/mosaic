import { Dispatch, ReactElement, SetStateAction } from "react";

import { Container } from "./styles";

interface ICheckboxProps {
  title: string;
  setSelection: Dispatch<SetStateAction<boolean>>;
  isSelected: boolean;
}

export default function Checkbox({
  title,
  setSelection,
  isSelected,
}: ICheckboxProps): ReactElement {
  return (
    <Container
      isSelected={isSelected}
      onClick={() => setSelection((prev) => !prev)}
    >
      <span>{title}</span>
    </Container>
  );
}
