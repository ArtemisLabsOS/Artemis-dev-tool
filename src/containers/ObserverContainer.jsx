import React, { useEffect, useState } from "react";
import HistoryOfPastQueries from "../components/HistoryOfPastQueries.jsx";
import Query from "../components/Query.jsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx";
import Schema from "../components/Schema.jsx";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache.jsx";
import DropdownMenu from "../components/DropdownMenu.jsx";

const ObserverContainers = props => {
  // const [queries, updateQueries] = useState([]);
  // const [results, updateResults] = useState([]);
  // const [history, recordHistory] = useState([]);
  // const [historyBtn, historyBtnToggle] = useState(0);
  // const [url, updateUrl] = useState("");
  // const [cache, updateCache] = useState({});

  // const getCache = () => {
  //   msgToBackground("contentScript", "getCache", response => {
  //     console.log(response)
  //     msgToBackground("contentScript", "retrieveCache", response => { updateCache(response) });
  //   });
  // }

  // function isToggle(index) {
  //   historyBtnToggle(index);
  //   msgToBackground(
  //     "contentScript",
  //     "rerenderDOM",
  //     response => console.log(response),
  //     history[index]
  //   );
  // }

  // useEffect(() => {
  //   historyBtnToggle(queries.length - 1);
  // }, [queries]);

  // useEffect(() => {
  //   chrome.devtools.network.onRequestFinished.addListener(httpReq => {

  //     if (httpReq.request.postData) {
  //       updateUrl(httpReq.request.url);
  //       httpReq.getContent(res => {
  //         updateResults(oldResults => [...oldResults, res]);
  //       });
  //       let requestQuery;
  //       if (IsJsonString(httpReq.request.postData.text)) {
  //         requestQuery = JSON.parse(httpReq.request.postData.text).query;
  //       } else {
  //         requestQuery = httpReq.request.postData.text;
  //       }
  //       msgToBackground("contentScript", "getDOM", response =>
  //         recordHistory(oldHistory => [...oldHistory, response.msg])
  //       );
  //       updateQueries(oldQueries => [
  //         ...oldQueries,
  //         {
  //           time: httpReq.time,
  //           outgoingQueries: requestQuery
  //         }
  //       ]);
  //     }
  //   });
  // }, []);

  return (
    <React.Fragment>
      <div id="observerContainers">
        <HistoryOfPastQueries queries={queries} isToggle={isToggle} history={history}/>
        <Query queries={props.queries} historyBtn={props.historyBtn} />
        <GraphQLResponse results={props.results} historyBtn={props.historyBtn} />
        {props.schemaStatus ? <Schema historyBtn={props.historyBtn} url={props.url} queries={props.queries} /> : null}
        {props.cacheStatus ? <ApolloGraphQLCache historyBtn={props.historyBtn} url={props.url} queries={props.queries} getCache={props.getCache} cache={props.cache} /> : null}
      </div>
    </React.Fragment>
  );
};

// const msgToBackground = function (type, msg, callback, newBody) {
//   if (chrome && chrome.runtime) {
//     chrome.runtime.sendMessage(
//       {
//         type,
//         msg,
//         newBody
//       },
//       function (response) {
//         callback(response);
//       }
//     );
//   }
// };

// const IsJsonString = function (str) {
//   try {
//     JSON.parse(str);
//   } catch (e) {
//     return false;
//   }
//   return true;
// };

export default ObserverContainers;