import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PrivatePage = () => {
    const { type } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type])

    return (
        <div className="bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-24 py-10">
            <header className="header-space h-20 sm:h-[150px]"></header>
            {type === 'privacy' && (
                <div className="container bg-white mx-auto shadow px-4 sm:px-8 lg:px-16 py-8 w-full max-w-6xl">
                    <h1 className="text-3xl font-bold text-center mb-16">Privacy Policy</h1>

                    <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
                    <p className="mb-4">
                        You can learn more about us on our website: https://southavenuemall.com.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2 mt-5">Comments</h2>
                    <p className="mb-4">
                        When you leave comments on our site, we collect the information you provide, including your IP address and browser user agent string, to assist with spam detection. An anonymized string from your email address (known as a hash) may be sent to the Gravatar service to check if you are using it. You can review Gravatar’s privacy policy here: https://automattic.com/privacy/. Once your comment is approved, your profile picture will be visible to the public alongside your comment.
                    </p>

                    <h2 className="text-2xl mt-5 font-semibold mb-2">Media</h2>
                    <p className="mb-4">
                        If you upload images to our website, please avoid including images with embedded location data (EXIF GPS). Visitors can download and extract any location data from images on our site.
                    </p>

                    <h2 className="text-2xl mt-5 font-semibold mb-2">Cookies</h2>
                    <p className="mb-4">
                        If you leave a comment, you can opt to save your name, email address, and website in cookies for convenience, so you won’t need to re-enter your details for future comments. These cookies will last for one year.
                    </p>
                    <p className="mb-4">
                        When visiting our login page, we set a temporary cookie to check if your browser accepts cookies. This cookie does not contain personal data and is deleted when you close your browser.
                    </p>
                    <p className="mb-4">
                        Upon logging in, we set cookies to save your login information and screen display preferences. Login cookies last for two days, while screen options cookies persist for a year. If you choose “Remember Me,” your login will be maintained for two weeks. Logging out removes the login cookies.
                    </p>
                    <p className="mb-4">
                        If you edit or publish an article, an additional cookie is saved to indicate the post ID of the article you just edited. This cookie expires after one day and does not contain personal data.
                    </p>

                    <h2 className="text-2xl mt-5 font-semibold mb-2">Embedded Content from Other Websites</h2>
                    <p className="mb-4">
                        Articles on our site may include embedded content such as videos, images, or articles from other websites. This content behaves as if you have visited the other site directly. These external sites may collect data about you, use cookies, include third-party tracking, and monitor your interaction with the embedded content, especially if you have an account and are logged in.
                    </p>

                    <h2 className="text-2xl mt-5 font-semibold mb-2">Who We Share Your Data With</h2>
                    <p className="mb-4">
                        If you request a password reset, your IP address will be included in the reset email.
                    </p>

                    <h2 className="text-2xl mt-5 font-semibold mb-2">How Long We Retain Your Data</h2>
                    <p className="mb-4">
                        Comments and their metadata are retained indefinitely to recognize and automatically approve follow-up comments. For users who register on our site, we store the personal information provided in their profile. Users can view, edit, or delete their personal information at any time (except changing their username). Website administrators also have access to this information.
                    </p>

                    <h2 className="text-2xl mt-5 font-semibold mb-2">What Rights You Have Over Your Data</h2>
                    <p className="mb-4">
                        If you have an account or have left comments, you can request an exported file of the personal data we hold about you, including any data you have provided. You can also request that we erase any personal data we hold about you, excluding data we are required to keep for administrative, legal, or security reasons.
                    </p>

                    <h2 className="text-2xl mt-5 font-semibold mb-2">Where We Send Your Data</h2>
                    <p className="mb-4">
                        Visitor comments may be checked through an automated spam detection service.
                    </p>
                </div>
            )}

            {type === "terms" && (
                <div className="container bg-white mx-auto shadow px-4 sm:px-8 lg:px-16 py-8 w-full max-w-6xl">
  <h1 className="text-3xl font-semibold text-center mb-16 uppercase">Terms & Conditions</h1>

  <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
  <p className="mb-4">
    Welcome to the South Avenue Mall website, provided by Jabalpur Entertainment Complexes Pvt. Ltd. (referred to as “Company,” “we,” “our,” or “us”). These Terms and Conditions (the “Terms”) govern your use of our website located at <a href="https://southavenuemall.com" className="text-blue-500">https://southavenuemall.com</a> (the “Site”). By accessing or using the Site, you agree to abide by and be bound by these Terms. If you do not agree with these Terms, please do not use the Site.
  </p>

  <h2 className="text-2xl font-semibold mb-2">2. Use of the Site</h2>

  <h3 className="text-xl font-semibold mb-2">2.1. Limited License</h3>
  <p className="mb-4">
    We grant you a non-exclusive, non-transferable limited license to access, use, and display the Site and the Materials (as defined below) solely for your personal non-commercial use. This license does not include the right to:
    <ul className="list-disc pl-5">
      <li>Modify, copy, reproduce, republish, upload, post, transmit, or distribute any part of the Site or the Materials in any form or by any means.</li>
      <li>Use the Site or the Materials for commercial purposes.</li>
      <li>Create derivative works based on the Site or the Materials.</li>
    </ul>
  </p>

  <h3 className="text-xl font-semibold mb-2">2.2. User Conduct</h3>
  <p className="mb-4">
    You agree to use the Site in a lawful manner and in accordance with these Terms. You must not:
    <ul className="list-disc pl-5">
      <li>Interfere with or disrupt the Site or servers or networks connected to the Site.</li>
      <li>Attempt to gain unauthorized access to any part of the Site or its systems.</li>
      <li>Use the Site to transmit any harmful, fraudulent, or illegal content.</li>
    </ul>
  </p>

  <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2>
  <h3 className="text-xl font-semibold mb-2">3.1. Ownership</h3>
  <p className="mb-4">
    The Site and all Materials, including but not limited to text, graphics, images, logos, and software, are the property of Jabalpur Entertainment Complexes Pvt. Ltd. or its licensors and are protected by copyright, trademark, and other intellectual property laws.
  </p>
              <h3 className="text-xl font-semibold mb-2">3.2. Copyright Compliance</h3>
  <p className="mb-4">
You agree to comply with all copyright laws and not to copy, reproduce, or otherwise exploit the Materials without our express written consent. Any unauthorized use of the Materials may violate copyright, trademark, and other laws.
  </p>
  <h2 className="text-2xl font-semibold mb-2">4. Disclaimers and Limitation of Liability</h2>
  <h3 className="text-xl font-semibold mb-2">4.1. Disclaimers</h3>
  <p className="mb-4">
  The Site and the Materials are provided "as is" and "as available" without any warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:
  <ul className="list-disc pl-5">
    <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement.
    </li>
    <li>Warranties that the Site will be free from errors, viruses, or other harmful components.
    </li>
    <li>Warranties regarding the accuracy, reliability, or completeness of any information on the Site.
    </li>
  </ul>
  </p>
  <h3 className="text-xl font-semibold mb-2">4.2. Limitation of Liability</h3>
  <p className="mb-4">
  To the fullest extent permitted by law, Jabalpur Entertainment Complexes Pvt. Ltd. and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business interruption, arising from or related to:
  <ul className="list-disc pl-5">
    <li>Your use of or inability to use the Site.
    </li>
    <li>Errors or omissions in the Site or the Materials.
    </li>
    <li>Any third-party content linked to or from the Site.
    </li>
    <li>Any bugs, viruses, or other harmful code that may be transmitted through the Site.
    </li>
  </ul>
  Even if we have been advised of the possibility of such damages, our liability shall be limited to the maximum extent permitted by law.
  </p>

  <h2 className="text-2xl font-semibold mb-2">5. Indemnity</h2>
  <p className="mb-4">
  You agree to indemnify, defend, and hold harmless Jabalpur Entertainment Complexes Pvt. Ltd., its affiliates, officers, directors, employees, and agents from any claims, damages, liabilities, costs, and expenses, including reasonable attorneys' fees, arising out of or related to:
  <ul className="list-disc pl-5">
    <li>Your use of the Site.
    </li>
    <li>Any breach of these Terms.
    </li>
    <li>Any violation of applicable laws or regulations.
    </li>
  </ul>
  </p>

  <h2 className="text-2xl font-semibold mb-2">6. Changes to the Site and Terms
  </h2>
  <h3 className="text-xl font-semibold mb-2">6.1. Changes to the Site</h3>
  <p className="mb-4">
  We reserve the right to modify, suspend, or discontinue any aspect of the Site or its features at any time without prior notice. We may also impose limits on certain features or restrict your access to parts of the Site.
  </p>
  <h3 className="text-xl font-semibold mb-2">6.2. Changes to the Terms</h3>
  <p className="mb-4">
  We may revise these Terms from time to time. Changes will be effective immediately upon posting on the Site. Your continued use of the Site after any changes constitutes your acceptance of the revised Terms. It is your responsibility to review these Terms periodically for any updates.
  </p>


  <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>
  <p className="mb-4">
  We may terminate or suspend your access to the Site at our sole discretion, with or without cause, and with or without notice. Upon termination, you must immediately cease all use of the Site and destroy any Materials obtained from the Site.
  </p>
  <h2 className="text-2xl font-semibold mb-2">8. Dispute Resolution  </h2>
  <h3 className="text-xl font-semibold mb-2">8.1. Governing Law</h3>
  <p className="mb-4">
  These Terms and any disputes arising from or related to your use of the Site shall be governed by and construed in accordance with the laws of the Republic of India.
  </p>
  <h3 className="text-xl font-semibold mb-2">8.2. Jurisdiction</h3>
  <p className="mb-4">
  Any legal action or proceeding arising out of or related to these Terms shall be brought exclusively in the courts located in Jabalpur, Madhya Pradesh, India. You consent to the jurisdiction and venue of such courts and waive any objections to the same.
  </p>

  <h2 className="text-2xl font-semibold mb-2">9. Confidentiality</h2>
  <p className="mb-4">
  You agree to maintain the confidentiality of any confidential information disclosed to you by us and to use such information only as necessary for the purpose for which it was provided. You must not disclose such information to any third party without our prior written consent.
  </p>
  <h2 className="text-2xl font-semibold mb-2">10. International Use  </h2>
  <p className="mb-4">
  If you access the Site from outside India, you are responsible for complying with all local laws and regulations. The Site and Materials may not be appropriate or available for use in other locations, and access from territories where their content is illegal is prohibited.
  </p>
  <h2 className="text-2xl font-semibold mb-2">11. Entire Agreement</h2>
  <p className="mb-4">
  These Terms constitute the entire agreement between you and Jabalpur Entertainment Complexes Pvt. Ltd. regarding your use of the Site. Any previous agreements or understandings related to the Site are superseded by these Terms. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
  </p>


  <h2 className="text-2xl font-semibold mb-2">12. Contact Information</h2>
  <p className="mb-4">
    If you have any questions or concerns regarding these Terms, please contact us at:
    <br />
    Jabalpur Entertainment Complexes Pvt. Ltd.<br />
    South Avenue Mall, Adjoining Perfect Pottery, Narmada Road, Jabalpur<br />
    Email: <a href="mailto:info@southavenuemall.com" className="text-blue-500">info@southavenuemall.com</a>
  </p>
</div>

            )}
        </div>
    );
};

export default PrivatePage;
