import React from "react";
import { useState } from "react";

export const Form = () => {
  const [data, setData] = useState({
    username: "",
    age: ""
  });

  const handleChange = (e) => {
    // if (e.target.name === "username") {
    //   setData({ ...data, username: e.target.value });
    // }
    // if (e.target.name === "age") {
    //   setData({ ...data, age: e.target.value });
    // }
    const { name } = e.target;
    setData({
      ...data,
      [name]: e.target.value
    });
  };
  return (
    <>
      <hr />
      <h1
        style={{
          marginTop: "10%"
        }}
      >
        Form Table
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting", data);
        }}
      >
        <input
          name="username"
          type="text"
          onChange={handleChange}
          placeholder="username..."
        />
        <input
          name="age"
          type="number"
          onChange={handleChange}
          placeholder="age..."
        />
        <input type="submit" />
      </form>
    </>
  );
};
