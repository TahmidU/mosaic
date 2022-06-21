import {
  ChildrenOverflow,
  Container,
  DownIcon,
  DropdownButton,
  Option,
} from "./styles";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface ISelectorComponentProps<T> {
  options: T[];
  onChange?: (selected: T) => void;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  className?: string;
}

export default function SelectorComponent<T>({
  options,
  selectedIndex,
  setSelectedIndex,
  onChange = () => {},
  className,
}: ISelectorComponentProps<T>): ReactElement {
  const [isOpen, setOpen] = useState(false);
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
  const onSelect = (selected: T, index: number) => {
    setSelectedIndex(index), onChange(selected), setOpen(false);
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
        <p>{options[selectedIndex]}</p>
        <DownIcon />
      </DropdownButton>
      <ChildrenOverflow isOpen={isOpen}>
        {options.map((_option, key) => {
          return (
            <Option key={key} onClick={() => onSelect(_option, key)}>
              {_option}
            </Option>
          );
        })}
      </ChildrenOverflow>
    </Container>
  );
}
