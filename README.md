# Artemis-dev-tool
[![Known Vulnerabilities](https://snyk.io/test/github/ArtemisLabsLLP/Artemis-dev-tool/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ArtemisLabsLLP/Artemis-dev-tool?targetFile=package.json) ![Dependencies](https://david-dm.org/ArtemisLabsLLP/Artemis-dev-tool.svg)

Project Artemis is an Open Sourced client developer tool for single endpoint testing of GraphQL queries (w/wo Apollo Client). Query endpoint testing and cache management can be done in real time for instant engineering feedback without the need for backend resolvers.

Debug and test query mutations and calls using introspection

The web based extension is best used for React and Express products/applications in development mode, and is available at the chrome store.

## Install
### 1. Chrome store
- Go to [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd);
Simply go to the chrome web store and download:
- Add to Chrome

### 2. Working with actual code base
- Fork the repo to your repositories
- build the project 
```bash
npm install
npm run build
```
- Open chrome and direct to chrome://extension
- Enable developer mode 
- click LOAD UNPACKED and upload build folder 

## How to use
Open the application that you want to inspect with chrome and open chrome's inspector window. Artemis will appear and will render once a GraphQL query is detected from the site. If a website or hosted site you are currently testing contains Apollo Client, you should be able to see its inMemory cache. Otherwise, it will display empty object.

## Core features
- Display schema, query, and GraphQL response with endpoint detection

![observer demo](gifs/observer.gif)
- Query caching and component storage- View normalized Apollo Client cache in JSON Format

![cache demo](gifs/cache22.gif)
- Query response Snapshot feature

- View Response and Query Visualizer tree in inspection window

![tree demo](gifs/tree1turq.gif)

 

Project Artemis is sitll in Beta, a subset project of OS-Labs.

All rights Reserved Artemis Labs LLP located in Venice, CA is actively looking for contributors and engineers to join the team. Send a pull request!

Technologies used: React Hooks, Typescript, GraphQL, D3,
Jest, Enzyme, and React component library Testing

## Contributing
We encourage you to submit issues for any bugs or ideas for enhancements. Also feel free to fork this repo and submit pull requests to contribute as well. 



Artemis Labs LLP located in Venice, CA is actively looking for contributors and engineers to join the team. Please post issues directly to Github.

License This project is protected under the MIT License.

Artemis Labs v1.7

All rights Reserved Artemis Labs

