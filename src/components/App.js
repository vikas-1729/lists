import React from 'react';
import { List, ListItem } from './index';

function App() {
  return (
    <div id="main-container">
      <div className="main-header">
        <div className="logo">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/942/942191.svg"
            alt="logo"
          />
        </div>
        <div className="heading-name">
          <span>Check List</span>
        </div>
        <div className="header-list">
          <div className="header-list-div">
            <span>Home</span>
          </div>
          <div className="header-list-div">
            <span>Contact Us</span>
          </div>

          <div className="header-list-div">
            <span>About us</span>
          </div>
          <div className="user">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/149/149071.svg"
              alt="avatar"
            />
          </div>
        </div>
      </div>
      <div className="content-body">
        <div className="left-div">
          <List />
        </div>
        <div className="right-div">
          <ListItem />
        </div>
      </div>
    </div>
  );
}

export default App;
