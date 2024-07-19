"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

let headerStyle = "text-4xl text-center font-bold mt-4";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    // add new item to list
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return(
        <main>
            <h1 className={headerStyle}>Shopping List</h1>
            {/* Render NewItem component and pass handleAddItem as a prop */}
            <NewItem onAddItem={handleAddItem} />

            {/* Render ItemList component and pass items as a prop */}
            <ItemList items={items} />
        </main>
    );
}