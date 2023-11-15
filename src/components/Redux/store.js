import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

//this is why we installed redux toolkit 
export const store =configureStore({
    //reducer can only update value of state in store
    //reducer key is pre-defined (its is an object which can hold more than one reducer)
    reducer:{
        counter: counterSlice
    }
})