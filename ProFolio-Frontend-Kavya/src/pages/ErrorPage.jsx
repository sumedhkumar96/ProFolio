// Importing necessary modules and components
import { Link } from 'react-router-dom';  // React Router's Link for navigation
import error_animation from '../assets/error_404.lottie';  // Importing the lottie animation asset for the error page
import { DotLottiePlayer } from '@dotlottie/react-player';  // Lottie player for rendering lottie animations

/**
 * ErrorPage Component
 * Renders a 404 error page with a Lottie animation and a button to navigate back to the home page.
 *
 * @returns {JSX.Element} The rendered 404 error page.
 */
export function ErrorPage(){
    return (
        <div className='center-page'>
            {/* Lottie animation for 404 error */}
            <DotLottiePlayer className='error-page-lottie' src={error_animation} autoplay loop/>
            
            {/* Button to navigate back to the home page */}
            <Link to="/"><button className='button'>Go Back Home</button></Link>
        </div>
    );
}
