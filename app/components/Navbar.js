import Logo from "./Logo"
import SearchBar from "./SearchBar";
import SlideBar from "./SlideBar";

const Navbar = async () => {
    
    return (
        <header className="h-18 flex items-center sticky top-0 z-50 w-full justify-between bg-white px-12">
            <div>
                <Logo />
            </div>
            <div className="w-80">
                <SearchBar/>
            </div>
            <div>
                <SlideBar/>
            </div>
        </header>
    )
}

export default Navbar