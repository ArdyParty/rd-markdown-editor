import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import editContext from "../editContext";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(20, 20, 20, 0.2);
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 14px;
  background-color: rgba(255,255,255,0.4);
  border-radius: 10px;
`;

export function MarkdownResult(props) {
  const { markdownText } = useContext(editContext);

  return (
    <Container>
      <Title>Converted Text</Title>
      <ResultArea>
        <ReactMarkdown source={markdownText} />
      </ResultArea>
    </Container>
  );
}
