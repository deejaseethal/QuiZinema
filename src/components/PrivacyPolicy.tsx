import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-sm">
          <div className="px-6 py-12">
            <header className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            </header>

            <section className="prose prose-lg text-gray-700">
              <p className="mb-4 text-sm">
                Your privacy is important to us. This Privacy Policy explains how QuiZinema collects, uses, and protects your information when you use our mobile app and website.
              </p>

              <h2 className="text-base font-semibold mt-6 mb-2">Information We Collect</h2>
              <p className="mb-4 text-sm    ">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li className='text-sm'><strong>Device Information:</strong> Device type, OS version, unique identifiers.</li>
                <li className='text-sm'><strong>Usage Data:</strong> In-app activity, features used, levels completed.</li>
                <li className='text-sm'><strong>Analytics Data:</strong> Collected via third-party tools (e.g., Google Analytics, Firebase).</li>
                <li className='text-sm'><strong>Ad Data:</strong> If you see ads, we may collect anonymous ad performance metrics.</li>
                <li className='text-sm'><strong>No Personal Info:</strong> We do not collect names, emails, phone numbers, or exact locations unless explicitly stated.</li>
              </ul>

              <h2 className="text-base font-semibold mt-6 mb-2">How We Use Your Information</h2>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li className='text-sm'>To improve gameplay experience and app performance.</li>
                <li className='text-sm'>To fix bugs, analyze trends, and improve features.</li>
                <li className='text-sm'>To show relevant ads and measure their effectiveness.</li>
                <li className='text-sm'>To understand user behavior for future updates and content planning.</li>
              </ul>

              <h2 className="text-base font-semibold mt-6 mb-2">Third-Party Services</h2>
              <p className="mb-4 text-sm">
                We may use the following services:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li className='text-sm'>Firebase (Google)</li>
                <li className='text-sm'>Google AdMob / Meta Audience Network (for ads)</li>
                <li className='text-sm'>Analytics tools like Google Analytics or Mixpanel</li>
              </ul>
              <p className="mb-4 text-sm">
                These services may collect anonymous data as per their own privacy policies.
              </p>

              <h2 className="text-base font-semibold mt-6 mb-2">Image and Content Disclaimer</h2>
              <p className="mb-4 text-sm">
                QuiZinema uses stylized, AI-generated artwork inspired by public pop culture. All images used are either:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li className='text-sm'>Created via licensed AI tools,</li>
                <li className='text-sm'>Fan-inspired and stylized (not real photos),</li>
                <li className='text-sm'>Or used under fair use principles for educational/entertainment purposes.</li>
              </ul>
              <p className="mb-4 text-sm">
                If you are a copyright holder and believe any content violates your rights, please contact us at{' '}
                <a href="mailto:hello@quizinema.com" className="text-blue-600 text-sm hover:underline">
                  hello@quizinema.com
                </a>
                .
              </p>

              <h2 className="text-base font-semibold mt-6 mb-2">Data Security</h2>
              <p className="mb-4 text-sm">
                We do not store any personal data on our servers. All analytics data is securely handled by trusted third-party platforms.
              </p>

              <h2 className="text-base font-semibold mt-6 mb-2">Children&apos;s Privacy</h2>
              <p className="mb-4 text-sm">
                QuiZinema is designed for general audiences but is not intended for children under the age of 13. We do not knowingly collect personal data from children.
              </p>

              <h2 className="text-base font-semibold mt-6 mb-2">Changes to This Policy</h2>
              <p className="mb-4 text-sm">
                We may update this Privacy Policy from time to time. All changes will be reflected here and the “Effective Date” updated accordingly.
              </p>

              <h2 className="text-base font-semibold mt-6 mb-2">Contact Us</h2>
              <p className="mb-4 text-sm">
                For any questions or concerns about this policy, email us at:{' '}
                <a href="mailto:hello@quizinema.com" className="text-blue-600 hover:underline text-sm">
                  hello@quizinema.com
                </a>
                .
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Effective Date: June 16, 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}