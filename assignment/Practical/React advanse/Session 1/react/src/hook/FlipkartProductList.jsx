
import useFetchData from './useFetchData';

export default function FlipkartProductList() {
   const { loading, data, error } = useFetchData("https://fakestoreapi.com/products");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Flipkart Product List</h1>

      <ul>
        {data.map((product) => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
