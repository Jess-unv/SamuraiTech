import React, { useContext } from 'react';
import { Cart } from "../Cart";
import { getProductData } from "../Products";

const styles = {
  cartProduct: {
    maxWidth: '100%',
    overflowX: 'auto', 
  },
  productContainer: {
    
  }
};

function CartProduct({ id, quantity }) {
  const cart = useContext(Cart);
  const productData = getProductData(id);

  const handleDeleteItem = () => {
    cart.deleteItem(id);
  };

  return (
    <div style={styles.cartProduct}>
      <div style={styles.productContainer}>
        <h5 style={{ color: "white" }}>{productData.name}</h5>
        <h6>Cantidad: {quantity}</h6>
        <p>
          {(quantity * productData.price)
            .toFixed(2)
            .toString()
            .replace(".", ",")
            .replace(/,00/, "")}
          $
        </p>
        <button className="btn btn-warning" onClick={handleDeleteItem}>
          Eliminar del carrito
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
