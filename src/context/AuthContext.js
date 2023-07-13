import { createContext,useReducer } from "react";
import AuthRuducer from "./AuthReduce";
const INITIAL_STATE = { 
    user:{
      "_id": 
         "64119227aaab2a4bfdc724da",
      "username": "Samantha",
      "email": "samantha123@gmial.com",
      "password": "$2b$10$HGHy4Rhqroi3TZ0lNKj5DOe8frQ0e4ZUJ7mnbpGfaPYCpOpwMBD9K",
      "profilePicture": "person/gril.jpg",
      "coverPicture": "post/3.jpeg",
      "followers": [
        "64a29c46ee3081031e738562",
      ],
      "isAdmin": false,
      "createdAt": {
        "$date": "2023-03-15T09:38:47.040Z"
      },
      "updatedAt": {
        "$date": "2023-03-16T16:47:26.210Z"
      },
      "__v": 0,
      "followings": [
    
      ]
    },
           
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
