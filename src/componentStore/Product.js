import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Cart from "./page/Cart";
import { add } from "./store/CartSlice";
import { fetchProducts, STATUSES } from "./store/ProductSlice";

const Product = () => {
  const { data: products, status } = useSelector((state) => state.product);
  const item = useSelector((state) => state.Cart);
  

  const [success, setSuccess] = useState(true);
  //  const [products, setProducts] = useState([]);
  // console.log("object ==================:>> ", produc
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
   },[] );

  // function hadleDspachCall(){
  //   dispatch(fetchProducts());
  // }

  const handleAdd = (products) => {
    dispatch(add(products));
  };

  if (status === STATUSES.LOADING) {
    return <h1>LOADING...</h1>;
  }
  
  if (status === STATUSES.error) {
    return <h1>Somthng Worng</h1>;
  }

  return (
    <div className="productsWrapper">
    
      {products.map((products) => {
        return (
          <>
            <div className="card" key={products.id}>
              <img src={products["image"]} alt="" />
              <h4>{products["title"]} </h4>
              <h5>{products["price"]} </h5>

            
              <button className="btn" onClick={() => handleAdd(products)}>
               {success? "Add to cart" : <h2> {item.length} </h2>}

              </button> 
              
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Product;
