import React, {useContext} from 'react';
import NameContext from '../context/namecontext';

const Navbar = props =>{
    const {name, setName} = useContext(NameContext);
    
    return (
        <div>
            <p>Hi {name}!</p>
        </div>
    )
}


export default Navbar;