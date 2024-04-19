import React, { useState, useContext } from 'react';
import { Cart } from "../Cart";
import "./product2.css";
import { arrayProducts } from "../arrayProducts"; 

function Products() {
  return (
    <div className="container">
     
      <img src="https://static1-es.millenium.gg/articles/1/30/63/1/@/141350-samurai-orig-1-article_m-1.jpeg" alt="Bienvenido a SAMURAI TECH" className="welcomeImage" />
      <div className="productsContainer">
        {arrayProducts.map(product => (
          <Product key={product.id} productId={product.id} />
        ))}
      </div>
    </div>
  );
}

function Product({ productId }) {
  const cart = useContext(Cart);
  const product = arrayProducts.find(product => product.id === productId); 
  const quantity = cart.getQuantity(productId);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const addToCart = () => {
    cart.addItem(productId);
  };

  return (
    <div className="productCard">
      <img
        src={product.image}
        alt={product.name}
        className="productImage"
      />
      <h3 className="productName">{product.name}</h3>
      <p className="productPrice">Precio: ${product.price}</p>
      {quantity > 0 ? (
        <div className="cartButtons">
          <p className="quantity">En carrito: {quantity}</p>
          <button className="addButton" onClick={() => cart.addItem(productId)}>+</button>
          <button className="addButton" onClick={() => cart.removeItem(productId)}>-</button>
          <button className="addButton" onClick={() => cart.deleteItem(productId)}>Eliminar del carrito</button>
        </div>
      ) : (
        <div>
          <button className="addButton" onClick={addToCart}>Agregar al carrito</button>
          <button className="detailsButton" onClick={toggleDetails}>Ver detalles</button>
        </div>
      )}
      
      {showDetails && (
        <div className="overlay" onClick={toggleDetails}>
          <div className="popup">
            <div className="popupContent">
            
              {product.name === "Acer Nitro 5" && (
                <>
                <p>Descripción: La Acer Nitro 5 es una excelente opción para los jugadores principiantes que buscan un rendimiento sólido a un precio asequible.</p>
                <p>Stock: 50 unidades</p>
                <p>Procesador: Intel Core i5-11300H</p>
                <p>Memoria RAM: 8 GB DDR4</p>
                <p>Almacenamiento: 512 GB SSD</p>
              </>
            )}
            {product.name === "Asus ROG Strix G17" && (
              <>
                <p>Descripción: La Asus ROG Strix G17 es una poderosa laptop diseñada para gamers entusiastas que buscan rendimiento extremo y calidad.</p>
                <p>Stock: 30 unidades</p>
                <p>Procesador: AMD Ryzen 9 5900HX</p>
                <p>Memoria RAM: 32 GB DDR4</p>
                <p>Almacenamiento: 1 TB SSD</p>
              </>
            )}
           
            {product.name === "Asus ROG Zephyrus M16" && (
              <>
                <p>Descripción: La Asus ROG Zephyrus M16 es una laptop de alta gama diseñada para profesionales y gamers exigentes.</p>
                <p>Stock: 25 unidades</p>
                <p>Procesador: Intel Core i9-11900H</p>
                <p>Memoria RAM: 64 GB DDR4</p>
                <p>Almacenamiento: 2 TB SSD</p>
              </>
            )}
            {product.name === "Lenovo IdeaPad Gaming 3" && (
              <>
                <p>Descripción: La Lenovo IdeaPad Gaming 3 es una opción económica para jugadores casuales que buscan buen rendimiento a un precio asequible.</p>
                <p>Stock: 40 unidades</p>
                <p>Procesador: AMD Ryzen 5 5600H</p>
                <p>Memoria RAM: 16 GB DDR4</p>
                <p>Almacenamiento: 512 GB SSD</p>
              </>
            )}
            {product.name === "MSI GF63 Thin" && (
              <>
                <p>Descripción: La MSI GF63 Thin es una laptop delgada y ligera, ideal para usuarios que necesitan portabilidad sin sacrificar rendimiento.</p>
                <p>Stock: 20 unidades</p>
                <p>Procesador: Intel Core i7-10750H</p>
                <p>Memoria RAM: 16 GB DDR4</p>
                <p>Almacenamiento: 512 GB SSD</p>
              </>
            )}
            {product.name === "Razer Blade 17" && (
              <>
                <p>Descripción: La Razer Blade 17 es una laptop premium diseñada para gamers y profesionales que buscan el mejor rendimiento y calidad.</p>
                <p>Stock: 15 unidades</p>
                <p>Procesador: Intel Core i7-11800H</p>
                <p>Memoria RAM: 32 GB DDR4</p>
                <p>Almacenamiento: 1 TB SSD</p>
              </>
            )}
            {product.name === "Alienware Portátil m15 R7" && (
              <>
                <p>Descripción: La Alienware Portátil m15 R7 es una laptop de alto rendimiento diseñada para gamers y usuarios profesionales exigentes.</p>
                <p>Stock: 10 unidades</p>
                <p>Procesador: Intel Core i9-11900H</p>
                <p>Memoria RAM: 64 GB DDR4</p>
                <p>Almacenamiento: 2 TB SSD</p>
              </>
            )}
            {product.name === "Acer Predator Helios 300" && (
              <>
                <p>Descripción: La Acer Predator Helios 300 es una laptop gaming de gama media con un excelente rendimiento y relación calidad-precio.</p>
                <p>Stock: 35 unidades</p>
                <p>Procesador: Intel Core i7-11800H</p>
                <p>Memoria RAM: 16 GB DDR4</p>
                <p>Almacenamiento: 1 TB SSD</p>
              </>
            )}
            {product.name === "GIGABYTE AERO 14 OLED" && (
              <>
                <p>Descripción: La GIGABYTE AERO 14 OLED es una laptop ligera y potente diseñada para creadores de contenido y profesionales móviles.</p>
                <p>Stock: 12 unidades</p>
                <p>Procesador: Intel Core i7-11800H</p>
                <p>Memoria RAM: 32 GB DDR4</p>
                <p>Almacenamiento: 1 TB SSD</p>
              </>
            )}
            {product.name === "Lenovo Legion Y740" && (
              <>
                <p>Descripción: La Lenovo Legion Y740 es una laptop gaming de alto rendimiento con un diseño elegante y una potencia impresionante.</p>
                <p>Stock: 22 unidades</p>
                <p>Procesador: Intel Core i7-9750H</p>
                <p>Memoria RAM: 16 GB DDR4</p>
                <p>Almacenamiento: 512 GB SSD</p>
              </>
            )}
            {product.name === "MSI Raider GE76" && (
              <>
                <p>Descripción: La MSI Raider GE76 es una laptop gaming de alta gama con un diseño robusto y características de última generación.</p>
                <p>Stock: 18 unidades</p>
                <p>Procesador: Intel Core i9-11900H</p>
                <p>Memoria RAM: 64 GB DDR4</p>
                <p>Almacenamiento: 2 TB SSD</p>
              </>
            )}
            {product.name === "Acer Predator Triton 500 SE" && (
              <>
                <p>Descripción: La Acer Predator Triton 500 SE es una laptop gaming delgada y potente con un diseño premium y un rendimiento excepcional.</p>
                <p>Stock: 25 unidades</p>
                <p>Procesador: Intel Core i7-11800H</p>
                <p>Memoria RAM: 32 GB DDR4</p>
                <p>Almacenamiento: 1 TB SSD</p>
              </>
            )}
            {product.name === "MSI GF65 Thin 10UE" && (
              <>
                <p>Descripción: La MSI GF65 Thin 10UE es una laptop gaming económica con un diseño delgado y ligero, ideal para jugadores casuales.</p>
                <p>Stock: 30 unidades</p>
                <p>Procesador: Intel Core i5-10500H</p>
                <p>Memoria RAM: 8 GB DDR4</p>
                <p>Almacenamiento: 512 GB SSD</p>
              </>
            )}
            {product.name === "ASUS TUF Gaming F15 (2022)" && (
              <>
                <p>Descripción: El ASUS TUF Gaming F15 (2022) es una laptop gaming resistente y potente diseñada para ofrecer un rendimiento sólido a un precio asequible.</p>
                <p>Stock: 40 unidades</p>
                <p>Procesador: Intel Core i7-11800H</p>
                <p>Memoria RAM: 16 GB DDR4</p>
                <p>Almacenamiento: 512 GB SSD</p>
              </>
            )}
            {product.name === "HP Computadora portátil AMD Ryzen 3-5300U" && (
              <>
                <p>Descripción: La HP Computadora portátil AMD Ryzen 3-5300U es una laptop versátil y económica para tareas diarias y trabajo ligero.</p>
                <p>Stock: 45 unidades</p>
                <p>Procesador: AMD Ryzen 3 5300U</p>
                <p>Memoria RAM: 8 GB DDR4</p>
                <p>Almacenamiento: 256 GB SSD</p>
              </>
            )}
            {product.name === "MSI Katana 15" && (
              <>
                <p>Descripción: La MSI Katana 15 es una laptop gaming delgada y ligera con un diseño elegante y características de rendimiento sólidas.</p>
                <p>Stock: 28 unidades</p>
                <p>Procesador: Intel Core i7-11800H</p>
                <p>Memoria RAM: 16 GB DDR4</p>
                <p>Almacenamiento: 512 GB SSD</p>
              </>
            )}
            
            <button className="closeButton">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;