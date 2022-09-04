import Admin from "./pages/Admin";
import {ADMIN_ROUTE} from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,// path: './admin',
        Component: Admin
    },

]
export const publicRoutes = [
    {
        path: './admin',

    }
]
