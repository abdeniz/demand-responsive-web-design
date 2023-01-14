import { ReactNode } from "react";
import Navigation from "./Navigation";

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
