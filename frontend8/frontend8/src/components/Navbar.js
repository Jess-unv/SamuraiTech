import React, { useContext, useState, useEffect } from "react";
import { Cart } from "../Cart";
import CartProduct from "../components/CartProduct";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase";
import { useLocation, Link } from "react-router-dom";

const auth = getAuth(app);

function Navbar() {
  const location = useLocation();
  const cart = useContext(Cart);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const formatNumber = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const checkout = async () => {
    try {
      const response = await fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart.items }),
      });
      const data = await response.json();
      console.log(data.url);
      if (data.url) {
        window.location.assign(data.url);
      }
    } catch (error) {
      console.error("Error during checkout process:", error);
    }
  };

  const redirectToLoginPage = () => {
    window.location.assign("/login");
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Usuario cerró sesión con éxito");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [inLoginPage, setInLoginPage] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });

    setInLoginPage(location.pathname === "/login");

    return () => unsubscribe();
  }, [location.pathname]);

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <img
            src="https://steamuserimages-a.akamaihd.net/ugc/782984638953970989/025C8B4A40F125091418AB81D8CA5B127138A6F9/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
            alt="Logo"
            style={styles.logo}
          />
          <a style={styles.brandName} href="/">
            Samurai Tech
          </a>
        </div>
        <div>
          {userLoggedIn && (
            <Link to={userLoggedIn ? "/products" : "/login"}>
              <button
                type="button"
                className="btn btn-dark me-2 btn-sm"
              >
                Ir a la Tienda
              </button>
            </Link>
          )}
          {userLoggedIn && inLoginPage && ( 
            <button
              type="button"
              className="btn btn-dark me-2 btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Carrito ({productsCount}) Artículos
            </button>
          )}
          {userLoggedIn ? ( 
            <button
              type="button"
              className="btn btn-dark me-2 btn-sm"
              onClick={handleSignOut}
            >
              Cerrar Sesión
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-dark me-2 btn-sm"
              onClick={redirectToLoginPage}
            >
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#000", color: "#fff" }}>
            <div className="modal-header bg-dark text-white">
              <h1 className="modal-title fs-5">Carrito de Compras</h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {productsCount > 0 ? (
                <div>
                  {cart.items.map((product, index) => (
                    <CartProduct
                      id={product.id}
                      quantity={product.quantity}
                      key={index}
                    />
                  ))}
                  <h4>Total: {formatNumber(cart.getTotal())}</h4>
                </div>
              ) : (
                <h4 className="text-danger">El carrito está vacío</h4>
              )}
            </div>
            <div className="modal-footer">
              {productsCount > 0 ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={checkout}
                >
                  Comprar
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes colorChange {
            0% { border-bottom: 5px solid rgb(255, 0, 0); }
            33% { border-bottom: 5px solid rgb(255, 255, 0); }
            66% { border-bottom: 5px solid rgb(0, 128, 0); }
            100% { border-bottom: 5px solid rgb(255, 0, 0); }
          }

          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

          body {
            margin: 0;
            padding-top: 70px;
          }

          .brand-name {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    padding: "10px",
    zIndex: 9999,
    animation: "colorChange 3s infinite",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    marginRight: "10px",
  },
  brandName: {
    color: "#fff",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default Navbar;
