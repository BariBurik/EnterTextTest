import { IRoute } from "@/models/IRoutes";
import EnterTest from "@/pages/EnterTest/EnterTest";
import Result from "@/pages/Result/Result";

export const routes: IRoute[] = [
    {
        path: '/',
        component: EnterTest
    },
    {
        path: '/results',
        component: Result
    }
]