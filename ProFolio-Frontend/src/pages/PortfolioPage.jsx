import { redirect, useLoaderData } from "react-router-dom";
import { Template1 } from "../components/Template1/Template1";

export async function loader({ params }) {
    const response = await fetch(`http://127.0.0.1:8080/api/user/public/${params.id}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    if (response.status == 200) {
        console.log(jsonResponse.templatePreference);
        return jsonResponse;
    }
    else {
        return redirect("/error");
    }
}

export function PortfolioPage() {
    const userData = useLoaderData();

    return (<>
        <Template1 userData={userData}/>
    </>);
}