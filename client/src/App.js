import {BrowserRouter,Routes,Route} from "react-router-dom";

import Book from "./components/Book"
import Add from "../src/components/Add"
import Update from "./components/Update"

function App() {
  return (
   <>
   <BrowserRouter>
   
   <Routes>


   <Route path="/" element={<Book/>}/>
   <Route path="/add" element={<Add/>}/>
   <Route path="/update" element={<Update/>}/>

   </Routes>
   
   
   
   </BrowserRouter>
   
   
   
   
   
   </>
  );
}

export default App;
