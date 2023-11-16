import { DotLottiePlayer } from '@dotlottie/react-player';
import person_skills_animation from '../assets/person_skills.lottie';
import { Link, Form, redirect } from 'react-router-dom';

export async function action({ request }){
    const formData = await request.formData();
    let response = await fetch('http://127.0.0.1:8080/api/user/login', {
        method: 'POST',
        body: JSON.stringify({'email': formData.get('email'), 'password': formData.get('password') }),
        headers:{'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS,DELETE',
        'Access-Control-Allow-Credentials':'true'},
    });
    console.log(response);
    if (response.status == 200) {
        return redirect("/home");
    }
    else {
        alert("Wrong Password, Try Again");
    }
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