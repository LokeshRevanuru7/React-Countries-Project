import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import BackButton from "./BackButton";
import { ThemeContext } from "./ThemeContext";

const Card = () => {
  const queryData = useLocation();
  let value = queryData.state;

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <BackButton />
      <div
        className={
          theme == "light"
            ? "px-[75px] flex gap-[250px] flex-wrap card-body-mobile card-div"
            : " card-body-mobile px-[75px] flex gap-[250px] flex-wrap bg-gray-700 text-white h-[800px] card-div"
        }
      >
        <div>
          <img className="h-[400px] w-[600px]" src={value.flags.png} />
        </div>
        <div className="flex-col flex-wrap">
          <div className="flex gap-[100px] h-[350px] pt-[35px] card-data">
            <div>
              <p className="text-2xl font-black pb-4">{value.name.official}</p>
              <p className="text-lg font-medium py-[5px]">
                {" "}
                Native Name:{" "}
                <span
                  className={theme == "light" ? "text-gray-500" : "font-light"}
                >
                  {value.name.common}
                </span>
              </p>
              <p className="text-lg font-medium py-[5px]">
                {" "}
                Population:{" "}
                <span
                  className={theme == "light" ? "text-gray-500" : "font-light"}
                >
                  {" "}
                  {value.population}
                </span>
              </p>
              <p className="text-lg font-medium py-[5px]">
                {" "}
                Region:{" "}
                <span
                  className={theme == "light" ? "text-gray-500" : "font-light"}
                >
                  {" "}
                  {value.region}
                </span>
              </p>
              <p className="text-lg font-medium py-[5px]">
                {" "}
                Sub Region:{" "}
                <span
                  className={theme == "light" ? "text-gray-500" : "font-light"}
                >
                  {" "}
                  {value.subregion}
                </span>
              </p>
              <p className="text-lg font-medium py-[5px]">
                {" "}
                Capital:{" "}
                <span
                  className={theme == "light" ? "text-gray-500" : "font-light"}
                >
                  {" "}
                  {value.capital}
                </span>
              </p>
            </div>
            <div className="flex-col pt-[50px] card-data2">
              <p className="text-lg font-medium py-[5px]">
                {" "}
                Top Level Domain:{" "}
                <span
                  className={theme == "light" ? "text-gray-500" : "font-light"}
                >
                  {" "}
                  {value.cca2}
                </span>
              </p>
              <p className="text-lg font-medium py-[5px]">
                {" "}
                currencies:{" "}
                <span
                  className={theme == "light" ? "text-gray-500" : "font-light"}
                >
                  {" "}
                  {Object.keys(value.currencies)[0]}
                </span>
              </p>
              <p className="text-lg font-medium py-[5px]">
                {" "}
                languages:{" "}
                <span
                  className={theme == "light" ? "text-gray-500" : "font-light"}
                >
                  {Object.keys(value.languages)}
                </span>
              </p>
            </div>
          </div>
          <div>
            {value.borders && (
              <div
                className={
                  theme == "light"
                    ? "border border-white flex"
                    : "border border-gray-700 flex"
                }
              >
                <div>
                  <p className="flex text-lg font-medium">Border Countries:</p>
                </div>
                <div className="text-gray-500">
                  {value.borders.map((borderCountry) => (
                    <button
                      className={
                        theme == "light"
                          ? "px-4 shadow-md rounded-md ml-2 mr-2 border-button"
                          : "px-4 shadow-md rounded-md ml-2 mr-2 font-light bg-white border-button"
                      }
                      key={borderCountry}
                    >
                      {borderCountry}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
