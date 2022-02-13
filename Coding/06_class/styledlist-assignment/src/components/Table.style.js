import React from "react";
import styled from "styled-components";

const Thead = styled.thead`
  background-color: greenyellow;
  color: white;
`;

const Table = styled.table`
  width: 60vw;
  height: fit-content;
  margin: auto;
  border: 1px solid black;
`;
const Tr = styled.tr`
  height: 50px;
  width: 25%;

  & :hover {
    color: red;
    cursor: pointer;
  }
`;

const Bluecolor = styled.td`
  color: blue;
`;

export { Thead, Table, Tr, Bluecolor };
