import React, { useContext } from "react";
import styled from "styled-components";
import editContext from "../editContext";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  border-right: 2px solid rgba(20, 20, 20, 0.2);
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 12px;
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(20, 20, 20, 0.2);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: rgba(255,255,255,0.4);
  border-radius: 10px;
`;

export function MarkdownInput(props) {
  const { setMarkdownText } = useContext(editContext);

  const onInputChange = evt => {
    const newValue = evt.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea onChange={onInputChange} />
    </Container>
  );
}
