import { BrowserRouter, Routes, Route , Link, NavLink} from 'react-router-dom';
import './Pizza.css'
export const Pizza = () => {
    return (
        <div className='Pizza'>
        <p>PIZZA</p>
        <Link to='/'> HOME </Link>
        </div>
    )
}