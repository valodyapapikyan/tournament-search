import React from "react";
import TextField from "@material-ui/core/TextField";

const SearchInput = ({ onSearch }) => {
  let timeout = null;

  const handleChange = event => {
    clearTimeout(timeout);
    let value = event.target.value;
    timeout = setTimeout(() => value.length > 2 && onSearch(value), 100);
  };

  return (
    <div className="search-input">
      <TextField
        fullWidth
        onKeyUp={handleChange}
        id="standard-search"
        label="Search field"
        type="search"
        margin="normal"
      />
    </div>
  );
};

export default SearchInput;
