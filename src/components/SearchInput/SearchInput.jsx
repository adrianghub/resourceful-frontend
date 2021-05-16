import React from 'react'

import useStyles from "./styles";

export default function SearchInput({ handleInputChange }) {
  const classes = useStyles();

  return (
    <div className={classes.searchBox}>
        <input
          className={classes.searchInput}
          type="text"
          aria-label="Search"
          placeholder="Search through posts..."
          onChange={handleInputChange}
        />
      </div>
  )
}
