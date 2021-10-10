import React from "react";
import Home from "./Home";
import Paintings from "./Paintings";
import { GlobalProvider } from "./GlobalState";
import { FavoriteClickCountProvider } from "./FavoriteClickCountContext";

export const ConfigContext = React.createContext();

//before context was used
/* const App = ({ pageName }) => {
  if (pageName === "Home") return <Home></Home>;
  if (pageName === "Paintings") return <Paintings></Paintings>;
  return <div>Not Found</div>;
}; */

const pageToShow = (pageName) => {
  if (pageName === "Home") return <Home></Home>;
  if (pageName === "Paintings") return <Paintings></Paintings>;
  return <div>Not Found</div>;
};

const configValue = {
  showSignMeUp: true,
  showViewingDays: true,
};
const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <GlobalProvider>
        <FavoriteClickCountProvider>
          <div>{pageToShow(pageName)}</div>
        </FavoriteClickCountProvider>
      </GlobalProvider>
    </ConfigContext.Provider>
  );
};

export default App;
