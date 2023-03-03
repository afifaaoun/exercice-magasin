import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProduct } from '../api/product';


const ProductCard = ({carte}) => {
  const {id}=useParams()
  const navigate=useNavigate()

const navigateProduct=()=>{
  navigate(`/updateProduct/${carte._id}`)
}
const navigateToConfirmDelete=()=>{
  navigate(`/deleteProduct/${carte._id}`)
}

  return (
    <div className='cartes'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={carte.image} />
      <Card.Body>
        <Card.Title>{carte.name}</Card.Title>
        <Card.Title>quantity : {carte.quantity}</Card.Title>
        <Card.Title>
        price : {carte.price} DT
        </Card.Title>
        <Button variant="primary" onClick={()=>{navigateToConfirmDelete()}}>delete cart</Button>
        <Button variant="primary" onClick={()=>{navigateProduct()}}>update article</Button>

      </Card.Body>
    </Card>
</div>
)}

export default ProductCard