import React, { useEffect, useState } from "react";
import ComponentRouter from "./Router";
import {authService} from "../myFirebase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  //when firebase first mounted then useEffect execute
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  })

  return (
    <>
      {init ? <ComponentRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
    </>
  );
}

export default App;
