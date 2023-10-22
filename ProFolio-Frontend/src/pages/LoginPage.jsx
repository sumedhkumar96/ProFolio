import { DotLottiePlayer } from '@dotlottie/react-player';
import person_skills_animation from '../assets/person_skills.lottie';
import { Link } from 'react-router-dom';

export function LoginPage() {
    return (
        <div className="signup-container">
            <DotLottiePlayer
                className='illustration'
                src={person_skills_animation}
                autoplay
                loop
            />
            <form action="http://127.0.0.1:8080/api/user/login" method='post'>
                <h1>Login</h1>
                <input type="email" id="email" name="email" placeholder='Email' required />
                <input type="password" id="password" name="password" placeholder='Password' required />
                <button type="submit">Login</button>
                <p>Are you new here? <Link to='/signup'>Click here to register</Link></p>
            </form>
        </div>
    );
}