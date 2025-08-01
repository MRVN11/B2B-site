import React from 'react'
import GenWine from "...\src\assets\Images\GenWine.png"
const Header = ({title}) => {
    return (
        <header class = 'header-container'>
            <h1> title </h1> 
            <img class="Logo" src={GenWine} alt = "GenWine.png"/>
        </header>
    );
}
export default Header