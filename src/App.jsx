import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;



// ! Online Market
// import React from 'react'

// const App = () => {
//   return (
//     <div className="container">
//       <div className="flex justify-between items-center  py-3">
//         <a className="text-2xl font-bold text-orange-600" href="">Online Market</a>
//         <div className="flex items-center gap-5">
//           <a href="#" className="text-lg text-orange-600 font-medium hover:underline transition-all">About</a>
//           <a href="#" className="text-lg text-orange-600 font-medium hover:underline transition-all">Contact</a>
//         </div>
//       </div>
//       <div className="pr-5 pl-5">
//         <h1 className="text-6xl text-center text-orange-600 font-bold">Products</h1>
//         <ul className="flex flex-wrap gap-10 mt-10">
//           <li className=" border-2 border-orange-400 shadow-lg shadow-stone-500 p-5 rounded-lg">
//             <img src="" height={200} width={150} alt="" className="border border-orange-600 rounded-md" />
//             <h4 className="text-[22px] text-orange-600 text-center font-semibold mt-1">Name</h4>
//             <p className="text-[14px] text-orange-600 opacity-70 line-through text-center mt-2">14555</p>
//             <p className="text-[18px] text-orange-600 text-center">12000</p>
//           </li>
//           <li className=" border-2 border-orange-400 shadow-lg shadow-stone-500 p-5 rounded-lg">
//             <img src="" height={200} width={150} alt="" className="border border-orange-600 rounded-md" />
//             <h4 className="text-[22px] text-orange-600 text-center font-semibold mt-1">Name</h4>
//             <p className="text-[14px] text-orange-600 opacity-70 line-through text-center mt-2">14555</p>
//             <p className="text-[18px] text-orange-600 text-center">12000</p>
//           </li>
//           <li className=" border-2 border-orange-400 shadow-lg shadow-stone-500 p-5 rounded-lg">
//             <img src="" height={200} width={150} alt="" className="border border-orange-600 rounded-md" />
//             <h4 className="text-[22px] text-orange-600 text-center font-semibold mt-1">Name</h4>
//             <p className="text-[14px] text-orange-600 opacity-70 line-through text-center mt-2">14555</p>
//             <p className="text-[18px] text-orange-600 text-center">12000</p>
//           </li>
//           <li className=" border-2 border-orange-400 shadow-lg shadow-stone-500 p-5 rounded-lg">
//             <img src="" height={200} width={150} alt="" className="border border-orange-600 rounded-md" />
//             <h4 className="text-[22px] text-orange-600 text-center font-semibold mt-1">Name</h4>
//             <p className="text-[14px] text-orange-600 opacity-70 line-through text-center mt-2">14555</p>
//             <p className="text-[18px] text-orange-600 text-center">12000</p>
//           </li>
//           <li className=" border-2 border-orange-400 shadow-lg shadow-stone-500 p-5 rounded-lg">
//             <img src="" height={200} width={150} alt="" className="border border-orange-600 rounded-md" />
//             <h4 className="text-[22px] text-orange-600 text-center font-semibold mt-1">Name</h4>
//             <p className="text-[14px] text-orange-600 opacity-70 line-through text-center mt-2">14555</p>
//             <p className="text-[18px] text-orange-600 text-center">12000</p>
//           </li>
//           <li className=" border-2 border-orange-400 shadow-lg shadow-stone-500 p-5 rounded-lg">
//             <img src="" height={200} width={150} alt="" className="border border-orange-600 rounded-md" />
//             <h4 className="text-[22px] text-orange-600 text-center font-semibold mt-1">Name</h4>
//             <p className="text-[14px] text-orange-600 opacity-70 line-through text-center mt-2">14555</p>
//             <p className="text-[18px] text-orange-600 text-center">12000</p>
//           </li>
//           <li className=" border-2 border-orange-400 shadow-lg shadow-stone-500 p-5 rounded-lg">
//             <img src="" height={200} width={150} alt="" className="border border-orange-600 rounded-md" />
//             <h4 className="text-[22px] text-orange-600 text-center font-semibold mt-1">Name</h4>
//             <p className="text-[14px] text-orange-600 opacity-70 line-through text-center mt-2">14555</p>
//             <p className="text-[18px] text-orange-600 text-center">12000</p>
//           </li>
//           <li className=" border-2 border-orange-400 shadow-lg shadow-stone-500 p-5 rounded-lg">
//             <img src="" height={200} width={150} alt="" className="border border-orange-600 rounded-md" />
//             <h4 className="text-[22px] text-orange-600 text-center font-semibold mt-1">Name</h4>
//             <p className="text-[14px] text-orange-600 opacity-70 line-through text-center mt-2">14555</p>
//             <p className="text-[18px] text-orange-600 text-center">12000</p>
//           </li>
//           <li className=" border-2 border-orange-400 shadow-lg shadow-stone-500 p-5 rounded-lg">
//             <img src="" height={200} width={150} alt="" className="border border-orange-600 rounded-md" />
//             <h4 className="text-[22px] text-orange-600 text-center font-semibold mt-1">Name</h4>
//             <p className="text-[14px] text-orange-600 opacity-70 line-through text-center mt-2">14555</p>
//             <p className="text-[18px] text-orange-600 text-center">12000</p>
//           </li>
//           <li className=" border-2 border-orange-400 shadow-lg shadow-stone-500 p-5 rounded-lg">
//             <img src="" height={200} width={150} alt="" className="border border-orange-600 rounded-md" />
//             <h4 className="text-[22px] text-orange-600 text-center font-semibold mt-1">Name</h4>
//             <p className="text-[14px] text-orange-600 opacity-70 line-through text-center mt-2">14555</p>
//             <p className="text-[18px] text-orange-600 text-center">12000</p>
//           </li>

//         </ul>
//       </div>
//     </div>
//   )
// }

// export default App;