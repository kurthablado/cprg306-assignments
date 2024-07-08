"use client"

import { useEffect, useState } from "react"


export default function MealIdeas({ ingredient }){

    // 2. Define State Variables using the useState hook.
    const [meals, setMeals] = useState([]);
  
    // loadMealIdeas Function
    
    useEffect( () => {
        const loadMealIdeas = async () => {
        try {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        }
        catch(error) {
            console.log(`Error: ${error.message}`);
        }
    };

    if (ingredient) {
        loadMealIdeas();
    }

    }, [ingredient]);
        

    return(
        <div>
            <h2>Meals Ideas</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}

    // 3. Define API Fetching Function
    // Takes ingredient as parameter, makes fetch request to theMealDB API. 
    export async function fetchMealIdeas(ingredient) {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`); // API endpoint.
                const data = await response.json();
                return data.meals; // Returns array of meals from the API response.
            }
            catch (error) {
                console.log(`Error: ${error.message}`);
                setMeals([]); // Returns empty array on error. 
            }
        }