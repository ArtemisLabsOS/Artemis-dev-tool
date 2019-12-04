import React, { useEffect, useState } from "react";
import HistoryOfPastQueries from "../components/HistoryOfPastQueries.jsx";
import Query2 from "../components/Query2.jsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx";
import Schema from "../components/Schema.jsx";

//<ApolloProvider client={client} > </ApolloProvider>

// import { ApolloProvider } from "react-apollo-hooks";
// import {  useQuery } from "@apollo/react-hooks"
// import gql from 'graphql-tag';

// import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
// import { ApolloClient } from "apollo-client";


const ObserverContainers = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  const [history, recordHistory] = useState([]);
  const [historyBtn, historyBtnToggle] = useState(0);
  const [url, updateUrl] = useState("");
  const [cache, updateCache] = useState({})

  
    // const httpLink = new HttpLink({
    //   uri: "https://api.spacex.land/graphql/"
    // });
    // console.log("this is the link");
    // console.log(httpLink);
    
    // const client = new ApolloClient({
    //   link: httpLink,
    //   cache: new InMemoryCache()
    // });
    // console.log("this is client");
    // console.log(client);

  function isToggle(index) {
    historyBtnToggle(index);
    msgToBackground(
      "contentScript",
      "rerenderDOM",
      response => console.log(response),
      history[index]
    );
  }

  useEffect(() => {
    historyBtnToggle(queries.length - 1);
  }, [queries]);

  useEffect(() => {


    // injectStyles();

    //   client.cache.writeData({data: "data"})
    chrome.devtools.network.onRequestFinished.addListener(httpReq => {
      
      if (httpReq.request.postData) {
        updateUrl(httpReq.request.url);
        httpReq.getContent(res => {
          updateResults(oldResults => [...oldResults, res]);
        });
        let requestQuery;
        if (IsJsonString(httpReq.request.postData.text)) {
          requestQuery = JSON.parse(httpReq.request.postData.text).query;
        } else {
          requestQuery = httpReq.request.postData.text;
        }
        msgToBackground("contentScript", "getDOM", response =>
          recordHistory(oldHistory => [...oldHistory, response.msg])
        );
        updateQueries(oldQueries => [
          ...oldQueries,
          {
            time: httpReq.time,
            outgoingQueries: requestQuery
          }
        ]);
      }
    });
  }, []);

  console.log("this is history", history);
  return (
    <div id="observerContainers">
      <HistoryOfPastQueries queries={queries} isToggle={isToggle} />
      <Query2 queries={queries} historyBtn={historyBtn} />
      <GraphQLResponse results={results} historyBtn={historyBtn} />
      <Schema results={results} historyBtn={historyBtn} url={url} />
      <button id="cache" onClick={getCache}> Get Cache  </button>
    </div>
  );
};

const msgToBackground = function(type, msg, callback, newBody) {
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage(
      {
        type,
        msg,
        newBody
      },
      function(response) {
        callback(response);
      }
    );
  }
};

const getCache=() =>{
  msgToBackground("contentScript", "getCache", response => {
    console.log(response)
    msgToBackground("contentScript", "retrieveCache", response => {console.log(response)} );
  });
}

const IsJsonString = function(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export default ObserverContainers;
