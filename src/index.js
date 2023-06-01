import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
{
  path: "/",
  element: <About />,
},
{
  path: "/skills",
  element: <Skills />,
},
{
  path: "/projects",
  element: <Projects />,
},
{
  path: "/contact",
  element: <Contact />,
},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
