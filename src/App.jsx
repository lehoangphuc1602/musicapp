import { useState, useEffect, useRef, Suspense, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import './config/css/App.css';
import i18n from './config/i18n/i18n';

import Navbar from "./components/Navbar";
import Language from "./components/Language";
import Sidebar from "./components/Sidebar";
import Search from './components/Search';


// import page
import Home from "./page/Home";
import NotFound from './page/NotFound';

function App() {

  
  
  const ref = useRef()

  function PublicRoute({ children }) {
    let auth = false;
    let location = useLocation();
 
    return !auth 
      ? children 
      : <Navigate to="/" state={{ from: location }} replace />;
  }
  
  function PrivateRoute({ children }) {
    let auth = true;
    let locations = useLocation();
    return auth 
      ? children
      : <Navigate to="/" state={{ from: locations }} replace />;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="Loading...">
        <Router>
          <div className="flex text-sm h-screen">
            <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar ref={ref}>
                      <Search/>
                    <Language />
                  </Navbar>
            <div className="flex h-full bg-gray-50 mb-1">
                <Sidebar />
                <main ref={ref} className="flex flex-col w-full overflow-x-hidden overflow-y-auto ml-0 sm:ml-16 -z-1">
                  <div className="w-full mx-auto">
                    <div className="flex flex-col w-full h-full">
                      <Routes>       
                        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} /> 
                        <Route path="/profile" element={<PrivateRoute></PrivateRoute>} />
                        <Route path="/" element={<PrivateRoute></PrivateRoute>} />
                        <Route path="/login" element={<PublicRoute></PublicRoute>} />
                        <Route path="/register" element={<PublicRoute></PublicRoute>} />
                        <Route path="/passwordreset" element={<PublicRoute></PublicRoute>} />
                        <Route path="/confirmresetpassword/:authToken" element={<PublicRoute></PublicRoute>} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </Router>
      </Suspense>
    </I18nextProvider>
  )
}

export default App
