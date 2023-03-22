import magnifyingGlass from "../../../assets/magnifying-glass.svg";
import "./search.scss";

type SearchProps = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};
export default function Search(props: { keyword: SearchProps }) {
  const { keyword } = props;

  /*
   * I made two separate functions for setting the search keyword stat. handleChange updates state on every onChange event where as
   * the handleSubmit only changes state when the user presses enter, or submits, their typed string
   * It depends on how expensive it is to update so frequently, I don't think its an issue with only 250 countries.
   */
  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    let eventTarget = event.target as HTMLInputElement;
    keyword.setKeyword(eventTarget.value);
  }

  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   let eventTarget = event.target as HTMLFormElement;
  //   keyword.setKeyword(eventTarget.search.value);
  // }
  return (
    <form
      className="search-form"
      // onSubmit={(e) => {
      //   handleSubmit(e);
      // }}
      onSubmit={(event) => {
        event.preventDefault();
      }}>
      <img className="search__icon" src={magnifyingGlass} alt="magnifying glass icon" />
      <input
        className="search__inputBar"
        autoComplete="false"
        name="search"
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="Search for a country..."
      />
    </form>
  );
}
