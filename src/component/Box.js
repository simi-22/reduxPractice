import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import GrandSonBox from './GrandSonBox'

const Box = () => {
  let number = useSelector((state => state.number))
  return (
    <>
    <div>this is Box{number}</div>
    <GrandSonBox />
    </>
  )
}

export default Box