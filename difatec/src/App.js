import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddCategory } from "./pages/add-categories";
import { AddTask } from "./pages/add-task";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      {/* <AddCategory />
      <AddTask />
      <Login />
      <Signup /> */}
      <Home />
    </div>
  );
}

export default App;
