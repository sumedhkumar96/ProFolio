import { redirect, useLoaderData } from "react-router-dom";
import { Template1 } from "../components/Template1/Template1";
import { Template2 } from "../components/Template 2/Template2";
import { url } from "../components/Constants.jsx";
import { Template3 } from "../components/Template 3/Template3.jsx";
import { Template4 } from "../components/Template 4/Template4.jsx";

export async function loader({ params }) {
    const response = await fetch(`${url}/api/user/public/${params.id}`);
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

    if(userData.templatePreference==1){
        return (<Template1 userData={userData}/>);
    }
    else if(userData.templatePreference==2){
        return (<Template2 userData={userData}/>); 
    }
    else if(userData.templatePreference==3){
        return (<Template3 userData={userData}/>); 
    }
    else if(userData.templatePreference==4){
        return (<Template4 userData={userData}/>);
    }

}