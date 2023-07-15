import React from "react";
import logo from '../../assets/online.svg'
const Loader = () => {
  return (
    <div class="fixed left-0 right-0 top-0 bottom-0 flex items-center bg-white justify-center z-40">
      <img
        src={logo}
        alt="logo"
        className="animate-pulse"
        />
    </div>
  );
};

export default Loader;
