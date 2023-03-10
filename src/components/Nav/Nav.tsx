import '../Nav/Nav.scss';
import { Link } from 'react-router-dom';


export const Nav = () => {
    return (
        <>
            <header>
                <nav className='topnav'>
                    <ul className='topnav__list'>
                        <li className='topnav__item'>
                            <Link to="/" className='topnav__link'>Zoo</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}