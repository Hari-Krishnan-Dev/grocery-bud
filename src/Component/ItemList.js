import { useState } from "react"


const ItemList = ({itemName, index,itemsToBuy, setItemsToBuy,isPurchased }) => {

  const [isChecked, setIsChecked] = useState(isPurchased);

  const deleteHandler =()=>{
    setItemsToBuy((prevState)=>{
      const data = [...prevState];
      data.splice(index, 1)
      return data
    })
  }


  return (
    <div style={{
      backgroundColor: "#fff",
      // border: '1px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap:'2rem',
      margin:'1rem',
      padding: '0.5rem'
    }} >
    
      <div>
        <input className="checkbox" checked={isPurchased? true: false} type="checkbox" onChange={(e)=>{
          setIsChecked((prevValue)=> !prevValue)
          setItemsToBuy((prevState)=>{
            const data = [...prevState]

            data[index].purchased = !isPurchased;
            return data;
          })
        }}  />
      </div>
      <div>
        <p
        style={{
          textDecoration: isPurchased? 'line-through': 'none'
        }}>{itemName}</p>
      </div>
      <div>
        <button onClick={deleteHandler}>DELETE</button>
      </div>

    </div>
  )
}

export default ItemList