import { db } from "@/app/firebase/config";
import { collection, addDoc } from "firebase/firestore";

export async function POST(request) {
    try {
        const formData = await request.formData();

        const name = formData.get("name");
        const description = formData.get("description");
        const price = formData.get("price");
        const category = formData.get("category");
        const file = formData.get("image");

        // Upload image
        const cloudinaryData = new FormData();
        cloudinaryData.append("file", file);
        cloudinaryData.append("upload_preset", process.env.CLOUDINARY_PRESET);

        const cloudRes = await fetch(process.env.CLOUDINARY_API, {
            method: "POST",
            body: cloudinaryData,
        });

        const cloudinaryResponse = await cloudRes.json();
        const imageUrl = cloudinaryResponse.secure_url;

        // Save in firestore
        const values = { name, description, price, category, image: imageUrl };
        const productsRef = collection(db, "products");
        console.log(values)
        const docRef = await addDoc(productsRef, values);

        return new Response(JSON.stringify({ success: true, id: docRef.id }), {
            status: 201,
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        console.error("Error al crear producto:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
        });
    }
}
