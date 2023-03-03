import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate, useParams} from 'react-router-dom'
import { updateProduct } from '../api/product';

const UpdateProduct = () => {
    const {id}=useParams();
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [quantity,setQuantity]=useState('');
    const [image,setImage]=useState('');
    const navigate=useNavigate()

  
    const handleUpdate=async()=>{
        await updateProduct(id,{name,price,quantity,image})
        navigate('/')
    }
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>name of product</Form.Label> 
          <Button>+</Button>
            <Form.Control type="text" placeholder="Enter your product name"
            onChange={(e)=>setName(e.target.value)}/>
          <Button>-</Button>

      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="product price" 
        onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>quantity</Form.Label>
        <Form.Control type="text" placeholder="product quantity" 
        onChange={(e)=>setQuantity(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="product image" 
        onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={()=>handleUpdate()} >
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default UpdateProduct