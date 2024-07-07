"use client"

import React, { useState } from "react";
import Item from "./item";

export default function ItemList({items, selectedItemName, onItemSelect}) {

    let buttonStyle = "block m-4 p-2 bg-green-500 text-white w-64 rounded-lg text-center"
    
    // Map JSON data to an array
    let itemsArray = [...items];

    // State  for sorting and grouping items
    let [sortBy, setSortBy] = useState("name");

    // Sort items by name or category
    if (sortBy != "name"){
        itemsArray.sort((a, b) =>{
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });
    }
    else {
        itemsArray.sort((a,b,) => a.name.localeCompare(b.name));
    }

    const handleSortBy = (sortByValue) => {
        setSortBy(sortByValue);
    };
    
    const handleSelect = (items) => {
        onItemSelect(items)
    }

    return(
        <section>            
            <div>
                <div>
                    <p className="pl-4">Sort By: </p>
                    <button onClick={ (event) => setSortBy("name") } className={buttonStyle}>Name</button>
                    <button onClick={ (event) => setSortBy("category") } className={buttonStyle}>Category</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5 m-4">
                {itemsArray.map((item) => (
                    <Item itemObj={item} onSelect={handleSelect} />
                ))}
            </div>

        </section>
    );
}