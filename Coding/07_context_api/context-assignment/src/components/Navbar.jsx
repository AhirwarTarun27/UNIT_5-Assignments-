import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Display } from "./Display";

export const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  const [token, setToken] = useState("");

  const login = async () => {
    try {
      const bodyData = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      };
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
      });
      const data = await res.json();
      setToken(data.token);
      toggleAuth();
    } catch (err) {
      console.log("err", err);
    }
  };
  if (isAuth) {
    return (
      <div>
        <Display status={isAuth} token={token} />
        <button
          onClick={() => {
            toggleAuth();
          }}
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <Display status={isAuth} token={"not available"} />
        <button onClick={() => login()}>Login</button>
      </div>
    );
  }
};
