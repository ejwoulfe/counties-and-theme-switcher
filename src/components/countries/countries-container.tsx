import { useEffect, useState } from "react";
import { Country } from "../../interfaces/countries";
import countries from "../../data/data.json";
import CountriesList from "./countries-list/countries-list";
import CountryDetails from "./country-details/country-details";

export default function CountriesContainer() {
  const [countriesList, setCountriesList] = useState<Array<Country>>([]);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<Array<Country>>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string | null>(null);

  useEffect(() => {
    setCountriesList(countries);
  }, []);
  return <section className="countries-container">{!openDetails ? <CountriesList /> : <CountryDetails />}</section>;
}
