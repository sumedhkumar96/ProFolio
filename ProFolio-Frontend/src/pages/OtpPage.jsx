import { DotLottiePlayer } from '@dotlottie/react-player';
import email_sent_animation from '../assets/lottie/email_sent.lottie';
import success_animation from '../assets/lottie/otp_success.lottie';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { url } from "../components/Constants.jsx";

export function OtpPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [isVerified, setIsVerified] = useState(false);

    async function handleForm(e) {
        e.preventDefault();
        const response = await fetch(`${url}/api/user/verify-signup-otp?otp=${e.target.otp.value}&userId=${id}`);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse) {
            setIsVerified(true);
        }
        else {
            e.preventDefault();
            alert("Wrong OTP entered, Please Try Again");
        }
    }

    if (isVerified) {
        setTimeout(() => {
            console.log('hello');
            navigate('/login');
        }, 5000);

        return (
            <main className='gradient-main'>
                <div className="authentication-container">
                    <DotLottiePlayer className='big-lottie-animation' src={success_animation} speed={0.5} autoplay />
                    <h2>Otp Verified Successfully, Redirecting you Back to Login</h2>
                </div>
            </main>
        );
    }

    return (
        <main className='gradient-main'>
            <Fade triggerOnce={true}>
                <div className="authentication-container">
                    <DotLottiePlayer className='illustration' src={email_sent_animation} autoplay loop />
                    <form onSubmit={handleForm} method='post'>
                        <h1>Otp Sent</h1>
                        <p>Check your inbox for the otp</p>
                        <input type="text" id="otp" name="otp" placeholder='Enter Otp Here' minLength='6' maxLength='6' required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Fade>
        </main>
    );
}