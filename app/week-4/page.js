

// week-4 

import NewItemPage from "./new-item";

export default function Page(){


    return(
        <main>
            <div className="border-4 border-green-200 text-center m-3 p-4">
                <h1 className="font-bold font-lg">Week 4 Assignment</h1>
                <h2>New Item</h2>
            </div>
            <NewItemPage />
        </main>
    );
}