import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, price, stock, description}) => {

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id, name, price, quantity
        }
        console.log(objProduct)
    }

    return (
        <div className="text-style">
                <h2>{name}</h2>
                <img src={img} alt={name} style={{ width:400 }}/>
                <h2>Precio: ${price}</h2>
                <h3>Stock: {stock}</h3>
                <p>Descripción: {description}</p>
                <ItemCount stock={stock} onAdd={handleOnAdd}/>     
        </div>
    )

}

export default ItemDetail