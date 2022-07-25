
import '../App.css'
import img from '../images/logo.png'


function Navbar(){
    return(
        
        <>
        <div class="header">
        <img src={img} class="logo" alt="10"></img>
        <p>CeluMarket</p>
        
        
            <li>
                <ul>
                    <a href="www.google.com">Telefonos</a>
                </ul>
                <ul>
                    <a href="www.google.com">Accesorios</a>
                </ul>
                <ul>
                    <a href="www.google.com">Carrito</a>
                </ul>
            </li>
        </div>
        
        </> 
    
   ) 
}

export default Navbar;