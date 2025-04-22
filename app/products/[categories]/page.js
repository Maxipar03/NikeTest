import ProductCard from "@/app/components/ProductCard";

export async function generateMetadata ({params}) {
    const {categories} = await params;
    
    return {
        title:categories + " | Nike"
    }
}

const Categories = async ({ params }) => {
    const { categories } = await params;

    const response = await fetch(`${process.env.URL_BASE}/api/products/${categories}`, {
        cache: "no-store"
    });
    const items = await response.json();

    return (
        <section className="flex flex-wrap gap-3 justify-center m-5">
            {items.map(item => (
                <ProductCard key={item.id} item={item} />
            ))}
        </section>
    );
};

export default Categories
