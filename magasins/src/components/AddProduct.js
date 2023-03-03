import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postProduct } from '../api/product';

const AddProduct = () => {
 const [name,setName]=useState('')
 const [price,setPrice]=useState('')
 const [quantity,setQuantity]=useState('')
 const [image,setImage]=useState('')

const handleAdd = async(value)=>{
    await postProduct(value)
}

console.log(name);
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>name of product</Form.Label>
        <Form.Control type="text" placeholder="Enter your product name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="product price" onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>quantity</Form.Label>
        <Form.Control type="text" placeholder="product quantity" onChange={(e)=>setQuantity(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="product image" onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={()=>handleAdd({name,price,quantity,image})}>
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default AddProduct


