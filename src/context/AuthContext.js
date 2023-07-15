import { createContext,useReducer } from "react";
import AuthRuducer from "./AuthReduce";
const INITIAL_STATE = { 
    user: null,    
    isFetching: false,
    error:false,
};
export const AuthContext = createContext(INITIAL_STATE)
// children we are use beacause all components are connected authcontex se
export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthRuducer,INITIAL_STATE);
    return (
        <AuthContext.Provider 
        value ={{
          user:state.user,
          isFetching:state.isFetching,
          error:state.error,
          dispatch,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
