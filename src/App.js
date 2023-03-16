import {createBrowserRouter,Routes,Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';

import './App.css';
import RootLayouts from './layouts/RootLayouts';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Routes path="/" element={RootLayouts}>
<Route index element={<Home></Home>}></Route>
<Route path="/about" element={<About></About>}></Route>

<Route path="/help" element={<Home></Home>}>

  
</Route>

</Routes>
  )
)

function App() {
  return (
//     <BrowserRouter>
//     <header>
// <nav>
//   <h1>React router</h1>
//   <Link to={"/"}>Home</Link>
//   <br></br>
//   <br></br>
//   <NavLink to={"/about"}>About</NavLink>
// </nav>

//     </header>
//     <main>
// <Routes>
// <Route path="/" element={<Home></Home>}></Route>
// <Route path="/about" element={<About></About>}></Route>

// </Routes>

//     </main>
    
//     </BrowserRouter>

<RouterProvider router={router}></RouterProvider>
   
  );
}

export default App;
