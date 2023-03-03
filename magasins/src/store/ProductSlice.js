import {v4 as uuidv4} from 'uuid'
import {createSlice} from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name:"product",
    initialState:[{}],
    reducers:{
        addProduct:(state,action)=>{
            const newProduct={
                id: uuidv4(), // pour la generation des id cryptés
                ...action.payload
            }
            return[...state,newProduct]
        },
        setProduct:(state,action)=>{
            return action.payload

            // payload => data
        }
    }
})


export const {addProduct,setProduct}= ProductSlice.actions;
export default ProductSlice.reducer