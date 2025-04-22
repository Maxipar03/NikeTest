"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LoginForm from "./@login/page";

const AdminLayout = ({ children, login }) => {

    const { user } = useContext(AuthContext);

    console.log(user)

    return (
        <>
            {user.logged ? children : <LoginForm/>}
        </>
    );
}

export default AdminLayout;