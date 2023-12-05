import { redirect, useOutletContext } from 'react-router-dom';
import templateImage from '../assets/images/template_image.png';
import { Bounce } from "react-awesome-reveal";

export function SelectTemplate({isFirstTime ,setIsUserEditPage}) {
    const [user, setUser] = useOutletContext();

    async function modifyUserTemplatePreference(template_id) {
        console.log(user.authToken);
        let response = await fetch(`http://127.0.0.1:8080/api/user/${user.id}/template-preference/${template_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS,DELETE',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization':`Bearer ${user.authToken}`,
            },
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (response.status == 202) {
            if(isFirstTime){
                setIsUserEditPage(true);
            }
            else{
                return redirect(`/user/${user.id}`);
            }
        }
    }

    return (
        <div className='center-display-column'>
            <h2>Select Your Preferred Template</h2>
            <section className="templates-section">
                <Bounce triggerOnce={true}>
                    <div className="template" onClick={() => modifyUserTemplatePreference(1)}>
                        <img src={templateImage} alt="Template 1" />
                        <h4>Developer</h4>
                    </div>
                </Bounce>
                <Bounce triggerOnce={true}>
                    <div className="template" onClick={() => modifyUserTemplatePreference(2)}>
                        <img src={templateImage} alt="Template 2" />
                        <h4>Simple</h4>
                    </div>
                </Bounce>
                {/* <Bounce triggerOnce={true}>
                    <div className="template" onClick={() => modifyUserTemplatePreference(3)}>
                        <img src={templateImage} alt="Template 3" />
                        <h4>Buisness</h4>
                    </div>
                </Bounce> */}
            </section>
        </div>
    );
}