"use client"

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import ShoppingList from "./shopping-list/page";
import { Route, useNavigate } from "react-router-dom";


export default function Page() {

    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // const navigate = useNavigate();
    
    // Sign in to Firebase with GitHub authentication
    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch {
            console.log(error);
        }
    }

    
    // Sign out of Firebase
    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch {
            console.log(error);
        }
    }

    // Navigate to the shopping list page
    // async function navShoppingList() {
    //     try {
    //         navigate("/shopping-list/page");

    //     } catch {
    //         console.log(error);
    //     }
    // }


    return (
        <main>
            <header>
                <h1 className="text-3xl">Login Page</h1>
                <section>
                    { user ? (
                        // User logged in
                        <div>
                            <p>Welcome {user.displayName}</p>
                            <p><img className="w-8 h-8"/>{user.photoURL}</p>
                            {/* <Router>
                                <nav>
                                    <button onClick={navShoppingList} className="text-lg m-2 border-2 border-green-700 p-3 hover:underline">Continue to Shopping List</button>
                                </nav>
                            </Router> */}
                            <button onClick={handleSignOut} className="text-lg m-2 border-2 border-green-700 p-3 hover:underline">Sign Out</button>
                        </div>
                    ) : (
                        // User not logged in
                        <div>
                            <button onClick={handleSignIn} className="text-lg m-2 hover:underline">Sign In</button>
                        </div>
                    ) }
                </section>
            </header>
        </main>
    );

}