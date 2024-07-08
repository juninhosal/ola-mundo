import Banner from "../Banner";
import {Outlet} from "react-router";

export const template = ({children}) => {
    return(
        <main>
            <Banner/>
            <Outlet/>
            {children}
        </main>
    )
}