import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "./ThemeContext";

const BackButton = () => {
  let { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme == "light"
          ? "flex items-center h-[180px] pl-[75px] backbutton"
          : " flex items-center h-[180px] pl-[75px] bg-gray-700 backbutton"
      }
    >
      <Link to="/">
        <button
          className={
            theme == "light"
              ? "shadow-lg px-10 py-2 rounded-md"
              : "shadow-lg px-6 py-2 rounded-md  bg-white"
          }
        >
          <i className="fa-solid fa-arrow-left"></i> Back{" "}
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
