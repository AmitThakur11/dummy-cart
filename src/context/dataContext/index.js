import {useContext,createContext,useReducer} from "react"
// import { products } from "../../data";
export  const dataContext =  createContext();

export default function DataProvider({children}){

    const initialValue ={
        cart : [],
        saved : [],
    }

    const reducerFn =(state,action)=>{
        const {type,payload} = action;
        switch(type){
            case "ADD TO CART" :{
                let isSaved = state.saved.some((el)=>el.id === payload.id)
                const saved = isSaved ? state.saved.filter(({id})=>id !== payload.id) : state.saved

                return {...state,cart : [...state.cart,{...payload,qty : 1}],saved : saved}
                
            }
            case "REMOVE FROM CART":{
                const filterProducts = state.cart.filter(({id})=>id !== payload.id);
                
                return {...state,cart : [...filterProducts]}
            }
            case "ADD TO SAVED" :{
                const filterProducts = state.cart.filter(({id})=>id !== payload.id);
                return {...state,saved : [...state.saved,payload],cart : [...filterProducts]}
                
            }
            case "REMOVE FROM SAVED" :{
                const filterProducts = state.saved.filter(({id})=>id !== payload.id);
                
                return {...state,saved : [...filterProducts]}

            }
            case "MOVE TO CART" :{
                const filterProducts = state.saved.filter(({id})=>id !== payload.id);
                return {...state,cart : [...state.cart,payload],saved : [...filterProducts]}
            }
            case "UPDATE QTY" :{
                console.log(payload.label)
                
                const updateQty = state[payload.label].map((item)=>{
                    if(item.id === payload.data.id){
                        item.qty = parseInt(payload.value,10)
                    }
                    return item
                })
                return {...state,[payload.label] : updateQty}
                
            }
            
            default :{
                return state
            }            
        
        }

    }

    const [state,dataDispatch] = useReducer(reducerFn,initialValue)

    const value ={state,dataDispatch}

    return <dataContext.Provider value ={value}>
        {children}
    </dataContext.Provider>
}

export const useData = ()=>useContext(dataContext)