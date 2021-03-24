import "./styles.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookContainer from "./components/HookContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import UserConatiner from "./components/UserContainer";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserConatiner />
        {/* <HookContainer />
        <CakeContainer />
        <IceCreamContainer /> */}
      </div>
    </Provider>
  );
}
