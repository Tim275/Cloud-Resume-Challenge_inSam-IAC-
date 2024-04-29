import React from 'react';
import '../styles/style.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';



function Intro() {
  const [counter, setCounter] = useState(0);

useEffect(() => {
    async function updateCounter() {
        let response = await fetch("https://yumhn6nkcddwvbtoutzsa55wsi0msjuk.lambda-url.eu-central-1.on.aws/");
        let data = await response.json();
        setCounter(data);
    }

    updateCounter();
}, []);

//https://ufjnjkvixmwjqc7xv5h6lp4yxi0qpyxt.lambda-url.eu-central-1.on.aws/
//https://yumhn6nkcddwvbtoutzsa55wsi0msjuk.lambda-url.eu-central-1.on.aws/

   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Timour Miagol</h1>
         <p className="text-base md:text-xl mb-3 font-medium">
  <span style={{color: 'blue'}}>Devops engineer</span> 
</p>
        <p className="text-sm max-w-xl mb-6 font-bold">
  I am a DevOps engineer with a focus on <span style={{color: 'purple'}}>Machine Learning</span>, and this portfolio is a crucial aspect of my participation in the <span style={{color: 'green'}}>Cloud Resume Challenge</span>. To learn more about my professional background, projects, certifications, and to gain insights into my persona, please visit my GitHub profile.
  Sincerely,
  <br />
  {' '}
  <a
    href="https://github.com/Tim275"
    target="_blank"
    className="text-red-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
    rel="noreferrer noopener"
  >
    Timour Miagol
  </a>{' '}
</p>
         <h5 className="rainbow-text"> View Counter:     {counter}  </h5>
     
      </div>
   )
}

export default Intro;