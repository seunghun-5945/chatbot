// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './DogPicture';

const botName = 'P&N봇';

const config = {
  initialMessages: [createChatBotMessage(`안녕하세요! 무엇을 도와 드릴까요?`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#5ccc9d',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;