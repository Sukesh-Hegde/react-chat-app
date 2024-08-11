import React, { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/addUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input
            type="text"
            placeholder="Search"
            // onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      {/* {filteredChats.map((chat) => ( */}
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
      {/* ))} */}
    </div>
  );
};

export default ChatList;
