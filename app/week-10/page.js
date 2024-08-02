"use client"

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import ShoppingList from "./shopping-list/page";

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
                            
                            <a href="./week-8/shopping-list" className="text-lg m-2 border-2 border-green-700 p-3 hover:underline">Continue to Shopping List 
                            </a>

                            {/* Sign out Button  */}
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