"use client";
import { AuthContext } from "@/app/context/AuthContext";
import { useContext, useState } from "react";

const Login = () => {

    const { logInUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const loginUsuario = async (e) => {
        e.preventDefault();
        await logInUser(email, pass);
    };

    return (
        <form
            onSubmit={loginUsuario}
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Iniciar sesión
            </button>
        </form>
    )
}

export default Login