import './styles/App.css';
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { createContext, useEffect, useState } from 'react';

export const UserContext=createContext(null);

function App() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    let data=localStorage.getItem('user');
    setUser(data);
  },[user]);

  function logOut(){
    localStorage.removeItem("user");
    setUser(null);
}

  return (
    <UserContext.Provider value={user}>
      {user?<HomePage logOut={logOut}/>:<LandingPage />}
    </UserContext.Provider>
  );
}

export default App;
