"use client"
import Image from "next/image";
import { useState } from "react";

const slides = [
    {
        id: 1,
        image: "/JORDAN-BRAND-BANNER-01.jpg",
        title: "Jordan 1 Low",
        subTitle: "Estilo icónico para el día a día"
    },
    {
        id: 2,
        image: "/nike_air_force_1_header.webp",
        title: "Jordan Retro High",
        subTitle: "Diseño clásico con un toque moderno"
    },
    {
        id: 3,
        image: "/Air-Jordan-11-Black-Red-Grey-2025-1.jpg",
        title: "Air Jordan Classic",
        subTitle: "La esencia del legado Jordan"
    },
];

export default function Banner() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute bottom-0 w-full h-70 bg-gradient-to-t from-[rgb(39,39,39)] to-transparent flex items-end justify-between px-12 pb-4">
                        <div>
                            <h1 className="text-white text-5xl font-bold">{slide.title}</h1>
                            <h3 className="text-white text-1xl font-light">{slide.subTitle}</h3>
                        </div>
                        <button className="bg-white text-black px-10 py-3 rounded-lg hover:bg-gray-300 transition">
                            Comprar
                        </button>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
            >
                ◀
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
            >
                ▶
            </button>
        </>
    );
}