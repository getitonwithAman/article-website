import React from 'react'
import Categories from '../components/Categories/Categories'
import {categories} from "../data";

export default function CategoriesPage() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Main Categories</h1>
      <Categories categories={categories}/>
    </div>
  )
}
