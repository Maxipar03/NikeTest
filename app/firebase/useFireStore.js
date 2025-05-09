const useFireStore = async ({id, category}) => {

    const urlBase = "http://localhost:3000/api";

    let url;

    switch(true){
        case id:
            url = `${urlBase}/product/${id}`;
            break;
        case category:
            url = `${urlBase}/products/${category}`;
            break;
        default:
            url = `${urlBase}/products`;
            break;
    }

    const response = await fetch(url, {cache:"no-store"});
    const items = await response.json();

    return items;
}  

export default useFireStore;