import React from "react";

export const ScrollTop = ({ myRef }) => {
  return (
    <>
      <button
        onClick={() => {
          console.log(myRef.current.scrollIntoView({ behavior: "smooth" }));
          console.log("hi");
        }}
      >
        Scroll Top
      </button>
    </>
  );
};
