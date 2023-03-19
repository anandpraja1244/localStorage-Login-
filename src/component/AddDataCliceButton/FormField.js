// import React, { useState } from "react";

// function FormField() {
//   const [formData, setFormData] = useState("");
//   const [newData, setNewData] = useState("");
 
//   const [data, setData] = useState([]);
//   // console.log('object :sssss>> ', formData);
//   const handelOnChange = (e) => {
    
//     setFormData(e.target.value);
   
//   };


//   const handelButton = (e) => {
//     e.preventDefault();

//     setData([...data, formData]);
//     setFormData("");
//   };

//   const deleteData = (ind) => {
//     const removeItem = data.filter((todo, id) => {
//       console.log("object :>> ", id);
//       return id !== ind;
//     });
//     setData(removeItem);
//   };
//   const updateData = (val, ind) => {
//     setNewData(val, ind);
   
//     console.log("object :>> ", val, ind);
//   };

//   // const handelOnChangenew = () => {};
//   const updateDataSub = (e) => {
//     e.preventDefault();
//     // setFormData(newData)
//   { data.map((val, i) =>{
// console.log('object :>> ', val);
//     // if (val.id === newData.i) {
//     //   return {
//     //              formData
//     //   };
//     // } 

//   });
// } 
//   // setData(newVal)
       
//   };

//   return (
//     <div>
//       <form onSubmit={handelButton}>
//         <input
//           type="text"
//           placeholder="Enter here..."
//           name="name"
//           onChange={handelOnChange}
//         />
//         <button type="submit"> Add </button>
//       </form>
//       <div>
//         {data.map((val, ind) => {
//           return (
//             <>
//               <li>
//                 {val}
//                 <button
//                   type="submit"
//                   className="btn btn-danger"
//                   onClick={() => deleteData(ind)}
//                 >
//                   delete
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn btn-danger"
//                   onClick={() => updateData(val, ind)}
//                 >
//                   update
//                 </button>
//               </li>
//             </>
//           );
//         })}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter here..."
//           value={newData}
//           onChange={(e) => setNewData(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="btn btn-danger"
//           onClick={updateDataSub}
//         >
//           subNew
//         </button>
//       </div>
//     </div>
//   );
// }

// export default FormField;
