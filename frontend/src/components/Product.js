import React from 'react'
import { Card } from 'react-bootstrap'

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
                <div className="my-2">
                    {product.rating} from {product.numReviews} reviews
                </div>
            </Card.Text>
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
            </Card.Body>
        </Card>
    )
}
