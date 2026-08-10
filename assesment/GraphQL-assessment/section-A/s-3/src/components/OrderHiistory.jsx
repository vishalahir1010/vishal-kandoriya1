import useFetchData from "../hooks/useFetchData";

function OrderHistory() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      {data.slice(0, 5).map((order) => (
        <p key={order.id}>{order.title}</p>
      ))}
    </>
  );
}

export default OrderHistory;