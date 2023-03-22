import "./filter.scss";

type FilterProps = {
  setRegionFilter: React.Dispatch<React.SetStateAction<string | null>>;
};
export default function Filter(props: { filter: FilterProps }) {
  const filterList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const { filter } = props;

  return (
    <div className="filter-container">
      <select
        name="Filter By Region"
        onChange={(e) => {
          if (e.target.value === "none") {
            filter.setRegionFilter(null);
          } else {
            filter.setRegionFilter(e.target.value);
          }
        }}>
        <option value="none">Filter by Region</option>
        {filterList.map((region, index) => {
          return (
            <option key={"region-option-" + index} value={region}>
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
}
