import Item from "./item";
import ItemList from "./item-list";


export default function Page() {


    return(
        <main>
            <h1 className="text-xl font-extrabold text-center border-4 border-blue-400 bg-slate-700 p-2 m-3 w-3/6">Shopping List</h1>
            <ItemList />

        </main>
    );
}