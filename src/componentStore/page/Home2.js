import React, { useState } from "react";
import { Add } from "../store2/CartSlice";
import { useDispatch, useSelector } from "react-redux";

function Home2() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const [form, setForm] = useState();

  const handelData = () => {
    dispatch(Add());
  };

  return (
    <div>
      <div>
        {data.map((value, key) => {
          return (
            <>
            <h2>home dattaa</h2>
              <input
                type="text"
                placeholder="add data"
                name="username"
                value={form.username}
                onClick={(e) => setForm(e.target.value)}
              />
              <button type="submit" onClick={handelData}>
                add data
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home2;
