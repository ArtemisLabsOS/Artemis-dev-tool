import React from 'react';
import { buildClientSchema, printSchema } from 'graphql';
import { GraphqlCodeBlock } from 'graphql-syntax-highlighter-react';

import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';


const GraphQLSchema = ({ schema }) => {

  if (schema !== 'GraphQL schema not available.') {

    let schemaObj = buildClientSchema(JSON.parse(schema));
    let schemaSDL = printSchema(schemaObj);


    //https://api.spacex.land/graphql/
    const link = new HttpLink({ uri: 'http://api.githunt.com/graphql', fetch });

    const link = setContext((request, previousContext) => ({
      headers: {
        'Authorization': `Bearer ${previousContext.graphqlContext.authKey}`,
      }
    })).concat(http);

    return (
      <div id='graphql-schema'>
        <div>
          <h2 className='graphql-heading'>Schema:</h2>
          <span className='graphql-span'>
            <GraphqlCodeBlock
              className='GraphqlCodeBlock'
              queryBody={schemaSDL}
            />
          </span>
        </div>
      </div>
    )

  } else {

    return (
      <div id='graphql'>
        <div>
          <p className='graphql-p'>
            No GraphQL data available.
          </p>
        </div>
      </div>
    )
  }
}



export default async () => {
  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link,
    
  });

  return executableSchema
}
    
}

export default GraphQLSchema;


// import { createApolloFetch } from 'apollo-fetch';

// const fetcher = createApolloFetch({ uri: 'http://api.githunt.com/graphql'});

// export const createSchema =  async () => {
//   const schema = makeRemoteExecutableSchema({
//     schema: await introspectSchema(fetcher),
//     fetcher,
//   });
//   return schema
// }



