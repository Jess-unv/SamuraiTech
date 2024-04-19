import { arrayProducts } from "../Products";
import Product from "../components/Product";
import "./Store.css";

function Store() {
  return (
    <div className="container">
    
      <div className="imageContainer">
        <img src="https://steamuserimages-a.akamaihd.net/ugc/782984638953970989/025C8B4A40F125091418AB81D8CA5B127138A6F9/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="Logo" className="image" />
      </div>
      
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-2 mb-4 productContainer">
        {arrayProducts.map((product, index) => (
          <div className="col" key={index}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
