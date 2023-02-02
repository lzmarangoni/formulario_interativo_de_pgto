import './DoubleInput.css'

const DoubleInput = ()=>{
    return(
        <div className='doubleInput'>
            <label>Vencimento do cartão</label>
            <div>
                <input/>
                <input style={{marginLeft:'.5rem'}}/>
            </div>
        </div>
    )

}

export default DoubleInput