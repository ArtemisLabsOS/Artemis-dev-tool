import isJsonString from '../Utility/isJsonString'

const isValidGraphQL:(str:any) => boolean = str => {
  if(isJsonString(str)){
    console.log(str)
    const queryObj = JSON.parse(str);
    if(typeof queryObj === 'object'){
      if(queryObj.query || queryObj.variables) return true;
    }
  }
  return false; 
}

const isValidRequest: (req:any) => boolean = req => {
  if(req.request.postData)
    console.log(req);
  //if(req.request.url && req.request.url.indexOf('graphql') > -1) return true;
  if(req.request.postData && isValidGraphQL(req.request.postData)) return true;
  if(req.request.postData.text && isValidGraphQL(req.request.postData.text)) return true;

  return false;
}

export default isValidRequest;