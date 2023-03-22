import { useEffect } from "react";
import { Country } from "../../../interfaces/countries";

type CountriesListProps = {
  filteredList: Array<Country>;
};

export default function CountriesList(props: { countryList: CountriesListProps }) {
  const { filteredList } = props.countryList;

  useEffect(() => {
    console.log(filteredList);
  }, [filteredList]);

  return (
    <section className="countries-list">
      {filteredList.map((country, index) => {
        return <li>{country.name}</li>;
      })}
    </section>
  );
}
