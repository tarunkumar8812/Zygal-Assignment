import { useState } from "react";
import "./App.css";
import { Homepage } from "./components/Homepage";
import { Login } from "./components/Login";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogOut() {
    setLoggedIn(false);
  }


  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={!loggedIn && <Login onLoginSuccess={handleLogin} />}
        />
        <Route
          path="/homepage"
          element={loggedIn && <Homepage onLogout={handleLogOut} />}
        />
      </Routes>
    </div>
  );
}

export default App;