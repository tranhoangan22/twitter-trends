import styled from "styled-components";

export const LeftSideContainer = styled.div`
  grid-area: leftside;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  padding: 15px 0;
`;

export const TweetCollectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  vertical-align: top;
  gap: 5px;
`;

// // https://tobiasahlin.com/blog/masonry-with-css/
// export const TweetCollectionsContainer = styled.div`
//   /* Render items as columns */
//   width: 90%;
//   display: flex;
//   flex-flow: column wrap;
//   align-content: flex-start;
//   gap: 5px;

//   /* Re-order items into rows */
//   & > * {
//     // group the every item, 1 item after every third item, into 1 row
//     &:nth-child(3n + 1) {
//       order: 1;
//     }

//     // group the every item, 2 item after every third item, into 1 row
//     &:nth-child(3n + 2) {
//       order: 2;
//     }

//     // group the every third item, into 1 row
//     &:nth-child(3n) {
//       order: 3;
//     }
//   }

//   /* Force new columns */
//   &::before,
//   &::after {
//     content: "";
//     flex-basis: 100%;
//     width: 0;
//     order: 2;
//   }

//   @media (max-width: 768px) {
//     align-content: center;
//   }
// `;
