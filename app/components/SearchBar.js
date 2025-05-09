"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        if (e.key === "Enter" && searchTerm.trim() !== "") {
            router.push(`/products?name=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    return (
        <input
            type="text"
            placeholder="Busca tu producto"
            className="border-b-1 p-2 w-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
        />
    );
};

export default SearchBar;
