/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import SearchIcon from "../../../common/svgs/searchIcon";
/* import { Container } from "./styles"; */

const SearchInput: React.FC = (): JSX.Element => {
  return (
    <div className="">
        <input type="text"placeholder="Titles, people, genres"/>
        <SearchIcon/>
    </div>
  );
};

export default SearchInput;