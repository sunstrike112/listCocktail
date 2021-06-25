import React from 'react';

const SearchBox = React.memo((props) => {
  const { onSearch, searchInput } = props

  const handleInputChange = (input) => {
    onSearch(input.target.value)
  }

  return (
    <input  placeholder={searchInput ? searchInput : 'Search ...'} onChange={handleInputChange}/>
  );
}
)
export default SearchBox