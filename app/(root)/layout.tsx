import { ChildProps } from "@/types";
import Navbar from "./_components/navbar";

const Layout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
