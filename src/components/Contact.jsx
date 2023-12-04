import React from 'react';
import Title from './Title';

function Contact() {
   return (

      <div className="flex justify-center">
      <a 
         href="mailto:timourmiagol@outlook.de?subject=Request&body=Hey Timour, I want to chat with you." 
         className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
      >
         Contact me  🚀
      </a>
   </div>
)
}

export default Contact;
