//router
//import LayoutsRoute from './router/layouts-route';
import LayoutsRoute from "./router/main-layouts-route";

//scss files
import "./assets/scss/backend.scss";
import "./assets/css/custom.css";

function App() {
  return (
    <div className="App">
      <LayoutsRoute />
    </div>
  );
}

export default App;
