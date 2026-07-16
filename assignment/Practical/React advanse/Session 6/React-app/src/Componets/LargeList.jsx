import React, {  useState,  useMemo,  useCallback} from "react";
const items = Array.from(
  { length: 1000 },
  (_, index) => `Item ${index + 1}`
);
const ListItem = React.memo(({ item }) => {

  return (
    <li>
      {item}
    </li>
  );

});

function LargeList() {

  const [count, setCount] = useState(0);


  const filteredItems = useMemo(() => {

    console.log("Filtering Large List...");

    return items.filter((item) =>
      item.includes("1")
    );

  }, []);



  const handleClick = useCallback(() => {

    setCount((previous) =>
      previous + 1
    );

  }, []);

  return (

    <div>

      <h2>
        Large List Optimization
      </h2>


      <button onClick={handleClick}>
        Count: {count}
      </button>


      <ul>

        {
          filteredItems.map((item) => (

            <ListItem
              key={item}
              item={item}/>
          ))
        }
      </ul>
    </div>
  );
}


export default LargeList;