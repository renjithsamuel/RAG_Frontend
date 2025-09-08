"use client";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useAtlassianSearchBarStyles } from "./AtlassianSearchBar.styles";
import { FiSearch } from "react-icons/fi";
import { HiOutlineViewList } from "react-icons/hi";

interface AtlassianSearchBarProps {
  onSearch: (searchTerm: string) => void;
  onShowAll: () => void;
}

export const AtlassianSearchBar = ({ onSearch, onShowAll }: AtlassianSearchBarProps) => {
  const classes = useAtlassianSearchBarStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.searchContainer}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by ticket ID or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className={classes.searchField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FiSearch size={20} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          className={classes.searchButton}
          disabled={!searchTerm.trim()}
        >
          Search
        </Button>
      </Box>

      <Button
        variant="outlined"
        onClick={onShowAll}
        className={classes.showAllButton}
        startIcon={<HiOutlineViewList size={18} />}
      >
        Show All Tickets
      </Button>
    </Box>
  );
};
