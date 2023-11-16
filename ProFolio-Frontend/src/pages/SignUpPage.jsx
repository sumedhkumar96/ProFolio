import { DotLottiePlayer } from '@dotlottie/react-player';
import signup_animation from '../assets/signup.lottie';
import { Link, Form, redirect } from 'react-router-dom';

export async function action({ request }) {
    const formData = await request.formData();
    if (formData.get('password') != formData.get('confirmpassword')) {
        alert("Passwords do not match");
        return false;
    }
    else {
        const response = await fetch('http://127.0.0.1:8080/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ 'name': formData.get('name'),'email': formData.get('email'), 'password': formData.get('password') }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS,DELETE',
                'Access-Control-Allow-Credentials': 'true'
            },
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (response.status == 201) {
            return redirect(`verify/${jsonResponse['id']}`);
        }
        else {
            alert("Unable to Register Please try again");
        }
    }
    return true;
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