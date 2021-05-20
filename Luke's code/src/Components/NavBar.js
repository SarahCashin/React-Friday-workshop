import { useState } from 'react';
import { pageType } from '../App'

const NavBar = (props) => {
    return (
        <>
            <div> NAVBAR </div>
            <button onClick={(e) => props.changePage(e)} value={pageType.Home}>Home</button>
            <button onClick={(e) => props.changePage(e)} value={pageType.About}>About</button>
        </>
    );
}

export default NavBar;