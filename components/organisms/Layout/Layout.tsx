import React, { ReactElement } from "react";

import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
