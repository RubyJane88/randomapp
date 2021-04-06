import React from "react";
import "./App.css";
import RandomUserPage from "app/views/RandomUserPage";
import UserPage from "./app/views/UserPage";

function App() {
  return (
    <div className="App">
      <h1>Random User</h1>
      <UserPage />
    </div>
  );
}

export default App;
