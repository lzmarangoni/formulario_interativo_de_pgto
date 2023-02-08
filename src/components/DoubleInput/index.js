import './DoubleInput.css'

const DoubleInput = (props)=>{
    return(
        <div className='doubleInput'>
            <label>Vencimento do cartão</label>
            <div>
                <input onChange={props.captureMonth}/>
                <input onChange={props.captureYear} style={{marginLeft:'.5rem'}}/>
            </div>
        </div>
    )

}

export default DoubleInput