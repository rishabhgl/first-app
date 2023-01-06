import { Link } from 'react-router-dom';

const Navbar = () => {

    console.log('In Navbar');
    return (
        <nav>
            <div className="navbar">
            <ul className="linkList">
                <li id="link-1"><Link to="/" >Home</Link></li>
                <li id="link-2"><Link to="/hobbies">My Hobbies</Link></li>
                <li id="link-3"><Link to="/create">Add Hobby</Link></li>                 
                <li id="link-4"><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        </nav>
        
    );
}

export default Navbar;