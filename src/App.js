import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
function App() {

  return (
    <Routes>
      {routes.map(({path, Component}) => {
        return <Route path={path} key={path} element={<Component/>}/>
      })}
    </Routes>
  );
}

export default App;
