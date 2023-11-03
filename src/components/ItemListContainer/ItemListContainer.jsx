import './ItemListContainer.css'
import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';



function ItemListContainer() {
    const [ products, setProducts ] = useState([])
    const { cid } = useParams()

    useEffect(()=>{
      if (cid) {
        mFetch()
        .then(resultado => setProducts(resultado.filter(product => product.categoria == cid)))
        .catch(error => console.log(error))
      }else{
        mFetch() 
        .then(resultado => setProducts(resultado))
        .catch(error => console.log(error))
      }
    }, [cid])

    return (
        <>
        <Container>
          <Row>
              { products.map(product =>
              
              
                          <Col>
                          <Link to={`/detalle/${product.id}`}>
                          <Card>
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body>
                              <Card.Title>{product.name}</Card.Title>
                              <Card.Text> {product.description}</Card.Text>
                              <Card.Title>${product.price}</Card.Title>
                              <Card.Text></Card.Text>
                            </Card.Body>
                          </Card>
                          </Link>
                          </Col>

            
            
              )}
                </Row>
              </Container>
        </>
    )
}

export default ItemListContainer

