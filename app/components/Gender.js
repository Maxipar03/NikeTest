import Image from "next/image";
import Link from "next/link";

const Gender = () => {

    const gender = [
        {
            name: "Womens",
            image: "/Gender/Womenn.jpg"
        },
        {
            name: "Men",
            image: "/Gender/Men.webp"
        },
        {
            name: "Kids",
            image: "/Gender/kids.jpg"
        },
    ]

    return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gender.map((item) => (
                <Link href={`/products?style=${item.name}`} key={item.name}>   
                    <div
                        key={item.name}
                        className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform h-100"
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
                        <div className="absolute top-0 left-0 w-full h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>          
                    </div>
                    </Link>
                ))}
            </div>
    );
}

export default Gender