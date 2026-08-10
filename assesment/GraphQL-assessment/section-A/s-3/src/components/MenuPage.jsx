import useFetchData from "../hooks/useFetchData";

function MenuPage() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      {data.slice(0, 5).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
}

export default MenuPage;