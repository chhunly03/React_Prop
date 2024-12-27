// import React from 'react';
// import Group from './Group';

// const App = () => {
//   return (
//     <div>
//       <h1>Group Component Example</h1>
//       <Group value="Hello, World!" />
//       <Group value="React Rocks!" />
//       <Group value="Functional Component" />
//     </div>
//   );
// };

// export default App; 

import { Group } from './Group'

export default function App() {
  return (
    <div>
      <Group value={"morning"}/>
      <Group value={"afternoon"}/>
      <Group value={"night"}/>
    </div>
  )
}


// import React from 'react';
// import Group from './Group';

// const App = () => {
//   const handle = (store) => {
//     return (
//       <div>
//         {store}
//       </div>
//     );
//   }
//   return (
//     <div>
//       <h1>Group Component with Corner Phrases</h1>
//       <Group store={handle}/>  
//     </div>
//   );
// };
// export default App;