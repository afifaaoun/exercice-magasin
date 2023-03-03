import axios from 'axios'
//get all product
export const fetchProduct = async()=>{
    const {data}= await axios.get('http://localhost:5005/api/product/list');
    return data
}


// post new product

export const postProduct= async(value)=>{
    const addProduct= await axios.post('http://localhost:5005/api/product/add',{...value})
}

//update product

export const updateProduct = async(id,value)=>{
    const updated = await axios.put(`http://localhost:5005/api/product/update/${id}`,{...value})
}

//get article by id

export const getById =async(id)=>{
    const {data}= await axios.get(`http://localhost:5005/api/product/update/${id}`);
    return(data)
}

// delete article

export const deleteProduct = async(id)=>{
    const deleted= await axios.delete(`http://localhost:5005/api/product/remove/${id}`)
}



//npm i axios