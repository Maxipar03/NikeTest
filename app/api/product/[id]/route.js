import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export async function GET(request, { params }) {
    const { id } = await params;

    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ id: docSnap.id, ...docSnap.data() });
}

