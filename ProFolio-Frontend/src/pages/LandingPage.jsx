import { Link } from "react-router-dom";
import '../styles/landing-page-styles.css';
import logo from '../assets/images/logo.png';
import templateImage from '../assets/images/template_image.png';
import { Slide, Zoom } from "react-awesome-reveal";

export function LandingPage() {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('About');
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container"> <Link className="navbar-brand navbar-logo" to="#"> <img src={logo} alt="logo" className="logo-1" /> </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span
              className="fas fa-bars"></span> </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"> <Link className="nav-link" to="#About" onClick={scrollToAbout}>About</Link> </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="banner" data-scroll-index='0'>
        <div className="banner-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div className="banner-text">
                  <h2 className="white">Create your Portfolio in Seconds</h2>
                  <p className="banner-text white">Crafting Professional Portfolios for Your Success: Elevate your career with our user-friendly platform, showcasing your accomplishments and skills effortlessly. Your gateway to professional growth awaits!</p>
                  <ul>
                    <li><Slide direction="up" triggerOnce={true}><Link to="/login" className="banner-button">Login</Link></Slide></li>
                    <li><Slide direction="up" triggerOnce={true}><Link to="/signup" className="banner-button"><span className="fadeInUp" />Signup</Link></Slide></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5 col-sm-12"><Slide direction="up" triggerOnce={true}> <img src={templateImage} className="img-fluid fadeInUp" alt="Portfolio Template Image" /></Slide> </div>
            </div>
          </div>
        </div>
      </section>

      <section id="About" className="about section-padding prelative" data-scroll-index='1'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h3>About</h3>
                <span className="line"></span>
                <p>Whether you&apos;re a seasoned professional or a student embarking on your career journey, our user-friendly interface and customizable templates make the process seamless. Showcase your skills, projects, and experiences in a way that captivates and communicates your unique value proposition.</p>
              </div>
              <div className="section-content text-center">
                <Zoom>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="icon-box fadeInUp"> <i className="fa fa-life-ring"
                        aria-hidden="true"></i>
                        <h5>Easy Template Customization</h5>
                        <p>Choose from a diverse range of professionally designed templates that suit your style. From color schemes to layout structures, take full control and make your portfolio uniquely yours.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="icon-box fadeInUp"> <i className="fa fa-mobile"
                        aria-hidden="true"></i>
                        <h5>Responsive Design</h5>
                        <p>Seamlessly adapting to various screen sizes, from desktops to tablets and smartphones, our platform guarantees that your professional story is presented with clarity and precision, regardless of the viewing medium.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="icon-box fadeInUp"> <i className="fa fa-bolt" aria-hidden="true"></i>
                        <h5>Fast</h5>
                        <p>We understand the importance of a seamless user experience, and our commitment to optimal performance ensures that your portfolio loads swiftly, providing instant access to your professional narrative.</p>
                      </div>
                    </div>
                  </div>
                </Zoom>
                <Link to="/signup" className="about-btn">Sign Up Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-copy">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p>2023 &copy; Profolio. Website Designed with ❤️ by Aditya, Sumedh, Kavya and Renee</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}