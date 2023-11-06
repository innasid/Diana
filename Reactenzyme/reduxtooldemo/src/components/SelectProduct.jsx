import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/index";

function SelectProduct() {
  const dispatch = useDispatch();
  const [plist, setPlist] = useState([
    {
      id:"1001",
      name:"Colgate 100gm",
      cost:"20",
      quantity: 0 ,
  },
  {
      id:"1002",
      name:"Rice 1kg",
      cost:"150",
      quantity: 0 ,
  },
  {
      id:"1003",
      name:"Sugar 100gm",
      cost:"100",
      quantity: 0 ,
  },
  {
      id:"1004",
      name:"Salt 1kg",
      cost:"30",
      quantity: 0 ,
  },
  {
      id:"1005",
      name:"Chocolates 500gm",
      cost:"250",
      quantity: 0 ,
  },
  {
      id:"1006",
      name:"Nuts & spices 1kg",
      cost:"80",
      quantity: 0 ,
  },
  {
      id:"1007",
      name:"Basmati rice 1kg",
      cost:"250",
      quantity: 0 ,     
  },
  {
      id:"1008",
      name:"Cookies 250gm",
      cost:"150",
      quantity: 0 ,
  },
  {
      id:"1009",
      name:"Cashew 250gm",
      cost:"700",
      quantity: 0 ,
  },
  {
      id:"1010",
      name:"Badam 250gm",
      cost:"200",
      quantity: 0 ,
  },
  ])

  const addcart = (product) => {
    dispatch(actions.addproduct(product));
  };

  const handleIncrement = (id) => {
    setPlist((list) => {
        const updateList = [...list];
        updateList[id] = {
          ...updateList[id],
          quantity: updateList[id].quantity + 1,
        };
        return updateList;
      });
    };
    
    const handleDecrement = (id) => {
      setPlist((list) => {
        const updateList = [...list];
        if (updateList[id].quantity > 0) {
          updateList[id] = {
          ...updateList[id], // copies entire data of one id
          quantity: updateList[id].quantity - 1,
        }
        return updateList;
        } else {
        return updateList;
        }
      });
    };
  
    const prepareList = ()=>{
    return plist.map((product, index) => (    
      <div key={product.id}>
          <li className="list-group-item list-group-item-primary list-group-item-action px-4 py-2">
          <div className="fs-1">{product.name}</div>
          <div>Product ID :{product.id}</div>
          <div> Cost :{product.cost}</div>
          <div></div>
          <div>
            <button
              className="btn btn-danger btn-sm m-1"
              onClick={() => handleDecrement(index)}
            >
              -
            </button>
            Quantity :{product.quantity}
            <button
              className="btn btn-success btn-sm m-1"
              onClick={() => handleIncrement(index)}
            >
              +
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-sm m-1"
              onClick={(event) =>{event.preventDefault()
              
                addcart(product)
              } }
            >
             
              Add to Cart
            </button>
          </div>
        </li>
      </div>
    ));
  };
  return <div>{prepareList()}</div>;
}
export default SelectProduct;