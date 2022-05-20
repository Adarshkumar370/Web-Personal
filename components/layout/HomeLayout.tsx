import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
interface test1 {
  className?: String;
  children?: React.ReactNode;
}
const HomeLayout = (props: test1) => {
  return (
    <div className={` ` + props.className}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
