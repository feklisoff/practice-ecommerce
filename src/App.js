import React, { useState, useEffect } from 'react'
import { Products, Navbar, Cart, Checkout } from './components'
import { commerce } from './lib/commerce'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  const [products, setProducts] = useState([])
  const initialCart = {
    id: 0, name: '', description: '', price: '', quantity: '', 
  }
  const [cart, setCart] = useState(initialCart)

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, {quantity})
    setCart(response.cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId)
    setCart(response.cart)
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty()
    setCart(response.cart)
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
              <Cart 
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart} />
            </Route>
            <Route exact path='/checkout'>
              <Checkout cart={cart}/>
            </Route>
          </Switch>
      </div>
  )
}

export default App
