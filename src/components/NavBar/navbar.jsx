import './navbar.css'

//components import
import BuyButton from './BuyButton/buybutton'
import NavBarItemsList from './NavBarItemsList/navbaritemslist'

//asset import
import logo from '../../assets/logo.png'

export default function NavBar() {
    return <div>
        <nav className="navbar">
            <img src={logo} alt="logoTop" width={100} />
            <NavBarItemsList />
            <BuyButton />
        </nav>
    </div>
}

