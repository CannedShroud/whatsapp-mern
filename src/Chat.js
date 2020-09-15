import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  SearchOutlined,
  MoreVert,
  InsertEmoticon,
  Send,
  Mic,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";
import axios from "./axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    await axios.post("messages/new", {
      name: "DEMO APP",
      message: input,
      timestamp: "Just now",
      received: false,
    });

    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <div
            className={`chat__message ${!message.received && "chat__reciever"}`}
          >
            <p>
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <div className="chat__sendIconDiv">
            <IconButton type="submit" onClick={sendMessage}>
              <Send className="chat__sendIcon" />
            </IconButton>
          </div>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
