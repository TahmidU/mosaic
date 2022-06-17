import { Container, Option } from "./styles";

import { ReactElement } from "react";

interface ISelectorComponent {
  options: string[];
  className?: string;
}

// ! Create a custom select
export default function SelectorComponent({
  options,
  className,
}: ISelectorComponent): ReactElement {
  return (
    <Container className={className}>
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
