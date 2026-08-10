import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "../graphql/queries";

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <>
      <h2>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: "20px",
        }}
      >
        {data.products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="150"
            />

            <h3>{product.name}</h3>

            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;