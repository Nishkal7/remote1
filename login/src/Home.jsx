import React from "react";
import "regenerator-runtime/runtime";

// POC to test state shaing from MFE 1 using addEventListener
const Home = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const handleAddToCart = (event) => {
      setProducts((products) => [...products, event.detail]);
    };

    window.addEventListener("addList", handleAddToCart);
    return ()=> {
      window.removeEventListener('addList', handleAddToCart);
    };
  }, []);

  const renderProducts = () => {
    if (products.length === 0) {
      return <p>List is Empty</p>
    }
    return <ul>{products.map(renderProduct())}</ul>;
  };
  const renderProduct = () => (product, index) => {
    return (
      <li key={index}>
        {product.product} - ${product.price}
      </li>
    );
  };

  return (
    <div>
      <h2>Order List</h2>
      {renderProducts()}
    </div>
  );
};

export default Home;
