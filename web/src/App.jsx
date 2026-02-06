import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
         <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}
