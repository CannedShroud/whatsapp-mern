import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <h1> WhatsApp MERN stack</h1>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
