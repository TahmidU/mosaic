import React, { ReactElement } from "react";

import Navbar from "../Navbar/Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
