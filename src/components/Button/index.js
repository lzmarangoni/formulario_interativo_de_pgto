import React from 'react'
import './Button.css'

export default function Button({ label, onClick }) {

  function sendInfoCard (){

    console.log('funcionando')


  }
  return (
   <button onClick={sendInfoCard} className='buttonCustom'>{label}</button>
  )
}
