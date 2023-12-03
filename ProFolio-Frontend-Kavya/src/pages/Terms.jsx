import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Privacy.css'; 

const Terms = () => {
  return (
    <div className="terms-container">
      <a href="/">
        <img src="/PROFOLIOIcon.png" className="app-profile" alt="profile" />
      </a>
      <h1>Terms & Conditions</h1>
      <section>
        <h2>Terms of Service</h2>
        <p>These Terms of Service govern your use of our website located at PROFOLIO and any related services provided by PROFOLIO.</p>
        <hr />
        <p><strong>1. Account Registration:</strong> You may be required to register an account to access certain features of the site. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
        <hr />
        <p><strong>2. User Content:</strong> Users may post their own content, such as text, photos, or other material. By posting content on PROFOLIO, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any and all media or distribution methods now known or later developed.</p>
        <hr />
        <p><strong>3. Prohibited Conduct:</strong> You agree not to engage in any of the following prohibited activities:<br />
        - Copying or redistributing any part of the service.<br />
        - Using automated systems to interact with the service, which includes robots and data scraping tools.<br />
        - Sending spam or any form of unsolicited messages through the service.<br />
        - Disrupting or attempting to compromise the overall security and functionality of the service.
        </p>
        <hr />
        <p><strong>4. Privacy Policy:</strong> The use of the website is also governed by our <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms of Service by this reference.</p>
        <hr />
        <p><strong>5. Changes to Terms:</strong> PROFOLIO reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
        <hr />
        <p><strong>6. Termination:</strong> We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.</p>
        <hr />
        <p><strong>7. Disclaimer:</strong> Our service is provided on an “as is” and “as available” basis. PROFOLIO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property, or other violation of rights.</p>
        <hr />
        <p><strong>8. Limitation of Liability:</strong> Neither PROFOLIO nor its contributors shall be held liable for any damages or losses resulting from the use of this service. This includes, but is not limited to, data loss, loss of access, or any other issues that may arise from the use of PROFOLIO.</p>
        <hr />
        <p><strong>9. Governing Law:</strong> These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which PROFOLIO operates, without regard to its conflict of law provisions.</p>
        <hr />
        <p><strong>10. Contact Information:</strong> If you have any questions about these Terms, please <a href="/contactus">Contact Us</a>.</p>
      </section>
      <section>
        <h2>Intellectual Property</h2>
        <p>All content displayed on our website is the intellectual property of PROFOLIO. You may not reuse, republish, or reprint such content without our written consent.</p>
      </section>
      <section className="terms-policy">
        <h2>Terms of Service</h2>
        <p>Last updated: 1 December 2023</p>
      </section>
    </div>
  );
};

export default Terms;


