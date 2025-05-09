import ProductCard from "./components/ProductCard";
import Banner from "./components/Banner";
import Link from "next/link";
import Gender from "./components/Gender";
import Trends from "./components/Trends";
import useFireStore from "./firebase/useFireStore";

import "swiper/css";
import "swiper/css/navigation";

export default async function Home() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/products`, {
        cache: "no-store"
    });
    const items = await response.json();

    return (
        <>
            <section className="relative w-full h-[400px] overflow-hidden">
                <Banner />
            </section>
            <section className="py-10 mx-12">
                <Trends />
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-12">
                {
                    items.slice(0, 7).map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))
                }
                <div className="flex flex-col items-center text-center justify-around bg-black rounded-md">
                    <h1 className="text-white text-4xl font-bold mb-4">SEE THE NEW STYLES</h1>
                    <Link href={"/products"}>
                    <h2 className="text-black bg-white px-10 py-3 text-lg underline cursor-pointer rounded-sm">VIEW ALL</h2>
                    </Link>
                </div>
            </section>
            <section className="py-10 mx-12">
                <Gender />
            </section>
        </>
    );
}
