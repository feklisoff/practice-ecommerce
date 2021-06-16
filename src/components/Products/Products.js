import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'

// const products = [
//     { id:1, name: 'Shoes', description: 'Running shoes', price:'$5', 
//     imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-shoe-nnTrqDGR.png'},
//     { id:2, name: 'Macbook', description: 'Apple macbook', price:'$7',
//     imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-silver-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825196932'},
//     { id:3, name: 'Dress', description: 'Pretty dress', price:'$10',
//     imageUrl: 'https://cdn-img.prettylittlething.com/d/8/4/e/d84e609962c532e472cc8f460b28d5640869a12c_CLU4305_3.JPG'}
// ]

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}


export default Products