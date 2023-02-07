import './CardFront.css'

const CardFront = (props)=>{
    return(
        <div className='cardFront'>
            
            <p>{props.cardNumber}</p>
            <p>{props.cardHolder}</p>
          
        </div>
    )
}

export default CardFront