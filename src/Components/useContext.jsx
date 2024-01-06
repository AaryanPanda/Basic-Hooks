import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";
import "./component.css";

function UseContext() {
  const [text, setText] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    alert("Content button has been clicked");
  }, [text]);

  const theme = useContext(ToggleTheme);

  const themeStyle = {
    backgroundColor: theme ? "black" : "rgb(182, 182, 182)",
    color: theme ? "rgb(182, 182, 182)" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div id="container-holder">
      <div id="container" style={themeStyle}>
        {text && <p id="text">Hooks is a very important topic. Be thorough with it in depth before you sit for any Web-D interview!</p>}

        <button id="content" onClick={() => setText(!text)}>
          Content
        </button>

        <h1>{likes}</h1>

        <button id="like" onClick={() => setLikes((prev) => prev + 1)}>
          Like
        </button>
      </div>
    </div>
  );
}

export default UseContext;
