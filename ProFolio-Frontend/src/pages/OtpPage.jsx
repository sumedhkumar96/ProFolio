import { DotLottiePlayer } from '@dotlottie/react-player';
import email_sent_animation from '../assets/email_sent.lottie';

export function OtpPage(){

    function handleForm(e){
        e.preventDefault();
    }

    return (
        <div className="signup-container">
            <DotLottiePlayer className='illustration' src={email_sent_animation} autoplay loop />
            <form onSubmit={handleForm} method='post'>
                <h1>Otp Sent</h1>
                <p>Check your inbox for the otp</p>
                <input type="text" id="otp" name="otp" placeholder='Enter Otp Here' minLength='6' maxLength='6' required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}