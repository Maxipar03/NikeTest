import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";
import { collection, getDocs, query, where} from "firebase/firestore";

export async function GET(request) {

    const { searchParams } = new URL(request.url);

    const category = searchParams.get("category");
    const style = searchParams.get("style");
    const name = searchParams.get("name");

    const productsRef = collection(db, "products");

    const filters = [];

    if (category) {
        filters.push(where("category", "==", category));
    }

    if (style) {
        filters.push(where("style", "==", style));
    }

    if (name) {
        const nameQuery = query(
            productsRef,
            where("name", ">=", name),
            where("name", "<=", name + "\uf8ff")
        );
        const querySnapshot = await getDocs(nameQuery);
        const docs = querySnapshot.docs.map(item => ({ id: item.id, ...item.data() }));
        return NextResponse.json(docs);
    }

    const q = filters.length > 0 ? query(productsRef, ...filters) : productsRef;

    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map(item => ({ id: item.id, ...item.data() }));

    return NextResponse.json(docs);
}