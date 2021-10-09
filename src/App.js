import React from "react";
import Home from "./Home";
import Paintings from "./Paintings";

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
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;
