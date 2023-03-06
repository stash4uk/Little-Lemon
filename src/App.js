import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import OrderOnline from "./components/OrderOnline";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/order-online" element={<OrderOnline />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
