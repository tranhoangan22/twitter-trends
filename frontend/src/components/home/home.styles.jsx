import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  max-width: 100%;

  @media (max-width: 768px) {
    padding-top: 10px;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

const gridStyles = css`
  display: grid;
  grid-template-areas: "trendsection searchsection"; // divide into 3 areas with specific names which can be referenced
  grid-template-columns: 1fr 4fr;
  column-gap: 5px;
  row-gap: 25px;
`;

const getLayoutStyles = (props) => {
  if (props.showSearch) {
    return gridStyles;
  }
  return "";
};

export const LayoutContainer = styled.div`
  ${getLayoutStyles}

  margin: 5px 0;

  @media (max-width: 768px) {
    margin: 25px 0;
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
