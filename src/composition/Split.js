import React from 'react'
import './Split.css';

function Split(props) {
  const combinedClassName = `split ${props.className}`;
  const newStyles = { flex: props.flexBasis };
  return (
    <div
      className={combinedClassName}
      style={newStyles}
    >
      {props.children}
    </div>
  );
}

export default Split;

/* Note 
When we make custom components, 
they won't use any className props
 their parent gives them unless 
 we explicitly add that feature to 
 our custom component.

Inside the Split component, add 
code to read the props and create 
a new, combined className. The 
combinedClassName includes the 
hardcoded split class and the 
className passed in as a prop 
(either right or left in this case).
*/