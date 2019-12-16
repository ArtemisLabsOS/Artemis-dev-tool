const IsJsonString = function (str: string) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
};

export default IsJsonString;