import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

class CustomGraphiQL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetcher: this.props.fetcher,query: '',
      variables: '',
      response: '',
      schema: undefined,
    }
  }
  handleClickPrettifyButton(event) {
    
    const currentText = document.getElementById('text').innerText;
    console.log(currentText);
    const { parse, print } = require('graphql');
    const prettyText = print(parse(currentText));
    editor.setValue(prettyText);
  }

  render() {
    return (
      <React.Fragment>
      <input id ='text'></input>
      <GraphiQL ref={c => { this.graphiql = c; }} {...this.state}>
        <GraphiQL.Logo>
         TEST TEST
        </GraphiQL.Logo>
        <GraphiQL.Toolbar>

        <GraphiQL.Button
            onClick={this.handleClickPrettifyButton}
            label="Prettify"
            title="Prettify Query (Shift-Ctrl-P)"
          />
          
        </GraphiQL.Toolbar>
      </GraphiQL>
      </React.Fragment>
      // <div>TESTING</div>
    )
  }
}

export default CustomGraphiQL;