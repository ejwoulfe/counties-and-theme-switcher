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
      // Create a separate array that will only apply a filter based on region from the original country list.
      // This is so if a user wants to filter via search term and types in a string then deletes it, we can reference back to the regionFilteredList which will be the original list plus the region filter.
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
