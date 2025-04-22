import ProductCard from "./components/ProductCard";

export default async function Home() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/products/`, { cache: "no-store" },);
    const items = await response.json();


    return (
        <section className="flex flex-wrap gap-3 justify-center m-5">
            {
                items.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))
            }
        </section>
    );
}
