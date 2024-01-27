
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
// import { NotFound } from "pages/NotFound";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
   <>
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
   </>)


};
