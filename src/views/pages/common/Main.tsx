import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../home/Home";
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const Home = React.lazy(() => import("../home/Home"));

export default function Main() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={{}}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
