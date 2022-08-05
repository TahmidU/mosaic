import { ForwardRefExoticComponent, ReactElement } from "react";
import { MantineNumberSize, Pagination, PaginationProps } from "@mantine/core";

interface IPaginationProps {
  initialPage: number;
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
      {...{ className, total, color, radius, withEdges, onChange, size }}
    />
  );
}
