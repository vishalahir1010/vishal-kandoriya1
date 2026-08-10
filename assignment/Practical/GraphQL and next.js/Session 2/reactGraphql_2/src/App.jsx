import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) {
    return <h2>Loading countries...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h1>Countries List</h1>

      <ul>
        {data.countries.map((country) => (
          <li key={country.code}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;