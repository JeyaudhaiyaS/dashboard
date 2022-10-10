import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import SampleRoute from "../components/SampleRoute";
  import Landing from "../components/Landing";
 const AppRoutes = (props:any) => {
  return (
    <BrowserRouter>
    <Routes>
         <Route path='sample_route' element={<SampleRoute/>} />
         <Route path='/' element={<Landing/>} />
    </Routes>
    </BrowserRouter>
  )
  }

  export default AppRoutes