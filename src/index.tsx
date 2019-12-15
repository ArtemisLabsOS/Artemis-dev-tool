import * as React from "react";
import ObserverContainer from "./containers/ObserverContainer";
import Headers from './containers/Headers';
import Home from './components/Home';
import msgToBackground from './Utility/msgToBackground'
import "./stylesheets/style.scss";



const App: React.FC = () => {
    const [schemaStatus, updateSchemaStatus] = React.useState<boolean>(false);
    const [cacheStatus, updateCacheStatus] = React.useState<boolean>(false);
    const [queries, updateQueries] = React.useState<Array<object>>([]);
    const [results, updateResults] = React.useState<Array<string>>([]);
    const [history, recordHistory] = React.useState<Array<string>>([]);
    const [historyBtn, historyBtnToggle] = React.useState<number>(0);
    const [url, updateUrl] = React.useState<string>("");
    const [cache, updateCache] = React.useState<object>({});
    const [visualizerStatus, updateVisualizer] = React.useState<boolean>(false);

    React.useEffect((): void => {
        historyBtnToggle(queries.length - 1);
    }, [queries]);

    React.useEffect((): void => {
        chrome.tabs.executeScript({
            file: "contentScript.js"
        });
        chrome.devtools.network.onRequestFinished.addListener((httpReq: any) => {

            if (httpReq.request.postData) {
                updateUrl(httpReq.request.url);
                httpReq.getContent((res: string) => {
                    updateResults(oldResults => [...oldResults, res]);
                });
                let requestQuery: any;
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

    const schemaToggle = (): void => {
        updateSchemaStatus(!schemaStatus);
        updateCacheStatus(false);
        updateVisualizer(false);
    }

    const cacheToggle = (): void => {
        updateCacheStatus(!cacheStatus);
        updateSchemaStatus(false);
        updateVisualizer(false);
    }

    const visualizerToggle = (): void => {
        updateVisualizer(!visualizerStatus);
        updateCacheStatus(false);
        updateSchemaStatus(false);
    }

    const getCache = (): void => {
        msgToBackground("contentScript", "getCache", response => {
            console.log(response)
            msgToBackground("contentScript", "retrieveCache", response => { updateCache(response) });
        });
    }

    function isToggle(index: number) {
        historyBtnToggle(index);
    }

    return (
        <React.Fragment>
            {queries.length === 0 ? <Home /> : <Headers schemaToggle={schemaToggle} cacheToggle={cacheToggle} visualizerToggle={visualizerToggle} />}
            {queries.length === 0 ? null : <ObserverContainer queries={queries} isToggle={isToggle} historyBtn={historyBtn} results={results} url={url} schemaStatus={schemaStatus} cacheStatus={cacheStatus} getCache={getCache} cache={cache} history={history} visualizerStatus={visualizerStatus} />}
        </React.Fragment>
    );
};

const IsJsonString = function (str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

export default App;