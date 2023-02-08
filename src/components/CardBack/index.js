import './CardBack.css'

const CardBack = (props)=>{
    return(
        <div className='cardBack'>
           <p id='cardcvv'>{props.Cvv}</p>
        </div>
    )
}

export default CardBack