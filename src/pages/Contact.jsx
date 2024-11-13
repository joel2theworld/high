import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    
    <div>
      <Helmet>
        <title>Contact High Park</title>
        <meta name="description" content="Premier Architects specializes in innovative architectural designs across Nigeria, featuring projects like Lekki Beach Front and Jade's Court in Lagos." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
          <p className=" text-gray-600">We're here to help and answer any questions you might have.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Map Section */}
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-6">
                  <MapPin className="w-12 h-12 text-yellow-900 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
                <p className="text-gray-600">
                  20 Omole Phase 2 Extension
                  <br />
                  100214, Lagos
                  <br />
                  Nigeria
                </p>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              {/* Email */}
              <div className="mb-8">
                <div className="flex ">
                  <Mail className="w-6 h-6 text-yellow-900 mr-3" />
                  <h3 className="font-medium">Email Us</h3>
                </div>
                <a 
                  href="mailto:dolapofadipe@highpark.in"
                  className="text-yellow-900 hover:text-blue-800 flex items-center group"
                >
                  dolapofadipe@highpark.in
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  We'll respond to your email within 24 hours
                </p>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex ">
                  <Phone className="w-6 h-6 text-yellow-900 mr-3" />
                  <h3 className="font-medium">Call Us</h3>
                </div>
                <a 
                  href="tel:+2348156309890"
                  className="text-yellow-900 hover:text-blue-800 flex items-center group"
                >
                  +234 815 630 9890
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Monday to Friday, 9am to 5pm WAT
                </p>
              </div>

              {/* Business Hours */}
              <div>
                <div className="flex ">
                  <Clock className="w-6 h-6 text-yellow-900 mr-3" />
                  <h3 className="font-medium">Business Hours</h3>
                </div>
                <div className="text-gray-600">
                  <p className="mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-4">
            For urgent matters, please call us directly at{' '}
            <a 
              href="tel:+2348156309890"
              className="text-yellow-900 hover:text-blue-800"
            >
              +234 815 630 9890
            </a>
          </p>
          <p>
            We look forward to hearing from you!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;