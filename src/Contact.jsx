import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

const login = (
  <form action="#" onSubmit={handleSubmit}>
    <input type="password" placeholder="password"/>
    <input type="submit"/>
  </form>);

const contactInfo = (
  <ul>
    <li>client@example.com</li>
    <li>555.555.5555</li>
  </ul>
);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  const heading = authorized ? "Contact" : "Enter the Password"

    return (
    <div id="authorization">
      <h1>{heading}</h1>
      {authorized ? contactInfo : login}
    </div>);
}

export default Contact;