import React, { useState, useMemo } from "react";

const products = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: (Math.random() * 100).toFixed(2),
}));

function ProductList() {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {

    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

  }, [searchTerm]);


  return (
    <div>

      <h2>Product List</h2>


      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>


      <ul>
        {
          filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))
        }
      </ul>


    </div>
  );
}

export default ProductList;