import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";
import { MarkdownInput } from "./components/MarkdownInput";
import { MarkdownResult } from "./components/MarkdownResult";
import EditContext from "./editContext";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  font-family: "Lato", sans-serif;
  margin-bottom: 30px;
  padding: 20px 0;
`;

const EditContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
`;

export default function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <EditContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Ardy Party's markdown editor</Title>
        <EditContainer>
          <MarkdownInput />
          <MarkdownResult />
        </EditContainer>
      </AppContainer>
    </EditContext.Provider>
  );
}
