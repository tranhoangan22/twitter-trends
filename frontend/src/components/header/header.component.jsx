import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowSearch } from "../../redux/reducers/search/search.action";

import { ReactComponent as TwitterLogo } from "../../assets/twitter-icon.svg"; // The ReactComponent import name is special and tells Create React App that you want a React component that renders an SVG. https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

import {
  IconContainer,
  HeaderContainer,
  HeaderTextContainer,
  PageTypeContainer,
  PageSelectionContainer,
  SearchTweetsTextContainer,
  SearchIconContainer,
} from "./header.styles";

const Header = () => {
  const showSearch = useSelector((state) => state.searchState.showSearch);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <PageTypeContainer>
        <IconContainer>
          <TwitterLogo />
        </IconContainer>
        <HeaderTextContainer>Twitter Trends</HeaderTextContainer>
      </PageTypeContainer>

      <PageSelectionContainer onClick={() => dispatch(toggleShowSearch())}>
        {showSearch ? (
          <SearchTweetsTextContainer>Hide Search</SearchTweetsTextContainer>
        ) : (
          <>
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
            <SearchTweetsTextContainer>Search Tweets</SearchTweetsTextContainer>
          </>
        )}
      </PageSelectionContainer>
    </HeaderContainer>
  );
};

export default Header;
