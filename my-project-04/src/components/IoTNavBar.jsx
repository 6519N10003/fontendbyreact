import React from 'react'
import {Link} from 'react-router-dom'
import IoTHeader from './IoTHeader'
import logo from './../assets/Logo.png'
import react from './../assets/react.svg'

export default function IoTNavBar() {
return (
<div style={{textAlign:"center"}}>
    <Link to="/" style={ {margin:"5px", textDecoration:"none"}}>Login</Link>
    <Link to="/home" style={ {margin:"5px", textDecoration:"none"}}>Home</Link>
    <Link to="/about" style={ {margin:"5px", textDecoration:"none"}}>About</Link>
    <Link to="/contact" style={ {margin:"5px", textDecoration: "none"}}>Contact</Link>
    <Link to="/ieie" style={ {margin:"5px", textDecoration:"none"}}>IoT</Link>
    <br />
    <img width={50} src={logo} alt= "logo" />
    <img width={50} src={react} alt="logo" />
    <img width={50} src="./vite.svg" alt="logo" />
    <br />
    <IoTHeader/>

</div>

)

}