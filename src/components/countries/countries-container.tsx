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
  const [keyword, setKeyword] = useState<string | null>(null);
  const [regionFilter, setRegionFilter] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    applyFilters("", regionFilter);
  }, [regionFilter, keyword]);

  function applyFilters(keyword: string, region: string | null) {
    console.log(region);
  }

  return (
    <section className="countries-container">
      <div className="countries__filters">
        <Search keyword={{ setKeyword }} />
        <Filter filter={{ setRegionFilter }} />
      </div>

      {selectedCountry !== null ? <CountriesList /> : <CountryDetails />}
    </section>
  );
}
