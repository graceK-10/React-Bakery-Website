import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App