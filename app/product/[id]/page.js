import mockData from "../../data/products.json"
import ProductDetail from "@/app/components/ProductDetail";

const Categories = async ({ params }) => {
    
    const { id } = await params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/product/${id}`, {cache:"no-store"});
    const item = await response.json();

    return (
        <div>
            <ProductDetail item={item}/>
        </div>
    );
}

export default Categories