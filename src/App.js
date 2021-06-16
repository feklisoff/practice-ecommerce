import React, { useState, useEffect } from 'react'
import { Products, Navbar, Cart } from './components'
import { commerce } from './lib/commerce'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  console.log('my cart:')
  console.log(cart)

  return (
      <div>
          <Navbar totalItems={cart.total_items} />
          <Switch>
            <Route exact path='/'>
              <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path='/cart'>
              <Cart cart={cart} />
            </Route>
          </Switch>
      </div>
  )
}

export default App
