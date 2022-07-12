import {
  Container,
  LeftSlideBtn,
  List,
  ListAnim,
  ListWrapper,
  LoadingContainer,
  RightSlideBtn,
  SubListStyle,
} from "./styles";
import { ReactElement, ReactNode, useRef } from "react";

import { AnimatePresence } from "framer-motion";
import { Loader } from "@mantine/core";

interface IHorizontalListProps<T> {
  title: string;
  subListTitles?: T[];
  children?: ReactNode;
  onSubTitleClick?: (title: T) => void;
  className?: string;
  loading?: boolean;
}

export default function HorizontalList<T>({
  title,
  subListTitles,
  children,
  onSubTitleClick = () => {},
  className,
  loading,
}: IHorizontalListProps<T>): ReactElement {
  const ListRef = useRef<HTMLDivElement>(null);

  function slideRight() {
    if (ListRef.current) {
      const list = ListRef.current;

      const scrollAmount =
        list.scrollWidth !== list.scrollLeft + list.offsetWidth
          ? list.scrollLeft + list.offsetWidth
          : 0;
      list.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }

  function slideLeft() {
    if (ListRef.current) {
      const list = ListRef.current;

      const scrollAmount =
        list.scrollLeft !== 0
          ? list.scrollLeft - list.offsetWidth
          : list.scrollWidth;

      list.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }

  return (
    <Container className={className}>
      <h1>{title}</h1>
      {subListTitles && (
        <SubListStyle
          options={subListTitles}
          onChange={(_selected: any) => onSubTitleClick(_selected as T)}
        />
      )}
      <ListWrapper>
        {loading ? (
          <AnimatePresence>
            <LoadingContainer
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.25 }}
            >
              <Loader size={120} color="red" variant="dots" />
              <span>Loading</span>
            </LoadingContainer>
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <ListAnim
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.25 }}
            >
              <LeftSlideBtn variant="circleSimpleLeft" onClick={slideLeft} />
              <List ref={ListRef}>{children}</List>
              <RightSlideBtn variant="circleSimpleRight" onClick={slideRight} />
            </ListAnim>
          </AnimatePresence>
        )}
      </ListWrapper>
    </Container>
  );
}
