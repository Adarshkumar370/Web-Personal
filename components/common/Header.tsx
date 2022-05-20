import React from "react";

const Header = () => {
  return (
    <nav className=" bg-red-100 w-full  p-4 sticky top-0">
      <div className="flex flex-row space-x-6 justify-between  lg:m-3 md:p-3">
        <div>Logo </div>
        <div>Link 1</div>
        <div>Link 2</div>
      </div>
    </nav>
  );
};

export default Header;
