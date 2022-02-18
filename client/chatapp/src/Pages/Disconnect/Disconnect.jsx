import useLocalStorage from "../../Helper/useLocalStorage";
import { Navigate } from "react-router-dom";

var Disconnect = (props) => {
  /** States */
  const [currentUser, setCurrentUser, removeItem] = useLocalStorage("user", {});

  if (currentUser._id) {
    removeItem("user");
  }

  return <Navigate to="/" />;
};
export default Disconnect;
