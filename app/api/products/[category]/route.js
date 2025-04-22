import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(request, {params}) {
    const {category} =  await params;    
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map(item => ({ id:item.id, ...item.data()}));

    return NextResponse.json(docs);
}