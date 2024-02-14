'use client'
import { createContext, useContext, useState } from "react";
import HomeLayout from "../page/client/layout";
import {HomeIndexContext} from "./context";

function HomeIndex({children}) {
    let [index, setIndex] = useState(0)
    return (
        <div>
            <HomeIndexContext.Provider value={{index, setIndex}}>
                {children}
            </HomeIndexContext.Provider>

        </div>
    )
}
export default HomeIndex;

