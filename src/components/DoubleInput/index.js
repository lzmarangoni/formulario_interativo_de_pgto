import './DoubleInput.css'

const DoubleInput = (props)=>{
    return(
        <div className='doubleInput'>
            <label>Venc. do cartão</label>
            <div >
                <input placeholder="MM" onChange={props.captureMonth}/>
                <input placeholder="AAAA"onChange={props.captureYear} style={{marginLeft:'.5rem'}}/>
            </div>
        </div>
    )

}

export default DoubleInput