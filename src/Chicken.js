
import { BrowserRouter, Routes, Route , Link, NavLink} from 'react-router-dom';
import './Chicken.css'

export const Chicken = () => {
    return (
        <div className="Chicken">

        <p>CHICKEN PAGE</p>
        <Link to='/'> HOME </Link>
        </div>
    )
}