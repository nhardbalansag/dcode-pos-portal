import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {useSelector} from 'react-redux';

import {
    getItem
} from '../store/store-index'

import { STORAGE_TOKEN, STORAGE_USER_INFORMATION } from "../store/auth/authAction";

import * as AuthAction from '../store/auth/authAction'

import {
    Login,
    MainIndex,
    Products,
    NotFound,
    DashboardPage,
    ExpensesPage,
    PaymentPage,
    CashLedger,
    TransactionPage,
    AddProduct,
    ProductIndex,
    CategoryIndex,
    Categories,
    AddProductCategory,
    StoreIndex,
    AddStore,
    Stores,
    CrewIndex,
    CrewPage,
    AddCrew,
    UpdateStore,
    UpdateCrew,
    UpdateProductCategory,
    UpdateProduct
} from '../pages/_index'

const auth_router = createBrowserRouter([
    {
        path: "/",
        index:true,
        loader: () => ({ message: "Hello Data Router!" }),
        Component: Login
    },
    {
        path:"*",
        loader: () => ({ message: "Route not found!" }),
        Component: NotFound,
    },
])

const router = createBrowserRouter([
    {
        path: "/",
        loader: () => ({ message: "Hello Data Router!" }),
        Component: MainIndex,  
        children:[
            {
                path: "",
                element: <DashboardPage />,
            },
            {
                path: "categories",
                Component: CategoryIndex,
                children:[
                    {   
                        path:"",
                        element: <Categories/>
                    },
                    {
                        path:"add-category",
                        element: <AddProductCategory/>,
                    },
                    {
                        path:"update-category",
                        element: <UpdateProductCategory/>,
                    }
                ]
            },
            {
                path: "products",
                Component: ProductIndex,
                children:[
                    {   
                        path:"",
                        element: <Products/>
                    },
                    {   
                        path:"add-product",
                        element: <AddProduct/>,
                    },
                    {   
                        path:"update-product",
                        element: <UpdateProduct/>,
                    }
                ]
            },
            {
                path: "stores",
                Component: StoreIndex,
                children:[
                    {   
                        path:"",
                        element: <Stores/>
                    },
                    {   
                        path:"add-store",
                        element: <AddStore/>,
                    },
                    {   
                        path:"update-store",
                        element: <UpdateStore/>,
                    }
                ]
            },
            {
                path: "crews",
                Component: CrewIndex,
                children:[
                    {   
                        path:"",
                        element: <CrewPage/>
                    },
                    {   
                        path:"add-crew",
                        element: <AddCrew/>,
                    },
                    {   
                        path:"update-crew",
                        element: <UpdateCrew/>,
                    }
                ]
            },
            {
                path: "accounting",
                children:[
                    {
                        path: "",
                        element: <ExpensesPage />,
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
                ]
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
    
    const data = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch()

    const validateAccess = async() =>{
        var token = await getItem(STORAGE_TOKEN)
        var userInformation = await getItem(STORAGE_USER_INFORMATION)

        dispatch(AuthAction.LoginUser(token, userInformation))
    }

    useEffect(() =>{
        if(!data.StateToken){
            validateAccess()
        }
    })

    if(data.StateToken){
        return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
    }

    return <RouterProvider router={auth_router} fallbackElement={<p>Loading...</p>} />;
}

export default Routes;