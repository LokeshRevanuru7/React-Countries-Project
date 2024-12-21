import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const HeadComponent = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light"
          ? "flex w-full justify-between py-5 px-16 shadow-md"
          : "flex w-full justify-between py-5 px-16 shadow-md bg-gray-600 text-white"
      }
    >
      <p className="text-2xl font-extrabold head_where"> Where in the world?</p>
      <div className="flex gap-1 pr-10 headthemebutton">
        <button className="mb-2" onClick={handleTheme}>
          <span>
            <i className="fa-regular fa-moon"></i>
          </span>
        </button>
        <p> {theme} </p>
      </div>
    </div>
  );
};
export default HeadComponent;
