import { configureStore } from '@reduxjs/toolkit'
import users from '../reducers/Users'
import categories from '../reducers/Categories'
import products from '../reducers/Products'
export const store = configureStore({
  reducer: {
    users,
    categories,
    products
  },
})