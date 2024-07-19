"use client"

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);

    useEffect( () => {
        const loadMealIdeas = async () => {
            try {
                const mealIdeas = await fetchMealIdeas(ingredient);
                setMeals(mealIdeas); // Update state with fetched meal ideas.
            } catch(error) {
                console.log(`Error: ${error.message}`);
                setMeals([]); // Reset meals state to empty array
            }
        };

        if (ingredient !== "") {
            loadMealIdeas(); // Call loadMealIdeas function when ingredient changes and is not empty
        } else {
            setMeals([]); // Reset meals state to empty array if ingredient is empty.
        }
    }, [ingredient]); // useEffect dependency on ingredient state.

    return(
        <div>
            <h2 className="text-lg">Meal Ideas</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <ul>
                        {meal.strMeal}
                        <im src={meal.strMealThumb} alt={meal.strMeal} />
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );

}

// API Fetching Function

export async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`); // API endpoint.
        const data = await response.json();
        return data.meals; // Returns array of meals from the API response.
    } catch {
        console.log(`Error: ${error.message}`);
        setMeals([]); // Returns empty array on error.
    }
}