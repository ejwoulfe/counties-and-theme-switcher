import Filter from "./filter/filter";
import Search from "./search/search";

export default function CountriesList() {
  return (
    <section className="countries-list">
      <Search />
      <Filter />
    </section>
  );
}
