"use client";
import { useContext, useState } from "react";
import Login from "@/app/components/Login";
import Register from "@/app/components/Register";


const LoginForm = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center" style={{ height: "calc(100vh - 60px)" }}>
            <div className="flex w-80 mb-6 border border-white rounded overflow-hidden">
                <h2
                    onClick={() => setIsLogin(true)}
                    className={`w-1/2 text-center py-2 font-bold cursor-pointer transition-all ${isLogin ? "bg-white text-black" : "bg-transparent text-white"
                        }`}
                >
                    Iniciar Sesión
                </h2>
                <h2
                    onClick={() => setIsLogin(false)}
                    className={`w-1/2 text-center py-2 font-bold cursor-pointer transition-all ${!isLogin ? "bg-white text-black" : "bg-transparent text-white"
                        }`}
                >
                    Registrarse
                </h2>
            </div>

            {isLogin ? <Login /> : <Register />}
        </div>
    );
}


export default LoginForm
