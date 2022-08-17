import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Snack.css'

export const Snack = ({name}) => {
    return (
        <div className='Snack'>
            <p>{name}</p>
            
        </div>
    )
}