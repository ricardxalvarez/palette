import React, { useState, useEffect } from 'react'
import {BsClipboardPlus} from 'react-icons/bs'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    },3000)
    return ()=> clearTimeout(timeout)
  },[alert])
  const toCopy = ()=>{
    navigator.clipboard.writeText(hexValue)
      setAlert(true)
  }
  return <article className={`color ${index > 4 && 'color-light' }`} style={{backgroundColor: `rgb(${bcg})`}} onClick={toCopy}>
      <BsClipboardPlus style={{position: 'absolute', right: '10px', fontSize: '20px', cursor: 'pointer', color: `${index > 4 ? 'white': 'black'}`}} onClick={toCopy}/>
    <p className='percent-value'>{weight}%</p>
    <p className="color-value">{hexValue}</p>
    {alert && <p className='alert'>copied to clipboard</p>}
  </article>
}
export default SingleColor