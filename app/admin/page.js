"use client";
import { useState } from "react";

const CrearProducto = () => {
    const [name, setName] = useState("");
    const [description, setDescripcion] = useState("");
    const [price, setPrice] = useState("");
    const [imagenFile, setImagenFile] = useState(null);
    const [category, setCategory] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = new FormData();
        data.append("name", name);
        data.append("description", description);
        data.append("price", price);
        data.append("category", category);
        data.append("image", imagenFile);

        const res = await fetch("/api/product", {
            method: "POST",
            body: data,
        });

        console.log(data)

        if (!res.ok) {
            throw new Error("Error al crear el producto");
        }

        const responseData = await res.json();
        console.log(responseData);
    };

    return (
        <div className="flex items-center justify-center p-4" style={{ height: "calc(100vh - 60px)" }}>
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-lg rounded-lg shadow-lg p-8 space-y-6"
            >
                <h2 className="text-3xl font-bold text-gray-800">Crear Producto</h2>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Descripción</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Precio</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Imagen (URL)</label>
                    <input
                        type="file"
                        onChange={(e) => setImagenFile(e.target.files[0])}
                        required
                        placeholder="https://tusitio.com/imagen.jpg"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Categoría</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        placeholder="Ej: Tecnología, Ropa, Juguetes..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Crear Producto
                </button>
            </form>
        </div>
    );
}

export default CrearProducto;
