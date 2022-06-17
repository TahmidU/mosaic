import { Container, Option } from "./styles";

import { ReactElement } from "react";

interface ISelectorComponent {
  options: string[];
}

export default function SelectorComponent({
  options,
}: ISelectorComponent): ReactElement {
  return (
    <Container>
      {options.map((_option, key) => {
        return (
          <Option key={key} value={_option}>
            {_option}
          </Option>
        );
      })}
    </Container>
  );
}
