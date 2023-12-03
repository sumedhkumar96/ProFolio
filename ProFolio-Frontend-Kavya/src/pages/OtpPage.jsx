// Importing necessary modules and components
import { DotLottiePlayer } from '@dotlottie/react-player';  // Lottie player for rendering lottie animations
import email_sent_animation from '../assets/email_sent.lottie';  // Importing the lottie animation asset for email sent

/**
 * OtpPage Component
 * Renders a page where users are expected to input the OTP (One-Time Password) they received in their inbox.
 * It also displays a Lottie animation indicating that an email has been sent.
 *
 * @returns {JSX.Element} The rendered OTP input page.
 */
export function OtpPage(){

    /**
     * Handles the form submission for the OTP.
     * Currently, it only prevents the default form submission behavior.
     * In a full implementation, this would likely handle OTP validation or forward to the backend service.
     *
     * @param {Event} e - The form submission event.
     */
    function handleForm(e){
        e.preventDefault();
    }

    return (
        <main>
            <div className="signup-container">
                {/* Lottie animation indicating an email has been sent */}
                <DotLottiePlayer className='illustration' src={email_sent_animation} autoplay loop />
                
                {/* Form to input the received OTP */}
                <form onSubmit={handleForm} method='post'>
                    <h1>Otp Sent</h1>
                    <p>Check your inbox for the otp</p>
                    <input type="text" id="otp" name="otp" placeholder='Enter Otp Here' minLength='6' maxLength='6' required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
}
