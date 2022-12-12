import { NavigationContainer } from "@react-navigation/native";

// Screens
import StackClient from "./Client";
import StackAuth from "./Auth";

// redux
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../redux/actions/userAction";

export default function () {
  const userData = useSelector((store: any) => store.user);

  const Routes = () => {
    if (!userData.logged) {
      return <StackAuth />;
    } else {
      if (userData.type === "client") {
        return <StackClient />;
      } else {
        return <></>;
      }
    }
  };

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
