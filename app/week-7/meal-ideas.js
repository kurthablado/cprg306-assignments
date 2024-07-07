"use client"

import { useEffect, useState } from "react"


export default function MealIdeas({ ingredient }){

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMealIdeas = async (ingredient) => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await response.json();
                if (data && data.meals) {
                    setMeals(data.meals);
                } else {
                    setMeals([]);
                }
            }
            catch (error) {
                console.log(`Error: ${error.message}`);
                setMeals([]);
            }
        }
    })
  
    
    useEffect( () => {
        const loadMealIdeas = async (ingredient) => {
        try {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        }
        catch(error) {
            console.log(`Error: ${error.message}`);
        }
    }
    }, [])
        

    return(
        <div>
            <h2>Meals Ideas</h2>
            <ul>
                {meals.map((meal, index) => (
                    <li>{meal.name}</li>
                ))}
            </ul>
        </div>
    );
}
