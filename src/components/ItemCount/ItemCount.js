import { useState } from "react"


const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1)

    const decrement = () => setCount(prev => prev - 1)

    const increment = () => setCount(prev => prev + 1)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>decrementar</button>
            <button onClick={increment}>incrementar</button>
            <button onClick={() => onAdd(count)} disabled={stock ===0}>Agregar al Carrito</button>
        </div>
    )

}

export default ItemCount