import {
  Container,
  LeftSlideBtn,
  List,
  ListAnim,
  ListWrapper,
  RightSlideBtn,
  SubListStyle,
} from "./styles";
import { ReactElement, ReactNode, useRef } from "react";

import { AnimatePresence } from "framer-motion";

interface IHorizontalListProps {
  title: string;
  subListTitles?: string[];
  children?: ReactNode;
  onSubTitleClick?: (title: string) => void;
  className?: string;
  loading?: boolean;
  loadingElements?: ReactElement<any, any>;
  testId?: string;
}

export default function HorizontalList({
  title,
  subListTitles,
  children,
  onSubTitleClick = () => {},
  className,
  loading,
  loadingElements,
  testId = "HorizontalList",
}: IHorizontalListProps): ReactElement {
  const ListRef = useRef<HTMLDivElement>(null);

  const LoadingElements = () => (loadingElements ? loadingElements : <></>);

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
    <Container className={className} test-dataid={testId}>
      <h1>{title}</h1>
      {subListTitles && (
        <SubListStyle
          options={subListTitles}
          onChange={(_selected: string) => onSubTitleClick(_selected)}
        />
      )}
      <ListWrapper>
        {loading ? (
          !loadingElements ? (
            <></>
          ) : (
            <LoadingElements />
          )
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
              <List ref={ListRef} test-dataid={`${testId}-List`}>
                {children}
              </List>
              <RightSlideBtn variant="circleSimpleRight" onClick={slideRight} />
            </ListAnim>
          </AnimatePresence>
        )}
      </ListWrapper>
    </Container>
  );
}
