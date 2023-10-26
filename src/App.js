import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer/Footer";
import {useReducer} from "react";

const initialState = {
  status: "",
  isLoggedIn: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "Login":
      return {...state, isLoggedIn: true};
    default:
      throw new Error(`Action ${action.type} is Unknown!`);
  }
}

function App() {
  const [{status, isLoggedIn}, dispatch] = useReducer(reducer, initialState);

  //Set a useEffect that will get the local Storage / Cookies JWT token to verify if the user is logged in.

  return (
    <>
      <div className="app">
        {/* {isLoggedIn && <Navbar />} */}
        <Header />
        <Main dispatch={dispatch} />
        <Footer />
      </div>
    </>
  );
}

export default App;
