import { useContext } from "react";
import NotificationContext from "./NotificationContext";

function NotificationDemo() {
  const { count, setCount } = useContext(NotificationContext);

  return (
    <div>
      <h3>Unread Messages : {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Receive Message
      </button>
    </div>
  );
}

export default NotificationDemo;