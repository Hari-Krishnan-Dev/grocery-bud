import React, { useState } from "react";
import ItemList from "./ItemList";

const InputContainer = () => {

    const [itemsToBuy, setItemsToBuy] = useState([]);
    const [textInputValue, setTextInputValue] = useState("");

    const onClickHandler =()=>{
        setItemsToBuy((prevData)=>{
            return [...prevData , {
                name : textInputValue,
                purchased : false
            }]
        })

        setTextInputValue("");
    }

  return (
    <div className="ctn">
      <h2>Grocery Bud</h2>
      <div className="ctn2">
        <input
          type="text"
          value={textInputValue}
          onChange={(e) => {
            setTextInputValue(e.target.value);
          }}
        />
        <button onClick={onClickHandler} >ADD ITEM</button>
      </div>

      {/* .........this div is to add grocery............  */}
      <div>
        {itemsToBuy.map((elem,index)=>{
            return <ItemList key={index} itemName={elem.name} isPurchased={elem.purchased} itemsToBuy={itemsToBuy} setItemsToBuy={setItemsToBuy} index={index} />
        })}
      </div>


    </div>
  );
};

export default InputContainer;