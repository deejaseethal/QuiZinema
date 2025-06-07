const Contact: React.FC = () => {
    return (
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-12 text-center max-w-2xl mx-auto">
            We’d love to hear from you! Fill out the form below or reach out directly.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
  
            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Reach out to us directly for any inquiries or support.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  <p className="text-gray-600 text-sm sm:text-base">
                    123 Gaming Street, New York, NY 10001
                  </p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.77 15.77 0 006.59 6.59l2.2-2.2a1 1 0 011.13-.27 11.48 11.48 0 005.29 1.29 1 1 0 011 1v3.5a1 1 0 01-1 1C10.29 22 2 13.71 2 2a1 1 0 011-1h3.5a1 1 0 011 1 11.48 11.48 0 001.29 5.29 1 1 0 01-.27 1.13l-2.2 2.2z" />
                  </svg>
                  <p className="text-gray-600 text-sm sm:text-base">+1 555-555-5556</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.41 2L12 11.41 5.41 6H18.59zM4 18V7.41L12 14l8-6.59V18H4z" />
                  </svg>
                  <p className="text-gray-600 text-sm sm:text-base">support@quizinema.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;