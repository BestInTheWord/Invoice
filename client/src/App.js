import { useState } from "react";


function App() {

    const [form, setForm ] = useState({
        ProductService:"",
        HSN: "",
        Unit: 1,
        PricePerUnit: 1,
        DisPer: 0,
        DisAmt: 0,
        Aumount: 1,
    });



    async function handelSubmit(e) {
        e.preventDefault();
   
       const res = await fetch("http://localhost:4000/transaction", {
            method: "POST",
            body: form,
       });
        console.log(res);
    }
    function handelInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
  return (
    <div>
          <form onSubmit={handelSubmit}>
              <span>
              <input value={form.ProductService} name= "ProductService" onChange={handelInput} placeholder="Select product" type="text" />
              </span>
              <input value={form.HSN} name="HSN" onChange={handelInput} placeholder="HSN No" type="text"/>
              <input value={form.Unit} name="Unit" onChange={handelInput} placeholder="Unit" type="number"/>
              <input value={form.PricePerUnit} name="PricePerUnit" onChange={handelInput} placeholder="Price per/unit" type="number"/>
              <input value={form.DisPer} name="DisPer" onChange={handelInput} placeholder="Dis(%)" type="number"/>
              <input value={form.DisAmt} name="DisAmt" onChange={handelInput} placeholder="Dis(ru)" type="number"/>
              <input value={form.Aumount} name="Aumount" onChange={handelInput} placeholder="Amount" type="number"/>
              <button>Submit</button>
          </form >
      
              <table>
                  <tr>
                  <th>ProductService</th>
                  <th>HSN</th>
                  <th>PriciPerUnit</th>
                  <th>DisPet</th>
                  <th>DisAmt</th>
                  <th>Amoutnt</th>
              </tr>
              <tbody>
                  <tr>
                  <td>ProductService</td>
                  <td>HSN</td>
                  <td>PriciPerUnit</td>
                  <td>DisPet</td>
                  <td>DisAmt</td>
                  <td>Amoutnt</td>
                      </tr>
              </tbody>
                  </table>
              </div>
  );
}

export default App;
