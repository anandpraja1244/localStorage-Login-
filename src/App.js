/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import "./App.css";

// import NewNav from "./newComponent/AllCOmponent/NewNav";

// import SingForm from "./newComponent/SingForm";
// import LoginForm from "./newComponent/LoginForm";
// import AdminPage from "./newComponent/adminPage";
// import ClientPage from "./newComponent/clientPage";

import { Provider } from "react-redux";
import store from "./componentStore/store/Store";

import Cart from "./componentStore/page/Cart";
import Navbar from "./componentStore/Navbar";
import TodoPage from "./NewTodoProject/TodoPage";
import FormField from "./component/AddDataCliceButton/FormField";
import User from "./RouttingRollBase/pages/User";
import Admin from "./RouttingRollBase/pages/Admin";
import Home from "./componentStore/page/Home";
import NewNavbar from "./RouttingRollBase/pages/NewNavbar";
import Quizfrst from "./component/Quizapp/Quizfrst";


function App() {
 
  // const USER_TYPES={
  //   PUBLIC:'Public User',
  //   NORMAL_USER:"Normal User",
  //   ADMIN_USER:"Admin User",
  // }
  
  // const CURRENT_USER_TYPE=USER_TYPES.ADMIN_USER
  
  // function PublicElement({children}){
  //   return <>{children} </>
  // }
  // function UserElement({children}){
  //   if(CURRENT_USER_TYPE===USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE===USER_TYPES.ADMIN_USER)
  //   return <>{children} </>;
  //   else{
  //     return <Navigate to={"/"}/>;
  //     // return  <div>do not acces page </div>
  //   }  
  // }
  // function AdminElement({children}){
  //   if(CURRENT_USER_TYPE===USER_TYPES.ADMIN_USER )
  //   return <>{children} </>;
  //   else{
  //     // return <Navigate to={"/"}/>;
  //      return  <div>do not acces page </div>
  //   }
  // }

  return (
    <div className="App">
      <>
      <Quizfrst/>
      {/* <BrowserRouter>
        <NewNavbar/>
          <Routes>
            <Route path="/home" element={<PublicElement> <Home/> </PublicElement> }></Route>
            <Route path="/user" element={<UserElement><User/> </UserElement> }></Route>
            <Route path="/admin" element={<AdminElement> <Admin /> </AdminElement>}></Route>
            <Route path="*" element={<div>Page not found</div>}></Route>
          </Routes>
        </BrowserRouter> */}

           
      <FormField />
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        {/* <Route path="/TodoPage" element={<TodoPage />}></Route> */}
                       
                    </Routes>
                </BrowserRouter>
            </Provider>

        {/* 
        <BrowserRouter> */}
        {/* <NewNav/>
          <Routes>
            
            <Route path="/" element={<SingForm />}></Route>
            <Route path="/login-page" element={<LoginForm />}></Route>
            <Route path="/admin-page" element={<AdminPage />}></Route>
            <Route path="/client-page" element={<ClientPage />}></Route>
          </Routes>
        </BrowserRouter> */}

        {/* roll Base router========================================= */}
    
       
       
      </>

      
    </div>
  );
 
}
export default App;
