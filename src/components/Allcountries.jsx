import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

const Allcountries = ({ filtredData }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        className={
          theme === "light"
            ? "flex w-full flex-wrap gap-[105px] gap-y-[50px] justify-center  pt-[50px]"
            : "flex w-full flex-wrap gap-[105px] gap-y-[50px] justify-center pt-[50px] bg-gray-700"
        }
      >
        {filtredData.map((country, index) => (
          <Link
            to="/Card"
            key={index}
            className="w-[350px] h-[450px] flex-col items-center bg-white-700 rounded  shadow-xl"
            state={country}
          >
            <div className="h-full border-0 border-white">
              <img
                src={country.flags.png}
                className="w-full h-[200px] rounded"
              />

              <div
                className={
                  theme === "light"
                    ? "flex flex-col pl-7 pr-7 pt-5 text gap-y-4 mt-[20px]"
                    : "flex flex-col pl-7 pr-7 pt-5 text gap-y-4 mt-[20px] text-white bg-gray-700"
                }
              >
                <p className="text-lg pb-5 font-black">{country.name.common}</p>
                <p className="text-lg font-medium">
                  {" "}
                  Population :{" "}
                  <span
                    className={
                      theme == "light" ? "text-gray-500" : "font-light"
                    }
                  >
                    {country.population}{" "}
                  </span>
                </p>
                <p className="text-lg font-medium">
                  {" "}
                  Region :{" "}
                  <span
                    className={
                      theme == "light" ? "text-gray-500" : "font-light"
                    }
                  >
                    {country.region}{" "}
                  </span>{" "}
                </p>
                <p className="text-lg font-medium">
                  {" "}
                  Capital :{" "}
                  <span
                    className={
                      theme == "light" ? "text-gray-500" : "font-light"
                    }
                  >
                    {country.capital}
                  </span>{" "}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Allcountries;
