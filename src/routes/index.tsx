import { NavigationContainer } from "@react-navigation/native";

// Screens
import StackClient from "./Client";
import StackAuth from "./Auth";
import StackAdmin from "./Admin";

// redux
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../redux/actions/userAction";

export default function () {
  const auth = useSelector((store: any) => store.auth);

  const Routes = () => {
    if (!auth.logged) {
      return <StackAuth />;
    } else {
      if (auth.type === "client") {
        return <StackClient />;
      } else {
        return <StackAdmin />;
      }
    }
  };

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
