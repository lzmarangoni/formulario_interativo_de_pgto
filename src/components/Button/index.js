import React from 'react'
import './Button.css'
import { NavLink } from 'react-router-dom'

export default function Button({ label, onClick, to }) {

  function sendInfoCard (){

    console.log('funcionando')


  }
  return (
   <NavLink to={to} onClick={sendInfoCard} className='buttonCustom'>{label}</NavLink>
  )
}
