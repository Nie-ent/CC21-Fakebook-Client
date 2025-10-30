import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import UserLayout from '../Layout/UserLayout'
import { lazy, Suspense } from 'react'

const Login = lazy(() => import('../pages/LoginPage'))
const Home = lazy(() => import('../pages/HomePage'))
const Friends = lazy(() => import('../pages/FriendPage'))
const ProfilePage = lazy(() => import('../pages/ProfilePage'))

const guestRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "*", element: <Navigate to='/' /> }
])

const userRouter = createBrowserRouter([
    {
        path: "/", element: <UserLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: "friends", element: <Friends /> },
            { path: 'profile', element: <ProfilePage /> },
            { path: "*", element: <Navigate to='/' /> }
        ]
    },
])

function AppRouter() {
    // const user = { username: 'andy' }
    const user = null
    const finalRouter = user ? userRouter : guestRouter
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={finalRouter} />
        </Suspense>
    )
}

export default AppRouter