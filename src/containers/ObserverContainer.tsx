import * as React from 'react'
import HistoryOfPastQueries from "../components/HistoryOfPastQueries.ts";
import Query from "../components/Query.tsx";
import GraphQLResponse from "../components/GraphQLResponse.tsx";
import Schema from "../components/Schema.tsx";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache.tsx";
import GraphQLVisualizer from '../components/GraphQLVisualizer.tsx';
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
