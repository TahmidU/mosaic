import {
  ChildrenOverflow,
  Container,
  DownIcon,
  DropdownButton,
  Option,
} from "./styles";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

interface ISelectorComponent {
  options: string[];
  className?: string;
}

export default function SelectorComponent({
  options,
  className,
}: ISelectorComponent): ReactElement {
  const [isOpen, setOpen] = useState(false);
  const [currSelected, setSelected] = useState(options[0]);
  const dropdownRef = useRef<null | HTMLDivElement>(null);

  const handleClickOut = useCallback(
    (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    },
    [setOpen, dropdownRef]
  );

  const toggleDropdownMenu = () => setOpen((prev) => !prev);
  const onSelect = (selected: string) => {
    setSelected(selected), setOpen(false);
  };

  useEffect(() => {
    window.removeEventListener("mousedown", handleClickOut);
    window.addEventListener("mousedown", handleClickOut);
    return () => {
      window.removeEventListener("mousedown", handleClickOut);
    };
  }, [handleClickOut]);

  return (
    <Container ref={dropdownRef} className={className}>
      <DropdownButton onClick={toggleDropdownMenu}>
        <p>{currSelected}</p>
        <DownIcon />
      </DropdownButton>
      <ChildrenOverflow isOpen={isOpen}>
        {options.map((_option, key) => {
          return (
            <Option key={key} onClick={() => onSelect(_option)}>
              {_option}
            </Option>
          );
        })}
      </ChildrenOverflow>
    </Container>
  );
}
