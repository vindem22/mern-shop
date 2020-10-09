import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'

export default function Product({product}) {
    return (
        <Card className="my-3 p-3 rounded">
            <a href="{`/product/${product.id}`}"></a>
            <Card.Img src={product.image} variant='top'/>
            <Card.Body>
            <a href="{`/product/${product.id}`}">
                <Card.Title as='div'>
                    <strong>
                    {product.name}
                    </strong>
                </Card.Title>
            </a>
            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>            
            </Card.Text>
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
            </Card.Body>
        </Card>
    )
}
