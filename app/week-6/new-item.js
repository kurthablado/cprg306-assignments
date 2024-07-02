"use client"

const { useState } = require("react")

export default function NewItem({onAddItem}){

    // State variables
    const[name, setName] = useState("");
    const[quantity, setQuantity] = useState(1);
    const[category, setCategory] = useState("produce");

    // Handling Functions
    const handleName = (event) => setName(event.target.value);

    const handleQuantity = (event) => setQuantity(event.target.value);

    const handleCategory = (event) => setCategory(event.target.value);

    // Handle Submit Function
    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            id: id,
            name: name,
            quantity: quantity,
            category: category
        }

        // Call onAddItem function and pass item object
        onAddItem(newItem);

        alert(`New Item Added! \nItem: ${id} \nName: ${name} \nQuantity: ${quantity} \nCategory: ${category}`);

        // Clear form after submission and reset to default
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    

    return(
        <main className="border-4 border-yellow-300 m-3 p-4">
            <form className="p-2">
                
                {/* Name */}
                <div className="py-2">
                    <h3>Name</h3>
                    <input className="text-black" required type="text" value={name} onChange={handleName} placeholder="Item Name" />
                </div>

                {/* Quantity */}
                <div className="py-5">
                    <h3>Quantity</h3>
                    <input className="text-black" required type="text" min="1" max="99" value={quantity} onChange={handleQuantity} placeholder={quantity} />
                </div>

                {/* Category */}
                <div className="py-5">
                    <h3>Category</h3>
                <select className="text-black" value={category} onChange={handleCategory}>
                    <option defaultValue>Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
                </div>

                <div className="py-4">
                    <button className="bg-slate-500 p-3" onClick={handleSubmit}>Add Item</button>
                </div>
            </form>
        </main>
    );
}