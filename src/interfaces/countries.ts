import Currency from "./Currency";
import FlagImages from "./FlagImages";
import Languages from "./Languages";
import RegionalBlocs from "./RegionalBlocs";
import Translations from "./Translations";

export interface Country {
  name: string;
  topLevelDomain: Array<string>;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: Array<string>;
  capital: string;
  altSpellings: Array<string>;
  subregion: string;
  region: string;
  population: number;
  latlng: Array<string>;
  demonym: string;
  area: number;
  timezones: Array<string>;
  borders: Array<string>;
  nativeName: string;
  numericCode: string;
  flags: FlagImages;
  currencies: Array<Currency>;
  languages: Languages;
  translations: Translations;
  flag: string;
  regionalBlocs: Array<RegionalBlocs>;
  cioc: string;
  independent: boolean;
}
