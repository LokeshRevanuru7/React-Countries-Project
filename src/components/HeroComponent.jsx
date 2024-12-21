import React, { useEffect, useState, useContext, useRef } from "react";

import { ThemeContext } from "./ThemeContext";
import Allcountries from "./Allcountries";
import url from "../../config";

const HeroComponent = () => {
  let [countries, setCountries] = useState([]);
  let [filtredData, setFilteredData] = useState([]);
  let [regionSearch, setRegionSearch] = useState(false);
  let searchBar = useRef(null)
  const { theme } = useContext(ThemeContext);
  
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setCountries(data);
        setFilteredData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function handleFilter(event) {
    if (event.target.value == "") {
      setFilteredData(countries);
      setRegionSearch(true);
    } else {
      let filtered = countries.filter(
        (element) => element.region === event.target.value
      )
      setFilteredData(filtered);
      setRegionSearch(true);
    }
  }

  const handleSearch = (event) => {
    let countryName = searchBar.current.value
    if (!regionSearch) {
      let resultArray = countries.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes(countryName.trim().toLowerCase()) ||
          country.name.official
            .toLowerCase()
            .includes(countryName.trim().toLowerCase())
      );
      setFilteredData(resultArray);
    } else {
      let resultArray1 = filtredData.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes(countryName.trim().toLowerCase()) ||
          country.name.official
            .toLowerCase()
            .includes(countryName.trim().toLowerCase())
      );
      setFilteredData(resultArray1);
    }
  };

  return (
    <div>
      <div className="">

        <div
          className={
            theme === "light"
              ? "flex justify-between flex-wrap px-16 mobile "
              : "flex justify-between flex-wrap bg-gray-700 px-16 mobile"
          }
        >
          <div className="h-20 w-300 flex justify-between items-center  ">
            <input
              className={
                theme === "light"
                  ? "border-2 border-gray-200 rounded-md h-10 w-96 font-extrabold relative z-10 pl-4 mr-[50px] inputmobile"
                  : "rounded-md h-10 w-96 font-extrabold relative z-10 pl-4 mr-[50px] text-white bg-gray-600 inputmobile"
              }
              type="text"
              placeholder="search for country"
              onChange={handleSearch}
            ref = {searchBar} />
          </div>

          <select
            className={
              theme === "light"
                ? "w-1/6 h-10 bg-white mt-5 shadow-sm relative z-10 selectBar rounded-md"
                : " rounded-md pl-2 w-1/6 h-10 mt-5 shadow-sm relative z-10 ml-[50px] bg-gray-600 text-white selectBar"
            }
            onChange={handleFilter}
          >
            <option value="" className="">
              {" "}
              All{" "}
            </option>
            <option value="Africa" className="">
              {" "}
              Africa{" "}
            </option>
            <option value="Americas" className="">
              {" "}
              America{" "}
            </option>
            <option value="Asia" className="">
              {" "}
              Asia{" "}
            </option>
            <option value="Europe" className="">
              {" "}
              Europe{" "}
            </option>
            <option value="Oceania" className="">
              {" "}
              Oceania{" "}
            </option>
            <option value="Antarctic" className="">
              {" "}
              Antarctic{" "}
            </option>
          </select>
        </div>

        <Allcountries filtredData={filtredData} />
      </div>
    </div>
  );
};

export default HeroComponent;
