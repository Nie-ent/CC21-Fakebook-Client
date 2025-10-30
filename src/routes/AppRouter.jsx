import React from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import UserLayout from '../Layout/UserLayout'

const guestRouter = createBrowserRouter([
    { path: "/", element: <p>Login</p> },
    { path: "*", element: <Navigate to='/' /> }
])

const userRouter = createBrowserRouter([
    {
        path: "/", element: <UserLayout />,
        children: [
            { path: '', element: <p>Home Page</p> },
            { path: "friends", element: <p>Friends page</p> },
            { path: 'profile', element: <p>Profile Page</p> },
            { path: "*", element: <Navigate to='/' /> }
        ]
    },
])

function AppRouter() {
    const user = { username: 'andy' }
    const finalRouter = user ? userRouter : guestRouter
    return (
        <RouterProvider router={finalRouter} />
    )
}

export default AppRouter