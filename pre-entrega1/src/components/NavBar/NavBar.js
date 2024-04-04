import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Tolemar</h3>
            <div>
                <button>Home</button>
                <button>Bebidas sin alcohol</button>
                <button>Bebidas con alcohol</button>
                <button>Ubicación</button>
            </div>
            
            <CartWidget/>
        </nav>
    )
}
export default NavBar