import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound";



export default router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }

])