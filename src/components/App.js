import React from "react";
import { List, ListItem } from "./index";

function App() {
  return (
    <div className="main-container">
      <div className="left-div">
        <List />
      </div>
      <div className="right-div">
        <ListItem />
      </div>
    </div>
  );
}

export default App;
