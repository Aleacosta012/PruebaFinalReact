import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <nav className="hero is-primary">
        <div className="columns hero-body ">
            <Link to={'/'} className="column is-5 title">
                <h3 >Ecommerce</h3>
            </Link>
            <div>
            <NavLink to={`/category/whiskey`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Whiskey</NavLink>
            <NavLink to={`/category/ron`} className={({isActive}) => isActive ? 'ActiveOption'  : 'Option'}> Ron</NavLink>
            <NavLink to={`/category/vodka`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Vodka</NavLink>
            </div>

            <CartWidget/>0
        </div>
        </nav>
    )
}
export default NavBar