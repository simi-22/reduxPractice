import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const GrandSonBox = () => {
    let number = useSelector((state) => state.number)
  return (
    <div>GrandSonBox {number}</div>
  )
}

export default GrandSonBox