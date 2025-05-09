"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";


const Trends = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const trends = [
        {
            name: "Sneakers",
            image: "/Categories/accesories.webp"
        },
        {
            name: "T-Shirts",
            image: "/Categories/Buzo.jpg"
        },
        {
            name: "Joggers",
            image: "/Categories/Jacket.webp"
        },
        {
            name: "Hoodies",
            image: "/Categories/CZ9066_010_A_PREM.jpg"
        },
        {
            name: "Jackets",
            image: "/Categories/joggins.jpg"
        },
        {
            name: "Shorts",
            image: "/Categories/t-shirt.jpg"
        },
    ]

    return (
        <div className="relative w-full">

            <button ref={prevRef} className="absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md">
                ◀
            </button>
            <button ref={nextRef} className="absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md">
                ▶
            </button>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {trends.map((item) => (
                    <SwiperSlide key={item.name}>
                        <Link href={`/products/${item.name}`}>
                            <div
                                key={item.name}
                                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer h-100"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 pl-10 w-full bg-white bg-opacity-50 text-black  py-3 text-3xl font-semibold z-10">
                                    {item.name}
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default Trends;