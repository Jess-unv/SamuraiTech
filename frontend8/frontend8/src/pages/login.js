import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import app from "../firebase/firebase";
import Products from './Products';
import "./estilos1.css"; 

const auth = getAuth(app);

function AuthenticationForm() {
  const [formData, setFormData] = useState({ email: "", password: "", isLogin: true });
  const [redirectToProducts, setRedirectToProducts] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
   
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        
        console.log("Persistencia configurada correctamente");
      })
      .catch((error) => {
        
        console.error("Error al configurar la persistencia:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      }
      setRedirectToProducts(true);
    } catch (error) {
     
      if (error.code === "auth/invalid-email") {
        setError("Correo electrónico inválido.");
      } else if (error.code === "auth/user-disabled") {
        setError("Usuario deshabilitado.");
      } else if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado.");
      } else if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta.");
      } else {
        setError("Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.");
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (redirectToProducts) {
    return <Products />;
  }

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="login">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">{formData.isLogin ? "Iniciar sesión" : "Registrarse"}</label>
          <input className="input" type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleInputChange} required />
          <div className="password-input-container">
            <input className="input" type={showPassword ? "text" : "password"} name="password" placeholder="Contraseña" value={formData.password} onChange={handleInputChange} required />
            {formData.password && (
              <button type="button" className="password-toggle-button" onClick={toggleShowPassword}>
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            )}
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">{formData.isLogin ? "Iniciar sesión" : "Registrarse"}</button>
          <p className="register-link">No tienes una cuenta? <span onClick={() => setFormData({ ...formData, isLogin: !formData.isLogin })}>{formData.isLogin ? "Regístrate" : "Iniciar sesión"}</span></p>
        </form>
      </div>
    </div>
  );
}

export default AuthenticationForm;
