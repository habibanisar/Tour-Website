import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-5xl w-full">
        {/* Map Section */}
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-80 md:h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14947011.69027845!2d2.0675811807821044!3d48.660335982092196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4074a9e1a8f07%3A0x400d623c39c0d60!2sEurope!5e0!3m2!1sen!2s!4v1699881234567!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 p-6">
          <form className="flex flex-col space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Email"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={5}
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
