
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
// import { NotFound } from "pages/NotFound";
import { Layout } from "./Layout/Layout";
import { Catalog } from "pages/Catalog";

export const App = () => {
  return (
   <>
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Route>
      </Routes>
   </>)


};
