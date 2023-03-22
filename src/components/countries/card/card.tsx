import { Country } from "../../../interfaces/countries";
import "./card.scss";

type CardProps = {
  countryData: Country;
};
export default function Card(props: CardProps) {
  const { countryData } = props;

  return (
    <span className="country__card">
      <div className="country__flag">
        <img src={countryData.flag} alt={countryData.name + " flag"} />
      </div>
      <div className="country__name">
        <h3>{countryData.name}</h3>
        <ul className="country__details">
          <li>Population: {countryData.population}</li>
          <li>Region: {countryData.region}</li>
          <li>Capital: {countryData.capital}</li>
        </ul>
      </div>
    </span>
  );
}
