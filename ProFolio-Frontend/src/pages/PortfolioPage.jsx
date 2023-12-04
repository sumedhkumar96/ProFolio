import { useEffect } from "react";
import { redirect, useParams } from "react-router-dom";

export function PortfolioPage() {
    const { id } = useParams();

    useEffect(() => {
        async function fetchUserData() {
            const response = await fetch(`http://127.0.0.1:8080/api/user/public/${id}`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            if (response.status == 200) {
                //parse user data
            }
            else {
                return redirect("/error");
            }
        }
        fetchUserData();
    }, []);

    return (<>
        <h1>Hello</h1>
    </>);
}