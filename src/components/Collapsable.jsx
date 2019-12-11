import React, {  useEffect , useState} from "react";
 const Collapsible = props => {


<Collapsible
  accordion
  popout
>
  <CollapsibleItem
    expanded={false}
    header="Better safe than sorry. That's my motto."
    icon={<Icon>filter_drama</Icon>}
    node="div"
  >
    Better safe than sorry. That's my motto.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Yeah, you do seem to have a little 'shit creek' action going."
    icon={<Icon>place</Icon>}
    node="div"
  >
    Yeah, you do seem to have a little 'shit creek' action going.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
    icon={<Icon>whatshot</Icon>}
    node="div"
  >
    You know, FYI, you can buy a paddle. Did you not plan for this contingency?
  </CollapsibleItem>
</Collapsible>



 }

 export default Colllapsible;