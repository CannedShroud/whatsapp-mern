import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  SearchOutlined,
  MoreVert,
  InsertEmoticon,
  Send,
  Mic,
} from "@material-ui/icons";
import React from "react";
import "./Chat.css";

function Chat() {
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
        <div className="chat__message">
          <p>
            <span className="chat__name">CannedShroud</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className="chat__message">
          <p>
            <span className="chat__name">CannedShroud</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className="chat__message chat__reciever">
          <p>
            <span className="chat__name">CannedShroud</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
        </div>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a message" />
          <div className="chat__sendIconDiv">
            <IconButton type="submit">
              <Send className="chat__sendIcon"/>
            </IconButton>
          </div>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
