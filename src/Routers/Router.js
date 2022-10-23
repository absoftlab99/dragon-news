import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])