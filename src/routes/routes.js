import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {
    Login,
    MainIndex,
    Products,
    NotFound,
    DashboardPage,
    StoresPage,
    CrewPage,
    ExpensesPage,
    PaymentPage,
    CashLedger,
    TransactionPage
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
                path: "",
                element: <DashboardPage />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "stores",
                element: <StoresPage />,
            },
            {
                path: "crews",
                element: <CrewPage />,
            },
            {
                path: "expenses",
                element: <ExpensesPage />,
            },
            {
                path: "payment",
                element: <PaymentPage />,
            },
            {
                path: "cash",
                element: <CashLedger />,
            },
            {
                path: "transactions",
                element: <TransactionPage />,
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