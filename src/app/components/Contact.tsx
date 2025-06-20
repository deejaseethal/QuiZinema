const Contact: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#BDB3DA]/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#543855] text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-12 text-center max-w-2xl mx-auto">
          We’d love to hear from you! Fill out the form below or reach out directly.
        </p>

         {/* Contact Options */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Customer Support',
              desc: 'Need help with the game? Our support team is available 24/7 to assist you.',
              email: 'hello@moviequiz.com',
              
            },
            {
              title: 'Business Inquiries',
              desc: 'Interested in partnerships or collaborations? Let’s discuss opportunities.',
              email: 'business@moviequiz.com',
              
            },
            {
              title: 'Press & Media',
              desc: 'Looking for press materials or media inquiries? Our press team is ready to help.',
              email: 'press@moviequiz.com',
             
            }
          ].map((item, index) => (
            <div key={index} className="bg-white hover:shadow-lg rounded-lg p-6 text-center">
              <div className={`mx-auto mb-4 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center`}>
                <span className={`text-gray-600 text-xl`}>
                  {item.title[0]}
                </span>
              </div>
              <h4 className="font-semibold text-gray-800 text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
              <a href={`mailto:${item.email}`} className={`text-gray-600 text-sm font-medium`}>{item.email}</a>
            </div>
          ))}
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#543855]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#543855]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#543855]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#543855]"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full inline-flex items-center justify-center px-4 py-2 border-2 border-[#543855] text-[#543855] font-medium rounded-full hover:bg-[#543855] hover:text-white transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info */}


          {/* Map and Info */}
          <div className="flex flex-col justify-center space-y-8 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.164777144902!2d-122.40109792438544!3d37.78751727197417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c77d2959b%3A0x8d9a8b29134be7b1!2sTech%20Valley!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              loading="lazy"
              allowFullScreen
              className="w-full border-0"
            ></iframe>
            <div className="bg-white p-4 text-sm">
              <h4 className="font-semibold text-gray-800 mb-2">Visit Our Office</h4>
              <p className="text-gray-600">1234 Invention Drive, Tech Valley, San Francisco, CA 94107</p>
              <p className="text-gray-600 mt-1">Mon – Fri: 8:00 AM – 6:00 PM</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Contact;