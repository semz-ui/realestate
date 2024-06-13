import Header from "@/components/Header";
import Dashboard from "@/pages/Dashboard";
import SingleApartment from "@/pages/SingleApartment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/single-apartment" element={<SingleApartment />} />
      </Routes>
    </BrowserRouter>
  );
}
