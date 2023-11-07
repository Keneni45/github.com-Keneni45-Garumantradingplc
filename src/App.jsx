import AnimateRoute from "./Components/AnimateRoute";
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Pages/Footer";
import "./app.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <AnimateRoute />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
