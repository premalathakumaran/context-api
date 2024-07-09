

// import React,{useState} from 'react'

// function Card({cart,setCart}) {
//   let [toggle,setToggle]=useState(true)
//   return <div className="col mb-5">
//   <div className="card h-100">
//       <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
//       {/* <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /> */}
//       <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />
//       <div className="card-body p-4">
//           <div className="text-center">
//               <h5 className="fw-bolder">Sale Item</h5>
//               <span className="text-muted text-decoration-line-through">$50.00</span>
//               $25.00
//           </div>
//       </div>
//       <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//           <div className="text-center">
//             {
//             toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
//               setCart(cart+1) 
//               setToggle(false)
//               }}>
//               Add to Cart
//             </button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
//               setCart(cart-1) 
//               setToggle(true)
//               }}>
//               Remove from Cart
//             </button>
//             }
//       </div>
//       </div>
//   </div>
// </div>
// }

// export default Card

import React, { useState } from 'react';

function Card({ cart, setCart, imgSrc }) {
  let [toggle, setToggle] = useState(true);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
        <img className="card-img-top" src={imgSrc} alt="Sale Item" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">Sale Item</h5>
            <span className="text-muted text-decoration-line-through">$50.00</span>
            $25.00
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {/* {toggle ? (
              <button className="btn btn-outline-dark mt-auto" onClick={() => {
                setCart(cart + 1);
                setToggle(false);
              }}>
                Add to Cart
              </button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={() => {
                setCart(cart - 1);
                setToggle(true);
              }}>
                Remove from Cart
              </button>
            )} */}

             {toggle ? (
              <button
                className="btn btn-outline-dark mt-auto btn-add"
                onClick={() => {
                  setCart(cart + 1);
                  setToggle(false);
                }}
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="btn btn-outline-dark mt-auto btn-remove"
                onClick={() => {
                  setCart(cart - 1);
                  setToggle(true);
                }}
              >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
