import { Link } from "react-router-dom";

export function HomePage({ logOut }) {

    return (
        <>
            <h1>HomePage</h1>
            <p><Link onClick={logOut}>Log Out</Link></p>
        </>
    );
}