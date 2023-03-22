import { useEffect } from "react";
import { Country } from "../../../interfaces/countries";
import Card from "../card/card";
import "./countries-list.scss";

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
        return <Card countryData={country} />;
      })}
    </section>
  );
}
