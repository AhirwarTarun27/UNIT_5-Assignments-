import "./styles.css";
import styled from "styled-components";
import { Thead, Table, Tr, Bluecolor } from "./components/Table.style";

export default function App() {
  const tableData = [
    {
      no: 1,
      name: "tarun",
      points: 4400,
      team: "bravo"
    },
    {
      no: 1,
      name: "tarun",
      points: 4400,
      team: "bravo"
    },
    {
      no: 1,
      name: "tarun",
      points: 4400,
      team: "bravo"
    },
    {
      no: 1,
      name: "tarun",
      points: 4400,
      team: "bravo"
    }
  ];

  return (
    <div className="App">
      <Table>
        <Thead>
          <Tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
            <th>Team</th>
          </Tr>
        </Thead>
        <tbody>
          {tableData.map((e, i) => {
            if (i % 2 !== 0) {
              return (
                <Tr key={i}>
                  <Bluecolor>{i + 1}</Bluecolor>
                  <Bluecolor>{e.name}</Bluecolor>
                  <Bluecolor>{e.points}</Bluecolor>
                  <Bluecolor>{e.team}</Bluecolor>
                </Tr>
              );
            } else {
              return (
                <Tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.points}</td>
                  <td>{e.team}</td>
                </Tr>
              );
            }
          })}
        </tbody>
      </Table>
    </div>
  );
}
