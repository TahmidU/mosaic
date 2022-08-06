import { MantineNumberSize, Pagination } from "@mantine/core";

import { ReactElement } from "react";

interface IPaginationProps {
  initialPage?: number;
  page?: number;
  total: number;
  color: string;
  radius?: MantineNumberSize;
  size?: MantineNumberSize;
  withEdges?: boolean;
  onChange?: (page: number) => void;
  className?: string;
}

export default function PaginationCustom({
  initialPage,
  page,
  total,
  color,
  radius,
  size,
  withEdges,
  onChange,
  className,
}: IPaginationProps): ReactElement {
  return (
    <Pagination
      {...{
        className,
        initialPage,
        page,
        total,
        color,
        radius,
        withEdges,
        onChange,
        size,
      }}
    />
  );
}
