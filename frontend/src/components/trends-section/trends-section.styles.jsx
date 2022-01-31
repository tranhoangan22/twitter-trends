import styled, { css } from "styled-components";

const gridStyles = css`
  grid-area: trendsection;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
`;

const getTrendsSectionStyles = (props) => {
  if (props.showSearch) {
    return gridStyles;
  }
  return "";
};

export const TrendsSectionContainer = styled.div`
  ${getTrendsSectionStyles}

  @media (max-width: 768px) {
    border-left: none;
    margin-top: -20px;
  }
`;

export const MenuContainer = styled.div`
  /* height: 60px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SelectContainer = styled.select`
  margin: 16px 0;
  padding: 8px;
  font-size: 16px;
  border-radius: 999px;
  border-color: #aab8c2;
  border-width: 2px;
`;

export const ContentContainer = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  & > ul {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: center;
    vertical-align: center;
    align-items: center;
  }

  li > a {
    font-size: 26px;
    font-size: ${(props) => (props.showSearch ? "20px" : "26px")};
  }

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    & > ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .li {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    li > a {
      font-size: 20px;
    }
  }
`;

export const LocationSelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CrossHairContainer = styled.div`
  background-color: #f5f8fa;
  padding: 16px;
  border-radius: 999px;
  cursor: pointer;
  height: 16px;
  width: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const NearByContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const NearByPlaceContainer = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: red;
`;
