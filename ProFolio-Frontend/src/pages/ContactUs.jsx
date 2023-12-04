
const Contact = () => {
  return (
    <div className="contact-container">
      <a href="/">
        <img src="/PROFOLIOIcon.png" className="app-profile" alt="profile" />
      </a>
      <section>
      <div className="contact-us-container">
              <div  id="contact-us" className="contact-us">
                <div className="contact-us-text">
                  <h1 className="contact-us-header">
                    <span className="text-gradient d-inline">Contact Us</span>
                  </h1>
                  <p className="text-muted">
                  Have a question, a brilliant idea, or a puzzle to solve? Maybe you just want to share your success story or give us a shoutout? <br />We're all ears! Reach out to us at <a href="mailto:profol.io@outlook.com">profol.io@outlook.com</a> and let the conversation begin. 
                  <br />Don&apos;t be a stranger; we love hearing from our users more than we love coffee—and we really love coffee. So let’s brew some ideas together!
                  </p>
                </div>
              </div>
            </div>
      </section>
    </div>
  );
};

export default Contact;

