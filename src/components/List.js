// import React from 'react';
// import Info from './Info';
// import Search from './Search';

// const List = ({ filteredValute }) => {
//     return (
//         <div>

//             <div>
//                 {Object.keys(filteredValute).map(key => {
//                     return (
//                         <div key={filteredValute[key].ID}>
//                             <hr />
//                             <Info
//                                 name={filteredValute[key].Name}
//                                 charCode={filteredValute[key].CharCode}
//                                 nominal={filteredValute[key].Nominal}
//                                 value={filteredValute[key].Value.toFixed(2)}
//                             //  {/* {Math.trunc(filteredValute[key].Value)} руб. */}
//                             />
//                         </div>
//                     )
//                 })}

//             </div>
//             {/* {val} */}

//         </div>
//     );
// };

// export default List;