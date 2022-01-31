import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #faeee7;
`;
export const PageTypeContainer = styled.div`
  padding: 15px;
  padding-left: 50px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 4px;

  @media (max-width: 768px) {
    padding-left: 15px;
  }
`;

export const IconContainer = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTextContainer = styled.div`
  width: 200px;
  padding: 0;
  margin: 0;
  color: #1da1f2;
  font-size: 20px;
`;

export const PageSelectionContainer = styled.div`
  width: 14%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  height: 56px;
  margin-right: 35px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    /* padding-right: 10px; */
    /* align-items: flex-end; */
    width: 40%;
    margin-right: 15px;
  }
`;

export const SearchIconContainer = styled.div`
  width: 20px;
  padding-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchTweetsTextContainer = styled.div`
  padding: 0;
  margin: 0;
  color: #1da1f2;
  font-size: 20px;

  &:hover,
  :active {
    color: #0a66c2;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
