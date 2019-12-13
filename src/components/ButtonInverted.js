import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const ButtonInverted = (props) => (
  <div>
    <Segment inverted>
      <Button inverted color='yellow' className="header-item item1" oncClick={() => props.visualizerToggle()}>Visualizer</Button>
     
      <Button inverted color='violet' className="header-item item2" onClick={()=> props.schemaToggle()}>
        SCHEMA
      </Button>

      <Button inverted color='teal' className="header-item item3" onClick={()=> props.cacheToggle()}>
        CACHE
      </Button>
    </Segment>
    
  
  </div>
)

export default ButtonInverted