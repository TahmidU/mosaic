import {
  ChildrenOverflow,
  Container,
  DownIcon,
  DropdownButton,
  Option,
} from "./styles";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

interface ISelectorComponentProps<T> {
  options: T[];
  className?: string;
}

export default function SelectorComponent<T>({
  options,
  className,
}: ISelectorComponentProps<T>): ReactElement {
  const [isOpen, setOpen] = useState(false);
  const [currSelected, setSelected] = useState<T>(options[0]);
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
  const onSelect = (selected: T) => {
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
    <Container ref={dropdownRef} className={className} isOpen={isOpen}>
      <DropdownButton onClick={toggleDropdownMenu} isOpen={isOpen}>
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
