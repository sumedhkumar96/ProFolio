// Importing necessary modules and components
import { DotLottiePlayer } from '@dotlottie/react-player'; // Lottie player for rendering lottie animations
import person_skills_animation from '../assets/person_skills.lottie'; // Importing the lottie animation asset depicting a person's skills
import { useNavigate, Link, Form } from 'react-router-dom'; // Consolidated import from react-router-dom


/**
 * An asynchronous action triggered when the Login form is submitted.
 * Logs the form data to the console.
 * Currently returns false after logging; in a full implementation, this would likely handle login validation 
 * or forward the credentials to a backend service.
 *
 * @param {Object} params - The request parameters containing the form data.
 * @returns {Boolean} Always returns false as of now.
 */
export async function action({ request }){
    const formData = await request.formData();
    console.log(formData);  // Logging the form data for debugging purposes
    return false;
}

/**
 * LoginPage Component
 * Renders the login page with input fields for email and password.
 * It also displays a Lottie animation representing a person's skills.
 *
 * @returns {JSX.Element} The rendered Login page.
 */
export function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        // event.preventDefault();
        // const result = await action({ request: new FormData(event.currentTarget) });
        event.preventDefault();
        // Create a mock request object with a formData function
        const mockRequest = {
            formData: () => new FormData(event.currentTarget)
        };
        const result = await action({ request: mockRequest });
        if (result || true) {
            navigate('/maincontent'); // Navigate to MainContent on successful login
        }
    };
    return (
        <main>
            <div className="signup-container">
                {/* Lottie animation representing person's skills */}
                <DotLottiePlayer className='illustration' src={person_skills_animation} autoplay loop />
                
                {/* Login form */}
                <Form method='post' onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input type="email" id="email" name="email" placeholder='Email' required />
                    <input type="password" id="password" name="password" placeholder='Password' minLength='6' required />
                    <button type="submit">Login</button>
                    <p>Are you new here? <Link to='/signup'>Click here to register</Link></p>
                </Form>
            </div>
        </main>
    );
}
