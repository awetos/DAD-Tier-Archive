import { createContext, useContext } from "react";
import usePreviewerInitializer from "./usePreviewInitializer";

const PreviewContext = createContext(null);

export  function PreviewerProvider({children}){
    
    const everything = usePreviewerInitializer();
    return <PreviewContext.Provider value={everything}>
        {children}
    </PreviewContext.Provider>
}

export function usePreviewerReadValues(){
    const ctxValue = useContext(PreviewContext);
    if(!ctxValue){
        throw new Error("You can only use PreviewerReadValues inside things wrapped inside PreviewProvider!");
    }
    return ctxValue;
}