// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {

  const EnterArray = ['안녕' , 'ㅎㅇ' , '해윙' , '앵냥' , '반갑습니다' , 'hello' , 'hi']

  const ClubJoin = ['가입' , '입부' , '들어' , '들다' , 'Enter' ]

  const parse = (message) => {
    if (EnterArray.some(keyword => message.includes(keyword))) {
      actions.handleHello();
    }
    else if (message.includes(' ')) {
      actions.noSentence();
    }
    else if (message.includes('dog')) {
      actions.handleDog();
    }
    else {
      actions.handleError();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;