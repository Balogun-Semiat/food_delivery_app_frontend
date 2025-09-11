import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Landingpage/Homepage";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Layout from "../pages/LayoutPage/Layout";
import Restaurants from "../pages/Homepage/Restaurants";
import ConfirmEmail from "../Components/ConfirmEmail";
import PasswordReset from "../Components/PasswordReset";
import RegisterRest from "../Restaurants/RegisterRestaurant";
import EachRestaurantMenu from "../Restaurants/EachRestaurantMenu";
import RestaurantLogin from "../Restaurants/RestaurantLogin";
import Restaurantdashboard from "../Restaurants/Restaurantdashboard";
import CartItem from "../Restaurants/CartItem";


const router= createBrowserRouter([  
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: `/verify-email`,
                element: <ConfirmEmail />
            },
            {
                path: "/reset-pass",
                element: <PasswordReset />
            },
        ]
    },
    {
        path: '/order',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Restaurants />
            },
            {
                path: "restaurants/:id",
                element:<EachRestaurantMenu />
            },
            {
                path: "cart",
                element: <CartItem />
            }
        ]   
    }, 
    {
        path: 'restaurant',
        // element: <RegisterRest />,
        children: [
            {
                index: true,
                element: <RegisterRest />
            },
            {
                path: "/restaurant/login",
                element: <RestaurantLogin />
            },
            {
                path: "/restaurant/dashboard",
                element: <Restaurantdashboard />
            }
           
        ]

    }
]);


export default router;