import React from "react";
import './Menu.css';

export default function Menu() {
   return ( 
   <div> 
        <header>
		<nav className="navegacion">
			<ul class="menu">
				<li><a href="#">Inicio</a></li>
				<li><a href="#">Nosotros</a></li>
				<li><a href="#">Servicios</a>
					<ul className="submenu">
						<li><a href="#">Servicio #1</a></li>
						<li><a href="#">Servicio #2</a></li>
						<li><a href="#">Servicio #3</a></li>
					</ul>
				</li>
				<li><a href="#">Contacto</a></li>
			</ul>
		</nav>
	    </header>
    </div>
   )
};