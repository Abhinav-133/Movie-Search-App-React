import "./App.css";
import { SingleMovie, Root, Error, Home } from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { loader as movieLoader } from "./pages/Home";
import { loader as single } from "./pages/SingleMovie";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="/" element={<Home />} loader={movieLoader} />
      <Route path="/detail/:imdbId" element={<SingleMovie/>} loader={single}/>
      <Route path="*" element={<Error/>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
