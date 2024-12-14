import React from 'react';

export const metadata = {
  title: 'Disclaimer',
  description: "Read Fleket's Disclaimer to understand the limits of our liability and the accuracy of the information provided. Find out more about user responsibilities and third-party links on our platform.",
}

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <h1>Disclaimer</h1>
      <p>Last updated: December 13, 2024</p>
      <br />

      <section className="intro">
        <p>
          The information provided by Fleket (we, us, or our) on our website and services is for general informational purposes only. All information on the site is provided in good faith, and we make every effort to ensure that the information is accurate and up-to-date. However, we make no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, or availability of the information provided.
        </p>
      </section>
      <br />

      <section className="use-of-service">
        <h2>1. Use of the Service</h2>
        <p>
          Your use of Fleket website and services is at your own risk. We cannot guarantee the accuracy or completeness of the content provided on our platform, and we do not assume responsibility for any errors, omissions, or misstatements. Additionally, Fleket is not responsible for any loss or damage arising from the use of the information on our website.
        </p>
      </section>
      <br />

      <section className="third-party-links">
        <h2>2. Third-Party Links</h2>
        <p>
          Our website may contain links to external websites or third-party services that are not operated by Fleket. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites. We encourage you to review the privacy policies and terms of service of any third-party websites you visit.
        </p>
      </section>
      <br />

      <section className="user-generated-content">
        <h2>3. User-Generated Content</h2>
        <p>
          Fleket does not control or verify the accuracy of content posted by users, including product listings and descriptions. Users are solely responsible for the content they upload or create on the platform. Fleket is not liable for any errors or omissions in user-generated content and does not guarantee the legality, accuracy, or appropriateness of such content.
        </p>
      </section>
      <br />

      <section className="no-warranty">
        <h2>4. No Warranty</h2>
        <p>
          Fleket provides its services as is and makes no representations or warranties regarding the availability, reliability, or performance of the platform. We do not warrant that our website will be free of errors, bugs, or viruses, nor do we guarantee uninterrupted access to the Service. You assume all risks associated with using our platform.
        </p>
      </section>
      <br />

      <section className="limitation-of-liability">
        <h2>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Fleket, its affiliates, and partners shall not be held liable for any direct, indirect, incidental, special, or consequential damages, including but not limited to lost profits, data, or business interruption, arising from the use of or inability to use the website or services, even if we have been advised of the possibility of such damages.
        </p>
      </section>
      <br />

      <section className="indemnification">
        <h2>6. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Fleket, its directors, officers, employees, agents, and affiliates from any claims, losses, damages, or expenses (including legal fees) arising from your use of the website, violation of these disclaimers, or infringement of any rights of third parties.
        </p>
      </section>
      <br />

      <section className="no-responsibility">
        <h2>7. No Responsibility for Actions of Users</h2>
        <p>
          Fleket is not responsible for any actions taken by users of the platform, including purchases, transactions, or other interactions. Any disputes or issues arising between users, including between buyers and sellers, are solely the responsibility of the users involved.
        </p>
      </section>
      <br />

      <section className="changes">
        <h2>8. Changes to the Disclaimer</h2>
        <p>
          Fleket reserves the right to update or modify this Disclaimer at any time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top. We encourage you to review this Disclaimer periodically. Your continued use of our website after any modifications constitutes your acceptance of the updated Disclaimer.
        </p>
      </section>
      <br />

      <section className="governing-law">
        <h2>9. Governing Law</h2>
        <p>
          This Disclaimer shall be governed by and construed in accordance with the laws of the jurisdiction in which Fleket operates, without regard to its conflict of law principles.
        </p>
      </section>
      <br />

      <section className="contact-us">
        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Disclaimer, please contact us at <a href="mailto:iamhelloguy@gmail.com">iamhelloguy@gmail.com</a>.
        </p>
      </section>
      <br />
    </div>
  );
};

export default Disclaimer;
