import { Link } from "react-router-dom";

export function HomePage(){
    return (
        <>
        <h1>HomePage</h1>
        <p><Link to='/'>Log Out</Link></p>
        </>
    );
}