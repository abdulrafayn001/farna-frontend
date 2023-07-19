import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { SearchBarProps } from '../../interfaces';

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery, onSearch]);

  return (
    <TextField
      label="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      variant="outlined"
      size="small"
    />
  );
};

export default SearchBar;
