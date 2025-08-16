import React, { useState } from "react";
import "./ChatBot.css"; // import the CSS file

const ChatBox: React.FC = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`chat-box ${focused ? "focused" : ""}`}>
      <span className="chat-label">¿En qué te ayudo?</span>

      <textarea
        className="chat-input"
        placeholder="Escribe aquí..."
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default ChatBox;
