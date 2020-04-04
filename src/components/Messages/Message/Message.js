import React, { useState, useEffect } from "react";
import ReactEmoji from "react-emoji";
import Linkify from "react-linkify";

import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  const [sentByCurrentUser, setSentByCurrentUser] = useState(false);

  const trimmedName = name.trim().toLowerCase();

  useEffect(() => {
    if (user === trimmedName) {
      setSentByCurrentUser(true);
    }
  }, [user, trimmedName]);

  return (
    <>
      {sentByCurrentUser ? (
        <div className="messageContainer justifyEnd">
          <span className="sentText pr-10">{trimmedName}</span>
          <div className="messageBox backgroundBlue">
            <span className="messageText colorWhite">
              <Linkify>{ReactEmoji.emojify(text)}</Linkify>
            </span>
          </div>
        </div>
      ) : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <span className="messageText colorDark">
              <Linkify>{ReactEmoji.emojify(text)}</Linkify>
            </span>
          </div>
          <span className="sentText pl-10">{user}</span>
        </div>
      )}
    </>
  );
};

export default Message;
