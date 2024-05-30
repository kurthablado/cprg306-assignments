
// Item component

export default function Item({itemObj}) {

    let {name, quantity, category} = itemObj;
    

    // Props
    return (
        <div className="bg-neutral-600 border-2 border-green-300 m-3 p-3 w-3/6">
            <h3 className="text-lg text-center font-bold">{name}</h3>
            <p className="ml-2 p-1">Quantity: {quantity}</p>
            <p className="ml-2 p-1 ">Category: {category}</p>
        </div>
    );
}