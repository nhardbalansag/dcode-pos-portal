import {
    createBrowserRouter,
    RouterProvider,
    useLoaderData,
} from "react-router-dom";

import {
    Login,
    MainIndex,
    Products,
    NotFound
} from '../pages/_index'

const router = createBrowserRouter([
    {
        path: "/",
        index:true,
        loader: () => ({ message: "Hello Data Router!" }),
        Component: Login
    },
    {
        path: "/portal",
        loader: () => ({ message: "Hello Data Router!" }),
        Component: MainIndex,  
        children:[
            {
                path: "products",
                element: <Products />,
            },
        ]
    },
    {
        path:"*",
        loader: () => ({ message: "Route not found!" }),
        Component: NotFound,
    },
])

const Routes = () =>{
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default Routes;