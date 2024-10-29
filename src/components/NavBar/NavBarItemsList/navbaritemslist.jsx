import './navbaritemslist.css'
import { Link } from 'react-scroll'

export default function NavBarItemsList() {
    return (
        <div className="desktopNavBarList">
            <Link>
                <Link  to="book" smooth={true} duration={900} className="desktopNavBarItem">The Book</Link>
                <Link to="author" smooth={true} duration={900} className="desktopNavBarItem">The Author</Link>
                <Link to="contact" smooth={true} duration={900} className="desktopNavBarItem">Contact</Link>
            </Link>
        </div>
    )
}