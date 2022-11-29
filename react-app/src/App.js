import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PageProduct from "./PageProduct/PageProduct";
import PageIndex from "./PageIndex/PageIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PageIndex />} />

        <Route path="/product" element={<PageProduct />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
