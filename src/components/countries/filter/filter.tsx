import "./filter.scss";

type FilterProps = {
  setRegionFilter: React.Dispatch<React.SetStateAction<string | null>>;
};
export default function Filter(props: { filter: FilterProps }) {
  const filterList = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const { filter } = props;

  return (
    <div className="filter-container">
      <select
        name="Filter By Region"
        onChange={(e) => {
          filter.setRegionFilter(e.target.value);
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
