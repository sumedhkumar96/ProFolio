import { DotLottiePlayer } from '@dotlottie/react-player';
import signup_animation from '../assets/signup.lottie';
import { Link, Form, redirect } from 'react-router-dom';

export async function action({ request }){
    const formData = await request.formData();
    if (formData.get('password') != formData.get('confirmpassword')) {
        alert("Passwords do not match");
        return false;
    }
    else{
        return redirect('verify');
    }
}

export function SignUpPage() {
    return (
        <main>
        <div className="signup-container">
            <DotLottiePlayer className='illustration' src={signup_animation} autoplay loop />
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