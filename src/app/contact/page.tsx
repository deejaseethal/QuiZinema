
import { Metadata } from 'next';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Quizinema',
  description: 'Get in touch with Quizinema for inquiries, support, or collaboration opportunities.',
};

const ContactPage: React.FC = () => {
  return (
    <>
     
      {/* <section
        className="relative bg-cover bg-center h-48 sm:h-64 md:h-80 flex items-center justify-start"
        style={{ backgroundImage: "url('/cover.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl  text-white">Contact Us</h1>
        </div>
      </section> */}

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default ContactPage;