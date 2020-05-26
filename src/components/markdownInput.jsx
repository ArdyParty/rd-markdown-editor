import React from "react";
import styled from "styled-componenets";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 12px;
  border-right: 2px solid rgba(20,20,20, 0.3);
  font-family: 'Lato', sans-serif;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
  font0family: "Lato", sans-serif;
  margin-bottom: 12px;
  padding: 10px 0;
  border-right: 2px solid rgba(20,20,20, 0.3);
`;

const InputArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 20px;
`;

export function MarkdownInput(props) {
  return 
  <Container>
    <Title> Input Text </Title>
    <InputArea />
  </Container>
}