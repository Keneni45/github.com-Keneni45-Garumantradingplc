import React from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import { AnimatePresence } from "framer-motion";

export default function AnimateRoute() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
