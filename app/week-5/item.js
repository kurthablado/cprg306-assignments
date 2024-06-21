

export default function Item({itemObj}) {

    let itemStyles = "block border-3 border-lime-500 bg-blue-500 p-4 rounded-lg shadow-lg"

    // Destructure itemObj
    const {id, name, category, quantity} = itemObj;

    return(
        <div className={itemStyles}>
            <h2>{name}</h2>
            <p><b>ID: </b>{id}</p>
            <p><b>Category: </b>{category}</p>
            <p><b>Quantity: </b>{quantity}</p>
        </div>
    );
}