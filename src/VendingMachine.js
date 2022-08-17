import { BrowserRouter, Routes, Route , Link, NavLink} from 'react-router-dom';
import { SnackList } from './SnackList';
import {Snack} from './Snack'
import { Pizza } from './Pizza';
import { Apple } from './Apple';
import { Chicken } from './Chicken';
import './VendingMachine.css'

export const VendingMachine = () => {
    return (
        <div className='VendingMachine'>
         {SnackList.map((snack, idx)=>(
            <Snack key={idx} id={idx} name={snack.name}/>
        ))}
        <div> 
        <Link to='apple'> APPLES </Link>
        <Link to='chicken'> CHICKEN </Link>
        <Link to='pizza'> PIZZA </Link>
        </div>

        </div>
    )
}
// {SnackList.map((snack, idx)=>(
    // <Route exact path={'vending'} element={<Snack key={idx} id={idx} name={snack.name}/>}/>
// ))}

// {SnackList.map((snack, idx)=>(
//     <Snack key={idx} id={idx} name={snack.name}/>
// ))}


// <BrowserRouter>
// <Routes>
// {SnackList.map((snack, idx)=>(
//     <Route exact path={'vending'} element={<Snack key={idx} id={idx} name={snack.name}/>}/>
// ))}
// </Routes>
// </BrowserRouter>

// <BrowserRouter>
// <Routes>
//   <Route exact path={'vending'} element={<Snack key={idx} id={idx} name={snack.name}/>}/>
// </Routes>
// </BrowserRouter>