// Importing necessary modules and components
import { DotLottiePlayer } from '@dotlottie/react-player';  // Lottie player for rendering lottie animations
import signup_animation from '../assets/signup.lottie';     // Importing the lottie animation asset
import { Link, Form, redirect } from 'react-router-dom';    // React Router's Link, Form, and redirect functionalities

/**
 * An asynchronous action triggered when the Sign Up form is submitted.
 * Checks if the passwords entered by the user match. If not, an alert is shown.
 * If they match, redirects the user to a verification page.
 *
 * @param {Object} params - The request parameters containing the form data.
 * @returns {Boolean|Function} False if passwords don't match or a redirect function if they do.
 */
export async function action({ request }){
    const formData = await request.formData();
    if (formData.get('password') !== formData.get('confirmpassword')) {
        alert("Passwords do not match");
        return false;
    } else {
        return redirect('verify');  // Redirect to the 'verify' route if passwords match
    }
}

/**
 * SignUpPage Component
 * Renders the sign-up page with input fields for name, email, password, and confirmation password.
 * It also displays a Lottie animation.
 *
 * @returns {JSX.Element} The rendered Sign Up page.
 */
export function SignUpPage() {
    return (
        <main>
            <div className="signup-container">
                {/* Lottie animation for sign-up */}
                <DotLottiePlayer className='illustration' src={signup_animation} autoplay loop />
                
                {/* Sign up form */}
                <Form action={action} method='post'>
                    <h1>Sign Up</h1>
                    <input type="text" id="name" name="name" placeholder='Name' required />
                    <input type="email" id="email" name="email" placeholder='Email' required />
                    <input type="password" id="password" name="password" placeholder='Password' minLength='6' required />
                    <input type="password" id="confirmpassword" name="confirmpassword" placeholder='Confirm Password' minLength='6' required />
                    <button type="submit">Sign Up</button>
                    <p>Already have an account? <Link to='/login'>Click here to login</Link></p>
                </Form>
            </div>
        </main>
    );
}
