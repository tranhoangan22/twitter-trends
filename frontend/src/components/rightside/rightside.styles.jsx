import styled from "styled-components";

export const RightSideContainer = styled.div`
  grid-area: rightside;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export const MenuContainer = styled.div`
  /* height: 60px; */
  display: flex;
  flex-direction: row;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  & > ul {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    vertical-align: center;
    align-items: center;
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
      font-size: 15px;
    }
  }
`;
