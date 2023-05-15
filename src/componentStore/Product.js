import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Cart from "./page/Cart";
import { add } from "./store/CartSlice";
import { fetchProducts, STATUSES } from "./store/ProductSlice";

const Product = () => {
  const { data: products, status } = useSelector((state) => state.product);
  const item = useSelector((state) => state.Cart);

  const [success, setSuccess] = useState(true);
  const [searchTable, setSearchTable] = useState('');


  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(fetchProducts());

   },[] );



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
    <div>
 
   <div>
   <form>
  <div class="col-4 mb-3">
  
    <input type="email" class="form-control"  placeholder="Search product" onChange={(e)=>setSearchTable(e.target.value)} />
   
  </div>
 
</form>
   </div>
   <div className="productsWrapper">
      {products && products.filter((item)=>{
                        return searchTable.toLocaleLowerCase() === ""? item :item.title.toLowerCase().includes(searchTable)
                      }).map((products) => {
        console.log('firstefwfwefwe', products)
        return (
          <>
            <div className="card w-30" key={products.id}>
              <img src={products["image"]}  width="100" height={100} alt="" className=" " />
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
    </div>
  );
};

export default Product;
