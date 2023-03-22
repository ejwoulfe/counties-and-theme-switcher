import { useEffect, useState } from "react";
import { Country } from "../../interfaces/countries";
import countries from "../../data/data.json";
import CountriesList from "./countries-list/countries-list";
import CountryDetails from "./country-details/country-details";
import Search from "./search/search";
import Filter from "./filter/filter";
import "./countries-container.scss";

export default function CountriesContainer() {
  const [countriesList] = useState<Array<Country>>(countries);
  const [filteredList, setFilteredList] = useState<Array<Country>>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    function applyFilters(keyword: string, region: string | null) {
      /*
       * Firstly, I created a new array that will filter the original countries list by region, then if a user enters a keyword it will filter the * regionFiltered array and apply that to the filteredArray held in state. This is so if a user searches via keyword and then deletes their * keyword, the region filtered array will remain unaffected by the keyword and we can just reference back to that instead of checking every * parameter.
       */
      let regionFilteredList = [...countriesList];
      if (region !== null) {
        regionFilteredList = countriesList.filter((country) => country.region === region);
        setFilteredList(regionFilteredList);
      } else {
        setFilteredList(regionFilteredList);
      }

      if (keyword.length > 0) {
        setFilteredList(
          regionFilteredList.filter((country) => country.name.toLowerCase().includes(keyword.toLowerCase()))
        );
      } else if (keyword.length === 0) {
        setFilteredList(regionFilteredList);
      }
    }
    applyFilters(keyword, regionFilter);
  }, [regionFilter, keyword, countriesList]);

  return (
    <section className="countries-container">
      <div className="countries__filters">
        <Search keyword={{ setKeyword }} />
        <Filter filter={{ setRegionFilter }} />
      </div>

      {selectedCountry === null ? <CountriesList countryList={{ filteredList }} /> : <CountryDetails />}
    </section>
  );
}
