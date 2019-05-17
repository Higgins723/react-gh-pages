import React from 'react';
import linkedin from '../../images/linkedin.png';

const Contact = () => {
  return (
    <div className="lmb">
      <h1 className="title-text-sml">Contact me</h1>
      <div><a href="https://www.linkedin.com/in/joshua-higgins-7a56b8a4/"><img className="linkedin" src={linkedin} alt="linkedin" /></a></div>
    </div>
  )
}

export default Contact;
