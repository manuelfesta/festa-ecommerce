import './ItemDetail.css'
import { useState } from "react"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const ItemDetail = ({product}) => {
    const [isCounter, setIsCounter] = useState(true)
    // console.log(product)
    const onAdd = (quantity) => {
        // console.log('productos seleccionados: ',count)
        addProduct( {...product, quantity } )
        setIsCounter(false)
        // setTimeout(()=>{
        //     setIsCounter(true)
        // }, 2000)
    }
    // console.log(cartList)

    return (

        <Container>
            <Row>
                <Col lg="6">
                    <img className='imagenPrincipal' src={product.imageUrl} alt="imagen" />
                </Col>
                <Col lg="6" className='detalleSideMenu'>
                    <div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <h4>${product.price}</h4>
                    </div>
                    <ItemCounter initial={1} stock={`${product.stock}`} onAdd={onAdd}/> 
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail