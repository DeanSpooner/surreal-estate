import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/App.css";

function App() {
  const initialState = {
    userID: {
      id: "",
      imgURL: "",
      userName: "",
    },
  };

  const [userID, setUserID] = useState(initialState.userID);

  const handleLogin = (response) => {
    setUserID({
      id: response.id,
      imgURL: response.picture.data.url,
      userName: response.name,
    });
  };

  const handleLogout = () => {
    window.FB.logout(() => {
      setUserID(initialState.userID);
    });
  };

  return (
    <div className="App" data-testid="app">
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Properties {...props} userID={userID} />}
        />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
