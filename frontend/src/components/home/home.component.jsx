import React from "react";
import { useSelector } from "react-redux";

import TrendsSection from "../trends-section/trends-section.component";
import SearchSection from "../search-section/search-section.component";

import { HomeContainer, LayoutContainer } from "./home.styles";

const Home = () => {
  const showSearch = useSelector((state) => state.searchState.showSearch);
  return (
    <HomeContainer>
      <LayoutContainer showSearch={showSearch}>
        {showSearch && <SearchSection />}
        <TrendsSection showSearch={showSearch} />
      </LayoutContainer>
    </HomeContainer>
  );
};

export default Home;
