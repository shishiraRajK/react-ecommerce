import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Head Phone",
    description: "this is a Head Phone",
    price: "200 Rs",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/610SsJ5aAQL._SL1393_.jpg",
  },
  {
    id: 2,
    name: "Watch",
    description: "description of a wtch",
    price: "300 Rs",
    image:
      "https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg",
  },
  {
    id: 3,
    name: "Basket Ball",
    description: "something aboutflower",
    price: "400 Rs",
    image:
      "https://static.toiimg.com/thumb/msid-70661134,imgsize-761205,width-800,height-600,resizemode-75/70661134.jpg",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
