import { DotLottiePlayer } from '@dotlottie/react-player';
import person_skills_animation from '../assets/person_skills.lottie';
import { Link, Form } from 'react-router-dom';

export async function action({ request }){
    const formData = await request.formData();
    console.log(formData);
    return false;
}

export function LoginPage() {
    return (
        <main>
        <div className="signup-container">
            <DotLottiePlayer className='illustration' src={person_skills_animation} autoplay loop />
            <Form action={action} method='post'>
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