import { createContext, useState } from "react";

export const MyContext = createContext();

export const Provider = ({ children }) => {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1)
    }


    return (
        <MyContext.Provider value={{ count, handleCount }}>
            {children}
        </MyContext.Provider>
    )
}
export default Provider