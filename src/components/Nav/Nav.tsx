import '../Nav/Nav.scss';
import { FaPaw } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const Nav = () => {
    return (
        <>
            <header>
                <nav className='topnav'>
                    <ul className='topnav__list'>
                        <li className='topnav__item'>
                            <Link to="/"><FaPaw></FaPaw></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}