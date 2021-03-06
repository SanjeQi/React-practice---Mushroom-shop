import React from "react";
import { Segment, Card } from "semantic-ui-react";
import ProductCard from "./ProductCard";

const ProductsContainer = props => (
  <Segment>
    <Card.Group>
      {props.products.map(product => (
        <ProductCard
          product={product}
          addToCart={props.addToCart}
          key={product.id}
        />
      ))}
    </Card.Group>
  </Segment>
);

export default ProductsContainer;
