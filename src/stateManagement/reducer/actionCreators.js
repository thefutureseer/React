// import { type } from "@testing-library/user-event/dist/type";
import actionTypes from "./action";

export const decrement = () => ({type: actionTypes.DECREMENT});
export const increment = () => ({type: actionTypes.INCREMENT});
export const resetCount = () => ({type: actionTypes.RESET});
export const setCount = (value) => ({type: actionTypes.SET, payload: value});
