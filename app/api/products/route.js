import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
    const productsRef = collection(db, "products");
    const querySnapshot = await getDocs(productsRef);
    const docs = querySnapshot.docs.map(item => ({ id:item.id, ...item.data()}));

    return NextResponse.json(docs);
}