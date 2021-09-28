import React from "react";
import Logo from "./pages/Logo";
import background from "./TitleBackground.jpeg";

function Title(props) {
  return (
    <div
      id="background-title"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Logo />
    </div>
  );
}

export default Title;
