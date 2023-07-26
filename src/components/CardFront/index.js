import './CardFront.css'

const CardFront = (props) => {
    return (
        <div className='cardFront'>
            <div className='cardContent'>
                <p id='cardNumber'> {props.cardNumber}</p>
                <div className='cardInfo'>
                    <p>{props.cardHolder}</p>
                    <div>
                        <p>{props.cardMonth}</p>
                        
                        <p>{props.cardYear}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardFront