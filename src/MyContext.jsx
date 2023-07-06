import { createContext,useState } from "react";
     const MyContext =  createContext();
     export default MyContext;
     export const Context = ({children})=>{
        const [data,setData] = useState('');
        const [sendData,setSendData]=useState(data);
        console.log(sendData)
        return(
            <MyContext.Provider value={{setData,setSendData,data,sendData}}>
                {children}
            </MyContext.Provider>
        )
     }