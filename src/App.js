import React from "react";
import style from "styled-components"
import Chatbot from "react-chatbot-kit"
import config from "./configs/config.js";
import MessageParser from "./configs/MessageParser.js";
import ActionProvider from "./configs/ActionProvider.js";
import 'react-chatbot-kit/build/main.css'

const Container = style.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightsalmon;
`;


const App = () => {
  return (
    <Container>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </Container>
  );
}

export default App;