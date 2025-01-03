import React from 'react';

const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-gray-600 body-font relative bg-gray-800 custom-image2">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2397.8275393661097!2d80.90249462625441!3d26.807789981679143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc18cd5ee697%3A0x7ede470e46dc6309!2s566%2C%20Jai%20Prakash%20Nagar%2C%20Muslim%20Nagar%2C%20Alambagh%2C%20Lucknow%2C%20Uttar%20Pradesh%20226005!5e0!3m2!1sen!2sin!4v1735334541250!5m2!1sen!2sin"
              style={{ filter: 'contrast(1.2) opacity(0.6)' }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  566/79, Jai Prakash Nagar, Alambagh, Lucknow, Uttar Pradesh, PIN-226005
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-blue-700 leading-relaxed">ayush76a@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+91-8957272258</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-gray-800 bg-opacity-60 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-lg">
            <h2 className="text-white text-4xl mb-1 font-medium title-font">
              Contact Me
            </h2>
            <p className="leading-relaxed text-blue-300 mt-10">
              I am currently looking for full-time Full Stack Web Developer/Backend Developer
              opportunities! If you know of any positions available, if you have any
              questions, or if you just want to say hi, please feel free to mail me at{' '}
              <a href="mailto:ayush76a@gmail.com" className="text-blue-400 font-medium">
                ayush76a@gmail.com
              </a>{' '}
              or call at <span className="text-blue-400 font-medium">+91-8957272258</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
