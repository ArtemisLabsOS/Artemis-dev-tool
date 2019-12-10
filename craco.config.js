{
    "scripts": {
      "start": "craco start",
      "build": "craco build",
      "test": "craco test",
      "eject": "craco eject"
    }
  }
  module.exports = {
    plugins: [{ plugin: require('@semantic-ui-react/craco-less') }],
  }