import React from "react";

const Marginer = ({ margin, direction = "horizontal" }) => {
  const containerStyle = {
    display: "flex",
    minWidth: typeof margin === "string" ? margin : `${margin}px`,
  };

  const verticalContainerStyle = {
    display: "flex",
    minHeight: typeof margin === "string" ? margin : `${margin}px`,
  };

  if (direction === "horizontal") {
    return <span style={containerStyle} />;
  } else {
    return <span style={verticalContainerStyle} />;
  }
};


export default Marginer;