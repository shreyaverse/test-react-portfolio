import React from 'react';

const Contact = () => {
  return (
  <div id='contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
    <div className="flex flex-col p-4 mt-8 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Contact
            </p>
            <p className="py-6">
                Feel free to reach out to me for any inquiries or opportunities.
            </p>
        </div>

        <div className="flex mb-8 justify-center items-center">
            <form action="https://getform.io/f/zbzkvjoa" 
            method="POST"
            className="flex flex-col w-full md:w-1/2">
                <input 
                 type="text" 
                 name="name" 
                 placeholder="Enter your name" 
                 className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                />
                <input 
                 type="text" 
                 name="email" 
                 placeholder="Enter your email" 
                 className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                />
                <textarea
                 name="message"
                 placeholder="Enter your message"
                 rows="10"
                 className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></textarea>

                <button className="text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 
                px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                 Send Message
                </button>
            </form>
        </div>
    </div>
  </div>
)};

export default Contact;