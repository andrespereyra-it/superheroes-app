import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar(props) {
  const { handleChange, searchText } = props;

  return (
    <div>
      <input
        id="search-bar"
        type="search"
        placeholder="Find your hero"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default SearchBar;
