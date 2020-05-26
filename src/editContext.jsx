import React from "react";

const defaultContext = {
  markdownText: "WRITE ON ME, I LIKE IT",
  setMarkdownText: () => {}
};

export default React.createContext(defaultContext);
