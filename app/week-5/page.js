
import ItemList from "./item-list";

let headerStyle = "text-4xl text-center font-bold mt-4";

export default function Page() {

    return(
        <main>
            <h1 className={headerStyle}>Shopping List</h1>
            <ItemList />
        </main>
    );
}