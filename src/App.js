import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import NewNav from "./newComponent/AllCOmponent/NewNav";



import SingForm from "./newComponent/SingForm";
import LoginForm from "./newComponent/LoginForm";
import AdminPage from "./newComponent/adminPage";
import ClientPage from "./newComponent/clientPage";


function App() {
  return (
    <div className="App">
      <>
     



        <BrowserRouter>
        <NewNav/>
          <Routes>
            <Route path="/" element={<SingForm />}></Route>
            <Route path="/login-page" element={<LoginForm />}></Route>
            <Route path="/admin-page" element={<AdminPage />}></Route>
            <Route path="/client-page" element={<ClientPage />}></Route>
          </Routes>
        </BrowserRouter>
    
      </>
    </div>
  );
}

export default App;
