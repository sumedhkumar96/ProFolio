import { DotLottiePlayer } from '@dotlottie/react-player';
import email_sent_animation from '../assets/email_sent.lottie';
import { redirect, useParams } from 'react-router-dom';

export function OtpPage(){

    let { id } = useParams();


    async function handleForm(e){
        e.preventDefault();
        const response = await fetch(`http://127.0.0.1:8080/api/user/verify-signup-otp?otp=${e.target.otp.value}&userId=${id}`);
        const jsonResponse = await response.json();
        if(jsonResponse!='true'){
            alert("Wrong OTP entered, Please Try Again")
        }
        else{
            return redirect('/home/');
        }
    }

    return (
    <main>
        <div className="signup-container">
            <DotLottiePlayer className='illustration' src={email_sent_animation} autoplay loop />
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