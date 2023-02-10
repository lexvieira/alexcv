import React from 'react';

interface MessageProps {
  chooseMessage: (params: any) => any;
}

const MessageParent = () => {
  const [message, setMessage] = React.useState("Hello World");
  const chooseMessage = (message:string) => {
    setMessage(message);
  };
  return (
    <div>
      <h1>{message}</h1>
      <MessageChild chooseMessage={chooseMessage} />
    </div>
  );
};
const MessageChild = ({chooseMessage}:MessageProps) => {
  let msg = 'Goodbye';
  return (
    <div>
      <button onClick={() => chooseMessage(msg)}>Change    Message</button>
    </div>
  );
};

export default MessageParent;