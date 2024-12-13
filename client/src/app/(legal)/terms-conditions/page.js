import React from 'react';

export const metadata = {
  title: 'Terms & Conditions',
  description: "Review Fleket's Terms and Conditions to understand our services, user responsibilities, and legal obligations. Our terms ensure a safe and transparent experience for all users. Read our full terms!",
}

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
        <br/>
      <h1>Terms and Conditions</h1>
      <p>Last updated: December 13, 2024</p>
      <br />

      <section className="intro">
        <p>
          These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of the Fleket website ("Service") and any related services provided by Fleket ("we", "us", or "our").
        </p>
        <p>
          By accessing or using the Service, you agree to comply with these Terms. If you do not agree to these Terms, please do not use the Service.
        </p>
      </section>
      <br />

      <section className="account-registration">
        <h2>1. Account Registration</h2>
        <p>
          In order to use the Service, you must create an account. You are responsible for maintaining the confidentiality of your account details, including your username and password. You agree to notify us immediately of any unauthorized use of your account.
        </p>
        <p>
          You must provide accurate, current, and complete information during registration and keep your account information up-to-date.
        </p>
      </section>
      <br />

      <section className="use-of-service">
        <h2>2. Use of Service</h2>
        <p>
          You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:
        </p>
        <ul>
          <li>Violate any applicable law or regulation.</li>
          <li>Transmit any harmful or malicious code through the Service.</li>
          <li>Engage in any activity that could harm or disrupt the Service or other users.</li>
          <li>Infringe upon the intellectual property rights of others.</li>
        </ul>
      </section>
      <br />

      <section className="free-store-creation">
        <h2>3. Free Store Creation</h2>
        <p>
          Fleket allows you to create a store for free with no upfront costs. However, some features of the platform may require additional fees. You will be notified of these fees in advance.
        </p>
        <p>
          Fleket reserves the right to change or modify the pricing structure at any time. Any changes to the fees will be communicated to you in advance.
        </p>
      </section>
      <br />

      <section className="intellectual-property">
        <h2>4. Intellectual Property</h2>
        <p>
          Fleket owns all intellectual property rights related to the Service, including trademarks, logos, and content. You retain ownership of the content you upload to your store, but by using the Service, you grant Fleket a license to use, display, and distribute your content in connection with the Service.
        </p>
      </section>
      <br />

      <section className="user-content">
        <h2>5. User-Generated Content</h2>
        <p>
          You are solely responsible for the content you upload or create through the Service. Fleket does not control the content uploaded by users and does not guarantee its accuracy, legality, or appropriateness.
        </p>
        <p>
          By uploading content, you represent and warrant that you have all necessary rights and permissions to use and share the content and that it does not infringe on any third-party rights.
        </p>
      </section>
      <br />

      <section className="privacy-policy">
        <h2>6. Privacy Policy</h2>
        <p>
          Your use of the Service is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which can be found on our website. Please review it to understand how we collect, use, and protect your personal information.
        </p>
      </section>
      <br />

      <section className="termination">
        <h2>7. Termination</h2>
        <p>
          Fleket may suspend or terminate your account at any time, with or without notice, for any reason, including if we believe you have violated these Terms. Upon termination, you will no longer have access to your account and its content.
        </p>
      </section>
      <br />

      <section className="disclaimer">
        <h2>8. Disclaimer of Warranties</h2>
        <p>
          The Service is provided "as is" without warranties of any kind, either express or implied. Fleket does not guarantee that the Service will be error-free or uninterrupted, nor does it make any representations about the accuracy or reliability of the content on the Service.
        </p>
      </section>
      <br />

      <section className="limitation-of-liability">
        <h2>9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Fleket is not liable for any indirect, incidental, special, or consequential damages, including lost profits or data, arising from your use or inability to use the Service.
        </p>
      </section>
      <br />

      <section className="indemnification">
        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify and hold Fleket harmless from any claims, damages, or losses arising from your use of the Service, violation of these Terms, or infringement of any rights of a third party.
        </p>
      </section>
      <br />

      <section className="changes">
        <h2>11. Changes to the Terms</h2>
        <p>
          Fleket reserves the right to update or modify these Terms at any time. Any changes will be posted on this page with an updated date. It is your responsibility to review these Terms periodically. Continued use of the Service after changes to the Terms constitutes your acceptance of the modified Terms.
        </p>
      </section>
      <br />

      <section className="governing-law">
        <h2>12. Governing Law</h2>
        <p>
          These Terms will be governed by and construed in accordance with the laws of the jurisdiction in which Fleket operates, without regard to its conflict of law principles.
        </p>
      </section>
      <br />

      <section className="contact-us">
        <h2>13. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms, please contact us at <a href="mailto:iamhelloguy@gmail.com">iamhelloguy@gmail.com</a>.
        </p>
      </section>
      <br />
    </div>
  );
};

export default TermsAndConditions;
