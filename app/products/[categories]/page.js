import ProductCard from "@/app/components/ProductCard";

export async function generateMetadata({ params }) {
    const { categories } = await params;

    return {
        title: categories + " | Nike"
    }
}

const Categories = async ({ params }) => {
    const { categories } = await params;


    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/products/${categories}`, {
        cache: "no-store"
    });
    const items = await response.json();

    return (

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-12 pt-10">
            {items.map(item => (
                <ProductCard key={item.id} item={item} />
            ))}
        </section>
    );
};

export default Categories
