import magnifyingGlass from "../../../assets/magnifying-glass.svg";
import "./search.scss";

type SearchProps = {
  setKeyword: React.Dispatch<React.SetStateAction<string | null>>;
};
export default function Search(props: { keyword: SearchProps }) {
  const { keyword } = props;

  function handleChange(event: any) {
    keyword.setKeyword(event.target.value);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}>
      <img className="search__icon" src={magnifyingGlass} alt="magnifying glass icon" />
      <input
        className="search__inputBar"
        autoComplete="false"
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="Search for a country..."
      />
    </form>
  );
}
