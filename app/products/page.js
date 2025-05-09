import ProductCard from "@/app/components/ProductCard";

export async function generateMetadata() {

    return {
        title: "All Products | Nike"
    }
}

const Products = async ({ searchParams }) => {


    const { name, style } = await searchParams;

    console.log("search:", name);
    console.log("style:", style);

    const queryParams = new URLSearchParams();

    if (name) queryParams.append("name", name);
    if (style) queryParams.append("style", style);

    console.log(queryParams)

    const url = `${process.env.NEXT_PUBLIC_URL_BASE}/api/products?${queryParams.toString()}`;

    const response = await fetch(url, { cache: "no-store" });
    const items = await response.json();

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-12 py-10">
            {items.map(item => (
                <ProductCard key={item.id} item={item} />
            ))}
        </section>
    );
};

export default Products