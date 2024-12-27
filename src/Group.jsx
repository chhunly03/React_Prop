// import React from 'react';
// import './group.css';

// const Group = ({ value }) => {
//   return (
//     <div className="group-circle">
//       {value}
//     </div>
//   );
// };

// export default Group;


import React from 'react'
import './group.css'

export const Group = ({value}) => {
  return (
    <div className={`${value}`}>
        {value}
    </div>
  );
};


// import React from 'react';
// import './group.css';

// const Group = ({store}) => {
//     const stores = "Hello, World!";
//   return (
//     <div className="group-container">
//       <div>
//         {store(stores)}
//       </div>
//     </div>
//   );
// };

// export default Group;