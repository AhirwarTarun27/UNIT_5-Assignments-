import styled from "styled-components";

import React, { useState } from "react";

// export const Button = styled.button`
//       border: 1px solid teal;
//       background: {({theme}) => (theme == "light" ? "dark": "light")}
// `

const dataObj = {
  name: "",
  points: "",
  team: "",
};

const styleHead = styled.thead`
  background: teal;
  color: white;
`;
export const Thead = ({ list, setList }) => {
  const [text, setText] = useState(dataObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };
  const addItem = () => {
    setList([...list, text]);
  };

  const { name, points, team } = text;
  return (
    <>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </head>
      <div>
        <form class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
            <label for="autoSizingInput">Name</label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter name..."
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div class="col-auto">
            <label for="autoSizingInput">points</label>
            <input
              type="number"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter Points"
              name="points"
              value={points}
              onChange={handleChange}
            />
          </div>
          <div class="col-auto">
            <label for="autoSizingInput">Team</label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter Team name..."
              name="team"
              value={team}
              onChange={handleChange}
            />
          </div>
          <br />
          <div class="row-left">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                // setList([...list, text]);
                console.log("text:", text);
                console.log("list", list);
                console.log(addItem);
                // console.log(text);
                // console.log(
                //   setList((prop) => {
                //     [...prop];
                //   })
                // );
                // console.log();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

// export default {Thead}
