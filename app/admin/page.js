"use client";
import { useState, useEffect } from "react";

const CrearProducto = () => {

    const [name, setName] = useState("");
    const [description, setDescripcion] = useState("");
    const [price, setPrice] = useState("");
    const [imagenFile, setImagenFile] = useState(null);
    const [category, setCategory] = useState("");
    const [style, setStyle] = useState("");
    const [availableSizes, setAvailableSizes] = useState([]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = new FormData();
        data.append("name", name);
        data.append("description", description);
        data.append("price", price);
        data.append("category", category);
        data.append("image", imagenFile);
        data.append("availableSizes", JSON.stringify(availableSizes));
        data.append("style", style);

        const res = await fetch("/api/product", {
            method: "POST",
            body: data,
        });

        if (!res.ok) {
            throw new Error("Error al crear el producto");
        }

        const responseData = await res.json();
        console.log(responseData);
    };

    const sneakerSizes = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'];
    const clothingSizes = ['XS', 'S', 'M', 'L', 'XL'];

    const handleCheckboxChange = (size) => {
        if (availableSizes.includes(size)) {
            setAvailableSizes(availableSizes.filter((s) => s !== size));
        } else {
            setAvailableSizes([...availableSizes, size]);
        }
    };

    const getSizesForCategory = () => {
        if (category === 'Sneakers') return sneakerSizes;
        if (['T-Shirts', 'Hoodies', 'Jackets', 'Joggers', 'Shorts'].includes(category)) return clothingSizes;
        return [];
    };

    return (
        <div className="flex items-center justify-center p-4" style={{ height: "calc(100vh - 90px)" }}>
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
                    <label className="block mb-1 font-medium text-gray-700">Seleccione el estilo</label>
                    <select onChange={(e) => {
                        setStyle(e.target.value);
                    }} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Selecciona el estilo</option>
                        <option value="Womens">Womens</option>
                        <option value="Kids">Kids</option>
                        <option value="Men">Men</option>
                        <option value="Unisex">Unisex</option>
                    </select>
                </div>
                
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Seleccione su categoria</label>
                    <select onChange={(e) => {
                        setCategory(e.target.value);
                        setAvailableSizes([]); 
                    }} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Selecciona una categoría</option>
                        <option value="Sneakers">Sneakers</option>
                        <option value="T-Shirts">T-Shirts</option>
                        <option value="Hoodies">Hoodies</option>
                        <option value="Jackets">Jackets</option>
                        <option value="Joggers">Joggers</option>
                        <option value="Shorts">Shorts</option>
                    </select>
                </div>

                {category && (
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Talles disponibles</label>
                        <div className="flex flex-wrap gap-2">
                            {getSizesForCategory().map((size) => (
                                <label key={size} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        value={size}
                                        checked={availableSizes.includes(size)}
                                        onChange={() => handleCheckboxChange(size)}
                                    />
                                    <span>{size}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

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
