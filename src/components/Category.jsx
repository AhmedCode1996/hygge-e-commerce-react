import React from 'react'
import { motion } from 'framer-motion'
import './category.css'
const Category = ({image, title}) => {
  return (
   <motion.article className='category'>
   <img className='category-image' src={image} alt={title} />
   <h3 className='category-title'>{title}</h3>
   </motion.article>
  )
}

export default Category