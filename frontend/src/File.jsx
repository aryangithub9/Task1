import React from 'react';
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Page1 from './pages/page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './pages/page5';

function File() {
  return (

    
    <Routes>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
    </Routes>
   
  );
}

export default File;
