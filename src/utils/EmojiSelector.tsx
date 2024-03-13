import React, { useState, useEffect } from "react";
import { emojis } from "./emojis";

interface Props {
  setter: (value: React.SetStateAction<string>) => void;
}

export default function EmojiSelector({ setter }: Props) {
  const [displayEmoji, setDisplayEmoji] = useState<string>(emojis[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (emoji: string) => {
    setter((old) => `${old} ${emoji}`);
    setIsOpen(false); // Close the selector after selecting an emoji
  };

  return (
    <div className="emoji-selector">
      <div className="emoji-display" onClick={() => setIsOpen(!isOpen)}>
        {displayEmoji}
      </div>
      {isOpen && (
        <div className="emoji-list grid grid-cols-6 md:grid-cols-8 lg:grid-cols-6">
          {emojis.map((emoji, index) => (
            <button
              key={index}
              className="emoji-item hover:scale-125 transition-transform ease-in-out duration-200 p-4"
              onClick={() => handleClick(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
