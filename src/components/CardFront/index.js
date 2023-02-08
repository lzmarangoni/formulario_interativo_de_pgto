import './CardFront.css'

const CardFront = (props)=>{
    return(
        <div className='cardFront'>
            
           
            <p id='cardHolder'>{props.cardHolder}</p>
            <p id='cardNumber'> {props.cardNumber}</p>
 
       
            
                <div>
                    <p>{props.cardMonth}</p>/
                    <p>{props.cardYear}</p>
                </div>
          
               
        </div>
    )
}

export default CardFront