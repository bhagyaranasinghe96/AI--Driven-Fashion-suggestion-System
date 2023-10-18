import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';



import Input from './Pages/input';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
        
  
          <Route path="Input" element={<Input/>}/> 
          
          </Routes>
           </BrowserRouter> 
    </div>
  );
}

export default App;
