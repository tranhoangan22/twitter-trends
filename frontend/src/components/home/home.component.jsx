import React from "react";
import RightSide from "../rightside/rightside.component";
import LeftSide from "../leftside/leftside.component";

import { HomeContainer, LayoutContainer } from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <LayoutContainer>
        <LeftSide />
        <RightSide />
      </LayoutContainer>
    </HomeContainer>
  );
};

export default Home;
