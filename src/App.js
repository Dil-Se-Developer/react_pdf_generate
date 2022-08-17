import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import InvoiceForm from "./components/pages/InvoiceForm";
import InvoiceDetail from "./components/pages/InvoiceDetails";
import "./App.css";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<InvoiceForm />}></Route>
        <Route path="/invoicedetail" element={<InvoiceDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
