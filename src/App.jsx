import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";
import { MarkdownInput } from "./components/markdownInput";

const AppContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
  font0family: "Lato", sans-serif;
  margin-bottom: 12px;
  padding: 10px 0;
  border-right: 2px solid rgba(20,20,20, 0.3);
`;

const EditorContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
`;

export default function App() {
  return (
    <AppContainer>
      <Title>rdparty's Markdown Editor</Title>
      <EditorContainer>
        <MarkdownInput />
      </EditorContainer>
    </AppContainer>
  );
}
