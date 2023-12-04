import { useOutletContext } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LandingPage } from "./LandingPage";

export function AuthChecker(){
    const [user,setUser] = useOutletContext();

    function logOut() {
        localStorage.removeItem("user");
        setUser(null);
      }

    return (
        user ? <HomePage logOut={logOut} /> : <LandingPage />
    );
}