
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const itemsCollection = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsCollection);
    const itemsList = [];
    querySnapshot.forEach((doc) => {
        let thisItem = {
            id: doc.id,
            ...doc.data()
        }
        itemsList.push(thisItem);
    });
    return itemsList;
}

export async function addItem(userId, item) {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const addedItemPromise = await addDoc(itemsCollection, item);
        console.log(addedItemPromise);
    } catch (error) {
        console.log(error);
    }

}