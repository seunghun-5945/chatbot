// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('반갑습니다! 무엇을 도와드릴까요?'); //  hello chatbot 이라고 입력했을 시

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleError = () => {
    const botMessage = createChatBotMessage("다른 응답을 부탁드립니다!"); //  잘못된 응답을 했을 시

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const noSentence = () => {
    const botMessage = createChatBotMessage("메세지를 입력 해 주세요"); //  받은 메세지가 공백일떄
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello, handleError
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;