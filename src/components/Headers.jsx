import React, { useState, useEffect } from 'react';

const Headers = (props) => {
  const [status, updateStatus] = useState('query');

  useEffect(() => {
    if(status === 'schema') updateStatus('query');
    else if(status === 'cache') updateStatus('response');
    else if(status === 'query') updateStatus('schema');
    else if(status === 'response') updateStatus('cache');
  },[status])

  // function schemaToggle() {
    
  // }

  // function cacheToggle() {

  // }
  
  return (
    <div>
      <div onClick={()=> schemaToggle()}></div>
      <div onClick={()=> cacheToggle()}></div>
    </div>
  )
}

export default Headers;