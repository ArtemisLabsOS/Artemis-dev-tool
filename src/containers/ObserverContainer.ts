import * as React from 'react'
import HistoryOfPastQueries from "../components/HistoryOfPastQueries.ts";
import Query from "../components/Query.ts";
import GraphQLResponse from "../components/GraphQLResponse.ts";
import Schema from "../components/Schema.ts";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache.ts";
import GraphQLVisualizer from '../components/GraphQLVisualizer.ts';
// import ChartComponent from "../components/ChartComponent.jsx";

interface IProps {
    queries: object[],
    isToggle: (index: number) => void,
    history: string[],
    historyBtn: number,
    results: string[],
    visualizerStatus: boolean,
    schemaStatus: boolean,
    url: string,
    cacheStatus: boolean,
    getCache: () => void,
    cache: any,
}

const ObserverContainer: React.FC<IProps> = props => {

    return (
        <React.Fragment>
            <div id="observerContainers">
                <HistoryOfPastQueries queries={props.queries} isToggle={props.isToggle} history={props.history} />
                <Query queries={props.queries} historyBtn={props.historyBtn} />
                <GraphQLResponse results={props.results} historyBtn={props.historyBtn} />

            </div>
            {props.visualizerStatus ? <GraphQLVisualizer results={props.results} /> : null}
            {props.schemaStatus ? <Schema url={props.url} queries={props.queries} /> : null}
            {props.cacheStatus ? <ApolloGraphQLCache queries={props.queries} getCache={props.getCache} cache={props.cache} /> : null}
        </React.Fragment>
    )
}

export default ObserverContainer;
