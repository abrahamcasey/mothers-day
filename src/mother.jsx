import React, { useState } from 'react';


const MothersDay = () => {
  const messages = [
    "You're the best mom anyone could ask for!",
    "Your kindness and patience inspires us every day.",
    "We are so grateful to have you as our mother.",
    "Thank you for always being there for us.",
  ];

  const [message, setMessage] = useState(
    "Thank you for being the most amazing mom in the world. Your love and support mean everything to me."
  );

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <div className="card">
      <h1>Happy Mother's Day!</h1>
      <p>{message}</p>
      <button onClick={changeMessage}>Click for a Surprise</button>
    </div>
  );
};

export default MothersDay;