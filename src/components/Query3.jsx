import React from "react";
// import { GraphqlCodeBlock } from 'graphql-syntax-highlighter-react';

const Query3 = props => {
  let queriesList = [];
  for (let i = 0; i < props.queries.length; i++) {
    // queriesList.push(<GraphqlCodeBlock queries={queriesList[i]}/>);
  }

  return (
    <div>
      <h2>Query:</h2>
      <span>{queriesList[props.historyBtn]}</span>
    </div>
  );
};

export default Query3;