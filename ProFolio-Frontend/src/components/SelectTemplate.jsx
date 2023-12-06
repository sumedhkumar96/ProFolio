import { useNavigate, useOutletContext } from 'react-router-dom';
import templateImage1 from '../assets/images/template_image1.png';
import templateImage4 from '../assets/images/template_image4.png';
import templateImage from '../assets/images/template_image.png';
import templateImage3 from '../assets/images/template_image3.jpg';
import { Bounce } from "react-awesome-reveal";
import { url } from "../components/Constants.jsx";

export function SelectTemplate() {
    const [user, setUser] = useOutletContext();

    const navigate=useNavigate();

    async function modifyUserTemplatePreference(template_id) {
        console.log(user.authToken);
        let response = await fetch(`${url}/api/user/${user.id}/template-preference/${template_id}`, {
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
            return navigate(`/user/${user.id}`);
        }
    }

    return (
        <div className='center-display-column'>
            <h2>Select Your Preferred Template</h2>
            <section className="templates-section">
                <Bounce triggerOnce={true}>
                    <div className="template" onClick={() => modifyUserTemplatePreference(1)}>
                        <img src={templateImage1} alt="Template 1" />
                        <h4>Advanced</h4>
                    </div>
                </Bounce>
                <Bounce triggerOnce={true}>
                    <div className="template" onClick={() => modifyUserTemplatePreference(2)}>
                        <img src={templateImage} alt="Template 2" />
                        <h4>Simple</h4>
                    </div>
                </Bounce>
                <Bounce triggerOnce={true}>
                    <div className="template" onClick={() => modifyUserTemplatePreference(3)}>
                        <img src={templateImage3} alt="Template 3" />
                        <h4>Cool</h4>
                    </div>
                </Bounce>
                <Bounce triggerOnce={true}>
                    <div className="template" onClick={() => modifyUserTemplatePreference(4)}>
                        <img src={templateImage4} alt="Template 4" />
                        <h4>Basic</h4>
                    </div>
                </Bounce>
            </section>
        </div>
    );
}