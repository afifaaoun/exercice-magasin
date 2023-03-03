import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProduct } from '../api/product';

const DeleteProduct = () => {
    const navigate=useNavigate()
    const {id}=useParams();

  
    const handleDelete=async()=>{
        await deleteProduct(id)
        navigate('/')
    }
    
  return (
    <div className='popup'>
        <h4 >click to confirm delete</h4>
        <Button variant="primary" onClick={()=>handleDelete()} >
           delete
        </Button>
    </div>
  )
}

export default DeleteProduct


 