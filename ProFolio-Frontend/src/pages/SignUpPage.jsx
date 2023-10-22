import { DotLottiePlayer } from '@dotlottie/react-player';
import signup_animation from '../assets/signup.lottie';
import { Link } from 'react-router-dom';

export function SignUpPage() {
    return (
        <div className="signup-container">
            <DotLottiePlayer
                className='illustration'
                src={signup_animation}
                autoplay
                loop
            />
            <form action="http://127.0.0.1:8080/api/user/signup" method='post'>
                <h1>Sign Up</h1>
                <input type="text" id="name" name="name" placeholder='Name' required />
                <input type="email" id="email" name="email" placeholder='Email' required />
                <input type="password" id="password" name="password" placeholder='Password' required />
                <input type="password" id="confirmpassword" name="password" placeholder='Confirm Password' required />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to='/login'>Click here to login</Link></p>
            </form>
        </div>
    );
}