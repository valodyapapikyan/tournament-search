import React  from 'react';
import TextField from '@material-ui/core/TextField';

const SearchInput = ({onSearch}) => {

    const handleChange = (event) => event.target.value.length > 2 && onSearch(event.target.value);

    return (
        <div>
            <TextField
                onChange={handleChange}
                id="standard-search"
                label="Search field"
                type="search"
                margin="normal"
            />
        </div>
    );
};

export default SearchInput

