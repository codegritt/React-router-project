import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";

import "./App.css";
import RootLayouts from "./layouts/RootLayouts";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={RootLayouts}>
      <Route index element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>

      {/* <Route path="help" element={<HelpLayout></HelpLayout>}>
        <Route path="faq" element={<Faq></Faq>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Route> */}
    </Route>
  )
);

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
