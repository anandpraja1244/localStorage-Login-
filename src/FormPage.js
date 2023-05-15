import React, { useState, useEffect } from "react";

function FormPage() {
  const [formSelect, setFormSelect] = useState("");
  
  const [total, settotal] = useState("");

  const [data, setData] = useState([]);
  // console.log('object  data=== :>> ', data);
  const [priceSelect, setPriceSelect] = useState("");
  useEffect(() => {
    let sum = 0;
    data.map((val) => (sum = sum + val.price));
    settotal(sum);
  }, [data]);

  const handleaddBook = (e) => {
    e.preventDefault();
    // if (formSelect === "") return alert("Please select a book");
    // const ax = data.filter((val) => val.bookName === formSelect);
    // if(ax.length >0) return alert(formSelect + " aleady exstance");
    const obj = {
      bookName:formSelect,
      price:null,
    };
    setData([...data, obj]);
    setFormSelect("");
  };

  const handleQuenty = (e, ind) => {

    console.log('first333333333333', ind)
    const price = e.target.value; 
    const returnPrice = data.map((item, index) => {
   console.log('firstindexpppppdddddddddddddddd====>', index)
      if (ind === index) {
        return {
          price: price * priceSelect,
          bookName: item.bookName,
        };
      } else {
        return {
          price: item.price,
          bookName: item.bookName,
        };
      }
    });
  
    setData(returnPrice);
    console.log('object :returnPrice>> ', returnPrice);
  };
  return (
    <div>
      <form style={{ display: "flex" }}>
        <select
          style={{ width: "20%" }}
          class="form-select"
          aria-label="Default select example"
          value={formSelect}
          onChange={(e) => setFormSelect(e.target.value)}
        >
          <option disabled selected value="">
            Select
          </option>
          <option value="book1">book1</option>
          <option value="book2">book2</option>
          <option value="book3">book3</option>
        </select>
        <div>
          <button onClick={handleaddBook}>Add book</button>
        </div>
      </form>
      <br /> <br /> <br />
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          {data.map((val, ind) => {
            return (
              <>
                <tbody key={ind}>
                  <tr>
                    <td> {val?.bookName} </td>
                    <td>
                      <input
                        type="text"
                        onChange={(e) => setPriceSelect(e.target.value)}
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(event) => handleQuenty(event, ind)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </td>
                    <td> {val?.price} </td>
                  </tr>
                </tbody>
              </>
            );
          })}

          <div>Total:{total} </div>
        </table>
      </div>
    </div>
  );
}

export default FormPage;
