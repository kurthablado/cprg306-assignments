"use client"

import { useUserAuth } from "../_utils/auth-context";
import ItemList from "../item-list";
import NewItem from "../new-item";
import itemsData from "../items.json";
import MealIdeas from "../meal-ideas";
import { useState } from "react";

let headerStyle = "text-4xl text-center font-bold mt-4";

export default function ShoppingList() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    if (!user) {
        return <p>Please sign in to continue</p>
    }

    const [items, setItems] = useState(
        itemsData.map((item) => ({...item}))
    );

    // state variable for selecting item name
    const [selectedItemName, setSelectedItemName] = useState("");

    // add new item to list
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
        setSelectedItemName(newItem.name); // set selectedItemName to the new item's name
    }

    // Event handler for selecting items
    const handleItemSelect = (itemName) => {
        const cleanItemName = itemName.trim(); // clean up item name
        setSelectedItemName(cleanItemName); // update selectedItemName state
    }

    let ingredient = selectedItemName.toLowerCase();


    return (
        <main>
            <h1 className={headerStyle}>Shopping List</h1>
                
            <div className="flex justify-center w-1/8 p-3">
                {/* Render NewItem component and pass handleAddItem as a prop */}
                <NewItem onAddItem={handleAddItem} />
            
                {/* Render ItemList component and pass items as a prop */}
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            
            <div className="flex justify-center border-2 border-red-500 mx-60 w-1/8 p-3">
                {/* Render MealIdeas component and pass the selected ingredient */}
                <MealIdeas ingredient={ingredient} />
            </div>
        
        </main>
    );

}